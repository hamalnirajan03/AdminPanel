// use("library")

// db.book.insertOne({
//     name:"Alchemist",
//     author:"Paulo Coehlo",
//     price:2200
// })

// db.book.find()

// db.book.insertOne({
//     name:"Nirajan"
// })

// db.book.insertMany([

//   {
//     name: "Karnali Blues",
//     author: "Buddhi sagar",
//     price: 2000,
//     publication: "ekata",
//   },
//   {
//     name: "The NoteBook",
//     author: "Nicholas Spark",
//     price: 2800,
//     publication: "New York Books"
//   }
// ]);

// db.book.find()

// db.book.find({
//     author:"Buddhi sagar"
// })

// db.book.deleteMany({
//   _id: ObjectId("64aaa6d7b352665d207322bb"),
// });

// db.book.deleteMany({
//     price:1800
// })

// db.book.deleteMany({})

// db.book.insertOne({
//   name: "Big Bang Theory",
//   price: 3000,
//   author: "Stephen Hawking",
//   publication:"New york Books"
// });

//update

// db.book.updateOne({
//     author:"Stephen Hawking"
// },{
//     $set:{
//         publication:" Uk Books"
//     }
// }
// )

// db.author.insertMany([
//   {
//     name: "Stephen Hawking",
//     numberOfBooks: 10,
//     mostSoldBooks: "Big Bang Theory",
//     isAlive: false,
//     birthDate: new Date("2022/01/01"),
//     nationality: "USA",
//   },
//   {
//     name: "Nicholas Spark",
//     numberOfBooks: 4,
//     mostSoldBooks: "The NoteBook",
//     isAlive: false,
//     birthDate: new Date("2016/05/01"),
//     nationality: "USA",
//   },
//   {
//     name: "Subin Bhattrai",
//     numberOfBooks: 5,
//     mostSoldBooks: "Summer Love",
//     isAlive: true,
//     birthDate: new Date("2019/01/01"),
//     nationality: "Nepal",
//   },
//   {
//     name: "Nirajan Hamal",
//     numberOfBooks: 1,
//     mostSoldBooks: "The theory of life",
//     isAlive: true,
//     birthDate: new Date("1995/05/0"),
//     nationality: "Nepal",
//   },
//   {
//     name: "Abhishek Aryal",
//     numberOfBooks: 2,
//     mostSoldBooks: "Development of websites",
//     isAlive: true,
//     birthDate: new Date("2017/01/01"),
//     nationality: "Nepal",
//   },
// ]);

// db.author.find()

// db.author.deleteOne({
//   _id: ObjectId("64aaaeafc2e5b228b0a1939f"),
// });

// db.author.updateOne({
//     name: "Nirajan Hamal"
// },{
//     $set:{
//         numberOfBooks:150
//     }
// }
// )
