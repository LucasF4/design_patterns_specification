import { expect, test } from 'vitest'
import { User } from '../src/domain/entities/User'

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