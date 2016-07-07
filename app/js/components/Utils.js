(function() {
    function Utils(Logger) {
        var MODULE_NAME = "Utils";

        function demoFunction() {
            Logger.consoleLog("Here is demoFunction");
        }

        var ret = {
            demoFunction: demoFunction
        };

        return ret;
    }

    module.exports = Utils;
})();