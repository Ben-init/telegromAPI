const success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: 'null',
        body : message,
    });
}

const error = (req, res, message, status, detail) => {
    res.status(status || 500).send({
        error: message.message,
        body : message.stack,
    });
}

module.exports = { success, error };