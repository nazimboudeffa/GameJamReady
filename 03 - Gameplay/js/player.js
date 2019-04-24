let player;
let playerRunFrames = [];
let playerIdleFrames = [];
let playerClimbFrames = [];
let playerFallFrames = [];
let playerJumpFrames = [];

let playerSpeed = 80;
let playerJumpSpeed = -140;
let playerClimbSpeed = 40;
let playerGravity = 300;
let playerMobBounce = 90;
let playerSuperArmor = false;
let playerSuperArmorCoolDown = 0
let playerSuperArmorDelay = 600;
let playerBlinkRate = 80;
let playerBlinkTime = 0;

function updatePlayer(){

  game.physics.arcade.collide(player, layers.ground);
  game.physics.arcade.collide(player, layers.jumpThrough, undefined, jumpThrough);
  //game.physics.arcade.overlap(player, coins, collectCoin);
  //game.physics.arcade.overlap(player, ennemies, onPlayerVsMobs);
  //game.physics.arcade.collide(player, door, goToNextLevel)

  if (!player._onLadder) {
  handlePlayerMovements();
}

function handlePlayerMovements() {

  if (cursorKeys.right.isDown) {
    player.scale.x *= player.scale.x < 0 ? -1 : 1;
    player.body.velocity.x = playerSpeed;
  } else if (cursorKeys.left.isDown) {
    player.scale.x *= player.scale.x > 0 ? -1 : 1;
    player.body.velocity.x = -playerSpeed;
  } else {
    player.body.velocity.x = 0;
  }

  if (player.body.velocity.x && player.body.blocked.down) {
    player.animations.play('run');
  } else if (!player.body.velocity.x && player.body.blocked.down) {
    player.animations.play('idle')
  }

  if (player.body.velocity.y > 0) {
    player.animations.play('fall');
  } else if (player.body.velocity.y < 0) {
    player.animations.play('jump')
  }
}

}

function jumpThrough(sprite, tile) {
  if (sprite.world.y < tile.worldY) {
    return true;
  }
  return false;
}

function handlePlayerJump() {
  if (cursorKeys.up.isDown && player.body.blocked.down) {
    player.body.velocity.y = playerJumpSpeed;
  }
}
