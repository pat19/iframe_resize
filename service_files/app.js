/*! 2016-08-01 | o-bank | Pc | Copyright (c) 2016 Wunderman. | Nick */
'use strict';
var MenuControl = (function(){
	var option = {};
    function MenuControl(_option) {
        var _this = this;
        this.option = _option;
    }

    MenuControl.prototype.testOption = function () {
    	console.log(this.option);
        return this.option;
    }
    return MenuControl;
}());
'use strict';
var OCircleControl = (function(){
	var option = {};
    function OCircleControl(_option) {
        var _this = this;
        this.option = _option;
    }

    OCircleControl.prototype.testOption = function () {
    	console.log(this.option);
        return this.option;
    }
    return OCircleControl;
}());