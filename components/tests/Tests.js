//Tests.js------Show chosen Test

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";
import '../tests/Tests.css';
import '../scrollToTopBtn/scrollToTopBtn.css';

let WHY_botton_visibility   = null;

let congrFinishTest         = null;

let current_question        = null;

let count_questions_test    = null;

let count_correct_answer    = null;

let list_tests_wrapper      = null;

let count_time_test         = null;

let up                      = null;

const renderHTML =  (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML }});//----------

export function Tests() {


    function upBtn(){            
//console.log('upBtn ======================================');         
        let id_test_up = 'London_bgr';  
//console.log('current_question=',current_question);                    
        let first_test_up = document.getElementById(id_test_up);
//console.log('Test first_test_up=',first_test_up);                 
        first_test_up.scrollIntoView(true);

        let id_test2 = 'ID'+ current_question + currentTest*100 +  '_question_cont';  
        let first_test_2 = document.getElementById(id_test2);
//        first_test_2.scrollIntoView();
//console.log('upBtn first_test_2=',first_test_2);        
//console.log('upBtn first_test_2.prototype=',first_test_2.prototype);                 
//        first_test_2.prototype.scrollIntoView = function(){};
//        window.scrollTo(0, 0);

        up = true;

//            dispatch({  type: 'Tests_UP',  payload: {up:  true}});

//console.log('test up=', up); 

    }//upBtn



    let showCurrentTestWork = null;


    let showHideTest        = useSelector((store) => store.showHideTest);

    let currentTest         = useSelector((store) => store.currentTest);

    congrFinishTest         = useSelector((store) => store.congrFinishTest);

    current_question        = useSelector((store) => store.current_question);

    count_questions_test    = useSelector((store) => store.count_questions_test);

    WHY_botton_visibility   = useSelector((store) => store.WHY_botton_visibility);

    count_correct_answer    = useSelector((store) => store.count_correct_answer);

    list_tests_wrapper      = useSelector((store) => store.list_tests_wrapper);    

    count_time_test         = useSelector((store) => store.count_time_test);   

//    up                      = useSelector((store) => store.up);   

    
    let all_correct_answers = count_correct_answer.reduce(function(a,b){ //sum of array
        return a + b;
    });

//console.log('all_correct_answers =', all_correct_answers);

    let nameCurrentTest     = "TEST" + (currentTest+1);

    let incorrectAnswerTxt = (count_questions_test - all_correct_answers) + ' incorrect answers';

//    let greenRectangle = <div id='correct_answer'></div>;

    let correctAnswerTxt = all_correct_answers + ' correct answers';

    let dispatch = useDispatch();  

//console.log('count_time_test[count_questions_test-1] =', count_time_test[count_questions_test-1]);

    //time of replying
    let pos_symbol = count_time_test[count_questions_test-1].indexOf(':');
    let minutes = count_time_test[count_questions_test-1].substr(0,2);
    minutes = Number(minutes);
    if(minutes === 0) minutes = ''
    else minutes = minutes + 'min';
    let seconds = count_time_test[count_questions_test-1].substr(pos_symbol+1,2);
    seconds = Number(seconds);
    seconds = seconds + 'sec';  
    let allTime =  minutes + ' ' + seconds + ' - all time' ;  

//    allTime = renderHTML(allTime);

    let userResults = ( 
        <>
            <div className='txt_inline'>Your results are as follows:</div>
            <div className='box'>
                <div id="correct_answer"></div> 
                <div className='txt_inline'> {correctAnswerTxt}</div> 
                <div id='incorrect_answer'></div>  
                <div className='txt_inline'> {incorrectAnswerTxt}</div> 

                <div id='all_time_color'></div>  
                <div id='all_time'>  {allTime}</div> 
                <br />
            </div>
        </>
    );


    if(current_question === count_questions_test) 
        congrFinishTest = (<div>Congratulate! You have complited the test. {userResults}        
        If you would like to check any of your answers, you must click on the appropriate "Show me Why" button.</div>
    );        

//console.log('test: currentTest=',currentTest);        
//console.log('test: current_question=',current_question);                    
//console.log('test: count_questions_test=',count_questions_test);        


        useEffect(() => {
            if(showHideTest === 'showHideTest') {
                let id_test1 = 'ID'+ current_question + currentTest*100 +  '_question_cont';  
//console.log('current_question=',current_question);                    
                let first_test = document.getElementById(id_test1);
                if((current_question <= count_questions_test-1) && (list_tests_wrapper === 'hidden') && !up) {
//console.log('test id_test1=',id_test1);                 
                    first_test.scrollIntoView(true);
                }
//console.log('HeaderTestsList up=',up); 
                if(up) upBtn(); //cansel first_test.scrollIntoView(true); and go to London_bgr

            };//if
        })//useEffect

    //prototype.scrollIntoView = function() {};

    let footerBtn = null;


    if(showHideTest === 'showHideTest') {
        showCurrentTestWork = <div> 
            <ShowCurrentTest /> 
            <div id='congrFinishTest'>{congrFinishTest}</div>
        </div>
        footerBtn = 
        <button id='footerBtn' onClick= {upBtn}>
                UP
        </button>;
    }
    else showCurrentTestWork = null;

    return <section id="tests_wrapper">
            {showCurrentTestWork}
            {footerBtn}
    </section>
}//Tests

//        <button id='footerBtn' onClick= {() => dispatch({  type: 'Tests_UP',  payload: {up:  true}})}>
//            <a href="#London_bgr"  onClick= {() => dispatch({  type: 'Tests_UP',  payload: {up:  true}})}>UP</a>