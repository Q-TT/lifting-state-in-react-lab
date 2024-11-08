// src/components/IngredientList.jsx

const IngredientList = (props) => {

    return (
        <ul>
          {props.availableIngredients.map((availableIngredient, index) => {
            //inline style
            const listStyle = {
              backgroundColor: availableIngredient.color
            }
            
            return (<li key={index} style={listStyle}> {availableIngredient.name} <button onClick={(_e) => props.addToBurger(availableIngredient.name)}>➕</button></li>);
          })}
        </ul>
      );
  };
  
export default IngredientList;
  