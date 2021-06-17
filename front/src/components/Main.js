import {
    LoadingManager,
    Clock,
    Vector3,
    GridHelper,
    Scene,
    PCFSoftShadowMap,
    Ray,
    getWorldDirection,

} from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Raycasting from './Raycasting';
import Keyboard from "./Keyboard";
import Config from './Config';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import marioMD2 from './assets/Icha.MD2';
import Ico from './Ico';
import active from '../index'

export default class Main {
    constructor(container) {
        // właściwości klasy
        this.camVect = new Vector3(10, 10, 0)
        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(this.scene, container);
        this.camera = new Camera(this.renderer.threeRenderer);

        this.isLoaded = null
        // this.animation = null
        this.tablica_kostek = []



        // grid - testowa siatka na podłoże modelu

        const gridHelper = new GridHelper(1000, 10);
        this.scene.add(gridHelper);

        //stats - statystyki wydajności

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb

        document.body.appendChild(this.stats.dom);

        // zegar - vide lekcja 4

        this.clock = new Clock()

        // manager loadingu, pozwala monitorować progress oraz fakt zakończenia ładowania

        this.manager = new LoadingManager();

        // szesciany
        //* zrobiona tablica dwuwyiarowa

        this.tab2 = []
        let x
        let z
        let pom = 0
        for (let i = 0; i < 12; i++) {
            this.tablica_kostek[i] = []
            for (let j = 0; j < 4; j++) {


                this.ico = new Ico(this.scene)
                this.tablica_kostek[i][j] = this.ico

                x = -330 + i * 60
                z = -90 + j * 60
                this.ico.position.set(x, 0, z)
                this.ico.pomocnicza = i + "-" + j
                this.scene.add(this.ico)
                this.tab2.push(this.ico)
            }
        }
        for (let i = 0; i < 4; i++) {
            this.tab2[i].active = true
        }

        //////////////////////////TODO:  fetch z cyklicznym zapytaniem 1 o wygraną drugiego gracza

        const n = setInterval(()=>{
            fetch("/global", { method: "GET",  })
            .then(res => res.json()
            )
            .then(res =>{
                console.log(res)
                if(res.wygrana){
                    alert(`wygrał ${res.nick}`)
                    clearInterval(n)
                }
            })


            
            .catch(err => console.log(err))
        },500)

        console.log(this.tab2)
        //sfery
        /* let czerwona = new Sphere(0)
        czerwona.position.set(100, 0, 200)
        this.scene.add(czerwona)

        let niebieska = new Sphere(1)
        niebieska.position.set(100, 0, 250)
        this.scene.add(niebieska)

        let zielona = new Sphere(2)
        zielona.position.set(150, 0, 200)
        this.scene.add(zielona)

        let zolta = new Sphere(3)
        zolta.position.set(150, 0, 250)
        this.scene.add(zolta)

        let czarna = new Sphere(4)
        czarna.position.set(200, 0, 250)
        this.scene.add(czarna)*/

        //raycast
        //
        //
        //
        //
        //
        ///
        this.ray = new Raycasting(this.scene, this.camera, this.tab2)
        // moniytor progressu ładowania

        this.manager.onProgress = (item, loaded, total) => {
            console.log(`progress ${item}: ${loaded} ${total}`);
        };


        //
        this.showCard()
        this.render();
    }

    render() {

        // początek pomiaru wydajności
        this.stats.begin()

        // delta do animacji
        var delta = this.clock.getDelta();

        // wykonanie funkcji update w module Animations - zobacz do pliku Animations
        // if (this.animation) this.animation.update(delta)

        this.renderer.render(this.scene, this.camera.threeCamera);

        // obsługa ruch modelu dopiero kiedy jest załadowany, można tą część umieścić w module Keyboard
        // tworząc w nim np funkcję update() i wywoływać ją poniżej


        // switch{
        //     case: GetElementbyId("kolorek").style.background-color = red,
        // }


        //raycaster

        // koniec statystyk
        this.stats.end()

        requestAnimationFrame(this.render.bind(this))
    }

    extractValue(reg, str) {
        const matches = str.match(reg);
        return matches && matches[0];
    }


    getArray() {
        return this.ray.do_wyslania
    }
    getArray2() {
        return this.tab2
    }

    showCard() {

        // WebGL Context Setup
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

        // Full card description and webGL layer (if present)
        const layer = this.extractValue(/(ANGLE)/g, renderer);
        const card = this.extractValue(/((NVIDIA|AMD|Intel)[^\d]*[^\s]+)/, renderer);

        const tokens = card.split(' ');
        tokens.shift();

        // Split the card description up into pieces
        // with brand, manufacturer, card version
        const manufacturer = this.extractValue(/(NVIDIA|AMD|Intel)/g, card);
        const cardVersion = tokens.pop();
        const brand = tokens.join(' ');
        const integrated = manufacturer === 'Intel';

        console.log({
            card,
            manufacturer,
            cardVersion,
            brand,
            integrated,
            vendor,
            renderer
        });
    }
}






