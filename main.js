

function preload() {
	world_start = loadSound("world_start.wav");
	mariojump = loadSound("jump.wav");
	mariocoin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mariokick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video,modeloaded);
	posenet.on('pose', gotPoses);

	

}

function gotPoses(results)
{
	if(results.length > 0 )
	{
		console.log(results);
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;
		
	}
}


function modeloaded(){
	console.log("model is loaded.")
}

function draw() {
	game();
	
}







