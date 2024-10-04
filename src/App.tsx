import { Redirect, Route } from "react-router-dom"
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { airplaneOutline, giftOutline, cubeOutline, add } from "ionicons/icons"

import Flights from "./pages/Flights/Flights"
import Dreams from "./pages/Dreams"
import YourFlights from "./pages/YourFlights"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css"

import { useEffect } from "react"
import { FlightProps } from "./types"
import { useLocalStorage } from "usehooks-ts"
import { flightsMock } from "./pages/Flights/flight-generator"

setupIonicReact()

export default function App() {
  // Array vazio que receverá voos aleatórios
  const [flights, setFlights] = useLocalStorage<FlightProps[]>("flights", [])
  const [dreams, setDreams] = useLocalStorage<FlightProps[]>("dreams", [])
  const [yourFlights, setYourFlights] = useLocalStorage<FlightProps[]>(
    "yourFlights",
    []
  )

  const addToDreams = (i: number) => {
    const flight = flights[i]
    setDreams([...dreams, flight])
    const filteredArray = flights.filter((_item, index) => index !== i)
    setFlights(filteredArray)
  }

  const deleteFromDreams = (i: number) => {
    const flight = dreams[i]
    setFlights([...flights, flight])
    const filteredArray = dreams.filter((_item, index) => index !== i)
    setDreams(filteredArray)
  }

  const buy = (i: number) => {
    const flight = flights[i]
    setYourFlights([...yourFlights, flight])
    const filteredArray = flights.filter((_item, index) => index !== i)
    setFlights(filteredArray)
  }

  const refund = (i: number) => {
    const flight = yourFlights[i]
    setFlights([...flights, flight])
    const filteredArray = yourFlights.filter((_item, index) => index !== i)
    setYourFlights(filteredArray)
  }

  useEffect(() => {
    if (!flights.length) setFlights(flightsMock)
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/voos">
              <Flights flights={flights} addToDreams={addToDreams} buy={buy} />
            </Route>
            <Route exact path="/sonhos">
              <Dreams deleteFromDreams={deleteFromDreams} dreams={dreams} />
            </Route>
            <Route path="/pacotes">
              <YourFlights yourFlights={yourFlights} refund={refund} />
            </Route>
            <Route exact path="/">
              <Redirect to="/voos" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="voos" href="/voos">
              <IonIcon aria-hidden="true" icon={airplaneOutline} />
              <IonLabel>Voos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="sonhos" href="/sonhos">
              <IonIcon aria-hidden="true" icon={giftOutline} />
              <IonLabel>Sonhos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="pacotes" href="/pacotes">
              <IonIcon aria-hidden="true" icon={cubeOutline} />
              <IonLabel>Seus pacotes</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}
