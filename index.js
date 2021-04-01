/* Comentário de exemplo para testar a configuração "editor.tokenColorCustomizations" */
function helloWorld () {
  console.log('Hello World')
}

const saudacao = () => (new Date()).getHours() <= 12 ? 'Bom dia' : 'Boa tarde'

helloWorld()

console.log(saudacao())

const exemploDeExtensao = 'bem sucedida'

const exemploDeVariavelSemUso = 'mal sucedida'

const templateStringConverter = `Teste de conversão de ${exemploDeExtensao}`

console.log(templateStringConverter)
