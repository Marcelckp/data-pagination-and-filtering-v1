/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {

    /* use the value of people displayed per page and assign it to a variable
     *
     * use math to calculate the number index of the first and last student that will be displayed per page in the case 
     * the number of students displayed per page is 9 
     */

    const ItemsPerPage = 9
    const startIndex = (page * ItemsPerPage) - ItemsPerPage
    const endIndex = page * ItemsPerPage

    /* use querySelector and the class name of the ul to select the ul and hold it in a variable named ul to reference later
    then use the variable that holds the reference and equate it to an empty string tp remove any existing students that might
    have been displayed already 
    */

    const ul = document.querySelector('.student-list');
    ul.innerHTML = '';


    /* now console.log your variables to ensure that your are getting the correct results and to view if the variables 
    holding the strings are being displayed
    */

    // console.log(list.length)
    // console.log(ul)

    /*use a for loop to iterate over all the objects in the array of objects and use the value of i as an index point for 
    the object and to retrieve the data needed from each object 
    */

    for (let i = 0; i < list.length; i++) {

        // assign the data[i] index point to a variable so to keep your code neat and concise and for a reference usable later

        let dataString = list[i]

        /*create a if statement to ensure that only 9 students are displayed on the page and on every page that follows 

        so use the variables you created to hold the index points for the first and last student per page and use that in your 
        conditional statement. 
        your conditional statement should read i greater than and equals to startIndex and i less than endIndex
        */

        if (i >= startIndex && i < endIndex) {

            /* if the condition is met then a template literal will be assigned to the variable(any variable)

            this template literal will hold references to the objects properties and will hold created html tags to insert onto the page
            the references will need to use dot notation and bracket notion to retrieve the information eg (${dataString.name.first})
            */

            studentItem = `
                            <li class = "student-item cf">
                                <div class = 'student-details'>
                                    <img class = 'avatar' src = '${dataString.picture.thumbnail}' alt = 'Profile Picture'>
                                    <h3>${dataString.name.first} ${dataString.name.last}</h3>
                                    <span class = 'email'>${dataString.email}</span>
                                </div>
                                <div class = 'joined-details'>
                                    <span class = 'date'>${dataString.registered.date}</span>
                                </div>
                            </li>
                            `;

            /*console.log your student string template literal to see
            if you get the correct data to display or to find and fix problems in the template literal
               */

            // console.log(studentItem)
            // console.log(dataString.registered.date)

            /* once you've logged your studentItems string and you retrieve the correct results you then need to add the 
            retrieved template literal, with the reference to the object placed in, into the document/ onto the page for us/
            people to view

            use the insertAdjacentHTML method to add the string to the page

            we need to add the studentItem string into the document after the parent (ul) but before the ul's last child and to 
            do that we can use the ('beforeend') key word to specify that you're adding the element just inside the element/parent, 
            before it's last child
            */

            ul.insertAdjacentHTML('beforeend', studentItem);

        } else {

            /* if the conditional statement is incorrect or doesn't work using the console.log('error') in the else statement will display error 
            to indicate to you that your conditional statement if incorrect and needs to be changed
               */

            // console.log('Error')

        }

    }

}

/*
Create the `addPagination ` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {


    const itemsPerPage = 9;

    /*calculate the number of pages by using the length of the inserted list divided by the number of items per page. This will 
    give you a float value so to get the correct number of pages you need to use the Math.ceil method to round up the float 
    value you get to turn it into a int value
     */

    const numbOfPages = Math.ceil(list.length / itemsPerPage);

    // log the variable for number of pages to see if you get the correct int value you're looking for

    // console.log(numbOfPages);

    /* select the ul element where you'd like the buttons to be displayed and assign it to the variable linkList then equate 
    the ul with innerHTML to an empty str ( '' ) so that any buttons or content that was displayed prior will be removed
     */

    const linkList = document.querySelector('ul.link-list');
    linkList.innerHTML = '';

    /*Create a for loop to create the correct number of buttons need to display all the data in the list parameter
    we need to create these buttons for i less than the number of pages we calculated before. 

    and for i < number of pages create the button which is the template literal store in a variable of your choosing in this case
    its button variable 
    
    once the button has been created we need to insert it into the document using insertAdjacentHTML and the beforeend operator to create and append each button to the linkList before the end of the linkList for every iteration of the for loop. and console.log button added to see whether or not the button was added if not seen on the page to now that there is a bug in your button variable or insertAdjacentHTML which need to be fixed to 
    display the button on the page
    */

    for (let i = 1; i <= numbOfPages; i++) {

        const button = `
                        <li>
                            <button type="button">${i}</button>
                        </li>
                        `;

        linkList.insertAdjacentHTML('beforeend', button);

        // console.log('button added');
    }

    // create a variable for the first button element using the querySelector method and assign its class name to active 
    // if there is a button present
    // log your button variable to see if the correct information is logged to the console 

    const firstButton = document.querySelector('.link-list button');
    if (firstButton) {
        firstButton.className = 'active';
    }

    linkList.addEventListener('click', (e) => {

        // create variables needed 
        // log the variables to the content to search for errors

        const allButtons = document.querySelectorAll('button');
        const firstElementActive = document.querySelector('.active');
        const ul = document.querySelector('.student-list')
        const studentItem = document.querySelectorAll('.student-item cf')

        // console.log(allButtons);
        // console.log(firstElementActive);

        /* Create if statement 
        the conditional should check if the event is a button that has been clicked to do this you have to use (e.target.tagName == '')
        inside the quotation marks you place the tag name of the button event you want to target and if you use the tagName method 

        inside the statement
        you need to remove the active class name for any of the button it was on prior and add it to the button you pressed 
        so it can display as active

        when the button pressed has a class name of active we should display the correct data eg ( if the button no(2) is 
        pressed it should display the second 9 student items to the page and so on for button no(3) button no(4) etc.).

        this can be achieved by using the .textContent of the button being pressed in this case the .textContent of the button 
        would be ( 1, 2, 3, 4, 5, etc.)
        */

        if (e.target.tagName === 'BUTTON') {

            firstElementActive.className = '';

            e.target.className = 'active';

            // console.log(e.target.textContent);

            showPage(list, e.target.textContent);
        }

    })
};

