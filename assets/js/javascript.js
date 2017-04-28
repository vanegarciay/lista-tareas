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

function agregarTarea(){
    var nuevaTarea = document.getElementById('nuevaTarea').value;
    objAux = new agregarObjetoTarea(1, (miObjeto.length+1), nuevaTarea, false);
    miObjeto.push(objAux);
    document.getElementById('lista').innerHTML += "<li>" + nuevaTarea + "</li>";
    document.getElementById('nuevaTarea').value = "";
}

function agregarObjetoTarea(userId,id,title,completed){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
    console.log(userId+id+title+completed);
}