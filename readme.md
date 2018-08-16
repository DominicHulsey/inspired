## Inspire

Inspiration can be difficult to achieve. Keep track of your many important tasks and the weather with the suttle help of a random daily quote and beatiful scenery.   

### The Setup


##### Front-End
This time around you are being thrown into a mix of several files and some basic structure. Take some time to look at the files. Remember services are used for getting and mainting the data integrity. Controllers are for manipulating the DOM.

You will notice that the basic controllers and html structure has been setup for you. You will be responsible to connect each of the controllers to their appropiate service. Every Service is a class so be sure to invoke the service inside the controller and save it to a variable in the controller to gain access to the needed methods. Take a look at the weather controller for an example of newing up the services. Also don't forget to instantiate your controllers and add them to the app object.

Your goal will be to put all of the data gathered from the services together in a visually pleasing format as well as ensuring the functionality of a todo list. 

Think about the update functions that each controller will need so its data can be rendered to the page. 

Below you will see an image that you may use for inspiration. 

<div class="text-center">
    <img class="img-responsive" src="https://bcw.blob.core.windows.net/public/img/inspire.jpg"/>
</div>

### Part 1 -  Where is the output?

It is your responsibility to render each piece of the data from the services out to the screen. Look carefully at each controller to figure out the properties that will need to be used for visualization.

## The API

### Todo model
```javascript
{
    description: { type: String, required: true},      //has to be a string
    completed: { type: Boolean, required: true},       //the server will do this for you
    user: { type: String }                             //the server will do this for you
}
```

### Post Request Method

#### Create Todo
https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos - new todo object as data for request


### Get Request Method

#### Get One Todo
https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/:todoId - no data passed for request

#### Get Entire Todo List 
https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos - no data passed for request


### Put Request Method

#### Edit Todo
https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/:todoId - edited todo object as data for request


### Delete Request Method

#### Delete Todo
https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/:todoId - no data passed for request


### Part 2 - Adding the functionality 

The todolist is perhaps one of the most important features of this application. You will need to provide the user a way to add items to a list to be monitored for tracking. The user should be able to add or remove items easily and for a small bonus the user should be able to indicate an items status if they don't want to remove the item.


### Part 3 - Prettify

The positioning of elements on the page is not the absolute most crucial thing for this application however it does need to have few things to make the grade. Use the picture above as an idea for laying out your site.
  

### EXTENSION IDEAS 
- On hover the quote should show the author of the quote and disappear when not hovered over
- A clock should be rendered to the screen that updates each minute without a page refresh
- Allow the user to set their name and have it save to localStorage
- Change the message from Good Morning to Good Afternoon, Evening as appropriate. 
- Allow the user to toggle the clock from, 12hr to military time. 
- Include an Icon to show what the weather is sunny/cloudy/rainy
- Add a button to cycle to next quote/picture
- Could you encorporate a deadline for some of the tasks
- Add a settings so user can change to a new "theme" (font, background colors, etc.)
- Clicking the weather should let the user toggle between Celsius, Fahrenheit, or even Kelvin display

## REQUIREMENTS:
 - Visualization
   - The data from the services are each rendered. 
        - Quote (quote and author)
        - Image (only the image is required, however feel free to include other data)
        - Weather (The temp is displayed, feel free to add other pieces)
        - Todo (the new todo form exists, and any todos are rendered *GET*)
   - The image should be on large display with at least one other element positioned over the top of the image.
 - Functionality
    - Todo's can be added to a list (POST)
    - Todo's can be removed (DELETE)
    - Todo's can be marked complete (PUT)
    - The todolist shows the total count of tasks currently being tracked
    - The todolist takes advantage of the TodoService to provide persistent data
### Finished?
When You are finished please submit the link to the project in the backpack
