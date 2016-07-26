const SUPERBE_TABLEAU = [
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
];

// Utiliser map
const stringTab = SUPERBE_TABLEAU.map(t => t.nom);

// filtrer les backend only

const filtered = SUPERBE_TABLEAU.filter( t => t !== 'backend');

// Concaténer les nom avec un ':'

const concatenation = SUPERBE_TABLEAU.reduce((prev, current) => `${prev}: ${current.name}` , '')

// Promise 

Promise.resolve('Ta mere en slip').then(taMere => console.log('Message', taMere));
console.log('Apres');

//

const intersection = _.intersection([2, 1], [2, 3]);

// closure

const superbeObjet = { 
  name: 'Rodrigo',
  direBonjour(){
    console.log(`Bonjour enculé eh pardon ${this.name}`)
  }
}


console.log(superbeObjet.direBonjour())
console.log(superbeObjet.direBonjour.call({}))
console.log(superbeObjet.direBonjour.bind({name: 'Thomas'}).call({}))

