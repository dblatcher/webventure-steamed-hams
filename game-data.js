import { RectZone, PolyZone } from "../../src/modules/zone";
import { Room, EffectZone, Foreground, Sprite, Sound } from "../../src/modules/constructors"
import Character from "../../src/modules/characterDataClass"
import WorldItem from "../../src/modules/WorldItemDataClass"
import InventoryItem from "../../src/modules/InventoryItem"


var sprites = [

  new Sprite ('door',  require('./sprites/frontDoor.png'), [5,1]),
  new Sprite ('front_fence',  require('./sprites/fence_front.png'), [1,1]),
  new Sprite ('table',  require('./sprites/table.png'), [1,1]),
  new Sprite ('iceBucket',  require('./sprites/ice-bucket.png'), [1,1]),
  new Sprite ('hamburgerPlatter',  require('./sprites/hamburgers_on_platter.png'), [1,3]),
  new Sprite ('foil',  require('./sprites/foil.png'), [1,1]),
  new Sprite ('oven', require('./sprites/oven.png'), [6,1]),

  new Sprite('pour', require('./sprites/pour.png'),[5,1]),
  new Sprite('skin', require('./sprites/skinner_main.png'),[6,5]),
  new Sprite('skinW', require('./sprites/skinner_wide.png'),[4,3],{
      frameSize: [1.33,1],
      offset: [33],
    }),
  new Sprite('skinW2', require('./sprites/skinner_wide.png'),[4,3],{
      frameSize: [1.33,1],
      offset: [-12,-.5],
    }),

  new Sprite ('ch-l', require('./sprites/Chalmers-sheet-l-small.png'),[6,3]),
  new Sprite ('ch-r', require('./sprites/Chalmers-sheet-r-small.png'),[6,3]),

  new Sprite ('k-dr', require('./sprites/kitchen-door.png'),[4,3]),

  new Sprite('window', require('./sprites/windows.png'),[4,1]),
]

var sounds = [
    new Sound('foot step', 'fs', require('./audio/zapsplat_foley_footstep_single_shoe_soft_girls_carpet_007_36951.mp3' )),
    new Sound('foot step', 'fs2', require('./audio/zapsplat_foley_footstep_single_shoe_soft_girls_carpet_015_36959.mp3' )),
    new Sound('openning door','open',require('./audio/zapsplat_household_door_wooden_modern_internal_close_007_36801.mp3')),
    new Sound('closing door','close',require('./audio/zapsplat_household_door_cabin_wood_front_close_002_44909.mp3')),
    new Sound('doorbell','doorbell',require('./audio/zapsplat_household_doorbell_ring_chime_002_42804.mp3')),
    new Sound('sand','sand',require('./audio/zapsplat_foley_sand_handful_drop_ground_002_43847.mp3')),
    new Sound('burn','burn',require('./audio/audio_hero_Fire_DIGIVJ2_19_355-extract1.mp3')),
    new Sound('bite','bite',require('./audio/zapsplat_human_eat_bite_crunch_crispbread_slice_001_16895.mp3')),
    new Sound('oven open','oven_open',require('./audio/glitched_tones_Oven Door Open.mp3')),
    new Sound('oven shut','oven_shut',require('./audio/glitched_tones_Oven Door Close.mp3')),
]

var music = {
    title: new Sound('title music','music',require('./audio/title.mp3')),
    outside: new Sound('outdoor sound','outside',require('./audio/outside.mp3')),
}

