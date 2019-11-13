function hasProperty(obj, key) {
    return typeof obj[key] !== 'undefined' && obj[key] !== null
  }
  
  const myObj = { id: 1, name: 'Jonas' }
  console.log(hasProperty(myObj, 'name'))
  console.log(hasProperty(myObj, 'surname')) 
  myObj.name = null
  console.log(hasProperty(myObj, 'name')) 