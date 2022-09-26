module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define(
    "Asset",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      type: {
        type: DataTypes.STRING,
        unique: true
      },
      bike_id: {
        type: DataTypes.BIGINT
      },
      swap_station_id: {
        type: DataTypes.BIGINT
      },
      current_power: {
        type: DataTypes.BIGINT
      },
      total_dist: {
        type: DataTypes.DOUBLE,
        default: 0.0
      },
      total_power: {
        type: DataTypes.BIGINT,
        default: 0.0
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      tableName: "assets",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  );

  return Asset;
};
