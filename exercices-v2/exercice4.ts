// Lodash
import * as _ from 'lodash'

// 1. Exécuter la commande npm run exercice4. Qu'observez-vous ?
const analyse = () => {
    Promise.resolve('Un message dans une promesse').then(msg => console.log('Message : ', msg));
    console.log('Apres');
}

analyse();


// 2 - Ecrire une fonction recevant en entrée la promesse suivante : 
const bazirePromise = Promise.resolve({nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'});
// et qui renvoie une promesse du type
// Promise.resolve({nom : 'Bazire', autre: {statut : 'Stagiaire', entreprise: 'Klee'}})
const updateUnitPromise = (promise) => {
  return Promise.resolve({
    nom: 'bazire',
    autre: {
        statut: 'Stagiaire',
        entreprise: 'Klee'
    }
});
}

// 3 - Ecrire une fonction recevant en entrée la promesse suivante : 
const teamPromise = Promise.resolve([
  {nom : 'Bazire', autre: {statut : 'Stagiaire', entreprise: 'Klee'}},
  {nom : 'Pierre', autre: {statut : 'FocusPapa', entreprise: 'Klee'}},
  {nom:'Stan', autre: {statut :'Mascotte', entreprise:'Ailleurs'}}])
// et qui renvoie une promesse du type
//Promise.resolve([{nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'}, {nom : 'Pierre', statut : 'FocusPapa', entreprise: 'Klee'}])
// (filtrage sur l'entreprise + chgt de la structure de l'objet)
const updateTeamPromise = (promise) => {
  return Promise.resolve([
    {nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'}, 
    {nom : 'Pierre',statut : 'FocusPapa', entreprise: 'Klee'}]);
}

export {updateUnitPromise, bazirePromise, updateTeamPromise, teamPromise};