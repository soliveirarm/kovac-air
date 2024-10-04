import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import Flight from "../../components/Flight/Flight"
import "./Flights.css"
import { FlightProps } from "../../types"

type FlightsProps = {
  flights: FlightProps[]
  addToDreams: (i: number) => void
  buy: (i: number) => void
}

export default function Flights({ flights, addToDreams, buy }: FlightsProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Voos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Voos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {flights.map((flight, i) => (
            <Flight
              key={i}
              {...flight}
              addToDreams={() => addToDreams(i)}
              buy={() => buy(i)}
            />
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  )
}
