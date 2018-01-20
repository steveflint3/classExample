const trivia = document.getElementById("trivia");
const videoButton = document.getElementById("videoButton");
const seagalPic = document.getElementById("seagalPic");
const seagalVideo = document.getElementById("seagalVideo");

triviaFunc = () => {
  alert("Please enter the letter for the corresponding value")
  const value1 = prompt("What was Steven Seagal's first movie? a: Above the Law, b: Under Siege, c; The Glimmer Man");

 if(value1 === "a"){
   alert("You got it right");
 } else {
   alert("Incorrect, Please try again.")
 }

 const value2 = prompt("How old is Seagal? a: 57, b: 72, c: 65")

  if(value2 === "c"){
    alert("you got it right")
  } else {
    alert("You got it wrong")
  }
}


trivia.addEventListener("click", function(){
  triviaFunc();
});

videoButton.addEventListener("click", function(){
  seagalPic.classList.toggle("displayClass");
  seagalVideo.classList.toggle("displayClass");
});
