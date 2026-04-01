function dark_mode(){
document.body.style.backgroundColor = "black";

};
function light_mode(){
document.body.style.backgroundColor = "white";

};
function Reset_background(){
document.body.style.backgroundColor = "rgb(161, 211, 211)";

 };
function Orange(){
document.body.style.backgroundColor = "coral";

 };
  function RandomGenerate() {
   const pages = [
      "CHERUB.html",
      "divergent.html",
      "HungerGames.html",
      "PercyJackson.html",
      "shatterMe.html",
      "TheLoop.html"];
const randomIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomIndex];
  window.location.href = randomPage;
} ;
 
 //function RandomGenerate(pages){
   // const randomIndex = Math.floor(Math.random() * pages.length);
// const randomPage = pages[CHERUB.html];
  //Math.random="random number"
  // window.location.href = randomPage;
//let page1="CHERUB.html";
//let page2="divergent.html";
//let page3="HungerGames.html";
//let page4="PercyJackson.html";
//let page5="shatterMe.html";
//let page6="TheLoop.html";
  // };
   
