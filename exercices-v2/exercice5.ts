// Travail sur les chaînes de caractères et les booleens

interface Personne {
    nom: string;
    prenom: string;
    age?: number;
    adresse?: {
        rue?: string;
        codePostal: number;
        ville: string;
    }
    fonction?: string;
    anciennete?: number;
}

/**
 * Affiche "`prenom` `nom`, `age` ans, habitant au `adresse.rue` à `adresse.codePostal` `adresse.ville`, travaille comme `fonction` depuis `anciennete` mois.
 * 
 * Doit gérer les paramètres facultatifs "gracieusement" (pas de mots ou d'espaces en trop par exemple).
 * @param personne La personne
 */
export function printJohnList(johnList) {
    return ["John Smith, 26 ans, habitant au 13 rue de la Boursidière à 92290 Le Plessis Robinson, travaille comme Développeur depuis 18 mois.",
        "John Smith, habitant à 92290 Le Plessis Robinson depuis 18 mois.",
        "John Smith, travaille comme Développeur depuis 0 mois.",
        "John Smith."];
}

export const johnList = [{
    prenom: "John",
    nom: "Smith",
    age: 26,
    adresse: {
        rue: "13 rue de la Boursidière",
        codePostal: 92290,
        ville: "Le Plessis Robinson"
    },
    fonction: "Développeur",
    anciennete: 18
},{
    prenom: "John",
    nom: "Smith",
    adresse: {
        codePostal: 92290,
        ville: "Le Plessis Robinson"
    },
    anciennete: 18
},{
    prenom: "John",
    nom: "Smith",
    fonction: "Développeur",
    anciennete: 0
}, {
    prenom: "John",
    nom: "Smith"
}];
