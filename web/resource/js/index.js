/**
 * @author wbding
 * @date 2018/11/2.
 * @description
 */


import Vue from 'vue';
import Demo from './components/demo/index.vue';
let _myApp = new Vue({
    el: "#main",
    components: {Demo},
    template: "<Demo ref='Demo'></Demo>",
    mounted() {

    }
});
