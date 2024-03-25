const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
}





//funcion agnostica autocombocada
//agnostica porque no tiene nombre 
//auto combocada porque la ejecutamos con los parentesis
( async () => {
  main()
})()
