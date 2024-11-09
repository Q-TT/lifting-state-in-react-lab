// `src/components/BurgerStack.jsx`
import '../App.css';

const BurgerStack = (props) => {
    return (
        <ul>
          {props.burgerStack.map((burgerStackItem, index) => {
           //inline style
           const listStyle = {
            backgroundColor: burgerStackItem.color
          }

            return(<li key={index} style={listStyle}>{burgerStackItem.name} <button onClick={(_e) => props.removeFromBurger(burgerStackItem)}>❌</button> </li> );
          })}
        </ul>
      );
  };
  
export default BurgerStack;
  