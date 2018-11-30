class PaginaAluno{
    constructor(){
        this.vetorAluno = [];
        this.uc;
    }
    displayUdadesCurriculares(){
        this.vetorAluno = bancoAluno.listar();
        for(var i=0;i<this.vetorAluno.length;i++){
			if(this.vetorAluno[i].usu == bancoSuporte.id){
                
                this.uc = this.vetorAluno[i].unidadesCurriculares;
			}
        }
        mostrarUnidadesCurriculares(this.uc);
    }
}

var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");
var bancoSuporte = JSON.parse(localStorage.getItem("Suporte"));
var paginaAluno = new PaginaAluno();

var btnHome = document.querySelector("#homeAnchor");
var btnUnidadesCurriculares = document.querySelector("#unidadesCurricularesAnchor");
var btnMais = document.querySelector("#maisAnchor");

btnHome.addEventListener("click", function(){
    document.querySelector("#homeSectionA").className = "";
    document.querySelector("#unidadesCurricularesSection").className = "hidden";
    document.querySelector("#maisSection").className = "hidden";
});

btnUnidadesCurriculares.addEventListener("click", function(){
    document.querySelector("#homeSectionA").className = "hidden";
    document.querySelector("#unidadesCurricularesSection").className = "";
    document.querySelector("#maisSection").className = "hidden";
    paginaAluno.displayUdadesCurriculares();
});

btnMais.addEventListener("click", function(){
    document.querySelector("#homeSectionA").className = "hidden";
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

        var p3 = document.createElement("p");
        var textNode = document.createTextNode(unidadesCurriculares[i][2]);
        p3.appendChild(textNode);

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        ul.appendChild(li);
    }
}


function alterarCadastro() {
    var usuEdit = document.getElementById("usuEdit").value;
    var senhaAt = document.getElementById("senhaAtual").value;
    var novaSenha = document.getElementById("senhaEdit").value;
    if(usuEdit == bancoSuporte.id && senhaAt != novaSenha) {
       bancoProfessor.editar("senha", senhaAt, novaSenha)
    }
    else {
        document.querySelector("#spamAluno").innerHTML = "Usúario não confere ou senha nova igual a antiga"; 
        setTimeout(function(){
            document.querySelector("#spamAluno").innerHTML = ""; 
        }, 1000)   
    }
}

var btn_edit = document.querySelector("#editarUsu");

btn_edit.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelector("#homeSectionA").className = "hidden";
    document.querySelector("#editarUsua").className = "";
}); 
