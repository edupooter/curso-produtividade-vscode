function helloWorld () {
  console.log('Hello World')
}

const saudacao = () => (new Date()).getHours() <= 12 ? 'Bom dia' : 'Boa tarde'

helloWorld()

console.log(saudacao())
