import { Raycaster, Vector2 } from "three"

import SphereRed from './Spheres/SpherevRed';
import SphereBlue from './Spheres/SphereBlue';
import SphereGreen from './Spheres/SphereGreen';
import SphereYellow from './Spheres/SphereYellow';
import SphereBlack from './Spheres/SphereBlack';

export default class ray extends Raycaster {

    constructor(scene, camera, tablica_kostek,) {
        super()
        this.scene = scene;
        this.camera = camera.threeCamera;
        this.tablica_kostek = tablica_kostek
        // this.czerwona = czerwona
        // this.niebieska = niebieska
        // this.zielona = zielona
        // this.zolta = zolta
        // this.czarna = czarna


        //zdefiniowac plansze (w szensie tablice kostek)
        window.addEventListener("click", (e) => {
            this.mouseVector = new Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
            this.setFromCamera(this.mouseVector, this.camera)
            this.intersect = this.intersectObjects(this.tablica_kostek)
            if (this.intersect[0]) {
                if (this.intersect[0].object.status == false) {
                    console.log(this.intersect[0].object.position)
                    let x = this.intersect[0].object.position.x
                    let z = this.intersect[0].object.position.z
                    let kolor_kuli = document.getElementById("pom").value
                    kolor_kuli = parseInt(kolor_kuli)

                    switch (kolor_kuli) {
                        case 0:
                            console.log("siema")
                            this.czerwona = new SphereRed(this.scene)
                            this.czerwona.position.set(x, 100, z)
                            this.scene.add(this.czerwona)
                            console.log(this.czerwona)
                            break

                        case 1:
                            console.log("niebieski")
                            break


                        case 2:
                            console.log("inny kolor")
                            break

                        case 3:
                            console.log("jakis tam")
                            break

                        case 4:
                            console.log("czarny")
                            break
                    }



                    this.intersect[0].object.status = true
                }
                else {

                    this.intersect[0].object.status = false
                }

            }

        })
    }
}