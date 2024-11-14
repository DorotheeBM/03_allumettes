//let nbAllumettes = 50
//let Joueurs = []
//let joueurActuel = 0

// Fonction demander au joueur de retirer des allumettes entre 1 et 6 (+Math.min() lorqu'on arrive au redier round de moins de 6 allumettes)
function allumettesARetirer(nbAllumettes) {
    while (true) {
        let nbRetire = parseInt(prompt(`${Joueurs[joueurActuel]}: Combien d'allumettes voulez-vous retirer ? (entre 1 et ${Math.min(6, nbAllumettes)})`));
        let WarningMoinsSixAllumettes = (nbRetire >= 1 && nbRetire <= Math.min(6, nbAllumettes));
        
        if (!isNaN(nbRetire) && WarningMoinsSixAllumettes) {
            return nbRetire;
        }
        alert(`Impossible ! Vous devez retirer entre 1 et ${Math.min(6, nbAllumettes)} allumettes.`);
    }
}

// Fonction pour jouer une partie
function gamePlay(nbJoueurs) {  
    alert(`Début de la partie avec ${nbJoueurs} Joueurs !`);
    
    while (nbAllumettes > 0) {
        alert(`Il reste ${nbAllumettes} allumettes.`);
        
        let nbRetire = allumettesARetirer(nbAllumettes);
        nbAllumettes -= nbRetire;
        
        if (nbAllumettes === 0) {
            alert(`Le ${Joueurs[joueurActuel]} a gagné !`);
            break;
        }
        
        // Passer au joueur suivant
        joueurActuel = (joueurActuel + 1) % nbJoueurs;
    }
}

// Fonction principale pour démarrer le jeu
function demarrerJeu() {
    // Demander le nombre de Joueurs
    let nbJoueurs;
    while (true) {
        nbJoueurs = parseInt(prompt(`Combien de Joueurs participent ? (minimum 2)`));
        if (!isNaN(nbJoueurs) && nbJoueurs >= 2) {
            break;
        }
        alert(`Vous devez entrer un nombre de Joueurs supérieur ou égal à 2.`);
    }
    
    // Réinitialiser le tableau des Joueurs
    Joueurs = [];  

    // Créer les noms des Joueurs (1,2,n)
    for (let i = 1; i <= nbJoueurs; i++) {
        Joueurs.push(`Joueur ${i}`);
    }
    
    // Lancer la première partie
    nbAllumettes = 50
    joueurActuel = 0 // Réinitialiser l'index du joueur actuel
    gamePlay(nbJoueurs)
    
    // Proposer de rejouer
    if (confirm(`Voulez-vous faire une nouvelle partie ?`)) {
        demarrerJeu()
    }
}

demarrerJeu()