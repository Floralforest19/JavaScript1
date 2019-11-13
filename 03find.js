function func (biggest){

let big = biggest[0]

for (i = 0; i < biggest.length; i++) {
    if (biggest[i] > big) {
        big = biggest[i];
    }
}
return big
}
console.log(func([5, 12, 6]))