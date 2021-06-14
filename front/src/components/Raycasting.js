import { Raycaster, Vector2 } from "three"

export default class ray extends Raycaster {

    constructor(scene, camera, tablica_kostek) {
        super()
        console.log("ray")
        this.scene = scene;
        this.camera = camera
        this.tablica_kostek = tablica_kostek
        //zdefiniowac plansze (w szensie tablice kostek)
        console.log(this.tablica_kostek);

        window.addEventListener("click", (e) => {
            this.mouseVector = new Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
            this.setFromCamera(this.mouseVector, this.camera.threeCamera)
            this.intersect = this.intersectObjects(this.tablica_kostek)
            if (this.intersect[0]) {
                console.log("halo halo")


            }
        })
    }
}