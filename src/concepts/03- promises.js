import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} elemnt 
 */
export const promiseComponent = (  element  ) => {
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }
    const renderTwoHero = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${hero1.name} / ${hero2.name}</h3>
        `;
    }
    const renderError = (error) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }
    
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f9f80b591f499df32';

    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
    .catch(renderError)
    /*let hero1;
    findHero(id1)
        .then(  hero => {
            hero1 = hero;
            return findHero(id2);
        }).then( hero2 => {
            renderTwoHero(hero1, hero2)
        }).catch(renderError);*/

    /*findHero(id1)
        .then((hero1) => {
            findHero(id2).then(hero2 =>{
                renderTwoHero(hero1, hero2);
            }).catch(renderError)
        })
        .catch(renderError);*/

    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) =>{

    return new Promise(( resolve, reject ) =>{
        const hero = heroes.find(hero => hero.id === id);
        if(hero){
            resolve(hero);
            return;
        }

        reject(`El hereo con el id ${id}  no existe`)
    });
}