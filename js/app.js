// ===== Game text =====
var gameOver = "===== GAME OVER =====";
var youWin = "===== YOU WIN - THANKS FOR PLAYING!====";

var introText = "\=====\ A MATRIX-INSPIRED GAME \=====\
\n This story takes place after just another dull day of work. Every day feels like an old sript of the same tasks and occurrences, neither rewarding or meaningful. \n\nYou awaken from a nap, as the sun rises -- odd, because the bedside clock shows it is 9:00pm...";

var messageMorpheus = "Food can wait. \nYou send an encrypted private message to your hacker-buddy, detailing the weird sunrise at 9pm you just witnessed. As soon as you press \'send\' you hear someone knocking on the front door of your apartment.";

var goToTesco = "Morpheus can wait. \nIt's the end of the month and you are down to £5. You should probably cook but that would make things even more dull... \nA pizza from Tesco will add a little life to your evening. \nYou open the front door of your apartment and find a figure standing in front of you.";

var goToTakeAway = "Morpheus can wait. \nIt's the end of the month and you are down to £5. You should probably cook but that would make things even more dull... \nDesperate for a break from the usual, you decide to get take-away food. \nYou open the front door of your apartment and find a figure standing in front of you.";

var helpHenrietteCigarette = "You take Henriette's bins out. \nWhile you are outside you light a cigarette and take a look at your surroundings. A quiet driveway is in front of your apartment building. A black cat sneaks out from under Henriette's car across the road. You stamp out your cigarette and find the same cat crawling out below Henriette's car one more time...";

var tescoFood = "You take Henriette's bins out on your way to Tesco. You buy Pizza and some chocolate snacks for the walk back \nThe chocolate snacks taste just like chicken...";

var takeAwayFood = "You take Henriette's bins out on your way out. You go to a street food restaurant and get some takeaway lamb noodles \nOddly, the meat looks and smells like lamb but tastes exactly like chicken...";

var getRedPill = "The first jellybean gives you a weird head rush. In your apartment, your living room clock shows it is still 9:00pm. Maybe it just needs new batteries...";

var getBluePill = "The first jellybean you eat makes you feel instantly drowsy. Your vision gets blurry so you go back to bed, the last thing you see is your bedside clock showing it's still 9:00pm. After all this time? Well, none of that matters now, you can address it tomorrow.";

var morpheusCommsMoney = "Your PC shows a new message notification. \n\nSender: [anonymous] \nSubject Line: 9:00pm. \nBody: This message is traced. It's not a coincidence - you are being watched and you are in danger. Leave immediately and call #001100 from the nearest phone box. \M";
// It comes from Morpheus and the subject line is 9:00pm";

var morpheusCommsNoMoney ="You find your mobile phone on your bed ringing - and pick up the call\n'The line is tapped so I will keep it short'\nYou immediately recognise the caller's voice - It's Morpheus. \n'You're being watched, for communicating with me - it looks like you sent me one message too many. What you ate was much more than just a sweet. There is little time to explain, they are on to you. Get yourself to safety - find a phone box ASAP and call #001100'";

var getOutMobile = "You quickly grab your mobile, put it in your back pocket as a man in a black suit and sunglasses kicks down the front door. You are on your tiptoes staying out of his sights as he enters the apartment. \nWhile he is searching for you, you sneak towards the door and your phone lets out a Facebook notification sound \nBefore you can look over your shoulder the mysterious tresspasser pins you down with one hand firmly on the back of your neck, you pass out to the pressure \nAt least your evening wasn't so dull...";

var getOutDiversion = "You quickly turn to your PC, set Spotify to shuffle-play Mastodon and turn the volume to max before fleing the room and hiding in the kitchen. A figure kicks down your front door - revealing himself as a man in a black suit and sunglasses. The man heads straight to your bedroom and use the opportunity to grab your phone and run out of the appartment";

var getOutDefend = "You grab a rolling pin and a kitchen knife from the kitchen and walk towards the front door. A figure kicks down your front door - revealing himself as a man in a black suit and sunglasses. You shout at him and swing your rolling pin at the man - but before the hit can land he has already floored you with a kick to the gut. \nBreathless, you stare helplessly at him as he pulls a pistol out and points it at you";

var outsideRun = "You run away and can hear Henriette's car crashing into the phone box. You make a wise decision that keeps you alive - for now."

var outsideDie = "You just aren't fast or agile enough to outmanoeuvre a speeding car. 'This kind of stuff only works in films' - Your last thoughts as you fade..."

var runMoney = "You are running as fast as you can down the street, desperately looking for a phone box. Your phone vibrates in your pocket, you check the message while running. It's a nearby GPS-location from an sender named'#001100'"

var runNoMoney = "You are running as fast as you can down the street, desperately looking for a phone box. Your phone vibrates in your pocket, you check the message while running. It's a nearby GPS-location from an sender named '#001100' with a message \n'You spent your last funds on junk food, if you make it out alive we'll call you Glutton. \nThe sender has transferred you £5 to use the phone booth."
// ==========

// ===== PLAYER RESOURCES =====
var tesco = false;
var takeAway = false;
var mobilePhone = 0;
var money = 5;
var redPill = false;
// ==========

//===== GAME SCRIPT =====
// Part - A
alert(introText);

