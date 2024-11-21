import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'; // Cambiar por addons
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(animate);

let width = window.innerWidth;
let height = window.innerHeight;
let aspectRatio = width / height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.set(0, 60, 80);

let controls = new OrbitControls(camera, renderer.domElement);
// stats
let container = document.getElementById('container');
const stats = new Stats();
container.appendChild(stats.dom);

// dat.GUI
const gui = new GUI();
gui.close();

let params = {
    color1: new THREE.Color(0xffffff),
    intensidad1: 10,
    distancia: 22,
    decay: 0.5,

    color2: new THREE.Color(0xddd622),
    intensidad2: 6,

};

// GUI folders and controls / (object, property, [min], [max], [step])

const PointLight = gui.addFolder("Point");
PointLight.addColor(params, "color1");
PointLight.add(params, "intensidad1", 0, 10, 0.05);
PointLight.add(params, "distancia", -10, 100, 1);
PointLight.add(params, "decay", 0, 5, 0.5)
.onChange(ActualizarLuz);

const RectAreaLight = gui.addFolder("RectArea");
RectAreaLight.addColor(params, "color2");
RectAreaLight.add(params, "intensidad2", 0, 10, 0.05)
.onChange(ActualizarLuz);



// Importación de texturas 
const textureLoader = new THREE.TextureLoader();

//------------------------------
// Ladrillo pared exterior
const albedoTexture = textureLoader.load('./texturas/ladrilloCol.jpg'); 
const normalTexture = textureLoader.load('./texturas/ladrilloNorm.jpg'); 
const roughnessTexture = textureLoader.load('./texturas/ladrilloRou.jpg'); 
const aoTexture = textureLoader.load('./texturas/ladrilloAO.jpg'); 
const displacementTexture = textureLoader.load('./texturas/ladrilloHeig.png'); 

// Ajustes
albedoTexture.wrapS = THREE.RepeatWrapping; 
albedoTexture.wrapT = THREE.RepeatWrapping; 
albedoTexture.repeat.set(3, 1); 
normalTexture.wrapS = THREE.RepeatWrapping; 
normalTexture.wrapT = THREE.RepeatWrapping; 
normalTexture.repeat.set(3, 1); 
roughnessTexture.wrapS = THREE.RepeatWrapping; 
roughnessTexture.wrapT = THREE.RepeatWrapping; 
roughnessTexture.repeat.set(3, 1); 
aoTexture.wrapS = THREE.RepeatWrapping; 
aoTexture.wrapT = THREE.RepeatWrapping; 
aoTexture.repeat.set(3, 1); 
displacementTexture.wrapS = THREE.RepeatWrapping; 
displacementTexture.wrapT = THREE.RepeatWrapping; 
displacementTexture.repeat.set(3, 1);

//------------------------------
// Ladrillo pared exterior (puerta)
const albedoTexture2 = textureLoader.load('./texturas/ladrilloCol.jpg'); 
const normalTexture2 = textureLoader.load('./texturas/ladrilloNorm.jpg'); 
const roughnessTexture2 = textureLoader.load('./texturas/ladrilloRou.jpg'); 
const aoTexture2 = textureLoader.load('./texturas/ladrilloAO.jpg'); 
const displacementTexture2 = textureLoader.load('./texturas/ladrilloHeig.png'); 

// Ajustes
albedoTexture2.wrapS = THREE.RepeatWrapping; 
albedoTexture2.wrapT = THREE.RepeatWrapping; 
albedoTexture2.repeat.set(1, 1); 
normalTexture2.wrapS = THREE.RepeatWrapping; 
normalTexture2.wrapT = THREE.RepeatWrapping; 
normalTexture2.repeat.set(1, 1); 
roughnessTexture2.wrapS = THREE.RepeatWrapping; 
roughnessTexture2.wrapT = THREE.RepeatWrapping; 
roughnessTexture2.repeat.set(1, 1); 
aoTexture2.wrapS = THREE.RepeatWrapping; 
aoTexture2.wrapT = THREE.RepeatWrapping; 
aoTexture2.repeat.set(1, 1); 
displacementTexture2.wrapS = THREE.RepeatWrapping; 
displacementTexture2.wrapT = THREE.RepeatWrapping; 
displacementTexture2.repeat.set(1, 1);

//------------------------------
// Ladrillo pared exterior (puerta)
const albedoTexture3 = textureLoader.load('./texturas/ladrilloCol.jpg'); 
const normalTexture3 = textureLoader.load('./texturas/ladrilloNorm.jpg'); 
const roughnessTexture3 = textureLoader.load('./texturas/ladrilloRou.jpg'); 
const aoTexture3 = textureLoader.load('./texturas/ladrilloAO.jpg'); 
const displacementTexture3 = textureLoader.load('./texturas/ladrilloHeig.png'); 

// Ajustes
albedoTexture3.wrapS = THREE.RepeatWrapping; 
albedoTexture3.wrapT = THREE.RepeatWrapping; 
albedoTexture3.repeat.set(0.5, 1); 
normalTexture3.wrapS = THREE.RepeatWrapping; 
normalTexture3.wrapT = THREE.RepeatWrapping; 
normalTexture3.repeat.set(0.5, 1); 
roughnessTexture3.wrapS = THREE.RepeatWrapping; 
roughnessTexture3.wrapT = THREE.RepeatWrapping; 
roughnessTexture3.repeat.set(0.5, 1); 
aoTexture3.wrapS = THREE.RepeatWrapping; 
aoTexture3.wrapT = THREE.RepeatWrapping; 
aoTexture3.repeat.set(0.5, 1); 
displacementTexture3.wrapS = THREE.RepeatWrapping; 
displacementTexture3.wrapT = THREE.RepeatWrapping; 
displacementTexture3.repeat.set(0.5, 1);

