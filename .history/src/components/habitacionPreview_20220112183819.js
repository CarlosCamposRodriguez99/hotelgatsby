import React from 'react';
import { Ga}

const HabitacionPreview = ({habitacion}) => {
  
  const {contenido, imagen, titulo , slug} = habitacion;
  
  return ( 
    <div>
      <div>
          <h3>{titulo}</h3>
          <p>{contenido}</p>
      </div>
    </div>
    
  );
}

export default HabitacionPreview;