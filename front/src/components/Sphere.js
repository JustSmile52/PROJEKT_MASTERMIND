import {
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
} from "three";

export default class Sphere extends Mesh {
    constructor(kolor) {
        let c

        switch (kolor) {
            case 0: // Red
                c = 0xff0000
                break

            case 1: // Blue
                c = 0x0000ff
                break

            case 2: // Green
                c = 0x00ff00
                break

            case 3: // Yellow
                c = 0xffff00
                break

            case 4: // Black
                c = 0x000000
                break
        }

        super(
            new SphereGeometry(25, 50, 50),
            new MeshBasicMaterial({
                color: c,
                wireframe: false,
                transparent: true,
                opacity: 1
            })
        )
    }
}
