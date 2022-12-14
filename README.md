# Description :

This projet allow to test the leCollectionnist platform web 

# link : https://www.lecollectionist.com/

### Configuration and prerequisites ###

 # Cypress #
#How to use project

# Step1

Install Node.js
Link to install node.js : https://nodejs.org/en/download/

How to verify if node and npm are 

    - npm --version
    - node --version 

# Step2

Install Visual Studio Code
Link to install isual Studio Code : https://code.visualstudio.com/download

# Step3

Clone repository form in your local workspace 

    - git clone https://github.com/Jebali02/LeCollectionnistTestCypress.git

# Step4

Open the folder in VS Code. And open your terminal under the worksapce 

# Step5 : This step is mondatory to be able to run tests

Open VS Code terminal and run this commands  : 

    - npm install --save-dev cypress@8.7.0 : Cypress version used : 8.7.0

    - npm install --save-dev cypress-cucumber-preprocessor 

    - npm install -D cypress-xpath

    - npm i -D cypress-recurse

    - npm install multiple-cucumber-html-reporter --save-dev 

# Step6 : How to run tests ?

Run this command using the terminal under the project workspace 

    - npx cypress run --spec cypress/integration/Features/*/*.feature --browser chrome

This command will run all features available under the folder /integration/Features

# Step7 : How generate report : Cucumber Report 

Under the workspace run this command  : 

    - node .\cucumber-html-report.js

Cumcumber Report exemple :

![Feature1](https://user-images.githubusercontent.com/116507752/207738272-0c65e678-992f-4e2d-8b79-c04765f3674d.PNG)

![Feature2](https://user-images.githubusercontent.com/116507752/207738285-e266faae-2c35-40bc-9d81-8d4077c2e108.PNG)

![feature3](https://user-images.githubusercontent.com/116507752/207738293-04cb3624-c77c-4c6d-9410-0f35b1f4bbdb.PNG)