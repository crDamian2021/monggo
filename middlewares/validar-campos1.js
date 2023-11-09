
/* app 11 */
 /* validador de campos */
 const validarCampos = (req , res , next) =>{
    
    
    const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json(errors);
}

}

module.exports={
    validarCampos
}

