import template from './phones-form.html';
import controller from './phones-form.controller';

let phonesFormComponent = {
    template,
    controller,
    bindings: {
        contact: '<',
        phone: '<'
    }
};

export default phonesFormComponent;