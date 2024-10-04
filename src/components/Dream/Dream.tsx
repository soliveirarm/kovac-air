import {
  IonThumbnail,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonIcon,
} from "@ionic/react"
import { DreamProps } from "../../types"
import { formatPrice } from "../../utils/format-price"
import "./Dream.css"
import { closeCircleOutline } from "ionicons/icons"

export default function Dream({
  airline,
  city,
  country,
  cover,
  airport,
  price,
  deleteFromDreams,
}: DreamProps) {
  return (
    <IonList className="ion-padding dream">
      <IonItem>
        <IonThumbnail class="dream__thumbnail">
          <img src={cover} />
        </IonThumbnail>
        <IonLabel>
          <h2>
            {city} - {country}
          </h2>
          <p>{airline}</p>
          <p className="dream__airport">Aeroporto: {airport}</p>
          <p>{formatPrice(price)}</p>
        </IonLabel>
        <IonButton
          id="delete-from-dreams"
          fill="clear"
          onClick={deleteFromDreams}
        >
          <IonIcon icon={closeCircleOutline} color="danger" />
        </IonButton>
      </IonItem>
    </IonList>
  )
}
