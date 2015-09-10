import {Widget} from "broadcastjs";

class WidgetController extends Widget{

  constructor(name,dispatcher,widgetTools){
    super(name,dispatcher);
    this.tools = widgetTools;
  }
  callbackProvider(Fn){
     let that = this;
     return Fn;
  }

}

export default WidgetController;
