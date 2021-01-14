const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var cube_options ={
        isStatic: false
    }

    var ball_options ={
        restitution: 1,
        angularVelocity: 100,
        torque: 10
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    cube1 = Bodies.rectangle(100,320,20,20,cube_options);
    World.add(world,cube1);
    cube2 = Bodies.rectangle(150,320,20,20,cube_options);
    World.add(world,cube2);
    cube3 = Bodies.rectangle(200,320,20,20,cube_options);
    World.add(world,cube3);
    cube4 = Bodies.rectangle(250,320,20,20,cube_options);
    World.add(world,cube4);

    ball = Bodies.circle(200,100,20,ball_options)
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,400,20);
    
    rect(cube1.position.x,cube1.position.y,20,20);
    rect(cube2.position.x,cube2.position.y,20,20);
    rect(cube3.position.x,cube3.position.y,20,20);
    rect(cube4.position.x,cube4.position.y,20,20);

    ellipse(ball.position.x,ball.position.y,20,20);
}