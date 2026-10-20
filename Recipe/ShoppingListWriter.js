// on écrit la liste d'ingrédients dans le fichier ingredients.txt
const ingredients = listGenerator(recipe, nbPersons);
const recipeWithScaledIngredients = { ...recipe, ingredients };

export function writeTextList(ingredients) {
    const fs = require('fs');
    const filePath = 'ingredients.txt';
    const ingredientsList = ingredients.map(ingredient => `${ingredient.quantity} ${ingredient.unit} de ${ingredient.name}`).join('\n');
    
    fs.writeFileSync(filePath, ingredientsList);
    console.log(`La liste d'ingrédients a été écrite dans le fichier ${filePath}`);
}


// ce format peut être une préference de l'utilisateur, ou bien choisi à l'export 
if (format === "txt") {
    await writeTextList(recipeWithScaledIngredients);
} else if (format === "html") {
    await writeHtmlList(recipeWithScaledIngredients);
}