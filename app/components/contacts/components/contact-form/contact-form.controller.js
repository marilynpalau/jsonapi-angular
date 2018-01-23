class ContactFormController {

    constructor(ContactsService, $state, $stateParams) {

        this.ContactsService = ContactsService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.attributes = {};
        this.createForm = true;

        if($stateParams.data != null){

            this.attributes['name-first'] = $stateParams.data.attributes['name-first'];
            this.attributes['name-last'] = $stateParams.data.attributes['name-last'];
            this.attributes.email = $stateParams.data.attributes.email;

            this.createForm = false;

        }

    }

    createRow() {
        console.log('create contact');

        var dataContact = {
            data: {
                type: 'contacts',
                attributes: this.attributes
            }
        };


        this.ContactsService.addContact(dataContact).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('contacts.detail', {id: data.id, contact: data});
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        })

    }

    updateRow() {
        console.log('update contact');

        var dataContact = {
            data: {
                id: this.$stateParams.data.id,
                type: 'contacts',
                attributes: this.attributes
            }
        },
            config = {
                url: this.$stateParams.data.links.self
            };

        this.ContactsService.updateContact(config, dataContact).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('contacts.detail', {id: data.id, contact: data});
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        })

    }

}

ContactFormController.$inject = ['ContactsService', '$state', '$stateParams'];

export default ContactFormController