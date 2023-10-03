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
                return 0
            case "feuille":
                console.log("Vous avez perdu")
                return 0
            
            case "ciseaux":
                console.log("Vous avez gagné!!!")
                return 1
            default:
                console.log("vorte saisie n'est pas bonne")
                break;
        }
    }
      else if(player == "feuille"){
            switch (comp) {
                case "pierre":
                    console.log("Vous avez gagné!!!")
                    return 1
                case "feuille":
                    
                    console.log("Egalité")
                    return 0
                
                case "ciseaux":
                    console.log("Vous avez perdu")
                    
                    return 0
                default:
                    console.log("vorte saisie n'est pas bonne")
                    break;
            }
    }
        else if(player == "ciseaux"){
                switch (comp) {
                    case "pierre":
                        console.log("Vous avez perdu")
                        return 0
                    case "feuille":
                        console.log("Vous avez gagné!!!")
                        return 1
                    case "ciseaux":
                        console.log("Egalité")
                        return 0
                    default:
                        console.log("vorte saisie n'est pas bonne")
                        break;
                }

    }
    else{
        console.log("errruerrr")
    }
}

function game(i){
    let score=0
    let maincomp=0
    for(let j=0;j<i;j++){
        maincomp=getComputerChoice()
        let mainJoueur = prompt ( "Saisissez un votre coup (Pierre, Feuille ou Ciseaux)" ,"Pierre" ) 
        console.log("ordi:"+maincomp+" Vous :"+ mainJoueur)
       score+= play(mainJoueur, maincomp)
    }
    console.log("Vous avez gagné "+score+" manche   ")
}

game(5)
