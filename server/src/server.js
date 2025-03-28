import app from './app.js';
import sequelize from './database/db.js';

// Define a function that will connect to the database and start the server
const startServer = async () => {
	try {
		// Connect to the database
		/*await sequelize.sync({force: false});
		console.log('Connection has been established successfully.');*/

		// Start the server
		app.listen(4000, () => {
			console.log('Server is running on port 4000');
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

// Call the function to start the server
startServer();