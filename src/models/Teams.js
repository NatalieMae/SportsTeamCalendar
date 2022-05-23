const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)


// TEAMS MODEL - TABLE HAS 2 COLUMNS
class Team extends Model {}

Team.init({
  // Model attributes are defined here
  team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Team' // We need to choose the model name
});

// the defined model is the class itself
console.log(Team === sequelize.models.Team);

// EXPORT TEAM

module.exports = Team;
