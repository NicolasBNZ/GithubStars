// Je crée un dossier JS car je ne connais pas (encore)
// typeScript et style component.

// Le but de l'exercice, c'est de faire apparaitre le nombre d'étoiles
// (stargazer)
// pour un repo précis d'un utilisateur github. (si on suit
// la requête à l'api github proposée dans l'énoncé)

// Je commence par étudier le code.

// A faire:
// - Créer en dur le compteur avec https://buttons.github.io/ (+une dépendance)
// intégrer le hook d'état - dans App, les props envoient les états (facebook et React)
// je vais essayer sans hook d'état!!!
// intégrer l'appel à l'api et le hook d'effet import React from "react";

import GitHubButton from "react-github-btn";

const getRepositoryInformation = (user: string, repo: string) => `
  https://api.github.com/repos/${user}/${repo}
`;

export const YourSolution = () => {
  return (
    <div>
      <GitHubButton
        href="https://github.com/facebook/react"
        data-size="large"
        data-show-count="true"
        aria-label="Star facebook/react on GitHub"
      >
        React
      </GitHubButton>
    </div>
  );
};
