var bd = new Banco("Alunos");
var banco = new Banco("Professores");

var btn_aluno = document.querySelector("#btn_aluno");
var btn_professor = document.querySelector("#btn_profe");
var btn_confirmarAluno = document.querySelector("#btn_cadastro_Aluno");
var btn_confirmarProfessor = document.querySelector("#btn_cadastro_Professor");
var btn_limpar = document.querySelector(".limpar");


btn_aluno.addEventListener('click', function(){
    document.querySelector("#buttonsActions").className="hidden";
    document.querySelector("#cadastroAluno").className ="";
});

btn_professor.addEventListener('click', function(){
    document.querySelector("#buttonsActions").className="hidden";
    document.querySelector("#cadastroProfe").className ="";
});

btn_confirmarAluno.addEventListener('click', function(){
  var nome_aluno = document.querySelector("#cadastroNomealuno").value;
  var cpf_aluno = document.querySelector("#cadastroCpfaluno").value;
  var email_aluno = document.querySelector("#cadastroEmailaluno").value;
  var aluno = new Aluno(nome_aluno, cpf_aluno, cpf_aluno, cpf_aluno, email_aluno);
  bd.inserir(aluno);
  widow.location.href="./administrador/cadastroDisciplinasAluno";
});

btn_confirmarProfessor.addEventListener('click', function(){
    var nome_profe = document.querySelector("#cadastroNomeProfessor").value;
    var cpf_profe = document.querySelector("#cadastroCpfProfessor").value;
    var email_profe = document.querySelector("#cadastroEmailProfessor").value;
    var professor = new Professor(nome_profe, cpf_profe, cpf_profe, cpf_profe, email_profe);
    banco.inserir(professor);
    widow.location.href="./administrador/cadastroDisciplinasProfessor";
});

btn_limpar.addEventListener('click', function(){
  
});
