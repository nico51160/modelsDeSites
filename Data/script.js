let boutons = document.querySelectorAll('button');
let pop     = document.getElementById('pop');
// Variables liées à la modale
let h2  = document.querySelector('#modale h2');
let img = document.querySelector('#modale img');
let p   = document.querySelector('#modale p');

for(bouton of boutons) {
    bouton.addEventListener('click', function() {
        pop.classList.add('active');
        h2.innerText = this.dataset.nom;
        img.setAttribute('src', `images/${this.dataset.img}.jpg`);
        img.getAttribute('src');
        p.innerHTML = `${this.dataset.nom} est né le ${this.dataset.naissance}. Il meurt le ${this.dataset.mort}.<br> Il fut le ${this.dataset.numero} président des Etats-Unis du ${this.dataset.debut} au ${this.dataset.fin}.<br> Son parti était le parti ${this.dataset.parti}. `;
    });
}

pop.addEventListener('click', function() {
    this.classList.remove('active');
});