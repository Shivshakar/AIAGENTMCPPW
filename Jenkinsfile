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
                sh 'npx playwright test --reporter=junit'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**', allowEmptyArchive: true
            junit '**/test-results/results.xml'
        }
    }
}