import {
  AddreesFormContainer,
  CheckOutFormContainer,
  FormSectionContainer,
  PaymentMethodsContainer
} from "./styles";

import { FormSectionHeader } from "../FormSectionHeader";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { useTheme } from "styled-components";
import { Input } from "../../../../components/Input";
import { PaymentMethodsInput } from "../PaymentMethodsInput";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />
  }
}

export function CheckOutForm() {
  const { colors } = useTheme();

  const { register, formState } = useFormContext();
  const { errors } = formState as ErrorsType;


  const paymentMethodError = errors?.paymentMethod?.message as string;

  return (
    <CheckOutFormContainer>
      <h5>Complete seu pedido</h5>

      <FormSectionContainer>
        <FormSectionHeader
          title='Endereço de Entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido'
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />

        <AddreesFormContainer>
          <Input
            placeholder='CEP'
            type='number'
            className='cep'
            {...register('cep')}
            error={errors.cep?.message}
          />
          <Input
            placeholder='Rua'
            type='text'
            className='street'
            {...register('street')}
            error={errors.street?.message}
          />
          <Input
            placeholder='Número'
            type='number'
            className='number'
            {...register('number')}
            error={errors.number?.message}
          />
          <Input
            placeholder='Complemento'
            type='text' className='complement'
            {...register('complement')}
          />
          <Input
            placeholder='Bairro'
            type='text'
            {...register('district')}
            error={errors.district?.message}
          />
          <Input
            placeholder='Cidade'
            type='text'
            className='city'
            {...register('city')}
            error={errors.city?.message}
          />
          <Input
            placeholder='UF'
            type='text'
            {...register('uf')}
            error={errors.uf?.message}
          />
        </AddreesFormContainer>
      </FormSectionContainer>

      <FormSectionContainer>
        <FormSectionHeader
          title='Pagamento'
          subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
        />

        <PaymentMethodsContainer>

          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentMethodsInput
              key={label}
              id={key}
              icon={icon}
              label={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))}
          {paymentMethodError && <p>{paymentMethodError}</p>}
        </PaymentMethodsContainer>
      </FormSectionContainer>
    </CheckOutFormContainer>
  )
}