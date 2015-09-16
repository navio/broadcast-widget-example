import {Widget} from "broadcastjs";

class WidgetController extends Widget{

  constructor(name,dispatcher,widgetTools) {
    super(name,dispatcher);
    this.tools = widgetTools;
  }

  _setState(message){
    this.currentState = message;
  }

  handler(message){
   return this.tools(message);
  }

}

export default WidgetController;
