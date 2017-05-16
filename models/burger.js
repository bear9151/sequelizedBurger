module.exports = function(sequelize, DataTypes) {
    var sequelizedBurger = sequelize.define("sequelizedBurger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return sequelizedBurger;
};