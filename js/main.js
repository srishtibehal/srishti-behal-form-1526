// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>
let button = document.getElementById('submit-button');
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let message = document.getElementById('message');

// Declare variable that will 
// store regular expression for email
let emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
       function validateForm(){
           let data = {};
           let errors = [];
            // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
            // Declare object that will store the form-data
            // Declare array that will store the errors


        /*+-----------+    
        | FULL NAME |
        +-----------+*/
        // Check if fullname is not empty.
           if(fullname.value !== ''){
                // If so:
                // Pass the collected value
                // to your object "data".
                data['fullname'] = fullname.value;
           }else{
                // Otherwise:
                // Create a corresponding error-message
                // and add it to your array "errors".
                errors.push('Full name is missing');
               // End your conditional here.
           }
           /*
        +-------+    
        | EMAIL | 
        +-------+*/
        // Check if email is not empty.
            if(email.value !== ''){
                
                
                // Check if email is valid.
                if(emailcheck.test(email.value)){
                    // If so:
                    // Pass the collected value
                    // to your object "data".   
                    data['email'] = email.value;
                }else{
                    // Otherwise:
                    // Create a corresponding error-message
                    // and add it to your array "errors".                    
                    errors.push('Email is invalid');
                }
                // End your nested conditional here.
           }else{
               // Otherwise:
                // Create a corresponding error-message
                // and add it to your array "errors"
                errors.push('Email is missing');
               
           }
           // End your outer conditional here.
           
        /*+---------+    
        | MESSAGE | 
        +---------+*/
        // Check if message is not empty.
           if(message.value !== ''){
                // If so:
                // Pass the collected value
                // to your object "data".
                data['message'] = message.value;
           }else{
                // Otherwise:
                // Create a corresponding error-message
                // and add it to your array "errors"
                errors.push('Message is missing');
                // End your conditional here.
            }

        /*+-----------------+
        | FEEDBACK/ERRORS |
        +-----------------+*/
        // Check if there is anything in array errors
        if(errors.length ){
            // If so: 
            // Print it in JavaScript console.
            console.log(errors);
        }else{
            // Otherwise:
            // Print the data in JavaScript console.
            console.log(data);
            // Clear text-fields
            email.value = '';
            message.value = '';
            fullname.value = '';
        }
        // End your conditional here.
    }
// Close your function here
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();
    });
// Register your form to "click" event.
