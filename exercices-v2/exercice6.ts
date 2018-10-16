import * as _ from 'lodash';

// Exercice 6
export const entry = [4, 8, 15, 16, 23, 42];

// Objet de la forme {[i]: i * 3} pour `i` dans entry
export const mapArrayToObject = (array) => {
    return array.reduce((acc, v) => ({...acc, [v]: v * 3}), {})
};

export const entry2 = {
    list1: [1, 2, 3, 4],
    list2: [4, 34, 3, 122],
    list3: [1, 232, 45, 25]
}
export const sumElementList = (object) => {
    return _.chain(object).values().flatten().sum().value();
};
// Somme de tous les nombres des listes

export const entry3 = [{
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

// Liste des paires [key, somme(value)]
export const getKeySum = (object) => {
    return _.toPairs(_.mapValues(_.groupBy(entry3, elt => elt.key), o => _.sumBy(o, i => i.value)));
};