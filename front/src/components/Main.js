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

import Keyboard from "./Keyboard"
import Animation from "./Animation"
import Config from './Config';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import marioMD2 from './assets/Icha.MD2';
import Ico from './Ico';

export default class Main {
    constructor(container) {
        // właściwości klasy
        this.camVect = new Vector3(10, 10, 0)
        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(this.scene, container);
        this.camera = new Camera(this.renderer.threeRenderer);

        this.isLoaded = null
        this.animation = null

        // raycaster



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
        let x = 0
        let z = -120
        for (let i = 0; i < 4; i++) {
            this.ico = new Ico(this.scene)


            z = -90 + i * 60
            this.ico.position.set(x, 0, z)
            this.scene.add(this.ico)
        }

        //raycast


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
        if (this.animation) this.animation.update(delta)

        this.renderer.render(this.scene, this.camera.threeCamera);

        // obsługa ruch modelu dopiero kiedy jest załadowany, można tą część umieścić w module Keyboard
        // tworząc w nim np funkcję update() i wywoływać ją poniżej




        //raycaster




        // koniec statystyk
        this.stats.end()

        requestAnimationFrame(this.render.bind(this));
    }

    extractValue(reg, str) {
        const matches = str.match(reg);
        return matches && matches[0];
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