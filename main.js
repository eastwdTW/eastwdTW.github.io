setInterval(() => toggleSound(), 100);
setInterval(() => updateclock(), 100);
updateclock();

var vol = document.getElementById("bgm");
vol.volume = 0.01;

function toggleSound() {
	var music = document.getElementById("bgm");
	music.play();
}

function updateclock() {
	var date = new Date();
	var formatted_date = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() + " " + date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
	var time = document.getElementById("time");
	time.innerHTML = formatted_date;
}

function hide() {
	var front = document.getElementById("front");
	console.log('test')
}