import { Validation } from "lib/validation";
import { useState } from "react";

export const useInput = <T = string>(
  initialValue: T,
  required = true,
): {
  value: T;
  error: string;
  setError: (error: string) => void;
  required: boolean;
  onChange: (event) => void;
} => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState("");
  return {
    value,
    error,
    setError,
    required,
    onChange: (event): void => {
      const key = event.target.name;
      const newValue = event.target.value as T;
      setValue(newValue);
      setError(Validation.formValidate(key, newValue as unknown as string, required));
    },
  };
};
