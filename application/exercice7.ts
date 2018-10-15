import readline = require('readline');
import {observable} from "mobx";

/* Créer un store de données comportant une liste observable d'éléments, et éventuellement des dérivations. */
class Store {
    list = observable<string>([])
}

const store = new Store();

function loop() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Ajouter un élément : ', answer => {
        store.list.push(answer);

        rl.close();
        loop();
    });
}

/* Afficher la liste à chaque insertion */
/* Afficher "5 élements dans la liste" lorsqu'on atteint les 5 éléments. */
/* Afficher la somme des nombres de la liste. */
/* Afficher le dernier élément ajouté si c'est un nombre (la réaction ne doit pas tourner dans le vide). */

loop();