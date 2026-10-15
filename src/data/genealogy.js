// Public diagram specification for a unified genealogical SVG.
// A relation is drawn only when its meaning is established.
export const genealogy = {
 title:"Genealogia i związki domu Nevermore",
 nodes:[
 {id:"basilius",label:"Basilius Ravensmoor",kind:"npc",x:470,y:70},
 {id:"01",label:"Ambrose",kind:"kin",x:190,y:220},
 {id:"02",label:"Morwen",kind:"kin",x:470,y:220},
 {id:"03",label:"Elspeth",kind:"kin",x:750,y:220},
 {id:"05",label:"Vivienne",kind:"kin",x:120,y:410},
 {id:"04",label:"Edgar",kind:"kin",x:380,y:410},
 {id:"08",label:"Augusta",kind:"spouse",x:555,y:410},
 {id:"07",label:"Malcolm",kind:"kin",x:795,y:410},
 {id:"12",label:"Clara",kind:"kin",x:120,y:610},
 {id:"10",label:"Sebastian",kind:"kin",x:330,y:610},
 {id:"11",label:"Lenore",kind:"kin",x:470,y:610},
 {id:"13",label:"Orlando",kind:"kin",x:610,y:610},
 {id:"14",label:"Thomas",kind:"kin",x:795,y:610},
 {id:"15",label:"Eleanor",kind:"guest",x:330,y:760},
 {id:"16",label:"Basil",kind:"guest",x:610,y:760},
 {id:"06",label:"Beatrice",kind:"unplaced",x:130,y:870},
 {id:"09",label:"Nathaniel",kind:"unplaced",x:315,y:870},
 {id:"17",label:"Horace Finch",kind:"guest",x:485,y:870},
 {id:"18",label:"Dr Ashdown",kind:"guest",x:660,y:870},
 {id:"19",label:"Father Matthias",kind:"guest",x:820,y:870},
 {id:"20",label:"Alaric Vane",kind:"guest",x:820,y:990}
 ],
 relations:[
 {from:"basilius",to:"01",type:"parent"},
 {from:"basilius",to:"02",type:"parent"},
 {from:"basilius",to:"03",type:"parent"},
 {from:"01",to:"05",type:"parent"},
 {from:"05",to:"12",type:"parent"},
 {from:"04",to:"08",type:"marriage"},
 {from:"04",to:"10",type:"parent"},{from:"08",to:"10",type:"parent"},
 {from:"04",to:"11",type:"parent"},{from:"08",to:"11",type:"parent"},
 {from:"04",to:"13",type:"parent"},{from:"08",to:"13",type:"parent"},
 {from:"07",to:"14",type:"parent"},
 {from:"10",to:"15",type:"engagement"},
 {from:"13",to:"16",type:"public_friendship"}
 ],
 legend:{parent:"rodzic i dziecko",marriage:"małżeństwo",engagement:"zaręczyny",public_friendship:"publicznie znana przyjaźń"},
 caveat:"Pozycja pozostałych członków rodu oraz powiązania w bocznych liniach wymagają potwierdzenia. Brak linii nie oznacza braku relacji."
};
