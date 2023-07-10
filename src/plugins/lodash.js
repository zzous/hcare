import _ from 'lodash'

// export const lodashMixin = {
//   /** Converts obj keys to camelCase */
//   $camelCaseKeys (object) {
//     return _.mapKeys(object, (_value, key) => _.camelCase(key))
//   },

//   /** Pauses code for x milliseconds */
//   $pause (milliseconds) {
//     return new Promise((resolve) => setTimeout(resolve, milliseconds))
//   },
// }



export const lodashPlugin = {
  install (app) {
    app.provide('$_', _)
  },
}

// _.mixin(lodashMixin)
window._ = _