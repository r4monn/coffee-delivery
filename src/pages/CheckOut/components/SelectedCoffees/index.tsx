import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmButtonContainer, DetailsContainer, SelectedCoffeesContainer, TotalCostContainer } from "./styles";

const deliveryPrice = 3.90;

export function SelectedCoffees() {
  const { cartItems, cartItemsTotal } = useCart();

  const cartTotal = deliveryPrice + cartItemsTotal;

  function formatPrice(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  }

  return (
    <SelectedCoffeesContainer>
      <h5>Cafés selecionados</h5>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={`coffee${item.id}`} coffee={item} />
        ))}

        <TotalCostContainer>
          {cartItems.length == 0 ? <p>Não há itens no carrinho</p> : <>
            <div>
              <p>Total de itens</p>
              <p>R$ {formatPrice(cartItemsTotal)}</p>
            </div>
            <div>
              <p>Frete</p>
              <p>R$ {formatPrice(deliveryPrice)}</p>
            </div>
            <div>
              <h4>Total</h4>
              <h4>R$ {formatPrice(cartTotal)}</h4>
            </div>
          </>}

          <ConfirmButtonContainer disabled={cartItems.length <= 0} type='submit'>
            confirmar pedido
          </ConfirmButtonContainer>
        </TotalCostContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}