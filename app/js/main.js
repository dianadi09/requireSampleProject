(function() {
    window.onload = function() {
        //use of module
        var ctrl = require("./controller.js")();
        ctrl.startApp();

        //use of module that is a part of other module
        var utils = ctrl.Utils;
        utils.demoFunction();
    };
})();