const IngredientList = (props) => {
    return (
    <ul>
        {
            props.availableIngredients.map((ingredient, key) => (
                <li style={{ backgroundColor: ingredient.color }} key={key}>
                    {ingredient.name}
                    <button onClick={() => props.addToBurger(ingredient)}>+</button>
                </li>
            ))
        }
    </ul>
    )
  };
  
export default IngredientList;