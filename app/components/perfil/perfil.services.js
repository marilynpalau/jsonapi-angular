class PerfilService{
    constructor($q, $http){
        this.$q = $q;
        this.$http = $http;

        this.headers = {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        };
        console.log('llamando perfil service');
    }

    getDatos(){
        return this.$q((resolve, reject) => {
            this.$http({
                method: 'GET',
                url: 'https://api.github.com/users/marilynpalau',
            }).then((data) => {
                resolve(data);
            } , (err) => {
                reject(err);
            })
        })
    }
}

PerfilService.$inject = ['$q', '$http'];
export default PerfilService;