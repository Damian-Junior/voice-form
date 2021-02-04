       let $fisrtName = document.querySelector('#fName');
       let $surName = document.querySelector('#sName');
       let $email = document.querySelector('#email');
       let $pass = document.querySelector('#pass');
       let $phone = document.querySelector('#pNumber');
       let $button = document.querySelector('#submit');
       let $playButton = document.querySelector('#playButton');
       let welcomeNoye = ` Hello!!!, am Damian and i will be helping you to fill your form today.

         You will be asked to say your data accordingly. please pronounce each word accurately to ensure accurate data entry.
         so lets get started.
           
       `;
       /* welcome noye from the browser */
       
       let welComeMessage = new SpeechSynthesisUtterance();
       let voices = speechSynthesis.getVoices();
       welComeMessage.voice = voices[48];
       welComeMessage.text = welcomeNoye;
       welComeMessage.pitch = 1;
       welComeMessage.rate = 1;
       welComeMessage.volume =10;
       welComeMessage.lang = 'en-US';
       $button.addEventListener('click', ()=> alert('succesfull'));
       $playButton.addEventListener('click', ()=>{
           document.querySelector('h3').style.display = 'none';
        let formInput = document.querySelectorAll('input');
        formInput.forEach((input)=>{
           input.value = '';
        });  
        speechSynthesis.speak(welComeMessage);
         setTimeout(askFirstName, 15000);
       });

        
       /* end of the welcome noye from thr browser */

    /*section for the voice recognition*/
    var SpeechRecognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;

    function askFirstName() {

    var recognition = new SpeechRecognition();
    speechSynthesis.speak(new SpeechSynthesisUtterance('what is your first name'));
    
    recognition.onstart = function(){
           $fisrtName.placeholder = 'Listening...';
    };

    recognition.continuous = true; 
    recognition.onspeechend = function() {
            //    recognition.stop();
        } 
        var content =  '';
    recognition.addEventListener('result', (e) =>{
              var current = e.resultIndex;
              var transcript = e.results[current][0].transcript;
              content += transcript;
              $fisrtName.value = content;
               
              if (transcript !='') {
                 recognition.abort();
                 askSurname();

              }
              
              
              
        });

         setTimeout(()=>recognition.start(), 2000);
         
}

function askSurname(){
    var recognition2 = new SpeechRecognition();
    speechSynthesis.speak(new SpeechSynthesisUtterance('what is your last name'));
    
    recognition2.onstart = function(){
           $surName.placeholder = 'Listening...';
    };
     
    recognition2.continuous = true; 
    recognition2.onspeechend = function() {
            //    recognition2.stop();
        } 
        var content2 =  '';
    recognition2.addEventListener('result', (e) =>{
              var current = e.resultIndex;
              var transcript = e.results[current][0].transcript;
              content2 += transcript;
              $surName.value = content2;

              if (transcript !='') {
                recognition2.abort();
                askEmail();

        }
    });
    setTimeout(()=>recognition2.start(), 2000);
}


function askEmail(){
    let recognition2 = new SpeechRecognition();
    speechSynthesis.speak(new SpeechSynthesisUtterance('what is your email'));
    
    recognition2.onstart = function(){
           $email.placeholder = 'Listening...';
    };

    recognition2.continuous = true; 
    recognition2.onspeechend = function() {
            //    recognition2.stop();
        } 
       let content2 =  '';
    recognition2.addEventListener('result', (e) =>{
              let current = e.resultIndex;
              let transcript = e.results[current][0].transcript;
              content2 += transcript;
               (transcript == 'at') ? transcript = '@':
              $email.value = content2;

              if (transcript !='') {
                recognition2.abort();
                askPassword();

        }
    });
    setTimeout(()=>recognition2.start(), 2000);
    }

    function askPassword(){
        let recognition2 = new SpeechRecognition();
        speechSynthesis.speak(new SpeechSynthesisUtterance('please call out your password'));
    
    recognition2.onstart = function(){
           $pass.placeholder = 'Listening...';
    };
    
        recognition2.continuous = true; 
        recognition2.onspeechend = function() {
                   
            } 
            let content2 =  '';
        recognition2.addEventListener('result', (e) =>{
                  let current = e.resultIndex;
                  let transcript = e.results[current][0].transcript;
                  content2 += transcript;
                   $pass.value = content2;

                   if (transcript !='') {
                    recognition2.abort();
                    askPhoneNumber();
    
                     
            
        }
    });
    setTimeout(()=>recognition2.start(), 2000);
    }


    function askPhoneNumber(){
        let recognition2 = new SpeechRecognition();
        speechSynthesis.speak(new SpeechSynthesisUtterance('please call out your phone number'));
    
    recognition2.onstart = function(){
           $phone.placeholder = 'Listening...';
    };
    
        recognition2.continuous = true; 
        recognition2.onspeechend = function() {
                //    recognition2.stop();
            } 
            let content2 =  '';
        recognition2.addEventListener('result', (e) =>{
                  let current = e.res bnultIndex;
                  let transcript = e.results[current][0].transcript;
                  content2 += transcript;
                  $phone.value = content2;
    
                                
        });
        setTimeout(()=>recognition2.start(), 2000);
    }

    