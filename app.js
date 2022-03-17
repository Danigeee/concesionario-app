/* requerir módulo autos */
let autosRequeridos = require("./autos")

const concesionaria = {
    autos: autosRequeridos,

    buscarAuto: function (patente){
        let resultado;
         for (let i = 0; i < this.autos.length; i++) {
             
            if (this.autos[i].patente == patente) {
                
                resultado = this.autos[i];
                
            }else{
                
                resultado = null;
            }
             
         }
         return resultado;
    },

    venderAuto: function (patente){
        let auto = this.buscarAuto(patente)
        auto.vendido = true
        console.log(this.autos)
    },

    autosParaLaVenta: function(){
        let resultado = this.autos.filter(auto => auto.vendido === false );
        return resultado;
    },

    autosNuevos: function(){    
        let autosEnVenta = this.autosParaLaVenta()

        return autosEnVenta.filter(auto => auto.km < 100)
    },

    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(auto => auto.vendido === true );
        let preciosDeVenta = []
        for (let i = 0; i < autosVendidos.length; i++) {
            preciosDeVenta[i] = autosVendidos[i].precio;
            
        }
        return preciosDeVenta;
    },

    totalDeVentas: function(){
        preciosDeVenta = this.listaDeVentas()
        let totalVentas = preciosDeVenta.reduce((total,precio) => total += precio,0)
        return totalVentas;
    }
   
};

console.log(concesionaria.totalDeVentas()); 