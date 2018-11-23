var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");

var btn_aluno = document.querySelector("#btn_aluno");
var btn_professor = document.querySelector("#btn_profe");
var btn_confirmarAluno = document.querySelector("#btn_cadastro_Aluno");
var btn_confirmarProfessor = document.querySelector("#btn_cadastro_Professor");
var btn_limpar = document.querySelector(".limpar");

//Navegação inicial;
btn_aluno.addEventListener('click', function(){
    document.querySelector("#buttonsActions").className="hidden";
    document.querySelector("#cadastroAluno").className ="";
});

btn_professor.addEventListener('click', function(){
    document.querySelector("#buttonsActions").className="hidden";
    document.querySelector("#cadastroProfe").className ="";
});

//Cadastro de aluno;
btn_confirmarAluno.addEventListener('click', function(evt){
    evt.preventDefault();
    
    var nome_aluno = document.querySelector("#cadastroNomealuno").value;
    var cpf_aluno = document.querySelector("#cadastroCpfaluno").value;
    var email_aluno = document.querySelector("#cadastroEmailaluno").value;
    var situacao = "incompleto";
    var unidadesCurriculares = new Array();

    var aluno = new Aluno(nome_aluno, cpf_aluno, cpf_aluno, cpf_aluno, email_aluno, situacao, unidadesCurriculares);
    bancoAluno.inserir(aluno);
    
    window.location.href="./cadastroDisciplinasAluno.html";
});

//Cadastro de proffesor;
btn_confirmarProfessor.addEventListener('click', function(evt){
    evt.preventDefault();

    var nome_profe = document.querySelector("#cadastroNomeProfessor").value;
    var cpf_profe = document.querySelector("#cadastroCpfProfessor").value;
    var email_profe = document.querySelector("#cadastroEmailProfessor").value;
    var situacao = "incompleto";

    var professor = new Professor(nome_profe, cpf_profe, cpf_profe, cpf_profe, email_profe, situacao);
    bancoProfessor.inserir(professor);

    window.location.href="./cadastroDisciplinasProfessor.html";
});

btn_limpar.addEventListener('click', function(){
  
});
