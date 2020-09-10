const now = new Date
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
const diff = now - today
function sum(diff) {
    return Math.round(diff / 1000)
}
console.log(sum(diff))