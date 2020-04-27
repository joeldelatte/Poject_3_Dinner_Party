// const stringHash = require("string-hash");
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            // set(value) {
            //     this.setDataValue('password', stringHash(value));
            //   },
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        }
    });

    Users.associate = function (models) {
        Users.hasMany(models.Events, {
            foreignKey: {
                allowNull: false
            }
        });

        Users.hasMany(models.Rsvps, {
            foreignKey: {
                // unique: true,
                allowNull: false
            }
        });
    };

    return Users;
};