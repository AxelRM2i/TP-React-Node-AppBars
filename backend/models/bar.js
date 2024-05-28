import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
 
const Bar = sequelize.define({
    name: {
        type: DataTypes.STRING,
    },

    address: {
        type: DataTypes.STRING, 
    },

    tel: {
        type: DataTypes.STRING,
        allowNull:false
    },

    email: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.TEXT,

       
    },

});
 
export default Bar;