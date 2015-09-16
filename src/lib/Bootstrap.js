import Widget from "./Widget";

class Bootstrap{
  constructor(broadcast){
    let name = "widget-skeleton";
    this.widget = new Widget(name,broadcast,this.handler);
    this.widget.subscribeWidget();
  }

  getMainWidget(){
    return this.widget;
  }

  handler(message){
    console.log("Widget default listened: " + message);
  }
}

export default Bootstrap;
