use("NewUsers");

// db.user.updateOne({ _id: ObjectId("64ae9b9c1fb5f62977cc91b8") },{
//     $set:{name:"Min"}
// });

// db.user.updateOne({name:"Max"},{
//     $set:{
//         name: "Maneul",

//     }
// })

// db.user.updateOne({name:"Chris"},{
//     $set:{
//         name:"Cristiano",
//         age:42
//     }
// })

// db.user.updateOne({name:"Maneul"},{$inc:{age:5}})

// db.user.updateOne({name:"Cristiano"},{
//     $mul:{
//         age:2
//     }
// })

// db.user.updateMany({},
//     {
//         $set:{
//             isMarried: true
//         }
//     })

// db.user.updateMany({},
//     {
//         $unset:{
//             isMarried: true
//         }
//     })

// db.user.updateMany({},{
//     $rename:{age:"totalAge"}
// })

// db.user.updateOne({name:"Maria"},{
//     $set:{hobbies:[{title:"Swimming", frequency:5}]}
// })

// db.user.updateMany({"hobbies.title":"Sports"},{$inc:{"hobbies.$.frequency":2}})
// db.user.updateMany({"hobbies.title":"Cooking"},{$inc:{"hobbies.$.frequency":-2}})
