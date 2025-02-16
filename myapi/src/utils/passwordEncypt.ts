import bcrypt from 'bcryptjs'
import { BaseError } from '../middlewares/errors'


class PasswordEncryt{

    async generateHash (password: string) {
        return bcrypt.hash(password,10,(err, hash) => {
            if (err) {
                throw new BaseError('Erro ao gerar hash senha', 400)
            }

            return hash
        })
    }

    async compareHash (password: string, hash: string) {
        return bcrypt.compare(password,hash,(err, result) => {
            if (err) {
                throw new BaseError('Erro ao validar senha', 400)
            }

            return result
        })
    }

}


export {PasswordEncryt}