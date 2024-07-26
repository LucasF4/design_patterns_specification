import { User } from "../User";
import { AbstractSpecification } from "./Spacification";

export class UserPasswordSpecification extends AbstractSpecification<User>{
    isSatisfiedBy(user: User): boolean {
        return user.password.length > 6
    }   
}