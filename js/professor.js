class PaginaProfessor{
    constructor(){
        this.vetorProfessor = [];
        this.uc;
    }
    displayUdadesCurriculares(){
        this.vetorProfessor= bancoProfessor.listar();
        for(var i=0;i<this.vetorProfessor.length;i++){
			if(this.vetorProfessor[i].usu == bancoSuporte.id){
                this.uc = this.vetorProfessor[i].unidadesCurriculares;
			}
        }
        mostrarUnidadesCurriculares(this.uc);
    }
    displayHome(){
        this.vetorProfessor= bancoProfessor.listar();
        for(let i=0;i<this.vetorProfessor.length;i++){
			if(this.vetorProfessor[i].usu == bancoSuporte.id){
                this.uc = this.vetorProfessor[i].unidadesCurriculares;
			}
        }
        displayHome(this.uc);
    }
}





var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");
var bancoSuporte = JSON.parse(localStorage.getItem("Suporte"));
var paginaProfessor = new PaginaProfessor();

var btnHome = document.querySelector("#homeAnchor");
var btnUnidadesCurriculares = document.querySelector("#unidadesCurricularesAnchor");
var btnMais = document.querySelector("#maisAnchor");

paginaProfessor.displayHome();

btnHome.addEventListener("click", function(){
    document.querySelector("#homeSection").className = "";
    document.querySelector("#unidadesCurricularesSection").className = "hidden";
    document.querySelector("#maisSection").className = "hidden";
    paginaProfessor.displayHome();
});

btnUnidadesCurriculares.addEventListener("click", function(){
    document.querySelector("#homeSection").className = "hidden";
    document.querySelector("#unidadesCurricularesSection").className = "";
    document.querySelector("#maisSection").className = "hidden";
    paginaProfessor.displayUdadesCurriculares();
});

btnMais.addEventListener("click", function(){
    document.querySelector("#homeSection").className = "hidden";
    document.querySelector("#unidadesCurricularesSection").className = "hidden";
    document.querySelector("#maisSection").className = "";
});


function dropDown() {
    document.getElementById("dropDownUser").classList.toggle("dropDownVisivel");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("contentDropDown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropDownVisivel')) {
        openDropdown.classList.remove('dropDownVisivel');
      }
    }
  }
}

function mostrarUnidadesCurriculares(unidadesCurriculares){
    var ul = document.getElementById("unidadesCurricularesList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for(var i = 0; i < unidadesCurriculares.length; i+=1){
        var li = document.createElement("li");

        var p1 = document.createElement("p");
        var textNode = document.createTextNode(unidadesCurriculares[i][0]);
        p1.appendChild(textNode);
        
        var p2 = document.createElement("p");
        var textNode = document.createTextNode(unidadesCurriculares[i][1]);
        p2.appendChild(textNode);

        li.appendChild(p1);
        li.appendChild(p2);
        ul.appendChild(li);
    }
}
function displayHome(unidadesCurriculares){
    var select = document.querySelector("#unidadeCurricularesSelect")
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    var option = document.createElement("option");
    var textNode = document.createTextNode("Selecione uma Disciplina");
    option.appendChild(textNode);
    option.value = "";
    option.selected - true;
    select.appendChild(option);
    for(let i = 0; i < unidadesCurriculares.length; i += 1){
        var option = document.createElement("option");
        var turma = unidadesCurriculares[i][1].slice(7,unidadesCurriculares[i][1].length);
        var textNode = document.createTextNode(unidadesCurriculares[i][0] + " - " + turma);
        option.appendChild(textNode);
        option.value = unidadesCurriculares[i][0] + " - " + turma;
        select.appendChild(option);
    }
}



function adicionarAtividade(){
    var opcaoSelecionada = bancoProfessor.selectedOption()
    var id = opcaoSelecionada.value;
    var titulo = document.getElementById("tituloInput").value;
    var data = document.getElementById("dataEntregaInput").value;
    var descricao = document.getElementById("descricaoTextarea").value;

    var bancoAtividades = new Array();
 
    if(localStorage.Atividades){
        bancoAtividades = JSON.parse(localStorage.getItem("Atividades"));
        bancoAtividades.push(new BancoAtividades(id, titulo, data, descricao));
        localStorage.setItem("Atividades", JSON.stringify(bancoAtividades));
    }
    else{
        bancoAtividades[0] = new BancoAtividades(id, titulo, data, descricao);
        localStorage.setItem("Atividades", JSON.stringify(bancoAtividades));
    }
}

displayAtividades();
function displayAtividades(){
    console.log("VEm");
    var atividadesAcionadas = document.getElementById("atividadesAcionadas");
    var ul = document.getElementById("atividadesAcionadasList"); 
    var li = document.createElement("li");
    
    var h2 = document.createElement("h2");
    var textNode = document.createTextNode("Texto");
    h2.appendChild(textNode);

    var pData = document.createElement("p");
    var textNode = document.createTextNode("Texto");
    pData.appendChild(textNode);

    var pDescricao = document.createElement("p");
    var textNode = document.createTextNode("Texto");
    pDescricao.appendChild(textNode);

    var id = document.createElement("p");
    var textNode = document.createTextNode("Texto");
    id.appendChild(textNode);

    uc = bancoProfessor.getUnidadesCurricularesUser(bancoSuporte.id);
    console.log(uc);
    
    for(let i = 0; i < uc.length; i+=1){
        let turma = uc[i][1].slice(7,uc[i][1].length);
        let idAtt = uc[i][0] + "- " + turma;  
        console.log(idAtt);
        if(idAtt == bancoAtividades[i].id){

        }
    }
    

    // var dados = bancoProfessor.listar();
    // var unidadesCurriculares = new Array();
    // for(let i = 0; i < dados.length; i+=1){
    //     unidadesCurriculares[i] = dados[i].unidadesCurriculares;
    // }   

    // bancoAtividades = JSON.parse(localStorage.getItem("Atividades"));
    // for(let i = 0; i < bancoAtividades.length; i+=1){

    // }
}   