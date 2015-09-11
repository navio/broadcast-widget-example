var Dispatcher = require("broadcastjs")["default"];
var assert = require("assert");
var Widget = require("../dist/lib/Widget");
var Bootstrap = require("../dist");

describe("Widget Skeleton",function(){
    var dispatch = new Dispatcher();
    var skWidget = new Widget("TestWidget",dispatch,function(message){ console.log("Me:"+message)})
    var boot = new Bootstrap(dispatch);

    skWidget.subscribeWidget();

    it('should attach listeners to the subscriber list', function () {
      assert.equal(2, dispatch._showSubscribers().length );
    });

    it('should listen to dispatcher', function () {
        dispatch.pushMessage('Hola');
        assert.equal('Hola', skWidget._getState());
    });

    it('bootstrap should return main widget', function () {
        assert.equal("Hola", boot.getMainWidget()._getState());
    });

});
