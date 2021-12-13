import TCard from '../templates/TCard.vue'
import AutoComplete from '../templates/AutoComplete.vue'

export default ({ app }) => {
    // we globally register our component in the app
    app.component('TCard',TCard),
    app.component('AutoComplete',AutoComplete)
  }