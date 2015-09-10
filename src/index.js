import Widget from "./Widget";

class Bootstrap{
    constructor(broadcast){
       this.widget = new Widget("widget-skeleton",broadcast,respond);
       this.widget.subscribeWidget();
    }
}

function respond(message){
      console.log("Widget listened:"+message);
};

export default Bootstrap;
