const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const passLength = 15

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

let toggled = true
let toggleSymbolButtonEl = document.getElementById("toggleSymbols")

function getRandomNumber()
{
    return Math.floor(Math.random * characters.length)
}

function generatePasswords()
{
    let passwordOne = ""
    let passwordTwo = ""
    let passwords = [passwordOne, passwordTwo]
    
    for(let i = 0; i < passwords.length; ++i)
    {
        for(let j = 0; j < passLength; ++j)
        {
            if(toggleSymbols() === true)
            {
                passwords[i] += characters[Math.floor(Math.random() * characters.length)]  
            }
            if (toggleSymbols() === true)
            {
                const allCharacters = characters.concat(symbols)
                passwords[i] += allCharacters[Math.floor(Math.random() * allCharacters.length)]
            }
        }
    }
    
    passwordOneEl.textContent = passwords[0]
    passwordTwoEl.textContent = passwords[1]
}

/*function copyClick() 
{
  // Get the text field
  let copyText = document.getElementById("passwordOneEl");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}*/

function toggleSymbols(status)
{   
    status = toggled
    
    if(status === false) // Include symbols
    {
        toggled = true
        toggleSymbolButtonEl.style.backgroundColor = '#38a87b';
        toggleSymbolButtonEl.textContent = "Include symbols"
        
        return toggled
    }
    else // Exclude symbols
    {
        toggled = false
        toggleSymbolButtonEl.style.backgroundColor = '#d94343';
        toggleSymbolButtonEl.textContent = "Exclude symbols"
        
        return toggled
    }
}

