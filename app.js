/* requerir módulo autos */
let autosRequeridos = require("./autos")

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 1000000 ,
    capacidadDePagoTotal: 100000,
    }


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
    },
    puedeComprar: function(auto,persona){
        let resultado
        if(auto.precio <= persona.capacidadDePagoTotal && auto.precio/auto.cuotas <= persona.capacidadDePagoEnCuotas){
            resultado =  true;
        }else{
            resultado =  false;
        }
        return resultado;

    },

    autosQuePuedeComprar: function(persona){
        let autosEnVenta = this.autosParaLaVenta();
        let resultado = [];
        for (let i = 0; i < autosEnVenta.length; i++) {
            if(this.puedeComprar(autosEnVenta[i],persona)){
                resultado = [...resultado, autosEnVenta[i]]
            }
        }
        return resultado;
    }
   
};

console.log(concesionaria.autosQuePuedeComprar(persona)); 