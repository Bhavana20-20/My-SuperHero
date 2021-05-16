var canvas= new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image="";
function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(200);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image=Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    console.log(e);
    var keyPressed=e.keyCode;
    if(keyPressed =='37')
    {
        left();
    }
    if(keyPressed =='38')
    {
        up();
    }
    if(keyPressed =='39')
    {
        right();
    }
    if(keyPressed =='40')
    {
        down();
    }
    if(keyPressed =='70')
    {
        new_image('ironman_face.png');
        console.log("f");
    }
    if(keyPressed =='66')
    {
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed =='76')
    {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed =='82')
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed =='72')
    {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    if(e.shiftKey==true && keyPressed =='77')
    {
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        console.log("shift+m");
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keyPressed =='80')
    {
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        console.log("shift+p");
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
}
function up()
{
    if(player_y>=10)
    {
     player_y=player_y-block_image_height;
     console.log("image height="+block_image_height);
     console.log("up pressed, X="+player_x+",Y="+player_y);
     canvas.remove(player_object);
     playerUpdate();
    }
}
function down()
{
    if(player_y<=550)
    {
     player_y=player_y+block_image_height;
     console.log("image height="+block_image_height);
     console.log("down pressed, X="+player_x+",Y="+player_y);
     canvas.remove(player_object);
     playerUpdate();
    }
}
function right()
{
    if(player_x<=950)
    {
     player_x=player_x+block_image_width;
     console.log("image widht="+block_image_width);
     console.log("left pressed, X="+player_x+",Y="+player_x);
     canvas.remove(player_object);
     playerUpdate();
    }
}
function left()
{
    if(player_x>=10)
    {
     player_x=player_x-block_image_width;
     console.log("image widht="+block_image_width);
     console.log("left pressed, X="+player_x+",Y="+player_x);
     canvas.remove(player_object);
     playerUpdate();
    }
}
