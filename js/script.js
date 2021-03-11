
//ENABLING THE BUTTONS TO BE CLICKED WHEN TOUCHED ON TOUCH SCREEN
$(document).on('touchstart', function() {
  documentClick = true;
});
$(document).on('touchmove', function() {
  documentClick = false;
});




$(function(){

//Name input is foused on page load
  $("#nameInput").focus();

//Adding the input name to the text
  function addName(){
    let nameInput = $("#nameInput").val();

    $("#theirName").append(nameInput);
    $("#nameInputWrapper").css("display", "none");
    $("#speech").css("display", "inline-block");
    $("#letsGo").css("display", "inline-block");
  };

 $("#nameBtn").click(addName);

 $("#nameInput").keypress (function (e){
  if (event.which == 13) {
    addName();
}
});


//Saving the users input name to local storage//
$(document).ready(function() {

  $("#letsGo").click(function(e) { 

    let name = [];
    $("#theirName").val(function(){
      name.push(this.innerHTML);
    })
    localStorage.setItem('input',JSON.stringify(name));

  });


//Retreving the users input name from local storage and inputing it into the text on other pages//
function loadName(){
  if (localStorage.getItem('input')){
    let name = JSON.parse(localStorage.getItem('input'));
    $("#theirName2").each(function(i){
      this.innerHTML = name [i];
    })
    $("#theirName3").each(function(i){
      this.innerHTML = name [i];
    })
  }
}
loadName(); //<--This is calling the above function, without this nothing is loaded on refresh//
  });

//*******************************************//
//*******************************************//
//*******************************************//

//function with the sounds attached
function cowSnd(){
  let cowSnd = new Audio("/img/Cow-Mooing-C-www.fesliyanstudios.com.mp3")
  cowSnd.play();
}
function horseSnd(){
  let horseSnd = new Audio("/img/Horse-whinny.mp3")
  horseSnd.play();
}
function chickenSnd(){
  let chickenSnd = new Audio("/img/chickensound.wav")
  chickenSnd.play();
}
function pigSnd(){
  let pigSnd = new Audio("/img/pignoise.m4a")
  pigSnd.play();
}
function sheepSnd(){
  let sheepSnd = new Audio("/img/Sheep-sound-meh.mp3")
  sheepSnd.play();
}
function donkeySnd(){
  let donkeySnd = new Audio("/img/donkeysound.m4a")
  donkeySnd.play();
}


//Clicking the animal plays the sound
$("#cow").click(function(){ 
    cowSnd();
    });
$("#horse").click(function(){ 
  horseSnd();
  });    
$("#chicken").click(function(){
  chickenSnd();
});
$("#pig").click(function(){
  pigSnd();
});
$("#sheep").click(function(){
  sheepSnd();
});
$("#donkey").click(function(){
  donkeySnd();
});


//Clicking the link stops the default action of going straight to the page.  Set a variable which is the animal page path. So technically don't need the hrefs on the html page but left them in anyway.
    $('#cowLink').click(function (e) {
      e.preventDefault();
      let goTo = "/cow.html";
  
//setTimeout (delay) of 'X' sec to allow for the animal sound and then call the function of "go to" to the html.
      setTimeout(function(){
          window.location = goTo;
      },3000);
  }); 


$('#horseLink').click(function (e) {
  e.preventDefault();
  let goTo = "/horse.html";

  setTimeout(function(){
      window.location = goTo;
  },2000);
}); 

$('#chickenLink').click(function (e) {
  e.preventDefault();
  let goTo = "/chicken.html";

  setTimeout(function(){
      window.location = goTo;
  },4000);
}); 

$('#pigLink').click(function (e) {
  e.preventDefault();
  let goTo = "/pig.html";

  setTimeout(function(){
      window.location = goTo;
  },3000);
}); 

$('#sheepLink').click(function (e) {
  e.preventDefault();
  let goTo = "/sheep.html";

  setTimeout(function(){
      window.location = goTo;
  },1500);
}); 

$('#donkeyLink').click(function (e) {
  e.preventDefault();
  let goTo = "/donkey.html";

  setTimeout(function(){
      window.location = goTo;
  },3000);
}); 


/*Making the animals draggable.
(THERE IS A CDN ADDED IN THE HTML TO MAKE DRAG AND DROP WORK ON TOUCH SCREENS) 
Making the top icons droppable and only accept the right colors or shapes.  
Then makes the CORRECT item dissapear and play a sound.*/

//COW PAGE
  $( function() {
    $("#cowRed").draggable();
    $("#red").droppable({
      accept: "#cowRed",
      drop: function( event, ui ) {
        $("#cowRed").css("visibility", "hidden");
        cowSnd();
        cowsArray.splice(0,1);
      }
    });
  });

  $( function() {
    $("#cowPink").draggable();
    $("#pink").droppable({
      accept: "#cowPink",
      drop: function( event, ui ) {
        $("#cowPink").css("display", "none");
        cowSnd();
        cowsArray.splice(0,1);
      }
    });
  });

  $( function() {
    $("#cowYellow").draggable();
    $("#yellow").droppable({
      accept: "#cowYellow",
      drop: function( event, ui ) {
        $("#cowYellow").css("display", "none");
        cowSnd();
        cowsArray.splice(0,1);
      }
    });
  });

  $( function() {
    $("#cowBlue").draggable();
    $("#blue").droppable({
      accept: "#cowBlue",
      drop: function( event, ui ) {
        $("#cowBlue").css("display", "none");
        cowSnd();
        cowsArray.splice(0,1);
      }
    });
  });

  $( function() {
    $("#cowGreen").draggable();
    $("#green").droppable({
      accept: "#cowGreen",
      drop: function( event, ui ) {
        $("#cowGreen").css("display", "none");
        cowSnd();
        cowsArray.splice(0,1);
      }
    });
  });

//HORSE PAGE
$( function() {
  $("#horseTriangle").draggable();
  $("#triangle").droppable({
    accept: "#horseTriangle",
    drop: function( event, ui ) {
      $("#horseTriangle").css("display", "none");
      horseSnd();
      horseArray.splice(0,1);
    }
  });
});
$( function() {
  $("#horseSquare").draggable();
  $("#square").droppable({
    accept: "#horseSquare",
    drop: function( event, ui ) {
      $("#horseSquare").css("display", "none");
      horseSnd();
      horseArray.splice(0,1);
    }
  });
});
$( function() {
  $("#horseCircle").draggable();
  $("#circle").droppable({
    accept: "#horseCircle",
    drop: function( event, ui ) {
      $("#horseCircle").css("display", "none");
      horseSnd();
      horseArray.splice(0,1);
    }
  });
});
$( function() {
  $("#horseHeart").draggable();
  $("#heart").droppable({
    accept: "#horseHeart",
    drop: function( event, ui ) {
      $("#horseHeart").css("display", "none");
      horseSnd();
      horseArray.splice(0,1);
    }
  });
});
$( function() {
  $("#horseRectangle").draggable();
  $("#rectangle").droppable({
    accept: "#horseRectangle",
    drop: function( event, ui ) {
      $("#horseRectangle").css("display", "none");
      horseSnd();
      horseArray.splice(0,1);
    }
  });
});

//CHICKEN PAGE
$( function() {
  $("#chickenRed").draggable();
  $("#redChickDrop").droppable({
    accept: "#chickenRed",
    drop: function( event, ui ) {
      $("#chickenRed").css("display", "none");
      chickenSnd();
      chickenArray.splice(0,1);
    }
  });
});
$( function() {
  $("#chickenBlue").draggable();
  $("#blueChickDrop").droppable({
    accept: "#chickenBlue",
    drop: function( event, ui ) {
      $("#chickenBlue").css("display", "none");
      chickenSnd();
      chickenArray.splice(0,1);
    }
  });
});
$( function() {
  $("#chickenGreen").draggable();
  $("#greenChickDrop").droppable({
    accept: "#chickenGreen",
    drop: function( event, ui ) {
      $("#chickenGreen").css("display", "none");
      chickenSnd();
      chickenArray.splice(0,1);
    }
  });
});
$( function() {
  $("#chickenPink").draggable();
  $("#pinkChickDrop").droppable({
    accept: "#chickenPink",
    drop: function( event, ui ) {
      $("#chickenPink").css("display", "none");
      chickenSnd();
      chickenArray.splice(0,1);
    }
  });
});
$( function() {
  $("#chickenYellow").draggable();
  $("#yellowChickDrop").droppable({
    accept: "#chickenYellow",
    drop: function( event, ui ) {
      $("#chickenYellow").css("display", "none");
      chickenSnd();
      chickenArray.splice(0,1);
    }
  });
});

//PIG PAGE
$( function() {
  $("#pig1").draggable();
  $("#N1").droppable({
    accept: "#pig1",
    drop: function( event, ui ) {
      $("#pig1").css("display", "none");
      pigSnd();
      pigArray.splice(0,1);
    }
  });
});
$( function() {
  $("#pig2").draggable();
  $("#N2").droppable({
    accept: "#pig2",
    drop: function( event, ui ) {
      $("#pig2").css("display", "none");
      pigSnd();
      pigArray.splice(0,1);
    }
  });
});
$( function() {
  $("#pig3").draggable();
  $("#N3").droppable({
    accept: "#pig3",
    drop: function( event, ui ) {
      $("#pig3").css("display", "none");
      pigSnd();
      pigArray.splice(0,1);
    }
  });
});
$( function() {
  $("#pig4").draggable();
  $("#N4").droppable({
    accept: "#pig4",
    drop: function( event, ui ) {
      $("#pig4").css("display", "none");
      pigSnd();
      pigArray.splice(0,1);
    }
  });
});
$( function() {
  $("#pig5").draggable();
  $("#N5").droppable({
    accept: "#pig5",
    drop: function( event, ui ) {
      $("#pig5").css("display", "none");
      pigSnd();
      pigArray.splice(0,1);
    }
  });
});

//SHEEP PAGE
$( function() {
  $("#sheepPlus").draggable();
  $("#plus").droppable({
    accept: "#sheepPlus",
    drop: function( event, ui ) {
      $("#sheepPlus").css("display", "none");
      sheepSnd();
      sheepArray.splice(0,1);
    }
  });
});
$( function() {
  $("#sheepMinus").draggable();
  $("#minus").droppable({
    accept: "#sheepMinus",
    drop: function( event, ui ) {
      $("#sheepMinus").css("display", "none");
      sheepSnd();
      sheepArray.splice(0,1);
    }
  });
});
$( function() {
  $("#sheepTimes").draggable();
  $("#times").droppable({
    accept: "#sheepTimes",
    drop: function( event, ui ) {
      $("#sheepTimes").css("display", "none");
      sheepSnd();
      sheepArray.splice(0,1);
    }
  });
});
$( function() {
  $("#sheepEquals").draggable();
  $("#equals").droppable({
    accept: "#sheepEquals",
    drop: function( event, ui ) {
      $("#sheepEquals").css("display", "none");
      sheepSnd();
      sheepArray.splice(0,1);
    }
  });
});
$( function() {
  $("#sheepDivide").draggable();
  $("#divide").droppable({
    accept: "#sheepDivide",
    drop: function( event, ui ) {
      $("#sheepDivide").css("display", "none");
      sheepSnd();
      sheepArray.splice(0,1);
    }
  });
});

//DONKEY PAGE
$( function() {
  $("#donkey6").draggable();
  $("#six").droppable({
    accept: "#donkey6",
    drop: function( event, ui ) {
      $("#donkey6").css("display", "none");
      donkeySnd();
      donkeyArray.splice(0,1);
    }
  });
});
$( function() {
  $("#donkey7").draggable();
  $("#seven").droppable({
    accept: "#donkey7",
    drop: function( event, ui ) {
      $("#donkey7").css("display", "none");
      donkeySnd();
      donkeyArray.splice(0,1);
    }
  });
});
$( function() {
  $("#donkey8").draggable();
  $("#eight").droppable({
    accept: "#donkey8",
    drop: function( event, ui ) {
      $("#donkey8").css("display", "none");
      donkeySnd();
      donkeyArray.splice(0,1);
    }
  });
});
$( function() {
  $("#donkey9").draggable();
  $("#nine").droppable({
    accept: "#donkey9",
    drop: function( event, ui ) {
      $("#donkey9").css("display", "none");
      donkeySnd();
      donkeyArray.splice(0,1);
    }
  });
});
$( function() {
  $("#donkey10").draggable();
  $("#ten").droppable({
    accept: "#donkey10",
    drop: function( event, ui ) {
      $("#donkey10").css("display", "none");
      donkeySnd();
      donkeyArray.splice(0,1);
    }
  });
});



//Make it when you first mousedown on an animal it gets rid of the farmer and his text.
$(".animals").mousedown(function(){
  $("#farmerCow").css("display", "none");
  $("#farmerHorse").css("display", "none");
  $("#farmerChicken").css("display", "none");
  $("#farmerPig").css("display", "none");
  $("#farmerSheep").css("display", "none");
  $("#farmerDonkey").css("display", "none");
});

//Marking an array with the animal divs in
let cowsArray = [];
let horseArray = [];
let chickenArray = [];
let pigArray = [];
let sheepArray = [];
let donkeyArray = [];


$("#ifEmpty > *").each(function(i) { //selecting the child elements (cows, sheep, donkey etc) of the wrapper div
  // console.log(i);
  // console.log($(this));
  cowsArray.push($(this));//pushing the child elements into the array
});

$("#ifEmptyHorse > *").each(function(i) { 
  horseArray.push($(this));
});

$("#ifEmptyChicken > *").each(function(i) { 
  chickenArray.push($(this));
});

$("#ifEmptyPig > *").each(function(i) { 
  pigArray.push($(this));
});

$("#ifEmptySheep > *").each(function(i) {
  sheepArray.push($(this));
});

$("#ifEmptyDonkey > *").each(function(i) {
  donkeyArray.push($(this));
});


/*Whenever the mouse leaves an animal (diffetent from click), 
check to see if the array is empty, if it is then display the farmer and success message*/
$(".animals").mouseleave(function(){
  if (cowsArray.length == 0) {

    $("#farmerCowDone").css("display", "block");
    $("#backToFarmCow").css("display", "block");
    // console.log(cowsArray);
 }
});

$(".animals").mouseleave(function(){
  if (horseArray.length == 0) {

    $("#farmerHorseDone").css("display", "block");
    $("#backToFarmHorse").css("display", "block");
 }
});

$(".animals").mouseleave(function(){
  if (chickenArray.length == 0) {

    $("#farmerChickenDone").css("display", "block");
    $("#backToFarmChicken").css("display", "block");
 }
});

$(".animals").mouseleave(function(){
  if (pigArray.length == 0) {

    $("#farmerPigDone").css("display", "block");
    $("#backToFarmPig").css("display", "block");
 }
});

$(".animals").mouseleave(function(){
  if (sheepArray.length == 0) {

    $("#farmerSheepDone").css("display", "block");
    $("#backToFarmSheep").css("display", "block");
 }
});

$(".animals").mouseleave(function(){
  if (donkeyArray.length == 0) {

    $("#farmerDonkeyDone").css("display", "block");
    $("#backToFarmDonkey").css("display", "block");
 }
});

});
