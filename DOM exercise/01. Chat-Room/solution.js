function solve() {
   let sendButton = document.getElementById('send');
   let inputMessage = document.getElementById('chat_input');
   let messageField = document.getElementById('chat_messages');
   

   sendButton.addEventListener('click', (e) => {
      let newElement = document.createElement('div');
      newElement.innerHTML = inputMessage.value;
      newElement.classList.add('message', 'my-message');
      messageField.appendChild(newElement)
      inputMessage.value = '';

   })

}


