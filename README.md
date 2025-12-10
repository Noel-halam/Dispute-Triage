# 🚀 HDFC Dispute Triage System

A simple web-based tool that automatically assigns **priority** and **SLA** (Service Level Agreement) for HDFC customer complaints based on:

- Complaint text  
- Transaction amount  
- High-risk customer flag  

This helps support teams respond faster and maintain SLA compliance.

---

## 🧠 How It Works

The system analyzes three inputs:

### ✔ 1. Complaint Text  
Detects keywords such as:  
- fraud  
- unauthorised / unauthorized  
- stolen  
- refund  
- failed  
- delay  

### ✔ 2. Amount  
Higher transaction amounts → higher priority.

### ✔ 3. Customer Risk  
If the customer is marked *high risk*, SLA becomes more strict.

---

## 🎯 Priority Rules

| Condition | Priority | SLA |
|----------|----------|-----|
| Amount ≥ 50,000 OR High-risk customer | High | 2 hours |
| Complaint contains fraud keywords | High | 2 hours |
| Amount ≥ 5,000 OR contains refund/delay words | Medium | 24 hours |
| Otherwise | Low | 72 hours |

The tool also displays the auto-calculated **deadline timestamp**.

---

## 🖥️ Demo Screenshot

*(Add a screenshot here if you want)*

---

## 📂 Project Structure

project-folder/
├── index.html
├── src/
│ ├── css/
│ │ └── styles.css
│ └── js/
│ └── app.js
├── package.json
└── README.md


---

## 🔧 Technologies Used
- HTML  
- CSS  
- JavaScript  
- Simple Rule-Based Logic  
- Browser Rendering (No backend required)

---

## 🏁 How to Run

1. Download or clone the repository:
2. Open `index.html` in any browser.
3. Enter complaint details.
4. Get instant triage result.

---

## 📄 License  
This project is for educational and demonstration purposes.
