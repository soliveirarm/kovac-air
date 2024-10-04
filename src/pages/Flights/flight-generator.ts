import { FlightProps } from "../../types"
import { faker } from "@faker-js/faker"

const { airline, flightNumber, airplane, airport, seat } = faker.airline
const { city, country } = faker.location

export const flightsMock: FlightProps[] = []
const IMAGES = ["plane-1.jpg", "plane-2.jpg", "plane-3.jpg", "plane-4.jpg"]

// Função para popular o array
const getFlights = () => {
  const { name, iataCode } = airline()
  const randomPrice = +(Math.random() * 1200).toFixed(2)
  const randomImage = Math.floor(Math.random() * IMAGES.length)

  flightsMock.push({
    airline: name,
    airport: airport.name,
    airplane: airplane.name,
    airlineCode: iataCode,
    flightNumber: flightNumber(),
    cover: IMAGES[randomImage],
    price: randomPrice,
    seat: seat(),
    city: city(),
    country: country(),
  })
}

let i = 0
while (i < 20) {
  getFlights()
  i++
}
