import Cast from "broadcastjs";
import Bootstrap from "./index";

class Runner{

  constructor(amount){
    let dispatch = new Cast();
    let boot = new Bootstrap(dispatch);
    let counter = 0;
    let play = function(){
                  counter++;
                  if(counter >= amount) clearInterval(interval);
                  dispatch.pushMessage(counter);
               };

    let interval = setInterval(function(){ play() }, 10);
  }

}

let run = new Runner(50);
