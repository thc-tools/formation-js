import tape = require('tape')
import {languages, getNames, getBackendLanguage, getConcatedNames} from './exercice1';
import {intersectionEntier, monTableauEntier1, monTableauEntier2, intersectionObjet, monTableauObjet1, monTableauObjet2} from './exercice2';
import {updateUnitPromise, bazirePromise, updateTeamPromise, teamPromise} from './exercice4';
import {entry, entry2,entry3, getKeySum, mapArrayToObject, sumElementList} from './exercice6';

const ex1 = "Exercice 1";
tape(ex1, test => {
    console.log(ex1);
    test.deepEqual(getNames(languages), ['C#', 'Java', 'Javascript'], "Recuperation des noms de langages");
    const backEndResult = [{
        nom: 'C#',
        type: 'backend'
    },
    {
        nom: 'Java',
        type: 'backend'
    }]
    test.deepEqual(getBackendLanguage(languages), backEndResult, "Recuperation des langages Backend uniquement");
    test.deepEqual(getConcatedNames(languages), 'C# : Java : Javascript', "Concaténation des noms des langages, séparés par ' : ' ");
    test.end();
});

const ex2 = "Exercice 2";
tape(ex1, test => {
    console.log(ex2);
    test.deepEqual(intersectionEntier(monTableauEntier1, monTableauEntier2), [2], "Intersection de tableaux d'entiers avec Lodash");
    test.deepEqual(intersectionObjet(monTableauObjet1, monTableauObjet2), [{x:2, y:'Carotte'}], " Intersection de tableaux d'objets avec Lodash");
    test.end();
});

const ex3 = "Exercice 3";
tape(ex3, test => {
    console.log(ex3 + " : pas de test automatique pour cet exercice");
    test.end();
});

const ex4 = "Exercice 4";
tape(ex4, t => {
    console.log(ex4);
        updateUnitPromise(bazirePromise).then(data => {
            t.deepEqual(data, {
                nom: 'bazire',
                autre: {
                    statut: 'Stagiaire',
                    entreprise: 'Klee'
                }
            }, "Gestion des promesses");
        });
    updateTeamPromise(teamPromise).then(data => {
        t.deepEqual(data, [{nom : 'Bazire', autre: {statut : 'Stagiaire', entreprise: 'Klee'}}, {nom : 'Pierre', autre: {statut : 'FocusPapa', entreprise: 'Klee'}}], "Gestion des promesses avec destruct");
        t.end();
    });
});


const ex5 = "Exercice 5";
tape(ex5, test => {
    console.log(ex3 + " : pas de test automatique pour cet exercice");
    test.end();
});
//[4, 8, 15, 16, 23, 42];
const ex6 = "Exercice 6";
tape(ex6, test => {
    console.log(ex6);
   test.deepEqual(mapArrayToObject(entry), {
        4: 12,
        8: 24,
        15: 45,
        16: 48,
        23: 69,
        42: 126
    }, "Map sur un array");
    test.equal(sumElementList(entry2), 476, "Somme des éléments de la liste");
   test.deepEqual(getKeySum(entry3), {
        A: 14,
        B: 74}, "Objet rassemblant les sommes");
    test.end();
});