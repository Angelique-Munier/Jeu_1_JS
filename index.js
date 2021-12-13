//selectionne nuage vert
const clouds = document.querySelectorAll(".hole");
//selectionne le score
const scoreBoard = document.querySelector(".score");
//selectionne tete
const heads = document.querySelectorAll(".head");
//variable time up savoir si jeu fini ou pas
let timeUp = false; //false si pas fini et true si fini
let score = 0;
let lastCloud;


//creation temp aleatoire
function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
//quel nuage doit faire interaction
function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[indexCloud];
    //test dernier nuage pour pas refaire le meme
    if(cloudSelect === lastCloud){
        return randomCloud(clouds);
    }
    
    //selection du dernier nuage
    lastCloud = cloudSelect;
    
    return cloudSelect;
}
//affichage tete temp et nuage
function showHead(){
    const time = randomTime(600,1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    //lance un code durant un certain temp 2eme argu le temp (aulieu d'ecrire (function() on ecrit ()=>
    setTimeout(()=>{
        if(!timeUp) showHead();
       cloud.classList.remove("up"); 
    } , time);
}
function showHead2(){
    const time = randomTime(500,800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    //lance un code durant un certain temp 2eme argu le temp (aulieu d'ecrire (function() on ecrit ()=>
    setTimeout(()=>{
        if(!timeUp) showHead2();
       cloud.classList.remove("up"); 
    } , time);
}
function showHead3(){
    const time = randomTime(250,500);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    //lance un code durant un certain temp 2eme argu le temp (aulieu d'ecrire (function() on ecrit ()=>
    setTimeout(()=>{
        if(!timeUp) showHead3();
       cloud.classList.remove("up"); 
    } , time);
}


//soit on parcours les tete comme ceci
//for(var i=0;i<heads.length;i++){
    
//}
function playerScore(event){
    if(!event.isTrusted) return; //si pas bien cliquer tete
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}
//soit on fait autrement on parcours les elements du tableau chaque tete de mon tableau tete et a cette tete la execute une fonction
heads.forEach(head => head.addEventListener("click",playerScore));

function startGame(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent ="end";
        },2000);
    },10000);
}
function startGame2(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent ="end";
        },2000);
    },10000);
}
function startGame3(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent ="end";
        },2000);
    },10000);
}
/*NIVEAU*/
const speed = 50;
var i =0;
var text1 = "NOVICE";
var j=0;
var text2 = "APPRENTI";
var k=0;
var text3 = "EXPERT";

function typeWriter1(){
    if(i<text1.length){
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1,speed);
    }
}
function typeWriter2(){
    if(j<text2.length){
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter2,speed);
    }
}
function typeWriter3(){
    if(k<text3.length){
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typeWriter3,speed);
    }
}

function myClick(){
    for (var i=1;i<=3;i++){
        document.getElementById("demo"+i).addEventListener("click", function(){
            document.getElementById("demo1").style.display ="none";
            document.getElementById("demo2").style.display ="none";
            document.getElementById("demo3").style.display ="none";
        });
        
    }
}
document.getElementById("morty-play").addEventListener("click",function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});