// Toggle
const toggle = document.querySelector('#toggle');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const body = document.querySelector('body');


console.log(closeMenu);

toggle.addEventListener("click", function () {
	menu.style.display = "flex";
	nav.style.padding = "0px";
	body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
	menu.style.display = "none";
	nav.style.padding = "20px 50px";
	body.style.overflow = "auto";
});


// About section

const aboutBtnSkills = document.querySelector('#aboutBtnSkills');
const aboutBtnAwards = document.querySelector('#aboutBtnAwards');
const aboutBtnEducation = document.querySelector('#aboutBtnEducation');

// First: Single Bar
const firstAboutBar = document.querySelector('#firstAboutBar');
const barsTitleFirst = firstAboutBar.querySelector('.bars-title');
const barsProgressFirst = firstAboutBar.querySelector('.bar-progress');
// Second: Single Bar
const secondAboutBar = document.querySelector('#secondAboutBar');
const barsTitleSecond = secondAboutBar.querySelector('.bars-title');
const barsProgressSecond = secondAboutBar.querySelector('.bar-progress');
// Third: Single Bar
const thirdAboutBar = document.querySelector('#thirdAboutBar');
const barsTitleThird = thirdAboutBar.querySelector('.bars-title');
const barsProgressThird = thirdAboutBar.querySelector('.bar-progress');


aboutBtnSkills.addEventListener("click", () => {
	changeAboutBarContent("User Experience Design - UI/UX", "90%", "Web & User Interface Design - Development", "75%", "Interaction Design - Animation", "82%");
	aboutBtnSkills.classList.remove("secondary");
})
aboutBtnAwards.addEventListener("click", () => {
	changeAboutBarContent("Primo titolo Awards", "57%", "Secondo titolo Awards", "12%", "Terzo titolo Awards", "96%");
	aboutBtnAwards.classList.remove("secondary");
})
aboutBtnEducation.addEventListener("click", () => {
	console.log('ho cliccato aboutBtnEducation');
	changeAboutBarContent("Primo titolo Education", "47%", "Secondo titolo Education", "83%", "Terzo titolo Education", "100%");
	console.log('ho finito la funzione changeAboutBarContent');
	aboutBtnEducation.classList.remove("secondary");
	console.log('ho rimosso classe secondary al pulsante aboutBtnEducation');
})

function changeAboutBarContent(firstTitle, firstWidth, secondTitle, secondWidth, thirdTitle, thirdWitdh) {
	console.log('sono entrata nella funzione changeAboutBarContent');
	// Add class secondary
	aboutBtnSkills.classList.add("secondary");
	aboutBtnAwards.classList.add("secondary");
	aboutBtnEducation.classList.add("secondary");
	console.log('ho cambiato le classi dei pulsanti');
	// Change text and %
	barsTitleFirst.textContent = firstTitle;
	barsProgressFirst.style.width = firstWidth;
	barsTitleSecond.textContent = secondTitle;
	barsProgressSecond.style.width = secondWidth;
	barsTitleThird.textContent = thirdTitle;
	barsProgressThird.style.width = thirdWitdh;
	console.log('ho cambiato i testi delle bars');
}
