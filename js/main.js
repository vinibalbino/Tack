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
