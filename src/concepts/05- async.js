import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} elemnt 
 */
export const asyncComponent = (  element  ) => {
    const id1 = '5d86371f233c9f2425f16916';
    findHero(id1)
        .then(( {name}) => element.innerHTML = name)
        .catch( error => element.innerHTML = error)
}

/** 
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = async ( id ) =>{
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `El heroe con el id ${id}  no existe`; 

    return hero;
}