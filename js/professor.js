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
    var bancoAtividades = new bancoAtividades();
    if(localStorage.Atividades){
        bancoAtividades = JSON.parse(localStorage.getItem("Atividades"));
    }
    else{
        localStorage.setItem("Atividades", JSON.stingify(bancoAtividades));
    }
}


