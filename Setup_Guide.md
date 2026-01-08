# GitHub Actions and Jenkins Setup Guide (Layman Version)

## GitHub Actions Setup

### What is GitHub Actions?
GitHub Actions is a tool that helps you automate tasks like testing your code whenever you make changes. Think of it as a robot that checks your work.

### Step-by-Step Guide
1. **Create a Folder for Actions**:
   - Go to your repository on GitHub.
   - Create a folder named `.github/workflows`.

2. **Add a File for the Robot**:
   - Inside the `workflows` folder, create a file called `ci.yml`.

3. **Tell the Robot What to Do**:
   - Open the `ci.yml` file and add these instructions:
     ```yaml
     name: Check My Code

     on:
       push:
         branches:
           - main
       pull_request:
         branches:
           - main

     jobs:
       test-my-code:
         runs-on: ubuntu-latest

         steps:
         - name: Get My Code
           uses: actions/checkout@v3

         - name: Set Up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install Stuff
           run: npm install

         - name: Test My Code
           run: npm test
     ```

4. **Save and Push**:
   - Save the file and push it to GitHub.

5. **Check the Robot**:
   - Go to the **Actions** tab in your GitHub repository.
   - See if the robot is doing its job (green means good, red means something is wrong).

---

## Jenkins Setup

### What is Jenkins?
Jenkins is another tool that helps you automate tasks, but it runs on your computer or server. Think of it as a local helper.

### Step-by-Step Guide
1. **Install Jenkins**:
   - Go to [Jenkins.io](https://www.jenkins.io/) and download Jenkins.
   - Follow the instructions to install it on your computer.

2. **Create a New Job**:
   - Open Jenkins in your browser (usually at `http://localhost:8080`).
   - Click **New Item**.
   - Name your job (e.g., "My Project Pipeline").
   - Select **Pipeline** and click **OK**.

3. **Connect Jenkins to GitHub**:
   - Go to your job settings.
   - Under **Pipeline** → **Definition**, choose **Pipeline script from SCM**.
   - Add your GitHub repository URL.

4. **Add a Jenkinsfile to Your Code**:
   - In your repository, create a file called `Jenkinsfile`.
   - Add these instructions:
     ```groovy
     pipeline {
         agent any

         stages {
             stage('Get Code') {
                 steps {
                     checkout scm
                 }
             }

             stage('Install Stuff') {
                 steps {
                     sh 'npm install'
                 }
             }

             stage('Test My Code') {
                 steps {
                     sh 'npm test'
                 }
             }
         }
     }
     ```

5. **Run the Job**:
   - Save your job settings in Jenkins.
   - Click **Build Now** to run the job.

6. **Set Up Webhooks**:
   - Go to your GitHub repository settings.
   - Click **Webhooks** → **Add webhook**.
   - Add your Jenkins URL (e.g., `http://your-jenkins-url/github-webhook/`).
   - Now, Jenkins will run automatically whenever you push code to GitHub.

---

## Summary
This guide explains how to set up GitHub Actions and Jenkins in simple steps. Follow these instructions to automate testing and make your life easier!