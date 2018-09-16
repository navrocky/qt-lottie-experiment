#include "fileio.h"

#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlEngine>

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);

    qmlRegisterSingletonType<FileIO>("FileIO", 1, 0, "FileIO",
                                     [](QQmlEngine *engine, QJSEngine *scriptEngine) -> QObject* {
        return new FileIO();
    });

    QQmlApplicationEngine engine;
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty())
        return -1;


    return app.exec();
}
