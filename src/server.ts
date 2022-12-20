import App from './app';

const PORT = process.env.PORT || 3000;

const server = new App();

server.app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

export default server;