class User{
    constructor(name, lastName, books, pets){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    getFullName(){
        console.log(`Hola! me llamo ${this.name} y mi apellido es ${this.lastName}`);
    }

    addPets( newPet ){
       this.pets.push( newPet );
    }

    addBook(title, autor){
        this.books.push( {title: title, autor:autor} );
    }

    countPets(){
        console.log(this.pets.lenght);
    }

    getBookNames(){
        const bookNames = this.books.map( book => {
            return book.name
        } )
        console.log(bookNames);
    }
}

const user = new User ('Cesar Gabriel', 'Gauna', 
[{title: 'The Final Empire', autor: 'Brandon Sanderson'}, 
{title: 'The Well of Ascension', autor: 'Brandon Sanderson'}], 
['Perro', 'Gata', 'Perra']);

user.getFullName();
user.addPets('Loro');
user.countPets();
user.addBook('The Hero of Ages', 'Brandon Sanderson');
user.getBookNames();
