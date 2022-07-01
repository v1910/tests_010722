//Header.js---------------------------

import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {HeaderTests} from "../headerTests/HeaderTests.js";
import {HeaderWords} from "../headerWords/HeaderWords.js";
import {HeaderListen} from "../headerListen/HeaderListen.js";
import {HeaderPhrases} from "../headerPhrases/HeaderPhrases.js";
import {HeaderJokes} from "../headerJokes/HeaderJokes.js";
import {HeaderStatistics} from "../headerStatistics/HeaderStatistics.js";

import  "./Header.css";

import testsHtml      from "../tests/tests.html";
import wordsHtml      from "../words/words.html";
import listenHtml     from "../listen/listen.html";
import phrasesHtml    from "../phrases/phrases.html";
import jokesHtml      from "../jokes/jokes.html";
import statisticsHtml from "../statistics/statistics.html";

import logoTests      from "./LogoGroup33.svg";
import backArrowBlue  from "./BackArrowBlue.svg";
import group411_Head  from "./Group411_Head.svg";
import group412_Head  from "./Group412.svg";
import group414_Head  from "./Group414.svg";
import group70_Head   from "./Group70.svg";
import group413_Head  from "./Group413.svg";
import group240_Head  from "./Group240.svg";
import group241_Head  from "./Group241.svg";
import group416_Head  from "./Group416.svg";
import shortMenu      from "./Group305.svg"; //file for opening the short main menu
import shortMenuOut   from "./Group1011.svg";

// variales for different screen sizes
let screenSize               = window.innerWidth; //the size of the current screen
const tabletMaxScreenSize    = 880;  // max size of tablet screen
let htmlTablet               = null;
let menuMainPage             = null;
let contentShortMenu         = null;
let visibContentShortMenu    = null;
let imgShortMenuFile         = null;
let showNoneImgShortMenuFile = null;
let shortMenuOnOut           = null;


