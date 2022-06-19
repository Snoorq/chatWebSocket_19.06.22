const status = document.getElementById('status')
const message = document.getElementById('messages')
const form = document.getElementById('form')
const input = document.getElementById('input')
const PORT = 3007

const ws = new WebSocket(`ws://localhost:${PORT}`) // Место, где приложение будет искать сервер. Используется специальный протокол ws

/**
 * @param value
 */
// изменяем статус на страницу
function setStatus (value) {
  status.innerText = value
}

/**
 * @param value
 */
// выводим сообщения на страницу
function printMessage (value) {
  const li = document.createElement('li')

  li.innerHTML = value
  message.appendChild(li)
}

// Ниже подписываемся на события

ws.onopen = () => setStatus('ONLINE')

ws.onclose = () => setStatus('DISCONNECTED')

ws.onmessage = response => printMessage(response.data)

form.addEventListener('submit', event => {
  event.preventDefault()

  ws.send(input.value)
  input.value = ''
})
