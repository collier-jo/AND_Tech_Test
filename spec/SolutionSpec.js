describe("Solution", function() {

  it("Single Digit Solution", function() {
    expect(solution("1")).toEqual("1")
  });

  it("Double Digit Solution", function() {
    expect(solution("12")).toEqual("21,12")
  });

  it("Triple Digit Solution", function() {
    expect(solution("236")).toEqual("632,623,362,326,263,236")
  });

  it("letter/ number Solution", function() {
    expect(solution("A 3B2 C6D")).toEqual("632,623,362,326,263,236")
  });

});