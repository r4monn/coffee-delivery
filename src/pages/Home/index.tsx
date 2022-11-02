import { useCart } from "../../hooks/useCart";
import { MainSection } from "./components/MainSection";
import { MenuSection } from "./components/MenuSection";
import { HomeContainer } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <MainSection />

      <MenuSection />
    </HomeContainer>
  )
}