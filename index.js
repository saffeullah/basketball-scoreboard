let guestEl = document.getElementById("guest-score")
let homeEl = document.getElementById("home-score")

// this function takes team and score variables and based on the parameters calculates the score of that particular team
function score(team, score){
    let homeScore = parseInt(homeEl.textContent)
    let guestScore = parseInt(guestEl.textContent)
     if(team == 'home' && score == 0) {
        
         homeEl.textContent = 0
    } 
    if(team == 'home' && score == 1) {
        
         homeEl.textContent = ++homeScore
    }
    if(team == 'home' && score == 2) {
         homeEl.textContent = homeScore+2
    }
     if(team == 'home' && score == 3) {
         homeEl.textContent = homeScore+3
    }
    if(team == 'guest' && score == 0) {
        
         guestEl.textContent = 0
    } 
    if(team == 'guest' && score == 1) {
        
         guestEl.textContent = ++guestScore
    }
    if(team == 'guest' && score == 2) {
         guestEl.textContent = guestScore+2
    }
     if(team == 'guest' && score == 3) {
         guestEl.textContent = guestScore+3
    }
}



