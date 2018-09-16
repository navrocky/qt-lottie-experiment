#pragma once

#include <QObject>

class FileIO : public QObject
{
    Q_OBJECT
public:
    explicit FileIO(QObject *parent = nullptr);

    Q_INVOKABLE QString readTextFile(const QString& fileName);
};
