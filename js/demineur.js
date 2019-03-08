var nbMine
var dmineLenghtX
var dmineLenghtY
var tabDem = []
var setBomb = new Set([])
// Case id : cX.Y
// Row id : rX
// Icone Bomb id : bX.Y
// text des bombs id : bTxtX.Y


// init_debug

function init_debug() {
    nbMine = 10
    dmineLenghtX = 20
    dmineLenghtY = 20

    var MainDiv = document.getElementById("DivGame")
    //Creer la div du jeu
    var DivDemineur = document.createElement("div")
    DivDemineur.id = "DivDemineur"
    //Creer chacun des sous div selon parametre
    for (var x = 0; x < dmineLenghtX; x++) {
        var DivRow = document.createElement("div")
        DivRow.id = 'r'+x
        DivRow.classList.add("Row_Demineur")
        for (var y = 0; y < dmineLenghtY; y++) {

            //Case cote HTML en Div
            var SousDiv = document.createElement("div")
            var xSTR = x.toString()
            var ySTR = y.toString()
            SousDiv.id = "c"+ xSTR +"."+ ySTR
            SousDiv.classList.add("Case_demineur_init")
            DivRow.appendChild(SousDiv)

            // icone de bombe
            var bombDiv = document.createElement("i")
            bombDiv.classList.add('display_off')
            bombDiv.classList.add('fas')
            bombDiv.classList.add('fa-bomb')
            bombDiv.classList.add('textSize2em')
            bombDiv.id = "b"+ xSTR +'.'+ ySTR
            SousDiv.classList.add('flex_center')
            SousDiv.appendChild(bombDiv)

            // Div avec le text du nombre de Bomb a ajouter
            var numberDiv = document.createElement('div')
            numberDiv.classList.add('display_off')
            numberDiv.classList.add('textSize2em')
            numberDiv.id = "bTxt" + xSTR +'.'+ ySTR
            numberDiv.innerHTML= "0" // tout initialiser a 0
            SousDiv.appendChild(numberDiv)
            //Case cote js dans tabDem[][]

            ///
            ///
            ///


        }
        DivDemineur.appendChild(DivRow)
    }

    //Tableau avec les mines
    MainDiv.appendChild(DivDemineur)
    init_mine(nbMine)

    //Remplir le tableau en fonction des voisins
    setBomb.forEach(init_number)
}

//Initialiser les mines
function init_mine(n_mine) {
    debug_cpt = 0
    while (setBomb.size < n_mine) {
        debug_cpt++
        if (debug_cpt > 1000) {
            break
        }
        var nX = Math.ceil(Math.random()*(dmineLenghtX+1))-1
        var nY = Math.ceil(Math.random()*(dmineLenghtY+1))-1
        var caseMine = "c"+ nX.toString() +'.' + nY.toString()
        setBomb.add(caseMine)
    }
}


function init_number(s) {

    //Extraire les cases de l'id, les id sont de format "cX.Y"
    var nXY = s.substring(1)
    var nXYtab = nXY.split('.')
    var nX = parseInt(nXYtab[0])
    var nY = parseInt(nXYtab[1])
    //faire les ligne du haut
    var X = nX-1
    if (nY-1 >=0) { // valable si positif
        
        for (var i = -1; i < 2; i++) {
            caseIDX = nX-i
            caseIDY = nY-1
            caseID = c + (caseIDX.toString()) + (caseIDY.toString())
            var lacase = document.getElementById(s)

            //Viser la bonne case, bTxt0.0
        }
        // Case de gauche

        // Case de Droite
        // Ligne du bas
    }
}

//ajouter +1 à la case dans son innerHTML
function plusOneMine(e) {
    var txt = e.innerHTML
    var num = parseInt(txt)
    num++
    e.innerHTML = num.toString()
}