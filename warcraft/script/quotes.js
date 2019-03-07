var quotes = 
    [
        {
            "phrase": "Опять работать?!",
            "signature": "Работник",
            "image_author": "rab"
        }, {
            "phrase": "Не оскверняй меня своим курсором!",
            "signature": "Паладин",
            "image_author": "paladin"
        }, {
            "phrase": "Как говорит наш любимый шеф, за чужой счет пьют и язвенники, и трезвенники.",
            "signature": "Горный король",
            "image_author": "mountainking"
        }, {
            "phrase": "И солнце ярче блещет, И веселей пейзаж, Когда в желудке плещет C2H5OH!",
            "signature": "Алхимик",
            "image_author": "alchemist"
        }, {
            "phrase": "Сгинь, нечистая сила, останься, чистый спирт.",
            "signature": "Алхимик",
            "image_author": "alchemist"
        }, {
            "phrase": "Тампон… Скальпель… Волшебную палочку… Хо! Спирт!",
            "signature": "Целитель",
            "image_author": "priest"
        }, {
            "phrase": "Вскрытие показало: больной спал.",
            "signature": "Целитель",
            "image_author": "priest"
        }, {
            "phrase": "Ну что, лечить или пусть живёт?",
            "signature": "Целитель",
            "image_author": "priest"
        }, {
            "phrase": "Побочные эффекты: сухость во рту, тошнота, рвота, зуд, галлюцинации, потеря рассудка, кома и.. смерть. Ну что-ж, попробуем.",
            "signature": "Целитель",
            "image_author": "priest"
        }, {
            "phrase": "Кто с мечом к нам придёт… тех проще застрелить.",
            "signature": "Стрелок",
            "image_author": "sniper"
        }, {
            "phrase": "Вернусь домой — убью военкома!",
            "signature": "Пехотинец",
            "image_author": "footman"
        }, {
            "phrase": "Кажется, я не накладывала на тебя чары слабоумия.",
            "signature": "Волшебница",
            "image_author": "sorceress"
        }, {
            "phrase": "Хочешь устроить конец света? Нажми кнопку ресет.",
            "signature": "Волшебница",
            "image_author": "sorceress"
        }, {
            "phrase": "Коли доктор сыт — и больному легче.",
            "signature": "Тролль-знахарь",
            "image_author": "witchdoctor"
        }, {
            "phrase": "Человеческий организм на 80 % состоит из жидкости. У некоторых — из тормозной.",
            "signature": "Тролль-знахарь",
            "image_author": "witchdoctor"
        }, {
            "phrase": "Даже если вас съели, у вас есть два выхода.",
            "signature": "Могильщик",
            "image_author": "cryptfiend"
        }, {
            "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?",
            "signature": "DEVMAN",
            "image_author": "devman"
        }
    ];
var rand_index = Math.floor(Math.random() * quotes.length);

phrase_quote = document.getElementById('phrase');
signature_quote = document.getElementById('signature');
image_quote = document.getElementById('image');

phrase_quote.innerHTML = quotes[rand_index]['phrase'];
signature_quote.innerHTML = quotes[rand_index]['signature'];
image_quote.src = "images/" + quotes[rand_index]['image_author'] + ".gif";