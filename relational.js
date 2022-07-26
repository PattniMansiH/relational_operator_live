function teddy() {
    var a = document.forms["M"]["m1"].value
    var b = document.forms["M"]["m2"].value
    var lessthan = a < b
    if (a < b) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "red";
    }
}

function mickey() {
    var c = document.forms["M"]["m1"].value
    var d = document.forms["M"]["m2"].value
    var greaterthan = c > d
    // alert(greaterthan)
    if ( c > d) {
        document.body.style.backgroundColor = "green";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
}
function oggy() {
    var e = document.forms["M"]["m1"].value
    var f = document.forms["M"]["m2"].value
    var lessequal = e <= f
    if( e <= f){
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";
    }

    // alert(lessequal)
}
function ninjahattori() {
    var g = document.forms["M"]["m1"].value
    var h = document.forms["M"]["m2"].value
    var greaterequal = g >= h

    if( g >= h){
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";
    }

    // alert(greaterequal)
}
function pikachu() {
    var i = document.forms["M"]["m1"].value
    var j = document.forms["M"]["m2"].value
    var equal = i == j
    if( i == j){
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";
    }

    // alert(equal)
}
function bheem() {
    var k = document.forms["M"]["m1"].value
    var l = document.forms["M"]["m2"].value
    var notequal = k != l
    if( k != l){
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";
    }


    // alert(notequal)
}