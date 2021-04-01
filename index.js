/* Comentário de exemplo para testar a configuração "editor.tokenColorCustomizations" */
function helloWorld () {
  console.log('Hello World')
}

// TODO verificar horário noturno
const saudacao = () => (new Date()).getHours() <= 12 ? 'Bom dia' : 'Boa tarde'

helloWorld()

console.log(saudacao())

// FIXME remover variável sem uso
const exemploDeExtensao = 'bem sucedida'

// Manter variável
const exemploDeVariavelSemUso = 'mal sucedida'

const templateStringConverter = `Teste de conversão de ${exemploDeExtensao}`

console.log(templateStringConverter)
