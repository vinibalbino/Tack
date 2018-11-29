class Banco{
	constructor(nome)
	{
		this.nome_banco = nome;
		this.dados = JSON.parse(localStorage.getItem(this.nome_banco)) || [];

		this.dadosTemp = new Array();
		this.ultimoCadastroValido = true;
	}
	tamanho()//Retorna a quantidade de keys do banco
	{
		return localStorage.nome.length;
	}
	inserir(obj)//Método responsável por inserir um elemento no banco
	{
		this.dados.push(obj);
		localStorage.setItem(this.nome_banco,  JSON.stringify(this.dados));
	}
	buscar(user, senha)
	{
		for(var i=0;i<this.dados.length;i++)
		{
			if(this.dados[i].usu == user && this.dados[i].senha == senha)
			{
				var id = this.dados[i].usu;
				var bancoSuporte = new Suporte(id);
				if(localStorage.getItem("Suporte")){
					bancoSuporte = JSON.parse(localStorage.getItem("Suporte"));
					bancoSuporte.id = id;
					localStorage.setItem("Suporte", JSON.stringify(bancoSuporte)); 
				}
				else{
					localStorage.setItem("Suporte", JSON.stringify(bancoSuporte)); 
				}
				return true;
			}
		}
		return false;
	}
	listar()
	{
		this.dados = JSON.parse(localStorage.getItem(this.nome_banco));
		return this.dados;
	}
	editar(chave, valorAtual, NovoValor){
		for(var i=0;i<this.dados.length;i++)
		{
			if(this.dados[i][chave] == valorAtual)
			{
				this.dados[i][chave] = NovoValor;
			}
		}
		this.atualizar();
	}
	cancelar(){
		for(var i=0;i<this.dados.length;i++)
		{
			if(this.dados[i].situacao == "cancelar")
			{

			}
			else{
				this.dadosTemp.push(this.dados[i]);
			}
		}
		this.dados = this.dadosTemp;
		this.atualizar();
	}
	atualizar(){
		localStorage.setItem(this.nome_banco,  JSON.stringify(this.dados));
	}
	inserirUnidadeCurricular(vetorString){
		
		for(var i=this.dados.length-1; i >= 0;i-=1)
		{
			if(this.dados[i].situacao == "incompleto" && this.ultimoCadastroValido == true)
			{
				this.dados[i]["unidadesCurriculares"] = JSON.parse(vetorString);
				this.dados[i].situacao = "completo";
				this.ultimoCadastroValido = false;
			}
		}
		this.atualizar();
		removerCadastroAluno()
		window.location.href = "../../index.html";
	}
	selectedOption(){
		let disciplina = document.getElementById("unidadeCurricularesSelect");
		for(let i = 0; i < disciplina.options.length; i+=1){
			if(disciplina[i].selected == true){
				return (disciplina[i]);
			}
		}
	}
}

class Aluno {
	constructor(nome, usu, senha, cpf, email, situacao, unidadesCurriculares) {
		this.nome = nome;
		this.usu = usu;
		this.senha = senha;
		this.cpf = cpf;
		this.email = email;
		this.situacao = situacao;
		this.unidadesCurriculares = unidadesCurriculares;
	}
}

class Professor {
	constructor(nome, usu, senha, cpf, email, situacao, unidadesCurriculares) {
		this.nome = nome;
		this.usu = usu;
		this.senha = senha;
		this.cpf = cpf;
		this.email = email;
		this.situacao = situacao;
		this.unidadesCurriculares = unidadesCurriculares;
	}
}

class Suporte {
	constructor(id){
		this.id = id;
	}
}

function removerCadastroAluno(){//Remove TODOS Cadastros Incompletos dos alunos.
    var chave = "situacao";
    var valorAtual = "incompleto";
    var novoValor = "cancelar";

    bancoAluno.editar(chave, valorAtual, novoValor);
    bancoAluno.cancelar();
}

function removerCadastroProfessor(){//Remove TODOS Cadastros Incompletos dos professores.
    var chave = "situacao";
    var valorAtual = "incompleto";
    var novoValor = "cancelar";

    bancoProfessor.editar(chave, valorAtual, novoValor);
    bancoProfessor.cancelar();
}