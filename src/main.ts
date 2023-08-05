import { spawnPlayer } from "./entity";
import { Engine } from "./engine";

window.addEventListener("DOMContentLoaded", () => {
	window.engine = new Engine(
		spawnPlayer(Engine.WIDTH / 2, Engine.HEIGHT / 2)
	);
	window.engine.render();
});

declare global {
	interface Window {
		engine: Engine;
	}
}
