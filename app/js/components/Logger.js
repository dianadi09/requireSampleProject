(function() {
    function Logger() {

        function consoleLog(msg, module) {
            if (!msg) {
                return;
            }
            if (module) {
                console.log(module + " | " + msg);
            } else {
                console.log(msg);
            }
        }

        var ret = {
            consoleLog: consoleLog
        };

        return ret;
    }

    module.exports = Logger;
})();