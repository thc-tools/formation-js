# Modules

Ecrire un fichier `exercice1.js` qui importe la variable `NOM_SAUCE` depuis le fichier `modules/frites.js`, ainsi que la fonction exposée par défault, et expose une variable `SAUCE` qui vaut `'sauce ' + NOM_SAUCE`.

Ce fichier devra également exposer par défault la fonction par défault de `module/frites.js`.

# Reducers

Ecrire un fichier `exercice2.js` qui expose une fonction `reduceArray` qui prend le tableau

```javascript
[
    {
        nom: 'C#',
        type: 'backend'
    },
    {
        nom: 'Java',
        type: 'backend'
    },
    {
        nom: 'Javasript',
        type: 'fronted+backend',
        swag: 'infini'
    }
]
```
 et retourne une chaine de caractères concaténant l'ensemble des noms des objets du tableau, séparés par une virgule (`'C#JAVAJAVASCRIPT'`).

 # Filters + lodash's reduce

 Ecrire un fichier `exercice3.js` qui expose une fonction `renewComputers` qui prend en entrée l'objet

 ```javascript
 {
     apple: {
         present: false,
         wanted: true
     },
     hp: {
         present: true,
         wanted: true
     },
     acer: {
         present: false,
         wanted: false
     }
 }
 ```

 et retourne un tableau des marques non présentes mais désirées

 ```javascript
['apple']
 ```

 # Filters + map

 Ecrire un fichier `exercice4.js` qui expose une fonction `recognizeYourMaster` qui prend en argument le tableau

 ```javascript
 [
     {
         nom: 'C#',
         type: 'backend'
     },
     {
         nom: 'Java',
         type: 'backend'
     },
     {
         nom: 'Javasript',
         type: 'fronted',
         swag: 'infini'
     }
 ]
 ```

 et retourne un tableau d'éléments dont le `swag` est non null, auxquels vous appliquerz la fonction exposée par le fichier `index.js` du dossier `map`.