//------------------------------
// Ladrillo fontal superior pared exterior (puerta)
const albedoTexture4 = textureLoader.load('./texturas/ladrilloCol.jpg'); 
const normalTexture4 = textureLoader.load('./texturas/ladrilloNorm.jpg'); 
const roughnessTexture4 = textureLoader.load('./texturas/ladrilloRou.jpg'); 
const aoTexture4 = textureLoader.load('./texturas/ladrilloAO.jpg'); 
const displacementTexture4 = textureLoader.load('./texturas/ladrilloHeig.png'); 

// Ajustes
albedoTexture4.wrapS = THREE.RepeatWrapping; 
albedoTexture4.wrapT = THREE.RepeatWrapping; 
albedoTexture4.repeat.set(2, 1); 
normalTexture4.wrapS = THREE.RepeatWrapping; 
normalTexture4.wrapT = THREE.RepeatWrapping; 
normalTexture4.repeat.set(2, 1); 
roughnessTexture4.wrapS = THREE.RepeatWrapping; 
roughnessTexture4.wrapT = THREE.RepeatWrapping; 
roughnessTexture4.repeat.set(2, 1); 
aoTexture4.wrapS = THREE.RepeatWrapping; 
aoTexture4.wrapT = THREE.RepeatWrapping; 
aoTexture4.repeat.set(2, 1); 
displacementTexture4.wrapS = THREE.RepeatWrapping; 
displacementTexture4.wrapT = THREE.RepeatWrapping; 
displacementTexture4.repeat.set(2, 1);

//------------------------------
// Columnas
const albedoTextureC = textureLoader.load('./texturas/piedrasCol.jpg'); 
const normalTextureC = textureLoader.load('./texturas/piedrasNorm.jpg'); 
const roughnessTextureC = textureLoader.load('./texturas/piedrasRou.jpg'); 
const aoTextureC = textureLoader.load('./texturas/piedrasAO.jpg'); 
const displacementTextureC = textureLoader.load('./texturas/piedrasDis.jpg'); 

// Ajustes
albedoTextureC.wrapS = THREE.RepeatWrapping; 
albedoTextureC.wrapT = THREE.RepeatWrapping; 
albedoTextureC.repeat.set(2, 1); 
normalTextureC.wrapS = THREE.RepeatWrapping; 
normalTextureC.wrapT = THREE.RepeatWrapping;
normalTextureC.repeat.set(2, 1); 
roughnessTextureC.wrapS = THREE.RepeatWrapping; 
roughnessTextureC.wrapT = THREE.RepeatWrapping; 
roughnessTextureC.repeat.set(2, 1); 
aoTextureC.wrapS = THREE.RepeatWrapping; 
aoTextureC.wrapT = THREE.RepeatWrapping; 
aoTextureC.repeat.set(2, 1); 
displacementTextureC.wrapS = THREE.RepeatWrapping; 
displacementTextureC.wrapT = THREE.RepeatWrapping; 
displacementTextureC.repeat.set(2, 1);

//------------------------------
// Parte Superior Entrada (techo)
const albedoTextureT = textureLoader.load('./texturas/defensaCol.jpg'); 
const normalTextureT = textureLoader.load('./texturas/defensaNorm.jpg'); 
const roughnessTextureT = textureLoader.load('./texturas/defensaRou.jpg'); 
const aoTextureT = textureLoader.load('./texturas/defensaAO.jpg'); 
const displacementTextureT = textureLoader.load('./texturas/defensaDis.jpg'); 

// Ajustes
albedoTextureT.wrapS = THREE.RepeatWrapping; 
albedoTextureT.wrapT = THREE.RepeatWrapping; 
albedoTextureT.repeat.set(10, 0.5); 
normalTextureT.wrapS = THREE.RepeatWrapping; 
normalTextureT.wrapT = THREE.RepeatWrapping;
normalTextureT.repeat.set(10, 0.5); 
roughnessTextureT.wrapS = THREE.RepeatWrapping; 
roughnessTextureT.wrapT = THREE.RepeatWrapping; 
roughnessTextureT.repeat.set(10, 0.5); 
aoTextureT.wrapS = THREE.RepeatWrapping; 
aoTextureT.wrapT = THREE.RepeatWrapping; 
aoTextureT.repeat.set(10, 0.5); 
displacementTextureT.wrapS = THREE.RepeatWrapping; 
displacementTextureT.wrapT = THREE.RepeatWrapping; 
displacementTextureT.repeat.set(10, 0.5);

//------------------------------
// Puertas frontales
const albedoTextureC2 = textureLoader.load('./texturas/piedrasCol.jpg'); 
const normalTextureC2 = textureLoader.load('./texturas/piedrasNorm.jpg'); 
const roughnessTextureC2 = textureLoader.load('./texturas/piedrasRou.jpg'); 
const aoTextureC2 = textureLoader.load('./texturas/piedrasAO.jpg'); 
const displacementTextureC2 = textureLoader.load('./texturas/piedrasDis.jpg');

// Ajustes
albedoTextureC2.wrapS = THREE.RepeatWrapping; 
albedoTextureC2.wrapT = THREE.RepeatWrapping; 
albedoTextureC2.repeat.set(1, 3); 
normalTextureC2.wrapS = THREE.RepeatWrapping; 
normalTextureC2.wrapT = THREE.RepeatWrapping;
normalTextureC2.repeat.set(1, 3); 
roughnessTextureC2.wrapS = THREE.RepeatWrapping; 
roughnessTextureC2.wrapT = THREE.RepeatWrapping; 
roughnessTextureC2.repeat.set(1, 3); 
aoTextureC2.wrapS = THREE.RepeatWrapping; 
aoTextureC2.wrapT = THREE.RepeatWrapping; 
aoTextureC2.repeat.set(1, 3); 
displacementTextureC2.wrapS = THREE.RepeatWrapping; 
displacementTextureC2.wrapT = THREE.RepeatWrapping; 
displacementTextureC2.repeat.set(1, 3);

