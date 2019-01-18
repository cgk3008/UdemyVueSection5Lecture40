new Vue({
    el: "#app",
    data: {
        state: true,
        inputName: "",
        names: [],
        showError: false
    },
    methods: {
        addNameToList() {
            if (this.validate(this.inputName)) {
                this.name.push(this.inputName);
                this.inputName = "";
                this.showError = false;
            } else {
                this.showError = true;

                // console.log("not valid")
            }
        },
        validate(value) {
            if (value !== "") {
                return true;
            } else {
                return false;
            }
        }
    }
});

//import Vue from '~./scripts/vue.js';
//import App from '~./App.vue';
//import Header from '~./Components/Header_footer/Header.vue'
//import Footer from '~./Components/Header_footer/Footer.vue';

//Vue.component('app-header', Header)
//Vue.component('app-footer', Footer)

//export const bus = new Vue();

//new Vue({
//    el: '#app',
//    render: h => h(App)
//});