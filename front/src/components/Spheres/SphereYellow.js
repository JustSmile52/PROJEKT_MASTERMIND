import {
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
} from "three";

export default class SphereYellow extends Mesh {

    constructor(scene) {
        super()
        this.scene = scene;
        this.geometry = new SphereGeometry(25, 50, 50);
        this.material = new MeshBasicMaterial({
            color: 0xffff00,
            wireframe: false,
            transparent: true,
            opacity: 1
        });

        this.scene.add(this)
    }

}
