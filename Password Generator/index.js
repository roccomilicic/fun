const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const allCharacters = characters.concat(symbols)

let passLength = 15

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

let toggled = true
let toggleSymbolButtonEl = document.getElementById("toggleSymbols")

function generatePasswords()
{ 
    // Generates passwords to be displayed to the DOM
    let passwordOne = ""
    let passwordTwo = ""
    let passwords = [passwordOne, passwordTwo]
    
    for (let i = 0; i < passwords.length; ++i) // Generates how many ever passwords are in the passwords array
    {
        for (let j = 0; j < passLength; ++j) // Passwords generated and the length is determined by passLength 
        {
            if (toggleSymbols() === true) // if toggledSymbols excludes symbols 
            {
                passwords[i] += characters[Math.floor(Math.random() * characters.length)]
            }
            if (toggleSymbols() === true) // if toggledSymbols includes symbols (use all characters)
            {
                const allCharacters = characters.concat(symbols)
                passwords[i] += allCharacters[Math.floor(Math.random() * allCharacters.length)]
            }
        }
    }
    passwordOneEl.textContent = passwords[0] // Display passwords to the DOM
    passwordTwoEl.textContent = passwords[1]
}

function toggleSymbols(status)
{   
    status = toggled
    
    if(status === false) // Includes symbols, changes button colour to green
    {
        toggled = true
        toggleSymbolButtonEl.style.backgroundColor = '#38a87b';
        toggleSymbolButtonEl.textContent = "Exclude symbols"
        
        return toggled
    }
    else // Excludes symbols,  changes button colour to red
    {
        toggled = false
        toggleSymbolButtonEl.style.backgroundColor = '#d94343';
        toggleSymbolButtonEl.textContent = "Include symbols"
        
        return toggled
    }

    function getRandomNumber()
    {
        // Returns random number to then be picked from character and/or symbol array(s)
        return Math.floor(Math.random * characters.length)
    }
}

