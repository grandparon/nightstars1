let y = 0
let x = 0
/**
 * Only works with board by itself. Not in the car.
 */
basic.forever(function () {
    if (input.lightLevel() <= 4) {
        for (let index = 0; index < 10; index++) {
            y = randint(0, 4)
            x = randint(0, 4)
            led.plot(x, y)
            basic.pause(200)
        }
        basic.clearScreen()
        basic.pause(100)
    }
    basic.clearScreen()
})
