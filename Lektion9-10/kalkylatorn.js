var calcylator = {
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
    read() {
        console.log(this)
        this.a = parseInt(prompt('First value?'))
        this.b = parseInt(prompt('First value?'))
    }
}
calcylator.read()
alert(calcylator.mul())
alert(calcylator.sum())
