export function formatDate(dateString) {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  return formattedDate.replace(/\//g, '/')
}
//get day of week
export function getDayOfWeek(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date(dateString)
  const dayOfWeek = daysOfWeek[date.getDay()]
  return dayOfWeek
}
//format time
export function formatTime(timeString) {
  const date = new Date(timeString)
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return formattedTime.replace(/ /g, '')
}

export function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export const calculateDuration = (departureTime, arrivalTime) => {
  const departure = new Date(departureTime)
  const arrival = new Date(arrivalTime)
  const duration = arrival - departure
  const hours = Math.floor(duration / 1000 / 60 / 60)
  const minutes = Math.floor((duration / 1000 / 60 / 60 - hours) * 60)
  return `${hours}h${minutes}m`
}
