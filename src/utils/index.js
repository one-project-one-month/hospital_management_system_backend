export const getFormData = (req) => (name) => req.body[name];
export const getFromURI = (req) => (name) => req.params[name];
export const toTitle = (word) =>
    "".concat(word.at(0).toUpperCase(), word.slice(1));
