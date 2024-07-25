import { User } from "../User";
import { AbstractSpecification } from "./Spacification";

export default class UserNameSpecification extends AbstractSpecification<User>{
    isSatisfiedBy(user: User): boolean {
        console.log("Esse é o meu nome: " + user.name)
        return user.name.split(" ").length >= 2
    }
}