import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
 
const Biere = sequelize.define({
    name: {
        type: DataTypes.STRING,
    },

    address: {
        type: DataTypes.STRING, 
    },

    tel: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.TEXT,

       
    },

});
 
export default Bar;