const pierre="Pierre"
const feuille="Feuille"
const ciseaux ="Ciseaux"

function getComputerChoice(){
    let number= Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return pierre
        case 1:
            return feuille
        case 2: 
            return ciseaux
    
        default:
            break;
    }
}

function play( playerSelection , computerSelection){
    player=playerSelection.toLowerCase()
    comp=computerSelection.toLowerCase()
    
    if(player == "pierre"){
        switch (comp) {
            case "pierre":
                console.log("Egalité")
                return "Egalité"
            case "feuille":
                console.log("Vous avez perdu")
                return "Vous avez perdu"
            
            case "ciseaux":
                console.log("Vous avez gagné!!!")
                return "Vous avez gagné!!!"
            default:
                console.log("vorte saisie n'est pas bonne")
                break;
        }
    }
      else if(player == "feuille"){
            switch (comp) {
                case "pierre":
                    console.log("Vous avez gagné!!!")
                    return "Vous avez gagné!!!"
                case "feuille":
                    
                    console.log("Egalité")
                    return "Egalité"
                
                case "ciseaux":
                    console.log("Vous avez perdu")
                    
                    return "Vous avez perdu"
                default:
                    console.log("vorte saisie n'est pas bonne")
                    break;
            }
    }
        else if(player == "ciseaux"){
                switch (comp    ) {
                    case "pierre":
                        console.log("Vous avez perdu")
                        return "Vous avez perdu"
                    case "feuille":
                        console.log("Vous avez gagné!!!")
                        return "Vous avez gagné!!!"
                    case "ciseaux":
                        console.log("Egalité")
                        return "Egalité"
                    default:
                        console.log("vorte saisie n'est pas bonne")
                        break;
                }

    }
    else{
        console.log("errruerrr")
    }
}


const buttons=document.querySelectorAll('button')
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      
      game(button)
     
    });
  });

const cont=document.querySelector("section")
const divRes=document.createElement('h1');
divRes.classList.add('reponse');
function game(button){
    const ordi=getComputerChoice()
    let txt =play(button.id, ordi)
    
    divRes.textContent=txt
    cont.appendChild(divRes)
    
}

