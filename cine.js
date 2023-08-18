const img_base='https://image.tmdb.org/t/p/w500'
const container=document.getElementById('container')
const search=document.getElementById('search')
const note=document.getElementById('note')
const container2=document.getElementById('container2')
const inpt=document.getElementById('inpt')




const urlb='https://api.themoviedb.org/3/search/movie?api_key=777fba7616e91ff5b4c12d5d8270366f'
//https://api.themoviedb.org/3/movie/popular?api_key=777fba7616e91ff5b4c12d5d8270366f&query

getAPI('https://api.themoviedb.org/3/movie/top_rated?api_key=777fba7616e91ff5b4c12d5d8270366f&query')
function getAPI(url){
	fetch(url).then(res=>res.json()).then(data=>{

		console.log(data.results)
		
		if(data.results.length>0){
			getMoviePosters(data.results)
			note.textContent=""
			
			
		}
		else{ container.innerHTML=''
			note.textContent="Note: Movie not found in database, check spelling and try again."
			
		}
	})
}

function getMoviePosters(data){

     container.innerHTML=''

      data.forEach(movie=> {
     	const {title,poster_path,release_date,vote_average,overview}=movie
     	const movieEl=document.createElement('div')
     	movieEl.classList.add("movie")
     	if(poster_path){
     	movieEl.innerHTML=`
     	         <img src="${img_base+poster_path}" alt="${title}" style="width: 100%; height: 100%;">
     	         <div class="overlay1 overlay2">
     	            <h2 style="color: goldenrod;">${title}</h2>
     	            <h3 style="color:gainsboro;">Rating: ${vote_average}</h3>
     	           <h3 style="color: gainsboro;">Release date: ${release_date}</h3>
     	          
     	           <p style="color: darksalmon;">Overview: ${overview}<p>
     	         </div>


     	`
     	
     	container.appendChild(movieEl)}
     })

}




search.addEventListener('submit',(event)=>{
	event.preventDefault()
	let searchName=inpt.value
	if(searchName){
       
		getAPI(urlb+'&query='+searchName)
     
  
        
	}
})

