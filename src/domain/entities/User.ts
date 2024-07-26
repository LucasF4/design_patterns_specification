import UserAgeSpecification from "./specification/UserAgeSpecification"
import { UserEmailSpecification } from "./specification/UserEmailSpecification"
import UserNameSpecification from "./specification/UserNameSpecification"
import { UserPasswordSpecification } from "./specification/UserPasswordSpecification"

export class User {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly age: number
    ){

        const userSpecification = new UserNameSpecification()
        const ageSpecification = new UserAgeSpecification()
        const emailSpecification = new UserEmailSpecification()
        const passwordSpecification = new UserPasswordSpecification()
        if(!userSpecification.and(ageSpecification).and(emailSpecification).and(passwordSpecification).isSatisfiedBy(this)){
            throw new Error("Invalid parameter")
        }

    }
}