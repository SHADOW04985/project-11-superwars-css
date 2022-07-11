var arr = [0]
var hro = 0
var vln = 0
var hname = ['SpiderMan','Captain America','Wonder Woman','Ms Marvel','Nebula','Black Widow','Wanda','Captain Marvel','Cat Woman','Captain Falcon','Random dude','Speeed','Hulk','DeadPool','Black Panther','Dr. Strange','StarLord','Gamora','Wasp','Thanos']
var hp1 = 100
var hp2 = 100
var hp3 = 100
var hp4 = 100
var dmg = 0

x = random()
document.getElementById("h1").innerHTML = "<img src =./images/super-"+x+".png alt='Please Refresh:(' style='width:100px;height:100px;'><br>"+hname[x-1]
document.getElementById("h1scr").innerHTML = hp1

x = random()
document.getElementById("h2").innerHTML = "<img src =./images/super-"+x+".png alt='Please Refresh:(' style='width:100px;height:100px;'><br>"+hname[x-1]
document.getElementById("h2scr").innerHTML = hp2
x = random()
document.getElementById("h3").innerHTML = "<img src =./images/super-"+x+".png alt='Please Refresh:(' style='width:100px;height:100px;'><br>"+hname[x-1]
document.getElementById("h3scr").innerHTML = hp3
x = random()
document.getElementById("h4").innerHTML = "<img src =./images/super-"+x+".png alt='Please Refresh:(' style='width:100px;height:100px;'><br>"+hname[x-1]
document.getElementById("h4scr").innerHTML = hp4

function random() {
    var num = Math.floor(Math.random()*20)+1
    if (arr.indexOf(num) > -1) {
        random();
    }
    else {
        arr.push(num)
        return num
        
    }
}

async function sleep(seconds) {
    return new Promise((resolve)=>setTimeout(resolve,seconds*1000));
  }

function h1hp() {
    document.getElementById("h1scr").innerHTML = hp1
}
function h2hp() {
    document.getElementById("h2scr").innerHTML = hp2
}
function h3hp() {
    document.getElementById("h3scr").innerHTML = hp3
}
function h4hp() {
    document.getElementById("h4scr").innerHTML = hp4
}

function fight() {
    document.getElementById("winner").innerText = ""
    document.getElementById("btn").innerHTML = ""
    hp1 = 100
    h1hp()
    hp2 = 100
    h2hp()
    hp3 = 100
    h3hp()
    hp4 = 100
    h4hp()
    hero1()
}

async function hero1() {
    await sleep(1)
    dmg = (Math.floor(Math.random()*50)+1)
    if (hp3 === 0 && hp4 === 0) {
        hro += 1
        document.getElementById("winner").innerText = "SuperHero Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("heroscr").innerText = hro
    }
    if (hp1 === 0 && hp2 === 0) {
        vln += 1
        document.getElementById("winner").innerText = "SuperVillian Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("villscr").innerText = vln
    }
    
    if (hp1 === 0) {
        hero2()
    }
    else if (hp1 > dmg) {
        hp1 -= dmg
        h1hp()
        villian3()
    }
    else if (hp1 < dmg) {
        hp1 = 0
        h1hp()
        villian3()
    }
}

async function hero2() {
    dmg = (Math.floor(Math.random()*50)+1)
    if (hp3 === 0 && hp4 === 0) {
        hro += 1
        document.getElementById("winner").innerText = "SuperHero Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("heroscr").innerText = hro
    }
    if (hp1 === 0 && hp2 === 0) {
        vln += 1
        document.getElementById("winner").innerText = "SuperVillian Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("villscr").innerText = vln
    }
    if (hp2 > dmg) {
        hp2 -= dmg
        h2hp()
        villian3()
    }
    else if (hp2 < dmg) {
        hp2 = 0
        h2hp()
        villian3()
    }


}
    
async function villian3() {
    await sleep(1)
    dmg = (Math.floor(Math.random()*50)+1)
    if (hp3 === 0 && hp4 === 0) {
        hro += 1
        document.getElementById("winner").innerText = "SuperHero Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("heroscr").innerText = hro
    }
    if (hp1 === 0 && hp2 === 0) {
        vln += 1
        document.getElementById("winner").innerText = "SuperVillian Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("villscr").innerText = vln
    }
    if (hp3 === 0) {
        villian4()
    }
    else if (hp3 > dmg) {
        hp3 -= dmg
        h3hp()
        hero1()
    }
    
    else if (hp3 < dmg) {
        hp3 = 0
        h3hp()
        hero1()
    }    
}

async function villian4() {
    dmg = (Math.floor(Math.random()*50)+1)
    if (hp3 === 0 && hp4 === 0) {
        hro += 1
        document.getElementById("winner").innerText = "SuperHero Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("heroscr").innerText = hro
    }
    if (hp1 === 0 && hp2 === 0) {
        vln += 1
        document.getElementById("winner").innerText = "SuperVillian Wins!"
        document.getElementById("btn").innerHTML = "<input class='butn' type='button' onclick='fight()' value='FIGHT AGAIN?'></input>"
        return document.getElementById("villscr").innerText = vln
    }
    if (hp4 > dmg) {
        hp4 -= dmg
        h4hp()
        hero1()
    }
    else if (hp4 < dmg) {
        hp4 = 0
        h4hp()
        hero1()
    }
}