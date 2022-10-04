const success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: 'null',
        body : message,
    });
}

const error = (req, res, message, details, status) => {

    res.status(status || 500).send({
        error: message.message,
        details: details || 'UnexpectedError',
        body : message.stack,
        
    });
}

module.exports = { success, error };