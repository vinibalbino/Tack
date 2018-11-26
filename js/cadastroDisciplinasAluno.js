var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");

var vetorUnidadesCurriculares = new Array();
var cont = 0;
var btn_login = document.querySelector("#ancoraLogin");
var unidadeCurricular = "";

btn_login.addEventListener('click', function(){
    removerCadastroAluno();
    removerCadastroProfessor();
    window.location.href = "../../index.html"
});

function validarRepeticao(x){
    var h2Elements = document.querySelectorAll('h2');
    var nomeDisciplinaAdi = x;
    var logica = true;
    for(var i=0;i<h2Elements.length;i++){
        h2Elements.forEach(function(){            
            if(nomeDisciplinaAdi == h2Elements[i].innerText){ 
                logica = true;                
            }
            else {
                logica = false;
            }
        });
    }
    return logica;
} 

function displayUnidadesCurriculares(){
    var nomeDisciplina = document.querySelector("#nomeDisciplina").value;
    var professor = document.querySelector("#professorDisciplina").value;
    var turma = document.querySelector("#turmaDisciplina").value;
    var ul = document.querySelector("#listaDisciplinas");
    if(nomeDisciplina != "" && professor!= "" && turma != ""){
        var logica = validarRepeticao(nomeDisciplina);
        console.log(logica)
        if( logica == false){      
            var h2 = document.createElement("h2");
            var nodeH2 = document.createTextNode(nomeDisciplina);
            h2.appendChild(nodeH2);

            var p1 = document.createElement("p");
            var nodeP1 = document.createTextNode("Professor: " +professor);
            p1.appendChild(nodeP1);
        
            var p2 = document.createElement("p");
            var nodeP2 = document.createTextNode("Turma: " +turma);
            p2.appendChild(nodeP2);

            var input = document.createElement("input");
            input.setAttribute("type", "button");
            input.setAttribute("value", "Remover");
            input.setAttribute("onclick", "removerDisplayUnidadeCurricular("+"'li"+cont+"')");

            var div = document.createElement("div");

            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);

            var li = document.createElement("li");

            li.appendChild(div);
            li.appendChild(input);
            li.id = "li" + cont;
        
            cont+=1;

            ul.appendChild(li);  
        }
        else {
            document.getElementById("spamP2").className = "";
            setTimeout(function(){
            document.getElementById("spamP2").className = "hidden";
            }, 1000);
        }    
    } 
    else{
        document.getElementById("spamP").className = "";
        setTimeout(function(){
            document.getElementById("spamP").className = "hidden";
        }, 1000);
    }
}   

function removerDisplayUnidadeCurricular(x){
    var item = document.querySelector("#" + x);
    item.parentNode.removeChild(item);
}

function finalizar(){
    var ulCont = document.getElementById("listaDisciplinas").childElementCount;
    ul = document.getElementById("listaDisciplinas");
    if(ulCont == 1){
        document.getElementById("finalizarSpam").className = "";
        setTimeout(function(){
            document.getElementById("finalizarSpam").className = "hidden";
        }, 1100);
    }
    else{
        for(i=1; i < ul.childElementCount; i+=1){
            vetorUnidadesCurriculares[i] = new Array(3);
            vetorUnidadesCurriculares[i][0] = ul.children[i].children[0].children[0].textContent;
            vetorUnidadesCurriculares[i][1] = ul.children[i].children[0].children[1].textContent;
            vetorUnidadesCurriculares[i][2] = ul.children[i].children[0].children[2].textContent;
        }
        vetorUnidadesCurriculares = vetorUnidadesCurriculares.slice(1,ul.childElementCount);
        unidadeCurricular = JSON.stringify(vetorUnidadesCurriculares);
    }
    bancoAluno.inserirUnidadeCurricular(unidadeCurricular);
}
