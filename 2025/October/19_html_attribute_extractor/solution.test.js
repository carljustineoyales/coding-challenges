import { describe, it, expect } from "vitest";
import { extractAttributes } from "./solution";

describe("extractAttributes", () => { 
  it("should return empty array if no attributes and values in the html string", () => { 
    expect(extractAttributes("<p>Lorem ipsum dolor sit amet</p>")).toStrictEqual([])
  })

  it("should return an array of attributes and values", () => { 
    expect(extractAttributes('<meta charset="UTF-8" />')).toStrictEqual(["charset, UTF-8"])
    expect(extractAttributes('<input name="email" type="email" required="true" />')).toStrictEqual(["name, email", "type, email", "required, true"])
    expect(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>')).toStrictEqual(["id, submit", "class, btn btn-primary"])
  })
})