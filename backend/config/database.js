import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'tp-reactjs-nodejs', 
  'root', 
  '', 
  {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // ou true si besoin
});

export default sequelize;