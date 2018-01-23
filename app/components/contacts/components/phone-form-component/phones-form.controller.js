class PhonesFormController {

    constructor(ContactsService, $state, $scope) {

        this.ContactsService = ContactsService;
        this.$state = $state;
        this.attributes = {};
        this.id = this.contact.id;
        this.createForm = true;

        $scope.$watch(() => {
            if (this.phone.attributes != undefined) {
                if (typeof this.attributes.name == 'undefined') {
                    this.attributes.name = this.phone.attributes.name;
                    this.attributes['phone-number'] = this.phone.attributes['phone-number'];
                    this.createForm = false;
                    this.phone_id = this.phone.id;
                    this.url = this.contact.relationships['phone-numbers'].links.self;
                }
            }
        })

    }

    create() {

        console.log("Create Phone");

        var dataPhone = {
            data: {
                type: 'phone-numbers',
                relationships: {
                    contact: {
                        data: {
                            type: "contacts",
                            id: this.id
                        }
                    }
                },
                attributes: this.attributes
            }
        };

        this.ContactsService.addPhone(dataPhone).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.reload();
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        })

    }

    update() {

        console.log("update phone");

        var config = {
            //url: this.url
            url: `http://localhost:3000/phone-numbers/${this.phone_id}`
        },
            data = {
                data: {
                    id: this.phone_id,
                    type: 'phone-numbers',
                    attributes: this.attributes
                }
        };

        this.ContactsService.updatePhone(config, data).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.reload();
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        })

    }

}

PhonesFormController.$inject = ['ContactsService', '$state', '$scope'];

export default PhonesFormController