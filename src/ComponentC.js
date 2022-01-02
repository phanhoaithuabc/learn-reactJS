import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

function ComponentC(){
    const context = useContext(ThemeContext)
    return <p className={context.theme}>
        This is ComponentC
    </p>
}

export default ComponentC;