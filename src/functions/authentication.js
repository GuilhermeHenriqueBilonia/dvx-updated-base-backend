const { fauna, q } = require('../services/fauna')

module.exports = {
    authenticate: async(email, password) => {
        try {
            return await fauna.query(
                q.Login(
                    q.Match(q.Index('usuario_por_email'), email), { password: password }
                )
            );
        } catch {
            throw new Error('Usuário ou senha incorreto.')
        }
    },
    createUser: async(params) => {
        try {
            const data = {
                email: params.email,
                name: params.name
            }
            const resp = fauna.query(
                q.Create(
                    q.Collection('usuario'), {
                        credentials: { password: params.password },
                        data: data
                    }
                )
            )
            return resp;
        } catch {
            throw new Error("Erro ao criar usuario")
        }
    },
    updateUser: async(params) => {
        try {
            const data = {
                email: params.email,
                name: params.name
            }
            const resp = await fauna.query(
                q.Replace(
                    q.Select(
                        'ref',
                        q.Get(
                            q.Match(
                                q.Index('usuario_por_email'),
                                params.email
                            )
                        )
                    ), {
                        credentials: { password: params.password },
                        data: data
                    }
                )
            )
            console.log(resp)
            return resp;
        } catch {
            throw new Error("Erro ao criar usuario")
        }
    }
}