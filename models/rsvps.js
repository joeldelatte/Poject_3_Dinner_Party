module.exports = function (sequelize, DataTypes) {
    var Rsvps = sequelize.define("Rsvps", {
        rsvp_seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    return Rsvps;
};