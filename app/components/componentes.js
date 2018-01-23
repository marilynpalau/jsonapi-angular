import contacts from './contacts/contacts.js';
import perfil from './perfil/perfil.js';

let componentsModule = angular.module('app.components', [
    contacts.name,
    perfil.name
]);

export default componentsModule;

