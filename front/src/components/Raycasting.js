import { Raycaster, Vector2 } from "three"


export default class ray extends Raycaster {

    constructor(scene, camera,) {
        super()
        console.log("ray")
        this.scene = scene;
        this.camera = camera
        //zdefiniowac plansze (w szensie tablice kostek)

        window.addEventListener("click", (e) => {
            this.mouseVector = new Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
            this.setFromCamera(this.mouseVector, this.camera)
            this.intersect = this.intersectObjects(this/*wstawic tablice z elemntami planszy */)
            if (this.intersect[0]) {
                //i tutaj wstawiamy grzyby
            }
        })
    }
}