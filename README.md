Despription:

The purpose of this project is to practice and work on the mastery of Node, and Angular. I wanted to figure out some of the steps in incorporating bots into apps. This app has one special type of user who acts as the GhostBot. Whenever ghost@ghost.com is logged in they will spam the message board with a random post every 30 seconds. Normal users can write comments, delete their own and also report comments as spam. 

To generate the ghostBot I run a recursive timeout function. The function first checks a conditon to see if the ghost is logged-in. After this it uses a helper function to generate the random string. A 30 second timeout which after completed will push the randomly generated string into the message board arrayand then recall the function causing the actions to continously repeat.



Setting up the Code
1.	Create a copy of the gitHub repository which will create a project folder called ghostBot
  •	run "Git clone https://github.com/tkutler/ghostBot" in terminal

2.	Make sure Angular and Node.js are installed

3.	Run "node server.js" in terminal

4.	 Go to https://localhost:8000

5.	There are pre-registered two dummy accounts user@user.com and toby@toby.com with passwords both set as “password”

6.	There is one account conditioned as the ghost user. When ghost@ghost.com is registered and logged in the account will create a random post to the message board every 30 seconds

