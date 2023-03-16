// import { API_URL } from '../../config'
import { get, post } from '../ApiCaller'

const BOOK_FLIGHT_URL = API_URL + '/v1/api/tickets'
const GET_AIRPORT_URL = API_URL + '/v1/api/airports'
const GET_AIRCRAFT_URL = API_URL + '/v1/api/aircrafts'
const GET_FLIGHT_URL = API_URL + '/v1/api/flights'
const RETRIEVE_TICKET_URL = API_URL + '/v1/api/tickets/retrieve'
const SEARCH_FLIGHT_URL = API_URL + '/v1/api/flights/search'
const CANCEL_TICKET_URL = API_URL + '/v1/api/tickets/cancel'
const GET_SEAT_URL = API_URL + '/v1/api/seats'
const GET_AVAILABLE_SEAT_URL = API_URL + '/v1/api/seats/available-seat/'
const GET_FLIGHT_BY_ID_URL = API_URL + '/v1/api/flights/'
const SEND_EMAIL_URL = API_URL + '/v1/api/tickets/send-email'

export default {
  // {
  // 	accountId:,
  // 	customer: {
  // 		id: ,
  // 		firstName: ,
  // 		lastName: ,
  // 		gender: ,
  // 		email: ,
  // 		phoneNumber:
  // 	},
  // 	flightId: ,
  // 	seatCode: ,
  // 	price:
  // }
  bookFlight: (data) => {
    return post(BOOK_FLIGHT_URL, data)
  },
  getAirport: () => {
    return get(GET_AIRPORT_URL)
  },
  getAircraft: () => {
    return get(GET_AIRCRAFT_URL)
  },
  getFlight: () => {
    return get(GET_FLIGHT_URL)
  },
  // {
  // 	reservationCode:
  // }
  retrieveTicket: (data) => {
    return get(RETRIEVE_TICKET_URL, data)
  },
  // {
  // 	"departureCode":,
  // 	"arrivalCode": ,
  // 	"departDate":
  // }
  searchFlight: (data) => {
    return get(SEARCH_FLIGHT_URL, data)
  },
  // {
  // 	"reservationCode": "iLzDZI"
  // }
  cancelTicket: (data) => {
    return post(CANCEL_TICKET_URL, data)
  },
  getSeat: () => {
    return get(GET_SEAT_URL)
  },
  getAvailableSeat: (id) => {
    return get(GET_AVAILABLE_SEAT_URL + id)
  },
  getFlightById: (id) => {
    return get(GET_FLIGHT_BY_ID_URL + id)
  },
  // {
  // 	"reservationCode": "",
  // 	"email": ""
  // }
  sendEmail: (data) => {
    return post(SEND_EMAIL_URL, data)
  },
}
