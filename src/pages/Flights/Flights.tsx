import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import Flight from "../../components/Flight"
import "./Flights.css"

import { FlightProps } from "../../types/flight-props"
import { useLocalStorage } from "usehooks-ts"
import { useEffect } from "react"
import { flightsMock } from "./flight-generator"

export default function Flights() {
  // Array vazio que receverá voos aleatórios
  const [flights, setFlights] = useLocalStorage<FlightProps[]>("flights", [])

  useEffect(() => {
    if (flights.length === 0) setFlights(flightsMock)
  }, [])

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
            <Flight key={i} {...flight} />
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  )
}
