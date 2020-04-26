module.exports = function (sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },
        event_date: {
            type: DataTypes.DATEONLY,
            get: function() {
                return moment(this.getDataValue('event_date')).format('MM.DD.YYYY')
             },
            // set: function() {
            //     setDataValue('event_date', moment().format('MM.DD.YYYY'))
            // },
            allowNull: false,
        },
        event_seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        event_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        app: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        app_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        entree: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        entree_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dessert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dessert_description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Events.associate = function (models) {

        Events.hasMany(models.Rsvps, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Events;
};