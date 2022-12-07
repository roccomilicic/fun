let homeScore = 0
let homeScoreboard = document.getElementById("homePoints")

let guestScore = 0
let guestScoreboard = document.getElementById("guestPoints")

updateHome()
updateGuest()

function addHome(pointsToAdd)
{
    if(pointsToAdd == 1)
    {
        homeScore += 1
    }
    if(pointsToAdd == 2)
    {
        homeScore += 2
    }
    if(pointsToAdd == 3)
    {
        homeScore += 3
    }
    
    updateHome()
}

function addGuest(pointsToAdd)
{
    if(pointsToAdd == 1)
    {
        guestScore += 1
    }
    if(pointsToAdd == 2)
    {
        guestScore += 2
    }
    if(pointsToAdd == 3)
    {
        guestScore += 3
    }
    
    updateGuest(pointsToAdd)
}

function updateHome()
{
    homeScoreboard.innerText = homeScore
    leadingTeam()
}

function updateGuest()
{
    guestScoreboard.innerText = guestScore
    leadingTeam()
}

function leadingTeam() {
    if (guestScore > homeScore)
    {
        guestScoreboard.style.color = 'green'
        homeScoreboard.style.color = '#d43d3d'
    }
    if (guestScore < homeScore)
    {
        homeScoreboard.style.color = 'green'
        guestScoreboard.style.color = '#d43d3d'
    }
}
