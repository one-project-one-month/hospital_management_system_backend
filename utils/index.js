export const getFormData = (req) => (name) => req.body[name];
export const getIDFromURI = (req) => Number(req.params["id"]);