//------------------------------
// Piso
const albedoTextureP = textureLoader.load('./texturas/pisoCol.jpg'); 
const normalTextureP = textureLoader.load('./texturas/pisoNorm.png'); 
const roughnessTextureP = textureLoader.load('./texturas/pisoRou.jpg'); 
const aoTextureP = textureLoader.load('./texturas/pisoAO.jpg'); 
const displacementTextureP = textureLoader.load('./texturas/pisoDis.tiff'); 
const metalnessTextureP = textureLoader.load('./texturas/pisoMetalic.jpg');

// Piso Afuera
const albedoTexturePA = textureLoader.load('./texturas/piedCol.png'); 
const normalTexturePA = textureLoader.load('./texturas/piedNorm.png'); 
const roughnessTexturePA = textureLoader.load('./texturas/piedRou.png'); 
const aoTexturePA = textureLoader.load('./texturas/piedAO.png'); 
const displacementTexturePA = textureLoader.load('./texturas/piedHeig.png');  

// Ajustes
albedoTexturePA.wrapS = THREE.RepeatWrapping; 
albedoTexturePA.wrapT = THREE.RepeatWrapping; 
albedoTexturePA.repeat.set(4, 1); 
normalTexturePA.wrapS = THREE.RepeatWrapping; 
normalTexturePA.wrapT = THREE.RepeatWrapping;
normalTexturePA.repeat.set(4, 1); 
roughnessTexturePA.wrapS = THREE.RepeatWrapping; 
roughnessTexturePA.wrapT = THREE.RepeatWrapping; 
roughnessTexturePA.repeat.set(4, 1); 
aoTexturePA.wrapS = THREE.RepeatWrapping; 
aoTexturePA.wrapT = THREE.RepeatWrapping; 
aoTexturePA.repeat.set(4, 1); 
displacementTexturePA.wrapS = THREE.RepeatWrapping; 
displacementTexturePA.wrapT = THREE.RepeatWrapping; 
displacementTexturePA.repeat.set(4, 1);

//------------------------------
// Escaleras
const albedoTextureE = textureLoader.load('./texturas/brickCol.jpg'); 
const normalTextureE = textureLoader.load('./texturas/brickNorm.jpg'); 
const roughnessTextureE = textureLoader.load('./texturas/brickRou.jpg'); 
const aoTextureE = textureLoader.load('./texturas/brickAO.jpg'); 
const displacementTextureE = textureLoader.load('./texturas/brickDis.jpg'); 

// Ajustes
albedoTextureE.wrapS = THREE.RepeatWrapping; 
albedoTextureE.wrapT = THREE.RepeatWrapping; 
albedoTextureE.repeat.set(3, 0.5); 
normalTextureE.wrapS = THREE.RepeatWrapping; 
normalTextureE.wrapT = THREE.RepeatWrapping; 
normalTextureE.repeat.set(3, 0.5); 
roughnessTextureE.wrapS = THREE.RepeatWrapping; 
roughnessTextureE.wrapT = THREE.RepeatWrapping; 
roughnessTextureE.repeat.set(3, 0.5); 
aoTextureE.wrapS = THREE.RepeatWrapping; 
aoTextureE.wrapT = THREE.RepeatWrapping; 
aoTextureE.repeat.set(3, 0.5);  
displacementTextureE.wrapS = THREE.RepeatWrapping; 
displacementTextureE.wrapT = THREE.RepeatWrapping; 
displacementTextureE.repeat.set(3, 0.5);

//------------------------------
// Mano Escultura - Sala 3
const albedoTextureM = textureLoader.load('./texturas/manoCol.jpg'); 
const normalTextureM = textureLoader.load('./texturas/manoNorm.jpg'); 
const roughnessTextureM = textureLoader.load('./texturas/manoRou.jpg'); 
const aoTextureM = textureLoader.load('./texturas/manoAO.jpg'); 
const displacementTextureM = textureLoader.load('./texturas/manoDis.jpg'); 

// Ajustes
albedoTextureM.wrapS = THREE.RepeatWrapping; 
albedoTextureM.wrapT = THREE.RepeatWrapping; 
albedoTextureM.repeat.set(3, 5); 

//------------------------------
// Casco Escultura - Sala 3
const albedoTextureCasco = textureLoader.load('./texturas/cascoCol.jpg'); 

// Ajustes
albedoTextureC.wrapS = THREE.RepeatWrapping; 
albedoTextureC.wrapT = THREE.RepeatWrapping; 
albedoTextureC.repeat.set(3, 5); 

//------------------------------
// Samurai Escultura - Sala 3
const albedoTextureS = textureLoader.load('./texturas/samuraiCol.png'); 

// Ajustes
albedoTextureC.wrapS = THREE.RepeatWrapping; 
albedoTextureC.wrapT = THREE.RepeatWrapping; 
albedoTextureC.repeat.set(3, 5); 

//------------------------------
// Monedas Escultura - Sala 3
const albedoTextureCuadro = textureLoader.load('./texturas/cuadroCol.jpg'); 
const normalTextureCuadro = textureLoader.load('./texturas/cuadroNorm.jpg'); 
const roughnessTextureCuadro = textureLoader.load('./texturas/cuadroRou.jpg'); 
const aoTextureCuadro = textureLoader.load('./texturas/cuadroAO.jpg'); 
const displacementTextureCuadro = textureLoader.load('./texturas/cuadroHei.jpg'); 
const metalnessTextureCuadro = textureLoader.load('./texturas/cuadroMetal.jpg');


