import { StandardOrder } from "../../src/modules/StandardOrder";
import { Verb } from "../../src/modules/constructors";



var verbList = [
    new Verb('WALK',{
        icon: require('../../src/icons/walking.svg'),
        description: 'walk to',
    }),
    new Verb('LOOK', {
        icon: require('../../src/icons/eye.svg'),
        showOnInventoryBox: true,
        description: 'look at',
    }),
    new Verb('ACTIVATE', {
        icon: require('../../src/icons/hand-paper.svg'),
        description: 'activate',
    }),
    new Verb('USE', {
        description: 'use',
        preposition:'with',
        showOnInventoryBox: true,
        usesSelectedItem: true,
        icon: require('../../src/icons/hand-pointer.svg'),
    }),
]


var defaultResponses = {
    "WALK" : function(command) {
        return [new StandardOrder('pc','goTo',command.subject.id, {wasManual:true})]
    },
    "LOOK" : function(command) {
        if  (command.subject.id.endsWith('W')) {
            return [
                new StandardOrder(`pc^^${command.subject.id}`),
                new StandardOrder('pc','say',`It looks like a normal ${command.subject.name} to me.`)
            ]
        } else if  (command.subject.id.endsWith('C')) {
            return [
                new StandardOrder(`pc^^${command.subject.id}`),
                new StandardOrder('pc','say',`I don't see anything special about ${command.subject.name}.`)
            ]
        } else {
            return[
                new StandardOrder('pc','say',`Good ${command.subject.name}.`)
            ]
        } 
    },
    "USE"  : function (command) {
        if (!command.object) {
            return [new StandardOrder('pc','say',`I can\'t use the ${command.subject.name} .`)]
        }
        return [new StandardOrder('pc','say',
        `I can\'t use the ${command.subject.name} ${command.verb.preposition || 'with'} the ${command.object.name}.`
        )]
    },
    "ACTIVATE"  : function (command) {
        if  (command.subject.id.endsWith('W')) {
            return [
                new StandardOrder(`pc^^${command.subject.id}`),
                new StandardOrder('pc','say',`I don\'t know what to do with the ${command.subject.name}.`)
            ]
        } else if  (command.subject.id.endsWith('C')) {
            return [
                new StandardOrder(`pc^^${command.subject.id}`),
                new StandardOrder('pc','say',`I don\'t know what to do to ${command.subject.name}.`)
            ]
        } else {
            return [
                new StandardOrder('pc','say',`I don\'t know what to do with the ${command.subject.name}.`)
            ]
        }
    },
    "OPEN" : function(command) {
        return [new StandardOrder('pc','say',`The ${command.subject.name} doesn't open.`)]    
    },
    "misc" : function(command) {
        if (!command.object) {
            return [new StandardOrder('pc','say',`I can't ${command.verb.description} that.`)  ]  
        }
        return [new StandardOrder('pc','say','I can\'t.')  ]  
    } 
}

const config = {
    title: 'Steamed Hams',
    interface: 'Sierra',
    alwaysWalkWhenClickOnRoom: false,
    resetVerbAfterEachCommand: false,
    titleScreen: {
        picture: require('./title-skinner.png'),
        title: 'Skinner and the Superintendent',
        subtitle: 'Steamed hams but its a point and click adventure game.',
    },
    endingScreen : {

    },
    defaultVerb: {WorldItem:"LOOK", InventoryItem:"USE", Character:"TALK"},
    initialGameVars: {
        cupboardEmpty: false,
        beenToKrustyBurger:false,
        roastIsInOven: false,
        iceBucketIsOnTable : false,
        haveSeenBurningRoast: false,
    }
}

export { defaultResponses, verbList, config }