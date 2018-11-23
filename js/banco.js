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
	buscar(user,senha)
	{
		for(var i=0;i<this.dados.length;i++)
		{
			if(this.dados[i].usu == user && this.dados[i].senha == senha)
			{
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
		for(var i=this.dados.length-1; i > 0;i-=1)
		{
			if(this.dados[i].situacao == "incompleto" && this.ultimoCadastroValido == true)
			{
				this.dados[i]["unidadesCurriculares"] = JSON.parse(vetorString);
				this.dados[i].situacao = "completo";
				this.ultimoCadastroValido = false;
			}
		}
		this.atualizar();
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