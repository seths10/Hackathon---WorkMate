/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "../constants/app";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../navigation/routes-constants";

export function useSignup() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    firstname: string,
    lastname: string,
    password: string,
    email: string
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, password, email }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      toast.error(json.data)
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      toast.success(json.data)
      navigate(LOGIN)
    }
  };

  return { error, isLoading, signup };
}
