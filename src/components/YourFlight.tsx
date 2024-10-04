import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonText,
} from "@ionic/react"
import { YourFlightProps } from "../types"
import { formatPrice } from "../utils/format-price"

export default function YourFlight({
  airline,
  airlineCode,
  airplane,
  price,
  city,
  country,
  seat,
  refund,
}: YourFlightProps) {
  return (
    <IonItemSliding>
      <IonItemOptions>
        <IonItemOption color="danger" onClick={refund}>
          Reembolsar
        </IonItemOption>
      </IonItemOptions>

      <IonItem>
        <IonText>
          <h2>
            {city} - {country}
          </h2>
          <p>Companhia: {airline}</p>
          <p>Código: {airlineCode}</p>
          <p className="capitalize">Avião: {airplane}</p>
          <p>Preço: {formatPrice(price)}</p>
          <p>Assento: {seat}</p>
        </IonText>
      </IonItem>
    </IonItemSliding>
  )
}
