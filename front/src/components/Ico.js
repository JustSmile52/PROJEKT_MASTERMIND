import {
   BoxGeometry,
    MeshNormalMaterial,
    Mesh,
} from "three";

export default class Ico extends Mesh {

    constructor(scene) {
        super()
        console.log("ico")
        this.scene = scene;
        this.geometry = new BoxGeometry(10,10,10);
        this.material = new MeshNormalMaterial();
        
        this.scene.add(this)
    }
    update() {
        this.rotation.y += 0.01
    }

}