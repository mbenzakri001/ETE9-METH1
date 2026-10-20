export class LibRecipe {
    constructor(name, nbPersons,ingredients) {
        this.name = name;
        this.nbPersons = nbPersons;
        this.ingredients = ingredients;
    }
}

export const recipe = [
    new LibRecipe("Pancakes", 4 , [
        { name: "farine", quantity: 200, unit: "g" },
        { name: "lait", quantity: 25, unit: "cl" },
        { name: "oeufs", quantity: 2, unit: "pieces" },
        { name: "sucre", quantity: 30, unit: "g" }
    ]),
];