/*
      Project Name:  Recipe Display Application
      
      Author: Alexis Calendine
      
      Date:  April 11th, 2016 

      Filename: index.htm
*/

//displays the next element after the current target
         function display(event) {
             $(event.currentTarget).next().fadeIn("slow");
 }//end of display
         
//attach event listener to h3 elements to invoke display function when clicked 
         $("h3").click(display);

