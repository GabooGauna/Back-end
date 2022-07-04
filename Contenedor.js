var fs = require('fs');

class Contenedor{
    constructor(file){
        this.file = file;
    }

    async getAll(){
        try{
            const archivoG = await fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(archivoG);
        }catch(err){
            return [ ];
        }
    }

    async save(objeto){
        const objetos = await this.getAll();
        let newId;
        if(objetos.length == 0){
            newId = 1
        }else{
            newId = objetos[objetos.length - 1].id + 1;
        }
        const newObject = {...objeto, id:newId};
        objetos.push(newObject);
        try{
            await fs.promises.writeFile(this.file, JSON.stringify(objetos, null, 2))
            return newId;
        }catch(err){
            console.log(`error al guardar: ${err}`)
        }
    }

    async deleteAll(){
        await fs.promises.writeFile(this.file, JSON.stringify([], null, 2))
    }

    async getById(num){
        try{
            const data = await this.getAll()
            const archivoId = data.find((item)=>{
                if(num == item.id){
                    return item
                }else{
                    console.log('no se encontro el item con el id mencionado')
                }
            })
            return archivoId;
        }
        catch(err){
            console.log(err)
        }
    }

    async deleteById(num){
        try{
            const data = await this.getAll();
            const archivoFiltrados = data.filter((item)=>{
                if(num != item.id){
                    return item;
                }else{
                    console.log('no se encontro el item con el id mencionado')
                }
            })
            const nuevoArchivo = await fs.promises.writeFile(this.file, JSON.stringify(archivoFiltrados, null, 2));
            return nuevoArchivo;
        }
        catch(err){
            console.log(err)
        }
    }

}

const arch = new Contenedor('productos.txt');
  arch.save({
    "title": "Globo Terrá",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  })

const libreta = new Contenedor('productos.txt');
  libreta.save({
    "title": "Libreta",
    "price": 320.50,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
})
  
module.exports = Contenedor;