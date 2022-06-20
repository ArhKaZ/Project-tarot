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
    var tabdescription = ["L'Amoureux;Que vous soyez célibataire, en couple, amoureux ou autre, la Clé de l’Amour vous assure que vous serez heureux et elle va vous porter chance dans vos relations. Vous ne serez jamais seul, ce n’est peut-être juste pas le bon moment (ou la bonne personne)!;The Lover;Whether you’re single, in a couple, in love or otherwise, the Key to Love assures you that you will be happy and it will bring you luck in your relationships. You will never be alone, it may just not be the right time (or the right person)!", "Le Mat;La Clé de la Vie vous informe que la vie vaut la peine d’être vécue, ne réfléchissez pas trop et prenez les choses comme elles viennent. Lâchez prise, tout va bien se passer. Souriez, respirez, et surtout vivez.;The Fool;The Key to Life informs you that life is worth living, do not think too much and take things as they come. Let go, everything will be fine. Smile, breathe, and above all live.", "La Force;Vous êtes une personne avec beaucoup de force et de courage, soit vous en avez conscience soit vous ne vous en doutez pas ! Ayez confiance en vous, nous sommes tous forts et déterminés à notre manière.;The Force;You’re a person with great strength and courage, either you are aware of it or you do not suspect it! Trust in you, we are all strong and determined in our own way.", "La Papesse;Soyez curieux, la Clé de la Connaissance vous informe qu’il faut faire preuve de curiosité, que rien n’est perdu. Ouvrez les yeux, regardez autour de vous. L’apprentissage est à la portée de tous.;The High Priestess;Be curious, the Key to Knowledge tells you to be curious, that nothing is lost. Open your eyes, look around you. Learning is within everyone’s reach.", "Le Chariot;La Clé de la réussite est présente ici pour vous rappeler que rien n’est perdu, et que quand on veut on peut. Si vous avez des objectifs, poursuivez les. Personne ne le fera à votre place.;The Chariot;The Key to Success is here to remind you that nothing is lost, and that when we want we can. If you have goals, pursue them. No one will do it for you.", "Le Jugement;Ne soyez pas trop dur avec vous-même, concentrez- vous sur l’essentiel et allez de l’avant. La Clé de la Liberté vous invite à prendre votre envol vers vos vœux les plus chers, n’ayez plus peur et prenez les devants.;The Judgement;Don’t be too hard on yourself, focus on the basics and move forward. The Key to Freedom invites you to take your flight to your dearest wishes, no longer be afraid and take the lead."];
        var tabcarte = ["img/carter0.png", "img/carter1.png", "img/carter2.png",  "img/carter3.png", "img/carter4.png", "img/carter5.png"];
        var rand = getRandomInt(6);
        var card = document.getElementById("card");
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
    if (elemen.length > 0){
       $(".description").empty();
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
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  