
const config = {
    title: 'Steamed Hams',
    interface: 'Scumm',
    alwaysWalkWhenClickOnRoom: true,
    resetVerbAfterEachCommand: true,
    rightClickForRecommendedVerb:true,
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

export default config;