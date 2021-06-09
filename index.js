const dateStart = new Date(2028, 6, 21)
const dateEnd = new Date(
  dateStart.getFullYear(),
  dateStart.getMonth(),
  dateStart.getDate() + 16
)

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Display : vendredi 21 juillet 2028
console.log(dateStart.toLocaleString('fr-FR', options))

// Display : dimanche 6 août 2028
console.log(dateEnd.toLocaleString('fr-FR', options))

// Current date
const currentDate = new Date()
// Difference between start date and current date 
const result = dateStart.getTime() - currentDate.getTime()
// Converting milliseconds to days
const days = result / 1000 / 60 / 60 / 24

console.log(currentDate.toLocaleString('fr-FR', options))
console.log(days)
