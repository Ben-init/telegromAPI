const success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body : message,
    });
}

const error = (req, res, message, status, detail) => {
    console.error(detail);
    res.status(status || 500).send({
        error: '',
        body : message,
    });
}

module.exports = { success, error };