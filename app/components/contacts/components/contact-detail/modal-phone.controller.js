class ModalPhoneController {

    constructor(ContactsService, $uibModalInstance, contact) {

        this.ContactsService = ContactsService;
        this.$uibModalInstance = $uibModalInstance;
        this.contact = contact;
        this.linkRelated = contact.relationships['phone-numbers'].links.related;
        this.linkSelf = contact.relationships['phone-numbers'].links.self;
        this.isCollapsed = true;
        this.phone = {};

        ContactsService.getPhones(this.linkRelated).then(({data}) => {
            this.phones = data;
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

        console.log('contact');
        console.log(contact);

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
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

    }

    cancel() {
        this.$uibModalInstance.close();
    }


}

ModalPhoneController.$inject = ['ContactsService', '$uibModalInstance', 'contact'];

export default ModalPhoneController