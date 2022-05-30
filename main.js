if (card.style.display != "none") {
    card.addEventListener("mouseover", function() {
        show(document.getElementById("description"));
    })
    card.addEventListener("mouseleave", function() {
        hide(document.getElementById("description"));
    })
}
var unecarteestretourner = false;


function ReturnCard() {
    //initialisation variable   
    var tabdescription = ["L'Amoureux;Que vous soyez célibataire, en couple, amoureux ou autre, la Clé de l’Amour vous assure que vous serez heureux et elle va vous porter chance dans vos relations. Vous ne serez jamais seul, ce n’est peut-être juste pas le bon moment (ou la bonne personne)!;The Lover;Whether you’re single, in a couple, in love or otherwise, the Key to Love assures you that you will be happy and it will bring you luck in your relationships. You will never be alone, it may just not be the right time (or the right person)!", "Le Mat;La Clé de la Vie vous informe que la vie vaut la peine d’être vécue, ne réfléchissez pas trop et prenez les choses comme elles viennent. Lâchez prise, tout va bien se passer. Souriez, respirez, et surtout vivez.;The Fool;The Key to Life informs you that life is worth living, do not think too much and take things as they come. Let go, everything will be fine. Smile, breathe, and above all live.", "La Force;Vous êtes une personne avec beaucoup de force et de courage, soit vous en avez conscience soit vous ne vous en doutez pas ! Ayez confiance en vous, nous sommes tous forts et déterminés à notre manière.;The Force;You’re a person with great strength and courage, either you are aware of it or you do not suspect it! Trust in you, we are all strong and determined in our own way."];
        var tabcarte = ["img/carter0.png", "img/carter1.png", "img/carter2.png", "img/carter4.png", "img/carter5.png", "img/carter6.png", "img/carter7.png", "img/carter8.png"];
        var rand = getRandomInt(3);
        console.log(rand);
        makedescr(tabdescription[rand], document.getElementById("description"));
        var card = document.getElementById("card");
        if (unecarteestretourner == true)
            {
                
            }
        document.getElementById("face-back").style.backgroundImage = "url(" + tabcarte[rand] +")";
        show (card);
        card.animate([
             { transform: 'rotateY(0deg)'},
             { transform: 'rotateY(360deg)'}
        ], {
            
            duration: 2000,
        })
}

function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
    }
}

function show (elements, specifiedDisplay) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = specifiedDisplay || 'block';
    }
}

function makedescr (lastring, labox) {
    let stringsplit = lastring.split(";");
    let newnamefr = document.createElement("h1");
    let newpfr = document.createElement("p");
    let newnameeng = document.createElement("h1");
    let newpeng = document.createElement("p");
    newnamefr.textContent = stringsplit[0];
    newpfr.textContent = stringsplit[1];
    newnameeng.textContent = stringsplit[2];
    newpeng.textContent = stringsplit[3];
    labox.append(newnamefr);
    labox.append(newpfr);
    labox.append(newnameeng);
    labox.append(newpeng);
}
window.onload = function() {
    hide(document.getElementById('card'));
    hide(document.getElementById('description'));
    //document.getElementById("btn").addEventListener("click", ReturnCard);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  