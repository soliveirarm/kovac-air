import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"

import { FlightProps } from "../types"

import YourFlight from "../components/YourFlight"

type YourFlightsProps = {
  yourFlights: FlightProps[]
  refund: (i: number) => void
}

export default function YourFlights({ yourFlights, refund }: YourFlightsProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Seus pacotes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Seus pacotes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {yourFlights.map((yourFlight, i) => (
            <YourFlight key={i} refund={() => refund(i)} {...yourFlight} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}
