import {
    BoxGeometry,
    MeshNormalMaterial,
    Mesh,
} from "three";

export default class Ico extends Mesh {

    constructor(scene) {
        super()
        this.scene = scene;
        this.geometry = new BoxGeometry(50, 50, 50);
        this.material = new MeshNormalMaterial();
        this.status = false
        this.active = false
        this.pomocnicza = 0
        this.scene.add(this)
    }
    update() {
        this.rotation.y += 0.01
    }

}