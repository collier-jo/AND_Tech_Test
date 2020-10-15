describe("Solution", function() {

  it("Single Digit Solution", function() {
    expect(solution("1")).toEqual("1")
  });

  it("Double Digit Solution", function() {
    expect(solution("12")).toEqual("21,12")
  });
});