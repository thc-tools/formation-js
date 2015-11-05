// Exercice sur les modules

import {SAUCE} from './exercice1';
import func from './exercice1';
import {reduceArray} from './exercice2';
import {renewComputers} from './exercice3';
import {recognizeYourMaster} from './exercice4';
import {TABLEAU_TECHNOS, MAP_MARQUES_KLEE} from './data';

if (SAUCE !== 'sauce algérienne') {
    throw new Error('Echec de l\'exercice 1');
}

if (func('Votre faim') !== 'Votre faim est maintenant étanchée.') {
    throw new Error('Echec de l\'exercice 1');
}

if (reduceArray(TABLEAU_TECHNOS) !== 'C#JAVAJAVASCRIPT') {
    throw new Error('Echec de l\'exercice 2');
}

if (renewComputers(MAP_MARQUES_KLEE)[0] !== 'apple') {
    throw new Error('Echec de l\'exercice 3');
}

if (recognizeYourMaster(TABLEAU_TECHNOS)[0] !== 'javascript') {
    throw new Error('Echec de l\'exercice 4');
}
