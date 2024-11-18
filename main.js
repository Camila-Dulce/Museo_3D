import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(animate);

let width = window.innerWidth;
let height = window.innerHeight;
let aspectRatio = width / height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.set(0, 20, 80);

let controls = new OrbitControls(camera, renderer.domElement);

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
const roughnessTexturePA = textureLoader.load('./texturas/piedRou.jpg'); 
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
    const paredEntradaGeometry = new THREE.BoxGeometry(9, 40, 1); 
    const paredEntradaMaterial = new THREE.MeshStandardMaterial({ 
        map: albedoTexture3,
        normalMap: normalTexture3, 
        roughnessMap: roughnessTexture3, 
        aoMap: aoTexture3, 
        displacementMap: displacementTexture3, 
        displacementScale: 0.2, 
        });
        
    const paredEntrada = new THREE.Mesh(paredEntradaGeometry, paredEntradaMaterial);
    paredEntrada.position.set(-20, 14, 80); 
    scene.add(paredEntrada);

    const paredEntrada2 = paredEntrada.clone(); 
    paredEntrada2.position.set(20, 14, 80); 
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

const crearSala1 = () => {
    // Pared Derecha Vertical Grande
    const paredSala1traGeometry = new THREE.BoxGeometry(40, 30, 1); 
    const paredSala1traMaterial = new THREE.MeshStandardMaterial({ color: 0xff083e }); 
    const sala1 = new THREE.Mesh(paredSala1traGeometry, paredSala1traMaterial);
    sala1.rotation.y = -Math.PI / 2;  
    sala1.position.set(25, 9, 9); 
    scene.add(sala1);

    // Pared Derecha Vertical Pequeña
    const paredSalaPeqGeometry = new THREE.BoxGeometry(15, 30, 1); 
    const paredSalaPeqMaterial = new THREE.MeshStandardMaterial({ color: 0xff083e }); 
    const salaPeq = new THREE.Mesh(paredSalaPeqGeometry, paredSalaPeqMaterial);
    salaPeq.rotation.y = -Math.PI / 2;  
    salaPeq.position.set(25, 9, 60); 
    scene.add(salaPeq);

}

const crearSala2 = () => {

    // Pared Mitad Horizontal Grande
    const paredSala2Geometry = new THREE.BoxGeometry(90, 30, 1); 
    const paredSala2Material = new THREE.MeshStandardMaterial({ color: 0xff00fe }); 
    const sala2 = new THREE.Mesh(paredSala2Geometry, paredSala2Material);
    sala2.position.set(-20, 9, -11); 
    scene.add(sala2);

    // Pared Mitad Superior Pequeña
    const paredSala2PeqGeometry = new THREE.BoxGeometry(15, 30, 1); 
    const paredSala2PeqMaterial = new THREE.MeshStandardMaterial({ color: 0xff00fe}); 
    const sala2Peq = new THREE.Mesh(paredSala2PeqGeometry, paredSala2PeqMaterial);
    sala2Peq.rotation.y = -Math.PI / 2;  
    sala2Peq.position.set(-25, 9, -76); 
    scene.add(sala2Peq);

    const salaPeq = sala2Peq.clone(); 
    salaPeq.rotation.y = Math.PI;  
    salaPeq.position.set(-116, 9, -10); 
    scene.add(salaPeq);

    // Pared Mitad Izquierda Vertical 
    const paredSala1OtraGeometry = new THREE.BoxGeometry(65, 30, 1); 
    const paredSala1OtraMaterial = new THREE.MeshStandardMaterial({ color: 0xff00fe }); 
    const sala1O = new THREE.Mesh(paredSala1OtraGeometry, paredSala1OtraMaterial);
    sala1O.rotation.y = -Math.PI / 2;  
    sala1O.position.set(-25, 9, -6); 
    scene.add(sala1O);
}

const crearSala3 = () => {

    // Pared Mitad inferior vertical Pequeña
    const paredSala3PeqGeometry = new THREE.BoxGeometry(15, 30, 1); 
    const paredSala3PeqMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffa7}); 
    const sala3Peq = new THREE.Mesh(paredSala3PeqGeometry, paredSala3PeqMaterial);
    sala3Peq.rotation.y = -Math.PI / 2;  
    sala3Peq.position.set(-25, 9, 60); 
    scene.add(sala3Peq);
}

// Llamada a cada función
creacionCastillo();
crearSala1();
crearSala2();
crearSala3();

// Luz provisional
const light = new THREE.AmbientLight(0xFFFFFF, 3);
scene.add(light);

function animate() {
    controls.update();
    renderer.render(scene, camera);
}




