Feature: To check the login

Scenario Outline: To check login functionality

Given The user in on login page 
When the user enters username and password
  |priti.mini07@gmail.com | Freecrm10 |
And user is entering data for <user>
Then the user is successfully logged into the application

Examples:
    |  username  |  password   |  user  |
    |  Priti     |  Password   |  user1 |
    |  Krishna   |  Password   |  user2 |