import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { AmountCoffeeInput } from "../../../../components/AmoutCoffeeInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { handleCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    handleCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    handleCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItemOfCart() {
    removeCartItem(coffee.id)
  }

  const totalPrice = coffee.price * coffee.quantity;

  function formatPrice(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  }

  const formattedPrice = formatPrice(totalPrice);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`src/assets/coffees/${coffee.img}`} alt="" />
        <div>
          <h6>{coffee.name}</h6>

          <ActionsContainer>
            <AmountCoffeeInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemoveItemOfCart}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}