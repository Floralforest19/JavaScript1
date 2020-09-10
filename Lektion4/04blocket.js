const myH1 = document.querySelector('h1')
console.log(myH1)

const pSibling = myH1.previousElementSibling
console.log(pSibling)

const lSibling = pSibling.firstElementChild
console.log(lSibling)

const mSibling = lSibling.firstElementChild
console.log(mSibling)

const aSibling = mSibling.firstChild
console.log(aSibling)


