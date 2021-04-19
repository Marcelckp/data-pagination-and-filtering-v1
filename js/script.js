/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

function searchButton() {

    const h2 = document.querySelector('h2');

    const buttonString = `
<label for = 'search' class = 'student-search'>
<span>Search by name</span>
<input id = 'search' placeholder = 'Search by name...'>
<button type = 'button'><img src = 'img/icn-search.svg' alt = 'Search icon'></button>
</label>`

    h2.insertAdjacentHTML('afterend', buttonString)

}

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

    console.log(list.length)
    console.log(ul)

    /*use a for loop to iterate over all the objects in the array of objects and use the value of i as an index point for 
    the object and to retrieve the data needed from each object 
    */

    for (let i = 0; i < list.length; i++) {

        // assign the data[i] index point to a variable so to keep your code neat and concise and for a reference usable later

        let dataString = data[i]

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

            console.log(studentItem)
            console.log(dataString.registered.date)

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

            console.log('Error')

        }

    }

}

/*
Create the `addPagination ` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {


    const itemsPerPage = 9;
    const numbOfPages = Math.ceil(list.length / itemsPerPage);

    console.log(numbOfPages);

    const linkList = document.querySelector('ul.link-list');
    linkList.innerHTML = '';

    for (let i = 1; i <= numbOfPages; i++) {

        const button = `
                        <li>
                            <button type="button">${i}</button>
                        </li>
                        `;

        linkList.insertAdjacentHTML('beforeend', button);

        console.log('button added');

    };

    const firstButton = document.querySelector('button');
    firstButton.className = 'active';
    console.log(firstButton);

    linkList.addEventListener('click', (e) => {

        /* the conditional checks if the event is a button that has been clicked to do this you have to use (e.target.tagName == '')
        inside the quotation marks you place the tag name of the button event you want to target and if you use the tagName method 
        */

        if (e.target.tagName == 'BUTTON') {

            const firstElementActive = document.querySelector('.active');

            console.log(firstElementActive);

            firstElementActive.className = '';

            e.target.className = 'active';

            showPage(list, numbOfPages)

        }

    });

}

// Call functions here
// when you're ready
addPagination(data);

searchButton();

console.log(showPage(data, 1));