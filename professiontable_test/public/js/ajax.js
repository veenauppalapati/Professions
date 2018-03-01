$(document).ready(function(event){
	
//============================================
console.log('hello');
alert('im loaded')
	//GET REQUEST For all the data from profession table
	//============================================

	//sending a get request
	// via route /professions
	// store the response in the data parameter
	$.get('/professions', function(data){
	//============================================
			
	professionTableIteration(data);
	//============================================		
	})// get request closing tag

	
	//============================================

function professionTableIteration(data){

	//once the get request gets the response 
	//lets log the data into terminal for tests			
	data.forEach(function (currentValue, index, array){
		console.log(currentValue.occupation);
		console.log(currentValue.id);

		var occupation= currentValue.occupation;
		var professionid = currentValue.id;
			
		htmlHandler(professionid, occupation);

	});

}

function htmlHandler(pk, occupation){
// PANEL THAT HOLDS ALL THE CHECKBOXES WITH PROFESSION LIST
//======================================

	var professionList = `
	<div class="col-md-4 col-sm-12">
		<div class="form-group">
			<label for="${occupation}"></label>
			<input type="checkbox" 
			id="${occupation}" 
			value="${pk}"> 
			${occupation}
		</div>
	</div>`				
	;
	
	$('#professionRow').append(professionList);

}
	
			

//============================================
});// document on ready function closing tag 