let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (touch.getTap(touch.TouchPin.P12)) {
        bugVisits += 1
        led.plotBarGraph(
        bugVisits,
        30
        )
    }
})