var characterModels = {

    skinner : new Character.Model ({
        wait : {
            right : [ ['skin',4,1] ],
            left : [ ['skin',3,1] ],
        },
        walk : {
            right : [ ['skin',2,3,'fs'],['skin',0,4],['skin',4,3,'fs2'],['skin',0,4],  ] ,
            left : [ ['skin',1,3,'fs'],['skin',5,3],['skin',3,3,'fs2'],['skin',5,3], ] ,
        },
        talk : {
            right : [ ['skin',0,2],['skin',2,2],['skin',4,2],['skin',0,3],['skin',4,2]],
            left : [ ['skin',5,1],['skin',1,2],['skin',3,2],['skin',5,2],['skin',3,2]],
        },
        climb: [ ['skin',4,1],['skinW',0,0],['skinW',0,0],['skinW',0,1],['skinW',0,1] ],
        window_talk : [ ['skinW',1,1],['skinW',3,0],['skinW',1,1],['skinW',1,0] ],
        window_wait : [ ['skinW',1,0] ],
        window_wait2 : [ ['skinW',0,1] ],
        isometric_exercise : [ ['skinW',3,0],['skinW',3,0],['skinW',1,0], ['skinW',1,0],['skinW',3,0],['skinW',3,0], ['skinW',1,0], ['skinW',1,1],['skinW',1,1] ],
        stomp:  [ ['skinW',0,0],['skinW',0,0],['skinW',1,0],['skinW',3,0] ],
        eye_roll: {
            right: [ ['skin',4,0],['skin',0,1],['skin',2,1],['skin',4,1], ],
            left: [ ['skin',3,0],['skin',5,0],['skin',1,1],['skin',3,1], ],
        },
        pour_sand: [ ['pour',0,0],['pour',1,0,'sand'],['pour',2,0],['pour',3,0],['pour',4,0], ],
        thumb_up: [ ['skinW2',0,2],['skinW2',1,2],['skinW2',2,2],['skinW2',2,2],['skinW2',3,2],['skinW2',2,2],['skinW2',2,2],['skinW2',3,2],['skinW2',2,2],['skinW2',2,2],['skinW2',3,2],['skinW2',2,2],['skinW2',2,2],['skinW2',3,2],['skinW2',2,2],['skinW2',2,2],['skinW2',3,2], ],
        wrap_bucket: [['skin',4,1],['skin',1,4],['skin',2,4],['skin',3,4],['skin',3,4]],
        reach:  [ ['skinW2',2,1],['skinW2',3,1] ],


    },{
        defaultDirection: 'left',
        speechBubbleDown:.3, speechBubbleIn:.3,
        soundLoops:{'talk':false}
    }),
    
    chalmers : new Character.Model ({
        wait : {
            right : [ ['ch-r',3,0] ],
            left : [ ['ch-l',2,0] ],
        },
        walk : {
            right : [ ['ch-r',0,2],['ch-r',1,2,'fs'],['ch-r',2,2],['ch-r',3,2,'fs2'], ['ch-r',4,2]  ] ,
            left : [ ['ch-l',1,2],['ch-l',5,2,'fs'],['ch-l',4,2],['ch-l',3,2,'fs2'], ['ch-l',2,2]  ] ,
        },
        talk : {
            right : [ ['ch-r',2,1],['ch-r',3,1],['ch-r',4,1],['ch-r',5,1],['ch-r',4,1] ],
            left :  [ ['ch-l',0,1],['ch-l',1,1],['ch-l',2,1],['ch-l',3,1],['ch-l',1,1], ],
        },
        blink : {
            right : [ ['ch-r',3,0],['ch-r',0,0],['ch-r',3,0] ],
            left :  [ ['ch-l',2,0],['ch-l',5,0],['ch-l',2,0] ],
        },
        take_ham :
        [['ch-r',1,0],['ch-r',1,0],['ch-r',2,0],['ch-r',5,2],['ch-r',5,2,'bite'],['ch-r',2,0]],
        bite :
        [['ch-r',2,0],['ch-r',1,1],['ch-r',5,2,'bite'],['ch-r',5,2],['ch-r',2,0]],
        talk_with_ham : 
        [ ['ch-r',4,0],['ch-r',5,0],['ch-r',0,1],['ch-r',1,1],['ch-r',0,1] ],
        wait_with_ham : 
        [ ['ch-r',2,0] ],
        
    },{defaultDirection:'right', speechBubbleDown:.3, speechBubbleIn:.25}),

    invisible : new Character.Model ({
        wait : {
            right : [ ['ch-r',0,0] ],
            left : [ ['ch-r',6,0] ],
        },
        walk : {
            right : [ ['ch-r',0,0] ],
            left : [ ['ch-r',6,0] ],
        },
        talk : {
            right : [ ['ch-r',0,0] ],
            left : [ ['ch-r',6,0] ],
        },
    },{})
}


var worldItemModels = {
    door: new WorldItem.Model ({
        closed: [ ['door',4,0]  ],
        open:   [ ['door',3,0]  ],
        opening:   [ ['door',4,0],['door',0,0,'open'],['door',1,0],['door',2,0],['door',3,0]  ],
        closing:   [ ['door',3,0],['door',2,0,'close'],['door',1,0],['door',0,0],['door',4,0]  ],
    },{
        soundLoops: {
        }
    }),
    kitchen_door: new WorldItem.Model ({
        closed: [ ['k-dr',3,2]  ],
        open:   [ ['k-dr',0,0]  ],
        closed_glowing: [ ['k-dr',3,0], ['k-dr',3,1]  ],
        opening:   [ ['k-dr',3,2,'open'], ['k-dr',0,2],['k-dr',0,1],['k-dr',0,0]  ],
        closing:   [ ['k-dr',0,1],['k-dr',0,2,'close'],['k-dr',3,2]  ],
        opening_fire:   [ ['k-dr',1,2],['k-dr',2,2], ['k-dr',1,1] ,['k-dr',2,1], ['k-dr',1,0],['k-dr',2,0]   ],
        closing_fire:   [  ['k-dr',2,0], ['k-dr',1,0],['k-dr',2,1], ['k-dr',1,1],['k-dr',2,2], ['k-dr',1,2]    ]
    }),
    front_fence: new WorldItem.Model({
        neutral:[['front_fence',0,0]],
    }),
    table: new WorldItem.Model({
        neutral:[['table',0,0]],
    }),
    iceBucket: new WorldItem.Model({
        neutral:[['iceBucket',0,0]],
    }),
    hamburgers: new WorldItem.Model({
        four:[['hamburgerPlatter',0,0]],
        three:[['hamburgerPlatter',0,1]],
        two:[['hamburgerPlatter',0,2]],
    }),
    foil: new WorldItem.Model({
        neutral:[['foil',0,0]],
    }),
    oven: new WorldItem.Model({
        closed:[['oven',0,0]],
        open:[['oven',1,0]],
        closed_ham_inside:[['oven',0,0]],
        open_ham_inside:[['oven',2,0]],
        smoking:[['oven',3,0],['oven',4,0],['oven',5,0],['oven',4,0]],
    },{
        soundLoops: {
            'smoking': 'burn',
        }
    }),

    fireInWindow: new WorldItem.Model({
        burning:[['window',1,0],['window',2,0],['window',3,0]],
        neutral:[['window',0,0]],
    },{
        soundLoops: {
            'burning': 'burn',
        }
    })

};


