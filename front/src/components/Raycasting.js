import { Raycaster, Vector2 } from "three"

import Sphere from './Sphere'

export default class ray extends Raycaster {
    constructor(scene, camera, tablica_kostek,) {
        super()

        this.scene = scene;
        this.camera = camera.threeCamera;
        this.tablica_kostek = tablica_kostek
        this.do_wyslania = [null, null, null, null]
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

                if (this.intersect[0].object.active == true) {
                    let x = this.intersect[0].object.position.x
                    let z = this.intersect[0].object.position.z
                    let kolor_kuli = document.getElementById("pom").value


                    this.do_wyslania[this.intersect[0].object.pomocnicza.split('-')[1]] = kolor_kuli

                    //this.intersect[0].split('-')[0] - rząd
                    //this.intersect[0].split('-')[1] - kolumna i to jest twoje pole tablicy
                    let kula = new Sphere(parseInt(kolor_kuli))
                    kula.position.set(x, 20, z)
                    this.scene.add(kula)

                }
                else {
                    console.log("to tak nie zadziala byczq")
                }

            }

        })
    }
}