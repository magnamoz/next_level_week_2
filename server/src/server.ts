import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//para front e api comunicarem com endereços diferentes
app.use (cors());
//pacote express.json para fazer conversão request.body para objeto js
app.use(express.json());
//pegar rotas
app.use(routes)
//para acessar aplicação
app.listen(3333);