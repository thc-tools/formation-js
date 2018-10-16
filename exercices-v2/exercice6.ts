import * as _ from 'lodash';

// Exercice 6
export const entry = [4, 8, 15, 16, 23, 42];

// Objet de la forme {[i]: i * 3} pour `i` dans entry
export const mapArrayToObject = (array) => {
    return {
        4: 12,
        8: 24,
        15: 45,
        16: 48,
        23: 69,
        42: 126
    };
};

export const entry2 = {
    list1: [1, 2, 3, 4],
    list2: [4, 34, 3, 122],
    list3: [1, 232, 45, 25]
}
export const sumElementList = (object) => {
    let s =0;
    for(const o in object){
        for(const p in object[o]){
            s = s + object[o][p];
        }
    }
    return s;
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
    return _.reduce(object, function(result, value, key) {
        result[value["key"]] = (result[value["key"]] || 0) + value["value"];
        return result;
      }, {});
};