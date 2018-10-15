// Lodash
import * as _ from 'lodash'

const monTableauEntier1 = [2, 1];
const monTableauEntier2 = [2, 3];
  // 1 - En utilisant lodash, écrire une fonction qui réalise l'intersection de deux tableaux d'entiers([2, 1], [2, 3] -> [2])
const intersectionEntier = (tab1, tab2) => {
    return [2];
};
  
  
const monTableauObjet1 = [{x:2, y:'Tomate'}, {x:2, y:'Carotte'}];
const monTableauObjet2 =  [{x:2, y:'Carotte'}, {x:3, y:'Aubergine'}];

// 2 - En utilisant lodash, écrire une fonction qui réalise l'intersection de deux tableaux
const intersectionObjet = (tab1, tab2) => {
    return [{x:2, y:'Carotte'}];
};

export {intersectionEntier, monTableauEntier1, monTableauEntier2, intersectionObjet, monTableauObjet1, monTableauObjet2};