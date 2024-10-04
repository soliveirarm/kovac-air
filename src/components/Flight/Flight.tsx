import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonCardSubtitle,
  IonCardHeader,
} from "@ionic/react"
import { FlightProps } from "../../types"
import { gift, card } from "ionicons/icons"
import { formatPrice } from "../../utils/format-price"
import "./Flight.css"

export default function Flight({
  airline,
  flightNumber,
  city,
  country,
  cover,
  price,
  addToDreams,
  buy,
}: FlightProps) {
  return (
    <IonCard key={flightNumber}>
      <img src={cover} />
      <IonCardHeader class="ion-padding">
        <IonCardSubtitle>{airline}</IonCardSubtitle>
        <IonCardTitle>
          {city} - {country}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Número do Voo: {flightNumber} <br />
        <span className="flight__price">{formatPrice(price)}</span>
      </IonCardContent>

      <IonButton fill="outline" onClick={addToDreams}>
        <IonIcon slot="start" icon={gift} />
        Adicionar a lista
      </IonButton>
      <IonButton color="success" onClick={buy}>
        <IonIcon slot="start" icon={card} />
        Comprar
      </IonButton>
    </IonCard>
  )
}
