class Banco{
	constructor(nome)
	{
		this.nome_banco = nome;
		this.dados = JSON.parse(localStorage.getItem(this.nome_banco)) || [];
	}
	tamanho()//Retorna a quantidade de keys do banco
	{
		return localStorage.length;
	}
	inserir(obj)//Método responsável por inserir um elemento no banco
	{
		this.dados.push(obj);
		localStorage.setItem(this.nome_banco,  JSON.stringify(this.dados));
	}
	buscar(user,senha)
	{
		var i;
		for(i=0;i<this.banco.length;i++)
		{
			if(this.banco[i].user == user && this.banco[i].senha == senha)
			{
				return this.banco[i];
			}
		}
		return false;
	}

	listar()
	{
		this.dados = JSON.parse(localStorage.getItem(this.nome_banco));
		return this.dados;
	}
}
