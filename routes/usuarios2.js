/* app8 */

const { Router } = require('express'); 

const { 
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete,} = require('../controllers/usuarios2')

 const router = Router();

router.get('/',UsuariosGet );

router.post('/',UsuariosPost );

router.put('/:id',UsuariosPut );

router.patch('/',UsuariosPatch );

router.delete('/',UsuariosDelete);


/* end-point ejemlo text */

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


module.exports  = router;





