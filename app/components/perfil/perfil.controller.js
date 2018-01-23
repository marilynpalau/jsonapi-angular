class PerfilController{
    constructor(PerfilService, $state){
        this.PerfilService = PerfilService;
        this.$state = $state;

        PerfilService.getDatos().then(({data}) => {
            console.log(data);
            this.perfil = data;
        })
    }
}

PerfilController.$inject = ['PerfilService','$state'];
export default PerfilController;

