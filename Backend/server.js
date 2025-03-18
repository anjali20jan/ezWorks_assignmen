// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 5000;
// const DATA_FILE = path.join(__dirname, 'emails.json');

// app.use(cors());
// app.use(express.json());

// app.post("/submit", (req, res) => {
//     const { email } = req.body;
//     if (!email) {
//         return res.status(400).json({ error: "Email is required" });
//     }
    
//     if (email.endsWith("@ez.works")) {
//         return res.status(422).json({ error: "Emails ending with @ez.works are not allowed" });
//     }
    
//     fs.appendFile(DATA_FILE, email + "\n", (err) => {
//         if (err) {
//             return res.status(500).json({ error: "Error saving email" });
//         }
//         res.status(200).json({ message: "Email submitted successfully" });
//     });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'emails.json');

app.use(cors());
app.use(express.json());

// Ensure emails.json exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.post("/submit", (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    
    if (email.endsWith("@ez.works")) {
        return res.status(422).json({ error: "Emails ending with @ez.works are not allowed" });
    }
    
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }
        
        let emails = [];
        try {
            emails = JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return res.status(500).json({ error: "Error parsing file" });
        }
        
        emails.push({ email, submittedAt: new Date().toISOString() });
        fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ error: "Error saving email" });
            }
            res.status(200).json({ message: "Email submitted successfully" });
        });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

