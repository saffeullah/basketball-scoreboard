let guestEl = document.getElementById("guest-score");
let homeEl = document.getElementById("home-score");

// Retrieve the DOM elements for the guest and home scores

// This function takes team and score variables and based on the parameters calculates the score of that particular team
function score(team, score) {
    // Get the current score for home and guest teams
    let homeScore = parseInt(homeEl.textContent);
    let guestScore = parseInt(guestEl.textContent);

    // Update the score based on the team and score parameters
    if (team === 'home' && score === 0) {
        // Set home score to 0
        homeEl.textContent = 0;
    } 
    if (team === 'home' && score === 1) {
        // Increase home score by 1
        homeEl.textContent = ++homeScore;
    }
    if (team === 'home' && score === 2) {
        // Increase home score by 2
        homeEl.textContent = homeScore + 2;
    }
    if (team === 'home' && score === 3) {
        // Increase home score by 3
        homeEl.textContent = homeScore + 3;
    }
    if (team === 'guest' && score === 0) {
        // Set guest score to 0
        guestEl.textContent = 0;
    } 
    if (team === 'guest' && score === 1) {
        // Increase guest score by 1
        guestEl.textContent = ++guestScore;
    }
    if (team === 'guest' && score === 2) {
        // Increase guest score by 2
        guestEl.textContent = guestScore + 2;
    }
    if (team === 'guest' && score === 3) {
        // Increase guest score by 3
        guestEl.textContent = guestScore + 3;
    }
}
