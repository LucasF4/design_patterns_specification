import { User } from "../User";
import { AbstractSpecification } from "./Spacification";

export default class UserAgeSpecification extends AbstractSpecification<User>{
    isSatisfiedBy(user: User): boolean {
        console.log("Minha idade: " + user.age)
        return user.age > 17
    }
}