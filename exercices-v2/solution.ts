import * as _ from 'lodash';

// exercice 1
const getNames = (languages) => {
    return languages.map(element => element.nom);
 };
 
 const getBackendLanguage = (languages) => {
     return languages.filter(element => element.type === 'backend');
 };
 // exercice 2
 const intersectionEntier = (tab1, tab2) => {
     return _.intersection(tab1, tab2);
 };
 
 const intersectionObjet = (tab1, tab2) => {
     return _.intersectionWith(tab1, tab2, _.isEqual);
 };
 
 const getConcatedNames = (languages) => {
     return getNames(languages).join(' : ');
 };
 const superbeObjet = { 
    name: 'Rodrigo',
    direBonjour(){
      console.log(`Bonjour ${this.name}`)
    }
  };
 // exercice 3
 const helloTeam = (array) => {
   function Personne(nom){
     this.nom = nom;
   }
   const result = new Array;
   for(const key in array) {
     result.push(new Personne(array[key]));
   }
   Personne.prototype.direBonjour = superbeObjet.direBonjour;
   _.forEach(result, element => {
     element.direBonjour();
   });
   return result;
 };
 
 // exercice 4
 const updateUnitPromise = (promise) => {
   return promise.then(content => {
   const {nom, statut, entreprise} = content;
     return Promise.resolve({
       nom,
       autre: {
         statut,
         entreprise
       }
   })
   });
 }
 const updateTeamPromise = (promise) => {
   return promise.then(content => {
     return Promise.resolve(content.filter(element => element.entreprise === 'Klee').map(content => {
       return {nom: content, ...content.autre};
     }));
   });
 }
 
 // exercice 5
 function printPersonne(personne: Personne) {
     const {prenom, nom, age, adresse, fonction, anciennete} = personne;
     let description = `${prenom} ${nom}`;
     function addToDescription(toAdd: String) {
         description = description + toAdd;
     }
     age && addToDescription(`, ${age} ans`);
     adresse && adresse.ville && addToDescription(`, habitant`);
     adresse && adresse.rue && addToDescription(` au ${adresse.rue}`);
     adresse && addToDescription(` à ${adresse.codePostal || ''} ${adresse.ville}`);
     fonction && addToDescription(`, travaille comme ${fonction}`);
     (anciennete || anciennete === 0) && addToDescription(` depuis ${anciennete} mois`);
     addToDescription('.');
 }
 const entry = [4, 8, 15, 16, 23, 42];
 const entry2 = {
    list1: [1, 2, 3, 4],
    list2: [4, 34, 3, 122],
    list3: [1, 232, 45, 25]
}
const entry3 = [{
    key: "A",
    value: 12 
}, {
    key: "B",
    value: 43 
}, {
    key: "B",
    value: 31 
}, {
    key: "A",
    value: 2 
}]
 // exercice 6
 import {chain, toPairs, mapValues, groupBy, sumBy} from "lodash";
 console.log(entry.reduce((acc, i) => ({...acc, [i]: i * 3}), {}));
 console.log(chain(entry2).values().flatten().sum().value());
 console.log(toPairs(mapValues(groupBy(entry3, elt => elt.key), o => sumBy(o, i => i.value))));
 /*
     return _.reduce(object, function(result, value, key) {
         result[value["key"]] = (result[value["key"]] || 0) + value["value"];
         return result;
       }, {});
 */
 // exercice 7
 async function asyncFetch(url: string) {
     try {
         const response = await fetch(url);
         const {status, headers} = response;
         const contentType = headers.get("Content-Type");
         const isJson = contentType && contentType.includes("application/json");
         const data = {url, status, data: await (isJson ? response.json() : response.text())};
         if (status === 200) {
             return data;
         } else {
             throw data;
         }
     } catch (e) {
         if (e.url) {
             throw e;
         }
         throw {url, error: "Failed to fetch"};
     }
 }
 
 function promiseFetch(url: string) {
     try {
         return fetch(url)
             .then<any>(response => {
                 const {status} = response;
                 const contentType = response.headers.get("Content-Type");
                 const isJson = contentType && contentType.includes("application/json");
                 const callback = data => ({url, status, data});
                 const promise = isJson ? response.json() : response.text();
                 if (status === 200) {
                     return promise.then(callback);
                 } else {
                     return promise.then(data => { throw callback(data); });
                 }
             });
     } catch (e) {
         return Promise.reject({url, error: "Failed to fetch"});
     }
 }
 
 // exercice 8
 
 import {reaction, observable, autorun, when, computed} from "mobx";
 import { NOMEM } from "dns";
 
 class Store {
     list = observable<string>([]);
 
     @computed
     get lastItem() {
         return this.list[this.list.length - 1];
     }
 
     @computed.struct
     get numberList() {
         return this.list.map(item => +item).filter(item => !Number.isNaN(item));
     }
 
     @computed
     get somme() {
         return this.numberList.reduce((sum, value) => sum + value, 0);
     }
 }
 
 const store = new Store();
 
 autorun(() => console.log("Liste :", store.list.slice()));
 when(() => store.list.length >= 5, () => console.log("5 éléments dans la liste !"));
 autorun(() => console.log("Somme :", store.somme));
 reaction(() => store.numberList, () => console.log("Nouveau nombre :", store.lastItem));