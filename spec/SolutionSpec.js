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

  it("1234 Solution", function() {
    expect(solution("1234")).toEqual("4321,4312,4231,4213,4132,4123,3421,3412,3241,3214,3142,3124,2431,2413,2341,2314,2143,2134,1432,1423,1342,1324,1243,1234")
  });

  it("letter/ number Solution", function() {
    expect(solution("A 3B2 C6D")).toEqual("632,623,362,326,263,236")
  });

  it("error Solution", function() {
    expect(function() {solution("ABC")})
      .toThrowError("No intergers found in given string");
  });

});