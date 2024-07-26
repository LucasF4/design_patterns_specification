import { expect, test } from 'vitest'
import { User } from '../src/domain/entities/User'
import Signup from '../src/app/usecase/Signup'
import UserRepositoryMemory from '../src/infra/repositoryMemory/UserRepositoryMemory'

test("Deveria ser possível criar um usuário", async function(){
    const userRepository = new UserRepositoryMemory()
    const signup = new Signup(userRepository)

    const input = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        password: "12345678",
        age: 30
    }
    const output = await signup.execute(input)
    expect(output).toBeInstanceOf(User)
})

test("Não deve ser possível criar um usuario com nome inválido", function(){
    expect(() => new User("John",  "johndoe@gmail.com", "12345678", 30)).toThrow(new Error("Invalid parameter"))
})

test("Não deve ser possível criar um usuario com email inválido", function(){
    expect(() => new User("John Doe",  "johndoe@gmai", "12345678", 30)).toThrow(new Error("Invalid parameter"))
})

test("Não deve ser possível criar um usuario com senha menor que 6", function(){
    expect(() => new User("John Doe",  "johndoe@gmail.com", "12345", 30)).toThrow(new Error("Invalid parameter"))
})

test("Não deve ser possível criar um usuario com idade menor que 18", function(){
    expect(() => new User("John Doe",  "johndoe@gmail.com", "12345678", 17)).toThrow(new Error("Invalid parameter"))
})