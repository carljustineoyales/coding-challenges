import { describe, it, expect } from "vitest";
import { calculateTips } from "./solution";

describe("calculateTips", () => { 
  it("should return an array with three tip values", () => { 
    expect(calculateTips("$10.00", "25%")).toStrictEqual(["$1.50", "$2.00", "$2.50"])
    expect(calculateTips("$89.67", "26%")).toStrictEqual(["$13.45", "$17.93", "$23.31"])
    expect(calculateTips("$19.85", "9%")).toStrictEqual(["$2.98", "$3.97", "$1.79"])
  })
})