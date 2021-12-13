function extendConf (conf) {
  console.log(conf);
  // make sure my-ext boot file is registered
  conf.boot.push('~quasar-app-extension-cila-lib/src/boot/registerMyComponent.js')

  // make sure boot & component files get transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-cila-lib[\\/]src/)

}

module.exports = function (api) {
  api.extendQuasarConf(extendConf)
}