var makeCharacters = function() {return [
    new Character ('Skinner',[270,5,0],characterModels.skinner,
    {
        idleAnimations: {
            wait: {delay: 100, chance:0.75, cycles:['eye_roll']}
        },
        baseWidth: 50,
        baseHeight: 100,
        speechColor: 'white',
    }),
    new Character ('chalmers',[100,10,null],characterModels.chalmers,
    {
        idleAnimations:{
            "wait": {delay: 50, chance:0.7, cycles:['blink']},
            "wait_with_ham": {delay: 100, chance:0.9, cycles:['bite']}
        },
        baseWidth: 50,
        baseHeight: 100,
        speechColor: 'red',
        name: 'Superintendent Chalmers'
    }),
    new Character ('server',[230,100,2],characterModels.invisible,{
        baseWidth:1,
        baseHeight:1,
        speechColor: 'lime',
    }),
    new Character ('Agnes',[400,260,3],characterModels.invisible,{
        baseWidth:1,
        baseHeight:1,
        speechColor: 'violet',
    }),
]}

var pcId = 'SKINNER_C';

var makeRooms = function(){ return [

    new Room('FRONT', require('./rooms/Skinner_House.png'),280,160,{
        name:'front of house',
        effectZones: [
            new EffectZone(
                new RectZone(0,0,280,160),
                {scale: function(){return 0.28}}
            ),
        ],
        worldItems: [
            new WorldItem('garage',[65,16,0,-10],200,170,null,{
                name: 'car hole',
            }),
            new WorldItem('doorbell',[142,28,5,-10],80,120,worldItemModels.door,{
                initialCycle:'closed'
            }),
            new WorldItem('front_fence',[155,8],470,129,worldItemModels.front_fence,{
                unclickable:true,
                zAdjust:10,
            }),
            new WorldItem('front_window_fire',[175,35],25,30,worldItemModels.fireInWindow,{
                unclickable:true,
                removed:true, 
                noZoneScaling:true,
            }),
        ],
        obstacles: [
            new PolyZone([ [0,40],[30,16],[100,20], [100,40] ]),
            new RectZone(0,40,230,20),
            new PolyZone([ [230,50],[243,50],[280,40], [280,60] ]),
            new PolyZone([ [100,40],[104,14],[141,17], [132,30],[132,40] ]),
            new PolyZone([ [154,40], [154,29],[168,17],[209,17], [215,26],[215,40] ]),
        ],
        foregrounds: [
            new Foreground(require("./rooms/tree_front.png"),[200,0],[80,160]),
        ],
        bgm:'outside'
    }),

    new Room ('DINING', require('./rooms/dining_room2.png'),350,220,{
        name: 'dining room',
        worldItems: [
            new WorldItem('table',[170,20,35,20],120,60,worldItemModels.table),
            new WorldItem('DINING_KITCHENDOOR',[310,10,-30,0],68,150,worldItemModels.kitchen_door,{
                name:'door',
                initialCycle: 'closed',
                zAdjust:500,
                recommendedVerb: {'closed':'OPEN', 'open':'SHUT'}
            }),
            new WorldItem('DINING_WAYOUT',[45,45,20,10],50,125, null,{
                name: 'way out'
            }),
            new WorldItem('ice bucket', [170,70],30,25,worldItemModels.iceBucket,{
                zAdjust:-50,
                removed:true,
            }),
            new WorldItem('HAMBURGERS', [170,60],80,30,worldItemModels.hamburgers,{
                name:'\'steamed hams\'',
                initialCycle: 'four',
                zAdjust:-40,
                removed:true,
            }),
        ],
        obstacles: [
            new PolyZone ([ [0,0], [86,81],[86,220],[0,220] ]),
            new PolyZone ([ [86,81],[86,220],[270,220],[270,81] ]),
            new PolyZone ([ [270,220],[270,81],[350,0],[350,220] ]),
            new PolyZone ([ [110,20],[230,20],[230,30],[110,30] ]),
        ],
        bgm: null,
    }),

    new Room ('kitchen', require('./rooms/kitchen.png'),290,180,{
        worldItems : [
            new WorldItem('OVEN', [145,35,30,-10],70,100,worldItemModels.oven,{
                initialCycle: 'closed',
            }),
            new WorldItem('KRUSTYBURGER',[210,70,-15,-30],50,40,null,{
                name: 'Krusty Burger',
                noZoneScaling: true,
            }),
            new WorldItem('KITCHEN_DININGDOOR',[145,0],290,12, null, {
                name: 'way back to dining room'
            }),
            new WorldItem('cupboard',[90,39,0,-5],50,130),
            new WorldItem('foil',[270,70,-30,-35],50,15,worldItemModels.foil),
        ],
        obstacles : [
            new RectZone(0,44,290,20),
            new RectZone(50,35,140,20),
            new PolyZone ([[5,0],[66,39],[66,60],[0,60],[0,0]])
        ],
        effectZones: [
            new EffectZone(new RectZone(185,70,50,40),{
                scale: function(){return .175 - (this.y-70)/150}
            })
        ]
    }),

    new Room('porch', require('./rooms/bigfront.png'),523,320,{
        effectZones: [
            new EffectZone (
                new RectZone(0,0,523,320), {scale: function(){ 
                    return this.y > 100 ? 1.5 : 1.5 + 0.006* ( 100 - this.y ) 
                }}
            )
        ],
        obstacles: [
            new RectZone(0,40,157,280),
            new RectZone(150,83,65,280),
            new RectZone(215,105,105,280),
            new RectZone(310,40,300,280),
        ],

        worldItems: [
            new WorldItem('bush',[35,49,20,-15],70,50,null,{
                noZoneScaling:true,
            }),
            new WorldItem('bush_2',[120,49,20,-15],60,70,null,{
                name: 'bush',
                noZoneScaling:true,
            }),
            new WorldItem('bush_3',[370,44,-20,-10],55,80,null,{
                name: 'bush',
                noZoneScaling:true,
            }),
            new WorldItem('bush_4',[445,44,-20,-10],70,50,null,{
                name: 'bush',
                noZoneScaling:true,
            }),
            new WorldItem('front door',[268,89,5,-10],123,160,worldItemModels.door, {
                initialCycle: 'closed',
                noZoneScaling:true,
                recommendedVerb: {'closed':'OPEN', 'open':'SHUT'}
            }),
            new WorldItem('window fire',[440,138],200,130,worldItemModels.fireInWindow,{
                unclickable:true, 
                noZoneScaling:true,
            }),
        ],
        bgm:'outside'
    })
]}


