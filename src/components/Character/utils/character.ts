import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                // === NEON ARCTIC CHARACTER — Bold, unmistakable restyling ===
                if (mesh.material) {
                  const name = mesh.name || (mesh.parent as any)?.name || "";

                  if (name === "BODY.SHIRT") {
                    // Ice-white hoodie — high contrast against dark bg
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#E2E8F0");
                    mat.roughness = 0.6;
                    mat.metalness = 0.05;
                    mesh.material = mat;
                  } else if (name === "CAP.001" || name === "CAP.002") {
                    // Neon cyan cap — strong visible glow
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#0EA5E9");
                    mat.emissive = new THREE.Color("#38BDF8");
                    mat.emissiveIntensity = 0.6;
                    mat.roughness = 0.3;
                    mat.metalness = 0.2;
                    mesh.material = mat;
                  } else if (name === "Pant") {
                    // Charcoal joggers — visible contrast with white shirt
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#334155");
                    mat.roughness = 0.8;
                    mesh.material = mat;
                  } else if (name === "Shoe") {
                    // Neon cyan kicks — bright accent
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#0EA5E9");
                    mat.emissive = new THREE.Color("#38BDF8");
                    mat.emissiveIntensity = 0.45;
                    mat.roughness = 0.25;
                    mat.metalness = 0.3;
                    mesh.material = mat;
                  } else if (name === "Sole") {
                    // White soles
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#CBD5E1");
                    mesh.material = mat;
                  } else if (name === "Hair") {
                    // Dark navy hair
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#0F172A");
                    mat.roughness = 0.9;
                    mesh.material = mat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
