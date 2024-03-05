function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displatData(data))
}
loadPhotos();

 function  displatData(data){
     const sectionId = document.getElementById('Photos');
     for(const Photos of data){
         const div = document.createElement('div');
         div.classList.add("Photo")
         div.innerHTML = `
           <h2>${Photos.albumId}</h2>
           <h2>${Photos.id}</h2>
           <h5>${Photos.title}</h5>
           <h4>${Photos.url}</h4>
           <h4>${Photos.thumbnailurl}</h4>
           `;
           sectionId.appendChild(div)

           console.log(Photos)
   }

 }