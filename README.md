# sparta-control-flow-story

## Task

To create a complex story using various control flow methods. 

###It must:

* use every Data Type (integers, arrays, objects etc) 
* use if, if/else, if/else, if/else and Switch statements
* use every comparison operator (<, >, <=, >= etc)
* use at least one multiple condition per statement **if( true && true )** OR  **if( true || false )**
* Use as many in-built functions as possible: 
	* prompts and alerts are mandatory
	* other methods like length, reverse, indexOf, substr, and any others you can find
* The story should be fun and entertaining!!

### Link to the Github URL

**[https://github.com/YannLL/sparta-control-flow-story](https://github.com/YannLL/sparta-control-flow-story)**

### How to Download

You would git clone the project with a SSH Key or as a ZIP.
In terminal, clone the project into your directory via the command 
<br/>**'https://github.com/YannLL/sparta-control-flow-story.git'**

### Challenges

 - I initially encountered an issue with the management of dialogue. I would have liked to store all dialogue and narration in individual variables. This proved to be difficult in the case of prompts and their associated switch statements.

### Snippets of our code: ###Dialogue with Henriette (NPC)

```javascript
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
};```