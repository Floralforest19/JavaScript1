const ladder = {
    step: 0,
    up: function () {
        return this.step++
    },
    down: function () {
        return this.step--
    },
    showStep: function () {
        return this.step
    }

}
ladder.up()
ladder.up()
ladder.down()
console.log(ladder.showStep())
