function changeImage() {
    var bulb = document.getElementById('myImage');
    if (bulb.src.match("bulbon")) {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}