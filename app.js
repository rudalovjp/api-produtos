import express from 'express'
import { testarConexao } from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import usuarioRoutes from './src/routes/usuarioRoutes.js'
import produtosRoutes from './src/routes/produtoRoutes.js'

const app = express(); //criar instancia do express

testarConexao()
app.use(cors())
//Uso do body-parser para receber os valores do corpo na requisição json
app.use(bodyParser.json())
//Definir as rotas de usuario importadas no arquivo
app.use(usuarioRoutes)
app.use(produtosRoutes)

const porta = 3000
app.listen(porta, () =>{
    console.log(`Api rodando na porta http://localhost:${porta}`);
})