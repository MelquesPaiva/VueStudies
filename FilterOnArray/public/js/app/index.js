const mainApp = new Vue({
    el: '#main',
    created: function () {
        this.nameListSearched = this.nameList;
    },
    data: {
        nameList: ['Melques', 'Fernanda', 'Gilmar', 'Eliana', 'Milena'],
        nameListSearched: [],
        nameSearch: '',
        nameToAdd: '',
        showAddButton: false
    },
    methods: {
        // Adding names to the list
        addName: function () {
            if (this.nameToAdd.lenght <= 2) {
                return;
            }

            this.nameList.push(this.nameToAdd);
            this.nameToAdd = '';
        }
    },
    computed: {
        // Filtering elements on nameList
        filtredName: function () {
            if (this.nameSearch == '') {
                return this.nameList;
            }

            let name = this.nameSearch;

            return this.nameList.filter(function (item) {
                item = item.toUpperCase();
                return item.includes(name.toUpperCase());
            });
        }
    },
    watch: {
        // Verifiy name and showing button to add
        nameToAdd: function () {
            if (this.nameToAdd.length < 3) {
                this.showAddButton = false;
                return;
            }

            this.showAddButton = true;
        }
    }
});
