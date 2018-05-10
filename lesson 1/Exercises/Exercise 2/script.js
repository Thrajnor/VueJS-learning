var Vue

new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function () {
                alert('ALERT!!!')
            },
            saveValue: function (event) {
                this.value = event.target.value
            }
        }
    });