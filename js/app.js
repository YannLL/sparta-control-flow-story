// ===== Game text =====
var gameOver = "===== GAME OVER =====";

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

var morpheusCommsMoney = "Your PC shows a new message notification. \n\nSender: [anonymous] \nSubject Line: 9:00pm. \nBody: This message is traced. It's not a coincidence - you are being watched and you are in danger. Leave immediately and call 001100# from the nearest phone box. \M";
// It comes from Morpheus and the subject line is 9:00pm";

var morpheusCommsNoMoney ="You find your mobile phone on your bed ringing - and pick up the call\n'The line is tapped so I will keep it short'\nYou immediately recognise the caller's voice \n'You're being watched, for communicating with me - it looks like you sent me one message too many. What you ate was much more than just a sweet. There is little time to explain, they are on to you. Get yourself to safety - find a phone box ASAP and call #001100'";

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
