var bancoAluno = new Banco("Alunos");
var bancoProfessor = new Banco("Professores");

var vetorUnidadesCurricularesLecionadas = new Array();
var cont = 0;
var btn_login = document.querySelector("#ancoraLoginProfessor");
var unidadeCurricular = "";

btn_login.addEventListener('click', function(){
    removerCadastroAluno();
    removerCadastroProfessor();
    window.location.href = "../../index.html"
});

function validarRepeticao(x){
    var h2Elements = document.querySelectorAll('h2');
    var nomeDisciplinaAdi = x;
    for(var i=0;i<h2Elements.length;i++){
        h2Elements.forEach(function(){            
            if(nomeDisciplinaAdi == h2Elements[i].innerText){               
                return true;                
            }
            else{
                return false;
            }
        });
    }
} 

function displayUnidadesCurricularesProfessor(){
    var nomeDisciplina = document.querySelector("#nomeDisciplinaProfessor").value;
    var turma = document.querySelector("#turmaDisciplinaProfessor").value;
    var ul = document.querySelector("#listaDisciplinasProfessor");
    if(nomeDisciplina != "" && turma != ""){     
            var h2 = document.createElement("h2");
            var nodeH2 = document.createTextNode(nomeDisciplina);
            h2.appendChild(nodeH2);

            var p1 = document.createElement("p");
            var nodeP1 = document.createTextNode("Turma: " +turma);
            p1.appendChild(nodeP1);

            var input = document.createElement("input");
            input.setAttribute("type", "button");
            input.setAttribute("value", "Remover");
            input.setAttribute("onclick", "removerDisplayUnidadeCurricular("+"'li"+cont+"')");

            var div = document.createElement("div");

            div.appendChild(h2);
            div.appendChild(p1);

            var li = document.createElement("li");

            li.appendChild(div);
            li.appendChild(input);
            li.id = "li" + cont;
        
            cont+=1;

            ul.appendChild(li);     
    } 
    else{
        document.getElementById("spamP").innerHTML = "Campo(s) não preechidos!";
        setTimeout(function(){
            document.getElementById("spamP").innerHTML = "";
        }, 1000);
    }
}   

function removerDisplayUnidadeCurricular(x){
    var item = document.querySelector("#" + x);
    item.parentNode.removeChild(item);
}

function finalizarProfessor(){
    var ulCont = document.getElementById("listaDisciplinas").childElementCount;
    ul = document.getElementById("listaDisciplinas");
    if(ulCont == 1){
        document.getElementById("finalizarSpamProfessor").className = "";
        setTimeout(function(){
            document.getElementById("finalizarSpamProfessor").className = "hidden";
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
    bancoProfessor.inserirUnidadeCurricular(unidadeCurricular);
}
