// src/components/IngredientList.jsx
import { useState } from 'react';


const IngredientList = (props) => {
    // const [newIngredient, setNewIngredient] = useState('')

    // const handleUpdate = (name) => {
    //     props.addToBurger(event.target.innerHTML)
    // }

    return (
        <ul>
          {props.availableIngredients.map((availableIngredient, index) => {
            return (<li key={index} > {availableIngredient.name} <button onClick={(_e) => props.addToBurger(availableIngredient.name)}>➕</button></li>);
          })}
        </ul>
      );
  };
  
export default IngredientList;
  