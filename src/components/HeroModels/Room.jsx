import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Room(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/low_poly_room.glb");
  useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube006_0" position={[-1.407, 0.567, 1.454]}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Cube007_1" position={[-1.394, 0.755, 1.454]}>
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Cube009_2" position={[-1.407, 0.366, 1.454]}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group
                name="Cube011_5"
                position={[-0.896, 0.397, 0.815]}
                rotation={[0, 0.052, 0]}
              >
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Chair_23" position={[-0.896, 0.397, 0.815]}>
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Shelves002_39" position={[-1.704, 0.833, -1.42]}>
                <mesh
                  name="Object_91"
                  geometry={nodes.Object_91.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Cuppord_3" position={[-1.645, 0.541, 1.454]}>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Bin_4" position={[-1.642, 0.64, 0.144]}>
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group
                name="Lamp_8"
                position={[-1.645, 0.909, 1.741]}
                rotation={[0, -1.439, 0]}
              >
                <group
                  name="Cube012_7"
                  position={[0, 0.242, 0]}
                  rotation={[-0.769, 0.097, -0.025]}
                >
                  <group
                    name="Cube014_6"
                    position={[0, 0.284, 0]}
                    rotation={[-1.665, -0.031, -0.133]}
                  >
                    <mesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.LowPoly}
                    />
                    <mesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.GlowY}
                    />
                  </group>
                  <mesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="LampHolder_9" position={[-1.645, 0.968, 1.747]}>
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Monitor_10" position={[-1.77, 1.106, 0.769]}>
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials.LowPoly}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.GlowB}
                />
                <mesh
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials.Screen}
                />
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Window_11" position={[-1.952, 2.225, 0.699]}>
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group
                name="trees_12"
                position={[-9.023, 0.477, -2.995]}
                scale={1.343}
              >
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials.trees}
                />
              </group>
              <group name="Shelves_20" position={[-1.712, 1.238, -1.537]}>
                <group name="Book002_13" position={[0.033, 0.658, -0.636]}>
                  <mesh
                    name="Object_36"
                    geometry={nodes.Object_36.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Book003_14" position={[-0.015, 0.07, -0.301]}>
                  <mesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Book004_15" position={[0.033, 0.16, -0.636]}>
                  <mesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Book001_16" position={[0.003, 0.706, -0.513]}>
                  <mesh
                    name="Object_42"
                    geometry={nodes.Object_42.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Book_17" position={[0.033, -0.338, -0.636]}>
                  <mesh
                    name="Object_44"
                    geometry={nodes.Object_44.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Printer_18" position={[0.008, -0.366, 0.109]}>
                  <mesh
                    name="Object_46"
                    geometry={nodes.Object_46.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Shelves003_19" position={[0.008, 0.15, 0.36]}>
                  <mesh
                    name="Object_48"
                    geometry={nodes.Object_48.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Mouse_21" position={[-1.642, 0.64, 0.144]}>
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Bed_24" position={[-0.424, 0.536, -1.826]}>
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Mat_25" position={[-1.347, 1.173, 0.409]}>
                <mesh
                  name="Object_56"
                  geometry={nodes.Object_56.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group
                name="Speaker001_27"
                position={[-1.712, 1.108, 0.24]}
                rotation={[0, -Math.PI / 6, 0]}
              >
                <mesh
                  name="mesh_25"
                  geometry={nodes.mesh_25.geometry}
                  material={materials.LowPoly}
                  morphTargetDictionary={nodes.mesh_25.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_25.morphTargetInfluences}
                />
                <mesh
                  name="mesh_25_1"
                  geometry={nodes.mesh_25_1.geometry}
                  material={materials.GlowB}
                  morphTargetDictionary={nodes.mesh_25_1.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_25_1.morphTargetInfluences}
                />
              </group>
              <group name="Tabel_28" position={[-1.645, 0.909, 0.769]}>
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Tissues_29" position={[-1.642, 0.64, 0.144]}>
                <mesh
                  name="Object_63"
                  geometry={nodes.Object_63.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Keyboard_33" position={[-1.447, 0.929, 0.727]}>
                <group name="Keys_30" position={[-0.024, 0.009, 0.281]}>
                  <mesh
                    name="Object_69"
                    geometry={nodes.Object_69.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="keys_31" position={[-0.007, 0.008, -0.066]}>
                  <mesh
                    name="Object_71"
                    geometry={nodes.Object_71.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <group name="Keys001_32" position={[-0.054, 0.009, 0.281]}>
                  <mesh
                    name="Object_73"
                    geometry={nodes.Object_73.geometry}
                    material={materials.LowPoly}
                  />
                </group>
                <mesh
                  name="Object_65"
                  geometry={nodes.Object_65.geometry}
                  material={materials.LowPoly}
                />
                <mesh
                  name="Object_66"
                  geometry={nodes.Object_66.geometry}
                  material={materials.GlowB}
                />
                <mesh
                  name="Object_67"
                  geometry={nodes.Object_67.geometry}
                  material={materials.Rainbow}
                />
              </group>
              <group name="Room_34" position={[-1.347, 1.173, 0.409]}>
                <mesh
                  name="Object_75"
                  geometry={nodes.Object_75.geometry}
                  material={materials.LowPoly}
                />
                <mesh
                  name="Object_76"
                  geometry={nodes.Object_76.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_77"
                  geometry={nodes.Object_77.geometry}
                  material={materials.Floor}
                />
              </group>
              <group name="Radiator_35" position={[-1.347, 1.173, 0.409]}>
                <mesh
                  name="Object_79"
                  geometry={nodes.Object_79.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group
                name="Speaker002_36"
                position={[-1.712, 1.108, 1.333]}
                rotation={[0, Math.PI / 6, 0]}
              >
                <mesh
                  name="mesh_34"
                  geometry={nodes.mesh_34.geometry}
                  material={materials.LowPoly}
                  morphTargetDictionary={nodes.mesh_34.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_34.morphTargetInfluences}
                />
              </group>
              <group name="Tabel001_37" position={[-1.95, 0.169, 0.769]}>
                <mesh
                  name="Object_83"
                  geometry={nodes.Object_83.geometry}
                  material={materials.LowPoly}
                />
                <mesh
                  name="Object_84"
                  geometry={nodes.Object_84.geometry}
                  material={materials.GlowG}
                />
                <mesh
                  name="Object_85"
                  geometry={nodes.Object_85.geometry}
                  material={materials.GlowR}
                />
              </group>
              <group name="PC001_38" position={[-1.604, 0.484, 0.161]}>
                <mesh
                  name="Object_87"
                  geometry={nodes.Object_87.geometry}
                  material={materials.LowPoly}
                />
                <mesh
                  name="Object_88"
                  geometry={nodes.Object_88.geometry}
                  material={materials.GlowB}
                />
                <mesh
                  name="Object_89"
                  geometry={nodes.Object_89.geometry}
                  material={materials.Glass}
                />
              </group>
              <group name="Shelves001_40" position={[-1.704, 0.898, -1.228]}>
                <mesh
                  name="Object_93"
                  geometry={nodes.Object_93.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="Tabel002_41" position={[-1.515, 0.912, 1.286]}>
                <mesh
                  name="Object_95"
                  geometry={nodes.Object_95.geometry}
                  material={materials.LowPoly}
                />
              </group>
              <group name="WallPaper_42" position={[-1.347, 1.173, 0.409]}>
                <mesh
                  name="Object_97"
                  geometry={nodes.Object_97.geometry}
                  material={materials.LowPoly}
                />
                <mesh
                  name="Object_98"
                  geometry={nodes.Object_98.geometry}
                  material={materials.Painting}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/low_poly_room.glb");
