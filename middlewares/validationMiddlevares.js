const Joi = require('joi');


module.exports = {
    addValidation: (req, res, next) => {
        const schema = Joi.object({
            id: Joi.string(),
            name: Joi.string().required(),
            email: Joi.string().required(),
            phone: Joi.string().required(),
            favorite: Joi.boolean().valid(true, false),
    })


    const validationResult = schema.validate(req.body);
    if(validationResult.error){
        return res.status(400).json({ status: validationResult.error.details, message: 'Oops!'})
    }
    next()
},
    addValidationFavorite: (req, res, next) => {
        const schema = Joi.object({
            favorite: Joi.boolean().valid(true, false).required()
        })

        const validationResultFavorite = schema.validate(req.body);
        if(validationResultFavorite.error){
            return res.status(400).json({ status: validationResultFavorite.error.details, message: 'Oops! Not Status'})
        }
        next()
    },
    authValidation: (req, res, next) => {
        const schema = Joi.object({
            password: Joi.string().required(),
            email: Joi.string().required(),
            subscription: Joi.string().required(),
            token: Joi.string()
        })

        const validationResultFavorite = schema.validate(req.body);
        if(validationResultFavorite.error){
            return res.status(400).json({ status: validationResultFavorite.error.details, message: 'Oops! Not Status'})
        }
        next()
    },
    
    loginValidation: (req, res, next) => {
        const schema = Joi.object({
            password: Joi.string().required(),
            email: Joi.string().required(),
            token: Joi.string()
        })

        const validationResultFavorite = schema.validate(req.body);
        if(validationResultFavorite.error){
            return res.status(400).json({ status: validationResultFavorite.error.details, message: 'Oops! Not Status'})
        }
        next()
    },
    


}