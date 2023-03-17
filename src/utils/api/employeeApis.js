import { LOCALSTORAGE_TOKEN_NAME } from '../../config'
import { post } from '../ApiCaller'
import LocalStorageUtils from '../LocalStorageUtils'

const SEND_PAYMENT_EMAIL_URL = '/v1/api/tickets/send-payment-email'
const VERIFY_TRANSACTION_URL = '/v1/api/invoices/verify-transaction'

export default {
  // {
  //   "reservationCode": "pBMMFj",
  //   "email": "huynhhuy2002@gmail.com"
  // }
  sendPaymentEmail: (data) => {
    const TOKEN = LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)
    return post(SEND_PAYMENT_EMAIL_URL, data, {}, { Authorization: `Bearer ${TOKEN}` })
  },
  // {
  //   invoiceId: "string",
  // }
  verifyTransaction: () => {
    const TOKEN = LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)
    return post(VERIFY_TRANSACTION_URL, data, {}, { Authorization: `Bearer ${TOKEN}` })
  },
}
