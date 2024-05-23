# UCLA Dance Hub

_UCLA Dance Hub for UCLA Students and Staff_

This web application aims to inform students about the location and time of events hosted by the dance teams at UCLA. There are pages to view videos and content of each of the dance teams we have at UCLA, as well as see a list of the members. We have implemented a system where users of the website can report future performances from the Dance teams which populates a schedule on the home page and an interactive map. Admins can also add and remove members from the organizations. 

Group Members: Jason Tran, Leo Zhang, Michael Co, Thomas Mcconnell, Jiaxi Li

## Technologies Used
Client: ```React.js```

Server: ```Node.js```

Database: ```Firebase```

## Getting Started

### Step 0. Clone the Repository
```bash
git clone https://github.com/JiaxiKibuGit/UCLA-Dance-Hub.git
cd UCLA-Dance-Hub/
```

### Step 1. Install Dependencies and Compile 

1. ```cd project```
2. ```npm install```
3. ```npm start```

### Step 2. Check Out in Your Brower
Navigate to ```http://localhost:3000/```. 

### Step 3. On the Home Page
Once you have logged in, you will be redirected to the home page. 

### There are several universal features for both users and admin.
1. You can view the upcoming schedule of events on the home page as well as the contact information of the teams and commonly asked questions. 

2. You can view the various dance orgs we have at UCLA, videos of their performances, a general rundown of the team, and a list of their members.

3. You can use the search function to look up any individual teams, events, or members.

4. You can view the map of the school for various times and locations of the upcoming events.

### There are also several distinct features for both users and the admin
### If you are logged in as a user......
1. You can view your profile by clicking on your name.

2. Follow an org to see only the events they have coming up on your profile page. 

3. Add an event by using the Host an Event tab.

### If you are logged in as an admin......
1. You can add and remove members from an organization