// Ajustes
albedoTextureCuadro.wrapS = THREE.RepeatWrapping; 
albedoTextureCuadro.wrapT = THREE.RepeatWrapping; 
albedoTextureCuadro.repeat.set(5, 5); 
normalTextureCuadro.wrapS = THREE.RepeatWrapping; 
normalTextureCuadro.wrapT = THREE.RepeatWrapping;
normalTextureCuadro.repeat.set(5, 5); 
roughnessTextureCuadro.wrapS = THREE.RepeatWrapping; 
roughnessTextureCuadro.wrapT = THREE.RepeatWrapping; 
roughnessTextureCuadro.repeat.set(5, 5); 
aoTextureCuadro.wrapS = THREE.RepeatWrapping; 
aoTextureCuadro.wrapT = THREE.RepeatWrapping; 
aoTextureCuadro.repeat.set(5, 5); 
displacementTextureCuadro.wrapS = THREE.RepeatWrapping; 
displacementTextureCuadro.wrapT = THREE.RepeatWrapping; 
displacementTextureCuadro.repeat.set(5, 5);
metalnessTextureCuadro.wrapS = THREE.RepeatWrapping; 
metalnessTextureCuadro.wrapT = THREE.RepeatWrapping; 
metalnessTextureCuadro.repeat.set(5, 5);

//------------------------------
// Tapete Centro Esculturas
const albedoTextureTapete = textureLoader.load('./texturas/tapete.jpg'); 

// Ajustes
albedoTextureTapete.wrapS = THREE.RepeatWrapping; 
albedoTextureTapete.wrapT = THREE.RepeatWrapping; 
albedoTextureTapete.repeat.set(3, 5); 


