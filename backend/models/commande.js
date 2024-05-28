import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Commande = sequelize.define({
    name: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.FLOAT,min,
    },

    bar_id: {
        type: DataTypes.INTEGER,
    },

    date: {
        type: DataTypes.DATE,
    },

    status: {
        type: DataTypes.STRING,
    }

});
 
export default Commande;