radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("x", receivedNumber / 1000)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Start")
})
radio.setGroup(1)
