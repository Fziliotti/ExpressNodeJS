let express = require('express')
let app = express()
let port = 3000

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname })
})

app.get('/contato', (req, res) => {
    // res.sendFile(path.join('/contato.html'));
    res.sendFile('/contato.html', {root: __dirname })
})

app.post('/contato', (req, res) => {
    // res.send('<h1>Precisamos aprender a pegar os valor que usuário digitou!</h1>')
    res.sendFile('/contatoResult.html', {root: __dirname })
})

app.listen(port, () => {
    
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
})