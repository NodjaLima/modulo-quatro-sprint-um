import readline from "readline";

let resp = [];

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Insira as propriedade CSS para a lista:\n", function(answer) {
    resp.push(answer);
    leitor.setPrompt(`${answer} foi adicionado a lista. Mais algum? Se não, digite "sair".\n`)
    leitor.prompt()
});

leitor.on('line', (input) => {

  if (input.toLowerCase() === "sair") {
    console.log(resp.sort());
    leitor.close();
  } else {
    resp.push(input)
    console.log(`${input} foi adicionado a lista. Mais algum? Se não, digite "sair".\n
    `)
  }
  
})




