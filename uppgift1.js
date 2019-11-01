  /*
  const myVar = 'javascript'
      if (myVar === 'javascript') {
          console.log('Rätt')
        } else {
            console.log('Fel')
        }
  
            const myVal = -999
        if (myVal > 0) {
            console.log(1)
          } else if (myVal === 0) {
            console.log(0)
          } else {
            console.log(-1)
          }

          let age = 8
            if (age > 0 || age < 99){
          console.log("Du får inte leka med lego")
        }
        let ogel = 8
        if (ogel <= 99){
            console.log("Du får leka med lego")
        } 

        
        function agecheck(oge, ninimumage) {
            if (oge > ninimumage){
                return true
            }else{
                return false
            }
        }
        console.log(agecheck(19, 18))


        function onereturn(minimumage){
            if (minimumage >= 18){
                return ("Du får rösta")
            }
        }
        console.log(onereturn(23))
        */

        function countcoffee(sum){
          if (sum >= 1000){
            return("Du får rabatt")
          }else{
            return("Du måste köpa")
          }
        }
        console.log(countcoffee(12))
/*
        const cupPrice = 12
        const cupOfmonth = 30
        const cupDiscount = 10
        const cupTotal = 1000

        const tomsCupofcoffeeofday = 1000
        const totaltSpent = tomsCupofcoffeeofday * cupPrice * cupOfmonth
        if (totaltSpent >= cupTotal){
          return("Du får:", (cupTotal * cupDiscount)/ 100, "spänn")
        } else {
          const differnse = cupTotal - totaltSpent
          const differenseRest = differnse - differnse % cupDiscount
          const cupsNeeded = differenseRest / cupPrice + 1
          console.log("Du måste köpa:",cupsNeeded, "mer koppar kaffe")
        }
*/
        const CUP_PRICE = 12
        const DAYS_PER_MONTH = 30
        const DISCOUNT_LIMIT = 1000
        const DISCOUNT = 10
        
        const tommysCuppaCawfeePerDay = 20
        const totalSpent = tommysCuppaCawfeePerDay * DAYS_PER_MONTH * CUP_PRICE
        
        if (totalSpent >= DISCOUNT_LIMIT) {
          console.log('You get the discount:', (totalSpent * DISCOUNT) / 100, 'spänn!')
        } else {
          const difference = DISCOUNT_LIMIT - totalSpent
          const differenceMinusRest = difference - difference % CUP_PRICE
          const cupsNeeded = differenceMinusRest / CUP_PRICE + 1
          console.log('You need to get', cupsNeeded, 'more cuppa cawfee')
        }