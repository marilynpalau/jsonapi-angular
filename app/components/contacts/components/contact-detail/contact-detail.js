import angular from 'angular';
import ContactDetailController from './contact-detail.controller';
import ModalPhoneController from './modal-phone.controller';

let contactDetailModule = angular.module('contactDetail', [])
    .controller('ContactDetailController', ContactDetailController)
    .controller('ModalPhoneController', ModalPhoneController);

export default contactDetailModule;