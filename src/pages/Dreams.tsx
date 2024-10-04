import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react"
import { FlightProps } from "../types"
import Dream from "../components/Dream/Dream"
import { checkmarkCircle } from "ionicons/icons"

type DreamsProps = {
  dreams: FlightProps[]
  deleteFromDreams: (i: number) => void
}

export default function Dreams({ dreams, deleteFromDreams }: DreamsProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sonhos de Consumo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sonhos de Consumo</IonTitle>
          </IonToolbar>
        </IonHeader>
        {dreams.map((dream, i) => (
          <Dream
            deleteFromDreams={() => deleteFromDreams(i)}
            key={i}
            {...dream}
          />
        ))}
      </IonContent>
      <IonToast
        trigger="delete-from-dreams"
        message="Voo excluído!"
        duration={1500}
        icon={checkmarkCircle}
      />
    </IonPage>
  )
}
