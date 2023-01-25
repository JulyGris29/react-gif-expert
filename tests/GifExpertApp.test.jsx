import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', (value) => {

    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render( <GifExpertApp category={ value } /> );
        expect( container ).toMatchSnapshot();


        render ( <GifExpertApp />)
        screen.debug();
      
    });

    test('Mandear la misma categoría', () => {

        const { container } = render( <GifExpertApp newcategory={ newCategory } /> );
        expect( container ).toEqual( category);

      

    })
    
    
  
})
