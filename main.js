const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjRjMzA1ZTY1NDM5ZWZiMmE2ZTYyMDgyZGIzNzZiMiIsInN1YiI6IjY0MDM5YzEyMzgzZGYyMDBkOTA1ZWFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eQRXFdMtJyxjaDSwxcgNSGQwSzPEmZjs9dI2RVBIQR0'
	}
  };
  
  fetch('https://api.themoviedb.org/3/search/movie?query=heat&include_adult=false&language=en-US&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));