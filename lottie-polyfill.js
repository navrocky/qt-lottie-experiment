var navigator = null
var window = null
var document = null
function doBug() {
    function initiateExpression() {
        var time=5;

        function executeExpression() {
            time = 20;
            var func = eval("[function(){ console.log(time); }]")[0]
            func()
        }

        return executeExpression;
    }

    var execExpr = initiateExpression();
    execExpr();

}

function setInterval(callback, interval) {
    console.log("STUB setInterval", callback, interval)
    //    callback()
}

function setTimeout(callback, interval) {
    if (interval === 0) {
        Qt.callLater(callback)
    } else {
        throw "<93490585> Unsupported interval:" + interval
    }
}

function initialize(canvas) {

    doBug();

    var internalNavigator = {};
    var internalWindow = {};
    var internalDocument = {
        createElement: function (type) {
            if (type === "canvas") {
                return canvas
            } else {
                throw "<93490585> Unsupported type:" + type
            }
        },
        getElementsByTagName: function (tagName) {
            if (tagName === "script") {
                return []
            } else {
                throw "<0586916a> Unsupported tag name:" + tagName
            }
        }
    };

    navigator = internalNavigator
    document = internalDocument
    window = internalWindow


    var result = Qt.include("lottie.js")

    console.log(result.status, result.exception, JSON.stringify(window))

    return window.lottie
    //    function func() {
    //        console.log("Hello!")

    //        lottie.loadAnimation({
    //          container: element, // the dom element that will contain the animation
    //          renderer: 'canvas',
    //          loop: true,
    //          autoplay: true,
    //          path: 'data.json' // the path to the animation json
    //        });
    //    }

}




