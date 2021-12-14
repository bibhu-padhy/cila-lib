function extendConf (conf) {
  console.log(conf);
  // make sure my-ext boot file is registered
  conf.boot.push('~quasar-app-extension-cila-lib/src/boot/registerMyComponent.js')

  // make sure boot & component files get transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-cila-lib[\\/]src/)

}
// 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

module.exports = function (api) {
  api.extendQuasarConf(extendConf)
}
