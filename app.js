const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Custom yargs version
yargs.version("1.1.0");

// Criando comando de adicionar nova nota
yargs.command({
  command: "add",
  describe: "Adiciona uma nova nota",
  handler: function() {
    console.log("Adicionando uma nova nota");
  }
});

// Criando comando de remover uma nota
yargs.command({
  command: "remove",
  describe: "Remove uma nota",
  handler: function() {
    console.log("Removendo uma nota");
  }
});

// Criando o comando de listar todas notas
yargs.command({
  command: "list",
  describe: "Lista todas as notas",
  handler: function() {
    console.log("Listando todas as notas");
  }
});

// Criando o comando de abrir uma nota
yargs.command({
  command: "read",
  describe: "Ler uma nota",
  handler: function() {
    console.log("Abrindo uma nota");
  }
});

console.log(yargs.argv);
