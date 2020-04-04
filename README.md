# Project_3_Dinner_Party
Group Project 3

This application is used as a location for chefs, home cooks, or just people that like try new food.  They can create an account and then post events, as they will show up in the events feed.  Or, they can log in and search through all of the events to find one that they would like to try.  It is a great way for people to get together and connect over food.

This application is made with Sequelize, MySQL, Node, Express, JS, React, CSS with Bootstrap, and HTML. It follows the MVC design pattern, using Node and Sequelize to query and route data within the app.

1.  The applicaation takes you to the sign in page, where you can sign in if you have an existing account, or create an account if you are new to the site.

2.  After logging into the application, the user is able to create an event by entering in the particular criteria needed (e.g., event name, menu, location, etc.).

3.  The user is able to navigate to the feed page, where all of the events are shown in real-time.  If the user sees an event they would like to attend, they can select how many peple they will be bringing and click the RSVP button to sign up.

4.  The user is also able to navigate to the dashboard page, where they can keep track of and see all of the different events they have either created, or RSVPd to


#### DB Setup

 * Database - `dinnerparty`
   * Table - `events`
     * Fields:   
        **id**: INT NOT NULL PRIMARY KEY AUTO_INCREMENT
        **event_name**: VARCHAR(255) NOT NULL
        **event_date**: DATE NOT NULL
        **event_seats**: INT NULL
        **event_address**: VARCHAR(255) NULL
        **event_city**: VARCHAR(255) NOT NULL
        **event_state**: VARCHAR(255) NOT NULL
        **event_zip**: INT NOT NULL
        **app**: VARCHAR(255) NOT NULL
        **app_description**: VARCHAR(255) NOT NULL
        **entree**: VARCHAR(255) NOT NULL
        **entree_description**: VARCHAR(255) NOT NULL
        **dessert**: VARCHAR(255) NOT NULL
        **dessert_description**: VARCHAR(255) NOT NULL
        **createdAt**: DATETIME NOT NULL
        **updatedAt**: DATETIME NOT NULL
        **UserId (FK)**: INT NOT NULL

    * Table - `rsvps`
     * Fields:   
        **id**: INT NOT NULL PRIMARY KEY AUTO_INCREMENT
        **rsvp_seats**: INT
        **createdAt**: DATETIME NOT NULL
        **updatedAt**: DATETIME NOT NULL
        **EventId (FK)**: INT NOT NULL
        **UserId (FK)**: INT NOT NULL

    * Table - `users`
     * Fields:   
        **id**: INT NOT NULL PRIMARY KEY AUTO_INCREMENT
        **username**: VARCHAR(255) NOT NULL
        **password**: VARCHAR(255) NOT NULL
        **createdAt**: DATETIME NOT NULL
        **updatedAt**: DATETIME NOT NULL



#### Pictures of Application

<br><br>
<img src='/client/Pics/dinnerparty1.JPG'>
<br><br>
<img src='./client/Pics/dinnerparty2.JPG'>
<br><br>
<img src='./client/Pics/dinnerparty3.JPG'>
<br><br>
<img src='./client/Pics/dinnerparty4.JPG'>
<br><br>
<img src='./client/Pics/dinnerparty6.JPG'>
<br><br>
<img src='./client/Pics/dinnerparty7.JPG'>