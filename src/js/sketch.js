const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var engine;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;
var pobj = [];

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  bob1 = new Bob(380,300);
  pobj.push(bob1);
  sling1 = new Chain(bob1.body, { x: 380, y: 100});
  pobj.push(sling1);
  bob2 = new Bob(440,300);
  pobj.push(bob2);
  sling2 = new Chain(bob2.body, { x: 440, y: 100});
  pobj.push(sling2);
  bob3 = new Bob(500,300);
  pobj.push(bob3);
  sling3 = new Chain(bob3.body, { x: 500, y: 100});
  pobj.push(sling3);
  bob4 = new Bob(560,300);
  pobj.push(bob4);
  sling4 = new Chain(bob4.body, { x: 560, y: 100});
  pobj.push(sling4);
  bob5 = new Bob(620,300);
  pobj.push(bob5);
  sling5 = new Chain(bob5.body, { x: 620, y: 100});
  pobj.push(sling5);
  createmconst();
}

function draw() {
  background(22);
  Engine.update(engine);
  for (var i = 0; i < pobj.length; i++) {
    pobj[i].display();
  }
}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY});
}

function createmconst () {
  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = 2;
  var options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}