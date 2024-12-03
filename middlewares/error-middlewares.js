const errorMiddlewares = (err, req, res, next) =>{
    const status = err.status || 500;
    const message = err.message || "Backend error is occured" ;
    const extraDetails = err.extraDetails || "Error form Backend"  ;

    return res
    .status(status)
    .json({ message, extraDetails})
}

module.exports = errorMiddlewares;