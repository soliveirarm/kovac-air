type FlightProps = {
  airline: string
  airport: string
  airplane: string
  airlineCode: string
  flightNumber: string
  cover: string
  price: number
  seat: string
  city: string
  country: string
  addToDreams?: () => void
  buy?: () => void
}

type DreamProps = FlightProps & {
  deleteFromDreams: () => void
}

type YourFlightProps = FlightProps & {
  refund: () => void
}

export type { FlightProps, DreamProps, YourFlightProps }
