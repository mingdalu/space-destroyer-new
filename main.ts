controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . 7 6 6 7 . . . . . . 
        . . . . . . 7 6 6 7 . . . . . . 
        . . . . . . 7 6 6 7 . . . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 炮台, 0, -50)
    pause(300)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    music.knock.play()
})
let 隕石: Sprite = null
let projectile: Sprite = null
let 炮台: Sprite = null
炮台 = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `, SpriteKind.Player)
炮台.y = 112
controller.moveSprite(炮台, 100, 0)
炮台.setStayInScreen(true)
effects.starField.startScreenEffect()
let list = [
sprites.space.spaceSmallAsteroid0,
sprites.space.spaceSmallAsteroid1,
sprites.space.spaceAsteroid0,
sprites.space.spaceAsteroid1,
sprites.space.spaceAsteroid2,
sprites.space.spaceSmallAsteroid5,
sprites.space.spaceAsteroid4,
sprites.space.spaceAsteroid3,
sprites.space.spaceSmallAsteroid3
]
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(500, function () {
    隕石 = sprites.create(list[randint(0, 8)], SpriteKind.Enemy)
    隕石.vy = 50
    隕石.setPosition(randint(10, 150), 0)
})
