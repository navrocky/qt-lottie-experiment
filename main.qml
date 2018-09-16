import QtQuick 2.11
import QtQuick.Window 2.11
import "lottie-polyfill.js" as Lottie
import FileIO 1.0

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    id: root

    property var animationData

    Component.onCompleted: {
        root.animationData = JSON.parse(FileIO.readTextFile(":/inattentive.json"))
//        console.log(root.animationData)
    }

    Canvas {
        id: canvas
        anchors.fill: parent

        onAvailableChanged: {
            if (!available)
                return
            var lottie = Lottie.initialize(canvas)

            lottie.loadAnimation({
//                                     container: canvas, // the dom element that will contain the animation
                                     renderer: 'canvas',
                                     rendererSettings: {
                                         context: canvas.getContext("2d")
                                     },

                                     loop: true,
                                     autoplay: true,
                                     animationData: root.animationData
                                 });
        }
    }
}
