// Exercice 1

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
function printPersonne(personne: Personne) {
}

printPersonne({
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
});

printPersonne({
    prenom: "John",
    nom: "Smith",
    adresse: {
        codePostal: 92290,
        ville: "Le Plessis Robinson"
    },
    anciennete: 18
});

printPersonne({
    prenom: "John",
    nom: "Smith",
    age: 26,
    fonction: ""
});

printPersonne({
    prenom: "John",
    nom: "Smith",
    fonction: "Développeur",
    anciennete: 0
});

printPersonne({
    prenom: "John",
    nom: "Smith"
});
