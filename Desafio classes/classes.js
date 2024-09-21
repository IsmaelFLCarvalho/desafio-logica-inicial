class Heros {
    constructor(idName, idAge, idType) {
        this.idName = idName;
        this.idAge = idAge;
        this.idType = idType;
    }

//attack with argument
textChallenger(idAtack){
    console.log(`O ${this.idName} atacou usando ${idAtack}.`);
    }
}

//list hero
let lentay = new Heros("Lentay", 32, "warior");
let bukogi = new Heros("Bukogi", 57, "mage");
let ginsui = new Heros("Ginsui", 40, "monk");
let kinsung = new Heros("Kin-Sung", 45, "ninja");

//attack based on the hero
function getAtackOfHero(hero) {
    if (hero.idType === "warior"){
        return "usou espada";
    } else if (hero.idType === "mage"){
        return "usou magia";
    } else if (hero.idType === "monk"){
        return "artes marciais";
    } else if (hero.idType === "ninja"){
        return "usou shuriken";
    }  else {
        return "usou ataque desconhecido";
    } 
}

//call Lentay
lentay.textChallenger(getAtackOfHero(lentay));
//call Kin-Sung
kinsung.textChallenger(getAtackOfHero(kinsung));
//call Ginsui
ginsui.textChallenger(getAtackOfHero(ginsui));
//call Bukogi
bukogi.textChallenger(getAtackOfHero(bukogi));


//                                                                                              ISMAEL CARVALHO.