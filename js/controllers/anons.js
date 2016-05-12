(function() {
   angular.module('kafedraApp')
     .controller('AnonsCtrl', function () {
        this.personnel = staff;
     });

   var staff = [{
      name: 'Свято науки',
      biography: 'Закінчила Дрогобицький державний педагогічний інститут імені Івана Франка у 1992 р. Кандидат філологічних наук з 12 вересня 1997 року. Дисертацію захистила 12 вересня 1997 року у спеціалізованій вченій раді Київського державного лінгвістичного університету. Вчене звання доцента кафедри англійської філології присвоєно 18 квітня 2002 року. Доктор філологічних наук з 23 лютого 2011 року. Дисертацію захистила 7 жовтня 2010 року у спеціалізованій вченій раді Київського національного лінгвістичного університету. Вчене звання професора кафедри германських мов і перекладознавства присвоєно атестат від 26.10.2012 р. Член двох спеціалізованих рад із захисту кандидатських і докторських дисертацій. З березня 2013 р. головний редактор «Наукового вісника Дрогобицького державного педагогічного університету імені Івана Франка. Серія: Філологічні науки (мовознавство)», який  є фаховим виданням на підставі Наказу МОН України № 1081 від 29 вересня 2014 року. За відповідні наукові здобутки відзначена міжнародним бібліографічним центром "The 20th Century Award for Achievement" – International Biographical Centre, Cambridge, England (1997 р.). Авторка більше 100 публікацій, з них 97 наукового та 6 навчально-методичного характеру, у тому числі 1 монографія, 61стаття  у фахових виданнях України та 1 підручник з грифом МОН України.',
      image: 'images/babeliuk.jpg',
      }, {
      image: 'images/zymomra_m_i.jpg',
      name: 'Зимомря Микола Іванович',
      degree: 'доктор філологічних наук, професор',
      subjects: ['Українська література у світовому контексті', 'Інтерпретація тексту (німецька)', 'Стилістика (німецька)', 'Культура усного і писемного мовлення (німецька)', 'Загальнотеоретичний курс другої іноземної мови (німецька)', 'Теорія і практика перекладу'],
      biography: 'Закінчив  Ужгородський  університет (відділення української та німецької філології). В 1972 р. закінчив аспірантуру Берлінського університетуту ім. Гумбольдта, захистив кандидатську дисертацію на тему «Сприйняття української літератури в німецькомовних країнах від першовитоків до 1917 р. До історії російсько-українсько-німецьких літературних взаємодій». В 1980–1982 рр. був у докторантурі Інституту світової літератури ім. М.Горького Академії наук СРСР (Москва). 1984 р. захистив докторську дисертацію на тему «Міжлітературні зв’язки та роль перекладу у художньому процесі». Працював у 1967–1969 рр. викладачем кафедри німецької філології; у 1973–1979 рр. завідувачем кафедри німецької філології; у 1986–1993 рр. завідувачем кафедри іноземних мов Ужгород. ун-ту. У 1993–1995 рр. – професор Педагогічної академії в Слупську (Польща); у 1995–1997 рр. – професор Закарпатського Інституту післядипломної освіти; у 1997–2002 рр. – професор Балтійської гуманістичної вищої школи у Кошаліні (Польща); від 2002 р. – професор Полонійної Академії у Ченстохові (Польща). Від 2003 р. – засновник і перший зав. каф. теорії та практики перекладу Дрогобицького державного педагогічного університету ім. І.Франка. Зараз професор кафедри германських мов і перекладознавства Дрогобицького державного педагогічного університету ім. І.Франка. Автор понад 800 опублікованих праць з проблематики порівняльного літературознавства, перекладознавства, культурознавства. Член спеціалізованих учених рад при Львів. нац. ун-ті ім. І.Франка (2002–2004), Тернопільському нац. пед. ун-ті ім. В.Гнатюка (від 2003 р.), Київському нац. ун-ті ім. Т.Шевченка (від 2007 р.); член експертної ради при ДАК України з гуманітарних та соціальних наук (від 2007 р.); член редколегії періодичних видань – альманаху українців Європи «Зерна», журналів «Карпатський світ», «Белз», «Гуманістичний вісник», «Соборність», «Освіта Закарпаття», «Наукові записки Полонійної академії» (Ченстохова, Польща). Лауреат Міжнародних літературних премій ім. І.Кошелівця (2001) та Б.Лепкого (2005). Нагороджений знаками «Відмінник освіти України» (1996), «Петро Могила» (2006). Член Національної спілки журналістів України (1980). Член Національної спілки письменників України (2008).',
      interests: 'перекладознавства, літературознавство'
   }, {
      image: '',
      name: 'Зимомря Іван Миколайович ',
      degree: 'доктор філологічних наук, професор',
      subjects: ['Практика перекладу з другої іноземної мови (німецька)', 'Практичний курс з другої іноземної мови (німецька)'],
      biography: 'Закінчив Ужгородський національний університет у 2001, зі спеціальності «Німецька мова та світова література» (Магістр лінгвістики). Тема кандидатської дисертації «Проза Емми Андієвської: психологічний дискурс». У 2011 захистив дисертацію на здобуття наукового ступеня доктора філологічних наук у Київському національному університеті імені Тараса Шевченка на тему  «Австрійська мала проза ХХ століття: генологічна парадигма і проблеми». Автор близько 150 наукових та навчально-методичних праць.',
      interests: ''
   }];

})();
