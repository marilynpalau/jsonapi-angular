import angular from 'angular';
import ContactFormController from './contact-form.controller';

let contactFormModule = angular.module('contactForm', [])
    .controller('ContactFormController', ContactFormController);

export default contactFormModule;