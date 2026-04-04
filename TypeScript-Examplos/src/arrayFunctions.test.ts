import { describe, test, expect } from "vitest"
import {
  squareWithFor,
  squareWithForEach,
  joinStrings,
  sortDescending,
  getFirstTwoElements,
  getEvenNumbers,
  Product,
  Employee,
} from "./arrayFunctions"

describe("Funções de arrays", () => {

  test("quadrado com for simples", () => {
    expect(squareWithFor([3, 5, 7, 3, 8, 9, 1]))
      .toEqual([9, 25, 49, 9, 64, 81, 1])
  })

  test("quadrado com forEach", () => {
    expect(squareWithForEach([3, 5, 7, 3, 8, 9, 1]))
      .toEqual([9, 25, 49, 9, 64, 81, 1])
  })

  test("join com espaço", () => {
    expect(joinStrings(["Arrays", "com", "TypeScript"]))
      .toBe("Arrays com TypeScript")
  })

  test("sort decrescente", () => {
    expect(sortDescending(["carro", "boneco", "ave", "lapis"]))
      .toEqual(["lapis", "carro", "boneco", "ave"])
  })

  test("slice - dois primeiros", () => {
    expect(getFirstTwoElements([2, 4, 6, 2, 8, 9, 5]))
      .toEqual([2, 4])
  })

  test("filter - pares", () => {
    expect(getEvenNumbers([8, 3, 9, 5, 6, 12]))
      .toEqual([8, 6, 12])
  })

})

describe("Interface e classes", () => {

  test("deve calcular valores corretamente", () => {
    const product = new Product(10, 2)
    expect(product.calculate()).toBe(20)

    product.price = 15
    product.quantity = 3
    expect(product.calculate()).toBe(45)

    const employee = new Employee(8, 25)
    expect(employee.calculate()).toBe(200)

    employee.hoursWorked = 10
    employee.hourlyRate = 30
    expect(employee.calculate()).toBe(300)
  })

})