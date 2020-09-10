const weekDay = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']

const date = new Date(2019, 9, 23)
const theDay = date.getDay()
function getWeekDay() {
    return weekDay[theDay]
}
console.log(getWeekDay())