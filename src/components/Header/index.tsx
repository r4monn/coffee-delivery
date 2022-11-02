import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeeLogo from '../../assets/coffeeLogo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to='/'>
          <img src={coffeeLogo} alt='Coffee Delivery' />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill' />
            Rio de Janeiro, RJ
          </HeaderButton>

          <NavLink to='/checkOut'>
            <HeaderButton variant="yellow">
              {cartQuantity > 0 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}