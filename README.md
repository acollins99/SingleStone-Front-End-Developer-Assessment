# SingleStone Front-End Developer Technical Assessment
This repository houses the codebase for the SingleStone Front-End Developer Technical Assessment. The assignment centers around creating a single page web application for a fictitious company known as Endless. The application is light in functionality but aims to showcase technical skills in relation to building front-end applications with Angular. 

As such, the application makes use of natively bundled Angular modules with a combination of plain Typescript, HTML, and CSS to achieve rendering and functionality within the application. No external libraries were/are used in this project.

## How to Build - Local
In order to build and run the application locally, the following dependencies must be present on the local machine:

 1. [NPM](https://www.npmjs.com/) 
 2. [Angular CLI](https://angular.io/cli)

With the dependencies in place, navigate to the Endless directory and use the following commands to build and serve the application. 

    npm install
    ng serve

Navigate to the address "localhost:4200" in a web browser to view the application. 

An optimized (bundling, minification, dead code elimination, tree-shaking) production build can be produced and packaged using following command.

    ng build --optimization

*Note:* If opting for using "ng build", use of a web server software such as NGINX is recommended to serve the application.

## How to Build - Docker 
A Dockerfile has been provided with the codebase to support deploying the application in a container. The only dependency for this build option is to have [Docker](https://www.docker.com/) installed on the build machine. 

Perform the following commands in the root directory of the codebase to build and run the container:

    docker build -t singlestone:latest .
    docker run -p 80:80 --name SingleStoneAssessment singlestone:latest

The Docker build will create a container with the dependencies in place to build the application with Angular CLI and serve the resulting application bundles via NGINX. To view the application, navigate to the DNS address or IP address of the server hosting the container via HTTP/port 80. 

## Unit Tests
Unit tests have been developed for the "how-it-works-component" to validate the logic for the metadata pulled from the API hosted for the evaluation. The unit tests consist of:

 1. Validating that the number of indices in the resulting array is correct
 2. Validate that the key pairs of each index of the resulting array are correct
 3. Validate that the values for each indices key pairs are correct per the data in the unit test spec file
 
Unit tests have been developed for the "api service" to validate the response type for the getStepsData() function and to validate the calls to the API endpoint. The unit tests consist of:

 1. Validating that the data returned from the function call is of the StepMetaData type
 2. Validate that the API endpoint is resolvable 

To run the unit test, use the "ng test" command in the Endless directory of the web application. 