function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displatData(data))
}
loadUsers();

 function  displatData(data){
     const sectionId = document.getElementById('posts');
     for(const posts of data){
         const div = document.createElement('div');
         div.classList.add("post")
         div.innerHTML = `
           <h2>${posts.userId}</h2>
           <h2>${posts.id}</h2>
           <h5>${posts.title}</h5>
           <h4>${posts.body}</h4>
           `;
           sectionId.appendChild(div)

           console.log(posts)
   }

 }