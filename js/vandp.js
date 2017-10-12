function submit_di() {
    var a = parseInt(document.getElementById("length").value);
    var b = parseInt(document.getElementById("width").value);
    var c = parseInt(document.getElementById("height").value);
    var d = parseInt(document.getElementById("weight").value);
    var volume = a * b * c;
    var price = a * b * c * d * 100;
    document.getElementById("volume").value = (volume);
    document.getElementById("price").value = (price);


}