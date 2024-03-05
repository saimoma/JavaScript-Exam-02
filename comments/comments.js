function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displatData(data))
}
loadComments();

 function  displatData(data){
     const sectionId = document.getElementById('comments');
     for(const comments of data){
         const div = document.createElement('div');
         div.classList.add("comment")
         div.innerHTML = `
           <h2>${comments.postId}</h2>
           <h2>${comments.id}</h2>
           <h5>${comments.name}</h5>
           <h4>${comments.email}</h4>
           <h4>${comments.body}</h4>
           `;
           sectionId.appendChild(div)

           console.log(comments)
   }

 }