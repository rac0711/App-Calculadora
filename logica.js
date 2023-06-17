function calcular(tipo, valor){
    
    if(tipo === 'operacao'){

      if(valor === 'c') {
        //limpar o visor(id resultado)
        document.getElementById('resultado').value = ''
          }
            //concatenar e atribuir o valor do resultado com o símbolo das operações matemáticas
          if(valor ==='+' || valor === '-' || valor === '*' || valor ==='/' || valor === '.'){

            document.getElementById('resultado').value += valor
          }
            // transformando o valor do input resultado '=' como nativo js e setando 
            //o '=' com o resultado do valor do input 
          if (valor === '='){
          var valor_campo = eval (document.getElementById('resultado').value)

              document.getElementById('resultado').value = valor_campo
          }
      // atribuindo o tipo numérico o valor do input com o valor definido por parâmetro e concatenando
        } else if(tipo === 'numero') {
        
          document.getElementById('resultado').value += valor

        }
  }