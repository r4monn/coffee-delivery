import { CheckOutForm } from "./components/CheckOutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckOutContainer } from "./styles";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  monye = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(8, 'Informe a rua'),
  number: zod.string().min(1, 'Insira o número da rua'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(4, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe a UF').max(2, 'UF inválida'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    }
  }),
})

export function CheckOutPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { cleanCart } = useCart();

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckOutContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CheckOutForm />
        <SelectedCoffees />
      </CheckOutContainer>
    </FormProvider>
  )
}