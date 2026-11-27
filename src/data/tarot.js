import { existsSync } from 'node:fs';
import { cast } from './cast.js';
const roman=['0','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'];
export const deck=roman.map((arcana,i)=>{
 const person=cast.find(p=>p.arcana===arcana);
 const number=String(i).padStart(2,'0');
 return {arcana, name:person?.arcanaName??'Świat',poe:person?.poe??'Eureka',person,card:'/images/tarot/cards/'+number+'.png',symbol:'/images/tarot/symbols/'+number+'.png'};
});
export const tarotByArcana=new Map(deck.map(card=>[card.arcana,card]));
export const tarotBack='/images/tarot/back.png';
export const tarotReady=[tarotBack,...deck.flatMap(card=>[card.card,card.symbol])].every(path=>existsSync(new URL('../../public'+path,import.meta.url)));
