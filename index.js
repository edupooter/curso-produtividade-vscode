/* Comentário de exemplo para testar a configuração "editor.tokenColorCustomizations" */
function helloWorld () {
  console.log('Hello World')
}

const saudacao = () => {
  // (new Date().getHours() <= 12 ? 'Bom dia' : 'Boa tarde')

  const hora = new Date().getHours()

  if (hora <= 12) return 'Bom dia'

  if (hora <= 18) return 'Boa tarde'

  console.log(hora)

  return 'Boa noite'
}

helloWorld()

console.log(saudacao())

// Manter variável
const exemploDeExtensao = 'bem sucedida'

// FIXME remover variável sem uso
const exemploDeVariavelSemUso = 'mal sucedida'

const templateStringConverter = `Teste de conversão de ${exemploDeExtensao}`

console.log(templateStringConverter)