export function  Header() {  
//  console.log('Header---');

  function currentTestDispatch(currentTest) {
//    dispatch({type: 'header_testDispatch', 
//                  payload: {currentTest: currentTest-1}
//                  })
    
  }// end of currentTestDispatch(currentTest) ---

  let footerSmallBigScreen;

  let dispatch                 = useDispatch();

  visibContentShortMenu    = useSelector((store) => store.visibContentShortMenu); 
  imgShortMenuFile         = useSelector((store) => store.imgShortMenuFile); 
//console.log('Header: imgShortMenuFile=',imgShortMenuFile);

  if(imgShortMenuFile !== true) {
    shortMenuOnOut           = shortMenuOut; //file for closing the short main menu
    showNoneImgShortMenuFile = {display: 'none'};
  } else {
    shortMenuOnOut           = shortMenu; //file for showing the short main menu
    showNoneImgShortMenuFile = {display: 'block'};
  } 

  
  contentShortMenu = 
    <div id='contShortMenu' style={visibContentShortMenu}>
      <ul>
        <li><a href={testsHtml}>Tests <img src={backArrowBlue} /></a>
          <ul id='contMenuTest'>
            <li><a href="#" onClick=''>Test1 (B1)</a></li>
            <li><a href="#">Test2 (B1)</a></li>
            <li><a href="#">Test3 (B2)</a></li>
            <li><a href="#">Test4 (B2)</a></li>
            <li><a href="#">Test5 (B2)</a></li>
          </ul>
        </li>
        <li><a href={wordsHtml}>Words <img src={backArrowBlue} /></a>
          <ul>
            <li><a href="#">Society</a></li>
            <li><a href="#">Sport</a></li>
            <li><a href="#">Accommodation</a></li>
            <li><a href="#">Appearance</a></li>
            <li><a href="#">Prepositions</a></li>
            <li><a href="#">Nature</a></li>                
          </ul>            
        </li>
        <li><a href={listenHtml}>Listen <img src={backArrowBlue} /></a>
          <ul id='contMenuTest'>
            <li><a href="#">Story1</a></li>
            <li><a href="#">Story2</a></li>
            <li><a href="#">Story3</a></li>
            <li><a href="#">Story4</a></li>
          </ul>            
        </li>
        <li><a href={phrasesHtml}>Phrases <img src={backArrowBlue} /></a>
          <ul id='contMenuTest'>
            <li><a href="#">Greatings</a></li>
            <li><a href="#">Phrasalverbs</a></li>
            <li><a href="#">Presentation</a></li>
            <li><a href="#">Spring</a></li>
          </ul>            
        </li>
        <li><a href={jokesHtml}>Jokes</a></li>
        <li><a href={statisticsHtml}>Statistics</a></li>
      </ul>
      <div id='loginButton'>Login</div>      
  </div>;


  let currentPhrasesServer = null;

  let currentPhrases  = useSelector((store) => store.currentPhrases);

  if(currentPhrases !== null) {
    currentPhrasesServer = '/get' + currentPhrases;
  } else currentPhrasesServer = '/home';
  //console.log('Phrases: currentPhrasesServer=', currentPhrasesServer);


  const axios = require('axios');

  async function makeGetRequest() {

    let res = await axios.get(currentPhrasesServer);

    let data = res.data;
  //  console.log('Phrases: currentPhrasesServer data=', data);

    dispatch({type: 'ShowCurrentPhrases', 
      payload: {
          phrases: data
      }
    })
    
  }

  console.log('screenSize=',screenSize);

  //screenSize = 800;

  if (screenSize < tabletMaxScreenSize) { // it's less a big screen
    htmlTablet = 
    <section id='section1MainPage_880'>
      <div id='group411_Head'>
          <img  id='imgGroup411Head' src={group411_Head} />
      </div> 
      <div className='contTitleText_880'>
        <div id='titleText'>
          Test your English level online
        </div>  
        <div id='titleTextDetail'>
          Here you can test and improve your knowledge 
          of English grammar, increase your vocabulary, enrich your speech
          with phraseological verbs, improve your understanding of English 
          speech by listening to novels and cheer up by reading jokes.
        </div> 
        <button id='buttonStartTest'>Start The Test</button> 
      </div>         
    </section>
    menuMainPage =  // for a little screen
    <nav id='contMainMenu_235'>
      <p id='contLogo'><img src={logoTests}/></p>
      <div id='shortMenu'>
        <img id='imgShortMenu' 
            onClick= {() => dispatch({  type: 'contShortMenu', 
                       payload: {visibContentShortMenu: showNoneImgShortMenuFile,
                                 imgShortMenuFile: !imgShortMenuFile
                                }
                                    })
                     }       
            src={shortMenuOnOut} />
      </div>
      {contentShortMenu}
    </nav>        
    /*footer for small screen ----vvvvvvvvv*/  
    footerSmallBigScreen =             
      <>
        <div id='menuFooter'>
          <div id='TestsFooterMenu'>
            <div id='TestsFooterMenuMain'>
              Tests
            </div>
            <div id='Test1FooterMenu' className='footerMenu'>
              Test1 (B1)
            </div>
            <div id='Test2FooterMenu' className='footerMenu'>
              Test2 (B1)
            </div>
            <div id='Test3FooterMenu' className='footerMenu'>
              Test3 (B2)
            </div>
            <div id='Test4FooterMenu' className='footerMenu'>
              Test4 (B2)
            </div>
            <div id='Test5FooterMenu' className='footerMenu'>
              Test5 (B2)
            </div>
          </div>

          <div id='WordsFooterMenu'>
            <div id='WordsFooterMenuMain'>
              Words
            </div>
            <div id='SportFooterMenu' className='footerMenu'>
              Sport
            </div>                
            <div id='NatureFooterMenu' className='footerMenu'>
              Nature
            </div>                                
            <div id='SocietyFooterMenu' className='footerMenu'>
              Society
            </div>                  
            <div id='AppearanceFooterMenu' className='footerMenu'>
              Appearance
            </div>
            <div id='PrepositionsFooterMenu' className='footerMenu'>
              Prepositions
            </div>
            <div id='AccommodationFooterMenu' className='footerMenu'>
              Accommodation
            </div>
          </div>
          <div id='ListenFooterMenu'>
            <div id='ListenFooterMenuMain'>
              Listen
            </div>
            <div id='Story1FooterMenu' className='footerMenu'>
              Story1
            </div>
            <div id='Story2FooterMenu' className='footerMenu'>
              Story2
            </div>
            <div id='Story3FooterMenu' className='footerMenu'>
              Story3
            </div>
            <div id='Story4FooterMenu' className='footerMenu'>
              Story4
            </div>
          </div>
        </div>

        <div id='menuFooter2'>
          <div id='PhrasesFooterMenu'>
            <div id='SpringFooterMenu' className='footerMenu'>
              Phrases
            </div>                
            <div id='SpringFooterMain' className='footerMenu'>
              Spring
            </div>
            <div id='VacationFooterMenu' className='footerMenu'>
              Vacation
            </div>                
            <div id='GreatingsFooterMenu' className='footerMenu'>
              Greatings
            </div>
            <div id='PresentationFooter' className='footerMenu'>
              Presentation
            </div>                
            <div id='ThrasalVerbsFooter' className='footerMenu'>
              ThrasalVerbs
            </div>
          </div>
          <div id='JokesFooterMenu'>
            Jokes 
          </div>
          <div id='StatisticsFooterMenu'>
            Statistics
          </div>
        </div>  
      </>
    /*footer for small screen ----^^^^^^^^*/   

  }  
  else { // it's a big screen
    htmlTablet = 
      <section id='section1MainPage'>
        <div className='contTitleText'>
          <div id='titleText'>
            Test your English level online
          </div>  
          <div id='titleTextDetail'>
            Here you can test and improve your knowledge 
            of English grammar, increase your vocabulary, enrich your speech
            with phraseological verbs, improve your understanding of English 
            speech by listening to novels and cheer up by reading jokes.
          </div> 
          <button id='buttonStartTest'>Start The Test</button> 
        </div>   
        <div id='group411_Head'>
          <img  id='imgGroup411Head' src={group411_Head} />
        </div>       
      </section>
    menuMainPage = 
      <nav id='contMainMenu_235'>
        <p id='contLogo'><img src={logoTests}/></p>
        <ul>
          <li><a href={testsHtml}>Tests <img src={backArrowBlue} /></a>
            <ul id='contMenuTest'>
              <li><a href="#" 
                onClick={currentTestDispatch(1)}>Test1 (B1)</a></li>
              <li><a href="#">Test2 (B1)</a></li>
              <li><a href="#">Test3 (B2)</a></li>
              <li><a href="#">Test4 (B2)</a></li>
              <li><a href="#">Test5 (B2)</a></li>
            </ul>
          </li>
          <li><a href={wordsHtml}>Words <img src={backArrowBlue} /></a>
            <ul>
              <li><a href="#">Society</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Accommodation</a></li>
              <li><a href="#">Appearance</a></li>
              <li><a href="#">Prepositions</a></li>
              <li><a href="#">Nature</a></li>                
            </ul>            
          </li>
          <li><a href={listenHtml}>Listen <img src={backArrowBlue} /></a>
            <ul id='contMenuTest'>
              <li><a href="#">Story1</a></li>
              <li><a href="#">Story2</a></li>
              <li><a href="#">Story3</a></li>
              <li><a href="#">Story4</a></li>
            </ul>            
          </li>
          <li><a href={phrasesHtml}>Phrases <img src={backArrowBlue} /></a>
            <ul id='contMenuTest'>
              <li><a href="#">Greatings</a></li>
              <li><a href="#">Phrasalverbs</a></li>
              <li><a href="#">Presentation</a></li>
              <li><a href="#">Spring</a></li>
            </ul>            
          </li>
          <li><a href={jokesHtml}>Jokes</a></li>
          <li><a href={statisticsHtml}>Statistics</a></li>
        </ul>
        <p className='box' id='contLogin'><span id='contLoginText'>Login</span></p>
      </nav>    

    /*footer for big screen ----vvvvvvvvv*/  
    footerSmallBigScreen =             
      <div id='menuFooter'>
        <div id='TestsFooterMenu'>
          <div id='TestsFooterMenuMain'>
            Tests
          </div>
          <div id='Test1FooterMenu' className='footerMenu'>
            Test1 (B1)
          </div>
          <div id='Test2FooterMenu' className='footerMenu'>
            Test2 (B1)
          </div>
          <div id='Test3FooterMenu' className='footerMenu'>
            Test3 (B2)
          </div>
          <div id='Test4FooterMenu' className='footerMenu'>
            Test4 (B2)
          </div>
          <div id='Test5FooterMenu' className='footerMenu'>
            Test5 (B2)
          </div>
        </div>

        <div id='WordsFooterMenu'>
          <div id='WordsFooterMenuMain'>
            Words
          </div>
          <div id='SportFooterMenu' className='footerMenu'>
            Sport
          </div>                
          <div id='NatureFooterMenu' className='footerMenu'>
            Nature
          </div>                                
          <div id='SocietyFooterMenu' className='footerMenu'>
            Society
          </div>                  
          <div id='AppearanceFooterMenu' className='footerMenu'>
            Appearance
          </div>
          <div id='PrepositionsFooterMenu' className='footerMenu'>
            Prepositions
          </div>
          <div id='AccommodationFooterMenu' className='footerMenu'>
            Accommodation
          </div>
        </div>

        <div id='ListenFooterMenu'>
          <div id='ListenFooterMenuMain'>
            Listen
          </div>
          <div id='Story1FooterMenu' className='footerMenu'>
            Story1
          </div>
          <div id='Story2FooterMenu' className='footerMenu'>
            Story2
          </div>
          <div id='Story3FooterMenu' className='footerMenu'>
            Story3
          </div>
          <div id='Story4FooterMenu' className='footerMenu'>
            Story4
          </div>
        </div>

        <div id='PhrasesFooterMenu'>
          <div id='SpringFooterMenu' className='footerMenu'>
            Phrases
          </div>                
          <div id='SpringFooterMain' className='footerMenu'>
            Spring
          </div>
          <div id='VacationFooterMenu' className='footerMenu'>
            Vacation
          </div>                
          <div id='GreatingsFooterMenu' className='footerMenu'>
            Greatings
          </div>
          <div id='PresentationFooter' className='footerMenu'>
            Presentation
          </div>                
          <div id='ThrasalVerbsFooter' className='footerMenu'>
            ThrasalVerbs
          </div>
        </div>
        <div id='JokesFooterMenu'>
          Jokes 
        </div>
        <div id='StatisticsFooterMenu'>
          Statistics
        </div>
      </div>  
    /*footer for big screen ----^^^^^^^^*/        
  }
  makeGetRequest();

      return ( 
        <div id='contFirstPage'>
          <div id='contHeader_198'>
            {menuMainPage}
          </div>
          {htmlTablet}
          <section id='section2MainPage'>
            <div id='overview'>
                Overview
            </div>
            <div id='contOverview'>
              <div className='contOverviewItem'>
                <div className='titleOverviewItem'>Tests</div>
                <div className="ellipseOrangeOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group412_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                  There are several tests with level B1 and B2. You can test your
                  knowledge of English grammar and improve it by using the grammar rules
                  for each question here.
                </div>
              </div>
              <div className='contOverviewItem'>
                <div className='titleOverviewItem'>Words</div>
                <div className="ellipseGreenOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group414_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                Here you can increase your vocabulary on several popular topics 
                by trying to guess the correct word from the given examples.
                </div>
              </div>
              <div className='contOverviewItem'>
              <div className='titleOverviewItem'>Listen</div>
                <div className="ellipseBlueOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group240_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                A good way to improve your understanding of English speech is 
                to listen to English novels. You can do  this here and control 
                yourself reading the text.
                </div>
              </div>
              <div className='contOverviewItem'>
              <div className='titleOverviewItem'>Phrases</div>
                <div className="ellipseBlueOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group70_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                To be closer to a real Englishman, I recommend learning 
                phrasal verbs here on practical topics using useful sentences.
                </div>
              </div>
              <div className='contOverviewItem'>
              <div className='titleOverviewItem'>Jokes</div>
                <div className="ellipseOrangeOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group241_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                Several jokes of the site allow you to definitely cheer yourself up.
                </div>
              </div>
              <div className='contOverviewItem'>
              <div className='titleOverviewItem'>Statistics</div>
                <div className="ellipseGreenOverviewItem">
                    <img className='imgEllipseOverviewItem' src={group413_Head}/>
                </div>
                <div className="textEllipseOverviewItem">
                  Statistics are used to evaluate parts of the site in order to improve it.
                </div>
              </div>
            </div>
          </section>
          
          <section id='section3MainPage'>
            <div id='frequentlyQuestions'>
            Frequently asked questions
            </div>
            <div id='contImgQuestions'>
              <div id='contImgFrequentlyQuestions'>
                <img className='imgFrequentlyQuestions' src={group416_Head}/>
              </div>
              <div id='contQuestionsAnswers'>
                <div className='contQuestionAnswer'>
                  <div className='contQuestion'>
                    How are these tests different from other sites?
                  </div>
                  <div className='contAnswer'>
                    You can read rules for each test question. 
                  </div>
                </div>
                <div className='contQuestionAnswer'>
                  <div className='contQuestion'>
                    What methods do you use to improve the memorization of English words?              
                  </div>
                  <div className='contAnswer'>
                    There are several centences which help the user to guess the word.
                  </div>
                </div>
                <div className='contQuestionAnswer'>
                  <div className='contQuestion'>
                    Why do you think listening to English novels improves 
                    understanding English speech?
                  </div>
                  <div className='contAnswer'>
                    English novels should not only be listened to, but also read. 
                    As a result, you should learn by ear earch word, 
                    repeating this process as many times as necessery.
                  </div>
                </div>
                <div className='contQuestionAnswer'>
                  <div className='contQuestion'>
                    What is the point of memorising and using phrasal verbs?
                  </div>
                  <div className='contAnswer'>
                    Of couse, you can speak English without using phrasal verbs. 
                    But using them brings you closer to a real Englishman.
                  </div>
                </div>
              </div>
            </div>

          </section>

          <footer id='footerMainPage'>
            {footerSmallBigScreen}
            
            <div id='lineFooter'>
              <ln/>
            </div>

            <div id='markFooter'>
              ©2022 english learning tests | Website Created By <a id='mailMarkFooter' href='https://developer.mozilla.org'>Vlad K.</a>
            </div>

          </footer>

        </div> 

      )//return

}//end of Header-----------

