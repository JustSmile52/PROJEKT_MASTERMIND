import {
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
} from "three";

export default class SphereBlue extends Mesh {

    constructor(scene) {
        super()
        this.scene = scene;
        this.geometry = new SphereGeometry(25, 50, 50);
        this.material = new MeshBasicMaterial({
            color: 0x0000ff,
            wireframe: false,
            transparent: true,
            opacity: 1
        });

        this.scene.add(this)
    }

}