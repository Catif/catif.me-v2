import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowLeft, faArrowRight)
library.add(faGithub, faLinkedin)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router).mount('#app')