const creacionCastillo = () => {

    // Pared Atras
    const paredGeometry = new THREE.BoxGeometry(250, 30, 1); 
    const paredMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture, 
        normalMap: normalTexture, 
        roughnessMap: roughnessTexture, 
        aoMap: aoTexture, 
        displacementMap: displacementTexture, 
        displacementScale: 0.2, 
     }); 
    const pared = new THREE.Mesh(paredGeometry, paredMaterial);
    pared.position.set(0, 9, -84); 
    scene.add(pared);

    // Pared Adelante y controlador 
    const paredAdelanteGeometry = new THREE.BoxGeometry(100, 30, 1); 
    const paredAdelanteMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture, 
        normalMap: normalTexture, 
        roughnessMap: roughnessTexture, 
        aoMap: aoTexture, 
        displacementMap: displacementTexture, 
        displacementScale: 0.2, 
        });
        
    const paredA = new THREE.Mesh(paredAdelanteGeometry, paredAdelanteMaterial);
    paredA.position.set(-75, 9, 66); 
    scene.add(paredA);

    const paredA2 = paredA.clone(); 
    paredA2.position.set(75, 9, 66); 
    scene.add(paredA2);

    // Pared Entrada frontal y controlador (puerta)
    const paredEntradaGeometry = new THREE.BoxGeometry(10, 40, 2); 
    const paredEntradaMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture3,
        normalMap: normalTexture3, 
        roughnessMap: roughnessTexture3, 
        aoMap: aoTexture3, 
        displacementMap: displacementTexture3, 
        displacementScale: 0.2, 
        });
        
    const paredEntrada = new THREE.Mesh(paredEntradaGeometry, paredEntradaMaterial);
    paredEntrada.position.set(-20, 14, 79); 
    scene.add(paredEntrada);

    const paredEntrada2 = paredEntrada.clone(); 
    paredEntrada2.position.set(20, 14, 79); 
    scene.add(paredEntrada2);

    // Pared Lateral y controlador (puerta)
    const paredLateralGeometry = new THREE.BoxGeometry(15, 40, 1); 
    const paredLateralMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture2, 
        normalMap: normalTexture2, 
        roughnessMap: roughnessTexture2, 
        aoMap: aoTexture2, 
        displacementMap: displacementTexture2, 
        displacementScale: 0.2, 
     }); 
    const paredL = new THREE.Mesh(paredLateralGeometry, paredLateralMaterial);
    paredL.rotation.y = Math.PI / 2
    paredL.position.set(-25, 14, 73); 
    scene.add(paredL);

    const paredL2 = paredL.clone(); 
    paredL2.position.set(25, 14, 73); 
    scene.add(paredL2);
    
    // Paredes Laterales y Controlador
    const paredLGeometry = new THREE.BoxGeometry(150, 30, 1); 
    const paredLMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture, 
        normalMap: normalTexture, 
        roughnessMap: roughnessTexture, 
        aoMap: aoTexture, 
        displacementMap: displacementTexture, 
        displacementScale: 0.2, 
    }); 

    const lateral = new THREE.Mesh(paredLGeometry, paredLMaterial);
    lateral.rotation.y = Math.PI / 2
    lateral.position.set(-124.5, 9, -9); 
    scene.add(lateral);

    const lateral2 = lateral.clone(); 
    lateral2.position.set(124.5, 9, -9); 
    scene.add(lateral2);

    // Arriba Fachada Entrada (puerta)
    const entradaGeometry = new THREE.BoxGeometry(50, 8, 7); 
    const entradaMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture4, 
        normalMap: normalTexture4, 
        roughnessMap: roughnessTexture4, 
        aoMap: aoTexture4, 
        displacementMap: displacementTexture4, 
        displacementScale: 0.2, // 
     }); 
    const entrada = new THREE.Mesh(entradaGeometry, entradaMaterial);
    entrada.position.set(0, 38, 77); 
    scene.add(entrada);

    // Superiores Arriba y controlador (techo)
    const arribaLGeometry = new THREE.BoxGeometry(100, 5, 11); // Ancho, alto, grosor
    const arribaLMaterial = new THREE.MeshStandardMaterial({
        map: albedoTextureT, 
        normalMap: normalTextureT, 
        roughnessMap: roughnessTextureT, 
        aoMap: aoTextureT, 
        displacementMap: displacementTextureT, 
        displacementScale: 0.2, // 
     }); 
    const arribaL = new THREE.Mesh(arribaLGeometry, arribaLMaterial);
    arribaL.position.set(-75, 21.5, 72); 
    scene.add(arribaL);

    const arribaL2 = arribaL.clone(); 
    arribaL2.position.set(75, 21.5, 72); 
    scene.add(arribaL2);

    // Torres afuera paredes y controlador
    const torreGeometry = new THREE.CylinderGeometry(2, 5, 15, 32); // abajo, arriba, altura, cantidad geo
    const torreMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTextureC,
        normalMap: normalTextureC, 
        roughnessMap: roughnessTextureC, 
        aoMap: aoTextureC, 
        displacementMap: displacementTextureC, 
        displacementScale: 0.2, 
        });

    const torre = new THREE.Mesh(torreGeometry, torreMaterial);
    torre.position.set(-34, 0, 73);
    scene.add(torre);

    const torre2 = torre.clone(); 
    torre2.position.set(-55, 0, 73); 
    scene.add(torre2);

    const torre3 = torre.clone(); 
    torre3.position.set(34, 0, 73); 
    scene.add(torre3);

    const torre4 = torre.clone(); 
    torre4.position.set(55, 0, 73); 
    scene.add(torre4);

    const torre5 = torre.clone(); 
    torre5.position.set(76, 0, 73); 
    scene.add(torre5);

    const torre6 = torre.clone(); 
    torre6.position.set(97, 0, 73); 
    scene.add(torre6);

    const torre7 = torre.clone(); 
    torre7.position.set(118, 0, 73); 
    scene.add(torre7);

    const torre8 = torre.clone(); 
    torre8.position.set(-76, 0, 73); 
    scene.add(torre8);

    const torre9 = torre.clone(); 
    torre9.position.set(-97, 0, 73); 
    scene.add(torre9);

    const torre10 = torre.clone(); 
    torre10.position.set(-118, 0, 73); 
    scene.add(torre10);

    // Torres afuera arriba y controlador 
    const torreAGeometry = new THREE.CylinderGeometry(5, 2, 15, 32); // abajo, arriba, altura, cantidad geo
    const torreAMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTextureC,
        normalMap: normalTextureC, 
        roughnessMap: roughnessTextureC, 
        aoMap: aoTextureC, 
        displacementMap: displacementTextureC, 
        displacementScale: 0.2, 
        });

    const torreA = new THREE.Mesh(torreAGeometry, torreAMaterial);
    torreA.position.set(-34, 11.5, 73);
    scene.add(torreA);

    const torreA2 = torreA.clone(); 
    torreA2.position.set(-55, 11.5, 73); 
    scene.add(torreA2);

    const torreA3 = torreA.clone(); 
    torreA3.position.set(34, 11.5, 73); 
    scene.add(torreA3);

    const torreA4 = torreA.clone(); 
    torreA4.position.set(55, 11.5, 73); 
    scene.add(torreA4);

    const torreA5 = torreA.clone(); 
    torreA5.position.set(76, 11.5, 73); 
    scene.add(torreA5);

    const torreA6 = torreA.clone(); 
    torreA6.position.set(97, 11.5, 73); 
    scene.add(torreA6);

    const torreA7 = torreA.clone(); 
    torreA7.position.set(118, 11.5, 73); 
    scene.add(torreA7);

    const torreA8 = torreA.clone(); 
    torreA8.position.set(-76, 11.5, 73); 
    scene.add(torreA8);

    const torreA9 = torreA.clone(); 
    torreA9.position.set(-97, 11.5, 73); 
    scene.add(torreA9);

    const torreA10 = torreA.clone(); 
    torreA10.position.set(-118, 11.5, 73); 
    scene.add(torreA10);

    //  Escaleras y controlador
    const escaleraGeometry = new THREE.BoxGeometry(31, 2, 10); 
    const escaleraMaterial = new THREE.MeshStandardMaterial({
        map: albedoTextureE,
        normalMap: normalTextureE, 
        roughnessMap: roughnessTextureE, 
        aoMap: aoTextureE, 
        displacementMap: displacementTextureE, 
        displacementScale: 0.2, 
    }); 

    const escalera = new THREE.Mesh(escaleraGeometry, escaleraMaterial);
    escalera.position.set(0, -6.5, 83);
    scene.add(escalera);

    const escalera2 = escalera.clone(); 
    escalera2.position.set(0, -8, 86); 
    scene.add(escalera2);

    const escalera3 = escalera.clone(); 
    escalera3.position.set(0, -10, 89); 
    scene.add(escalera3);
    
    const escalera4 = escalera.clone(); 
    escalera4.position.set(0, -12, 92); 
    scene.add(escalera4);
    
    const escalera5 = escalera.clone(); 
    escalera5.position.set(0, -14, 94); 
    scene.add(escalera5);

    const escalera6 = escalera.clone(); 
    escalera6.position.set(0, -16, 96); 
    scene.add(escalera6);

    // Muros pequeños entrada y controlador
    const entradaMurosGeometry = new THREE.BoxGeometry(10, 12, 18.5); 
    const entradaMurosMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture3,
        normalMap: normalTexture3, 
        roughnessMap: roughnessTexture3, 
        aoMap: aoTexture3, 
        displacementMap: displacementTexture3, 
        displacementScale: 0.2,
     }); 
    const muros = new THREE.Mesh(entradaMurosGeometry, entradaMurosMaterial);
    muros.position.set(-20.5, -11, 89); 
    scene.add(muros);

    const muros2 = muros.clone(); 
    muros2.position.set(20.5, -11, 89); 
    scene.add(muros2);
    
    // Complemento Final entrada (Debajo columnas)
    const entradaFinalGeometry = new THREE.BoxGeometry(100, 12, 18.5); 
    const entradaFinalMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexturePA, 
        normalMap: normalTexturePA, 
        roughnessMap: roughnessTexturePA, 
        aoMap: aoTexturePA, 
        displacementMap: displacementTexturePA, 
        displacementScale: 0.2, 
     }); 
    const final = new THREE.Mesh(entradaFinalGeometry, entradaFinalMaterial);
    final.position.set(-74.5, -12, 74); 
    scene.add(final);

    const final2 = final.clone(); 
    final2.position.set(74.5, -12, 74); 
    scene.add(final2);

    // Piso
    const pisoGeometry = new THREE.PlaneGeometry(250, 150); 
    const pisoMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTextureP, 
        normalMap: normalTextureP, 
        roughnessMap: roughnessTextureP, 
        aoMap: aoTextureP, 
        displacementMap: displacementTextureP, 
        displacementScale: 0.2, 
        metalnessMap: metalnessTextureP, 
        metalness: 0.5 
      });
      
    const piso = new THREE.Mesh(pisoGeometry, pisoMaterial); 
    piso.rotation.x = -Math.PI / 2;  
    piso.position.set(0, -6, -9);
    scene.add(piso);

    // Otra parte de salida
    const pisoGeometry2 = new THREE.PlaneGeometry(49, 15); 
    const pisoMaterial2 = new THREE.MeshStandardMaterial({ 
        map: albedoTextureP, 
        normalMap: normalTextureP, 
        roughnessMap: roughnessTextureP, 
        aoMap: aoTextureP, 
        displacementMap: displacementTextureP, 
        displacementScale: 0.2, 
        metalnessMap: metalnessTextureP,
        metalness: 0.5
      });
      
    const piso2 = new THREE.Mesh(pisoGeometry2, pisoMaterial2); 
    piso2.rotation.x = -Math.PI / 2;  
    piso2.position.set(0, -6, 73);
    scene.add(piso2);

};
let dragon;
const crearSala1 = () => {
    // Pared Derecha Vertical Grande
    const paredSala1traGeometry = new THREE.BoxGeometry(40, 30, 1); 
    const paredSala1traMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); 
    const sala1 = new THREE.Mesh(paredSala1traGeometry, paredSala1traMaterial);
    sala1.rotation.y = -Math.PI / 2;  
    sala1.position.set(25, 9, 9); 
    scene.add(sala1);

    // Pared Derecha Vertical Pequeña
    const paredSalaPeqGeometry = new THREE.BoxGeometry(15, 30, 1); 
    const paredSalaPeqMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); 
    const salaPeq = new THREE.Mesh(paredSalaPeqGeometry, paredSalaPeqMaterial);
    salaPeq.rotation.y = -Math.PI / 2;  
    salaPeq.position.set(25, 9, 60); 
    scene.add(salaPeq);

    //Vitrina 1

        // Soporte base 
        const geometry1 = new THREE.BoxGeometry(64.2, 6.7, 23.8); 
        const material1 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo = new THREE.Mesh(geometry1, material1);
        cubo.rotation.y = -Math.PI / 2; 
        cubo.position.set(75, -5, -7); 
        scene.add(cubo);
    
        //Piso Base
        const geometry3 = new THREE.BoxGeometry(60, 7.1, 19.7); 
        const material3 = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
        const cubo3 = new THREE.Mesh(geometry3, material3);
        cubo3.rotation.y = -Math.PI / 2; 
        cubo3.position.set(75, -5, -7); 
        scene.add(cubo3);

        // Cargar  texturas, cada lado del muro
        const textureLoader = new THREE.TextureLoader();
        const frontTexture = textureLoader.load('./imagenes/pintura.jpg'); 
        const backTexture = textureLoader.load('./imagenes/pintura1.jpg');  

        const defaultMaterial = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
        // Crear materiales para cada cara
        const materials = [
            defaultMaterial, // Lado derecho
            defaultMaterial, // Lado izquierdo
            defaultMaterial, // Lado superior
            defaultMaterial, // Lado inferior
            new THREE.MeshBasicMaterial({ map: frontTexture }), // Frente
            new THREE.MeshBasicMaterial({ map: backTexture })   // Parte trasera 

        ];
        // Muro separacion
        const geometry4 = new THREE.BoxGeometry(58, 32, 1);
        const cubo4 = new THREE.Mesh(geometry4, materials);
        cubo4.rotation.y = -Math.PI / 2; 
        cubo4.position.set(75, 14, -7); 
        scene.add(cubo4);

        // Base 
        const geometry2 = new THREE.BoxGeometry(62, 32, 21.7); // Dimensiones ajustadas a la mitad
        const material2 = new THREE.MeshPhongMaterial({
        color: 0xffffff,       
        transparent: true,     // Habilita la transparencia
        opacity: 0.4,          // Ajusta el nivel de transparencia (0 = completamente transparente)
        shininess: 100,        // Acabado brillante
        reflectivity: 0.7,     // Simula el efecto de reflejo
        });
        const cubo2 = new THREE.Mesh(geometry2, material2);
        cubo2.rotation.y = -Math.PI / 2; 
        cubo2.position.set(75, 14, -7);
        scene.add(cubo2);
        //Base arriba
        const geometry111 = new THREE.BoxGeometry(64.2, 4.7, 23.8); 
        const material111 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo111 = new THREE.Mesh(geometry111, material111);
        cubo111.rotation.y = -Math.PI / 2;
        cubo111.rotation.x = 3.1416 
        cubo111.position.set(75, 32, -7); 
        scene.add(cubo111);
    
        //Piso Base arriba
        const geometry112 = new THREE.BoxGeometry(60, 5.1, 19.7); 
        const material112 = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
        const cubo112 = new THREE.Mesh(geometry112, material112);
        cubo112.rotation.y = -Math.PI / 2; 
        cubo112.rotation.x = 3.1416
        cubo112.position.set(75, 31.4, -7); 
        scene.add(cubo112);
    
 
         // Vitrina 2 
        // Soporte base 
        const geometry5 = new THREE.BoxGeometry(11.9, 11, 11.9); 
        const material5 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo5 = new THREE.Mesh(geometry5, material5);
         
        cubo5.position.set(45, -0.5, -75); //0, -1.5, -74
        scene.add(cubo5);

        const geometry6 = new THREE.BoxGeometry(13, 9.8, 12); 
        const material6 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo6 = new THREE.Mesh(geometry6, material6);
         
        cubo6.position.set(45,-0.5,-75); 
        scene.add(cubo6);

        const geometry7 = new THREE.BoxGeometry(12, 9.8, 13); 
        const material7 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo7 = new THREE.Mesh(geometry7, material7);
         
        cubo7.position.set(45,-0.5,-75); 
        scene.add(cubo7);

        //Vidrio
        const geometry8 = new THREE.BoxGeometry(12, 16, 12); 
        const material8 = new THREE.MeshPhongMaterial({
            color: 0xffffff,       
            transparent: true,     
            opacity: 0.4,          
            shininess: 100,        
            reflectivity: 0.7,     
            });
            const cubo8 = new THREE.Mesh(geometry8, material8);
         
        cubo8.position.set(45,12,-75); 
        scene.add(cubo8);

        const geometry9 = new THREE.BoxGeometry(10, 0.5, 10); 
        const material9 = new THREE.MeshBasicMaterial({ color: 0x646464 });
        const cubo9 = new THREE.Mesh(geometry9, material9);
         
        cubo9.position.set(45,4.9,-75); 
        scene.add(cubo9);

        const geometry10 = new THREE.BoxGeometry(8, 0.7, 8); 
        const material10 = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
        const cubo10 = new THREE.Mesh(geometry10, material10);
         
        cubo10.position.set(45,4.9,-75); 
        scene.add(cubo10);

    // Vitrina 3 
        // Soporte base 
        const geometry11 = new THREE.BoxGeometry(25, 11, 11.9); 
        const material11 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo11 = new THREE.Mesh(geometry11, material11);
         
        cubo11.position.set(0, -0.5, -17); 
        
        scene.add(cubo11);

        //Vidrio
        const geometry12 = new THREE.BoxGeometry(24, 14, 11); 
        const material12 = new THREE.MeshPhongMaterial({
            color: 0xffffff,       
            transparent: true,     
            opacity: 0.4,          
            shininess: 100,        
            reflectivity: 0.7,     
            });
            const cubo12 = new THREE.Mesh(geometry12, material12);
         
        cubo12.position.set(0,12,-17); 
        scene.add(cubo12);

        //Separación 
        const geometry13 = new THREE.BoxGeometry(22, 13, 0.3); 
        const material13 = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
        const cubo13 = new THREE.Mesh(geometry13, material13);
         
        cubo13.position.set(0,12,-14); 
        scene.add(cubo13);

    // Vitrina 4 
        // Soporte base 
        const geometry14 = new THREE.BoxGeometry(60.9, 6, 15.9); 
        const material14 = new THREE.MeshBasicMaterial({ color: 0x423f3e });
        const cubo14 = new THREE.Mesh(geometry14, material14);
         
        cubo14.position.set(-48, -0.5, -105); 
        
        scene.add(cubo14);
    
        //Vidrio
        const geometry15 = new THREE.BoxGeometry(24, 16, 24); 
        const material15 = new THREE.MeshPhongMaterial({
            color: 0xffffff,       
            transparent: true,     
            opacity: 0.4,          
            shininess: 100,        
            reflectivity: 0.7,     
            });
            const cubo15 = new THREE.Mesh(geometry15, material15);
         
        cubo15.position.set(-48,12,-105); 
        scene.add(cubo15);
    
        const geometry16 = new THREE.BoxGeometry(20, 2, 24); 
        const material16 = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
        const cubo16 = new THREE.Mesh(geometry16, material16);
         
        cubo16.position.set(-48,4.8,-105); 
        scene.add(cubo16);
    }

