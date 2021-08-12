const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/character', characterRoutes);

// Pseudocode

// var prompt_values = [
//     {
//         value: 'Strongly Agree', 
//         class: 'btn-default btn-strongly-agree',
//         weight: 5
//     },
//     {
//         value: 'Agree',
//         class: 'btn-default btn-agree',
//         weight: 3,
//     }, 
//     {
//         value: 'Neutral', 
//         class: 'btn-default',
//         weight: 0
//     },
//     {
//         value: 'Disagree',
//         class: 'btn-default btn-disagree',
//         weight: -3
//     },
//     { 
//         value: 'Strongly Disagree',
//         class: 'btn-default btn-strongly-disagree',
//         weight: -5
//     }
//     ]

//     function createPromptItems() {

//         for (var i = 0; i < prompts.length; i++) {
//             var prompt_li = document.createElement('li');
//             var prompt_p = document.createElement('p');
//             var prompt_text = document.createTextNode(prompts[i].prompt);
    
//             prompt_li.setAttribute('class', 'list-group-item prompt');
//             prompt_p.appendChild(prompt_text);
//             prompt_li.appendChild(prompt_p);
    
//             document.getElementById('quiz').appendChild(prompt_li);
//         }
//     }

//     createPromptItems();
//     createValueButtons();

//     function findPromptWeight(prompts, group) {
//         var weight = 0;
    
//         for (var i = 0; i < prompts.length; i++) {
//             if (prompts[i].class === group) {
//                 weight = prompts[i].weight;
//             }
//         }
    
//         return weight;
//     }
    
//     // Get the weight associated to the value
//     function findValueWeight(values, value) {
//         var weight = 0;
    
//         cfor (var i = 0; i < values.length; i++) {
//             if (values[i].value === value) {
//                 weight = values[i].weight;
//             }
//         }
    
//         return weight;
//     }

//     $('#submit-btn').click(function () {
//         // After clicking submit, add up the totals from answers
//         // For each group, find the value that is active
//         $('.results').removeClass('hide');
//         $('.results').addClass('show');
        
//         if(total < 0) {
//                 // document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
//     // console.log(document.getElementById('intro-bar').style.width);
//     // document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
//     document.getElementById('results').innerHTML = '<b>You are introverted!</b><br><br>';

// } else {
//     document.getElementById('results').innerHTML = '<b>You are ambiverted!</b><br><br>\
//  //

module.exports = router;