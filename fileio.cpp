#include "fileio.h"

#include <QFile>
#include <QDebug>

FileIO::FileIO(QObject *parent)
    : QObject(parent)
{
}

QString FileIO::readTextFile(const QString& fileName)
{
    QFile file(fileName);
    if (!file.open(QFile::ReadOnly)) {
        qCritical() << "Cannot read file" << fileName;
        return QString();
    }
    return QString::fromUtf8(file.readAll());
}
