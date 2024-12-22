let gameSeq =[];
let userSeq =[];

let btns = ["one", "two","three","four" ]

let started = false;
let level=0;

let h2 = document.querySelector('h2')


document.addEventListener('keypress', function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    }, 250)
}

function levelUp(){
    level++;
    h2.innerText= `Level ${level}`

    //random btn selection
    let randIdx = Math.floor( Math.random() * 3);       // Choosing no(index) b/w 0 to 3 
    let randNo = btns[randIdx];                         // Putting that no in btns(array) ex.btns[one]   
    let randBtn = document.querySelector(`.${randNo}`)  // Passing the above value in randBtn to pass further..!!


    btnFlash(randBtn);                                  //  Passing randBtn into flash function
}