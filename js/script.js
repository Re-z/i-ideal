document.addEventListener('DOMContentLoaded', () => {
   
    function printQuestions() {
        let questions = [
            'Какой ты? (красивый, умный, сильный? Опиши себя словами)',
            'Какое у тебя окружение, с кем ты общаешься?',
            'Как к тебе относятся мужчины?',
            'Как ты относишься к мужчинам?',
            'Как к тебе относятся женщины?',
            'Как ты относишься к женщинам?',
            'Как ты выглядишь внешне? Какая у тебя физическая форма?',
            'Как ты реагируешь на конфликты?',
            'Как ты переносишь плохое настроение?',
            'Какой ты в радости?',
            'Что тебе нравится в этой жизни',
            'Как ты предпочитаешь отдыхать?',
            'Какие у тебя отношения с родителями?',
            'Как ты ведешь себя в обществе незнакомых людей?',
            'Какой у тебя примерный распорядок дня? Во сколько ты встаешь?'
            //'',
            //'',
            //'',
            //'',
            //'',
        ]
        //target to print html
        let box = document.getElementById('questions-wrapper');
        //string, that holds results of foreach looping
        let output = '';

        questions.forEach( question => {
            let template = `<p>${question}</p>`
            output += template
        })


        box.innerHTML = output;
    }
    printQuestions()


})