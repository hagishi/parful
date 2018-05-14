import Vue from 'vue/dist/vue.esm.js';
import './app.scss';
import Hello from './component/Hello.vue';

new Vue({
  el: '#app',
  data: {
    count: 0
  },
  components: {
    Nice: Hello
  },
  methods: {
    foo() {
      this.count += 1;
    },
    change() {
      const dom = document.getElementById('app');
    }
  }
});
