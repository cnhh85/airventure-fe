import { API_URL, LOCALSTORAGE_TOKEN_NAME } from '../../config'
import { get } from '../ApiCaller'
import LocalStorageUtils from '../LocalStorageUtils'

const RETRIEVE_BOOKING_HISTORY_URL = API_URL + '/v1/api/accounts/booking-history'

export default {
  // {
  //   "accountId":
  // }
  retrieveBookingHistory: (data) => {
    const TOKEN = LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)
    return get(RETRIEVE_BOOKING_HISTORY_URL, data, {}, { Authorization: `Bearer ${TOKEN}` })
  },
}
