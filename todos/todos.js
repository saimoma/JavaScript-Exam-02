function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displatData(data))
}
loadUsers();

 function  displatData(data){
     const sectionId = document.getElementById('todos');
     for(const todos of data){
         const div = document.createElement('div');
         div.classList.add("todo")
         div.innerHTML = `
           <h2>${todos.userId}</h2>
           <h2>${todos.id}</h2>
           <h5>${todos.title}</h5>
           <h4>${todos.completed}</h4>
           `;
           sectionId.appendChild(div)

           console.log(todos)
   }

 }