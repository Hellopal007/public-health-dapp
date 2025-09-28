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
