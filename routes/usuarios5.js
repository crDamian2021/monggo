 
/* app11
   */

const {Router} = require('express');
const {check} = require('express-validator');

const { UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete
   

} = require('../controllers/usuarios5.js')
const {validarCampos} = require('../middlewares/validar-campos1.js')


const router = Router();


router.get('/',UsuariosGet );


/* router.post('/',UsuariosPost ); */

router.put('/:id',UsuariosPut );

/* router.patch('/',UsuariosPatch );

router.delete('/',UsuariosDelete);
 */

/* end-point ejemlo text */

router.post('/',[
    check('nombre','es obligatorio').not().isEmpty(),
    check('passwd','es obligatorio 6 letras').isLength({min:4}),
    check('email','es obligatorio').isEmail(),
    check('rol').custom(async(rol = '') =>{
        const existeRol = await Role.findOne({ rol})
        if(!existeRol){
            throw new Error(`Role ${rol} does not exist`);
        }  
    }),
    validarCampos


],UsuariosPost );

router.delete('/',UsuariosDelete);

router.patch('/',UsuariosPatch );

router.get('/api',(req ,res) =>{
    res.send('hello world text');
})

router.get('/api2',(req ,res) =>{
    res.json({
        ok: true,
        msg:'get API2'
    })
});


router.get('/api3',(req ,res) =>{
    res.status(403).json({
        ok: true,
        msg:'get API3'
    })
});

module.exports = router;