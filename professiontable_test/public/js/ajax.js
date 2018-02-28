$(document).ready(function(){
//============================================

	//GET REQUEST For all the data from profession table
	//============================================

	//sending a get request
	// via route /professions
	// store the response in the data parameter
	$get('/professions', function(data){
	//============================================
			//once the get request gets the response 
			//lets log the data into terminal for tests
			console.log(data);
	//============================================		
	});// get request closing tag
	//============================================


//============================================
});// document on ready function closing tag 