const asyncHandler = (fun) => async (req, res, next) => {
    try {
        await fun(req, res, next); // Await the asynchronous function
    } catch (error) {
        console.log(error);
        next(error); // Pass the error to the next middleware
    }
};

export default asyncHandler;
