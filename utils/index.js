export const getFormData = (req) => (name) => req.body[name];
export const getFromURI = (req) => (name) => req.params[name];