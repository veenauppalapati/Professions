$(document).ready(function(){
    function professionTableIteration(data){

        //once the get request gets the response 
        //lets log the data into terminal for tests	
        
        
        data.forEach(function (currentValue, index, array){
            // console.log(currentValue.occupation);
            // console.log(currentValue.id);
    
            var occupation= currentValue.occupation;
            var professionid = currentValue.id;
                
            htmlHandler(professionid, occupation);
    
        });
    
        $(".occupations").click(function(){
            console.log('working')
                // class will be shown
        var occupationSelected = $(this).prop('id');
            if ($(this).prop('checked')){
                
    
                $(`input[type='file'][name='${occupationSelected}']`).removeClass('hidden');
                // console.log(test);
            }else{
                $(`input[type='file'][name='${occupationSelected}']`).addClass('hidden');
    
            }
    
            })
    
    }
    
    function htmlHandler(pk, occupation){
    // PANEL THAT HOLDS ALL THE CHECKBOXES WITH PROFESSION LIST
    //======================================
    
        var professionList = `
        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="${occupation}"></label>
                <input type="checkbox" 
                class="occupations"
                id="${occupation}" 
                value="${pk}">
                <span style= "padding: 60px; margin:20px;">			
                 ${occupation}
                 </span>
                 </br>
                 <input type="file" 
                 class="hidden"
                 name= "${occupation}" 
                 placeholder= "Upload file for ${occupation}">
            </div>
        </div>`				
        ;
    
        $('#professionRow').append(professionList);
    
        
    }    
})
