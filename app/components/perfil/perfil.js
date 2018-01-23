import angular from 'angular';
import PerfilRoutes from './perfil.routes';
import PerfilController from './perfil.controller';
import PerfilService from './perfil.services';

let perfilModule = angular.module('app.components.perfil',[])
.config(PerfilRoutes)
.controller('PerfilController', PerfilController)
.service('PerfilService', PerfilService);

export default perfilModule;