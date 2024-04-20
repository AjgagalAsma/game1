let nau=document.querySelector(".new");
let lance=document.querySelector(".lance");
let pass=document.querySelector(".pass");
let won =document.querySelector(".won");
let SC=0;
let tempSC=0;
let nbD;

let player1=document.querySelector(".player1");
let p1=document.querySelector(".p1");
let f1=document.querySelector(".f1");
let sP1=document.querySelector(".sP1");
let tempScoreP1=document.querySelector(".tempScoreP1");

let player2=document.querySelector(".player2");
let p2=document.querySelector(".p2");
let f2=document.querySelector(".f2");
let sP2=document.querySelector(".sP2");
let tempScoreP2=document.querySelector(".tempScoreP2");

f1.style.color="rgb(9, 228, 9)" ;
nau.addEventListener("click",()=>{
    change_p2_to_p1();
    sP1.innerHTML="0";
    sP2.innerHTML="0";
    won.style.display="none";
})

function change_p2_to_p1(){
    player1.style.backgroundColor= "rgb(236, 232, 232)";
    p1.style.color="rgb(31, 30, 30)";
    f1.style.color="rgb(9, 228, 9)";
    tempScoreP1.innerHTML="0";

    player2.style.backgroundColor= "white";
    p2.style.color="gray";
    f2.style.color="gray";
    tempScoreP2.innerHTML="0";
}

function change_p1_to_p2(){
    player1.style.backgroundColor= "white";
    p1.style.color="gray";
    f1.style.color="gray";
    tempScoreP1.innerHTML="0";

    player2.style.backgroundColor= "rgb(236, 232, 232)";
    p2.style.color="rgb(31, 30, 30)";
    f2.style.color="rgb(9, 228, 9)";
    tempScoreP2.innerHTML="0";
}

lance.addEventListener("click",()=>{
    if(sP1.innerHTML<100 && sP2.innerHTML<100){
        nbD=Math.floor(Math.random()*6+1);
        if(f1.style.color=="rgb(9, 228, 9)"){
            if(nbD!=1){
                tempSC +=nbD;
                tempScoreP1.innerHTML=tempSC;
                for(let i=1; i<=6 ; i++){
                    document.querySelector(`#d${i}`).style.display="none";
                }
                document.querySelector(`#d${nbD}`).style.display="flex";
            }
            else {
                document.querySelector(`#d${nbD}`).style.display="flex";
                tempSC=0;
                tempScoreP1.innerHTML=tempSC;
                change_p1_to_p2();
            }
        }  
        else {
            if(nbD!=1){
                tempSC +=nbD;
                tempScoreP2.innerHTML=tempSC;
                for(let i=1; i<=6 ; i++){
                    document.querySelector(`#d${i}`).style.display="none";
                }
                document.querySelector(`#d${nbD}`).style.display="flex";
            }
            else {
                document.querySelector(`#d${nbD}`).style.display="flex";
                tempSC=0;
                change_p2_to_p1();
            }
        }
    }
    else{
        if(sP1.innerHTML>=100){
            document.querySelector(`#d${nbD}`).style.display="none";
            won.innerHTML="Player1 won !!!!";
            won.style.display="block";
        }
        else{
            document.querySelector(`#d${nbD}`).style.display="none";
            won.innerHTML="Player2 won !!!!";
            won.style.display="block";
        }
    }
})

pass.addEventListener("click",()=>{
    if(f1.style.color=="rgb(9, 228, 9)"){
        SC=parseInt(sP1.innerHTML);
        SC +=tempSC;
        sP1.innerHTML=SC;
        tempSC=0;
        change_p1_to_p2();
    }
    else {
        SC=parseInt(sP2.innerHTML);
        SC +=tempSC;
        sP2.innerHTML=SC;
        tempSC=0;
        change_p2_to_p1();
    }
})