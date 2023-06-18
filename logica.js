function calcular(tipo, valor){
  if(tipo === 'operacao'){

    if(valor === 'c') {
      //limpar o visor(id resultado)
      document.getElementById('resultado').value = ''
      localStorage.removeItem("igualdade");
    }

    //concatenar e atribuir o valor do resultado com o símbolo das operações matemáticas
    if(valor ==='+' || valor === '-' || valor === '*' || valor ==='/' || valor === '.'){
      document.getElementById('resultado').value += valor
    }

    // transformando o valor do input resultado '=' como nativo js e setando o '=' com o resultado do valor do input 
    if (valor === '='){
      // Seta no localstorage o valor true, indicando que o '=' ja foi teclado
      localStorage.setItem("igualdade", "true");

      var valor_campo = eval (document.getElementById('resultado').value)

      document.getElementById('resultado').value = valor_campo
    }

  // atribuindo o tipo numérico o valor do input com o valor definido por parâmetro e concatenando
  } else if(tipo === 'numero') {
    // Se o valor é true no localstorage, indica que o igual já foi teclado, ou seja, agora que ele está tentando por um número, o visor vai ser resetado antes disso
    if(localStorage.getItem("igualdade") == "true"){
      //limpar o visor
      document.getElementById('resultado').value = ''
      // Remove do localstorage 
      localStorage.removeItem("igualdade");
    }
    // Tecla o número
    document.getElementById('resultado').value += valor
  }
}