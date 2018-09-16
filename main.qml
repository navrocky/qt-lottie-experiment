import QtQuick 2.11
import QtQuick.Window 2.11
import "lottie-polyfill.js" as Lottie

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    Component.onCompleted: {
        Lottie.func()
    }
}
