# Progetto Settimana introduttiva
Obiettivo della settimana: rifare in html, css e JavaScript [questo design](https://github.com/camillatofani/project-mia-febbraio/blob/main/design/Portfolio-Desktop.png).
Qui la versione [mobile](https://github.com/camillatofani/project-mia-febbraio/blob/main/design/Portfolio-Mobile.png).

## Per clonare il repository:
```bash
git clone https://github.com/camillatofani/project-mia-febbraio.git
```

### Martedì 18
-  Visione del progetto
-  Preparazione della struttura del progetto
```bash
css
-style.css
img
-logo.png
js
-script.js
index.html
```
- Importazione font family da Google Font
- Creazione variabili colore css come da progetto
- Navbar versione desktop
- Setting principale button e button.secondary

### Mercoledì 19
- Rivisto tutto il lavoro di Martedì 18
- Integrato regole css per mobile
- Inserito sezioni hero, tool e about

### Giovedì 20
- Fatto un check della situazione del progetto rispetto a Mercoledì 19
- Iniziato a conoscere JavaScript: querySelector, console.log e addEventListener
```javascript
const toggle = document.querySelector('#toggle');
console.log(toggle);
toggle.addEventListener("click", function () {
  console.log("Il click funziona!");
});
```
- Inserito le regole JavaScript per il menu nella sua versione mobile e per la sezione about
- Visto come funzionano le funzioni passando dei parametri
```javascript
sayHello("Camilla");

function sayHello(name) {
  console.log("Ciao");
  console.log(name);
};
```
