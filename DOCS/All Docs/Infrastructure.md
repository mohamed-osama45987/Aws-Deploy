## Development process 

After we've completed our development, we commit the code to our git repo in order to track changes of project code and we use the circleci with track commits on the repo to start the pipeline process. 

&nbsp;

## CI/CD pipeline process

The steps of the pipeline contains the following :-

-  Instructions to setup the orbs ( Node Enviroment and AwsCli ) inside the circleci servers

- Instructions to install project dependancies on the circleci servers

- Instructions to test and build the project on the circleci servers

- Instructions to pass enviroment variables to our Elasticbean instance 

- Instructions to deploy our app from circleci servers to aws cloud

&nbsp;

Please refere to this file for the detailed instructions ( .circleci/config.yml  )

&nbsp;

## Deployment 

Different parts of the app are deployed to diffrent aws services by the following sequence

1. deploying the font-end angular app to the S3 bucket

1. deploying the nodejs app to ELasticBeans instance

&nbsp;

Please refer to the diagram of the project ourline is found in ( DOCS\Diagrams\Diagram as png.png ) file. this diagram help to give a greate understanding of the full infrastructure for the project 
