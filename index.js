/* Comentário de exemplo para testar a configuração "editor.tokenColorCustomizations" */
function helloWorld () {
  console.log('Hello World')
}

// TODO verificar horário noturno
const saudacao = () => (new Date()).getHours() <= 12 ? 'Bom dia' : 'Boa tarde'

helloWorld()

console.log(saudacao())

// Manter variável
const exemploDeExtensao = 'bem sucedida'

// FIXME remover variável sem uso
const exemploDeVariavelSemUso = 'mal sucedida'

const templateStringConverter = `Teste de conversão de ${exemploDeExtensao}`

console.log(templateStringConverter)
