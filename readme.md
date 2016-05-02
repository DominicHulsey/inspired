##Inspire

Inspiration can be difficult to achieve. Keep track of your many important tasks and the weather with the suttle help of a random daily quote and beatiful scenery.   

###The Setup

This time around you are being thrown into a mix of several files and some basic structure. Take some time to look at the files. You will not be required to edit any of the code in any files that end in `service.js`

You will notice that the basic controllers and html structure has been setup for you. If you open your developer tools you will see a list of data that is coming to you from each service and is being passed to the appropriate controller. 

Your goal will be to put all of this data together in a visually pleasing format as well as ensuring the functionality of the todolist. The `TodoService` already has a helper method for saving your todolist however the entire todolist must be passed to the service for the save to work. 

Below you will see an image that you may use for inspiration. 

<div class="text-center">
<img class="img-responsive" src="https://bcw.blob.core.windows.net/public/img/inspire.jpg"/>
</div>

###Step 1 -  Where is the output? `Total Points: 5`

It is your responsibility to render each piece of the data from the services out to the screen. Look carefully at each controller to figure out the properties that will need to be used for visualization.

Requirements:
- `5 points`: The data from the services are each rendered. Quote, Image, Weather, Todo 

###Step 2 - Adding the functionality `Total Points: 12.5`

The todolist is perhaps on of the most important features of this application. You will need to provide the user a way to add items to a list to be monitored for tracking. The user should be able to add or remove items easily and for a small bonus the user should be able to indicate an items status if they don't want to remove the item.

Requirements: 
- `2.5 points`: The todolist allows items to be added to a list
- `2.5 points`: The todolist allows items to be removed from the list
- `2.5 points`: The todolist takes advantage of the TodoService to provide persistant data through localStorage 
- `1.25 points`: The todolist shows the total count of task currently being tracked
- `1.25 points`: Clicking the weather should let the user toggle between Celsius and Fahrenheit display

###Step 3 - Prettify `Total Points: 5`

The positioning of elements on the page is not the absolute most crucial thing for this application however it does need to have few things to make the grade. Use the picture above as an idea for laying out your site.

Requirements:
- `2.5 points`: On hover the quote should show the author of the quote
- `2.5 points`: The image should be on large display with at least one other element positioned over the top of the image.  

###BONUS - Preview the Songs `Total Points: 5`
Requirements: 
- A clock should be rendered to the screen that updates each minute without a page refresh
- Allow the user to set their name and have it save to localStorage
- Change the message from Good Morning to Good Afternoon, Evening as appropriate. 
- Allow the user to toggle the clock from, 12hr to military time. 

###Finished?
When You are finished please slack the url for your github repo to me with in a DM.