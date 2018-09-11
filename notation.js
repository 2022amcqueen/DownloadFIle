var notationbox = document.getElementById("notationbox")

function format(){
    var number = notationbox.value
    var length = number.replace(".", "").length
    
    var exponet = length - 1
    
    alert(number + " * " + "10^" + exponet)
}
