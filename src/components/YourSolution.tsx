// Je crée un dossier JS car je ne connais pas (encore)
// typeScript et style component.

// Le but de l'exercice, c'est de faire apparaitre le nombre d'étoiles
// (stargazer)
// pour un repo précis d'un utilisateur github. (si on suit
// la requête à l'api github proposée dans l'énoncé). A savoir utilisateur: facebook
// et le repo: react

// Je commence par étudier le code.

// A faire:
// - Créer en dur le compteur avec https://buttons.github.io/ (= api "officielle" fait quasiment tout le travail
// mais il n'a pas la même forme que celui de l'exemple). Il y a celle ci, mais on ne peut pas écrire "react"
// https://ghbtns.com/ mais elle pourrait disparaitre à la différence de "l'officielle"
// - intégrer le hook d'état - dans App, les props envoient les états (facebook et React)
// je n'arrive pas à les utiliser. Je les enlève et fais comme j'ai "l'habitude"
// - intégrer l'appel à l'api et le hook d'effet

import React, { useState, useEffect } from "react";

// Import bibliothèque pour créer le bouton compteur
import GitHubButton from "react-github-btn";

// Import axios, methode ajax pour l'appel à l'api de github
import axios from "axios";

export const YourSolution = () => {
  // State pour le nom du compte github
  const [name, setName] = useState("Facebook");

  // State pour le nom du repo du compte github
  const [repo, setRepo] = useState("react");

  // State pour récupérer la liste en bdd
  const [getLists, setGetLists] = useState([]);
  console.log("getLists:", getLists.stargazers_count);

  // constante prévue au départ pour l'appel à l'api github
  const getRepositoryInformation = () => {
    axios
      .get(`https://api.github.com/repos/${name}/${repo}`)
      .then((responses) => {
        console.log("responses:", responses);
        setGetLists(responses.data);

        console.log("responses.data:", responses.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Rendu de l'appel à l'api
  useEffect(() => {
    getRepositoryInformation();
  }, []);

  return (
    <div>
      <GitHubButton
        className="boutonOfficiel"
        href={`https://github.com/${name}/${repo}`}
        data-size="large"
        data-show-count="true"
        aria-label="Star on GitHub"
      >
        React
      </GitHubButton>
      <div className="solutionMain">
        <h1>{repo}</h1>
        <div>{getLists.stargazers_count}</div>
      </div>
      <iframe
        className="solutionTrois"
        src={`https://ghbtns.com/github-btn.html?user=${name}&repo=${repo}&type=star&count=true&size=large`}
        frameborder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
    </div>
  );
};
