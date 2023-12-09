
// ===============================================
// rock paper scissors using setinterval

let winscore = document.getElementById('wingame')
let lostscore = document.getElementById('lostgame')
let tiescore = document.getElementById('tiegame')
let youtext = document.getElementById('you-text')
const emoji1 = document.getElementById('emoji-dec')
let emoji2 = document.getElementById('emoji-dec-1')
let youname = document.getElementById('you-name')
let computername = document.getElementById('computer-name')


let scores = {
    wongame: 0,
    lostgame: 0,
    tiegame: 0
}






let computervalue = ''

function game() {
    let randomnum = Math.random()

    if (randomnum >= 0 && randomnum < 1 / 3) {
        computervalue = 'rock'
    }
    else if (randomnum >= 1 / 3 && randomnum < 2 / 3) {
        computervalue = 'paper'
    }
    else if (randomnum >= 2 / 3 && randomnum < 1) {
        computervalue = 'scissors'
    }
}

function rock() {
    let result = ''

    if (computervalue === 'rock') {
        result = 'tie'
    }
    if (computervalue === 'paper') {
        result = 'lost'
    }
    if (computervalue === 'scissors') {
        result = 'won'
    }

    console.log(result)

    // ****************************
    if (result === 'tie') {
        scores.tiegame += 1
    }
    else if (result === 'won') {
        scores.wongame += 1
    }
    else if (result === 'lost') {
        scores.lostgame += 1
    }
    // ****************************
    if (result === 'tie') {
        youtext.innerText = "you tie"

    }
    if (result === 'won') {
        youtext.innerText = "you won"
    }
    if (result === 'lost') {
        youtext.innerText = "you lost"
    }

    // **********************************
    emoji1.src = "pngwing.com(2).png"
    if (computervalue === 'rock') {
        emoji2.src = "pngwing.com(2).png"
    }
    else if (computervalue === 'paper') {
        emoji2.src = "pngwing.com(3).png"
    }
    else if (computervalue === 'scissors') {
        emoji2.src = "pngwing.com(4).png"
    }



    youname.innerText = "you"
    computername.innerText = "computer"
    // ****************************

    winscore.innerText = `Win: ${scores.wongame}`
    lostscore.innerText = `lost: ${scores.lostgame}`
    tiescore.innerText = `tie: ${scores.tiegame}`

}
function paper() {
    let result = ''

    if (computervalue === 'rock') {
        result = 'won'
    }
    if (computervalue === 'paper') {
        result = 'tie'
    }
    if (computervalue === 'scissors') {
        result = 'lost'
    }

    console.log(result)

    // ****************************
    if (result === 'tie') {
        scores.tiegame += 1
    }
    else if (result === 'won') {
        scores.wongame += 1
    }
    else if (result === 'lost') {
        scores.lostgame += 1
    }
    // ****************************
    if (result === 'tie') {
        youtext.innerText = "you tie"

    }
    if (result === 'won') {
        youtext.innerText = "you won"
    }
    if (result === 'lost') {
        youtext.innerText = "you lost"
    }

    // **********************************
    emoji1.src = "pngwing.com(3).png"
    if (computervalue === 'rock') {
        emoji2.src = "pngwing.com(2).png"
    }
    else if (computervalue === 'paper') {
        emoji2.src = "pngwing.com(3).png"
    }
    else if (computervalue === 'scissors') {
        emoji2.src = "pngwing.com(4).png"
    }



    youname.innerText = "you"
    computername.innerText = "computer"
    // ****************************

    winscore.innerText = `Win: ${scores.wongame}`
    lostscore.innerText = `lost: ${scores.lostgame}`
    tiescore.innerText = `tie: ${scores.tiegame}`

}

function scissors() {
    let result = ''

    if (computervalue === 'rock') {
        result = 'lost'
    }
    if (computervalue === 'paper') {
        result = 'won'
    }
    if (computervalue === 'scissors') {
        result = 'tie'
    }

    console.log(result)

    // ****************************
    if (result === 'tie') {
        scores.tiegame += 1
    }
    else if (result === 'won') {
        scores.wongame += 1
    }
    else if (result === 'lost') {
        scores.lostgame += 1
    }
    // ****************************
    if (result === 'tie') {
        youtext.innerText = "you tie"

    }
    if (result === 'won') {
        youtext.innerText = "you won"
    }
    if (result === 'lost') {
        youtext.innerText = "you lost"
    }

    // **********************************
    emoji1.src = "pngwing.com(4).png"
    if (computervalue === 'rock') {
        emoji2.src = "pngwing.com(2).png"
    }
    else if (computervalue === 'paper') {
        emoji2.src = "pngwing.com(3).png"
    }
    else if (computervalue === 'scissors') {
        emoji2.src = "pngwing.com(4).png"
    }



    youname.innerText = "you"
    computername.innerText = "computer"
    // ****************************

    winscore.innerText = `Win: ${scores.wongame}`
    lostscore.innerText = `lost: ${scores.lostgame}`
    tiescore.innerText = `tie: ${scores.tiegame}`

}




winscore.innerText = `Win: ${scores.wongame}`
lostscore.innerText = `lost: ${scores.lostgame}`
tiescore.innerText = `tie: ${scores.tiegame}`



function reset() {

    winscore.innerText = `Win: ${scores.wongame = 0}`
    lostscore.innerText = `lost: ${scores.lostgame = 0}`
    tiescore.innerText = `tie: ${scores.tiegame = 0}`
    youtext.innerText = "scores-reset"
}


function autoplay(params) {
    setInterval(() => {
        
    }, 2000);
}