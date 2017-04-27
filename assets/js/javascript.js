var miObjeto = [
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
},
{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
},
{
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
},
{
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
},
{
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
},
{
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
},
{
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
},
{
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
},
{
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
},

];
var info = document.getElementById('lista');
miObjeto.forEach(function(elemento){
  info.innerHTML += "<li>" + elemento.title + "</li>";
}); 

function mostrarTareas(){
    var añadir = document.getElementById('EntradaAñadir').value;
    var añadido = document.getElementById('agregarTarea').value;
    document.getElementById('lista').innerHTML += "<li>" + añadir + "</li>";
}

function tareasnuevas(userId,id,title,completed){
    this.userId = 1;
    this.id = miObjeto.length;
    this.title = 
    this.completed = false;
}