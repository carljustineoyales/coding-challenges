import { describe, it, expect } from "vitest";
import { sockPairs } from "./solution";

describe("sockPairs", () => { 
  it("should not be less than 0 total socks", () => { 
    expect(sockPairs(-1,1)).toBe(0)
  })

  it("should return 0 pair if lose 1 sock on cycle 2", () => { 
    expect(sockPairs(1,2)).toBe(0)
  })

  it("should return 1 pair if find a single sock on cycle 3", () => { 
    expect(sockPairs(1,3)).toBe(1)
  })

  it("should return 1 pair if single sock is worn out on cycle 5", () => { 
    expect(sockPairs(1,5)).toBe(0)
  })

  it("should return 0 pair on cycle 10", () => { 
    expect(sockPairs(1,10)).toBe(0)
  })

  it("should return 4 pair on cycle 11", () => { 
    expect(sockPairs(5, 11)).toBe(4)
  })
})