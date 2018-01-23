class ContactDetailController {

    constructor(ContactsService, contact, $state) {

        this.ContactsService = ContactsService;
        this.contact = contact;
        this.$state = $state;
        this.isCollapsed = true;
        this.id = contact.data.id;
        this.phone = {};

        this.name = `${contact.data.attributes['name-first']} ${contact.data.attributes['name-last']}`;
        this.email = contact.data.attributes.email;
        this.phones = contact.included;
        this.linkSelf = contact.data.relationships['phone-numbers'].links.self;

    }

    prepareUpdate(index) {

        this.isCollapsed = false;
        this.phone = this.phones[index];

    }

    delete(id) {

        var config = {
                url: this.linkSelf
            },
            data = {
                data: [{
                    type: "phone-numbers",
                    id: id
                }]
            };

        this.ContactsService.deleteRelations(config, data).then(({data}) => {
            console.log('delete data');
            console.log(data);
            this.$state.reload();
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

    }

}

ContactDetailController.$inject = ['ContactsService', 'contact', '$state'];

export default ContactDetailController