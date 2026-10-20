// à partir de la recette, on génère une liste d'ingrédients, pour le nombre de personnes spécifié

export function listGenerator(recipe, nbPersons) {
    const ingredientsSet = new Set();
    for (const ingredient of recipe.ingredients) {
        const scaledIngredient = { ...ingredient, quantity: ingredient.quantity * (nbPersons / recipe.nbPersons) };
        ingredientsSet.add(scaledIngredient);
    }
    
    return Array.from(ingredientsSet);
}