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

                // === CYBERPUNK GLOW CHARACTER APPEARANCE ===
                if (mesh.material) {
                  const name = mesh.name || (mesh.parent as any)?.name || "";

                  if (name === "BODY.SHIRT") {
                    // Dark shirt — near-black with subtle depth
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#0B0F19");
                    mesh.material = mat;
                  } else if (name === "CAP.001" || name === "CAP.002") {
                    // Sky blue cap with subtle emissive glow
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#38BDF8");
                    mat.emissive = new THREE.Color("#38BDF8");
                    mat.emissiveIntensity = 0.15;
                    mesh.material = mat;
                  } else if (name === "Pant") {
                    // Deep dark pants
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#0F172A");
                    mesh.material = mat;
                  } else if (name === "Shoe") {
                    // Sky blue shoes with glow
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#38BDF8");
                    mat.emissive = new THREE.Color("#38BDF8");
                    mat.emissiveIntensity = 0.12;
                    mesh.material = mat;
                  } else if (name === "Sole") {
                    // Darker sole accent
                    const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    mat.color = new THREE.Color("#1E293B");
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
