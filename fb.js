$(document).ready(function(){
    $("#validationform").validate({
        rules:{
            fname:{
                required:true,
                minlength:6
            },
            sname:{
                required:true,
                minlength:6
            },
           email:{
               required:true,
               email:true
           },
           password:{
               required:true,
               pwcheck:true,
               minlength:6
               
           },
           gender:{
            required:true
           },
           day:{
               required:true
           }
           

        },
        // messages:{
            
        //      required:"enthenkilum okke ezhuth",
        //      minlength:"minimum 6 letters venam"
            
        // }
    })
})