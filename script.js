let gameSeq =[];
let userSeq =[];

let btns = ["one", "two","three","four" ]

let started = false;
let level=0;

let h2 = document.querySelector('h2');


document.addEventListener('keypress', function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    }, 250);
}


function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash')
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`

    //random btn selection
    let randIdx = Math.floor( Math.random() * 4);        // Choosing No.(index) b/w 0 to 3 
    let randNo = btns[randIdx];                          // Putting that no in btns(array) ex.btns[one]   
    let randBtn = document.querySelector(`.${randNo}`);  // Passing the above value in randBtn to pass further..!!

    gameSeq.push(randNo)
    console.log(gameSeq)
    


    gameFlash(randBtn);                                   //  Passing randBtn into flash function
}

function checkAns(idx){
    // let idx = level -1;
    if(userSeq[idx] == gameSeq[idx] ){
        if(userSeq.length == gameSeq.length ){
            // levelUp();
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${ gameSeq.length }<b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        
            setTimeout(function (){
                document.querySelector('body').style.backgroundColor = "white"
            },150);
        
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn)

    let userNo = btn.getAttribute('id')
    userSeq.push(userNo)
        
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for( let btn of allBtns ){
    btn.addEventListener('click', btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}