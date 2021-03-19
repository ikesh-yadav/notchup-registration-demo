# notchup-registration-demo
A web app to process registration of trial classes in NotchUp
# Live Demo:https://notchup-registration.herokuapp.com/

# Usage: 
1=>clone this git repository to your github
2=>Create a new app in heroku from the dashboard or commandline
3=>Use the "link to github repo" option of heroku (which is under the deploy tab of the heroku app dashboard) and select the repo created in step 1 then click "Deploy branch" to build and deploy your heroku app 
4=>configure the config variable of the app using heroku cli or the dashboard
You have to set 2 config variables:
1)  key:"UserEmail"
    value:your email id that you desire to send the registration conformation emails from.
2)  key:"UserPassword"
    value:password for the above mentioned acoount

Then the Web app can be used from the assigned url.


