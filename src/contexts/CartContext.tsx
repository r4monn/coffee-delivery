import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addNewCoffeeToCart: (coffee: CartItem) => void;
  handleCartItemQuantity: (cartItemId: number, action: 'increase' | 'decrease') => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const LocalStorageKey = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(LocalStorageKey)

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    } else {
      return [];
    }
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)

  function addNewCoffeeToCart(coffee: CartItem) {
    const isCoffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);

    const newCart = produce(cartItems, (draft) => {
      if (isCoffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[isCoffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function handleCartItemQuantity(cartItemId: number, action: 'increase' | 'decrease') {
    console.log(cartItems)
    const newCart = produce(cartItems, (draft) => {
      const isItemAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (isItemAlreadyExistsInCart >= 0) {
        const item = draft[isItemAlreadyExistsInCart];
        draft[isItemAlreadyExistsInCart].quantity =
          action === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCartItems = cartItems.filter((item) => item.id !== cartItemId)
    setCartItems(newCartItems);
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{
      cartItems,
      cartQuantity,
      cartItemsTotal,
      addNewCoffeeToCart,
      handleCartItemQuantity,
      removeCartItem,
      cleanCart
    }}>
      {children}
    </CartContext.Provider>
  )
}