/*if (card.style.display != "none") {
    card.addEventListener("mouseover", function() {
        show(document.getElementById("description"));
    })
    card.addEventListener("mouseleave", function() {
        hide(document.getElementById("description"));
    })
}*/
var unecarteestretourner = false;


function ReturnCard() {
    //initialisation variable   
    unecarteestretourner = true;
    var tabdescription = ["L'Amoureux;Que vous soyez célibataire, en couple, amoureux ou autre, la Clé de l’Amour vous assure que vous serez heureux et elle va vous porter chance dans vos relations. Vous ne serez jamais seul, ce n’est peut-être juste pas le bon moment (ou la bonne personne)!;The Lover;Whether you’re single, in a couple, in love or otherwise, the Key to Love assures you that you will be happy and it will bring you luck in your relationships. You will never be alone, it may just not be the right time (or the right person)!", "Le Mat;La Clé de la Vie vous informe que la vie vaut la peine d’être vécue, ne réfléchissez pas trop et prenez les choses comme elles viennent. Lâchez prise, tout va bien se passer. Souriez, respirez, et surtout vivez.;The Fool;The Key to Life informs you that life is worth living, do not think too much and take things as they come. Let go, everything will be fine. Smile, breathe, and above all live.", "La Force;Vous êtes une personne avec beaucoup de force et de courage, soit vous en avez conscience soit vous ne vous en doutez pas ! Ayez confiance en vous, nous sommes tous forts et déterminés à notre manière.;The Force;You’re a person with great strength and courage, either you are aware of it or you do not suspect it! Trust in you, we are all strong and determined in our own way."];
        var tabcarte = ["img/carter0.png", "img/carter1.png", "img/carter2.png", "img/carter4.png", "img/carter5.png", "img/carter6.png", "img/carter7.png", "img/carter8.png"];
        var rand = getRandomInt(3);
        var card = document.getElementById("card");
        if (unecarteestretourner == true)
            {
                
            }
        document.getElementById("face-back").style.backgroundImage = "url(" + tabcarte[rand] +")";
        show (card);
        card.animate([
             { transform: 'rotateY(0deg)'},
             { transform: 'rotateY(180deg)'}
        ], {
            
            duration: 1000,
        })
        card.style.transform="rotateY(180deg)";
        makedescr(tabdescription[rand], document.getElementById("description"));
        show(document.getElementById("description"));
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
    var elemen = $("#description *");
    console.log(elemen.length);
    if (elemen.length > 0){
       $(".description").empty();
       console.log("bite");
    }
    let stringsplit = lastring.split(";");
    $(".description").append("<h1>" + stringsplit[0] + "</h1>");
    $(".description").append("<p>" + stringsplit[1] + "</p>");
    $(".description").append("<h1>" + stringsplit[2] + "</h1>" );
    $(".description").append("<p>" + stringsplit[3] + "</p>");
    }

window.onload = function() {
    hide(document.getElementById('card'));
    hide(document.getElementById('description'));
    //document.getElementById("btn").addEventListener("click", ReturnCard);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  