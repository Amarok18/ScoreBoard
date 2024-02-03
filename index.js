let score_home = document.getElementsByClassName("score_home")[0];
let score_guest = document.getElementsByClassName("score_guest")[0];
let countHome = 0;
let countGuest = 0;

function plusOne_home(){
    countHome += 1;
    score_home.textContent = countHome; 
}
function plusTwo_home(){
    countHome += 2;
    score_home.innerText = countHome;
}
function plusThree_home(){
    countHome += 3;
    score_home.innerText = countHome;  
}
function plusOne_guest(){
    countGuest += 1;
    score_guest.innerText = countGuest;
}
function plusTwo_guest(){
    countGuest += 2;
    score_guest.innerText = countGuest;
}
function plusThree_guest(){
    countGuest += 3;
    score_guest.innerText = countGuest;
}
function endGame(){
    countGuest = 0;
    countHome = 0;
    score_guest.innerText = countGuest;
    score_home.innerText = countHome;
}