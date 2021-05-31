# Team-Profile-Generator
## Description
Application that generates a webpage that displays my team's basic info so I can quickly access their emails and GitHub profiles.
## Task
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Usage 
- npm install inquirer.
- npm install --save-dev jest.
- run node app.js.
- npm run test to run all four test.
## Screenshots

![image](https://user-images.githubusercontent.com/79381847/120122803-cde88e00-c170-11eb-8ec3-a68486b94a87.png)
![image](https://user-images.githubusercontent.com/79381847/120122822-e789d580-c170-11eb-8768-9e7f1f25e3ce.png)
![image](https://user-images.githubusercontent.com/79381847/120123012-3421e080-c172-11eb-9b50-02b2db1b95b3.png)


## Screen Recording
[Link to walkthrough](https://drive.google.com/file/d/17aiXW72lZ0DnUnyX7jjoARQwYyxaR8J-/view)

![Screen recording of application](./Assets/recording.gif)
