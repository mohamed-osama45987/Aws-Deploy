

## Project dependencies

1. Angular for the Frontend. 
2. Nodejs for the Backend.
3. PostgressSQL Database.

&nbsp;



## Project Infrastructure

This is a fullstack project hosted on Aws cloud and has a ci/cd pipline 

Our project uses the following AWS services to be hosted:-

1. Simple Storage Service (S3) bucket for the front-end
1. Elasticbeans (EB) service for hosting our node app back-end
1. Relational Database service (RDS) service for postger database


&nbsp;

The complete diagram to the project ourline is found in ( DOCS\Diagrams\Diagram as png.png ) file. this diagram help to give a greate understanding of the full infrastructure for the project 


&nbsp;






## CI/CD pipeline process

The steps of the pipeline contains the following :-

-  Instructions to setup the orbs ( Node Enviroment and AwsCli ) inside the circleci servers

- Instructions to install project dependancies on the circleci servers

- Instructions to test and build the project on the circleci servers

- Instructions to deploy our app from circleci servers to aws cloud

&nbsp;

Please refere to this file for the detailed instructions ( .circleci/config.yml  )