let mano, cabeza, casco, samurai, monedas;

const crearSala3 = () => {
    // Pared Mitad inferior vertical Pequeña
    const paredSala3PeqGeometry = new THREE.BoxGeometry(15, 30, 1);
    const paredSala3PeqMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const sala3Peq = new THREE.Mesh(paredSala3PeqGeometry, paredSala3PeqMaterial);
    sala3Peq.rotation.y = -Math.PI / 2;
    sala3Peq.position.set(-25, 9, 60);
    scene.add(sala3Peq);

    // Cargar el objeto 3D - mano
    const objLoader = new OBJLoader();
    objLoader.load('modulos/hand.obj', (object) => {
        object.traverse((child) => {
            if (child.isMesh) {
                // Crear material con texturas
                child.material = new THREE.MeshStandardMaterial({
                    map: albedoTextureM
                });
            }
        });

        object.position.set(-100, 4, 45);
        object.scale.set(6, 6, 6);
        scene.add(object);
        mano = object;
    });

    // Cargar el objeto 3D - rostro
    const objCabeza = new OBJLoader();
    objCabeza.load('modulos/head.obj', (object) => {
        object.traverse((child) => {
            if (child.isMesh) {
                // Crear material con texturas
                child.material = new THREE.MeshStandardMaterial({ color: 0xefe5de });
            }
        });

        object.position.set(-105, 4, 10);
        object.scale.set(5, 5, 5);
        object.rotation.y = Math.PI / 2;
        scene.add(object);
        cabeza = object;
    });

    // Cargar el objeto 3D - casco
    const objCasco = new OBJLoader();
    objCasco.load('modulos/casco.obj', (object) => {
        object.traverse((child) => {
            if (child.isMesh) {
                // Crear material con texturas
                child.material = new THREE.MeshStandardMaterial({
                    map: albedoTextureCasco
                });
            }
        });

        object.position.set(-43, 7, 10);
        object.rotation.y = -Math.PI / 2;
        object.scale.set(0.2, 0.2, 0.2);
        scene.add(object);
        casco = object;
    });

    // Cargar el objeto 3D - samurai
    const objSamurai = new OBJLoader();
    objSamurai.load('modulos/samurai.obj', (object) => {
        object.traverse((child) => {
            if (child.isMesh) {
                // Crear material con texturas
                child.material = new THREE.MeshStandardMaterial({
                    map: albedoTextureS
                });
            }
        });

        object.position.set(-75, 3, 25);
        object.scale.set(2, 2, 2);
        scene.add(object);
        samurai = object;
    });

    // Cargar el objeto 3D - monedas
    const objCaballo = new OBJLoader();
    objCaballo.load('modulos/monedas.obj', (object) => {
        object.traverse((child) => {
            if (child.isMesh) {
                // Crear material con texturas
                child.material = new THREE.MeshStandardMaterial({
                    map: albedoTextureCuadro,
                    normalMap: normalTextureCuadro,
                    roughnessMap: roughnessTextureCuadro,
                    aoMap: aoTextureCuadro,
                    metalnessMap: metalnessTextureCuadro,
                    displacementMap: displacementTextureCuadro,
                    displacementScale: 0.2
                });
            }
        });

        object.position.set(-42, 4, 47); 
        object.rotation.x = Math.PI / 2;
        object.scale.set(0.1, 0.1, 0.1);
        scene.add(object);
        monedas = object;
    });

    // Crear la caja de vidrio y controlador
const vidrioGeometry = new THREE.BoxGeometry(25, 40, 30);
const vidrioMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,       
    transparent: true,    
    opacity: 0.4,          
    shininess: 100,        
    reflectivity: 0.7,     
    });

