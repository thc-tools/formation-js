// Constructeur Prototypes
import * as _ from 'lodash'

const superbeObjet = { 
    nom: 'Rodrigo',
    direBonjour: function (){
      console.log(`Bonjour ${this.nom}`)
    }
  };

const analyse = () => {
    superbeObjet.direBonjour();
    superbeObjet.direBonjour.call({});
    superbeObjet.direBonjour.call({nom: 'Thomas'});
}
// 1. Exécuter la commande npm run exercice3. Comment expliquez-vous les résultats obtenus ?
analyse();

// 2. Ecrire le contructeur de Personne contenant un nom
// 3. Ajouter au prototype de Personne la fonction dire bonjour.
/* 4. Appeler ce constructeur pour chacun des membres de l'équipe, et renvoyer un tableau
 des personnes de l'équipe après qu'elles aient chsune dit Bonjour. */
export const team = ['Amelie', 'Thomas', 'Guénolé', 'Pierre'];
const helloTeam = (array) => {
  return  [{nom: 'Amelie'}, {nom: 'Thomas'}, {nom: 'Guénolé'}, {nom: 'Pierre'}];
}

export {helloTeam};
