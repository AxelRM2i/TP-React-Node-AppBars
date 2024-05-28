import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Biere_commande = sequelize.define({
    biere_id: {
        type: DataTypes.INTEGER,
    },

    commande_id: {
        type: DataTypes.INTEGER,
    },

});
 
export default Biere_commande;