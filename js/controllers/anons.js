(function() {
   angular.module('kafedraApp')
     .controller('AnonsCtrl', function () {
        this.personnel = staff;
     });

   var staff = [{
      name: 'Лекції професора Soeren Bo Westring',
      biography: '24-25  травня на соціально-гуманітарному факультеті читатиме лекції професор Soeren Bo Westring (Данія).,
      degree: 'Тематика:',
      degree: ['1. Тема біженців у літературі 20 ст.» (24.05 о 9:00, ауд. 106)', '2. Гуманізм у творах фламандських живописців 16 ст.»; (25.05 о 9.00, ауд.106'],
      biography: 'Лекції читатимуться  англійською мовою. Запрошуються студенти та викладачі.,
      }, {
      name: 'Свято науки',
      biography: '11 травня 2016 року у приміщенні Австрійської бібліотеки відбулася студентська наукова конференція «Філологічні науки у ХХI столітті» за ініціативи кафедри германських мов і перекладознавства. Тема привабила близько 30 студентів: бакалаври, студенти 5 курсу, магістри, аспіранти та багато інших охочих долучитися до творчого наукового пошуку молодих науковців. У залі також були присутні і наукові керівники, серед них доктор філологічних наук, професор Бабелюк О.А., кандидати філологічних наук, доценти Палиця Г.С., Яскевич О.К., Коваль Н.Є., Сліпецька В.Д., Летнянчин П.П. За словами організаторів гасло конференції: «Якщо ви володієте знаннями, дайте іншим запалити від нього свої світильники» (Томас Фуллер) цілком відповідало її атмосфері, яка вже з самого початку переросла у дружній «брейн-стормінг» з обох сторін. Наукова дискусія торкалася гендерних аспектів англомовного рекламного дискурсу, поетологічних особливостей психологічної прози, постмодерністської казки, романів Е. Хемінгвея, історичної прози, структури і функцій евфемізмів, рецепції численних перекладів класиків української літератури іноземною мовою.  Конференція завершилася художнім читанням віршів І. Франка німецькою мовою, яке продемонструвала  студентка магістратури заочної форми навчання Мар’яна Кричфалушій.',
      image: 'images/stkon2.jpg',
      image: 'images/stkon1.jpg',
      }, {
      name: 'Cтудентська наукова конференція',
      biography: 'У середу 11.05.2016р. о 10.00  у приміщенні Австрійської бібліотеки відбудеться студентська наукова конференція «Філологічні науки у ХХІ столітті». Запрошуються студенти денної та заочної форм навчання, які виконують кваліфікаційні роботи на кафедрі германських мов і перекладознавства та викладачі кафедри. Для доповіді (5хв.) необхідно роздрукувати зміст роботи, вступ, список літератури та підготувати презентацію.',
      }];

})();
