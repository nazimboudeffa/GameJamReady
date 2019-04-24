const state = { init, preload, create, update };

const game = new Phaser.Game(400, 288, Phaser.AUTO, 'game', state);

let layers = {};
<<<<<<< HEAD

=======
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8
let coins;
let coinFrames = [];

let ennemies;
let ennemyFrames = [];

let door;
let doorFrames = [];

let mobSpeed = 20;

function init() {

  Phaser.Canvas.setImageRenderingCrisp(game.canvas);
  game.renderer.renderSession.roundPixels = true;
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.align(true, true);
  game.scale.minWidth = game.canvas.width;
  game.scale.minHeight = game.canvas.height;

}

function preload() {

<<<<<<< HEAD
  game.load.json('atlasFramesRecord', 'assets/sprites.json');
  game.load.atlas('atlas', 'assets/sprites.png', 'assets/sprites.json');
  game.load.tilemap(
    'level',
    'assets/levels/level0-Tiledv1.2.json',
    undefined,
    Phaser.Tilemap.TILED_JSON
  );
  game.load.image('tileset', 'assets/levels/tileset.png');
=======
    game.load.json('atlasFramesRecord', 'assets/sprites.json');
    game.load.atlas('atlas', 'assets/sprites.png', 'assets/sprites.json');
    game.load.tilemap(
      'level',
      'assets/levels/level0-Tiledv1.2.json',
      undefined,
      Phaser.Tilemap.TILED_JSON
    );
    game.load.image('tileset', 'assets/levels/tileset.png');
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8

}

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  resetLocalCounters();
  createLevel();
  createEntities();

}

function resetLocalCounters() {

  localCoinsCount = 0;
  localKillsCount = 0;
  killsToWin = 0;
  coinsToWin = 0;
  doorIsOpen = false;
  //resetPlayerHealth();

}

/*
let currentHealth = 3;
function resetPlayerHealth(){
  if (currentHealth <= 0) {
    currentHealth = startingHealth;
  }
}
*/

function createLevel() {

  map = game.add.tilemap('level');
  map.addTilesetImage('tileset');
<<<<<<< HEAD
  for (let layer of map.layers) {
    let name = layer.name;
=======
  for (let iLayer of map.layers) {
    let name = iLayer.name;
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8
    layers[name] = map.createLayer(name);
    map.setCollisionByExclusion([], true, layers[name]);
    if (name === 'hidden') {
      layers[name].alpha = 0;
    }
    if (name === 'jumpThrough') {
      layers[name].getTiles(
        layers[name].x, layers[name].y,
        layers[name].width, layers[name].height,
        true
      ).forEach(tile => {
        tile.setCollision(false, false, true, false);
      });
    }
  }

}

<<<<<<< HEAD
function createCoin(x, y) {
=======
function createCoin(x = 0, y = 0, props) {
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8

  let sprite = game.add.sprite(x, y, 'atlas', coinFrames[0]);
  sprite.anchor.set(.5);
  sprite.x += sprite.width / 2;
  sprite.y += sprite.height / 2;
  game.physics.arcade.enable(sprite);
  sprite.body.setSize(
    (sprite.width / 2) / sprite.scale.x,
    (sprite.height / 2) / sprite.scale.y,
    sprite.width / 4, sprite.height / 4
  );
  sprite.animations.add('spin', coinFrames, 8, true);
  sprite.animations.play('spin');
  return sprite;

}

<<<<<<< HEAD
function createEnnemy(x, y, props) {
=======
function createEnnemy(x = 0, y = 0, props) {
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8

  let sprite = game.add.sprite(x, y, 'atlas', ennemyFrames[0]);
  sprite.anchor.set(.5);
  sprite.x += sprite.width / 2;
  sprite.y += sprite.height / 2;
  game.physics.arcade.enable(sprite);
  sprite.body.setSize(
    (sprite.width / 2) / sprite.scale.x,
    (sprite.height / 2) / sprite.scale.y,
    sprite.width / 4, sprite.height / 4
  );
  sprite.body.velocity.x = mobSpeed;
  sprite.body.bounce.x = 1;
  sprite.animations.add('walk', ennemyFrames, 8, true);
  sprite.animations.play('walk');
  return sprite;

}

<<<<<<< HEAD
function createDoor(x, y, props) {
=======
function createDoor(x = 0, y = 0, props) {
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8

  let sprite = game.add.sprite(x, y, 'atlas', doorFrames[0]);
  game.physics.arcade.enable(sprite);
  sprite.body.immovable = true;
  sprite.animations.add('open', doorFrames);
  return sprite;

}

<<<<<<< HEAD
function getTileObjectProperties(props) {
=======
function getTileObjectProps(props) {
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8

  let o = {};
  for (let prop of props) {
    try {
      o[prop.name] = eval(prop.value);
    } catch (err) {
      o[prop.name] = prop.value;
    }
  }
  return o;

}

function createEntities() {

  setEntitiesAnimationFrames();
  coins = game.add.group();
  ennemies = game.add.group();
  coins.enableBody = true;
  ennemies.enableBody = true;
  for (let entity of map.objects.entities) {
    let entityName = entity.name;
    let entityProps = null;
    if (entity.properties) {
<<<<<<< HEAD
      entityProps = getTileObjectProperties(entity.properties);
=======
      entityProps = getTileObjectProps(entity.properties);
>>>>>>> c1644eee649f67620fae2f5e0fc75a0ae1de1bd8
    }
    if (entityName === 'coin') {
      coinsToWin++;
      coins.add(createCoin(entity.x, entity.y, entityProps));
    } else if (entityName === 'enemy') {
      killsToWin++;
      ennemies.add(createEnnemy(entity.x, entity.y, entityProps))
    } else if (entityName === 'door') {
      door = createDoor(entity.x, entity.y, entityProps);
    } else if (entityName === 'player') {
      //player = createPlayer(entity.x, entity.y, entityProps);
    }
  }

}

function update() {

  game.physics.arcade.collide(ennemies, layers.hidden, flipX);

}

function setEntitiesAnimationFrames() {

  atlasFramesRecord = game.cache.getJSON('atlasFramesRecord');
  for (let frameName of Object.keys(atlasFramesRecord.frames)) {
    if (/^coin/.test(frameName)) coinFrames.push(frameName);
    if (/^walk/.test(frameName)) ennemyFrames.push(frameName);
    if (/^door/.test(frameName)) doorFrames.push(frameName);
  }

}

function flipX(sprite) {

  sprite.scale.x *= -1;

}
