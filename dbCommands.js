//1) Написать запрос для поиска всех студентов, у которых score > 87% и < 93% по любому из типов выполненных заданий.
db.students.find(
    { scores: {
        $elemMatch: {
            "score" : { $gt: 87, $lt: 93 }
            }
        }   
    }
).pretty();

//2) Написать запрос-агрегацию для выборки всех студентов, у которых результат по экзамену (type: "exam") 
// более 90% (использование unwind)
db.students.aggregate([
    { $unwind : "$scores" },
    { $match : { 
        "scores.type" : "exam",
        "scores.score" : { $gt: 90} 
        }
    }
]).pretty();

//3) Студентам с именем Dusti Lemmond добавить поле “accepted” со значением true.
db.students.update(
    { "name" : "Dusti Lemmond" },
    { $set:
        { "accepted" : true }
    },
    { multi: true }
);
