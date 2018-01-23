PerfilRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function PerfilRoutes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('perfil',{
        url : '/perfil',
        controller: 'PerfilController',
        controllerAs: 'per',
        templateUrl: 'components/perfil/perfil.html'
    })
}

export default PerfilRoutes;