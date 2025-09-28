// let wallet;

// document.getElementById('connectWallet').onclick = async () => {
//     // Connect to Lace Wallet
//     wallet = await window.laceWallet.enable();
//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected: ${wallet.address}`;
// };

// document.getElementById('submitCase').onclick = async () => {
//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // do not reveal real location
//         timestamp
//     };

//     // 1️⃣ Generate ZK proof using local proof server
//     const proof = await fetch('http://localhost:6300/generate-proof', {
//         method: 'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify(caseData)
//     }).then(res => res.json());

//     // 2️⃣ Send encrypted data + proof to Compact contract on Midnight testnet
//     // Placeholder: demo only
//     console.log("Encrypted case submission:", caseData, "Proof:", proof);

//     document.getElementById('status').innerText = 
//       `Case submitted: ${caseData.disease}, proof verified!`;
// };

// document.getElementById('submitCase').onclick = async () => {
//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // privacy
//         timestamp,
//         walletAddress: wallet.address
//     };

//     // Send to backend
//     const response = await fetch('http://localhost:5000/submit', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     document.getElementById('status').innerText = 
//         `Case submitted: ${disease}, ZK proof valid: ${result.zkProof.valid}`;
// };



// let wallet;

// document.getElementById('connectWallet').onclick = async () => {
//     // Connect to Lace Wallet
//     wallet = await window.laceWallet.enable();
//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected: ${wallet.address}`;
// };

// document.getElementById('submitCase').onclick = async () => {
//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // privacy
//         timestamp,
//         walletAddress: wallet.address
//     };

//     try {
//         // Send to backend
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(caseData)
//         });

//         if (!response.ok) throw new Error("Network response was not ok");

//         const result = await response.json();
//         document.getElementById('status').innerText = 
//             `Case submitted: ${disease}, ZK proof valid: ${result.zkProof.valid}`;

//     } catch (error) {
//         console.error("Submission error:", error);
//         document.getElementById('status').innerText = `Error submitting case: ${error.message}`;
//     }
// };
// let wallet;

// // Connect Lace Wallet
// document.getElementById('connectWallet').onclick = async () => {
//     if (!window.laceWallet) {
//         alert("Lace Wallet not detected! Make sure Chrome has the extension enabled and you are serving the page over HTTP.");
//         return;
//     }

//     try {
//         wallet = await window.laceWallet.enable();
//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText = `Wallet connected: ${wallet.address}`;
//         console.log("Wallet connected:", wallet.address);
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Wallet extension.");
//     }
// };

// // Submit disease case
// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Wallet not connected!");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // privacy
//         timestamp,
//         walletAddress: wallet.address
//     };

//     try {
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(caseData)
//         });

//         if (!response.ok) throw new Error("Network response not ok");

//         const result = await response.json();
//         document.getElementById('status').innerText = 
//             `Case submitted: ${disease}, ZK proof valid: ${result.zkProof.valid}`;

//         console.log("Submission result:", result);

//     } catch (error) {
//         console.error("Submission error:", error);
//         document.getElementById('status').innerText = `Error submitting case: ${error.message}`;
//     }
// };



// let wallet;

// // Connect Lace Wallet
// document.getElementById('connectWallet').onclick = async () => {
//     if (!window.midnight) {
//         alert("Lace Midnight Wallet not detected! Make sure the extension is enabled.");
//         return;
//     }

//     try {
//         // Request access
//         wallet = await window.midnight.enable();
//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText = `Wallet connected`;
//         console.log("Wallet connected:", wallet);
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension.");
//     }
// };

// // Submit disease case
// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Wallet not connected!");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // keep privacy
//         timestamp,
//         walletAddress: "0xDEMO" // placeholder until we query wallet properly
//     };

//     try {
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(caseData)
//         });

//         if (!response.ok) throw new Error("Network response not ok");

//         const result = await response.json();
//         document.getElementById('status').innerText =
//             `Case submitted: ${disease}, ZK proof valid: ${result.zkProof.valid}`;

//         console.log("Submission result:", result);

//     } catch (error) {
//         console.error("Submission error:", error);
//         document.getElementById('status').innerText = `Error submitting case: ${error.message}`;
//     }
// };

