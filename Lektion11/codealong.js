function filterDuplicates(list){
const returnList = []
for (let i = 0; i<list.length; i++){
    if (returnList.includes(list[i]) === false) {
    returnList.push(list[i])
        }
    
    }
    return returnList
}


const actions = [
    'LOG_IN',
    'CALL_SERVER',
    'UPLOAD',
    'CALL_SERVER',
    'CALL_SERVER'
]
const filteredActions = filterDuplicates(actions)
console.log(filteredActions)