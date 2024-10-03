import {
  IonCard,
  IonHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from "@ionic/react"
import { FlightProps } from "../types/flight-props"
import { gift, card } from "ionicons/icons"

export default function Flight({
  airline,
  flightNumber,
  airlineCode,
  cover,
  price,
  addToDreams,
  buy,
}: FlightProps) {
  return (
    <IonCard key={flightNumber}>
      <img src={cover} />
      <IonHeader class="ion-padding">
        <IonCardTitle>
          {airline} - {airlineCode}
        </IonCardTitle>
      </IonHeader>
      <IonCardContent>Número do Voo: {flightNumber}</IonCardContent>
      <IonCardContent className="flight-price">
        R${price.toString().replace(".", ",")}
      </IonCardContent>
      <IonButton fill="outline">
        <IonIcon slot="start" icon={gift} onClick={addToDreams} />
        Adicionar a lista
      </IonButton>
      <IonButton color="success">
        <IonIcon slot="start" icon={card} onClick={buy} />
        Comprar
      </IonButton>
    </IonCard>
  )
}
