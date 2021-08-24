// Le but de l'exercice, c'est de faire apparaitre le nombre d'étoiles
// (stargazer) d'un repo précis d'un utilisateur github.

// A faire:
// - Créer en dur le compteur
// - intégrer le hook d'état - dans App, les props envoient les états (facebook et React)
// je n'arrive pas à les utiliser. Je les enlève et fais un champ controlé comme j'ai "l'habitude"
// mais avec des states en dur. L'objet n'est pas d'ajouter des champs pour les users et repos.
// - intégrer l'appel à l'api et le hook d'effet.

import React, { useState, useEffect } from "react";

// Import axios, methode ajax pour l'appel à l'api de github
import axios from "axios";

// Import de styled components
import styled from "styled-components";

//  Création du style à partir d'ici
// une fonction pour les déclations CSS en commun aux deux parties
// du compteur

const commonStyle = `
  background-color: red;
    border-radius: 4px
    `;

export const LogoName = styled.div`
  ${commonStyle};
`;

export const Counter = styled.div`
  ${commonStyle};
`;

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
      .then((response) => {
        setGetLists(response.data);
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
      <div className="solutionMain">
        <LogoName>{repo}</LogoName>
        <Counter>{getLists.stargazers_count}</Counter>
      </div>
    </div>
  );
};
