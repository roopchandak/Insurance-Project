# Insurance-Project

Project Setup:

Step 1: Run the below command to clone the project: 

git clone https://github.com/roopchandak/Insurance-Project.git 

Step 2: cd Insurance-Project

Step 3: Install Node from https://nodejs.org/en/

To confirm that the installation was successful, please execute the following,

PS C:\Windows\system32> node -v

v19.8.1

===========

admin@test-MacBook-Pro ~ % node -v

v19.8.1

Step 4: npm install

Step 5: Run the following command to install angular CLI,

Mac/Linux : 
  sudo npm install -g @angular/cli@15.2.2  

Windows: 
  Open CommandPrompt/Powershell as Administrator and run “npm install -g @angular/cli@15.2.2“
  
  
Step 6: cd <ProjectLocation>/Insurance-Project/src/app/

       - Open "app-routing.module.ts" file
       - Append your name in the page_title (line no 15-24) and save it, pls refer to the below screenshot
       
<img width="760" alt="Screenshot 2023-03-18 at 9 27 22 AM" src="https://user-images.githubusercontent.com/20028970/226083763-a4066c69-ec61-49ed-b473-151641c195f0.png">


Step 7: Run command in terminal/command prompt: 
           1. cd <ProjectLocation>/Insurance-Project/
           2. ng serve 

Please make sure that you're running this command from the Project location (Insurance-Project/)
Ex:
admin@test-MacBook-Pro Insurance-Project % ng serve
Your global Angular CLI version (15.2.4) is greater than your local version (15.2.2). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".
✔ Browser application bundle generation complete.


Step 7: Open your browser and type: http://localhost:4200. And you should be able to access our INSURANCE Website.
![image](https://user-images.githubusercontent.com/20028970/226084098-9cd6b5ad-a4dd-42ae-b913-f80f27550434.png)


