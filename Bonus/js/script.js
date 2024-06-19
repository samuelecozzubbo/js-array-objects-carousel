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
    },
  ];
  
  console.log(images);
  
//prendo il container
const itemsContainer = document.querySelector(".carousel-container");
const thumbnailsContainer = document.querySelector(".thumbnails-container")

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
    let thumbnails = `  <div class = "thumbnail">
                          <img src="${element.image}">      
                        </div>`;
    //inseriamo il nuovo elemento nel contenitore
    itemsContainer.innerHTML += itemContent;
    thumbnailsContainer.innerHTML += thumbnails;
});
//seleziono tutti gli elementi item in pagina
const items = document.getElementsByClassName("item");
const thumbnail = document.getElementsByClassName("thumbnail");
let activeItem = 0;
//mettiamo la calsse active al primo elemento per farlo vedere
items[0].classList.add("active");
thumbnail[0].classList.add("thumbActive");

//inserisco i bottoni
thumbnailsContainer.innerHTML += `   <div class="arrowhead down">&#709;</div>
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
        thumbnail[activeItem].classList.remove("thumbActive");

        // Verifico se siamo all'ultima immagine
        if (activeItem === items.length - 1) {
            activeItem = 0; 
        } else {
        activeItem = activeItem + 1; 
        }

        // Mettiamo la classe active alla nuova immagine attiva
        items[activeItem].classList.add("active");
        thumbnail[activeItem].classList.add("thumbActive");
    }
);

//EVENTO CLICK UP

//seleziono il bottone up
const up = document.querySelector(".up");

//gestiamo il click su up
up.addEventListener("click",
    function() {
        console.log("Mi hai cliccato su");
        
        // Togliamo la classe active all'item attivo corrente
        items[activeItem].classList.remove("active");
        thumbnail[activeItem].classList.remove("thumbActive");

        // Verifico se siamo alla prima immagine
        if (activeItem === 0) {
            activeItem = items.length - 1; 
        } else {
            activeItem = activeItem - 1;
        }

        // Mettiamo la classe active alla nuova immagine attiva
        items[activeItem].classList.add("active");
        thumbnail[activeItem].classList.add("thumbActive");
    }
);

//gestisco il click sul thumbnail
for(let i = 0; i < images.length; i++){
  thumbnail[i].addEventListener("click",
    function() {
      console.log("hai cliccato il thumbnail");
      // Rimuoviamo la classe active dall'item attivo corrente
      items[activeItem].classList.remove("active");
      thumbnail[activeItem].classList.remove("thumbActive");

      // Aggiorniamo activeItem con l'indice del thumbnail cliccato
      activeItem = i;

      // Aggiungiamo la classe active all'item e al thumbnail cliccati
      items[activeItem].classList.add("active");
      thumbnail[activeItem].classList.add("thumbActive");
    }
  );
};

//AUTOPLAY
let autoplay = setInterval(   //Ripeti tot volte nel tempo questo:
    function() {
            // Rimuoviamo la classe active dall'item attivo corrente
            items[activeItem].classList.remove("active");
            thumbnail[activeItem].classList.remove("thumbActive");
      
            // Aggiorniamo activeItem con l'indice del thumbnail cliccato
            if(activeItem < images.length - 1){
              activeItem = activeItem + 1;
              console.log(activeItem);
            }else {
              activeItem = 0;
            }
            
      
            // Aggiungiamo la classe active all'item e al thumbnail cliccati
            items[activeItem].classList.add("active");
            thumbnail[activeItem].classList.add("thumbActive"); 
    }, 3000
);