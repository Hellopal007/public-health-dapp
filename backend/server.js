// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//     // Enable CORS for frontend
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// // Storage file (optional, persists between server restarts)
// const dataFile = path.join(__dirname, 'submissions.json');

// // Load existing submissions or initialize
// let submissions = [];
// if (fs.existsSync(dataFile)) {
//     submissions = JSON.parse(fs.readFileSync(dataFile));
// }

// // Route: Submit a new disease case
// app.post('/submit', (req, res) => {
//     const { disease, location, timestamp, walletAddress } = req.body;

//     if (!disease || !location || !timestamp || !walletAddress) {
//         return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Simulate encryption (replace with real encryption or Compact later)
//     const encryptedData = Buffer.from(JSON.stringify({ disease, location, timestamp })).toString('base64');

//     // Simulate ZK proof (replace with real proof later)
//     const zkProof = {
//         valid: true,
//         message: `Simulated ZK proof for ${disease}`
//     };

//     // Save submission
//     const submission = { encryptedData, walletAddress, zkProof };
//     submissions.push(submission);

//     // Persist to file
//     fs.writeFileSync(dataFile, JSON.stringify(submissions, null, 2));

//     return res.json({
//         message: 'Case submitted successfully!',
//         zkProof
//     });
// });

// // Route: Get all submissions (for demo purposes)
// app.get('/submissions', (req, res) => {
//     return res.json(submissions);
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Backend server running on http://localhost:${PORT}`);
// });

// backend/server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const axios = require('axios');
// const fs = require('fs');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Simple local "database"
// const dbFile = './cases.json';
// if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, JSON.stringify([]));

// // Endpoint: submit new case
// app.post('/submit', async (req, res) => {
//   try {
//     const caseData = req.body;

//     // 1️⃣ Request ZK proof from Midnight proof server
//     const proofRes = await axios.post('http://localhost:6300/generate-proof', caseData);
//     const zkProof = proofRes.data;

//     // 2️⃣ Save case + proof to local file
//     const cases = JSON.parse(fs.readFileSync(dbFile));
//     cases.push({ ...caseData, zkProof });
//     fs.writeFileSync(dbFile, JSON.stringify(cases, null, 2));

//     // 3️⃣ Send response back to frontend
//     res.json({ success: true, zkProof });
//   } catch (err) {
//     console.error("Error in /submit:", err.message);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// // Endpoint: fetch all cases (for visualization later)
// app.get('/cases', (req, res) => {
//   const cases = JSON.parse(fs.readFileSync(dbFile));
//   res.json(cases);
// });

// app.listen(5000, () => {
//   console.log("Backend running at http://localhost:5000");
// });


// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // Simple local storage
// const dbFile = './cases.json';
// if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, JSON.stringify([]));

// // Endpoint: submit new case
// app.post('/submit', (req, res) => {
//     try {
//         const { disease, location, timestamp, walletAddress } = req.body;

//         if (!disease || !location || !timestamp || !walletAddress) {
//             return res.status(400).json({ success: false, error: 'Missing required fields' });
//         }

//         const zkProof = { valid: true, message: `Simulated ZK proof for ${disease}` };

//         const cases = JSON.parse(fs.readFileSync(dbFile));
//         cases.push({ disease, location, timestamp, walletAddress, zkProof });
//         fs.writeFileSync(dbFile, JSON.stringify(cases, null, 2));

//         res.json({ success: true, zkProof });
//     } catch (err) {
//         console.error("Error in /submit:", err.message);
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

// // Endpoint: fetch all cases
// app.get('/cases', (req, res) => {
//     const cases = JSON.parse(fs.readFileSync(dbFile));
//     res.json(cases);
// });

// app.listen(PORT, () => {
//     console.log(`Backend running at http://localhost:${PORT}`);
// });



// backend/server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fs = require('fs');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Simple local "database"
// const dbFile = './cases.json';
// if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, JSON.stringify([]));

// // Endpoint: submit new case
// app.post('/submit', async (req, res) => {
//   try {
//     const caseData = req.body;

//     if (!caseData.disease || !caseData.timestamp || !caseData.walletInfo) {
//       return res.status(400).json({ success: false, error: "Missing required fields" });
//     }

//     // 🔹 Simulate ZK proof (no external server needed)
//     const zkProof = { valid: true, message: `Simulated ZK proof for ${caseData.disease}` };

//     // Save case + proof to local file
//     const cases = JSON.parse(fs.readFileSync(dbFile));
//     cases.push({ ...caseData, zkProof });
//     fs.writeFileSync(dbFile, JSON.stringify(cases, null, 2));

//     res.json({ success: true, zkProof });
//   } catch (err) {
//     console.error("Error in /submit:", err.message);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// // Endpoint: fetch all cases
// app.get('/cases', (req, res) => {
//   const cases = JSON.parse(fs.readFileSync(dbFile));
//   res.json(cases);
// });

// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Local "database"
const dbFile = './cases.json';
if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, JSON.stringify([]));

// --- Submit new case ---
app.post('/submit', async (req, res) => {
  try {
    const caseData = req.body;

    if (!caseData.disease || !caseData.timestamp || !caseData.walletInfo) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // 🔹 Generate ZK proof via local proof server (or simulate)
    let zkProof;
    try {
      const proofRes = await fetch('http://localhost:6300/generate-proof', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseData)
      });
      zkProof = await proofRes.json();
    } catch {
      zkProof = { valid: true, message: `Simulated ZK proof for ${caseData.disease}` };
    }

    // Save case + proof
    const cases = JSON.parse(fs.readFileSync(dbFile));
    cases.push({ ...caseData, zkProof });
    fs.writeFileSync(dbFile, JSON.stringify(cases, null, 2));

    res.json({ success: true, zkProof });

  } catch (err) {
    console.error("Error in /submit:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// --- Fetch all cases ---
app.get('/cases', (req, res) => {
  const cases = JSON.parse(fs.readFileSync(dbFile));
  res.json(cases);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
