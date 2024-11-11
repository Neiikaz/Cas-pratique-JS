// Exercice 1 cas pratique
let jeux =['Dofus','LoL','Cod','RL','Valo'];//Mon tableau
for (let jeu of jeux){
    console.log(jeu);
}
jeux.push('WoW');//Ajoute 'WoW' à la fin de mon tableau
console.log(jeux);

// Supprime mon premier jeu de mon tableau
let corbeille = jeux.shift();//ça me supprime 'Dofus'
console.log(jeux); // M'affiche les autres jeux sans dofus
console.log(corbeille);// M'affiche dofus


// Utilisation diapo 57 / 53 / 31 /64 Exercice 2 cas pratique

//Tableaux avec mes notes
let notes = [10, 16, 15, 18, 9, 13, 17];
console.log(notes)
//Somme de mes notes
let somme = notes.reduce((sn, nombre) => sn + nombre,0);
console.log(somme); // Affiche la somme de toutes mes notes de mon tableau

//Note max de mon tableau
function noteMax(notes){
    return Math.max(...notes);
}
let max = noteMax(notes);
console.log(max);

//La moyenne de mes notes
console.log (somme/notes.length);

// Exercice cas pratique 3 

let lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];//Liste de lettre '26'
console.log(lettres)
let aleatoire =''; //Random
for (let i=0; i<8; i++){   //boucle de 8 lettres 
aleatoire += lettres[Math.floor(Math.random() * lettres.length)]; //random +1 lettes avec fonction multiplie par la largeur de mon tableau
}
console.log(aleatoire);// Mot générer aléatoirement

// Exercice Maison JS

//Exercice 1 : Tableau avec mes nombres/Addition des éléments d'un tableau 
let tableau = [1, 2 ,3 ,4 ,5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(tableau)
//La somme de tout les éléments de mon tableau avec méthode reduce
let calculsom = tableau.reduce((cst, chiffre) => cst + chiffre,0);
console.log(calculsom) // Afficher la somme de mon tableau


//Exercice Maison 2 Recherche d'élément dans un tableau 
// Utilisation de "if pour trouvé ou non trouvé"

let marque = ['Nike','Logitech','Harrys','Lipton','Monster','Daddy'];// Je créé mon tableau avec mes valeurs
console.log (marque) // Je veux afficher mon tableau
function rechercherElement(marque,search) { //Je créé ma fonction "rechercher" je veux consulter mon tableau et utilisé ma fonction "search"
for (let i = 0; i < marque.length; i++ ) {//Création d'une boucle, i égale a 0 et je veux que ma boucle parcours mon tableau du coup i++
    if (marque[i] === search) {
        return "Trouvé";
        }
    }
    return "Non trouvé";
}
let search = 'coca'; // Marque qui ne ce trouve pas dans mon tableau du coup "Non trouvé"
let resmar = rechercherElement(marque ,search);
console.log(resmar)


