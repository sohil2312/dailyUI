import { faker } from '@faker-js/faker';

const Randomsong = ()=>{
    return faker.music.songName()
}
const RandomMovie = ()=>{
      return `${faker.word.adjective()} ${faker.word.noun()}`;
      
}
export {Randomsong,RandomMovie}