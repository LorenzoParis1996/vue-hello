const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Holaaaaa Vue',
            image: 'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg'

        }
    },
    methods: {
        sorpresa: function () {
            /*return {
                surprise: 'https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif'
            }*/
            alert('sad rick roll :(');
            return this.sorpresa

        }
    }

}).mount('#app')