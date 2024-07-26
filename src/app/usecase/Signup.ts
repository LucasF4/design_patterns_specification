import { User } from "../../domain/entities/User"
import IUserRepository from "../repository/UserRepository"

export default class Signup {
    constructor(readonly userRepository: IUserRepository){}

    async execute(input: Input): Promise<User>{
        const user = new User(input.name, input.email, input.password, input.age)
        await this.userRepository.save(user)
        return user
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    age: number
}