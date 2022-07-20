// import {Sequelize,DataTypes} from 'sequelize';
const { Sequelize, DataTypes,Model } = require('sequelize')

//defining access variables
const user = 'postgres'
const host = 'localhost'
const database = 'user'
const password = 'ahmad'
const port = '5432'

// initializing new Sequelize object instance
const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
  })

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

authenticated()
async function authenticated() {
  try {
    await db.sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
// // defining properties
const POSTS = sequelize.define("posts", {
    // attributes
    author: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
  });

// creating a class and extending Model base class

// class POSTS extends Model {}
// POSTS.init({
//     // attributes
//     author: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     body: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
// },{sequelize,modelName:'posts'});


//checking if we can make a new post
(async () => {
    await sequelize.sync();
    const jane = await POSTS.create({
       id:1,
       author : 'ahmad',
       body:'body'
    });
    console.log(jane.toJSON());
  })();


//checking if the connection is OK
console.log(POSTS === sequelize.models.User)
// creating property
// sequelize.sync({ force: true }).then(() => {
//     return User.create({
//       firstName: 'Dons'
//     })

// (async()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })();
