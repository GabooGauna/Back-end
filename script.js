const fs = require("fs");

const archivo = "productos.txt";


class Contenedor {
    
    constructor( nombre, precio, url,id) {
            this.nombre = nombre,
            this.precio = precio,
            this.url = url,
            this.id = id
    }
    
  
    /*Metodos*/
    async save() {
        

         try {
            await fs.promises.appendFile("./productos2.txt", `
         {"nombre":"${this.nombre}", 
         "precio":${this.precio},
         "url":"${this.url}", 
         "id":${this.id}},`) 
            console.log(`Producto Guardado, ID N° ${this.id}`)
         } catch (error) {
            console.log(error)
         }


        

    }


    async getById(num) {
        try {
            
            if(num == this.id){
                const item = {nombre: this.nombre, 
                precio:this.precio,
                url:this.url, 
                id:this.id}
                return console.log("resultado de GetById:", item)
            }else {
                return console.log(null)
            }
        } catch (error) {
            return console.log(error)
            
        }
    }
    
    async getAll(){
        try {
            const contenido = await fs.promises.readFile("./productos2.txt", "utf-8" )
            const items= [contenido]
            console.log(items)
        } catch (error) {
            return console.log(error)
        }

    }


}

let producto1 = new Contenedor ("Gin", 3500, "/gin.jpg",1);
let producto2 = new Contenedor ("Cerveza", 500, "/cerveza.jpg",2);
let producto3 = new Contenedor ("Vino", 2500, "/vino.jpg",3);
producto1.save()
producto2.save()
producto3.getById(3)
producto3.getAll()