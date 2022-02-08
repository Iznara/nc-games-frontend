# **Iznara Game Reviews Frontend**

## **About**
This React app was built as part of the Northcoders programming bootcamp.
It is a social board games rating and discussion website.

A live version of my app is hosted at:
- https://iznara.netlify.app/

This acts as a board games review app and is connected to RESTfulAPI built previously in the Northcoders bootcamp.
backend git repository:
- https://github.com/Iznara/be-nc-games-heroku
backend hosted at:
- https://ncgames-iznara.herokuapp.com/api

<br>

# Setup

## **Requirements** 
Please install the latest version of [Node](https://nodejs.org/en/download/) 
The following version was used for this project.  
- `Node.js` v16.11.0

_To view your currently installed version of node use the following command:_

        $ node -v

## **Initial Setup**
1. Clone the project using the command below:

        $ git clone https://github.com/Iznara/nc-games-frontend.git


2. Navigate to the cloned repository:

        $ cd nc-games-frontend

3. Install project dependencies:

        $ npm i

4. Run the app on your local network:

        $ npm start

## **Running The Server Locally** 
The port will listen on port 9090 if the connection is successful.

    $ npm start

***
<br>

# Routes

/                              Home / Login
/reviews                       All Reviews
/reviews/:review_id            Individual review with associated comments
/categories                    All categories
/categories/:category_name     All reviews of the specified category
/users                         All users
/users/:username               Individual user profile

***
<br>

# Project Specification 

### As a user, I should be able to...
    1. view a list of all reviews
    2. view a page for each category with a list of related reviews.
    3. view an individual review.
    4. view an individual review's comments.
    5. vote on an review and immediately see the change.
    6. post a new comment to an existing review (as a default logged in user. e.g. 'jessjelly').
    7. sort reviews by:
        ◦ created_at
        ◦ comment_count
        ◦ votes
    8. delete my own comments (as a default logged in user. e.g. 'jessjelly').
### Error-handling: As a user, I should...
    9. see an appropriate error if I go on a non-existent path / a path for a non-existent review / topic.
    10. not be allowed to post a comment if I have not filled in all of the form boxes.
### As a hiring partner, I should be able to...
    11. use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
    12. follow the readme instructions to easily run the project locally.
    13. find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
    14. find a link to the back-end repository of the project in the readme.
    15. find a link to the hosted version of the back-end project in the readme.
### If time, and if you have implemented it in your back-end API...
### As a user, I should be able to...
    16. vote on a comment and immediately see the change.
    17. navigate over pages of reviews (e.g. using pagination or infinite scroll).
    18. navigate over pages of comments (e.g. using pagination or infinite scroll).
    19. view a list of all reviews written by any specific user.
    20. post a new review to an existing topic.
    21. delete my own reviews.
