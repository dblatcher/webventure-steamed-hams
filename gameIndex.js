import TitleScreen from './Title-Screen'
import EndingScreen from './Ending-Screen'
import makeConversations from "./game-conversations";
import * as gameContentsImport from "./game-contents";
import sequences from "./sequences";

import scummConfig from './game-config'
import ScummMatrix from './game-interactions'
import scummVerbList from '../../src/defaults/defaultScummVerbs'

import sierraConfig from './game-config-sierra'
import SierraMatrix from './game-interactions-sierra'
import sierraVerbList from '../../src/defaults/defaultSierraVerbs'


function readParam(param) {
    let params = window.location.search
    if (params.indexOf(param) === -1) { return undefined }
    let answer = ''
    let startIndex = params.indexOf(param) + 1 + param.length

    function addCharacter(index) {
        let nextChar = params.charAt(index)
        if (['', '&', '='].includes(nextChar)) { return }
        answer += nextChar
        addCharacter(index + 1)
    }
    addCharacter(startIndex)
    return answer
}


let mode = readParam('mode') || 'sierra'

const config = mode === 'sierra' ? sierraConfig : scummConfig
const interactionMatrix = mode === 'sierra' ? SierraMatrix : ScummMatrix
const verbList = mode === 'sierra' ? sierraVerbList : scummVerbList

const gameData = {
    ...gameContentsImport,
    config,
    verbList,
    sequences,
    interactionMatrix,
    makeConversations,
}

export {
    TitleScreen,
    EndingScreen,
    gameData,
}