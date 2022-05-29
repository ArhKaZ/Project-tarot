if (card.style.display != "none") {
    card.addEventListener("mouseover", function() {
        show(document.getElementById("description"));
    })
    card.addEventListener("mouseleave", function() {
        hide(document.getElementById("description"));
    })
}

function ReturnCard() {
        var tabdescription = []
        var tabcarte = ["img/carter1.png", "img/carter2.png", "img/carter3.png", "img/carter4.png", "img/carter5.png", "img/carter6.png", "img/carter7.png", "img/carter8.png"];
        var rand = getRandomInt(7);
        document.getElementById('face-back').style.backgroundImage = "url(" + tabcarte[rand] +")";
       // console.log(document.getElementById('face-back').style.backgroundImage)
        var card = document.getElementById("card");
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

window.onload = function() {
    hide(document.getElementById('card'));
    hide(document.getElementById('description'));
    document.getElementById("btn").addEventListener("click", ReturnCard);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  