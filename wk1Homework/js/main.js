/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
 ********************************************/

//Call to canvas
window.onload = function(){
    if(Modernizr.canvas){
        //Canvas is supported

        var myCanvas1 = document.getElementById("myCanvas1");
        var myCanvas2 = document.getElementById("myCanvas2");
        var myCanvas3 = document.getElementById("myCanvas3");
        var myCanvas4 = document.getElementById("myCanvas4");
        var myCanvas5 = document.getElementById("myCanvas5");
        var myCanvas6 = document.getElementById("myCanvas6");
        var myCanvas7 = document.getElementById("myCanvas7");
        var ctx1 = myCanvas1.getContext("2d");
        var ctx2 = myCanvas2.getContext("2d");
        var ctx3 = myCanvas3.getContext("2d");
        var ctx4 = myCanvas4.getContext("2d");
        var ctx5 = myCanvas5.getContext("2d");
        var ctx6 = myCanvas6.getContext("2d");
        var ctx7 = myCanvas7.getContext("2d");

        //Draw some text on our canvas






/********************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

        ctx1.lineWidth = 5;
        ctx1.fillStyle = "blue";
        ctx1.strokeStyle = 'black';

        ctx1.strokeRect(0,0, 50, 100);
        ctx1.fillRect(0,0, 50, 100);


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
ctx2.fillStyle='rgba(255,0,0,.5)';
        ctx2.strokeStyle='black';
        ctx2.lineWidth=30;
        ctx2.beginPath();
        ctx2.arc(50,50,20,0,(2*(Math.PI)));
        ctx2.stroke();




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
        ctx3.strokeStyle = "yellow";
        ctx3.fillStyle= "black";
        ctx3.lineWidth = 3;

        ctx3.beginPath();
        ctx3.translate(100,100);
        for (var i = 0; i < 5; i++)
        {
            ctx3.rotate(Math.PI / 5);
            ctx3.lineTo(0, 0 - (100 *.3));
            ctx3.rotate(Math.PI / 5);
            ctx3.lineTo(0, 0 - 100);
        }
        ctx3.fill();
        ctx3.stroke();

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

        var degrees = 180;
        var radians = (degrees/180)*Math.PI;


        ctx4.strokeStyle="red";
        ctx4.fillStyle="black";
        ctx4.lineWidth=10;

        ctx4.beginPath();
        ctx4.translate(250,250);
        ctx4.arc(0,0,200,0,radians,true);
        ctx4.bezierCurveTo(-200,50,-100,50,-100,20);
        ctx4.bezierCurveTo(-100,50,0,50,0,20);
        ctx4.bezierCurveTo(0,50,100,50,100,20);
        ctx4.bezierCurveTo(100,50,200,50,200,20);

        ctx4.closePath();
        ctx4.fill();
        ctx4.stroke();

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
        var string = "Canvas is awesome!";

        ctx5.fillText(string, 100,100);

        ctx5.font = "14pt Arial";
        ctx5.fillStyle = "green";
        ctx5.fillText(string, 100,150);


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
        var image = document.getElementById("logo");
        var halfWidth = (image.width/2);
        var halfHeight = (image.height/2);
        ctx6.drawImage(image, 0, 0);
        ctx6.drawImage(image,0,0,halfWidth,halfHeight);
        ctx6.drawImage(image,  2550, 150, 200, 140,50, 50,190, 280 );



/*******************************************
PART 7

Putting it all together.

Using a combination of all the methods.
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

        var myString = "Level One Completed! HAHA Get it? PacMan!!!";

        ctx7.font = "28pt Arial";
        ctx7.fillStyle = "blue";
        ctx7.fillText(myString, 100,100);

        var degrees2 = 180;
        var radians2 = (degrees2/180)*Math.PI;


        ctx7.strokeStyle="red";
        ctx7.fillStyle="black";
        ctx7.lineWidth=10;

        ctx7.beginPath();
        ctx7.translate(700,350);
        ctx7.arc(0,0,200,0,radians2,true);
        ctx7.bezierCurveTo(-200,100,-100,100,-100,20);
        ctx7.bezierCurveTo(-100,100,0,100,0,20);
        ctx7.bezierCurveTo(0,100,100,100,100,20);
        ctx7.bezierCurveTo(100,100,200,100,200,20);

        ctx7.closePath();
        ctx7.fill();
        ctx7.stroke();

        ctx7.translate(-575,-100);
        ctx7.beginPath();
        ctx7.arc(100, 100, 200, 0.25 * Math.PI, 1.25 * Math.PI, false);
        ctx7.fillStyle = "rgb(255, 255, 0)";
        ctx7.fill();
        ctx7.beginPath();
        ctx7.arc(100, 100, 200, 0.75 * Math.PI, 1.75 * Math.PI, false);
        ctx7.fill();
        ctx7.beginPath();
        ctx7.fillStyle = "rgb(0, 0, 0)";
        ctx7.fill();




    }else {
        alert("Canvas is not supported in your browser.");


    }

    console.log(Modernizr);

};