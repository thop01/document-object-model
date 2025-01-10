# Document Object 

## Wat kan je met DOM?
Met de Document Object Model (DOM) kan je de structuur en inhoud van een webpagina dynamisch manipuleren. Dit betekent dat je elementen kunt toevoegen, verwijderen of aanpassen zonder de pagina opnieuw te laden.

## QuerySelector
De querySelector methode retourneert het eerste element dat overeenkomt met een opgegeven CSS-selector. Dit is handig om snel toegang te krijgen tot specifieke elementen op de pagina.

```const htmlElement = document.querySelector(".className");```

## innerHTML
De innerHTML eigenschap stelt je in staat om de HTML-inhoud van een element te lezen of te wijzigen. Dit is nuttig voor het dynamisch bijwerken van de inhoud van een webpagina.
```
 htmlElement.innerHTML = ""; // maakt leeg
 htmlElement.innerHTML += `<div> 
 ${variablename}
 </div>`
```

## textContent
De textContent eigenschap geeft de tekstinhoud van een element weer, zonder enige HTML-tags. Dit is handig als je alleen de tekst wilt manipuleren zonder de HTML-structuur te beïnvloeden.
``` htmlElement.textContent =  "andere tekst"```

## addEventListener
De addEventListener methode voegt een event listener toe aan een element, zodat je kunt reageren op gebruikersinteracties zoals klikken, muisbewegingen of toetsenbordaanslagen.
```
htmlElement.addEventListener("click", (event)=>){
    // do something

});
```



## Opdracht 1: querySelector + textContent
Verander de titel van de website naar een variabele in JavaScript.
1. Voeg een klasse toe aan de h1-tag. (index.html)
2. Selecteer de titel met behulp van querySelector. (main.js)
3. Verander de titel met behulp van textContent. (main.js)

### Opdracht 1b
Verander de subtitel van de website naar de variabele in JavaScript.

## Opdracht 2: querySelectorAll + for-loop
Verander de inhoudsopgave naar de array met verschillende planeten.
1. Voeg een klasse toe aan de ordered-list. (index.html)
2. Selecteer de ordered-list met behulp van ```querySelector```. (main.js)
3. Maak de lijst leeg met behulp van ```innerHTML = ""```.
4. Maak een ```for-loop``` voor alle planeten. (main.js)
5. Voeg met innerHTML de planeten toe aan de lijst. (main.js)

### Opdracht 2b
Verander de links naar de array-routes. In HTML is er al een klasse toegevoegd. De klasse is navigation.

## Opdracht 3: EventListener
Zorg ervoor dat je een planeet kunt toevoegen en direct kunt tonen op je pagina.

1. Selecteer de toevoegknop met behulp van ```querySelector```.
2. Voeg een EventListener toe aan de knop door middel van ```addEventListener```.
3. Zorg ervoor dat je de functie ```addPlanet```aanroept.
4. Controleer of alles in de functie goed geschreven is.

### opdracht 3b
Zorg ervoor dat je een link kan toevoegen en direct kan tonen op je pagina.

## Opdracht 4: classList
Als men op de knop “make dark” klikt, moet er een donker thema op de website komen. Dit kan je doen door de klasse dark toe te voegen. De CSS hiervoor is al geschreven.

1. Selecteer de “make-dark” knop en voeg een addEventListener toe.
2. Selecteer in de eventListener de body door middel van querySelector en voeg de klasse dark toe.

### Opdracht 4b
Als men op de knop “make light” klikt, moet de klasse dark weer verwijderd worden. Dit kan je doen met behulp van element.classList.remove.

### Opdracht 4c
Als men op de knop “switch theme” klikt, moet de klasse dark weggehaald worden als deze er is, en toegevoegd worden als deze er niet is.
