import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
  .config('https://00b700702ef14b27a89691dc1bb9ee02@sentry.io/204284')
  .addPlugin(RavenVue, Vue)
  .install()
