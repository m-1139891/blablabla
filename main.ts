basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P2, 5)
        basic.pause(2000)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(300000)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
