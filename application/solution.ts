// exercice 1
function printPersonne(personne: Personne) {
    const {prenom, nom, age, adresse, fonction, anciennete} = personne;
    let description = `${prenom} ${nom}`;
    function addToDescription(toAdd: String) {
        description = description + toAdd;
    }
    age && addToDescription(`, ${age} ans`);
    adresse && adresse.ville && addToDescription(`, habitant `);
    adresse && adresse.rue && addToDescription(` au ${adresse.rue}$`);
    adresse && addToDescription(`à ${adresse.codePostal || ''} ${adresse.ville}`);
    fonction && addToDescription(`, travaille comme ${fonction}`);
    anciennete && addToDescription(` depuis ${anciennete} mois.`);
    console.log(description);
}

// exercice 2

import {chain, toPairs, mapValues, groupBy, sumBy} from "lodash";
console.log(entry.reduce((acc, i) => ({...acc, [i]: i * 3}), {}));
console.log(chain(entry2).values().flatten().sum().value());
console.log(toPairs(mapValues(groupBy(entry3, elt => elt.key), o => sumBy(o, i => i.value))));

// exercice 3

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

// exercice 4

import {reaction, observable, autorun, when, computed} from "mobx";

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