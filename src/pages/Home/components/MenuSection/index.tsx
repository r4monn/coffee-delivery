import { coffees } from "../../coffeeslist";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeesMenu, MenuSectionContainer, MenuSectionContent } from "./styles";

export function MenuSection() {
  return (
    <MenuSectionContainer>
      <MenuSectionContent className="container">
        <h2>Nossos cafés</h2>

        <CoffeesMenu>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesMenu>
      </MenuSectionContent>
    </MenuSectionContainer>
  )
}