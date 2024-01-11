
//creamos este componente y automaticamente detecta que es un componente de test

import {render, screen, fireEvent} from "@testing-library/jest-dom"; //parte de TESTING-LIBRARY, DESCRIBE, TEST o Expect es la parte de JEST, es decir ejecuta los test
import Counter from "./Counter";


//dividimos en bloques con la palabra describe
describe("<Counter />", ()=>{


    //definimos los test con la palabra clave "test"
 test("se renderiza el componente Counter", () =>{

    //usamos la funcion que nos pasa la libreria que hemos importado en la linea 4 y le pasamos el elemento importado que queremos testear, Counter, de este elemento vamos a querer sacar dos elementos para 
    //comprobar que todo funciona correctamente 
        render(<Counter />);
        const counteElement = screen.getByText(/Count:/i);
        const buttonElement = screen.getByText(/Increment/i);

        expect(true).toBe(true);
    //el siguiente paso son las expectaciones, asi comprobamos que se está renderizando todo correctamente
    
    expect(counteElement).toBeInTheDocument();
    });
});