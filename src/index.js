import Handlers from "./handlers";
import Bootstrap from "./lib/Bootstrap";
/*
Feel free to Extend Bootstrap with new elements.
*/
class WidgetBootstrap extends Bootstrap {
  handler(message){
    // super.handler(message);

    if (Handlers.hasOwnProperty(message)) {
      Handlers[message]();
    }
  }
}

export default WidgetBootstrap;
