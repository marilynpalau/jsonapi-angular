class ContactsService {

    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.headers = {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        };
    }

    addContact(data) {

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'POST',
                headers: this.headers,
                url: `http://localhost:3000/contacts`,
                data: data
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

    updateContact(config, data) {

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'PATCH',
                headers: this.headers,
                url: config.url,
                data: data
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

    addPhone(data) {

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'POST',
                headers: this.headers,
                url: `http://localhost:3000/phone-numbers`,
                data: data
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

    updatePhone(config, data) {

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'PATCH',
                headers: this.headers,
                url: config.url,
                data: data
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

    delContact(url) {

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'DELETE',
                url: url,
                headers: this.headers
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

    getContacts() {
        return this.$q((resolve, reject) => {

            this.$http({
                url: `http://localhost:3000/contacts`,
                method: 'GET',
                headers: this.headers
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });
    }

    getDetail(url) {

        return this.$q((resolve, reject) => {

            this.$http({
                url: url,
                method: 'GET',
                headers: this.headers
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });
    }

    getPhones(url) {

        return this.$q((resolve, reject) => {

            this.$http({
                url: url,
                method: 'GET',
                headers: this.headers
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });
    }

    deleteRelations(config, data) {

        console.log('data');
        console.log(data);

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'DELETE',
                url: config.url,
                headers: this.headers,
                data: data
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

    deleteRow(url) {

        return this.$q((resolve, reject) => {

            this.$http({
                method: 'DELETE',
                url: url,
                headers: this.headers
            }).then(({data}) => {
                resolve(data);
            }, (reason)=> {
                reject(reason);
            });

        });

    }

}

ContactsService.$inject = ['$q', '$http'];

export default ContactsService
