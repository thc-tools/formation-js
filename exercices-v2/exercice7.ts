import fetchMock = require("fetch-mock");
import "isomorphic-fetch";

fetchMock.get("/ok", {status: 200, headers: {"Content-Type": "application/json"}, body: {lol: "yolo"}});
fetchMock.get("/error", {status: 404, body: "déso"})

async function asyncFetch(url: string) {
    // C'est l'exercice
}

function promiseFetch(url: string) {
    // C'est l'exercice
}

const succes = type => data => console.log(`Succès ${type} :`, data);
const erreur = type => error => console.log(`Erreur ${type} :`, error);

asyncFetch("/ok").then(succes("async  ")).catch(erreur("async  "));
asyncFetch("/error").then(succes("async  ")).catch(erreur("async  "));
asyncFetch("/déso").then(succes("async  ")).catch(erreur("async  "));
promiseFetch("/ok").then(succes("promise")).catch(erreur("promise"));
promiseFetch("/error").then(succes("promise")).catch(erreur("promise"));
promiseFetch("/déso").then(succes("promise")).catch(erreur("promise"));