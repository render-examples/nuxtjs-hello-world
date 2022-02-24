import Vue from 'vue';
import VueGtag from 'vue-gtag';

if (process.env.NODE_ENV === "production") {
    Vue.use(VueGtag, {
        config: {id: 'G-440PSVE0BR'},
        appName: 'Format Digital',
    });
}