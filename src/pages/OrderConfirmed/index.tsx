import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import CoffeDeliveryIllustration from '../../assets/coffee-delivery.svg'
import { ProsBrand } from "../../components/ProsBrand";
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CheckOut";
import { paymentMethods } from "../CheckOut/components/CheckOutForm";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h2>Uhu! Pedido confimado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <ProsBrand
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <p>
                Entrega em <strong>{state.street}, {state.number}</strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </p>
            }
          />
          <ProsBrand
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <p>
                Previsão de Entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
          />
          <ProsBrand
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
          />
        </OrderDetailsContainer>

        <img src={CoffeDeliveryIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}