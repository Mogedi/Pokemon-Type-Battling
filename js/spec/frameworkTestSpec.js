(function () {
    describe("Jasmine Testing working", function () {
        it("if it passes this test", function () {
            expect(1).toBe(1);
        })
    })

    describe("Takes input", function () {
        it("and returns attacker in array", function () {
            expect(Attacker("fire -> grass")).toEqual("fire");
        })
    })

    describe("Array of types", function () {
        it("will call and ask for key and value pair array", function () {
            expect(typeObject()).toBe('object');
        })
    })


    describe("", function () {
        it("", function () {
            expect(PokemonEffectiveness("electric -> ground")).toBe();
        })
    })
}());
