# Modules

Ecrire un fichier `exercice1.js` qui importe la variable `NOM_SAUCE` depuis le fichier `modules/frites.js`, ainsi que la fonction exposée par défault, et expose une variable `SAUCE` qui vaut `'sauce ' + NOM_SAUCE`.

Ce fichier devra également exposer par défault la fonction par défault de `module/frites.js`.

# Arrays, map, filter et reducer

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
        nom: 'Javascript',
        type: 'frontend+backend',
        swag: 'infini'
    }
]
```

1 - Ecrire une fonction qui prend en entrée le tableau précédent, et retourne un tableau de string des noms des langages

2 - Ecrire une fonction qui prend en entrée le tableau précédent, et retourne un tableau filtré sur les langages backend uniquement

3- Ecrire une fonction qui prend en entrée le tableau précédent et retourne les noms des langages concaténés.

Ecrire un fichier `exercice2.js` qui expose une fonction `reduceArray` qui prend le tableau


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
         type: 'frontend',
         swag: 'infini'
     }
 ]
 ```

 et retourne un tableau d'éléments dont le `swag` est non null, auxquels vous appliquerz la fonction exposée par le fichier `index.js` du dossier `map`.

# Promise

Ecrire un fichier `exercice5.js` qui expose une fonction `transformYourData` qui prend en argument le tableau

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
        type: 'frontend',
        swag: 'infini'
    }
]
```

et retourne un objet avec, qui contiendra les propriétés suivantes: {data: 'Le tableau trié par Swag puis par nom', une propriété totalCount qui contient le nombre d'élément}.
Le résultat doit retourner une promesse.

# Destruct

Ecrire un fichier `exercice6.js` qui expose une fonction `destructMyObject` qui prend en argument un objet de la forme {nom : 'David', prenom: 'LOPEZ', age , ...}.
Et retourne un nouvel objet qui aura la forme `{identite: {nom: 'David', prenom: 'Lopez'}, autresInfos: {/*Le reste*/}}`


# Backbone


Ecrire un fichier `exercice7.js` qui expose une fonction `createRouter`

Ce routeur doit pouvoir prendre en charge plusieurs routes 'home', 'contact/3' par exemple et afficher dans la console le nom de la route.
