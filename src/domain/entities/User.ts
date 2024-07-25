import UserAgeSpecification from "./specification/UserAgeSpecification"
import UserNameSpecification from "./specification/UserNameSpecification"

export class User {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly age: number
    ){

        const userSpecification = new UserNameSpecification()
        const ageSpecification = new UserAgeSpecification()
        console.log(userSpecification.and(ageSpecification).isSatisfiedBy(this))

    }
}