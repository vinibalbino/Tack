class Banco{
	constructor()
	{
		if(localStorage.getItem('alunos'))
		{
			this.banco = JSON.parse(localStorage.getItem('produtos'));
		}
		else
		{
			this.banco = [];
		}
	}
	inserir(obj)
	{
		this.banco.push(obj);
		localStorage.setItem("produtos",JSON.stringify(this.bancos));
	}
	listar()
	{
		return this.banco;
	}
	buscar(busca)
	{
		var i;
		for(i=0;i<this.banco.length;i++)
		{
			if(this.banco[i].cod == busca)
			{
				return this.banco[i];
			}
		}
		return false;
	}
}
