import { Raycaster, Vector2 } from "three"
export default class ray extends Raycaster {

    constructor(scene, camera, tablica_kostek) {
        super()
        this.scene = scene;
        this.camera = camera.threeCamera;
        this.tablica_kostek = tablica_kostek
        
       
        //zdefiniowac plansze (w szensie tablice kostek)
        window.addEventListener("click", (e) => {
            this.mouseVector = new Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)       
            this.setFromCamera(this.mouseVector, this.camera)
            this.intersect = this.intersectObjects(this.tablica_kostek)
            if (this.intersect[0]) {
                console.log("halo halo")
                if(this.intersect[0].object.status == false){
                    console.log(this.intersect[0].object.position)
                    let x = this.intersect[0].object.position.x
                    let z = this.intersect[0].object.position.z
                    let kolor_kuli = document.getElementById("pom").value
                    console.log("!!!!",kolor_kuli)


                    this.intersect[0].object.status = true
                }
                else{

                    console.log("zmieniam na false")
                    this.intersect[0].object.status = false
                }

            }

        })
    }
}