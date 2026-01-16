# 📊 Daily Finance Automation – Playwright (TypeScript)

## 📌 Project Overview

This project is an **end-to-end automation test suite** built using **Playwright with TypeScript** for the **Daily Finance** web application.

🔗 **Application URL:**  
https://dailyfinance.roadtocareer.net/

The automation suite validates **critical user journeys** including:
- User registration and email verification
- Login and item management
- Profile photo upload
- Password reset
- Re-login with updated credentials

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Allure Report
- Gmail Service (Email Assertion)

---

## ✅ Automated Test Scenarios

### 1️⃣ User Registration & Email Verification
- Register a new user using dynamic test data  
- Assert that the **“Congratulations” email** is successfully received  

### 2️⃣ Login & Item Management
- Login with the registered user  
- Add **2 random cost items**  
- Assert that **2 items are displayed** in the item list  

### 3️⃣ Profile Update
- Navigate to profile settings  
- Upload a profile photo  
- Assert profile image upload success  
- Logout from the application  

### 4️⃣ Password Reset Flow
- Click **“Reset it here”** from the login page  
- Reset password using the email reset link  
- Set a new password successfully  

### 5️⃣ Re-login with New Password
- Login using the new password  
- Assert successful redirection to the dashboard  

---

## ▶️ How to Run the Tests

### 1️⃣ Install Dependencies
npm install

### 2️⃣ Run All Tests
npx playwright test

## 📊 Allure Report
### Generate Allure Report
npx allure generate allure-results --clean -o allure-report

### Open Allure Report
npx allure open allure-report

## 📸 Reporting Features

* Screenshots on test failure

* Video recording on failure

* Trace files on retry

* Step-by-step execution details in Allure

## 📑 Test Artifacts

🎥 **Test Execution Recording:**
https://go.screenpal.com/watch/cOVDlrnrKXv

📊 **Allure Report:**
<img width="955" height="502" alt="image" src="https://github.com/user-attachments/assets/d762b125-09ab-40f3-92c6-8c5b2da0d193" />
<img width="1911" height="990" alt="image" src="https://github.com/user-attachments/assets/320e627f-6d62-46a2-b010-50b2beb5cba3" />

🧪 **Test Case Documentation:**
https://docs.google.com/spreadsheets/d/18aqNVyzEcpSXuHEaIxHiZixJWDf1anvB/edit?usp=sharing&ouid=110308499909751989760&rtpof=true&sd=true

## 🎯 Key Highlights

* Complete end-to-end user journey coverage

* Dynamic test data generation

* Automated email verification

* Clean and maintainable Page Object Model structure

* CI-friendly and scalable automation framework
