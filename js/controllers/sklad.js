(function() {
   angular.module('kafedraApp')
     .controller('SkladCtrl', function () {
        this.personnel = staff;
     });

   var staff = [{
      image: 'images/babeliuk.jpg',
      name: 'Бабелюк Оксана Андріївна',
      degree: 'доктор філологічних наук, професор',
      subjects: ['Теоретична граматика (англійська)', 'Стилістика (англійська)', 'Інтерпретація тексту (англійська)', 'Загальнотеоретичний курс другої іноземної мови (англійська)'],
      biography: 'Закінчила Дрогобицький державний педагогічний інститут імені Івана Франка у 1992 р. Кандидат філологічних наук з 12 вересня 1997 року. Дисертацію захистила 12 вересня 1997 року у спеціалізованій вченій раді Київського державного лінгвістичного університету. Вчене звання доцента кафедри англійської філології присвоєно 18 квітня 2002 року. Доктор філологічних наук з 23 лютого 2011 року. Дисертацію захистила 7 жовтня 2010 року у спеціалізованій вченій раді Київського національного лінгвістичного університету. Вчене звання професора кафедри германських мов і перекладознавства присвоєно атестат від 26.10.2012 р. Член двох спеціалізованих рад із захисту кандидатських і докторських дисертацій. З березня 2013 р. головний редактор «Наукового вісника Дрогобицького державного педагогічного університету імені Івана Франка. Серія: Філологічні науки (мовознавство)», який  є фаховим виданням на підставі Наказу МОН України № 1081 від 29 вересня 2014 року. За відповідні наукові здобутки відзначена міжнародним бібліографічним центром "The 20th Century Award for Achievement" – International Biographical Centre, Cambridge, England (1997 р.). Авторка більше 100 публікацій, з них 97 наукового та 6 навчально-методичного характеру, у тому числі 1 монографія, 61стаття  у фахових виданнях України та 1 підручник з грифом МОН України.',
      interests: ''
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
   }, {
      image: 'images/kozuba.jpg',
      name: 'Коцюба Зоряна Григорівна',
      degree: 'доктор філологічних наук, професор',
      subjects: ['Типологія', 'Порівняльна типологія української та англійської мов', 'Основи лексикографії', 'Порівняльна лексикологія'],
      biography: 'У 1993 році закінчила Дрогобицький державний педагогічний інститут імені Івана Франка. З 1993 року і до сьогодні працює в цьому інституті (нині університеті) на посадах викладача, доцента, професора. Закінчила стаціонарну аспірантуру у Львівському державному університеті імені Івана Франка, докторантуру – в Інституті мовознавства імені О. О. Потебні НАН України. Кандидат філологічних наук з 2001 року. Кандидатську дисертацію зі спеціальності 10.02.16 – перекладознавство на тему «Експресивність номінативних речень як перекладознавча проблема (на матеріалі англійської та української мов) захистила в Київському національному університеті імені Т. Шевченка. Вчене звання доцента кафедри англійської філології присвоєно 2004 року. Доктор філологічних наук з 2011 року. Докторську дисертацію зі спеціальності 10.02.15 – загальне мовознавство на тему «Універсальне і національне в паремійних фондах мов європейського ареалу (лінгвокультурологічний аспект)» захистила в Київському національному університеті імені Т. Шевченка. Вчене звання професора кафедри германських мов і перекладознавства отримала 2012 року. Член спеціалізованої вченої ради К 35.051.15 у Львівському національному університеті імені Івана Франка. Опублікувала понад 70 праць, із них 67 наукового і 3 навчально-методичного характеру, у тому числі 1 монографія та 1 посібник із грифом МОН України.',
      interests: ''
  }, {
      image: '',
      name: 'Сабат Галина Петрівна',
      degree: 'доктор філологічних наук, професор',
      subjects: ['Історія зарубіжної літератури'],
      biography: 'У 2009 році захистила докторську дисертацію «Казки Івана Франка як естетико-поетикальна система». Автор 4 монографій та понад 120 статей',
      interests: 'Винниченкознавство, франкознавство, теорія утопії й антиутопії'
  }, {
      image: 'images/yaskevych.jpg',
	   name: 'Яскевич Ольга Клавдіївна',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Контрастивна граматика', 'Теоретична фонетика', 'Країнознавство країни другої іноземної мови', 'Основи теорії мовної комунікації', 'Англійська мова для аспірантів'],
      biography: 'Закінчила Дрогобицький державний педагогічний інститут імені Івана Франка у 1973 р. Кандидат філологічних наук з 18 жовтня  1990 року. Навчалася у аспірантурі на кафедрі англійської філології  при Київському державному університеті імені Тараса Шевченка з 1986-1989 рік. Дисертацію захистила 18 жовтня 1990 року у спеціалізованій вченій раді Київського державного університету ім. Тараса Шевченка. Вчене звання доцента кафедри іноземних мов присвоєно 2 липня 1993 року. Була завідувачем кафедри англійської філології з 2001 по 2009 рік. За відповідні навчальні, наукові та виховні  здобутки відзначена нагрудним знаком «Відмінник  народної освіти України» у 2005 році. Авторка більше 40 публікацій, з них наукового та навчально-методичного характеру.',
      interests: ''
  }, {
      image: 'images/slipetska.jpg',
      name: 'Сліпецька Віра Дмитрівна',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Історія мови', 'Країнознавство країни основної іноземної мови', 'Лексикологія'],
      biography: 'У 1992 році з відзнакою закінчила факультет іноземних мов Дрогобицького державного педагогічного інституту імені Івана Франка, здобула кваліфікацію вчителя англійської та німецької. З 2000 року почала працювати викладачем кафедри практики англійської мови ДДПУ ім. І.Франка. В листопаді 2006 року вступила в аспірантуру Київського національного університету. В травні 2008 року захистила кандидатську дисертацію на тему «Англомовна термінологія штучного інтелекту в контексті інших терміносистем (досвід лінгвостатистичного аналізу)», спеціальність 10.02.04  германські мови. З жовтня 2008 року  заступник декана факультету романо-германської філології з наукової роботи. З лютого 2011 року заступник декана факультету романо-германської філології з навчальної роботи. Професійні й наукові інтереси: лінгвістика емоцій.',
      interests: ''
  }, {
      image: 'images/koval.jpg',
      name: 'Коваль Наталія Євгенівна',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Культура усного і писемного мовлення', 'Практичний курс другої  іноземної мови', 'Теоретична фонетика'],
      biography: 'У 1995 році закінчила Дрогобицький державний педагогічний інститут імені Івана Франка за спеціальністю “Учитель англійської та німецької мов”. 2000-2004 р. – навчання у  Львівському  національному університеті імені Івана Франка – факультет іноземних мов – аспірант. Дисертацію захистила 21 червня 2007 р. у спеціалізованій вченій раді К 41.051.02 Одеського національного університету ім. І.І. Мечникова зі спеціальності 10.02.04 – германські мови, номер диплома – ДК № 044948. Тема дисертаційного дослідження: «Мовні засоби аргументації в юридичному дискурсі». Кандидат філологічних наук з 13 лютого 2008 року.  2012р. – присвоєно вчене звання доцента кафедри германських мов і перекладознавства. 1999р. – 2009р. працювала на кафедрі іноземних мов Інституту підприємництва та перспективних технологій Національного університету “Львівська політехніка”. 2009р. – 2016р. доцент кафедри германських мов і перекладознавства. Стаж педагогічної роботи у вищих навчальних закладах III-IV рівнів акредитації – 18 років, у тому числі в Дрогобицькому державному педагогічному університеті імені Івана Франка – 8 років. Опублікувала 32 публікації, з них 25 наукового та 7 навчально-методичного характеру, у тому числі 24 у фахових виданнях України.  Професійний і науковий інтереси: дискурсна лінгвістика, лінгвістична прагматика, юридичний дискурс, юридична лінгвістика, інтерпретація юридичних текстів.',
      interests: ''
  }, {
      image: '',
      name: 'Коляса Олена Василівна',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Культура усного і писемного мовлення', 'Практичний курс другої  іноземної мови'],
      biography: 'У 2015 році захистила дисертацію “Стилістичні та когнітивно-семантичні механізми творення ігрового абсурду в англомовному фентезійному оповіданні”. Автор 34 наукових та навчально-методичних праць.',
      interests: 'Стилістика англійської мови, когнітивна лінгвістика, сенергетика'
  }, {
      image: '',
      name: 'Палиця Галина Степанівна',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Вступ до германського мовознавства', 'Порівняльна типологія німецької та рідної мови', 'Культура усного і писемного мовлення', 'Практика усного і писемного мовлення', 'Типологія'],
      biography: 'У 1996 році закінчила Дрогобицький державний педагогічний інститут імені Івана Франка. З 1996 р. працює в цьому університеті на посадах викладача, старшого викладача, доцента. У 2000 році закінчила очну аспірантуру при Київському національному лінгвістичному університеті. У 2003 році захистила кандидатську дисертацію на тему «Лексичні та лексико-граматичні засоби вираження значення множинності в сучасній німецькій мові» зі спеціальності 10.02.04 – германські мови. З 2006 року - доцент кафедри німецької філології. Авторка більше 50 публікацій, з них 42 наукового та 8 навчально-методичного характеру, у тому числі 1 навчально-методичний посібник, рекомендований МОН України.',
      interests: 'функціональна граматика, лінгвокультурологія, пареміологія'
  }, {
      image: '',
      name: 'Лопушанський Ярослав Михайлович',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Література країни основної мови', 'Практичний курс другої іноземної мови', 'Країнознавство країни другої  мови', 'Література країни другої мови', 'Практика усного і писемного мовлення'],
      biography: 'Закінчив Ужгородський державний університет у 1986 році, спеціальність «Німецька мова і література»,(Філолог. Викладач. Перекладач). Захистив кандидатську дисертацію  зі спеціальності Порівняльне літературознавство – 10.01.05, тема дисертації «Рецепція української літератури в німецьмовному світі (перша половина ХХ ст.)»',
      interests: ''
  }, {
      image: '',
	   name: 'Лук’янченко Мар’яна Петрівна',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Вступ до перекладознавства', 'Основи перекладацького скоропису', 'Теорія і практика перекладу'],
      biography: 'Лук’янченко Мар’яна Петрівна народилася 22 червня 1976 р. у місті Дрогобичі. З 1993 по 1998 рік навчалася у Львівському державному університеті імені Івана Франка на факультеті іноземних мов за спеціальністю «Французька мова та література» (диплом спеціаліста з відзнакою з французької мови та літератури). З 1999 року працює в Дрогобицькому державному педагогічному університеті імені Івана Франка викладачем французької мови, а також спеціалізованих теоретичних та практичних дисциплін. З 2002 по 2005 рік навчалася в аспірантурі Київського національного університету імені Тараса Шевченка за спеціальністю 10.02.16 – перекладознавство. 26 березня 2006 року захистила дисертацію за цією ж спеціальністю й отримала науковий ступінь кандидата філологічних наук. Відтоді працює на посаді доцента. У січні 2011 р. отримала вчене звання доцента. Стаж педагогічної роботи у вищих навчальних закладах III-IV рівнів акредитації – 17 років. Авторка 33 публікацій, з них 30 наукового (у тому числі 19 у фахових виданнях України) та 3 навчально-методичного характеру.',
      interests: 'актуальні проблеми літературознавства, французької філології та перекладознавства'
  }, {
      image: 'images/letnanchyn.jpg',
	   name: 'Летнянчин Петро Петрович',
      degree: 'кандидат філологічних наук, доцент',
      subjects: ['Переклад ділового мовлення', 'Переклад науково-технічної літератури'],
      biography: 'У 2002 році закінчив  Дрогобицький державний педагогічний університет імені Івана Франка, спеціальність  «Англійська мова і література, німецька мова і література, зарубіжна література» (Вчитель англійської, німецької мов та зарубіжної літератури).  Захистив кандидатську дисертацію зі спеціальності порівняльне літературознавство –10.01.05, тема:  «Художня концепція в особистості у драмах Б.Шоу, І. Франка, В. Винниченка: компаративний дискурс».',
      interests: ''
  }, {
      image: 'images/zymomra_m_m.jpg',
	   name: 'Зимомря Мирослава Миколаївна',
      degree: 'кандидат педагогічних наук, cтарший викладач',
      subjects: ['Практичний курс основної мови', 'Практика перекладу з основної мови'],
      biography: 'Закінчила Ужгородський державний Університет у 1995, спеціальність  «Англіська мова та література», (Філолог. Викладач англійської мови та літератури). Захистила кандидатську дисертацію на тему «Естетичне виховання молоді засобами народних промислів Закарпаття (1919-1939)», зі спеціальності - Загальна педагогіка та історія педагогіки - 13.00.01.',
      interests: ''
  }, {
      image: '',
	   name: 'Луцик Христина Юріївна',
      degree: 'кандидат філологічних наук, викладач',
      subjects: ['Практика перекладу з основної іноземної мови', 'Лексикологія'],
      biography: 'У 2008 році закінчила Дрогобицький державний педагогічний університет імені Івана Франка. З 30 червня 2015 року – кандидат філологічних наук. 27 грудня 2014 року захистила дисертацію у спеціалізованій вченій раді Південноукраїнського національного педагогічного університету імені К.Д.Ушинського. Автор 22 публікацій, з них 8 у фахових виданнях України, 2 – у закордонних виданнях. ',
      interests: 'перекладознавство'
  }, {
      image: 'images/shahala.jpg',
      name: 'Шагала Леся Богданівна',
      degree: 'cтарший викладач',
      subjects: ['Практика усного і писемного мовлення'],
      biography: '1983 - 1988 рр. -  навчання у Дрогобицькому державному педагогічному інституті імені Івана Франка  на факультеті іноземних мов за спеціальністю “Англійська та німецька мови”.  Працювала асистентом, а далі - викладачем, старшим викладачем кафедр англійської мови, практики англійської мови Дрогобицького педінституту (з 1998 р. - Дрогобицького державного педагогічного університету імені Івана Франка), кафедри теорії та практики перекладу. Викладач таких дисциплін: практика усного та писемного мовлення, практична фонетика, практична граматика, теоретична фонетика англійської мови, редагування перекладу. У 1997 р. проходила стажування на курсах для викладачів педагогічних навчальних закладів «Вивчення новітніх методик та практики ТESOL» за участю Дому Америки в Києві. Захист кандидатської дисертації відбувся у спеціалізованій вченій раді у ДДПУ за спеціальністю 13.00.01. – загальна педагогіка та історія педагогіки (2016 р.). За час педагогічної діяльності опубліковано 29 науково-методичних праць, у тому числі 2 монографії ( у співавторстві), 6 статей у фахових виданнях України та 2 статті у зарубіжних виданнях.',
      interests: 'педагогічна діяльність представників українського шкільництва в Польщі, функціонування українських культурно-освітніх осередків в інонаціональному середовищі, проблеми рідномовного навчання та виховання, вивчення іноземних мов різновіковими категоріями учнів.'
    }, {
      image: '',
	   name: 'Дубицька Оксана Богданівна',
      degree: 'cтарший викладач',
      subjects: ['Країнознавство країни основної мови', 'Практика усного і писемного мовлення'],
      biography: 'У1984-1989 р. р. навчалася на факультеті іноземних мов Дрогобицького державного педагогічного інституту імені Івана Франка. Який закінчила з відзнакою по спеціальності «Англійська та німецька мови». У 1988 пройшла курс навчання у Cambridge School of English, Великобританія. З 1993 року працювала на кафедрі практики англійської мови, згодом – на кафедрі германських мов і перекладознавства.',
      interests: ''
	}, {
      image: '',
	   name: 'Герета Олег Миколайович',
      degree: 'cтарший викладач',
      subjects: ['Практика усного і писемного мовлення'],
      biography: 'У 1983 році закінчив  Дрогобицький державний педагогічний інститут імені Івана Франка, спеціальність «Англійська мова. Німецька мова» (Вчитель англійської та німецької мов).',
      interests: ''
	}, {
      image: '',
	   name: 'Лішнянський  Віктор Володимирович',
      degree: 'викладач',
      subjects: ['Комп’ютерна обробка текстів', 'Практика перекладу з основної мови'],
      biography: 'Закінчив Дрогобицький державний педагогічний інститут імені Івана Франка у 1984, спеціальність «Англійська мова, німецька мова» (Вчитель англійської та німецької мов).',
      interests: ''
    }, {
      image: '',
	   name: 'Квятківська Марія Йосифівна',
      degree: 'викладач',
      subjects: ['Практика перекладу з основної мови'],
      biography: '',
      interests: 'Перекладознавство'
    }, {
      image: '',
	   name: 'Сливка Любов Зиновіївна',
      degree: 'викладач',
      subjects: ['Практика перекладу з основної мови'],
      biography: 'У 2006 році закінчила Дрогобицький державний педагогічний університет імені Івана Франка за спеціальністю “Педагогіка і методика середньої освіти. Мова та література (англійська)”  та отримала кваліфікацію Магістра педагогічної освіти, викладача англійської мови та літератури). У 2006 році розпочала трудову діяльність на посаді викладача кафедри теорії і практики перекладу в Дрогобицькому державному педагогічному університеті ім. І. Франка.  У 2014 році закінчила аспірантуру, працюю над завершенням кандидатської дисертації. З 2014-го року працюю на посаді викладача кафедри германських мов і перекладознавства. Автор десяти публікацій, з них 9 наукового та 1 навчально-методичного характеру, у тому числі 1 монографія ( у співавторстві), 6 публікацій у  фахових виданнях України та 2 публікації  у провідних наукових виданнях інших держав. ',
      interests: 'перекладознавство, літературознавство'
	}];

})();
