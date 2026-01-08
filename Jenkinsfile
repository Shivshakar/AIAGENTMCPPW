// pipeline {
//     agent any

//     environment {
//         PLAYWRIGHT_BROWSERS_PATH = './playwright-cache'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 sh 'npm test'
//             }
//         }

//         stage('Build') {
//             steps {
//                 sh 'npm run build'
//             }
//         }
//     }

//     post {
//         always {
//             archiveArtifacts artifacts: '**/test-results/**', allowEmptyArchive: true
//             junit '**/test-results/results.xml'
//         }
//     }
// }