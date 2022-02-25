function preload(){

}
function setup(){
    canvas=createCanvas(1200,600);
    canvas.position(0,500);
    camera=createCapture(VIDEO);
    camera.hide();
    tint_color="";
}
function draw(){
    image(camera,500,200,400,300);
    tint(tint_color);
    fill('turquoise');
    circle(450,150,100);

    fill('pink');
    circle(550,150,100);

    fill('blueviolet');
    circle(650,150,100);

    fill('lime');
    circle(750,150,100);
    

    fill('red');
    circle(850,150,100);

    fill('skyblue');
    circle(950,150,100);





    fill('skyblue');
    circle(450,550,100);

    fill('red');
    circle(550,550,100);



    fill('lime');
    circle(650,550,100);

    fill('blueviolet');
    circle(750,550  ,100);
    fill('pink');
    circle(850,550  ,100);
    fill('turquoise');
    circle(950,550  ,100);


 


    fill('blue');
    rect(425,200,50,100);
    fill('#DD2C00')
    rect(425,300,50,100);
    fill('blue');
    rect(425,400,50,100);
    fill('blue');
    rect(925,200,50,100);
    fill('#DD2C00')
    rect(925,300,50,100);
    fill('blue');
    rect(925,400,50,100);
   
}
function saveimg(){
    save('MY_IMAGE.png');
}
function tc(){
tint_color=document.getElementById("my_color").value;
}