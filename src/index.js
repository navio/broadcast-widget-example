import Bootstrap from "./lib/Bootstrap";
/*

Feel free to Extend Bootstrap with new elements.

*/
class WidgetBootstrap extends Bootstrap{
  handler(message){
        console.log("Widget listened: --->"+message);




  }
}

export default WidgetBootstrap;
