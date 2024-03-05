function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displatData(data))
}
loadUsers();

 function  displatData(data){
     const sectionId = document.getElementById('users');
     for(const users of data){
         const div = document.createElement('div');
         div.classList.add("user")
         div.innerHTML = `
           <h2>${users.id}</h2>
           <h2>${users.name}</h2>
           <h5>${users.usersname}</h5>
           <h4>${users.email}</h4>
           `;
           sectionId.appendChild(div)

           console.log(users)
   }

 }