// let wallet;

// document.getElementById('connectWallet').onclick = async () => {
//     try {
//         // Access Lace Midnight through mnLace
//         const api = window.midnight?.mnLace;
//         if (!api) {
//             alert("Lace Midnight not detected! Make sure extension is enabled.");
//             return;
//         }

//         // Request permission to connect
//         wallet = await api.enable();

//         // You can inspect available methods from the wallet object
//         console.log("Wallet connected:", wallet);

//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText =
//             `Wallet connected (via Lace Midnight) ✅`;
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension.");
//     }
// };

// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Please connect Lace Midnight first.");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // keep privacy
//         timestamp,
//         // Example: you can fetch the address or public key from wallet
//         walletInfo: await wallet.getUsedAddresses?.() || "address-hidden"
//     };

//     // Send to your backend
//     const response = await fetch('http://localhost:5000/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     document.getElementById('status').innerText =
//         `Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;
// };
// let wallet;

// // Connect wallet
// document.getElementById('connectWallet').onclick = async () => {
//     try {
//         // Enable Lace Midnight wallet
//         wallet = await window.midnight.mnLace.enable();
//         const addrs = await wallet.getUsedAddresses();
//         const firstAddr = addrs[0];

//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText =
//             `Wallet connected: ${firstAddr}`;
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension");
//     }
// };

// // Submit case
// document.getElementById('submitCase').onclick = async () => {
//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED",  // keep private
//         timestamp,
//         walletAddress: (await wallet.getUsedAddresses())[0]
//     };

//     try {
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(caseData)
//         });

//         const result = await response.json();

//         if (result.success) {
//             document.getElementById('status').innerText =
//                 `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//         } else {
//             document.getElementById('status').innerText =
//                 `❌ Failed: ${result.error}`;
//         }
//     } catch (err) {
//         console.error("Error submitting case:", err);
//         document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//     }
// };

// app.js

// let wallet; // Global wallet variable

// // Connect to Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     // Enable wallet
//     wallet = await window.midnight.mnLace.enable();

//     // Get wallet address safely
//     let firstAddr;
//     if (wallet.getCurrentAddress) {
//       firstAddr = await wallet.getCurrentAddress();
//     } else if (wallet.api?.getCurrentAddress) {
//       firstAddr = await wallet.api.getCurrentAddress();
//     } else {
//       console.error("No method to get wallet address found:", wallet);
//       alert("Cannot read wallet address. Check Midnight API version.");
//       return;
//     }

