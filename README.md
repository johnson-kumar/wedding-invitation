# 💍 Personalized Wedding Invitation System

A minimalist, mobile-first wedding invitation website featuring a **secure guest-list entry system**. 

## ✨ Key Features
* **Guest Authentication**: Access is restricted to mobile numbers provided in a pre-defined list.
* **Dynamic Personalization**: Automatically greets the guest by their name upon entry.
* **Minimalist Design**: Professional Indian-style aesthetic optimized for smartphones.
* **Atmospheric Audio**: Soft background music triggers upon successful login.
* **Zero-Cost Hosting**: Runs entirely on GitHub Pages with Google Sheets as a database.

---

## 🛠️ Tech Stack
* **Frontend**: HTML5, CSS3, Vanilla JavaScript
* **Animations**: [Animate.css](https://animate.style/)
* **Database**: Google Sheets (via CSV API)
* **Hosting**: GitHub Pages

---

## 🚀 Setup Instructions

### 1. Database Setup (Google Sheets)
1. Create a Google Sheet with two columns: `Mobile` and `Name`.
2. Go to **File > Share > Publish to web**.
3. Select **Comma-separated values (.csv)** from the dropdown.
4. Copy the link.

### 2. Configuration
1. Open `script.js` and paste your CSV link into the `csvUrl` variable.
2. Open `index.html` and replace the Google Maps `iframe src` with your venue location.

### 3. Deployment
1. Push your code to GitHub.
2. Navigate to **Settings > Pages**.
3. Set the Branch to `main` and folder to `/(root)`. Click **Save**.

---

## 📸 Preview
*A high-end, minimal invitation experience designed for the modern wedding.*

---
**Developed by [Johnson Kumar](https://github.com/johnson-kumar)**
*B.Sc. IT Student at BBAU Central University*
