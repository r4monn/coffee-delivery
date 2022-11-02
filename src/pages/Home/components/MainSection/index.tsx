import { MainSectionContainer, MainSectionContent, ProsContainer } from "./styles";
import MainSectionImg from '../../../../assets/MainSection-img.png'
import { ProsBrand } from "../../../../components/ProsBrand";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from "styled-components";

export function MainSection() {
  const { colors } = useTheme()

  return (
    <MainSectionContainer>
      <MainSectionContent className="container">
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe o seu café onde estiver, a qualquer hora!</p>

          <ProsContainer>
            <ProsBrand
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors["brand-yellow-dark"]}
              text='Compra simples e segura'
            />
            <ProsBrand
              icon={<Package weight="fill" />}
              iconBg={colors["base-text"]}
              text='Embalagem que mantém o café intacto'
            />
            <ProsBrand
              icon={<Timer weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text='Entrega rápida e rastreada'
            />

            <ProsBrand
              icon={<Coffee weight="fill" />}
              iconBg={colors["brand-purple"]}
              text='O café chega fresquinho até você'
            />
          </ProsContainer>
        </section>


        <img src={MainSectionImg} />
      </MainSectionContent>
    </MainSectionContainer>
  )
}