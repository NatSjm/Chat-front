import io from 'socket.io-client';

let connection;
const socket = () => {
	//console.log('connection', connection);

	return connection = connection
		? connection
		: io('ws://127.0.0.1:4445');
};



const split = document.cookie.split(';');
const accessToken = split[0].split('accessToken=')[1];
socket().on('connect', () => {
socket().emit('userConnected', {accessToken});
//Socket().on('messages', fetchMessages);

});

export default socket;
