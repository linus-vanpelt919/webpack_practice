
import './reactApp.jsx';
import my from './my.js';
import '../css/main.scss';
import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
  el: '#vewApp',
  render: (h) => h(VueApp),
});

console.log('webpack');
my();