//     // Show form and status
//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected: ${firstAddr}`;

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   if (!wallet) {
//     alert("Connect your wallet first!");
//     return;
//   }

//   // Build case data with privacy
//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // Protect user privacy
//     timestamp,
//     walletAddress: await wallet.getCurrentAddress?.() || (wallet.api?.getCurrentAddress && await wallet.api.getCurrentAddress())
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     // 🔹 Placeholder: Send to backend
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Optional: auto-detect wallet status
// window.addEventListener('load', async () => {
//   if (window.midnight?.mnLace?.isEnabled) {
//     const enabled = await window.midnight.mnLace.isEnabled();
//     if (enabled) {
//       console.log("Wallet is already enabled");
//     }
//   }
// });



// let wallet;

// document.getElementById('connectWallet').onclick = async () => {
//     try {
//         const api = window.midnight?.mnLace;
//         if (!api) {
//             alert("Lace Midnight not detected! Make sure extension is enabled.");
//             return;
//         }

//         // Request permission
//         wallet = await api.enable();

//         console.log("Wallet connected:", wallet); // Inspect wallet object

//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText =
//             `Wallet connected ✅`;

//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension.");
//     }
// };

// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Please connect Lace Midnight first.");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED",
//         timestamp,
//         walletInfo: wallet // send wallet object for now
//     };

//     try {
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(caseData)
//         });

//         const result = await response.json();
//         document.getElementById('status').innerText =
//             result.success
//                 ? `✅ Case submitted: ${disease}`
//                 : `❌ Failed: ${result.error}`;

//     } catch (err) {
//         console.error("Error submitting case:", err);
//         document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//     }
// };

// let wallet; // Global wallet variable

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure the extension is enabled.");
//       return;
//     }

//     // Request access — this triggers the Lace popup
//     wallet = await api.enable();

//     // Get wallet address safely
//     let walletAddress;
//     if (wallet.getCurrentAddress) {
//       walletAddress = await wallet.getCurrentAddress();
//     } else if (wallet.api?.getCurrentAddress) {
//       walletAddress = await wallet.api.getCurrentAddress();
//     } else {
//       console.error("Cannot read wallet address:", wallet);
//       alert("Cannot read wallet address. Check Midnight API version.");
//       return;
//     }

//     // Show form and update status
//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected ✅: ${walletAddress}`;

//     console.log("Wallet connected:", walletAddress);

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   if (!wallet) {
//     alert("Please connect your wallet first!");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   // Safely fetch wallet address again (optional)
//   let walletAddress = await wallet.getCurrentAddress?.() || 
//                       (wallet.api?.getCurrentAddress && await wallet.api.getCurrentAddress());

//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // keep privacy
//     timestamp,
//     walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     if (!response.ok) throw new Error(`HTTP ${response.status}`);

//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Submission failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Optional: auto-detect if wallet is already enabled
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet already enabled");
//   }
// });

// let wallet; // Global wallet variable

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure the extension is enabled.");
//       return;
//     }

//     // Request permission — triggers popup
//     wallet = await api.enable();

//     // Try to get wallet address safely
//     let walletAddress = 
//       (wallet.getCurrentAddress && await wallet.getCurrentAddress()) ||
//       (wallet.api?.getCurrentAddress && await wallet.api.getCurrentAddress()) ||
//       (wallet.getUsedAddresses && (await wallet.getUsedAddresses())[0]) ||
//       "address-unavailable";

//     if (walletAddress === "address-unavailable") {
//       alert("Cannot read wallet address. Check Midnight API version.");
//     } else {
//       document.getElementById('submissionForm').style.display = 'block';
//       document.getElementById('status').innerText = `Wallet connected ✅: ${walletAddress}`;
//       console.log("Wallet connected:", walletAddress);
//     }

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   if (!wallet) {
//     alert("Please connect your wallet first!");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   // Fetch wallet address again safely
//   let walletAddress = 
//       (wallet.getCurrentAddress && await wallet.getCurrentAddress()) ||
//       (wallet.api?.getCurrentAddress && await wallet.api.getCurrentAddress()) ||
//       (wallet.getUsedAddresses && (await wallet.getUsedAddresses())[0]) ||
//       "address-unavailable";

//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // privacy
//     timestamp,
//     walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     if (!response.ok) throw new Error(`HTTP ${response.status}`);

//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Submission failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Optional: auto-detect if wallet is already enabled
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet already enabled");
//   }
// });


// let wallet;

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Enable the extension.");
//       return;
//     }

//     // Request access
//     await api.enable();

//     // New way: fetch wallet info
//     const walletInfo = await api.getWallet?.() || await api.wallet?.();

//     if (!walletInfo || !walletInfo.address) {
//       alert("Cannot read wallet address. Check Midnight API version.");
//       return;
//     }

//     wallet = api; // store api for submitting

//     const walletAddress = walletInfo.address;
//     console.log("Wallet connected:", walletAddress);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected ✅: ${walletAddress}`;

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   if (!wallet) {
//     alert("Please connect your wallet first!");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   const walletInfo = await wallet.getWallet?.() || await wallet.wallet?.();
//   const walletAddress = walletInfo?.address || "address-unavailable";

//   const caseData = {
//     disease,
//     location: "ANONYMIZED",
//     timestamp,
//     walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     if (!response.ok) throw new Error(`HTTP ${response.status}`);
//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Submission failed: ${result.error}`;
//     }
//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Optional: auto-detect if wallet is already enabled
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api?.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet already enabled");
//   }
// });


// let wallet;

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Enable the extension.");
//       return;
//     }

//     // Enable wallet
//     wallet = await api.enable();

//     // Grab the first address safely
//     let walletAddress = wallet?.addresses?.[0]?.bech32 || wallet?.addresses?.[0] || "address-unavailable";

//     if (!walletAddress || walletAddress === "address-unavailable") {
//       alert("Cannot read wallet address. Check Midnight API version.");
//       return;
//     }

//     console.log("Wallet connected:", walletAddress);
//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected ✅: ${walletAddress}`;

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   if (!wallet) {
//     alert("Please connect your wallet first!");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   let walletAddress = wallet?.addresses?.[0]?.bech32 || wallet?.addresses?.[0] || "address-unavailable";

//   const caseData = {
//     disease,
//     location: "ANONYMIZED",
//     timestamp,
//     walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     if (!response.ok) throw new Error(`HTTP ${response.status}`);
//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Submission failed: ${result.error}`;
//     }
//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Auto-detect wallet status
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api?.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet already enabled");
//   }
// });

// let wallet;
// let walletAddress;

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Enable the extension.");
//       return;
//     }

//     // Enable wallet
//     wallet = await api.enable();

//     // Try multiple ways to get wallet address
//     if (wallet?.getCurrentAddress) {
//       walletAddress = await wallet.getCurrentAddress();
//     } else if (wallet?.addresses?.[0]?.bech32) {
//       walletAddress = wallet.addresses[0].bech32;
//     } else if (wallet?.addresses?.[0]) {
//       walletAddress = wallet.addresses[0];
//     } else if (wallet?.api?.getCurrentAddress) {
//       walletAddress = await wallet.api.getCurrentAddress();
//     } else {
//       console.error("Cannot read wallet address:", wallet);
//       alert("Cannot read wallet address. Check Midnight API version.");
//       return;
//     }

//     console.log("Wallet connected:", walletAddress);
//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected ✅: ${walletAddress}`;

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   if (!wallet || !walletAddress) {
//     alert("Please connect your wallet first!");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   const caseData = {
//     disease,
//     location: "ANONYMIZED",
//     timestamp,
//     walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     if (!response.ok) throw new Error(`HTTP ${response.status}`);
//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Submission failed: ${result.error}`;
//     }
//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Auto-detect wallet status
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api?.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet already enabled");
//   }
// });
// let walletAddress;

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Enable the extension.");
//       return;
//     }

//     // Request access to wallet
//     await api.enable();  // Only enables the DApp

//     // Fetch addresses from the API itself
//     const addresses = await api.getUsedAddresses?.();
//     if (!addresses || addresses.length === 0) {
//       console.error("No wallet addresses returned:", addresses);
//       alert("Cannot read wallet address. Check Midnight API version.");
//       return;
//     }

//     walletAddress = addresses[0];  // Use first address
//     console.log("Wallet connected:", walletAddress);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected ✅: ${walletAddress}`;

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//   if (!walletAddress) {
//     alert("Please connect your wallet first!");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const location = document.getElementById('locationInput').value;
//   const timestamp = new Date().toISOString();

//   const caseData = {
//     disease,
//     location: "ANONYMIZED",
//     timestamp,
//     walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     if (!response.ok) throw new Error(`HTTP ${response.status}`);
//     const result = await response.json();

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, Proof: ${JSON.stringify(result.zkProof)}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Submission failed: ${result.error}`;
//     }
//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };

// // Auto-detect wallet status
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api?.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet already enabled");
//   }
// });


// let wallet;

// // Connect Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//     try {
//         // Access Lace Midnight through mnLace
//         const api = window.midnight?.mnLace;
//         if (!api) {
//             alert("Lace Midnight not detected! Make sure extension is enabled.");
//             return;
//         }

//         // Request permission to connect — this triggers the popup
//         wallet = await api.enable();

//         // Optional: Try to get wallet address if available
//         let walletAddress = "placeholder-address"; // Default placeholder
//         if (wallet.getUsedAddresses) {
//             const addrs = await wallet.getUsedAddresses();
//             walletAddress = addrs[0] || walletAddress;
//         } else if (wallet.getCurrentAddress) {
//             walletAddress = await wallet.getCurrentAddress() || walletAddress;
//         } else if (wallet.addresses && wallet.addresses[0]) {
//             walletAddress = wallet.addresses[0];
//         }

//         console.log("Wallet connected:", wallet, "Address:", walletAddress);

//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText =
//             `Wallet connected (via Lace Midnight) ✅ - Address: ${walletAddress}`;
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension.");
//     }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Please connect Lace Midnight first.");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     // Optional: Get wallet address again if available
//     let walletAddress = "placeholder-address";
//     if (wallet.getUsedAddresses) {
//         const addrs = await wallet.getUsedAddresses();
//         walletAddress = addrs[0] || walletAddress;
//     } else if (wallet.getCurrentAddress) {
//         walletAddress = await wallet.getCurrentAddress() || walletAddress;
//     } else if (wallet.addresses && wallet.addresses[0]) {
//         walletAddress = wallet.addresses[0];
//     }

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // keep privacy
//         timestamp,
//         walletAddress
//     };

//     document.getElementById('status').innerText = "Submitting case...";

//     try {
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(caseData)
//         });

//         if (!response.ok) throw new Error(`HTTP ${response.status}`);

//         const result = await response.json();
//         console.log("Server response:", result);

//         document.getElementById('status').innerText =
//             `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;
//     } catch (err) {
//         console.error("Error submitting case:", err);
//         document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//     }
// };


// ====================below code is working
// let wallet;

// document.getElementById('connectWallet').onclick = async () => {
//     try {
//         // Access Lace Midnight through mnLace
//         const api = window.midnight?.mnLace;
//         if (!api) {
//             alert("Lace Midnight not detected! Make sure extension is enabled.");
//             return;
//         }

//         // Request permission to connect
//         wallet = await api.enable();

//         // You can inspect available methods from the wallet object
//         console.log("Wallet connected:", wallet);

//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText =
//             `Wallet connected (via Lace Midnight) ✅`;
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension.");
//     }
// };

// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Please connect Lace Midnight first.");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     const caseData = {
//         disease,
//         location: "ANONYMIZED", // keep privacy
//         timestamp,
//         // Example: you can fetch the address or public key from wallet
//         walletInfo: await wallet.getUsedAddresses?.() || "address-hidden"
//     };

//     // Send to your backend
//     const response = await fetch('http://localhost:5000/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     document.getElementById('status').innerText =
//         `Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;
// };
// ================= above code is wr=orking 


// let wallet;

// // Connect wallet
// document.getElementById('connectWallet').onclick = async () => {
//     try {
//         const api = window.midnight?.mnLace;
//         if (!api) {
//             alert("Lace Midnight not detected! Make sure extension is enabled.");
//             return;
//         }

//         wallet = await api.enable();
//         console.log("Wallet connected:", wallet);

//         document.getElementById('submissionForm').style.display = 'block';
//         document.getElementById('status').innerText = `Wallet connected (via Lace Midnight) ✅`;
//     } catch (err) {
//         console.error("Error connecting wallet:", err);
//         alert("Failed to connect wallet. Check Lace Midnight extension.");
//     }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async () => {
//     if (!wallet) {
//         alert("Please connect Lace Midnight first.");
//         return;
//     }

//     const disease = document.getElementById('diseaseSelect').value;
//     const location = document.getElementById('locationInput').value;
//     const timestamp = new Date().toISOString();

//     // TEMPORARY: use a placeholder address to avoid Midnight API issues
//     const walletAddress = "addr_test_demo_12345";

//     const caseData = { disease, location: "ANONYMIZED", timestamp, walletAddress };

//     document.getElementById('status').innerText = "Submitting case...";

//     try {
//         const response = await fetch('http://localhost:5000/submit', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(caseData)
//         });

//         const result = await response.json();
//         console.log("Server response:", result);

//         if (result.success) {
//             document.getElementById('status').innerText =
//                 `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof.valid}`;
//         } else {
//             document.getElementById('status').innerText =
//                 `❌ Failed: ${result.error}`;
//         }
//     } catch (err) {
//         console.error("Error submitting case:", err);
//         document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//     }
// };

// frontend/app.js
// let wallet;

// // Connect to Lace Midnight wallet
// document.getElementById('connectWallet').onclick = async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure extension is enabled.");
//       return;
//     }

//     wallet = await api.enable();

//     console.log("Wallet connected:", wallet);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = `Wallet connected (via Lace Midnight) ✅`;
//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// };

// // Submit a disease case
// document.getElementById('submitCase').onclick = async (event) => {
//   // Prevent form from reloading the page
//   event.preventDefault();

//   if (!wallet) {
//     alert("Please connect Lace Midnight first.");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const timestamp = new Date().toISOString();

//   const caseData = {
//     disease,
//     location: "ANONYMIZED",
//     timestamp,
//     walletInfo: wallet.getCurrentAddress ? await wallet.getCurrentAddress() : "address-hidden"
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Failed: ${result.error}`;
//     }
//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// };


// let wallet; // global wallet variable

// // Connect to Lace Midnight wallet
// document.getElementById('connectWallet').addEventListener('click', async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure extension is enabled.");
//       return;
//     }

//     // Request wallet access
//     wallet = await api.enable();
//     console.log("Wallet connected:", wallet);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText = "Wallet connected (via Lace Midnight) ✅";

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// });

// // Submit disease case
// document.getElementById('submitCase').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent form refresh

//   if (!wallet) {
//     alert("Please connect Lace Midnight first.");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const timestamp = new Date().toISOString();

//   // Safely get wallet address or fallback
//   let walletAddress = "address-hidden";
//   if (wallet.getCurrentAddress) {
//     walletAddress = await wallet.getCurrentAddress();
//   } else if (wallet.api?.getCurrentAddress) {
//     walletAddress = await wallet.api.getCurrentAddress();
//   }

//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // keep privacy
//     timestamp,
//     walletInfo: walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// });

// // Optional: detect already enabled wallet on page load
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet is already enabled");
//   }
// });


// let wallet; // Global wallet variable

// // --- Connect Lace Midnight Wallet ---
// document.getElementById('connectWallet').addEventListener('click', async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure the extension is enabled.");
//       return;
//     }

//     wallet = await api.enable(); // Request user approval
//     console.log("Wallet connected:", wallet);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText =
//       "Wallet connected (via Lace Midnight) ✅";

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// });

// // --- Submit Disease Case ---
// document.getElementById('submitCase').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent page refresh

//   if (!wallet) {
//     alert("Please connect Lace Midnight first.");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const timestamp = new Date().toISOString();

//   // Safely get wallet address
//   let walletAddress = "address-hidden";
//   if (wallet.getCurrentAddress) {
//     walletAddress = await wallet.getCurrentAddress();
//   } else if (wallet.api?.getCurrentAddress) {
//     walletAddress = await wallet.api.getCurrentAddress();
//   }

//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // Keep private
//     timestamp,
//     walletInfo: walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;
//     } else {
//       document.getElementById('status').innerText =
//         `❌ Failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// });

// // Optional: detect already enabled wallet on page load
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet is already enabled");
//   }
// });


// let wallet; // Global wallet variable

// // --- Connect Lace Midnight Wallet ---
// document.getElementById('connectWallet').addEventListener('click', async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure the extension is enabled.");
//       return;
//     }

//     wallet = await api.enable(); // Request user approval
//     console.log("Wallet connected:", wallet);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText =
//       "Wallet connected (via Lace Midnight) ✅";

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// });

// // --- Submit Disease Case ---
// document.getElementById('submitCase').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent page refresh

//   if (!wallet) {
//     alert("Please connect Lace Midnight first.");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const timestamp = new Date().toISOString();

//   // Safely get wallet address
//   let walletAddress = "address-hidden";
//   if (wallet.getCurrentAddress) {
//     walletAddress = await wallet.getCurrentAddress();
//   } else if (wallet.api?.getCurrentAddress) {
//     walletAddress = await wallet.api.getCurrentAddress();
//   }

//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // Keep private
//     timestamp,
//     walletInfo: walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;

//       // --- Create ZK Proof Badge ---
//       const badge = document.createElement('div');
//       badge.style.border = '2px solid green';
//       badge.style.padding = '10px';
//       badge.style.marginTop = '10px';
//       badge.style.background = '#e0ffe0';
//       badge.style.fontFamily = 'monospace';
//       badge.style.whiteSpace = 'pre-line';
//       badge.id = 'proofBadge';
//       badge.innerText = `ZK Proof Badge:\nDisease: ${disease}\nProof Status: VALID`;

//       // Remove old badge if exists
//       const oldBadge = document.getElementById('proofBadge');
//       if (oldBadge) oldBadge.remove();

//       // Append badge to submission form
//       document.getElementById('submissionForm').appendChild(badge);

//     } else {
//       document.getElementById('status').innerText =
//         `❌ Failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// });

// // Optional: detect already enabled wallet on page load
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet is already enabled");
//   }
// });


// let wallet; // Global wallet variable

// // --- Connect Lace Midnight Wallet ---
// document.getElementById('connectWallet').addEventListener('click', async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure extension is enabled.");
//       return;
//     }

//     wallet = await api.enable(); // Request user approval
//     console.log("Wallet connected:", wallet);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText =
//       "Wallet connected (via Lace Midnight) ✅";

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// });

// // --- Submit Disease Case ---
// document.getElementById('submitCase').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent page refresh

//   if (!wallet) {
//     alert("Please connect Lace Midnight first.");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const timestamp = new Date().toISOString();

//   // Safely get wallet address
//   let walletAddress = "address-hidden";
//   if (wallet.getCurrentAddress) {
//     walletAddress = await wallet.getCurrentAddress();
//   } else if (wallet.api?.getCurrentAddress) {
//     walletAddress = await wallet.api.getCurrentAddress();
//   }

//   const caseData = {
//     disease,
//     location: "ANONYMIZED", // Keep private
//     timestamp,
//     walletInfo: walletAddress
//   };

//   document.getElementById('status').innerText = "Submitting case...";

//   try {
//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     if (result.success) {
//       document.getElementById('status').innerText =
//         `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;

//       // --- Display Proof Badge ---
//       const badge = document.createElement('div');
//       badge.id = 'proofBadge';
//       badge.innerText = `🛡️ ZK Proof Certificate\n\nDisease: ${disease}\nProof Status: VALID\nTimestamp: ${timestamp}`;

//       const container = document.getElementById('proofContainer');
//       container.innerHTML = '';
//       container.appendChild(badge);

//     } else {
//       document.getElementById('status').innerText =
//         `❌ Failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     document.getElementById('status').innerText = `❌ Error: ${err.message}`;
//   }
// });

// // Optional: detect already enabled wallet on page load
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet is already enabled");
//   }
// });


// let wallet; // Global wallet variable

// // --- Connect Lace Midnight Wallet ---
// document.getElementById('connectWallet').addEventListener('click', async () => {
//   try {
//     const api = window.midnight?.mnLace;
//     if (!api) {
//       alert("Lace Midnight not detected! Make sure extension is enabled.");
//       return;
//     }

//     wallet = await api.enable(); // Request user approval
//     console.log("Wallet connected:", wallet);

//     document.getElementById('submissionForm').style.display = 'block';
//     document.getElementById('status').innerText =
//       "Wallet connected (via Lace Midnight) ✅";

//   } catch (err) {
//     console.error("Error connecting wallet:", err);
//     alert("Failed to connect wallet. Check Lace Midnight extension.");
//   }
// });

// // --- Submit Disease Case ---
// document.getElementById('submitCase').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent page refresh

//   if (!wallet) {
//     alert("Please connect Lace Midnight first.");
//     return;
//   }

//   const disease = document.getElementById('diseaseSelect').value;
//   const timestamp = new Date().toISOString();

//   let walletAddress = "address-hidden";
//   if (wallet.getCurrentAddress) {
//     walletAddress = await wallet.getCurrentAddress();
//   } else if (wallet.api?.getCurrentAddress) {
//     walletAddress = await wallet.api.getCurrentAddress();
//   }

//   const caseData = {
//     disease,
//     location: "ANONYMIZED",
//     timestamp,
//     walletInfo: walletAddress
//   };

//   const statusEl = document.getElementById('status');
//   statusEl.innerText = "Submitting case...";
//   statusEl.classList.add("loading");

//   try {
//     // Simulate delay for user perception (~1.2s)
//     await new Promise(res => setTimeout(res, 1200));

//     const response = await fetch('http://localhost:5000/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(caseData)
//     });

//     const result = await response.json();
//     console.log("Server response:", result);

//     statusEl.classList.remove("loading");

//     if (result.success) {
//       statusEl.innerText =
//         `✅ Case submitted: ${disease}, ZK proof valid: ${result.zkProof?.valid}`;

//       // Display ZK proof badge
//       const badge = document.createElement('div');
//       badge.id = 'proofBadge';
//       badge.innerText = `🛡️ ZK Proof Certificate\n\nDisease: ${disease}\nProof Status: VALID\nTimestamp: ${timestamp}`;

//       const container = document.getElementById('proofContainer');
//       container.innerHTML = '';
//       container.appendChild(badge);

//     } else {
//       statusEl.innerText = `❌ Failed: ${result.error}`;
//     }

//   } catch (err) {
//     console.error("Error submitting case:", err);
//     statusEl.classList.remove("loading");
//     statusEl.innerText = `❌ Error: ${err.message}`;
//   }
// });

// // Optional: detect already enabled wallet on page load
// window.addEventListener('load', async () => {
//   const api = window.midnight?.mnLace;
//   if (api && api.isEnabled) {
//     const enabled = await api.isEnabled();
//     if (enabled) console.log("Wallet is already enabled");
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  let wallet;

  const connectBtn = document.getElementById('connectWallet');
  const submitBtn = document.getElementById('submitCase');
  const statusDiv = document.getElementById('status');
  const proofDiv = document.getElementById('proofContainer');
  const submissionForm = document.getElementById('submissionForm');

  // --- Connect Wallet ---
  connectBtn.addEventListener('click', async () => {
    try {
      const api = window.midnight?.mnLace;
      if (!api) {
        alert("Lace Midnight not detected! Make sure extension is enabled.");
        return;
      }

      wallet = await api.enable();
      console.log("Wallet connected:", wallet);

      submissionForm.style.display = 'block';
      statusDiv.innerText = "Wallet connected (via Lace Midnight) ✅";

    } catch (err) {
      console.error("Error connecting wallet:", err);
      alert("Failed to connect wallet. Check Lace Midnight extension.");
    }
  });

  // --- Submit Disease Case ---
  submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if (!wallet) {
      alert("Please connect Lace Midnight first.");
      return;
    }

    const disease = document.getElementById('diseaseSelect').value;
    const timestamp = new Date().toISOString();

    let walletAddress = "address-hidden";
    if (wallet.getCurrentAddress) walletAddress = await wallet.getCurrentAddress();
    else if (wallet.api?.getCurrentAddress) walletAddress = await wallet.api.getCurrentAddress();

    const caseData = {
      disease,
      location: "ANONYMIZED",
      timestamp,
      walletInfo: walletAddress
    };

    // Show animated loading message
    statusDiv.innerText = "Submitting case";
    let dots = 0;
    const loadingInterval = setInterval(() => {
      statusDiv.innerText = "Submitting case" + ".".repeat(dots % 4);
      dots++;
    }, 300);

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseData)
      });

      clearInterval(loadingInterval);

      const result = await response.json();
      console.log("Server response:", result);

      if (result.success) {
        statusDiv.innerText = `✅ Case submitted: ${disease}`;
        proofDiv.innerText = `🛡️ ZK Proof: Valid? ${result.zkProof?.valid}\nMessage: ${result.zkProof?.message}`;
      } else {
        statusDiv.innerText = `❌ Failed: ${result.error}`;
        proofDiv.innerText = '';
      }

    } catch (err) {
      clearInterval(loadingInterval);
      console.error("Error submitting case:", err);
      statusDiv.innerText = `❌ Error: ${err.message}`;
      proofDiv.innerText = '';
    }
  });

  // --- Optional: detect already enabled wallet ---
  window.addEventListener('load', async () => {
    const api = window.midnight?.mnLace;
    if (api && api.isEnabled) {
      const enabled = await api.isEnabled();
      if (enabled) console.log("Wallet is already enabled");
    }
  });
});
