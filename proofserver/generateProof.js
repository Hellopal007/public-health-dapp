const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/generate-proof', async (req, res) => {
  const caseData = req.body;

  // TODO: Connect to real Midnight proof server if available
  // For hackathon/demo, simulate proof
  const proof = {
    valid: true,
    message: `Simulated ZK proof for disease ${caseData.disease}`
  };

  res.json(proof);
});

app.listen(6300, () => console.log('Proof server running on port 6300'));
