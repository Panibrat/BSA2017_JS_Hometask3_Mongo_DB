## BSA 17 JS. Lecture 3 - Mongo DB
![mongo](/assets/images.png)

Установить mongodb.

Скачать файл results.json. (https://www.dropbox.com/s/0enj7o0h33fdgzn/dataSample.json?dl=0)

Выполнить команду:

mongoimport --db yourDbName --collection yourCollectionName --file ~/results.json --jsonArray, где:

~/results.json - Ваш путь к файлу yourDbName - имя Вашей базы данных yourCollectionName - имя Вашей коллекции Запустить консоль командой mongo.

Выполнить команду use yourDbName.

написать следующие запросы:

* Написать запрос для поиска всех студентов, у которых score > 87% и < 93% по любому из типов выполненных заданий.
* Написать запрос-агрегацию для выборки всех студентов, у которых результат по экзамену (type: "exam") более 90% (использование unwind)
* Студентам с именем Dusti Lemmond добавить поле “accepted” со значением true.