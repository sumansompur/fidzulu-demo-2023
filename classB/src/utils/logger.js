const winston = require('winston');

const filePrefix = (callingFile) => {
    return winston.format((info) => {
        info.message = `${callingFile}:${info.message}`;
        return info;
    })();
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' }),
    ],
});

const createLoggerWithPrefix = (fileName) => {
    return winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            filePrefix(fileName),
            winston.format.colorize(),
            winston.format.printf(({ timestamp, level, message }) => {
                return `${timestamp} [${level.toUpperCase()}]: ${message}`;
            })
        ),
        transports: [
            new winston.transports.Console(),
            // Add more transports as needed
        ],
    });
};

function logRequestResponse(req, res, next) {
    logger.info(`${req.method} ${req.originalUrl}`);



    res.on('finish', () => {
        logger.info(`${res.statusCode} ${res.statusMessage}`);
    });

    next();
}

module.exports = { createLoggerWithPrefix, logRequestResponse, logger };
