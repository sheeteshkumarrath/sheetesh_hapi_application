#!/usr/bin/env groovy

pipeline {

    agent {
        //docker {
            //image 'node:carbon'
        docker.image 'node:carbon'{
            args '-u root'
          
        //}
   // }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'

            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
 //               sh 'test mocha'
 //               sh 'npm run test -- --grep mocha'
            }
        }
    }
}
    }
}
