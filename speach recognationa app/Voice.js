const btn = document.getElementById('btn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
	console.log('You can speak now!!!');
}
recognition.onresult = function(event){
	var text = event.results[0][0].transcript;
	//document.getElementById('result').innerHTML = text;
	read(text);
}
function read(text){
	var speech = new SpeechSynthesisUtterance();
	speech.text = text;
	if(text.includes('time'))
		speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now ";
	if(text.includes('my name'))
		speech.text = 'tony stark aka iron man';
	window.speechSynthesis.speak(speech);
}