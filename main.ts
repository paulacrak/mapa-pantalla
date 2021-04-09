tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    3 f e d d b b d 4 e f e 
    f f f e 4 4 4 4 d d 4 e 
    e 4 f b 1 1 1 e d d e 3 
    . . f 6 6 6 6 f e e . . 
    . . f f f f f f f . . . 
    . . f f f . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 9 . . 
    . 9 9 . . . . . . . . . . 9 . . 
    . . 9 . . . . . . . . . . 9 9 . 
    . . 9 9 . . . . . . . . . 9 . . 
    . . . 1 1 1 7 7 7 7 7 1 1 1 . . 
    . . . 1 1 1 7 7 7 7 7 1 1 1 . . 
    . . . f 1 1 7 7 7 7 7 f 1 1 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 9 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 9 9 . . . . . . . . . . 9 9 9 
    9 9 . . . . . . . . . . . . 9 9 
    9 . . . . . . . . . . . . . . 9 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
mySprite.follow(mySprite2, 35)
scene.cameraFollowSprite(mySprite)
