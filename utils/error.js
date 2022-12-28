export const createError = (status, massage) => {
    const err = new Error();
    err.status = status;
    err.message = massage;
    return err;
}