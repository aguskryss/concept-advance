
/**
 * 
 * @param {HTMLDivElement} elemnt 
 */
export const generatorFunctionComponent = (  element  ) => {
    //const myGenerator = myFirstGeneratorFunction();
    const myGenerator = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';

    element.append(button);
    
    const renderButton = () => {
        const {value} = myGenerator.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton)
}

function* idGenerator(){
    for(let i = 1; i <= 200; i++){
        yield i;
    }

    return 'Ya no hay mas valores';
}

function* myFirstGeneratorFunction(){
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';

    yield 'Ya no pueden hacer nada';
}