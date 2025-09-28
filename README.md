# Public Health Surveillance - Hackathon Demo

## Overview

**Public Health Surveillance** is a privacy-focused decentralized application (dApp) that allows users to submit disease cases securely. The platform leverages **Lace Wallet** for secure user authentication and **simulated zero-knowledge (ZK) proofs** to validate submissions while keeping sensitive information private.

The goal is to demonstrate how blockchain and ZK proofs can enable **trustworthy, privacy-preserving public health reporting**.

---

## Features

- **Wallet Authentication**: Connect with **Lace Wallet** for secure, verifiable identity.  
- **Privacy-Focused Submission**: Location is anonymized; only disease type and proof are recorded.  
- **Zero-Knowledge Proofs**: Each submission is verified using simulated ZK proofs (planned for real Midnight integration).  
- **Local Storage & Backend**: Node.js backend stores submissions in a local JSON database.  
- **Simple Web Interface**: HTML/JS frontend for submitting cases and checking submission status.  

---

## Project Structure
public-health-dapp/
│
├─ frontend/
│ ├─ index.html # Main UI
│ ├─ style.css # Styling and visual effects
│ └─ app.js # Wallet integration & form submission logic
│
├─ contracts/
│ └─ outbreak.compact # Skeleton Compact contract (not deployed)
│
├─ proof-server/
│ └─ generateProof.js # Local server to simulate ZK proofs
│
├─ backend/
│ └─ server.js # Node.js Express backend for storing submissions
│
├─ cases.json # Local database file (auto-created)
├─ README.md # Project description
└─ package.json # Node.js dependencies




---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Wallet Integration:** Lace Wallet via Midnight API  
- **Backend:** Node.js, Express  
- **Proof Server:** Node.js simulation of Midnight ZK proofs  
- **Storage:** Local JSON database (`cases.json`)  
- **Other:** CORS enabled for frontend-backend communication  

---

## Prerequisites

- Node.js (v18+ recommended)  
- npm  
- Lace Wallet extension installed in your browser  
- Docker (optional, if you want to run backend/proof server in containers)  

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/public-health-surveillance.git
cd public-health-surveillance

2. Install Dependencies

Backend:

cd backend
npm install express body-parser cors


Proof Server:

cd ../proof-server
npm install express body-parser


Note: Frontend has no additional dependencies.

3. Run Servers

Step 1: Start Proof Server

cd proof-server
node generateProof.js


You should see:

Proof server running on port 6300


Step 2: Start Backend Server

cd ../backend
node server.js


You should see:

Backend running at http://localhost:5000

4. Open Frontend

Open frontend/index.html in a browser (preferably Chrome or Edge).

Click Connect Lace Wallet → approve connection in wallet popup.

Fill out the disease form and submit.

Observe the status messages and simulated proof validation.

5. Check Stored Submissions

Submissions are stored in cases.json.
You can also visit:

http://localhost:5000/cases


to view all submissions in JSON format.

Usage Notes

Location is always anonymized for privacy ("ANONYMIZED").

ZK proofs are currently simulated for hackathon demo purposes.

Wallet integration ensures only verified users can submit cases.

Future version will connect to a real Midnight proof server and a deployed Compact contract.

Privacy & Security

Users never reveal their exact location or personal data.

All submissions are verified via ZK proofs to ensure validity without compromising privacy.

Integration with Lace Wallet ensures secure authentication.

Future Work

Connect to a real Midnight ZK proof server.

Deploy the Compact contract to a testnet.

Add aggregated analytics and visualizations of anonymous disease trends.
