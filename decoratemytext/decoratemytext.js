function bc(){
    /*alert ("Hello, World!");*/
    /*document.getElementById("textarea").style.fontSize="24pt";*/
    var element = document.getElementById("textarea");
    var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var fontSize = parseInt(style);
    element.style.fontSize = (fontSize + 2) + "pt";
} 
function ck(){
 if(document.getElementById("cked").checked){
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "green";
    document.getElementById("textarea").style.textDecoration= "underline";
    document.body.style.backgroundImage = "url('silverware.jpg')";
 }else{
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration= "none";
    document.body.style.backgroundImage = "";
     
}
}
function interval(){
    var id = setInterval(bc, 500);
}
function pl(){
    let words = document.getElementById("textarea").value;
    words = words.trim();
    let wordArr = words.split(" ");
    let output = "";
    for(let i=0; i<wordArr.length; i++){
    output += cplatin(wordArr[i]) + " ";
}
document.getElementById("textarea").value = output;
}

function cplatin(str){
    let vowels = ['a','e','i','o','u'];
    let c = str.charAt(0);
    let output = "";
    if (vowels.indexOf(c) > -1){
        output = str + "ay";
    }else{
        let cn = 0;
        for(let i=0; i<str.length; i++){
            c = str.charAt(i);
            if (vowels.indexOf(c) > -1){
                break;
            }else{
                cn++;
            }

        }
        output = str.substring(cn) + str.substring(0,cn) + "ay";
    }
    return output;
}
function mvitch(){
    var word = document.getElementById("textarea").value;
    word = word.trim();
    var wrdArr= word.split(" ");
    var output = "";
    for(var i=0; i<wrdArr.length; i++){
        if(wrdArr[i].length >=5){
          output += "Malkovitch" + " ";
        }else{
            output += wrdArr[i] + " ";
        }
    }
    output = output.trim();
    document.getElementById("textarea").value = output;

}