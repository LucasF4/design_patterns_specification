import IUserRepository from "../../app/repository/UserRepository";
import { User } from "../../domain/entities/User";

export default class UserRepositoryMemory implements IUserRepository{
    users: User[] = []

    async save(user: User): Promise<User> {
        this.users.push(user)
        return user
    }
    
    async getUserByEmail(email: String): Promise<User | undefined> {
        return this.users.find((user: User) => user.email === email)
    }
    
}