import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Bar from './bar.js';

const Biere = sequelize.define('Biere',{
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
        type: DataTypes.FLOAT,
    },

    bar_id: {
        type: DataTypes.INTEGER,
    },

});
Biere.belongsTo(Bar, { foreignKey: 'bar_id' });
Bar.hasMany(Biere, { foreignKey: 'bar_id' });

export default Biere;