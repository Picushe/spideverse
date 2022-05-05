const Spiderman = require('./../app/spiderman')
describe("Unit Test from Spidermanclass", () => {
    test('1) Create an Spiderman object', () => {
        //Aqui escribimos el codigo que queremos escribir tal cual
        //Quiero instanciar un objeto Spiderman con esta informacion
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        //Validamos que este codigo funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });
  })