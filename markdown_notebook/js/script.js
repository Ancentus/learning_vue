// New VueJs instance
new Vue({
    el: '#notebook',

    data () {
        return {
            content: 'This is a note.',
        }
    },
})

const html = marked.parse('**Bold** *Italic* [link](http://vuejs.org/)')
console.log(html)