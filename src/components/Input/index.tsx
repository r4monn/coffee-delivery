import { forwardRef, InputHTMLAttributes } from "react";
import { InputError, InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputError className={className}>
        <InputStyleContainer hasError={!!error} {...props} ref={ref} />
        {error && (<p>{error}</p>)}
      </InputError>
    )
  }
)