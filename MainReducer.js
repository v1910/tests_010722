//MainReducer.js-----------------------------
// It is the store of the site

import React from "react";

import { useEffect } from 'react';

import { AllTests } from './components/allTests/AllTests.js';

import {CorrectAnswersTests} from './components/correctAnswersTests/CorrectAnswersTests.js';

import {SOCIETYwords} from "./components/societyWords/society_words.js";
import {SPORTwords} from "./components/sportWords/sport_words.js";
import {ACCOMMODATIONwords} from "./components/accommodationWords/accommodation_words.js";
import {APPEARANCEwords} from "./components/appearanceWords/appearance_words.js";
import {PREPOSITIONSwords} from "./components/prepositionsWords/prepositions_words.js";
import {NATUREwords} from "./components/natureWords/nature_words.js";
//import {Jokes} from "./components/jokes/Jokes.js";
//import { insertAfter } from "./components/insertAfter/InsertAfter.js";

let workAllTest = AllTests(); // read all tests
//let workTest = workAllTest[0].length; // amount of questions in current test

const axios = require('axios');

let initialStore = 

{
	//initialisation -----------
    state_edit: true,
    stateTests: false,
    stateWords: false,
    stateListen: false,
    statePhrases: false,
    stateJokes: false,
    itemMenu1: "",
    itemMenu2: "",
    all_input_sections: {
                            all_input_tests: 0,
                            all_input_words: 0,
                            all_input_listen: 0,
                            all_input_phrases: 0,
                            all_input_jokes: 0,
                            all_input_statistics: 0
                        }, // all inputs in every section
	 
//	 all_words: [], // array of all words
// 	 jokes_arr: [], // jokes array

//  	 nTests:  0, // quantity of tests
  	 

//	 idioms_files:  ["JOB","HOT","MIX"], // idioms files
  	
	/* initialize variables */
	 count:  0, 
	 clearTime:  0, 
	 seconds:  0,
	 minutes:  0,
	 hours:  0, 
	 clearState:  0, 
	 secs:  0,
	 mins:  0,
	 gethours:  0, 

    // header ----------------
    visibContentShortMenu:  {display: 'none'}, // don't show the window of the short menu
    imgShortMenuFile:       true, //show Group305.svg, otherwise Group1011.svg (false)

	// tests -----------------
     showHideTest: null,

     list_tests_wrapper: 'hidden', // hide or show (visible) list_tests_wrapper

     state_reply: [], // state of reply

     state_button_close: [], // state of button close

     currentTest:  0, // the number of the current test

	 countDownDate:  new Date().getTime(), // start time for the chosing test

	 countDownDate_qst:  new Date().getTime(), // start time for the chosing question

  	 count_time_question:  null,  // all time for the current question

  	 count_time_test:  null, // all time for the current test

	 current_question:  0, // current question  ( 0  -  first)

	 X_setInterval:  0, // id of clearInterval

	 tests:  workAllTest, // read all tests

	 nTests:  workAllTest.length, // amount of all tetsts

	 cAnswers: CorrectAnswersTests(),  // read all correct answers
	
	 selected_answer: -1,  // number of the selected answer in the current question

	 state_tests: [], // test state

     state_green_red: [], //state of red or green color of an answer

     state_count_time_test: [], //state of count time test

     state_count_time_question: [], // state of count time question

     correct_answer: -1,  // number of the correct answer in the current question  

     firstTimer: null,  // = null (start timer, other - stop)

     state_test: null, // state of every question: true -  current question. false

     WHY_botton_visibility: [], //{visibility: 'hidden'}, visibility of WHY button

     congrFinishTest: null,  // the phrase 'Congratulate you' after  finishing the test. At first it is null.

     setYellowAnswer: [],  //only active question can have yellow color with cover cursor

               
     // words -----------------
     all_words: [SOCIETYwords(),SPORTwords(),ACCOMMODATIONwords(),APPEARANCEwords(),
                 PREPOSITIONSwords(),NATUREwords()], // array of all words

     showHideWords:                             null,  //hide words in Words.js

     words_wrapper:                             null,

     count_pick_button_show_answer:             0,

	 work_arr:                                  [], // array of random numbers

	 count_pick_button_show_word:               0,  //count of picking button_show_word

	 count_pick_button_show_description:        0, //count of picking button_show_description

	 current_number_word:                       0,  //current number word

	 current_number_word_group:                 0, // current word group (SOCIETY)

	 count_pick_button_show_answer:             0,

	 nWords:                                    0, // quantity of words

     words_files:  ["SOCIETY","SPORT","ACCOMMODATION", "APPEARANCE", "PREPOSITIONS", "NATURE"], // words files

	 words:                                     [], // words array

     state_button_next_descr_color:             'white',

     list_words_wrapper:                        'hidden', //hide (show) words list

     state_label_yes_no_word_style:             {color:  'green', visibility: 'hidden'},

     input_input_word_value:                    '',

     button_show_descr_style:                   "color: white",

     button_show_words_style:                   "color: white",

     state_label_next_descr_value:               '',

     state_input_word_value:                     '',  

     state_label_yes_no_word_value:              '',

     state_tate_label_answer_value:              '',

     state_label_answer_visibility:              'hide',

     state_button_show_words_color:              'white',

     state_label_show_words_value:               '',

     state_label_show_words_visibility:          'hide',

     state_label_show_transcription_visibility:  'hide',

     state_label_show_transcription_value:       '',

     state_button_next_word_value:               'Next Word ' + ' 1' +'/'+ '0',

     state_label_answer_value:                   '', // value of answer

     checkStyle:                                 {backgroundColor: 'rgba(154,136,112,0.5)'},

     up:                                         false, //false: button UP is not active, true: other

     showHideWordsInstruction:                   false, // false: button hides instructions, true: other
     

	// listen --------------

     showHideListen:                            null,

	 nAudio:                                    4,  // amount of all audio files

     currentAudio:                              1, //current audio file

     list_listen_wrapper:                       'hidden',  // hide list of audio list

     showHideListenText:                        false, //hide text of current audio-file

     content_audio:                             null, //text audio content

     audioTitleName:                            ['Mr. Knowall', 'The Thee Fat Women of Antibes', 'The Point of Honour', 'The Escape'], // audio title name

     
    // phrases -----------------

    showHidePhrases:                            null,  //do not show Phrases

    currentPhrases:                             "Greatings", //current Phrases file   "/home",

    list_phrases_wrapper:                       'hidden',

    phrases_collections:                        ["Greatings","PhrasalVerbs","Presentation", "Spring", "Vacation"], // phrases collections of DB

    phrases:                                    null,

    phrases_wrapper_visibility:                 {display: 'none'},


	// jokes -----------------

     showHideJokes:                             null,

     currentJokes:                              "Jokes",

     jokes:                                     null,
	

    // statistics ------------

    showHideStatistics:                         null,

    currentStatistics:                          "Statistics", // statistics collection

    thanksStatistics:                           null,//Thank you!  after sending form

    statistics_wrapper_visibility:              {visibility: 'visible'},

    statistics_form_visibility:                 {display: 'block'}, // form visibility


    all_input_statisticsDB:                     null,

    all_input_statistics:                       null,

    //Footer --------------

    mailFormStyle:                              {display: 'none'}, // mailForm visibility

    inputEmailValue:                            null,

    errorEmailText:                             null, //visibility sending the letter

    styleSendOK:                                {display: 'none'},  

    opacityOK:                                  1

}; //initialStore  

