import bcrypt from 'bcryptjs'
import { BaseError } from '../middlewares/errors'


class PasswordEncryt{

    async generateHash (password: string) {
   
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        if(!hash){
            throw new BaseError('erro ao gerar senha',400)
        }
        
        return hash
    

    }

    async compareHash (password: string, hash: string) {
        return await bcrypt.compare(password,hash)
    }

}


export {PasswordEncryt}