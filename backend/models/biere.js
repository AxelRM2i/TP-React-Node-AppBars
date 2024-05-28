import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Biere = sequelize.define({
    name: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },

    degree: {
        type: DataTypes.FLOAT,
    },

    price: {
        type: DataTypes.FLOAT,min,
    },

    bar_id: {
        type: DataTypes.INTEGER,
    },

});
 
export default Biere;