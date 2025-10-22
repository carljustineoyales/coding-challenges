import { describe, expect, it } from "vitest";
import { adjustThermostat } from "./solution";

describe("adjustThermostat", () => { 
  it("should return 'Hold' if current temp is equal to target", () => { 
    expect(adjustThermostat(32,0)).toBe("Hold")
  })
  it("should return 'Heat: X degrees Fahrenheit' if the current temperature is below the target", () => { 
    expect(adjustThermostat(70, 25)).toBe("Heat: 7.0 degrees Fahrenheit")
  })
  it("should return 'Cool: X degrees Fahrenheit' if the current temperature is above the target", () => { 
    expect(adjustThermostat(72, 18)).toBe("Cool: 7.6 degrees Fahrenheit")
  })
})