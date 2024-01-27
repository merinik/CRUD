var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://mernik:CJkKYJ1iAilemNEn@cluster0.2oowoq0.mongodb.net/sample_mflix'

	app.get("/", function (req, res) {

		mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'Connection error:'));
		db.once('open', async () => {
			console.log('Connected to MongoDB!');

			try {

				const mascots = await mongoose.connection.db.collection('theaters')
				.find({'location.address.city':'Bloomington'}).toArray();
				res.render('../public/form.ejs', {
					info : mascots
				})
				
			} catch (error) {
				console.error('Error retrieving movies:', error);
			} finally {
				mongoose.connection.close();
			}
		});
	});

			

	app.post('/addInfo', (req, res) => {
		const login = req.body.login;
		const pass = req.body.pass;
		const email = req.body.email;
		mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'Connection error:'));
		db.once('open', async () => {
			console.log('Connected to MongoDB!');

			try {

				const mascots = await mongoose.connection.db.collection('theaters')
				.find({'location.address.city':'Bloomington'}).toArray();
				res.render('../public/form.ejs', {
					info : mascots
				})
				
			} catch (error) {
				console.error('Error retrieving movies:', error);
			} finally {
				mongoose.connection.close();
			}
		});
	});

	app.listen(3000, function () {
		console.log("Example is running on port 3000");
	});




