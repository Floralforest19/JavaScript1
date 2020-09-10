
   const arrayMaster = {
    getFirst: function (arr){
      return arr[0]
   },
    getLast: function (arr){
      return arr[2]
    },
    getN: function (arr){
      return arr[1]
    }
}
console.log(arrayMaster.getFirst([1,2,3]))
console.log(arrayMaster.getLast([1,2,3]))
console.log(arrayMaster.getN([1,2,3]))