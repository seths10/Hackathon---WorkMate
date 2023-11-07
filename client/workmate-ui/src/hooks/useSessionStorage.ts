import * as React from "react";
import { useEventListener } from "./useEventListener";

declare global {
  interface WindowEventMap {
    "session-storage": CustomEvent;
  }
}

export type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const readValue = React.useCallback((): T => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = React.useState<T>(readValue);

  const setValue: SetValue<T> = (value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window == "undefined") {
      console.warn(
        `Tried setting sessionStorage key “${key}” even though environment is not a client`
      );
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.sessionStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);

      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting sessionStorage key “${key}”:`, error);
    }
  };

  React.useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  const handleStorageChange = React.useCallback(() => {
    setStoredValue(readValue());
  }, [readValue]);

  useEventListener("storage", handleStorageChange);

  useEventListener("session-storage", handleStorageChange);

  return [storedValue, setValue];
}

export { useSessionStorage };

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    return undefined;
  }
}
