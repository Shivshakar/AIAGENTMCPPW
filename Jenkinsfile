pipeline {
    agent any

    environment {
        PLAYWRIGHT_BROWSERS_PATH = './playwright-cache'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx testng -config testng.xml'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-output/**', allowEmptyArchive: true
            publishHTML(target: [
                reportName: 'TestNG Report',
                reportDir: 'test-output',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])
        }
    }
}