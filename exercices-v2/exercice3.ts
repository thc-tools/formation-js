// Lodash
import * as _ from 'lodash'

const superbeObjet = { 
    name: 'Rodrigo',
    direBonjour(){
      console.log(`Bonjour ${this.name}`)
    }
  };

const analyse = () => {
    superbeObjet.direBonjour();
    superbeObjet.direBonjour.call({});
    superbeObjet.direBonjour.call({name: 'Thomas'});
}
analyse();

// 1. Exécuter la commande npm run exercice3. Comment expliquez-vous les résultats obtenus ?
// 2 - Ecrire une fonction disant bonjour à l'équipe (['Amélie', 'Thomas', 'Guénolé', 'Pierre']), en utilisant le superbeObjet.
const helloTeam = () => {
}
export {helloTeam};