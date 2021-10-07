const mainApp = new Vue({
    el: '#main',
    data: {
        name: '',
        nameList: [],
        allowSubmit: false,
        typing: ''
    },
    // Creating a variable that cannot be binded on HTML
    created: function () {
        this.typingTimeout = null;
    },
    methods: {
        // Adding the name to a list
        submit: function () {
            if (this.name != '' && this.name.length > 2) {
                this.nameList.push(this.name);
                this.name = '';
            }
        },
        // Verifying size of the name, and allow the submit button if checks the IF clause
        checkName: function () {
            this.typing = '';
            if (this.name.length > 2) {
                this.allowSubmit = true;
            }
        }
    },
    computed: {
        // Amount of names
        amountNames: function () {
            return this.nameList.length;
        }
    },
    watch: {
        // Watch to verifiy event of change in the variable name
        name: function () {
            if (this.typingTimeout != null) {
                clearTimeout(this.typingTimeout);
            }

            this.typing = 'Digitando...';
            this.allowSubmit = false;
            this.typingTimeout = setTimeout(this.checkName, 1000);
        }
    }
});
