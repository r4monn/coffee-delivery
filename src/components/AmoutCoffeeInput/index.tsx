import { Minus, Plus } from "phosphor-react";
import { AmountCoffeeInputContainer, IconWrapper } from "./styles";

interface AmountCoffeeInputProps {
  size?: 'medium' | 'small';
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function AmountCoffeeInput({ size = 'medium', onIncrease, onDecrease, quantity }: AmountCoffeeInputProps) {
  return (
    <AmountCoffeeInputContainer size={size}>

      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight='fill' />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight='fill' />
      </IconWrapper>
    </AmountCoffeeInputContainer>
  )
}