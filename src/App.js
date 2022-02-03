import React, { Component } from 'react';
import './App.css';
import image01 from "./images/01.jpg";
import image02 from "./images/02.jpg";
import image03 from "./images/03.jpg";
import image04 from "./images/04.jpg";
import image05 from "./images/10.jpg";
import image06 from "./images/11.jpg";
import image07 from "./images/12.jpg";
import image08 from "./images/13.jpg";
import image09 from "./images/15.jpg";
import image10 from "./images/16.jpg";
import avatar from "./images/Avatar.png";
import pause from "./images/pause.png";
import play from "./images/play.png";
import audioClip from "./sounds/Media2.mp3";
import introClip from "./sounds/Media1.mp3";


var slideIndex = 1;
export class App extends Component {
  constructor(props){
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate(){
    this.showSlides(slideIndex);
  }


  showSlides(n) {
    if(document.getElementById('book')){
      var i;
      var slides =  Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if(document.getElementById("pageNum")){
      var sound = document.getElementById('intro-sound');
      if(!sound.paused){
        sound.pause();
      }
      this.showSlides(slideIndex += n);  
      document.getElementById("pageNum").innerHTML = String(slideIndex-1);
      if(slideIndex == 1){
          document.getElementById("pageNum").innerHTML = "";
      }
      if(n > 0){
        document.getElementById("n").style.display = "none";
      }
      else{
        document.getElementById("n").style.display = "block";
      }
      if(slideIndex >= 3){
          document.getElementById("p").style.display = "block";
      }
      else{
          document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id){
    if(document.getElementById(id)){
      var text = document.getElementById(id).style.display;
      if(text == "flex"){
          document.getElementById(id).style.display = "none";
      }
      else{
          document.getElementById(id).style.display = "flex";
      }
    }
  }

  show(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id){
    var sound = document.getElementById(id);
    if(sound.paused || sound.duration == 0){
      sound.play();
    }
    else{
      sound.pause();
    }
  }

  hide(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "none";
    }
  }

  showNext(){
    if(document.getElementById("n")){
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime(){
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime
  }

  pauseQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num){
    var options =  ["a", "b", "c", "d"];
    for(var i = 0; i < options.length; i++){
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  render() {
    return (
      <div id='book'>
        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
            <div className="title">Les  enfants de cire</div>
            <div className="slide-container">
                <div className="arrow-container">
                    <div className="next" id="p" onClick={() => this.plusSlides(-1)}>&#10094;</div>
                </div>

                {/* Slides */}
                {/* Intro Slide */}
                <div className="slide fade" style={{display: "flex"}}>
                    <div className="image-container">
                        <img className="image" src={image01}/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img className="avatar" src={avatar} onClick={() => {this.show('intro'); this.toggleSound('intro-sound'); this.hide('click1'); this.showNext();}}/>
                            <i id="click1" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                        </div>
                        <audio id="intro-sound">
                            <source src={introClip} type="audio/mpeg" />
                        </audio>
                        <div id="intro" className="speech sb1">
                        Aujourd’hui, tu vas lire l’histoire « La décision ». Appuie sur la flèche pour passer à la page suivante. Today you will read the story “La décision.” Click on the arrow to move to the next page.
                        </div>
                    </div>

                </div>
                {/* Slide 1 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image02}/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img className="avatar" src={avatar} onClick={() => {this.toggle('s1'); this.hide('click2'); this.showNext()}}/>
                            <i id="click2" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                          <p>Mon village a beaucoup de problèmes. Nous faisons la queue pour aller chercher de l’eau d’un seul robinet.</p>
                        </div>
                    </div>



                </div>
                {/* Slide 2 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image03}/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.hide('click3'); this.toggle('s2')}}/>
                              <i id="click3" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Nous attendons la nourriture donnée par les autres.</p>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04}/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.hide('click4'); this.toggle('s3')}}/>
                              <i id="click4" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Nous barrons nos maisons tôt à cause des voleurs.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image05}/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.hide('click5'); this.toggle('s4')}}/>
                              <i id="click5" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Puis un jour, le robinet se tarit et nos conteneurs sont restés vides et nous n’avons plus d’eau.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image06}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s5')}}/>
                            <p>Par la suite, mon père marche de maison en maison et demande aux gens de venir à une réunion du village.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}  onClick={() => {this.showNext(); this.toggle('s6')}}/>
                            <p>Les gens se rassemblent sous un grand arbre et écoutent. 
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image08}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s7')}}/>
                            <p>Mon père se lève et dit, « Il faut travailler ensemble pour résoudre nos problèmes. 
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image09}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s8')}}/>
                            <p>Une femme dit, « Les femmes peuvent me joindre pour/m’aider à faire pousser de la nourriture.
                            </p>
                        </div>
                    </div>

                </div>
                {/* Slide 9 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image10}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s9')}}/>
                            <p>Nous criions tous d’une seule voix, « Nous devons changer nos vies. » Depuis ce jour, nous travaillons ensemble pour résoudre nos problèmes.
                            </p>
                        </div>
                    </div>

                </div>
                {/* Slide 10 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image01}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s10')}}/>
                            <p>Et lorsque le soleil se lève, il s’envole vers la lumière du matin en chantant.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Question Slide Intro */}
                <div className="slide fade">
                    <div className="question-prompt-container">
                        <p>Tu as lu l’histoire « La décision. » Appuie sur le bouton vert « RECORD » et dis-moi l’histoire du début à la fin. Dis-moi tous les événements et détails dont tu te souviens. You have read the story "La décision." Press the green "RECORD" button and tell us the story from the beginning to the end. Include all the events and details that you can remember.</p>
                    </div>
                    <div className="audio-controls-container">
                        <audio id="story-retel" onPlay={this.updateTime}>
                            <source src={audioClip} type="audio/mpeg" />
                        </audio>
                        <img className="audio-button" id="play" src={play} onClick={() => {this.playQuestion(); this.showNext()}}/>
                        <img className="audio-button" id="pause" style={{display: 'none'}} src={pause} onClick={this.pauseQuestion}/>
                    </div>
                </div>    
                <div className="slide fade">
                    <div className="linkContainer">
                    <a href='https://rotman.az1.qualtrics.com/jfe/form/SV_6g5m4RpwsIrAmMe'><button className='linkBox'>Click here for comprehension test</button></a>
                    </div>
                </div>  
                                {/*     
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions littérales</div>
                      <p className="question">1. Qu’est-ce que le frère oiseau fait lorsque le soleil se lève?</p>
                      <p className="question-option" id="1a" onClick={() => this.selectOption("1a", "1")}>a) il fait un plan. </p>
                      <p className="question-option" id="1b" onClick={() => this.selectOption("1b", "1")}>b) il s’envole vers la lumière du matin </p>
                      <p className="question-option" id="1c" onClick={() => this.selectOption("1c", "1")}>c) il se promène </p>
                      <p className="question-option" id="1d" onClick={() => this.selectOption("1d", "1")}>d) il aide ses parents </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                      <p className="question-option" id="2a" onClick={() => this.selectOption("2a", "2")}>a) parce qu’ils ont une famille bien heureuse.  </p>
                      <p className="question-option" id="2b" onClick={() => this.selectOption("2b", "2")}>b) parce qu’ils aident leurs parents à la maison.  </p>
                      <p className="question-option" id="2c" onClick={() => this.selectOption("2c", "2")}>c) parce que leur frère fond au soleil brûlant.</p>
                      <p className="question-option" id="2d" onClick={() => this.selectOption("2d", "2")}>d) parce que leur frère l’oiseau s’envole. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">3. Que font les frères à la maison? </p>
                      <p className="question-option" id="3a" onClick={() => this.selectOption("3a", "3")}>a) ils font du feu. </p>
                      <p className="question-option" id="3b" onClick={() => this.selectOption("3b", "3")}>b) ils se disputent. </p>
                      <p className="question-option" id="3c" onClick={() => this.selectOption("3c", "3")}>c) ils aident leurs parents. </p>
                      <p className="question-option" id="3d" onClick={() => this.selectOption("3d", "3")}>d) ils se promènent au soleil. </p>
                    </div>
                  </div>
                </div>

                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions à inférences </div>
                      <p className="question">4. Pourquoi est-ce que les enfants ne peuvent pas s’approcher d’un feu?</p>
                      <p className="question-option" id="4a" onClick={() => this.selectOption("4a", "4")}>a) parce qu’ils travaillent la nuit. </p>
                      <p className="question-option" id="4b" onClick={() => this.selectOption("4b", "4")}>b) parce qu’ils sont heureux. </p>
                      <p className="question-option" id="4c" onClick={() => this.selectOption("4c", "4")}>c) parce qu’ils sont faits de cire. </p>
                      <p className="question-option" id="4d" onClick={() => this.selectOption("4d", "4")}>d) parce qu’ils aident leurs parents. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">5. Quelle est la morale de l’histoire? </p>
                      <p className="question-option" id="5a" onClick={() => this.selectOption("5a", "5")}>a) que les enfants sont faits de cire. </p>
                      <p className="question-option" id="5b" onClick={() => this.selectOption("5b", "5")}>b) que les enfants doivent écouter leurs parents. </p>
                      <p className="question-option" id="5c" onClick={() => this.selectOption("5c", "5")}>c) que les enfants n’aiment pas le soleil. </p>
                      <p className="question-option" id="5d" onClick={() => this.selectOption("5d", "5")}>d) que les enfants peuvent faire un oiseau avec de la cire. </p>
                    </div>
                    <div className='question-box'>
                    <p className="question">6. Pourquoi est-ce que les frères avertissent leur frère? </p>
                      <p className="question-option" id="6a" onClick={() => this.selectOption("6a", "6")}>a) parce qu’il va aider leurs parents dans les champs. </p>
                      <p className="question-option" id="6b" onClick={() => this.selectOption("6b", "6")}>b) parce qu’il va fondre  au soleil s’il sort. </p>
                      <p className="question-option" id="6c" onClick={() => this.selectOption("6c", "6")}>c) parce qu’il va manger. </p>
                      <p className="question-option" id="6d" onClick={() => this.selectOption("6d", "6")}>d) parce qu’il va faire un plan. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions de vocabulaire </div>
                      <p className="question">7. Que signifie cire dans le texte: Ils doivent faire tout leur travail pendant la nuit. Puisqu’ils sont faits de cire!</p>
                      <p className="question-option" id="7a" onClick={() => this.selectOption("7a", "7")}>a) cire signifie: de glace </p>
                      <p className="question-option" id="7b" onClick={() => this.selectOption("7b", "7")}>b) cire signifie: ce qu’on utilise pour cuisiner </p>
                      <p className="question-option" id="7c" onClick={() => this.selectOption("7c", "7")}>c) cire signifie: ce qu’on utilise pour faire une chandelle </p>
                      <p className="question-option" id="7d" onClick={() => this.selectOption("7d", "7")}>d) cire signifie: de gentillesse </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">8. Que signifie fondre dans le texte:  Les enfants de cire sont si tristes de voir leur frère fondre. </p>
                      <p className="question-option" id="8a" onClick={() => this.selectOption("8a", "8")}>a) fondre signifie: devenir solide </p>
                      <p className="question-option" id="8b" onClick={() => this.selectOption("8b", "8")}>b) fondre signifie: devenir froid </p>
                      <p className="question-option" id="8c" onClick={() => this.selectOption("8c", "8")}>c) fondre signifie: se perdre </p>
                      <p className="question-option" id="8d" onClick={() => this.selectOption("8d", "8")}>d) fondre signifie: devenir liquide </p>
                    </div>
                  </div>
                </div> */}

                <div className="arrow-container">
                    <div className="next" id="n" onClick={() => this.plusSlides(1)}>&#10095;</div>
                </div>
            </div>

            
            <div className="pageNum-container">
                <p id="pageNum"></p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
