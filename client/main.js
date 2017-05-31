var socket = io.connect('http://192.168.1.132:6677', {'forceNew':true});


socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html= data.map(function(message, index){
    return (`
        <div class="message">
        <strong>${message.nickname}</strong> dice :
        <p>${message.text}</p>
         </div>
    `);
}).join(' ');

var div_msgs = document.getElementById('mensajes');
div_msgs.innerHTML = html;
div_msgs.scrollTop = div_msgs.scrollHeight;


}

function addMensaje(e){
 var message = { 
     nickname : document.getElementById('nickname').value,
     text : document.getElementById('text').value,
 };
   document.getElementById('nickname').style.display = 'none';
   socket.emit('add-message', message);
   return false;
}