const BurgerStack = (props) => {

    const handleStack = () => {
        if (props.stack.length === 0) {
            return <h2>Nothing in the stack</h2>
        } else {
            return (                
                props.stack.map((ingredient, key) => (
                    <li style={{ backgroundColor: ingredient.color }} key={key}>
                        {ingredient.name}
                        <button onClick={() => props.removeFromBurger(ingredient, key)}>x</button>
                    </li>
                ))
            )
        }
    }


    return (
        <ul>
            {handleStack()}
        </ul>
    )
  };
  
  export default BurgerStack;