var msOrFood = prompt ("This is the kind of weird event you love to discuss with your friend Morpheus. You've never met in real life, but you have spent the last months trading countless messages online, questioning the reality of everything...  \n But you're also hungry and have £5, enough for a takeaway or Tesco's \n(a)-Message Morpheus \n(b)-Tescos \n(c)-Local take-away");

 switch(msOrFood){
    case ("a"):
      alert(messageMorpheus);
      break;

    case ("b"):
      alert(goToTesco);
      tesco = true;
      money = money -5;
      break;

    case ("c"):
      alert(goToTakeAway);
      takeAway = true;
      money = money -5;
      break;

    default:
      alert("Player input failed - Please restart the game");
      location.reload(forceGet);
      break;
  };

  var henriette = prompt("It's Henriette, your 72 year-old neighbour asking you to help her take her rubbish bins down. She says she struggles with the task in her old age. \n(a) - Help Henriette and take her bins down \n(b)- That's enough, Henriette can help herself");

  switch (henriette){
  case ("a"):
    break;

  case ("b"):
    alert("You've been conscious for 5 minutes and you've had enough already...");
    alert(gameOver);
    location.reload(forceGet);
    break;

  default:
    alert("Player input failed - Please restart the game");
    location.reload(forceGet);
    break;
};


  if (money == 5){
    alert(helpHenrietteCigarette);}
    else if (money == 0 && tesco==true) {
    alert(tescoFood)}
    else if (money == 0 && takeAway==true) {
      alert(takeAwayFood)} else {
        alert("Player input failed - Please restart the game");
        location.reload(forceGet);
    }

  var jellyBeans = prompt ("On your way back to your apartment, Henriette is standing by your front door. She thanks you for being so helpful to her and wants you to try some of her homemade jellybeans. \nShe says 'I am still learning the recipe but I know how to make red and blue jellybeans \nWhat jellybeans would you like to try? \n(a)-Take the red jellybeans \n(b)-Take the blue jellybeans")

  switch (jellyBeans){
  case ("a"):
    redPill = true;
    alert(getRedPill);
    break;

  case ("b"):
    alert(getBluePill);
    alert(gameOver);
    location.reload(forceGet);
    break;

  default:
    alert("Player input failed - Please restart the game");
    location.reload(forceGet);
    break;
  };
  // ==================

  // ===== PART B =====
  if (money == 5 && redPill == true) {
    alert(morpheusCommsMoney);
  }else if (money == 0 && redPill == true) {
    alert(morpheusCommsNoMoney);
  } else {
    alert("Player input failed - Please restart the game");
    location.reload(forceGet);
  }

  var danger = prompt ("You hear a gentle knock on your front door and the a faint sound of Henriette's voice getting before it is abruptly followed by loud bangs on the door. \nThis can't be good and you need to get out now. \n(a)-Take your mobile phone and get out \n(b)-Create a diversion and sneak out \n(c)-'Arm' yourself and face the threat")

  switch (danger){
  case ("a"):
    mobilePhone = 1;
    alert(getOutMobile);
    alert(gameOver);
    location.reload(forceGet);
    break;

  case ("b"):
    mobilePhone = 1;
    alert(getOutDiversion);
    break;

  case ("c"):
    alert(getOutDefend);
    alert(gameOver);
    location.reload(forceGet);
    break;

  default:
    alert("Player input failed - Please restart the game");
    location.reload(forceGet);
    break;
  };

  // ==================

  // ===== PART C =====
  var outside = prompt ("You flee the appartment building and see a phone in a booth ringing across the road from you. \nYou take one last look over your shoulder and notice the door you just used is now a brick wall. \n The same man from your flat is now up the road, driving Henriette's car at full speed to crash it into the phone box. You won't make it to the phone in time... \n(a)-Run to the phone box and try anyway \n(b)-Confront the agent \n(c)-Get out of the way and run")

  switch (outside){
  case ("a"):
    alert(outsideDie);
    alert(gameOver);
    location.reload(forceGet);
    break;

  case ("b"):
    alert(outsideDie);
    alert(gameOver);
    location.reload(forceGet);
    break;

  case ("c"):
    alert(outsideRun);
    break;

  default:
    alert("Player input failed - Please restart the game");
    location.reload(forceGet);
    break;
  };

  if (mobilePhone == 1 && money == 5 && redPill == true) {
    alert(runMoney);
  }else if (mobilePhone == 1 && money == 0 && redPill == true) {
    money = 5;
    alert(runNoMoney);
  } else {
    alert("Player input failed - Please restart the game");
    location.reload(forceGet);
  }

  var ending = prompt ("15 seconds later, you finally reach the location and are steps away the phone booth. With a final glance over your shoulder you see the man reaching inside his blazer's breast-pocket. \nYou enter the phone booth as gunfire shots hits the glass walls. The phone rings - you grab the handset and duck as more glass shards explode around you \nJust as the agent's footsteps become audible, you take a quick deep breath and enter the code on the keypad")

  switch (ending){
  case ("#001100"):
    alert(youWin);
    window.location.replace("https://www.youtube.com/embed/xE6q5T9bXyI?autoplay=1");
    location.reload(forceGet);
    break;

  default:
    alert("The agent catches up to you - punches through the glass door and grabs you by the throat in one swift motion. \nMaybe you were thinking too fast or too slow. \nEither way it's too late now.");
    alert(gameOver);
    location.reload(forceGet);
    break;
  };
// ========================
