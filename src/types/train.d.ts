interface TrainBase {
  id: number
  destination: string
  departure: string
  platform: string
  vehicle_journey: string
}

interface OnTimeTrain extends TrainBase {
  status: "À l'heure"
}

interface DelayedTrain extends TrainBase {
  status: "En retard"
  disruption: {
    cause: string
    new_departure: string
  }
}

type Train = OnTimeTrain | DelayedTrain;