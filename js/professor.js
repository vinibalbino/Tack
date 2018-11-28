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
}




var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");
var bancoSuporte = JSON.parse(localStorage.getItem("Suporte"));
var paginaProfessor = new PaginaProfessor();

var btnHome = document.querySelector("#homeAnchor");
var btnUnidadesCurriculares = document.querySelector("#unidadesCurricularesAnchor");
var btnMais = document.querySelector("#maisAnchor");

btnHome.addEventListener("click", function(){
    document.querySelector("#homeSection").className = "";
    document.querySelector("#unidadesCurricularesSection").className = "hidden";
    document.querySelector("#maisSection").className = "hidden";
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