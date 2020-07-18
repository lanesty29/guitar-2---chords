input.onPinPressed(TouchPin.P2, function () {
    music.playTone(880, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(698, music.beat(BeatFraction.Double))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(698, music.beat(BeatFraction.Breve))
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
})
