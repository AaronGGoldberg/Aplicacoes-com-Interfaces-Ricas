export function squareWithFor(array: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** 2)
  }

  return result
}

export function squareWithForEach(array: number[]): number[] {
  const result: number[] = []

  array.forEach((item) => {
    result.push(item ** 2)
  })

  return result
}

export function joinStrings(array: string[]): string {
  return array.join(" ")
}

export function sortDescending(array: string[]): string[] {
  return [...array].sort((a, b) => b.localeCompare(a))
}

export function getFirstTwoElements(array: number[]): number[] {
  return array.slice(0, 2)
}

export function getEvenNumbers(array: number[]): number[] {
  return array.filter((item) => item % 2 === 0)
}

export interface Payable {
  calculate(): number
}

export class Product implements Payable {
  constructor(
    public price: number,
    public quantity: number
  ) {}

  calculate(): number {
    return this.price * this.quantity
  }
}

export class Employee implements Payable {
  constructor(
    public hoursWorked: number,
    public hourlyRate: number
  ) {}

  calculate(): number {
    return this.hoursWorked * this.hourlyRate
  }
}