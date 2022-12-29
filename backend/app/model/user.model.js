module.exports = (sequelize, Sequelize) => {
    var pattern = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;

    const User = sequelize.define("user", {
        user_id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        first_name: {
            type: Sequelize.STRING,
            unique: true
        },
        last_name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            isEmail: {
                msg: "Email address must be valid"
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                // len: {
                //     args: [8, 12],
                //     // msg: "password must be between 8 and 12 characters in length"
                // },
            }
        },
        mobile_number: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [10,10],    
                // msg: "The mobile length should be 10 characters. onliy", 
            }
        },
        status: {
          type: Sequelize.ENUM("active" , "inactive"),
          defaultValue: "active",
        },
    });
    
    return User;
  };