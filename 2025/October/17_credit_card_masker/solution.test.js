import { describe, expect, it } from "vitest";
import { mask } from "./solution";

describe("mask", () => { 
  it("should have valid separator",()=> {
    expect(mask("4012!")).toBe("Invalid seperator")
  })
  
  it("should have four sets",()=> {
    expect(mask("4012 ")).toBe("Invalid number of sets")
  })

  it("should have four sets of four digits",()=> {
    expect(mask("412-888-888-181")).toBe("Invalid number of digits")
  })

  it("should return masked card",()=> {
    expect(mask("4012-8888-8888-1881")).toBe("****-****-****-1881")
  })
})