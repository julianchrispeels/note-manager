import { DataTypes } from "sequelize";

import sequelize from "../database/db.js";

// Define the Note model by extending the sequelize Model class
// The model will have the following fields: id, title, content, and isArchived
const Note = sequelize.define("notes", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: false,
});

export default Note;