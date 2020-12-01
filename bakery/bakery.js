function cakes(recipe, ingredients)
{
  const recipeItems = Object.keys(recipe);

  let NumOfCakes = Infinity;
  for (const recI of recipeItems) {
    const availIngredient = ingredients[recI];
    const requiredIngredient = recipe[recI];
    if(availIngredient && requiredIngredient > 0 && requiredIngredient <= availIngredient ) {

      const potentialNumCakes = Math.floor(availIngredient / requiredIngredient);

      if(potentialNumCakes < NumOfCakes)
      {
        NumOfCakes = potentialNumCakes;
      }
      
    } else {
      // We don't have all the ingredients
      return 0;
    }
  }


  return NumOfCakes;
}


module.exports = { cakes };

