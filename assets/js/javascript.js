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
    var checked = "";
    if(elemento.completed){
        checked = "checked";
    }
    info.innerHTML += '<li><input type="checkbox" name="tarea" value="' + elemento.id + '" ' + checked + '>' + elemento.title + "</li>"; //Checklist a todas las tareas que son true
}); 

function agregarTarea(){
    var nuevaTarea = document.getElementById('nuevaTarea').value;
    objAux = new agregarObjetoTarea(1, (miObjeto.length+1), nuevaTarea, false); // creacion del objeto con los parametros por defecto del principio y fin y los del medio ingresados por el usuario o del tamaño del arreglo
    miObjeto.push(objAux);// Añado las tareas ingresadas mediante mi objeto a mi JSON
    document.getElementById('lista').innerHTML += '<li><input type="checkbox" name="tarea" value="' + (miObjeto.length+1) + '">' + nuevaTarea + "</li>"; //Checkbox para las nuevas tareas añadidas sin el shulito porque son false por default
    document.getElementById('nuevaTarea').value = ""; // Las "" despues del igual hacen que despues de las tareas ingresadas vuelva a quedar la cajita vacia
}

function agregarObjetoTarea(userId,id,title,completed){ //constructor para añadir objetos a JSON
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
}