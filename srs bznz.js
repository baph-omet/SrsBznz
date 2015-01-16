var x = 9;
var i = document.getElementById("spotlight");
var imgswapright = function() {
    var i = document.getElementById("spotlight");
    x++;
    var y=x%3;
    if (y===0) i.src = "assets/windmill.png";
    else if (y===1) i.src = "assets/2014-03-05_13.23.15.png"
    else i.src = "assets/2014-03-31_00.14.35.png"
    console.log("X is " + x + ", and Y is " + y);
}
var imgswapleft = function() {
    var i = document.getElementById("spotlight");
    x--;
    var y=x%3;
    if (y===0) i.src = "assets/windmill.png";
    else if (y===1) i.src = "assets/2014-03-05_13.23.15.png"
    else i.src = "assets/2014-03-31_00.14.35.png"
    if (x<3) x = 8;
    console.log("X is " + x + ", and Y is " + y);
}