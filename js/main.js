/* Custom JS goes here. */

// For this assignment you'll need to do a few things:

// 1. Create a document ready handler.
// Create a document ready handler.
$(document).on('ready', function(){
 $('#order-form').validate({
   submitHandler:function(form){
     form.submit();
   },
   rules: {
     "your-name": {
       required: true,
       maxlength: 128
     },

     "your-zip": {
       required: true,
       digits: true,
       maxlength: 5
     },

     "your-state": {
       required: true,
       maxlength: 2
     },

     "card-holder-name": {
       required: true,
       maxlength: 128
     },

     "card-number": {
       required: true,
       creditcard: true
     },

     "cvv": {
       required: true,
       maxlength: 3,
       digits: true
     }
   }
 });
$('label span-glyphicon').tooltip();
});
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.