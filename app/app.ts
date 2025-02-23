import Vue from 'nativescript-vue'
import Home from './components/Home.vue'
import 'tailwindcss/tailwind.css';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

declare let __DEV__: boolean;

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './node_modules/font-awesome/css/font-awesome.css'
};
TNSFontIcon.loadCss();

// Agregar el filtro global para usar los iconos en las plantillas
Vue.filter('fonticon', fonticon);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
