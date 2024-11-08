// `src/components/BurgerStack.jsx`
 
const BurgerStack = (props) => {
    return (
        <ul>
          {props.burgerStack.map((burgerStackItem, index) => {
            //inline style
           
            // console.log(availableIngredients.find(burgerStackItem))

            return(<li key={index} >{burgerStackItem} <button onClick={(_e) => props.removeFromBurger(burgerStackItem)}>❌</button> </li> );
          })}
        </ul>
      );
  };
  
export default BurgerStack;
  