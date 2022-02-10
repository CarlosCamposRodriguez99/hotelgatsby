import React from 'react';

const HabitacionPreview = ({habitacion}) => {
  
  const {contenido, imagen, titulo , slug} = habitacion;
  
  return ( 
    <div>
      <div>
          <h3>{titulo}</h3>
      </div>
    </div>
    
  );
}

export default HabitacionPreview;