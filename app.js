let gameSeq=[];
let userSeq=[];


let highScore=0;

let started=false;
let level=0;

let btns=["yellow","red","purple","green"]
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("game is start");
        started=true;
    }
    levelUP();
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUP(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random()*btns.length);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`)

    gameSeq.push(ranColor)
    btnFlash(ranBtn);
    console.log(ranIdx);
    console.log(ranColor);
    console.log(ranBtn);
    
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx])
    {
        if(gameSeq.length===userSeq.length)
        {
            setTimeout(levelUP,1000);
        }
    }else{

        if (level > highScore) {
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your score is <b>${level}</b>.<br>
                        Highest score: <b>${highScore}</b><br>
                        Press any key to Start.`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"
        },150)
        reset();
    }
}


function btnPress(){
    let btn=this;
    userFlash(btn); 
    // console.log(this);
    
    let userColor=btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn")
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[]
    userSeq=[]
    level=0;
}
