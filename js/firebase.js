var config = {
    apiKey: "AIzaSyCiD4cu1NqkMjiVZzFcSXAGNcgdlxjxUFE",
    authDomain: "numadics.firebaseapp.com",
    databaseURL: "https://numadics.firebaseio.com",
    projectId: "numadics",
    storageBucket: "numadics.appspot.com",
    messagingSenderId: "625144194399"
};
var count

function submit_by_id() {
    var name = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var type = document.getElementById("type").value;
    var location1 = document.getElementById("location1").value;
    var lat1 = document.getElementById("lat1").value;
    var longe1 = document.getElementById("longe1").value;
    var location2 = document.getElementById("location2").value;
    var lat2 = document.getElementById("lat2").value;
    var longe2 = document.getElementById("longe2").value;
    var weight = document.getElementById("weight").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var length = document.getElementById("length").value;
    var volume = document.getElementById("volume").value;
    var price = document.getElementById("price").value;



    var currentdate = new Date().toLocaleDateString();

    firebase.initializeApp(config);
    var currentdate = new Date().toLocaleDateString();

    var ref = firebase.database().ref('snivio');
    ref.push({
        date: currentdate,
        cname: name,
        cemail: email,
        telephone: tel,
        dtype: type,
        source: location1,
        sourcelat: lat1,
        sourcelong: longe1,
        destination: location2,
        destinationlat: lat2,
        destinationlong: longe2,
        pweight: weight,
        pwidth: width,
        pheight: height,
        plength: length,
        pvolume: volume,
        pprice: price,
    })
}