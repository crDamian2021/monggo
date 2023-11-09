/* app9 */
const { response, request } = require("express");

const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuarios3.js");

const { validationResult } = require("express-validator");

const UsuariosGet = (req = request, res = response) => {
  const { q, nombre = " No name ", apikey } = req.query;

  res.json({
    ok: true,
    msg: "get api - controlador",
    q,
    nombre,
    apikey,
  });
};

const UsuariosPost = async (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  const existeEmail = await usuario.findOne({ correo });
  if (!existeEmail) {
    return res.status(404).json({
      msg: "ya existe email",
    });
  }
  /* funcion saltar los parametros */
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();

  res.json({
    msg: "post API - USUARIO POST",
    Usuario,
  });
};

const UsuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    ok: true,
    msg: "put api - controlador",
    id,
  });
};

const UsuariosPatch = (req, res = response) => {
  res.json({
    ok: true,
    msg: "patch api - controlador",
  });
};

const UsuariosDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete api - controlador",
  });
};

module.exports = {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosPatch,
  UsuariosDelete,
};
