require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const dbConnection = require('./database/config');
const { dbConnection } = require('./database/config'); // Ajusta la ruta según tu estructura

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());

dbConnection();

app.use('/api/docentes', require('./routes/docente.routes'));
app.use('/api/empresas', require('./routes/empresaExterna.routes'));
app.use('/api/registroLLaves', require('./routes/registroLlave.routes'));
app.use('/api/usuariosEmpresa', require('./routes/usuarioEmpresa.routes'));
app.use('/api/visitas', require('./routes/visita.routes'));
app.use('/api/admins', require('./routes/admin.routes'));


app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Servidor funcionando'
    });
});
app.listen(process.env.PORT, () => {
    console.log('El servidor está corriendo en el puerto: ' +
        process.env.PORT);
});