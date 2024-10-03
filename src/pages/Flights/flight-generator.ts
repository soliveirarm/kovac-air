import { FlightProps } from "../../types/flight-props"
import { faker } from "@faker-js/faker"

const { airline, flightNumber, airplane, airport } = faker.airline

export const flightsMock: FlightProps[] = []
const IMAGES = ["plane-1.jpg", "plane-2.jpg", "plane-3.jpg", "plane-4.jpg"]

// Função para popular o array
const getFlights = () => {
  const { name, iataCode } = airline()
  const randomPrice = +(Math.random() * 1200).toFixed(2)
  const randomImage = Math.floor(Math.random() * IMAGES.length)
  const randomNumber = flightNumber()

  flightsMock.push({
    airline: name,
    airport: airport.name,
    airplane: airplane.name,
    airlineCode: iataCode,
    flightNumber: randomNumber,
    cover: IMAGES[randomImage],
    price: randomPrice,
  })
}

let i = 0
while (i < 20) {
  getFlights()
  i++
}
