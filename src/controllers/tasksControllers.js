const getAll = (req, res) => {
    return res.status(200).json({message: 'Controller ta tudo certo'})
};

module.exports = {
    getAll
};