const vidrio = new THREE.Mesh(vidrioGeometry, vidrioMaterial);
vidrio.position.set(-75, 0, 25);
scene.add(vidrio);

// Crear una base para un objeto
const baseGeometry = new THREE.CylinderGeometry(7, 7, 2, 32);
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x423f3e});
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.set(-100, 0, 45);
scene.add(base);

const base2 = base.clone();
base2.position.set(-105, 0, 10);
scene.add(base2);

const base3 = base.clone();
base3.position.set(-43, 0, 10);
scene.add(base3);

const base4 = base.clone();
base4.position.set(-75, 0, 25);
scene.add(base4);

const base5 = base.clone();
base5.position.set(-43, 0, 45);
scene.add(base5);

// Tapete centro
const TapeteGeometry = new THREE.PlaneGeometry(30, 35); 
const TapeteMaterial = new THREE.MeshStandardMaterial({ 
    map: albedoTextureTapete, 
  });
  
const tapete = new THREE.Mesh(TapeteGeometry, TapeteMaterial); 
tapete.rotation.x = -Math.PI / 2;  
tapete.position.set(-75, -5, 25);
scene.add(tapete);

};

    // Luces point
    const pointLight = new THREE.PointLight(0xffffff, params.intensidad1, params.distancia, params.decay);
    pointLight.position.set(-105, 3, 10); // Ajustar la posición encima de la base2
    scene.add(pointLight);
    pointLight.castShadow = true;

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    scene.add(pointLightHelper);

    // Luz 2
    // Clonar la luz y cambiar posición 
    const pointLight2 = pointLight.clone(); 
    pointLight2.position.set(-43, 5, 10); // Ajustar la posición para la segunda luz 
    scene.add(pointLight2);

    const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1); 
    scene.add (pointLightHelper2);

    // Luz 3
    // Clonar la luz y cambiar posición 
    const pointLight3 = pointLight.clone(); 
    pointLight3.position.set(-43, 3, 45); // Ajustar la posición para la segunda luz 
    scene.add(pointLight3);

    const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1); 
    scene.add (pointLightHelper3);

    // Luz 4
    // Clonar la luz y cambiar posición 
    const pointLight4 = pointLight.clone(); 
    pointLight4.position.set(-100, 3, 45); // Ajustar la posición para la segunda luz 
    scene.add(pointLight4);

    const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1); 
    scene.add (pointLightHelper4);

    // Luces Rect
    const widthAr = 5;
    const heightAr = 5;
    const intensity = 1;
    const rectLight = new THREE.RectAreaLight(0xffffff, intensity, widthAr, heightAr);
    rectLight.position.set(-75, 25, 25);
    rectLight.lookAt(0, -25, 0);
    scene.add(rectLight);
    // Luz 5
    // Clonar la luz y cambiar posición 
    const pointLight5 = pointLight.clone(); 
    pointLight5.position.set(77,0.2,50); // Ajustar la posición para la segunda luz 
    scene.add(pointLight5);

    const pointLightHelper5 = new THREE.PointLightHelper(pointLight5, 1); 
    scene.add (pointLightHelper5);

        // Luz 6
    // Clonar la luz y cambiar posición 
    const pointLight6 = pointLight.clone(); 
    pointLight6.position.set(75, -5, -7); // Ajustar la posición para la segunda luz 
    scene.add(pointLight6);

    const pointLightHelper6 = new THREE.PointLightHelper(pointLight6, 1); 
    scene.add (pointLightHelper6);

    function ActualizarLuz() {
        pointLight.color.set(params.color1);
        pointLight.intensity = params.intensidad1;
        pointLight.distance = params.distancia;
        pointLight.decay = params.decay;

        rectLight.color.set(params.color2);
        rectLight.intensity = params.intensidad2;

    };

// Llamada a cada función
creacionCastillo();
crearSala1();
crearSala2();
crearSala3();

// Luz provisional
// const light = new THREE.AmbientLight(0xFFFFFF, 3);
// scene.add(light);

function animate() {
    // Animaciones sala 3

    // Animación escultura centro
    if (samurai) { // Animación escultura centro
         samurai.rotation.y += 0.01; }

    // Luces
    pointLight.color.set(params.color1);
    pointLight.intensity = params.intensidad1;
    pointLight.distance = params.distancia;
    pointLight.decay = params.decay;

    controls.update();
    renderer.render(scene, camera);
};




