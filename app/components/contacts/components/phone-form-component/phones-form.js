import angular from 'angular';
import phonesFormComponent from './phones-form.component';

let phonesFormModule = angular.module('phonesForm', [])
    .component('phonesForm', phonesFormComponent);

export default phonesFormModule;