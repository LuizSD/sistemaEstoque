module.exports = {
    getBodyProducts (body) {
        let values = '(';
        values += JSON.stringify(body.name) + ',';
        values += body.value + ',';
        values += body.qnt + ')';
        return values;
    }
}