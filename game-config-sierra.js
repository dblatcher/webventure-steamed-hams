

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

export default config