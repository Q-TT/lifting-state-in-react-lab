// src/components/IngredientList.jsx
import '../App.css';
const IngredientList = (props) => {

    return (
        <ul>
          {props.availableIngredients.map((availableIngredient, index) => {
            //inline style
            const listStyle = {
              backgroundColor: availableIngredient.color
            }
            
            return (<li key={index} style={listStyle}> {availableIngredient.name} <button onClick={(_e) => props.addToBurger(availableIngredient)}>➕</button></li>);
          })}
        </ul>
      );
  };
  
export default IngredientList;
  