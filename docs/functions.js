function create() {
    var txt = document.getElementById('txt').value;
    var colour = document.getElementById('colour').value;
    var bgcolour = document.getElementById('bgcolour').value;
    var fontsize = document.getElementById('fontsize').value;
    var font = document.getElementById('font').value;
    
    var output = "<span " + "style='font-family: " + font + "; color: " + colour + "; background-color: " + bgcolour + "; font-size: " + fontsize + "px;'>" + txt +"</span>";
    document.getElementById('output').innerHTML = output;
    document.getElementById('code').innerHTML = "<label>Code to Copy:</label><br><code><xmp>" + output + "</xmp></code>"
}