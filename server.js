const express = require('express');
const app = express();
app.use(express.json());

let bookings = [];

app.get('/', (req, res) => {
  res.send('Backend Running ✅');
});

app.post('/book', (req, res) => {
  bookings.push(req.body);
  console.log(bookings);
  res.json({ message: 'Booking Saved' });
});

app.get('/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(5000, () => console.log('Server running'));
