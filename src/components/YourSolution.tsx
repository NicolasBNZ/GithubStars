// Le but de l'exercice, c'est de faire apparaitre le nombre d'étoiles
// (stargazer) d'un repo précis d'un utilisateur github.

// Je commence par étudier le code. Et découvrir codesandbox, typescript et styles component

// A faire:
// - Créer en dur le compteur
// - intégrer le hook d'état - dans App, les props envoient les états (facebook et React)
// je n'arrive pas à les utiliser. Je les enlève et fais un champ controlé comme j'ai "l'habitude"
// mais avec des states en dur. L'objet n'est pas d'ajouter des champs pour les users et repos.
// - intégrer l'appel à l'api et le hook d'effet.

import React, { useState, useEffect } from "react";

// Import bibliothèque pour créer le bouton compteur "officiel"
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

  // constante prévue au départ pour l'appel à l'api github
  const getRepositoryInformation = () => {
    axios
      .get(`https://api.github.com/repos/${name}/${repo}`)
      .then((responses) => {
        setGetLists(responses.data);
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
      {/* Solution avec https://buttons.github.io/ = api "officielle" fait quasiment tout le travail 
    mais le bouton n'a pas la même forme que celui de l'exemple. */}
      <GitHubButton
        className="boutonOfficiel"
        href={`https://github.com/${name}/${repo}`}
        data-size="large"
        data-show-count="true"
        aria-label="Star on GitHub"
      >
        React
      </GitHubButton>
      {/* Solution 'à la main" avec l'appel à l'api. Pas du tout mis en page. Je ne suis pas encore à l'aise avec 
    styled-components*/}
      <div className="solutionMain">
        <h2>{repo}</h2>
        <div>{getLists.stargazers_count}</div>
      </div>
      {/* Troisième possibilité, mais on ne peut pas écrire "react", il faut laisser "star"
    https://ghbtns.com/ mais elle pourrait disparaitre à la différence de "l'officielle"  */}
      <iframe
        className="solutionTrois"
        src={`https://ghbtns.com/github-btn.html?user=${name}&repo=${repo}&type=star&count=true&size=large`}
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
    </div>
  );
};
