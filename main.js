NoseX = 0;
NoseY = 0;
glasses = "";

function preload()
{
    glasses = "https://i.postimg.cc/fWcZ57b0/black-round-medical-glasses-on-260nw-1010842528-removebg-preview.png";
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("The Nose x Position = " + NoseX);
        console.log("The Nose y position = " + NoseY);
    }
    
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image(glasses, NoseX, NoseY, 30, 30);
}

function take_snapshot()
{
    save("MyFilterFunImage.png");
}