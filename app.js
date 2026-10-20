// Import the express module
import express from 'express';

// Create an instance
const app = express();

// Define a port number
const PORT = 3000;

// Create an array to store orders
const orders = [];

// Enable static file serving
app.use(express.static('public'));

// App middleware to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({ extended: true }));

// Define a default route ("/")
app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Define route for contact view page
app.get('/contact-us', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

// Define route for confirm order view page
app.get('/confirm-order', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});


app.post('/submit-order', (req, res) =>{
    const order = req.body;
    order['timestamp'] = new Date();

    console.log(order);

    // Add order object to orders array
    orders.push(order);
    console.log(orders);

    //Display the confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Define route for menu view page
app.get('/menu', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/menu.html`);
});



// Start server on designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
