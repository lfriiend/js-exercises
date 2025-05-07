// Objeto literal

const pessoa = {
  nome: "Lucas",
  sobrenome: "Sales",
};

console.log(pessoa.nome);
console.log(pessoa["sobrenome"]);

// Objeto construtor

const pessoa1 = new Object();
pessoa1.nome = "Leandro";

pessoa1.falarNome = function() {
  console.log(`${this.nome} sou um tigre`)
}

console.log(pessoa1.nome);

pessoa1.falarNome();
