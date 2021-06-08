import {Raycaster} from "three"


export default class Raycaster extends Raycaster {

    constructor(scene) {
        super()
        console.log("ray")
        this.scene = scene;
        this.ray = new Raycaster()
        this.mouse = new Vector2()

        this.scene.add(this)
    }