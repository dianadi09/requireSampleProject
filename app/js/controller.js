(function() {
    function Controller() {

        var logger = require("./components/Logger.js")();
        var utils = require("./components/Utils.js")(logger);

        function startApp() {
            logger.consoleLog("Logger", "This is start app function");
        }

        var ret = {
            Utils: utils,
            startApp: startApp
        };

        return ret;
    }

    module.exports = Controller;
})();