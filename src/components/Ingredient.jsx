const Ingredient = (props) => {

  return (
    <>
        {props.ingredient.name}
        
        {
            props.btn === 'add' ? 
            ( <button onClick={() => props.addToBurger(props.ingredient)}>+</button> ) 
            :
            ( <button onClick={() => props.removeFromBurger(props.index)}>x</button>)
        }
    </>
  );
}

export default Ingredient;