let workInitialStore = initialStore;

initialStore.count_questions_test = workAllTest[workInitialStore.currentTest].length; // amount of questions in current test

//initialStore.nJokes = workInitialStore.jokes_arr.length // amount of all jokes

initialStore.count_correct_answer = Array(initialStore.count_questions_test).fill(0);  // count of correct answers for every question
    
initialStore.count_time_question = Array(initialStore.count_questions_test).fill('00:00');  // all time for the current question
 
initialStore.count_time_test = Array(initialStore.count_questions_test).fill('00:00'); // all time for the current test

initialStore.state_test = Array(initialStore.count_questions_test).fill(true); // state of every question: true -  current question. false

initialStore.state_test[0] = false; 

initialStore.state_green_red = Array(initialStore.count_questions_test).fill([-1,-1]);// state of every question: green, 
                                                            //red: [user answer, correct answer] for every question
initialStore.state_button_close = Array(initialStore.count_questions_test).fill(0);// state of close button                                                             

initialStore.state_reply = Array(initialStore.count_questions_test).fill(' ');// state of close button  

initialStore.WHY_botton_visibility = Array(initialStore.count_questions_test).fill({display: 'none'});// visibility of WHY

initialStore.setYellowAnswer = Array(initialStore.count_questions_test).fill('no_li_class no_pointer');// it is the class with yellow color (cover pointer)


