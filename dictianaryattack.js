var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

function checkPassword() {
  var pw = document.getElementById("pw").value.toLowerCase();
  pw= getVariations.pw;
  var mily=false;
  for ( x=0; x< wordsList.length; x++ ) {
    if (wordsList[x]= pw) {
      mily=true;
    }
}
  if (mily==true){
     document.getElementById("results").innerHTML = "Password found";
      }
    else {
      document.getElementById("results").innerHTML = "Password not found";
    }
}
function getVariations(pw){
pw=pw.replace(/1/g, "a");
pw=pw.replace(/2/g, "e");
pw=pw.replace(/3/g, "i");
pw=pw.replace(/4/g, "o");
pw=pw.replace(/5/g, "u");
pw=pw.replace(/6/g, "y");
pw=pw.replace(/7/g, "m");
pw=pw.replace(/8/g, "l");
pw=pw.replace(/9/g, "c");
pw=pw.replace(/0/g, "d");
return pw
}
