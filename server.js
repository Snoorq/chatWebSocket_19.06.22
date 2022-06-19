const WebSocket = require('ws') // помещаем модуль
const PORT = 3007

console.log('server is running')

// Создание сервера
const server = new WebSocket.Server({ port: PORT }) // В качестве аргумента отправляем объект

server.on('connection', ws => { // На событие подключение клиента
  ws.on('message', message => {
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString())
      }
    })
  })
  ws.send('Welcome to server') // Экземпляр webSocket соединения. Методом send отправляем сообщение клиенту
})
