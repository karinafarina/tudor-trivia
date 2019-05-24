# tudor-trivia

This is an app to test your Tudor knowledge.

Technologies used are html5, css3, javaScript, and jQuery.

I had a difficult time removing the default behavior of the radio buttons without it returning to the start screen upon submit. 
I overcame that by changing the submit input to a button, removing event.preventDefault() and adding and alert for if the 
user doesn't select an option in the form.
