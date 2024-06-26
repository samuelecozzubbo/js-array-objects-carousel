const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos."
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
    }
  ];
  
  console.log(images);
  
//prendo il container
const itemsContainer = document.querySelector(".carousel-container");

images.forEach((element) => {
    //creare ad ogni iterazione l'elemento da inserire
    let itemContent = `<div class="item">
                            <div class = "imgcontainer">
                                <img src="${element.image}">
                                <div class = "imgtext">
                                    <h4>${element.title}</h4>
                                    <p>${element.text}</p>
                                </div>       
                            </div>                           
                        </div>`;
    //inseriamo il nuovo elemento nel contenitore
    itemsContainer.innerHTML += itemContent;
    return itemContent;
});
//seleziono tutti gli elementi item in pagina
const items = document.getElementsByClassName("item");
let activeItem = 0;
//mettiamo la calsse active al primo elemento per farlo vedere
items[0].classList.add("active");

//inserisco i bottoni
itemsContainer.innerHTML += `   <div class="arrowhead down">&#709;</div>
                                <div class="arrowhead up">&#708;</div>`;


//EVENTO CLICK DOWN
//seleziono il bottone down
const down = document.querySelector(".down");

//gestiamo il click su down
down.addEventListener("click",
    function() {
        console.log("Mi hai cliccato");
        
        // Togliamo la classe active all'item attivo corrente
        items[activeItem].classList.remove("active");

        // Verifico se siamo all'ultima immagine
        if (activeItem === items.length - 1) {
            activeItem = 0; 
        } else {
        activeItem = activeItem + 1; 
        }

        // Mettiamo la classe active alla nuova immagine attiva
        items[activeItem].classList.add("active");
    }
)

//EVENTO CLICK UP
//seleziono il bottone up
const up = document.querySelector(".up");

//gestiamo il click su up
up.addEventListener("click",
    function() {
        console.log("Mi hai cliccato su");
        
        // Togliamo la classe active all'item attivo corrente
        items[activeItem].classList.remove("active");

        // Verifico se siamo alla prima immagine
        if (activeItem === 0) {
            activeItem = items.length - 1; 
        } else {
            activeItem = activeItem - 1;
        }

        // Mettiamo la classe active alla nuova immagine attiva
        items[activeItem].classList.add("active");
    }
)