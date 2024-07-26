import { User } from "../User";
import { AbstractSpecification } from "./Spacification";

export class UserEmailSpecification extends AbstractSpecification<User> {
    isSatisfiedBy(user: User): boolean {
        return !!String(user.email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    }
}