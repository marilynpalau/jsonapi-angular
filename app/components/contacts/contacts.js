import angular from 'angular';
import ContactsRoutes from './contacts.routes';
import ContactsController from './contacts.controller';
import ContactsService from './contacts.service';

import contactForm from './components/contact-form/contact-form';
import phonesForm from './components/phone-form-component/phones-form';
import contactDetail from './components/contact-detail/contact-detail';

let contactsModule = angular.module('app.components.contacts', [
        contactForm.name,
        phonesForm.name,
        contactDetail.name
    ])
    .config(ContactsRoutes)
    .controller('ContactsController', ContactsController)
    .service('ContactsService', ContactsService);

export default contactsModule;