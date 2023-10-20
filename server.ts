import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db';
import SurveyResponse, { ISurveyResponse } from './models/SurveyResponse';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Define routes
app.get('/', (req, res) => {
  res.send('Survey App');
});

app.get('/survey', (req, res) => {
    // Render the survey form (you'd typically use a template engine like EJS or Pug)
    // For simplicity, we'll just send a message
    res.send('Survey form goes here');
  });
  
  app.post('/survey', async (req, res) => {
    try {
      const { valence, arousal } = req.body;
      const response: ISurveyResponse = new SurveyResponse({ valence, arousal });
      await response.save();
      res.send('Thank you for your participation!');
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
