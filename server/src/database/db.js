import Sequelize from 'sequelize';

import { DB_URI } from '../config/config.env.js';

// Create a new instance of Sequelize
// The first argument is the URI of the database
const sequelize = new Sequelize(DB_URI)

export default sequelize;