////console.log('MainReducer:--- init:  initialStore.state_reply=',initialStore.state_reply);  

function MainReducer(state = initialStore, action){
//    console.log('MainReducer:--- action=',action);
    
//    console.log('MainReducer: state=',state);
//    console.log('MainReducer: initialStore.state_green_red=',initialStore.state_green_red);

    let payload = action.payload;

    switch(action.type) {
//================================================================================        
        // HEADER----------------------
        case 'contShortMenu':       
//console.log(' MainReducer: contShortMenu: payload.visibContentShortMenu=',payload.visibContentShortMenu);                
//console.log(' MainReducer: contShortMenu: payload.imgShortMenuFile=',payload.imgShortMenuFile);
            return {
                ...state,
                visibContentShortMenu:    payload.visibContentShortMenu,
                imgShortMenuFile:         payload.imgShortMenuFile
            } 
        // TESTS----------------------
        case 'HeaderTests_mouseEnterList':       
//console.log('1 MainReducer: HeaderTests_mouseEnterList: payload.list_tests_wrapper=',payload.list_tests_wrapper);                
            return {
                ...state,
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test,
                list_tests_wrapper:     payload.list_tests_wrapper, 
                selected_answer:        payload.selected_answer, 
                correct_answer:         payload.correct_answer, 
                current_question:       payload.current_question,
                count_correct_answer:   payload.count_correct_answer, 
            }
            

        case 'HeaderTests_mouseLeaveList':       
            return {
                ...state,
                list_tests_wrapper: payload.list_tests_wrapper
            }

        case 'HeaderTestsList':       
//console.log('1 MainReducer: HeaderTestsList: payload.all_input_sections=',payload.all_input_sections);    
            axios.post('/postAllInsertSections', {
                sections: payload.all_input_sections
            })                                     
//console.log('2 MainReducer: HeaderTestsList: payload.all_input_sections=',payload.all_input_sections);                
            return {
                ...state,
                currentTest:        payload.currentTest, 
                showHideTest:       payload.showHideTest,
                list_tests_wrapper: payload.list_tests_wrapper,
                countDownDate:      payload.countDownDate, // start time for the chose test
                countDownDate_qst:  payload.countDownDate_qst, // start time for the chose question
                state_test:         payload.state_test,
                state_green_red:    payload.state_green_red,
                firstTimer:         null,
                showHideTests:      payload.showHideTests,
                showHideWords:      payload.showHideWords,
                showHideListen:     payload.showHideListen,
                showHidePrases:     payload.showHidePrases,
                showHideJokes:      payload.showHideJokes,
                showHideStatistics: payload.showHideStatistics,
                prases:             payload.prases,
                phrases_wrapper_visibility: payload.phrases_wrapper_visibility,
                WHY_botton_visibility: payload.WHY_botton_visibility,
                congrFinishTest:    payload.congrFinishTest,
                up:                 payload.up,
                all_input_sections: payload.all_input_sections
            }

        case 'ShowCurrentTest_handleChange':       
            return {
                ...state,
                state_green_red:      payload.state_green_red, 
                state_tests:          payload.state_test,
                current_question:     payload.current_question,
                selected_answer:      payload.selected_answer,
                count_correct_answer: payload.count_correct_answer,
                firstTimer:           payload.firstTimer,
                countDownDate_qst:    payload.countDownDate_qst,
                up:                   payload.up
            }
            
        case 'ShowCurrentTest_startWatch4':   
            return {
                ...state,            
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test
            }

        case 'ShowCurrentTest_startWatch4_2':   
            return {
                ...state,                     
                X_setInterval:          payload.X_setInterval,
                firstTimer:             payload.firstTimer
            }            

            case 'ShowCurrentTest':   
            return {
                ...state,                     
                WHY_botton_visibility: payload.WHY_botton_visibility
            }            


        case 'footerQuestion_why':       
            return {
                ...state,            
                state_reply:        payload.state_reply,
                state_button_close: payload.state_button_close
            }

        case 'footerQuestion_answer_close':       
            return {
                ...state,            
                state_reply:        payload.state_reply,
                state_button_close: payload.state_button_close,
                showHideTest:       payload.showHideTest
            }

        case 'QuestionTest':       
            return {
                ...state,            
                WHY_botton_visibility:   payload.WHY_botton_visibility 
            }

        case 'Test_UP':       
console.log('Test_UP: up=',payload.up);        
            return {
                ...state,            
                up:   payload.up 
            }

        case 'header_testDispatch':       
console.log('MainReducer: header_testDispatch: currentTest=',payload.currentTest);        
            return {
                ...state,            
                currentTest:   payload.currentTest 
            }            
            
//================================================================================   
        //WORDS--------------------------

        case 'HeaderWords_mouseEnterList_mouseLeaveList': 
                
            return {
                ...state,
                words_wrapper:      payload.words_wrapper,
                list_words_wrapper: payload.list_words_wrapper
            };       
            
        case 'HeaderWordsList_noVisibilityWords':                
            return {
                ...state,
                list_words_wrapper:  payload.list_words_wrapper
            };                     

        case 'HeaderWordsList':                
            axios.post('/postAllInsertSections', {
                sections: payload.all_input_sections
            })       
//console.log('MainReducer: HeaderWordsList: ShowHideStatistics=',payload.ShowHideStatistics)        
            return {
                ...state,
                list_words_wrapper:                         payload.list_words_wrapper,
                count_pick_button_show_word:                payload.count_pick_button_show_word,
                count_pick_button_show_description:         payload.count_pick_button_show_description,
                current_number_word:                        payload.current_number_word,
                count_pick_button_show_answer:              payload.count_pick_button_show_answer,
                current_number_word_group:                  payload.current_number_word_group,
                state_button_next_descr_color:              payload.state_button_next_descr_color,
                state_label_next_descr_value:               payload.state_label_next_descr_value,
                state_input_word_value:                     payload.state_input_word_value,
                state_label_yes_no_word_value:              payload.state_label_yes_no_word_value,
                state_label_yes_no_word_style:              payload.state_label_yes_no_word_style,
                state_tate_label_answer_value:              payload.state_tate_label_answer_value,
                state_label_answer_visibility:              payload.state_label_answer_visibility,
                state_button_show_words_color:              payload.state_button_show_words_color,
                state_label_show_words_value:               payload.state_label_show_words_value,
                state_label_show_words_visibility:          payload.state_label_show_words_visibility,
                state_label_show_transcription_value:       payload.state_label_show_transcription_value,
                state_button_next_word_value:               payload.state_button_next_word_value,
                work_arr:                                   payload.work_arr,
                input_input_word_value:                     payload.input_input_word_value,
                showHideTest:                               payload.showHideTest,
                showHideWords:                              payload.showHideWords,                
                showHideListen:                             payload.showHideListen,                                                                                  
                showHidePhrases:                            payload.showHidePhrases,
                showHideJokes:                              payload.showHideJokes,
                ShowHideStatistics:                         payload.ShowHideStatistics,
                statistics_wrapper_visibility:              payload.statistics_wrapper_visibility,
                phrases_wrapper_visibility:                 payload.phrases_wrapper_visibility,
                checkStyle:                                 payload.checkStyle,
                all_input_sections:                         payload.all_input_sections
            };         

        case 'ShowWordTest_showDescr':  
//console.log('MainReducer: ShowWordsTest_showDescr: payload.count_pick_button_show_description=',payload.count_pick_button_show_description)                      
//console.log('MainReducer: ShowWordsTest_showDescr: payload.state_button_next_descr_color=',payload.state_button_next_descr_color)
//console.log('MainReducer: ShowWordsTest_showDescr: payload.state_label_next_descr_value=',payload.state_label_next_descr_value)
            return {
                ...state,
                state_button_next_descr_color:      payload.state_button_next_descr_color,
                state_label_next_descr_value:       payload.state_label_next_descr_value,
                count_pick_button_show_description: payload.count_pick_button_show_description,           
                work_arr:                           payload.work_arr,
                nWords:                             payload.nWords
            };                                              

        case 'ShowWordsTest_input_input_word':                
            return {
                ...state,
                input_input_word_value:         payload.input_input_word_value,
                work_arr:                       payload.work_arr,
                state_label_next_descr_value:   payload.state_label_next_descr_value,
                state_button_next_word_value:   payload.state_button_next_word_value,
                nWords:                         payload.nWords,
                checkStyle:                     payload.checkStyle
            };                                                                  

            
        case 'ShowWordsTest_button_input_word':                
//console.log('MainReducer: state_label_yes_no_word_value=',payload.state_label_yes_no_word_value)         
            return {
                ...state,
                state_label_yes_no_word_value:  payload.state_label_yes_no_word_value,
                state_label_yes_no_word_style:  payload.state_label_yes_no_word_style,
                work_arr:                       payload.work_arr,
                state_label_next_descr_value:   payload.state_label_next_descr_value,
                nWords:                         payload.nWords
            };    

        case 'ShowWordsTest_showAnswer':                
//console.log('MainReducer: state_button_next_word_value=',payload.state_button_next_word_value)         
            return {
                ...state,
                state_label_answer_value:       payload.state_label_answer_value,
                state_label_answer_visibility:  payload.state_label_answer_visibility,
                work_arr:                       payload.work_arr,
                state_label_next_descr_value:   payload.state_label_next_descr_value,
                nWords:                         payload.nWords,
                state_button_next_word_value:   payload.state_button_next_word_value
            };                                                                           
          

        case 'ShowWordsTest_showWord2':                
//console.log('MainReducer: ShowWordsTest_showWord2: state_label_show_words_value=',payload.state_label_show_words_value)        
            return {
                ...state,
                state_label_show_words_value:       payload.state_label_show_words_value,
                state_button_show_words_color:      payload.state_button_show_words_color,
                state_label_show_words_visibility:  payload.state_label_show_words_visibility,
                count_pick_button_show_word:        payload.count_pick_button_show_word,
                state_button_next_word_value:       payload.state_button_next_word_value,        
                work_arr:                           payload.work_arr,
                state_label_next_descr_value:       payload.state_label_next_descr_value,
                nWords:                             payload.nWords
            };    

        case 'ShowWordsTest_showTranscription':                
//console.log('MainReducer: ShowWordsTest_showTranscription: state_label_next_descr_value=',payload.state_label_next_descr_value);        
            return {
                ...state,
                state_label_show_transcription_value:       payload.state_label_show_transcription_value,
                state_label_show_transcription_visibility:  payload.state_label_show_transcription_visibility,
                nWords:                                     payload.nWords,
                state_label_next_descr_value:               payload.state_label_next_descr_value,
                work_arr:                                   payload.work_arr            
            };               

        case 'ShowWordsTest_button_next_word':                
//console.log('MainReducer: ShowWordsTest_button_next_word: state_button_next_word_value=',payload.state_button_next_word_value)                
            return {
                ...state,
                state_button_next_descr_color:                  payload.state_button_next_descr_color,
                state_label_next_descr_value:                   payload.state_label_next_descr_value,
                state_input_word_value:                         payload.state_input_word_value,       
                state_label_yes_no_word_value:                  payload.state_label_yes_no_word_value,
                state_label_answer_value:                       payload.state_label_answer_value,
                state_label_answer_visibility:                  payload.state_label_answer_visibility,
                state_button_show_words_color:                  payload.state_button_show_words_color,
                state_label_show_words_value:                   payload.state_label_show_words_value,
                state_label_show_words_visibility:              payload.state_label_show_words_visibility,    
                state_label_show_transcription_value:           payload.state_label_show_transcription_value,
                state_button_next_word_value:                   payload.state_button_next_word_value,
                input_input_word_value:                         payload.input_input_word_value,
                button_show_descr_style:                        payload.button_show_descr_style,
                button_show_words_style:                        payload.button_show_words_style,
                current_number_word:                            payload.current_number_word,
                work_arr:                                       payload.work_arr,
                nWords:                                         payload.nWords
                        
            };     


        case 'ShowWordTest_instructions':                
            return {
                ...state,
                showHideWordsInstruction:       payload.showHideWordsInstruction,    
            };                  

//================================================================================
        //LISTEN--------------------------

        case 'HeaderListen_mouseEnterList':                
//console.log('MainReducer: HeaderListen_mouseEnterList: payload.all_input_sections=',payload.all_input_sections);        
            return {
                ...state,
                list_listen_wrapper: payload.list_listen_wrapper
            };               

        case 'HeaderListen_mouseLeaveList':                
//console.log('MainReducer: HeaderListen_mouseLeaveList: state_label_next_descr_value=',payload.list_listen_wrapper);        
            return {
                ...state,
                list_listen_wrapper: payload.list_listen_wrapper
            };                           

        case 'HeaderListenList':                
            axios.post('/postAllInsertSections', {
                sections: payload.all_input_sections
            })     
//console.log('MainReducer: HeaderListenList: state_label_next_descr_value=',payload.showHideListen);        
            return {
                ...state,
                currentAudio:           payload.currentAudio, 
                showHideTest:           payload.showHideTest,
                showHideWords:          payload.showHideWords,  
                showHideListen:         payload.showHideListen, 
                showHidePhrases:        payload.showHidePhrases,
                showHideJokes:          payload.showHideJokes,
                ShowHideStatistics:     payload.ShowHideStatistics,
                showHideListenText:     payload.showHideListenText,
                phrases:                payload.phrases,
                list_tests_wrapper:     payload.list_tests_wrapper,
                list_words_wrapper:     payload.list_words_wrapper,
                statistics_wrapper_visibility: payload.statistics_wrapper_visibility,
                phrases_wrapper_visibility:    payload.phrases_wrapper_visibility,
                all_input_sections:     payload.all_input_sections
            };               

        case 'ShowCurrentListen':                
//console.log('MainReducer: ShowCurrentListen: showHideListenText=',payload.showHideListenText);        
            return {
                ...state,
                showHideListenText: payload.showHideListenText
            };                                       

        case 'ShowCurrentListenTextFile':                
//console.log('MainReducer: ShowCurrentListenTextFile: content_audio=',payload.content_audio);        
            return {
                ...state,
                content_audio: payload.content_audio
            };                                               

//================================================================================    
        //PHRASES--------------------------

        case 'HeaderPhrases_mouseEnterList':                
//console.log('MainReducer: HeaderPhrases_mouseEnterList: list_phrases_wrapper: =',payload.list_phrases_wrapper);        
            return {
                ...state,
                list_phrases_wrapper: payload.list_phrases_wrapper
            };               

        case 'HeaderPhrases_mouseLeaveList':                
//console.log('MainReducer: HeaderPhrases_mouseLeaveList: list_phrases_wrapper=',payload.list_phrases_wrapper);        
            return {
                ...state,
                list_phrases_wrapper: payload.list_phrases_wrapper
            };                           

        case 'HeaderPhrasesList':  
            axios.post('/postAllInsertSections', {
                sections: payload.all_input_sections
            }) 

            axios.get('/get'+payload.currentPhrases).then(resp => {

                payload.phrases = resp.data;
    //            console.log('MainReducer: HeaderPhrasesList: payload.phrases=',payload.phrases);                 
            });

//console.log('MainReducer: HeaderPhrasesList: showHideListen=',payload.showHideListen);        
//console.log('MainReducer: HeaderPhrasesList: currentPhrases=',payload.currentPhrases); 

            return {
                ...state,
                currentPhrases:             payload.currentPhrases, 
                showHideTest:               payload.showHideTest,
                showHideWords:              payload.showHideWords,  
                showHideListen:             payload.showHideListen,                                                                                  
                showHidePhrases:            payload.showHidePhrases,   
                showHideJokes:              payload.showHideJokes, 
                ShowHideStatistics:         payload.ShowHideStatistics,  
                phrases_wrapper_visibility: payload.phrases_wrapper_visibility,                                                                            
                list_tests_wrapper:         payload.list_tests_wrapper,
                list_words_wrapper:         payload.list_words_wrapper,
                list_listen_wrapper:        payload.list_listen_wrapper,
                phrasesTitle:               payload.phrasesTitle,
                statistics_wrapper_visibility: payload.statistics_wrapper_visibility,
                all_input_sections:         payload.all_input_sections
            };               

        case 'ShowCurrentPhrases':                
//console.log('MainReducer: ShowCurrentPhrases: phrases=',payload.phrases);        
            return {
                ...state,
                phrases: payload.phrases
            };                           

//================================================================================  
        //JOKES--------------------------

        case 'ShowCurrentJokes':                
//console.log('MainReducer: ShowCurrentJokes: jokes=',payload.jokes);        
            return {
                ...state,
                jokes: payload.jokes
            };                                   

        case 'HeaderJokes_mouseEnterList':                
//console.log('MainReducer: HeaderJokes_mouseEnterList: jokes=',payload.list_jokes_wrapper);        
            return {
                ...state,
                list_jokes_wrapper: payload.list_jokes_wrapper
            };                                              

        case 'HeaderJokes_mouseLeaveList':                
//console.log('MainReducer: HeaderJokes_mouseLeaveList: jokes=',payload.list_jokes_wrapper);        
            return {
                ...state,
                list_jokes_wrapper: payload.list_jokes_wrapper
            }; 
            
        case 'HeaderJokes':
            axios.post('/postAllInsertSections', {
                sections: payload.all_input_sections
            })                            
//console.log('MainReducer: HeaderJokes: showHideJokes=',payload.showHideJokes);        
            return {
                ...state,
                showHideTest:           payload.showHideTest,
                showHideWords:          payload.showHideWords,  
                showHideListen:         payload.showHideListen,                                                                                  
                showHidePhrases:        payload.showHidePhrases,    
                showHideJokes:          payload.showHideJokes,
                ShowHideStatistics:     payload.ShowHideStatistics,
                list_tests_wrapper:     payload.list_tests_wrapper,
                list_words_wrapper:     payload.list_words_wrapper,
                list_listen_wrapper:    payload.list_listen_wrapper,
                phrases:                payload.phrases,
                statistics_wrapper_visibility: payload.statistics_wrapper_visibility,
                phrases_wrapper_visibility:    payload.phrases_wrapper_visibility,
                all_input_sections:     payload.all_input_sections
            }; 

//================================================================================ 
        //STATISTICS--------------------------

        case 'HeaderStatistics':                
//console.log('MainReducer: HeaderStatistics: showHideStatistics=',payload.showHideStatistics);             
            axios.post('/postAllInsertSections', {
                sections: payload.all_input_sections
            })       
            return {
                ...state,
                showHideTest:           payload.showHideTest,
                showHideWords:          payload.showHideWords,  
                showHideListen:         payload.showHideListen,                                                                                  
                showHidePhrases:        payload.showHidePhrases,    
                showHideJokes:          payload.showHideJokes,
                showHideStatistics:     payload.showHideStatistics,
                list_tests_wrapper:     payload.list_tests_wrapper,
                list_words_wrapper:     payload.list_words_wrapper,
                list_listen_wrapper:    payload.list_listen_wrapper,
                phrases:                payload.phrases,
                statistics_wrapper_visibility: payload.statistics_wrapper_visibility,
                all_input_sections:     payload.all_input_sections,
                phrases_wrapper_visibility: payload.phrases_wrapper_visibility
            }; 
            
        case 'Statistics_statistics':                
//console.log('MainReducer: Statistics: statistics=',payload.statistics);        
            return {
                        ...state,
                        statistics:             payload.statistics
                    }; 

        case 'ShowCurrentStatisyics_thankYou':                
//console.log('MainReducer: ShowCurrentStatisyics_thankYou: thanksStatistics=',payload.thanksStatistics);        
//console.log('MainReducer: ShowCurrentStatistics_thankYou: statistics_form_visibility=',payload.statistics_form_visibility);        
            return {
                        ...state,
                        thanksStatistics:           payload.thanksStatistics,
                        statistics_form_visibility: payload.statistics_form_visibility
                    };                     

        case 'Statistics_thanksStatistics':                
//console.log('MainReducer: Statistics_thanksStatistics: thanksStatistics=',payload.thanksStatistics);        
            return {
                        ...state,
                        thanksStatistics:           payload.thanksStatistics
                    };                     

        case 'Statistics_AllInsertSectionsDB':                
//console.log('MainReducer: Statistics_AllInsertSections: all_input_sectionsDB=',payload.all_input_sectionsDB);        
            return {
                        ...state,
                        all_input_sections:           payload.all_input_sections
                    };                     
          

//================================================================================ 
        //FOOTER
        case 'Footer':                
            return {
                        ...state,
                        mailFormStyle:           payload.mailFormStyle
                    };                     
        
        case 'FooterEmail':                
console.log('FooterEmail: contactEmail=',payload.contactEmail);              
console.log('FooterEmail: contactComment=',payload.contactComment); 
            axios.post('/FooterEmail', {
                contactEmail:           payload.contactEmail,
                contactComment:         payload.contactComment                
            })                  

            return {
                        ...state,
                        contactEmail:           payload.contactEmail,
                        contactComment:         payload.contactComment,
                        mailFormStyle:          payload.mailFormStyle,
                        styleSendOK:            payload.styleSendOK
//                        opacityOK:              payload.opacityOK
                    };                     

        case 'footerOpacityOK':                
console.log('footerOpacityOK: payload.styleSendOK=',payload.styleSendOK);        
            return {
                        ...state,
                        styleSendOK:           payload.styleSendOK
                    };                

        case 'footerInputEmail':     
//console.log('MainReducer: payload.errorEmailText=',payload.errorEmailText)
            if(payload.errorEmailText !== null) document.getElementById('inputEmail').focus();
            return {
                        ...state,
                        inputEmailValue:           payload.inputEmailValue,
                        errorEmailText:            payload.errorEmailText
                    };                

        default:
            return state;

    } //switch

    return state;   
   
//return null;
}; //end of MainReducer---------------------------


export default MainReducer;




