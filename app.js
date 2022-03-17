/* requerir módulo autos */
let autos = require("./autos")
const concesionaria = {
    autos: autos.conca,

    buscarAuto: function (patente){
         for (let i = 0; i < this.autos.length; i++) {
             
            if (this.autos[i].patente == patente) {
                return autos[i]
            }else{
                return null
            }
             
         }
    },

    venderAuto: function (patente){
        let auto = this.buscarAuto(patente)
        auto.vendido = true

    },
   
};

console.log(autos.length);
console.log(concesionaria.buscar("APL123"))
