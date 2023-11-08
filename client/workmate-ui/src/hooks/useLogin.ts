/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";
import { BASE_URL } from "../constants/app";
import { LANDING } from "../navigation/routes-constants";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (password: any, email: any) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      toast.error(json.data);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      toast.success(`Welcome  ${json.data.firstname}`);
      navigate(LANDING);
    }
  };

  return { error, isLoading, login };
}