var makeInventoryItems = function() { return  [
    new InventoryItem('roast', require('./items/roast.png'),{name:'raw roast', startWith:true, background: {shape:'diamond', color:'pink'}}),
    new InventoryItem('todo', require('./items/todo.png'),{name:'to do list', startWith:true,  recommendedVerb:'LOOK', background: {shape:'circle', color:'lightgreen'}}),
    new InventoryItem('roast_glazed', require('./items/glazed-roast.png'),{name:'glazed roast', background: {color:'red',shape:'diamond'}}),
    new InventoryItem('bucket_foil', require('./items/bucket_foil.png'),{name:'ice bucket'}),
    new InventoryItem('bucket_sand', require('./items/bucket_sand.png'),{name: 'fire bucket',}),
    new InventoryItem('bucket_empty', require('./items/bucket.png'),{name: 'fire bucket',}),
    new InventoryItem('foil', require('./items/foil.jpg'),{name: 'aluminium foil',}),
    new InventoryItem('bourbon', require('./items/bourbon.png')),
    new InventoryItem('hamburger_bag', require('./items/bag.png'),{name:'hamburgers', background: {color:'blue',shape:'diamond'}}),
    new InventoryItem('hamburger_platter', require('./items/hamburgers_on_platter.png'),{name:'elegantly arranged hamburgers',}),
    new InventoryItem('platter', require('./items/platter.png')),

]};

var initialGameVars = {
    cupboardEmpty: false,
    beenToKrustyBurger:false,
	roastIsInOven: false,
	iceBucketIsOnTable : false,
	haveSeenBurningRoast: false,
};

export { sprites, makeRooms, makeInventoryItems, makeCharacters, pcId, initialGameVars, sounds, music }