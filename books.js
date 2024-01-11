const bookData  = require("./db");

exports.getAll = () => bookData ;
exports.getById = (id) => {
    const foundBook = bookData.find((book) => book.id === Number(id));
    if (foundBook) {
        return foundBook;
    } else {
        return "No se encontro el libro";
    }
};
exports.getByAuthor = (author) => {
    const lowercaseAuthor = author.toLowerCase();
    const matchingBook = bookData.filter((book) => {
        const lowercaseAuthorInBook = book.author.toLowerCase();
        return lowercaseAuthorInBook.includes(lowercaseAuthor);
    });

    if (matchingBook.length > 0) return matchingBook;
    else return "No existen coincidencias "
}
exports.getByTag = (tag) => {
    const lowercaseTag = tag.toLowerCase();
    const matchingTag = bookData.filter((book) =>
    book.tags.some((bookTag) => bookTag.toLowerCase().includes(lowercaseTag)));

    if (matchingTag.length > 0) return matchingTag;
    else return "No existen coincidencias "
}

exports.getByName = (name) => {
    const lowercaseName = name.toLowerCase();
    const matchingName = bookData.filter((book) => 
    book.name.toLowerCase().includes(lowercaseName));

    if (matchingName.length > 0) return matchingName;      
    else return "No existen coincidencias"
}





