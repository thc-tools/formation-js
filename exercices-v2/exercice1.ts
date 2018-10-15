// Arrays, map, filter et reducer
export const languages = [
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
      type: 'frontend+backend'
  }
];
// 1 - Ecrire une fonction qui prend en entrée le tableau précédent, et retourne un tableau de string des noms des langages
const getNames = (languages) => {
  return ['C#', 'Java', 'Javascript'];
};

//2 - Ecrire une fonction qui prend en entrée le tableau précédent, et retourne un tableau filtré sur les langages backend uniquement
const getBackendLanguage = (languages) => {
    return [{
        nom: 'Java',
        type: 'backend'
    },
    {
        nom: 'Javascript',
        type: 'frontend+backend'
    }];
};

// 3- Ecrire une fonction qui prend en entrée le tableau précédent et retourne les noms des langages concaténés, séparés par ' : ' .
const getConcatedNames = (languages) => {
    return 'C# : Java : Javascript';
};

export {getNames, getBackendLanguage, getConcatedNames};