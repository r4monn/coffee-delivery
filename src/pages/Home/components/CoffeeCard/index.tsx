import { AddCartWrapper, CardFooter, CoffeeCardContainer, CoffeeTag } from "./styles";
import { AmountCoffeeInput } from "../../../../components/AmoutCoffeeInput";
import { ShoppingCart } from 'phosphor-react'
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  img: string;
  price: number;
  quantity?: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseCoffeeQuantity() {
    setQuantity(state => state + 1)
  }

  function handleDecreaseCoffeeQuantity() {
    setQuantity(state => state - 1)
  }

  const { addNewCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee, quantity
    }
    addNewCoffeeToCart(coffeeToAdd)
  }

  function formatPrice(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  }

  const formattedPrice = formatPrice(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`src/assets/coffees/${coffee.img}`} alt="" />

      <CoffeeTag>
        {coffee.tags.map(tag => <span key={`${coffee.id}${tag}`}>{tag}</span>)}
      </CoffeeTag>

      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <CardFooter>
        <div>
          <span>R$</span>
          <h3>{formattedPrice}</h3>
        </div>

        <AddCartWrapper>
          <AmountCoffeeInput
            onIncrease={handleIncreaseCoffeeQuantity}
            onDecrease={handleDecreaseCoffeeQuantity}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}