import Widget from "./Widget";

class Bootstrap{
    constructor(broadcast){
       this.widget = new Widget("widget-skeleton",broadcast,main);
       this.widget.subscribeWidget();
    }
    getMainWidget(){
      return this.widget;
    }
}

function main(message){
      console.log("Widget listened:"+message);

};

export default Bootstrap;
