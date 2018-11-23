var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");

var btn_entrar = document.querySelector("#entrar");

btn_entrar.addEventListener('click', function(){//Função de login;
  var nome_login = document.getElementById("login_usuario").value;
  var senha_login = document.getElementById("login_senha").value;
  
  removerCadastroAluno();
  removerCadastroProfessor();
  
  var logica = bancoAluno.buscar(nome_login,senha_login);
  var logica2 = bancoProfessor.buscar(nome_login, senha_login);
  
  
  if(logica == true) {
    window.location.href = "html/aluno/aluno.html";
  }
  if(logica2 == true) {
    window.location.href = "html/professor/professor.html";
  }
  if(nome_login == "admin" && senha_login == "admin"){
    window.location.href = "html/administrador/administrador.html";
    logica = true;
  }
  if(logica == false && logica2 == false ) {
    document.querySelector('#spamP').className = "";
    setTimeout(function(){
       document.querySelector('#spamP').className = "hidden";
    }, 1000);
  }
  
}); 

