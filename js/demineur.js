var nbMine
var dmineLenghtX
var dmineLenghtY
var tabDem
var setBomb = new Set([])

// Format des id :
//      - Case id : cX.Y
//      - Row id : rX
//      - Icone Bomb id : bX.Y
//      - text des bombs id : tX.Y


// init_debug

///////////////
// 1)   Creer l'affichage de base
// 2)   Generer les mines
// 3.a) Remplir le tableau a 2 dimensions tabDem avec des chiffres
//          1-8 : nombre de mines voisins
//          0   : aucune mines
//          -1  : mine
// 3.b) Remplacer dans l'affichage les "0" par les nombres selon 3.a)

function init_debug() {
    // Parametre debug
    nbMine = 10
    dmineLenghtX = 10
    dmineLenghtY = 15
    tabDem = new Array(dmineLenghtY);
    for (var i = 0; i < dmineLenghtY; i++) {
        tabDem[i] = new Array(dmineLenghtX);
    }

    var MainDiv = document.getElementById("DivGame")

    ///////////////////////////////
    // 1) Affichage avec des Div //
    ///////////////////////////////

    // Toutes les cases en div "SousDiv" auront une paire de div :
    //      - numberDiv avec du text, initialement "0"
    //      - bombDiv avec icone de bomb
    // Les 2 divs sont cachees par la class display_off
    // Chacunes des SousDiv seront dans un div "DivRow" pour chaque ligne
    // Chaque Ligne de "DivRow" seront dans la div "DivDemineur"
    //
    // DivDemineur(DivRow(SousDiv(numberDiv,bombDiv)))


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

            // Div avec le text du nombre de Bomb a ajouter (initialise à 0)
            var numberDiv = document.createElement('div')
            numberDiv.classList.add('display_off')
            numberDiv.classList.add('textSize2em')
            numberDiv.id = "t" + xSTR +'.'+ ySTR
            numberDiv.innerHTML= "0" // tout initialiser a 0
            SousDiv.appendChild(numberDiv)

        }
        DivDemineur.appendChild(DivRow)
    }

    //////////////////////////
    // 2) Generer les mines //
    //////////////////////////

    //Tableau avec les mines
    MainDiv.appendChild(DivDemineur)
    init_mine(nbMine)

    //////////////////////////////////////
    // 3.a) Remplir le tableau tabDem   //
    //////////////////////////////////////

    //Remplir le tableau de 0
    //
    //
    for (var y=0; y < dmineLenghtY;y++) {
        for (var x=0; x < dmineLenghtX;x++) {
            tabDem[y][x] = 0
        }
    }

    //Remplir le tableau en fonction des voisins
    setBomb.forEach(init_number) //Pas fini
}

//Fonction pour initialiser les miens dans setBomb
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

           
        }
    }
}

//ajouter +1 à la case dans son innerHTML
function plusOneMine(e) {
    var txt = e.innerHTML
    var num = parseInt(txt)
    num++
    e.innerHTML = num.toString()
}