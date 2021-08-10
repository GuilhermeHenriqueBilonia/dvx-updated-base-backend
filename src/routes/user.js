var express = require('express');
var router = express.Router();
const { authenticate, createUser, updateUser } = require('../functions/authentication');

module.exports = (function() {
    //authentication
    router.post('/Auth', async(request, response) => {
        console.log(request)
        try {
            const resp = await authenticate(request.body.email, request.body.password)

            return response.status(200).json(resp)
        } catch {
            response.status(400).json({ status: 400, mensagem: 'Usuário ou senha incorreto.' })
        }
    });

    router.post('/CreateUser', async(request, response) => {
        try {
            const resp = await createUser(request.body)

            return response.status(200).json(resp)
        } catch {
            return response.status(400).json({ status: 400, mensagem: 'Ocorreu um erro ao criar o usuário' })
        }
    });

    router.put('/UpdateUser', async(request, response) => {
        try {
            const resp = await updateUser(request.body)

            return response.status(200).json(resp)
        } catch {
            return response.status(400).json({ status: 400, mensagem: 'Ocorreu um erro ao atualizar o usuário' })
        }
    });

    return router;
})();