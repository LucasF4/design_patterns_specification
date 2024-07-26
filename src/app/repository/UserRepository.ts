import { User } from "../../domain/entities/User";

export default interface IUserRepository {
    save(user: User): Promise<User>;
    getUserByEmail(email: String): Promise<User | undefined>;
}