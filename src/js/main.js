
import './reactApp.jsx';
import my from './my.js';
import '../css/main.scss';
import Vue from 'vue';
import VueApp from './VueApp.vue';

import add from './add.ts';

new Vue({
  el: '#vewApp',
  render: (h) => h(VueApp),
});

console.log(add(3,9));
console.log('webpack');
my();
