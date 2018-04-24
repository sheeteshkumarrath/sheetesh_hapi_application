#!/usr/bin/env groovy



    agent {
        docker {
            image 'node:carbon'
            args '-u root'{
          
        //}
   // }
pipeline {
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
    }}
