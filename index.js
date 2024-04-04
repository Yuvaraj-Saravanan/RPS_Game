const result = document.getElementById("result")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const sisBtn = document.getElementById("sicssor")
const scoreEl = document.getElementById("score")
const lifeEl = document.getElementById("life")
const popup = document.querySelector(".popup")
const back = document.getElementById("back")
const high = document.getElementById("highscore")
const points= document.getElementById("points")
const player = document.getElementById("player")
const full = document.getElementById("full")
const half = document.getElementById("half")
const low = document.getElementById("low")


let score = 0
let item =""
localStorage.setItem("highscore")
const hscore = localStorage.getItem("highscore")
const arr = ["images/Rock.png","images/Paper.png","images/Sicssor.png"]
let isAlive = 3

function randomEl(){
    let random = Math.floor(Math.random()*3)
    result.style.backgroundImage = `url(${arr[random]}`
    item = random
}

function life(){
    if(isAlive== 0){
        popup.classList.add("open")
        full.style.visibility ="hidden"
        half.style.visibility ="hidden"
        low.style.visibility ="hidden"
    }
    else{
        if(isAlive == 3){
            full.style.visibility ="visible"
        half.style.visibility ="visible"
        low.style.visibility ="visible"
        }
        else if(isAlive == 2){
            full.style.visibility = "hidden"
        }
        else{
            full.style.visibility ="hidden"
            half.style.visibility ="hidden"
        }
    }
}

back.addEventListener("click",function(){
    popup.classList.remove("open")
    isAlive = 3
    score = 0
    scoreEl.textContent = "SCORE :"
    life()
    result.style.backgroundImage = "url(images/letsplay.jpeg)"
    player.style.backgroundImage = "url(images/plays.jpeg)"
})

function hiscore(){
    points.textContent = "SCORE : " + score
    if(score > Number(hscore)){
        localStorage.setItem("highscore",String(score))
    }
    else{
        localStorage.setItem("highscore",hscore)
    }
    high.textContent = "HIGH SCORE : " + localStorage.getItem("highscore")
}

paperBtn.addEventListener("click",function(){
    randomEl()
    player.style.backgroundImage = "url(images/Paper.png)"
    if(item==0){
        score= score + 1
        scoreEl.textContent = "SCORE : " + score
    }
    else if(item==1){
        score = score
        scoreEl.textContent = "SCORE : " + score
    }
    else{
        isAlive = isAlive - 1
    }
    life()
    hiscore()
})
rockBtn.addEventListener("click",function(){
    randomEl()
    player.style.backgroundImage = "url(images/Rock.png)"
    if(item==2){
        score= score + 1
        scoreEl.textContent = "SCORE : " + score
    }
    else if(item==0){
        score = score
        scoreEl.textContent = "SCORE : " +score
    }
    else{
        isAlive -= 1
    }
    life()
    hiscore()
})
sisBtn.addEventListener("click",function(){
    randomEl()
    player.style.backgroundImage = "url(images/Sicssor.png)"
    if(item==1){
        score= score + 1
        scoreEl.textContent = "SCORE : " +score
    }
    else if(item==2){
        score = score
        scoreEl.textContent = "SCORE : " +score
    }
    else{
        isAlive -= 1
    }
    life()
    hiscore()
})

player.addEventListener("click",function(){
    let random = Math.floor(Math.random()*3)
    player.style.backgroundImage = `url(${arr[random]}`
    if(random==0){
        randomEl()
        if(item==2){
        score= score + 1
        scoreEl.textContent = "SCORE : " + score
        }
        else if(item==0){
        score = score
        scoreEl.textContent = "SCORE : " +score
        }
        else{
        isAlive -= 1
        }
        life()
        hiscore()
    }
    else if(random==1){
        randomEl()
        if(item==0){
            score= score + 1
            scoreEl.textContent = "SCORE : " + score
        }
        else if(item==1){
            score = score
            scoreEl.textContent = "SCORE : " + score
        }
        else{
            isAlive = isAlive - 1
        }
        life()
        hiscore()
    }
    else{
        randomEl()
        if(item==1){
            score= score + 1
            scoreEl.textContent = "SCORE : " +score
        }
        else if(item==2){
            score = score
            scoreEl.textContent = "SCORE : " +score
        }
        else{
            isAlive -= 1
        }
        life()
        hiscore()
        }
})