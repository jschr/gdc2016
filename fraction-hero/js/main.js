var game_started = false;
var update_time;


function init_game() {

	gamestate = new GameState();
	cake = new Cake();
	fracbox = new FractionBox();
	gameplay_stage.addChild(gamestate.instruction_bg);

	init_splash_stage();

	start_game();

}


function start_game() {

	if (game_started == false) {
		game_started = true;

		selectScene("splash");

		update_time = new Date().getTime();
		requestAnimationFrame(update);
	}

}

function stop_game() {
	game_started = false;
}

// main game loop
function update() {

	if (game_started == true) requestAnimationFrame(update);

	var current_time = new Date().getTime();
	var delta_ms = current_time - update_time;
	update_time = current_time;

	gamestate.update(delta_ms);

	render();

}

window.onload = function() {
	setup_rendering();
	start_preload();
}
