const now = new Date
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
const diff = today - now
function sum(diff) {
    return Math.round(diff / 1000)
}
console.log(sum(diff))