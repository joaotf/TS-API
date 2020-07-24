import App from '../App';
const PORT = 8080;

try {
    App.listen(process.env.PORT || PORT);   
    console.log(`Servidor disponível na porta ${PORT}`);
} catch (error) {
    console.error(error)
}

