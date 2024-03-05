function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displatData(data))
}
loadAlbums();

 function  displatData(data){
     const sectionId = document.getElementById('albums');
     for(const albums of data){
         const div = document.createElement('div');
         div.classList.add("album")
         div.innerHTML = `
           <h2>${albums.userId}</h2>
           <h2>${albums.id}</h2>
           <h2>${albums.title}</h2>
           `;
           sectionId.appendChild(div)

           console.log(albums)
   }

 }