export type FlightProps = {
  airline: string
  airport: string
  airplane: string
  airlineCode: string
  flightNumber: string
  cover: string
  price: number
  addToDreams?: () => void
  buy?: () => void
}
