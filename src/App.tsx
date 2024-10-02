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
import { airplaneOutline, giftOutline, cubeOutline } from "ionicons/icons"
import Flights from "./pages/Flights"
import Dreams from "./pages/Dreams"
import YourPackages from "./pages/YourPackages"

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

/* Theme variables */
import "./theme/variables.css"

setupIonicReact()

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/voos">
              <Flights />
            </Route>
            <Route exact path="/sonhos">
              <Dreams />
            </Route>
            <Route path="/pacotes">
              <YourPackages />
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
