import { PaymentMethodsContent, PaymentMethodsInputContainer } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodsInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodsInput = forwardRef<HTMLInputElement, PaymentMethodsInputProps>(({
  id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodsInputContainer>
      <input id={id} type="radio" {...props} name='paymentMethod' ref={ref} />
      <label htmlFor={id}>
        <PaymentMethodsContent>
          {icon}
          {label}
        </PaymentMethodsContent>
      </label>
    </PaymentMethodsInputContainer>
  )
})