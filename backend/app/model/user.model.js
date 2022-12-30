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
            // validate: {
            //     len: [8,12],    
            //     // msg: "The mobile length should be 10 characters. onliy", 
            // }
            validate: {
                // validatePassword: function(password) {
                //     if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(password))) {
                //         throw new Error('The password must contain at least 10 and maximum 12 characters including at least 1 uppercase, 1 lowercase, one number and one special character.');
                //     }
                // }
            },
        },
        mobile_number: {
            type: Sequelize.STRING,
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