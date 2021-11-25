import { Store } from 'vuex'

import actions from './actions'
import mutations from './mutations'
import { state } from './state'
import getters from './getters'

const createStore = () => {
  return new Store({
    actions,
    mutations,
    state,
    getters
  })
}

export default createStore

