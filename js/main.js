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
btn_aluno.addEventListener('click', function(){
    document.querySelector("#buttonsActions").className="hidden";
    document.querySelector("#cadastroAluno").className ="";
})

btn_professor.addEventListener('click', function(){
    document.querySelector("#buttonsActions").className="hidden";
    document.querySelector("#CadastroProfessor").className ="";
})