// create the search button on the page 

const header = document.querySelector('header');
const h2 = document.querySelector('h2');


//create button string with a template literal containing all necessary HTML elements

const buttonString = `
<label for = 'search' class = 'student-search'>
<span>Search by name</span>
<input id = 'search' placeholder = 'Search by name...'>
<button type = 'button' class = 'search'><img src = 'img/icn-search.svg' alt = 'Search icon'></button>
</label>
`;

// insert buttonString using the insertAdjacentHTML method with the afterend argument

h2.insertAdjacentHTML('afterend', buttonString);


//create variables need to be used as a reference to use in later functions

const ulStudentList = document.querySelector('.student-list');
const li = document.querySelectorAll('li.student-item cf');
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search');
const linkList = document.getElementsByClassName('link-list')

/* create a function to retrieve the data form the object that match/includes the text in the students first and last name 
give the function a parameter of list so it can be reused

create and empty array ( [] )

then create a for loop to iterate for the length of the list
    and create a variable to hold a template literal and make it upper-case so the search can be case insensitive

create a if statement to check if the template literal is included in the search inputs value(the input a user gives)
    and if the statement is true .push the list[i] to the matches array

return matches
*/

function getDataMatches(list) {

    let matches = [];

    for (let i = 0; i < list.length; i++) {

        let data_Items = list[i];

        let studentFullName = `${data_Items.name.first} ${data_Items.name.last}`.toUpperCase();
        if (studentFullName.includes(searchInput.value.toUpperCase())) {

            matches.push(data_Items);

        }
    }

    // console.log(matches)
    return matches

}

/* create a function to display the results that match with in the getDataMatches function to the page 

call the getDataMatches function and give it a variable 

create a if statement to check if the length of matches is equal to 0 and if it is then display no results found
    insert the template literal with the innerHTML property so it replaces the data displayed on the page already 
    and removes all pagination buttons from 

else
    if clear all elements
    call the show page function and pass it the parameters matches variable(array) and the page (1)
    as will as calling the pagination function and pass it the parameter matches variable(array) 

*/

function searchListForMatches(list) {

    const itemsPerPage = 9;
    const matches = getDataMatches(list);

    if (matches.length === 0) {

        ulStudentList.innerHTML = `<h1>No results found</h1>`

        // alert('No results Found');

        addPagination(0)

    } else {

        linkList.innerHTML = '';
        ulStudentList.innerHTML = '';
        li.innerHTML = '';

        showPage(matches, 1);
        addPagination(matches);

    }

}

/*create a Event Listener on a click event( e ) on the searchButton variable 
prevent the browsers default behaviour when typing in the search bar or paginating by adding ( e.preventDefault(); )

then call the searchListForMatches function and pass it the parameter data so that it can use the data array of objects

console.log button clicked to check if your button works and registers input/user data to the console
*/

searchButton.addEventListener('click', (e) => {

    e.preventDefault();
    searchListForMatches(data);
    console.log('Button Clicked!')

});

/* create a Event Listener on a click event( e ) on the searchInput variable
console.log the function call to insure that the correct amount of data is been logged on a key press if the value of the 
user enters into the search bar is included in the data array to view for any errors

call searchListForMatches function and pass it the parameter data so the searchListForMatches function uses the array of objects
for its data it will act on and display the values retrieved by the getDataMatches function on keyup event and display to the 
page the student data the the searchInput value is included in/conains
 */

searchInput.addEventListener('keyup', (e) => {

    console.log(getDataMatches(data));

    searchListForMatches(data);

});

// Call functions here
// when you're ready

addPagination(data);

showPage(data, 1);
showPage(data, 1);
showPage(data, 1);