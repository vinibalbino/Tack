function start(){
    var usuario = document.getElementById('login_usuario').value;
    if(usuario == "0"){
      window.location.href = "html/aluno.html";
    }
    if(usuario == "1"){
      window.location.href = "html/professor.html";
    }
    if(usuario == "2"){
      window.location.href = "html/administrador.html";
    }
}

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
  var bd = new Banco("Alunos");
  var aluno = new Aluno(nome_aluno, cpf_aluno, cpf_aluno, cpf_aluno, email_aluno);
  bd.inserir(aluno);
});

btn_confirmarProfessor.addEventListener('click', function(){
    var nome_profe = document.querySelector("#cadastroNomeProfessor").value;
    var cpf_profe = document.querySelector("#cadastroCpfProfessor").value;
    var email_profe = document.querySelector("#cadastroEmailProfessor").value;
    var professor = new Professor(nome_profe, cpf_profe, cpf_profe, cpf_profe, email_profe);
    var banco = new Banco("professores");
    banco.inserir(professor);
});

btn_limpar.addEventListener('click', function(){

});
