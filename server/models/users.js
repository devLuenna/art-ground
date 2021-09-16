const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define(
    "users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nickname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      profile_img: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      author_desc: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      user_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  users.associate = function (models) {
    users.hasMany(models.comments, { as: "comments", foreignKey: "user_id" });
    users.hasMany(models.exhibition, {
      as: "exhibitions",
      foreignKey: "author_id",
    });
    users.hasMany(models.likes, { as: "likes", foreignKey: "user_id" });
  };
  return users;
};