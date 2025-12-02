// server.js - Modern UI Version for IT 412 Part 1
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>IT 412 - Final Project Part 1</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #00a86b, #007245, #003d28);
          background-size: 300% 300%;
          animation: gradientShift 12s ease infinite;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #fff;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 35px 45px;
          width: 90%;
          max-width: 620px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        h1 {
          font-weight: 600;
          margin-bottom: 6px;
          letter-spacing: .5px;
        }

        .meta {
          opacity: 0.9;
          font-size: 1rem;
        }

        blockquote {
          margin: 25px 0;
          font-size: 1.2rem;
          font-weight: 400;
          color: #f3f3f3;
          padding-left: 18px;
          border-left: 4px solid #ffffffcc;
        }

        footer {
          margin-top: 20px;
          font-size: .85rem;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>IT 412 – Platform Technologies</h1>
        <p class="meta"><strong>Student:</strong> Johncedrick D. Macatangay</p>
        <p class="meta"><strong>Section:</strong> BSIT BA-4101</p>

        <blockquote>“Success is not final; failure is not fatal.”</blockquote>

        <footer>Final Project — Part 1 Deployment</footer>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
