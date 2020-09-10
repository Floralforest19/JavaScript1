const hayStack = [
    {
        id: 0,
        name: 'Straw'
    },
    {
        id: 1,
        name: 'Grass'
    },
    {
        id: 2,
        name: 'Needle'
    },
    {
        id: 3,
        name: 'Stick'
    }
]
const findByName = hayStack.find(function (hayStack) {
    return hayStack.name === 'Needle'
})
console.log(findByName)