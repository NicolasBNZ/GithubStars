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

// Import du logo - je ne l'utilise pas, voir plus bas
// import { IconGithub } from "./index";

// Le fond rouge, c'est pour voir la petite flèche entre les deux cadres. :)
export const Disposition = styled.div`
  display: flex;
  /* background-color: red; */
`;

// une fonction pour les déclations CSS en commun aux deux parties
// du compteur
const commonStyle = `
    font-weight: bolder;
    border: 1px solid #D5D5D5;
    border-radius: 4px;
    padding: 4px 8px;
    `;

const LogoGithub = styled.span`
  margin: 0px 4px 0px 1px;
  padding: 0px 0px 2px 0px;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='12 12 40 40'%3e%3cpath fill='%23333' d='M32 13.4c-10.5 0-19 8.5-19 19 0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.2c-5.3 1.1-6.4-2.6-6.4-2.6-.9-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.7 4.8-.7 1.6 0 3.3.2 4.7.7 3.6-2.4 5.2-2 5.2-2 1 2.6.4 4.6.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.4 1.1 1.3.9 7.5-2.6 13-9.7 13-18.1 0-10.5-8.5-19-19-19z'/%3e%3c/svg%3e")
    0 0/100% 100% no-repeat;
`;

// Changer le padding du logo importé - je ne comprends pas pourquoi je ne peux
// pas écraser le style antérieur.  J'aurais préféré cette solution
// const LogoSeul = styled(IconGithub)`
//   width: 400px;
// `;

const LogoName = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  ${commonStyle};
  font-size: 15px;
  background: linear-gradient(#fafafa, #efefef);
  text-transform: capitalize;
`;

const Fleche = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #fafafa;
  position: absolute;
  top: 212px;
  left: 288px;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  ${commonStyle};
  font-size: 16px;
  background-color: #fafafa;
  margin-left: 5px;
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
      <Disposition>
        <LogoName>
          <LogoGithub />
          {repo}
        </LogoName>
        <Fleche />
        <Counter>{getLists.stargazers_count.toLocaleString("en-US")}</Counter>
      </Disposition>
    </div>
  );
};
