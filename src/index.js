const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { udapteCnpj } = require('./functions/updateCnpj');

const routes = require('./routes/routes')

const app = express();

app.use(cors());

app.use(express.json());

//rotas

app.use(routes)


// CNPJ
app.post('/UpdateCnpj', async(request, response) => {

    const resp = await fauna.query(
        q.Get(
            q.Match(
                q.Index('usuario_por_email'),
                q.Casefold("guibilonia@gmail.com")
            )
        )
    )

    const respEmpresa = await fauna.query(
        q.Get(
            q.Collection('empresa')
        )
    )

    console.log(respEmpresa)

    return response.status(200).json(resp)
})

app.listen(3333);