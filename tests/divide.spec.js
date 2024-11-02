// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
          it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
          });
          it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(15, 3)).toEqual(5);
            expect(divide(100, 50)).toEqual(2);
          });
          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
          it("should return undefined if any of the two arguments is not a number", () =>{
            expect(divide("12", 1)).toBeUndefined();
            expect(divide(1, "30")).toBeUndefined();
            expect(divide("string", "string")).toBeUndefined();
          })
    });    
});

