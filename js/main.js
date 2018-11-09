
var bd = new Banco("Alunos");
var banco = new Banco("Professores");
var btn_entrar = document.querySelector("#entrar");
var btn_aluno = document.querySelector("#btn_aluno");
var btn_professor = document.querySelector("#btn_profe");
var btn_confirmarAluno = document.querySelector("#btn_cadastro_Aluno");
var btn_confirmarProfessor = document.querySelector("#btn_cadastro_Professor");
var btn_limpar = document.querySelector(".limpar");

btn_entrar.addEventListener('click', function(){
  var nome_login = document.getElementById("login_usuario").value;
  var senha_login = document.getElementById("senha_usuario").value;
  var logica = bd.buscar(nome_login,senha_login);
  var logica2 = banco.buscar(nome_login, senha_login);
  if(logica == true) {
    window.location.href = "html/aluno.html";
  }
  if(logica2 == true) {
    window.location.href = "html/professor.html";
  }
  if(logica == false && logica2 == false ) {
    document.querySelector('#spamP').className = "";
    setTimeout(function(){
       document.querySelector('#spamP').className = "";
    }, 1000);
  }
  if(nome_login == "admin" && senha_login == "admin123"){
    window.location.href = "html/administrador.html";
  }
}); 

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
});

btn_confirmarProfessor.addEventListener('click', function(){
    var nome_profe = document.querySelector("#cadastroNomeProfessor").value;
    var cpf_profe = document.querySelector("#cadastroCpfProfessor").value;
    var email_profe = document.querySelector("#cadastroEmailProfessor").value;
    var professor = new Professor(nome_profe, cpf_profe, cpf_profe, cpf_profe, email_profe);
    banco.inserir(professor);
});

btn_limpar.addEventListener('click', function(){
  
});
