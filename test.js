var printList = function(){
    var variable = $('#text').val();
    var splitText = variable.split(" ");
    console.log(splitText);
    var count = 0;
    for (var i = 0; i < splitText.length; i++) {
        if (splitText[i] == "just" || splitText[i] == "Just" || splitText[i] == "JUST" || splitText[i] == "JUst" || splitText[i] == "JUSt" || splitText[i] == "JuST" || splitText[i] == "jUST" || splitText[i] == "JuSt" || splitText[i] == "JusT" ||) {
        count++;       
      }
    }
    console.log(count);
    document.getElementById("count").innerHTML = count
}



function goToHome(){
    document.getElementById("home").style.display = "";
    document.getElementById("about").style.display = "none";
}

function goToAbout(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "";
}
