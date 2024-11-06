import Ingredient from "./Ingredient";

const BurgerStack = (props) => {

    const handleStack = () => {
        if (props.stack.length === 0) {
            return <h2>Nothing in the stack</h2>
        } else {
            return (                
                props.stack.map((ingredient, index) => (
                    <li style={{ backgroundColor: ingredient.color }} key={index}>
                        {/* {ingredient.name}
                        <button onClick={() => props.removeFromBurger(ingredient, index)}>x</button> */}
                        <Ingredient ingredient={ingredient} removeFromBurger={props.removeFromBurger} index={index} btn={"remove"} />
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