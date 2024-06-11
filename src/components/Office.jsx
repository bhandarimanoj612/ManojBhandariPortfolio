

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Office(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[2.61, 2.192, -0.259]}
        rotation={[0, -1.548, 0]}
        scale={0.001}
      >
        <group
          position={[-61.024, -0.555, 156.09]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-368.949, -731.636, -25.976]}
        >
          <mesh
            geometry={nodes.Cube_Material_0.geometry}
            material={materials["Material.074_25"]}
            position={[0.008, -0.17, 0]}
          />
        </group>
        <group
          position={[-122.591, 213.709, -370.429]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[133.259, 54.504, 0.809]}
        >
          <mesh
            geometry={nodes.Cube058_Material063_0.geometry}
            material={materials["Material.074_23"]}
            position={[0, 0, 0.001]}
          />
        </group>
        <mesh
          geometry={nodes["Object_782_OnTheFly-bg_0"].geometry}
          material={materials["Material.074_40"]}
          position={[101.601, 40.622, 244.007]}
          rotation={[-Math.PI / 2, 0.078, Math.PI / 2]}
          scale={21.893}
        />
        <mesh
          geometry={nodes.Object_788_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[159.018, 47.32, 359.936]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={19.608}
        />
        <mesh
          geometry={nodes.Object_798_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[122.701, 53.533, 358.456]}
          rotation={[-Math.PI / 2, 0.163, -Math.PI]}
          scale={19.608}
        />
        <mesh
          geometry={nodes.Object_800_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[190.985, 44.577, 567.479]}
          rotation={[-Math.PI / 2, -0.089, -Math.PI]}
          scale={8.872}
        />
        <mesh
          geometry={nodes.Object_802_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[190.868, 44.628, 565.254]}
          rotation={[-Math.PI / 2, -0.089, -Math.PI]}
          scale={8.872}
        />
        <mesh
          geometry={nodes.Object_804_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[192.49, 44.42, 565.412]}
          rotation={[-Math.PI / 2, -0.089, -Math.PI]}
          scale={8.872}
        />
        <mesh
          geometry={nodes.Object_806_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[192.403, 44.401, 567.472]}
          rotation={[-Math.PI / 2, -0.089, -Math.PI]}
          scale={8.872}
        />
        <mesh
          geometry={nodes.Object_810_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[141.038, 50.582, 552.01]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_812_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[141.038, 50.582, 532.026]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_814_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[141.038, 50.582, 514.784]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_816_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[141.038, 50.582, 498.138]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_818_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[141.038, 50.582, 480.752]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_820_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[141.038, 50.582, 463.616]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_822_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[141.038, 50.582, 443.746]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.713}
        />
        <mesh
          geometry={nodes.Object_824_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[141.649, 50.885, 427.978]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.158}
        />
        <mesh
          geometry={nodes.Object_826_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[142.094, 50.955, 409.216]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.158}
        />
        <mesh
          geometry={nodes.Object_828_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[158.03, 48.549, 561.971]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_830_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[158.03, 48.437, 543.875]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_832_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[158.03, 48.437, 528.227]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_834_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[158.03, 48.437, 509.563]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_836_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[158.03, 48.353, 494.305]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_838_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[156.657, 48.636, 594.003]}
          rotation={[-1.588, 0, Math.PI / 2]}
          scale={2.692}
        />
        <mesh
          geometry={nodes.Object_840_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[192.644, 45.65, 594.799]}
          rotation={[-Math.PI / 2, -0.12, Math.PI / 2]}
          scale={3.123}
        />
        <mesh
          geometry={nodes.Object_842_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[158.03, 48.437, 475.976]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_844_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[157.211, 48.437, 455.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[6.414, 5.272, 6.414]}
        />
        <mesh
          geometry={nodes.Object_846_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[158.03, 48.437, 441.26]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_848_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[159.027, 48.639, 422.07]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.915}
        />
        <mesh
          geometry={nodes.Object_850_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[122.029, 53.887, 594.924]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.981}
        />
        <mesh
          geometry={nodes.Object_854_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[175.487, 47.27, 501.887]}
          rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_856_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[175.487, 47.27, 519.095]}
          rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_858_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[175.487, 47.27, 537.014]}
          rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_860_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[175.487, 47.167, 554.66]}
          rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_862_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[175.487, 47.27, 467.983]}
          rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_864_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[175.487, 47.27, 450.283]}
          rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.Object_866_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[122.444, 53.931, 578.061]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_868_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[122.058, 53.851, 561.226]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={3.17}
        />
        <mesh
          geometry={nodes.Object_870_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[127.008, 53.029, 560.64]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_872_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[192.644, 45.65, 359.945]}
          rotation={[-Math.PI / 2, -0.12, Math.PI / 2]}
          scale={3.123}
        />
        <mesh
          geometry={nodes.Object_874_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[156.285, 46.937, 363.379]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={4.006}
        />
        <mesh
          geometry={nodes.Object_876_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[122.484, 53.905, 543.373]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={3.822}
        />
        <mesh
          geometry={nodes.Object_878_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[127.434, 53.083, 543.258]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_880_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[122.484, 53.745, 525.768]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={3.822}
        />
        <mesh
          geometry={nodes.Object_882_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[127.434, 52.923, 525.651]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_884_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[101.739, 56.424, 595.272]}
          rotation={[-Math.PI / 2, 0.141, Math.PI / 2]}
          scale={4.184}
        />
        <mesh
          geometry={nodes.Object_890_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[101.367, 56.132, 484.34]}
          rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
          scale={4.532}
        />
        <mesh
          geometry={nodes.Object_892_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[101.205, 56.942, 513.09]}
          rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_894_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[101.205, 56.942, 530.455]}
          rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_896_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[101.205, 56.942, 548.203]}
          rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_898_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[101.205, 56.942, 565.178]}
          rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_900_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[101.367, 56.154, 466.894]}
          rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
          scale={4.532}
        />
        <mesh
          geometry={nodes.Object_902_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[101.367, 56.154, 449.367]}
          rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
          scale={4.532}
        />
        <mesh
          geometry={nodes.Object_904_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[101.367, 56.154, 431.949]}
          rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
          scale={4.532}
        />
        <mesh
          geometry={nodes.Object_906_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[101.473, 56.121, 402.973]}
          rotation={[-Math.PI / 2, 0.161, Math.PI / 2]}
          scale={4.501}
        />
        <mesh
          geometry={nodes.Object_908_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[101.352, 56.184, 386.481]}
          rotation={[-Math.PI / 2, 0.196, Math.PI / 2]}
          scale={4.189}
        />
        <mesh
          geometry={nodes.Object_910_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[101.352, 56.184, 368.472]}
          rotation={[-Math.PI / 2, 0.196, Math.PI / 2]}
          scale={4.189}
        />
        <mesh
          geometry={nodes.Object_912_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[101.352, 56.184, 351.349]}
          rotation={[-Math.PI / 2, 0.196, Math.PI / 2]}
          scale={4.189}
        />
        <mesh
          geometry={nodes.Object_914_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[122.484, 53.852, 491.651]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={3.822}
        />
        <mesh
          geometry={nodes.Object_916_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[127.434, 53.03, 491.824]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_918_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[122.484, 53.821, 473.664]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={3.822}
        />
        <mesh
          geometry={nodes.Object_920_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[127.434, 52.999, 473.405]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_922_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[122.484, 53.852, 456.473]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={3.822}
        />
        <mesh
          geometry={nodes.Object_926_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[121.673, 54.096, 439.122]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={[3.822, 3.142, 3.822]}
        />
        <mesh
          geometry={nodes.Object_930_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[127.434, 53.034, 439.361]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_932_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[127.434, 53.03, 421.591]}
          rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
          scale={4.326}
        />
        <mesh
          geometry={nodes.Object_934_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[186.135, 46.575, 219.396]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={4.006}
        />
        <mesh
          geometry={nodes.Object_936_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[173.52, 47, 585.524]}
          rotation={[-1.64, 0, -0.001]}
          scale={[6.197, 8.42, 6.209]}
        />
        <mesh
          geometry={nodes.Object_938_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[175.034, 47.036, 400.009]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[6.672, 4.931, 2.742]}
        />
        <mesh
          geometry={nodes.Object_940_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[175.034, 47.036, 434.853]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[4.24, 4.931, 2.742]}
        />
        <mesh
          geometry={nodes.Object_942_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[176.052, 46.788, 584.43]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={[1.861, 6.968, 6.968]}
        />
        <mesh
          geometry={nodes.Object_944_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[175.034, 47.036, 417.325]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[4.24, 4.931, 2.742]}
        />
        <mesh
          geometry={nodes.Object_946_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[126.21, 53.665, 253.133]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.449}
        />
        <mesh
          geometry={nodes.Object_948_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[122.219, 53.893, 271.172]}
          rotation={[-Math.PI / 2, 0.214, Math.PI / 2]}
          scale={2.7}
        />
        <mesh
          geometry={nodes.Object_950_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[192.324, 45.452, 259.966]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={4.419}
        />
        <mesh
          geometry={nodes.Object_952_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[197.023, 45.614, 260.99]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={3.792}
        />
        <mesh
          geometry={nodes.Object_954_Material072_0.geometry}
          material={materials["Material.104"]}
          position={[184.777, 33.32, 601.234]}
          rotation={[-Math.PI / 2, 0.09, -Math.PI]}
          scale={[5.012, 3.876, 5.012]}
        />
        <mesh
          geometry={nodes.Object_956_Material072_0.geometry}
          material={materials["Material.104"]}
          position={[164.62, 35.132, 204.967]}
          rotation={[-Math.PI / 2, 0.089, 0]}
          scale={3.129}
        />
        <mesh
          geometry={nodes.Object_958_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[189.418, 46.757, 488.892]}
          rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
          scale={[4.951, 15.565, 11.588]}
        />
        <mesh
          geometry={nodes.Object_962_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[145.186, 50.323, 270.034]}
          rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
          scale={2.491}
        />
        <mesh
          geometry={nodes.Object_964_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[145.186, 50.323, 234.87]}
          rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
          scale={2.491}
        />
        <mesh
          geometry={nodes.Object_966_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[157.086, 48.546, 408.618]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[6.672, 4.931, 2.742]}
        />
        <mesh
          geometry={nodes.Object_968_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[158.955, 48.546, 391.269]}
          rotation={[-1.571, -0.043, 1.57]}
          scale={[6.672, 4.931, 2.742]}
        />
        <mesh
          geometry={nodes.Object_970_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[140.393, 50.369, 250.493]}
          rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
          scale={4.079}
        />
        <mesh
          geometry={nodes.Object_972_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[158.805, 47.353, 358.081]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[3.749, 1.659, 5.449]}
        />
        <mesh
          geometry={nodes.Object_974_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[158.529, 47.353, 360.205]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.449}
        />
        <mesh
          geometry={nodes.Object_976_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[138.806, 50.51, 591.899]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.568}
        />
        <mesh
          geometry={nodes.Object_978_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[140.393, 50.369, 233.01]}
          rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
          scale={4.079}
        />
        <mesh
          geometry={nodes.Object_982_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[100.211, 56.325, 328.505]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_984_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[100.211, 56.325, 310.762]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_986_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[100.211, 56.325, 293.444]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_988_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[158.196, 48.546, 268.317]}
          rotation={[-1.571, -0.043, 1.57]}
          scale={[5.119, 4.444, 2.472]}
        />
        <mesh
          geometry={nodes.Object_990_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[162.312, 48.546, 268.012]}
          rotation={[-1.571, -0.043, 1.57]}
          scale={[3.213, 4.444, 2.472]}
        />
        <mesh
          geometry={nodes.Object_992_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[158.196, 48.546, 250.902]}
          rotation={[-1.571, -0.043, 1.57]}
          scale={[5.119, 4.444, 2.472]}
        />
        <mesh
          geometry={nodes.Object_994_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[158.196, 48.546, 233.224]}
          rotation={[-1.571, -0.043, 1.57]}
          scale={[5.119, 4.444, 2.472]}
        />
        <mesh
          geometry={nodes.Object_996_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[162.312, 48.546, 232.693]}
          rotation={[-1.571, -0.043, 1.57]}
          scale={[3.213, 4.444, 2.472]}
        />
        <mesh
          geometry={nodes.Object_998_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[191.769, 45.452, 235.883]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={3.252}
        />
        <mesh
          geometry={nodes.Object_1000_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[139.974, 50.54, 592.705]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={2.459}
        />
        <mesh
          geometry={nodes.Object_1002_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[141.683, 50.51, 585.651]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={5.568}
        />
        <mesh
          geometry={nodes.Object_1004_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[140.515, 50.54, 584.845]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={2.459}
        />
        <mesh
          geometry={nodes.Object_1006_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[192.324, 45.452, 402.259]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={2.698}
        />
        <mesh
          geometry={nodes.Object_1008_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[192.324, 45.452, 377.975]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={2.698}
        />
        <mesh
          geometry={nodes.Object_1010_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[192.115, 45.452, 422.374]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={2.698}
        />
        <mesh
          geometry={nodes.Object_1012_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[176.051, 46.788, 581.642]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={[1.861, 6.968, 6.968]}
        />
        <mesh
          geometry={nodes.Object_1014_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[178.056, 46.788, 584.43]}
          rotation={[-1.502, 0, -Math.PI]}
          scale={[2.693, 9.468, 6.982]}
        />
        <mesh
          geometry={nodes.Object_1016_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[178.056, 46.788, 582.626]}
          rotation={[-1.502, 0, -Math.PI]}
          scale={[2.693, 9.468, 6.982]}
        />
        <mesh
          geometry={nodes.Object_1018_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[177.223, 46.788, 583.339]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={[3.572, 6.968, 6.968]}
        />
        <mesh
          geometry={nodes.Object_1020_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[173.52, 47.036, 367.415]}
          rotation={[-1.564, 0, -0.001]}
          scale={[6.197, 11.143, 6.197]}
        />
        <mesh
          geometry={nodes.Object_1022_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[176.257, 47.093, 365.527]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={[2.188, 6.197, 6.197]}
        />
        <mesh
          geometry={nodes.Object_1024_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[176.257, 47.093, 362.25]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={[2.188, 6.197, 6.197]}
        />
        <mesh
          geometry={nodes.Object_1026_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[178.04, 47.093, 365.528]}
          rotation={[-1.502, 0, -Math.PI]}
          scale={[2.395, 11.125, 6.229]}
        />
        <mesh
          geometry={nodes.Object_1028_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[178.04, 47.093, 363.407]}
          rotation={[-1.502, 0, -Math.PI]}
          scale={[2.395, 11.125, 6.229]}
        />
        <mesh
          geometry={nodes.Object_1030_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[177.299, 47.093, 364.245]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={[4.2, 6.197, 6.197]}
        />
        <mesh
          geometry={nodes.Object_1032_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[122.224, 53.646, 358.725]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={5.449}
        />
        <mesh
          geometry={nodes.Object_1034_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[122.224, 53.782, 328.505]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_1036_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[122.224, 53.782, 311.134]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_1038_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[122.224, 53.782, 292.768]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_1040_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[152.112, 49.615, 217.775]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.449}
        />
        <mesh
          geometry={nodes.Object_1042_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[123.41, 53.51, 217.775]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={5.449}
        />
        <mesh
          geometry={nodes.Object_1044_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[140.393, 50.558, 328.601]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_1046_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[140.393, 50.558, 310.089]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_1048_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[140.393, 50.558, 293.029]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.522}
        />
        <mesh
          geometry={nodes.Object_1052_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[138.832, 50.656, 360.842]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={2.99}
        />
        <mesh
          geometry={nodes.Object_1054_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[138.832, 50.519, 377.705]}
          rotation={[-Math.PI / 2, 0.043, Math.PI / 2]}
          scale={2.99}
        />
        <mesh
          geometry={nodes.Object_1056_Material073_0.geometry}
          material={materials["Material.143"]}
          position={[138.832, 50.625, 395.771]}
          rotation={[-Math.PI / 2, 0.043, Math.PI / 2]}
          scale={2.99}
        />
        <mesh
          geometry={nodes.Object_1058_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[122.224, 53.899, 387.245]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={4.683}
        />
        <mesh
          geometry={nodes.Object_1060_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[118.88, 54.414, 404.726]}
          rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
          scale={4.683}
        />
        <mesh
          geometry={nodes.Object_1062_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[178.586, 47.223, 251.216]}
          rotation={[-1.494, -0.039, 0.003]}
          scale={[2.491, 4.577, 2.508]}
        />
        <mesh
          geometry={nodes.Object_1064_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[175.034, 47.036, 250.749]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[4.723, 4.038, 2.74]}
        />
        <mesh
          geometry={nodes.Object_1066_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[175.034, 47.036, 267.898]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[4.723, 4.038, 2.74]}
        />
        <mesh
          geometry={nodes.Object_1068_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[180.145, 47.436, 269.122]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[3.03, 2.591, 1.758]}
        />
        <mesh
          geometry={nodes.Object_1070_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[175.034, 47.036, 233.446]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[4.723, 4.038, 2.74]}
        />
        <mesh
          geometry={nodes.Object_1072_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[180.145, 47.583, 235.555]}
          rotation={[-1.571, -0.079, 1.57]}
          scale={[3.03, 2.591, 1.758]}
        />
        <mesh
          geometry={nodes.Object_1074_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[192.115, 45.452, 545.462]}
          rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
          scale={2.698}
        />
        <mesh
          geometry={nodes.Object_808_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[140.844, 50.582, 568.87]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        />
        <mesh
          geometry={nodes.aorus_case_fans_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[89.588, 288.681, -355.423]}
          rotation={[0, 1.571, 0]}
          scale={108.517}
        />
        <mesh
          geometry={nodes.aorus_case_fans001_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[69.018, 288.681, -355.423]}
          rotation={[0, -1.571, 0]}
          scale={108.517}
        />
        <mesh
          geometry={nodes.aorus_case_fans002_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[89.588, 178.115, -355.423]}
          rotation={[0, 1.571, 0]}
          scale={108.517}
        />
        <mesh
          geometry={nodes.aorus_case_fans003_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[69.018, 178.115, -355.423]}
          rotation={[0, -1.571, 0]}
          scale={108.517}
        />
        <mesh
          geometry={nodes.aorus_case_fans004_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[-241.083, 292.602, -334.76]}
          rotation={[0, 1.571, 0]}
          scale={108.517}
        />
        <mesh
          geometry={nodes.aorus_case_fans005_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[-261.653, 292.602, -334.76]}
          rotation={[0, -1.571, 0]}
          scale={108.517}
        />
        <mesh
          geometry={nodes.aorus_case_fans006_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[-171.287, 333.894, -355.289]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={110.314}
        />
        <mesh
          geometry={nodes.aorus_case_fans007_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[-171.287, 354.805, -355.289]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={110.314}
        />
        <mesh
          geometry={nodes.aorus_case_fans008_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[-44.291, 333.894, -355.289]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={110.314}
        />
        <mesh
          geometry={nodes.aorus_case_fans009_aorus_case_fans_0.geometry}
          material={materials["Material.074_0"]}
          position={[-44.291, 354.805, -355.289]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={110.314}
        />
        <mesh
          geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry}
          material={materials["Material.074_24"]}
          position={[-182.428, 181.699, -315.847]}
          scale={[8.646, 8.646, 9.09]}
        />
        <mesh
          geometry={nodes.BezierCircle_Material104_0.geometry}
          material={materials["Material.132"]}
          position={[87.654, 308.188, -282.267]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={5.703}
        />
        <mesh
          geometry={nodes.BezierCurve_Material088_0.geometry}
          material={materials["Material.127"]}
          position={[73.033, 238.196, -437.388]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve001_Material085_0.geometry}
          material={materials["Material.125"]}
          position={[-57.663, 118.321, -315.595]}
          rotation={[Math.PI / 2, -1.234, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve002_Material087_0.geometry}
          material={materials["Material.126"]}
          position={[-31.438, 183.786, -440.156]}
          rotation={[Math.PI / 2, -1.234, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve003_Material091_0.geometry}
          material={materials["Material.104"]}
          position={[-158.898, 127.661, 299.394]}
          rotation={[2.464, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve004_Material099_0.geometry}
          material={materials["Material.104"]}
          position={[-33.393, 29.826, -26.834]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve005_Material103_0.geometry}
          material={materials["Material.104"]}
          position={[83.413, 25.967, 360.696]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve006_Material106_0.geometry}
          material={materials["Material.104"]}
          position={[-275.73, 25.967, 569.746]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve007_Material105_0.geometry}
          material={materials["Material.104"]}
          position={[-271.339, 25.967, 569.745]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve008_Material107_0.geometry}
          material={materials["Material.104"]}
          position={[-280.431, 25.967, 28.498]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          geometry={nodes.bg2_bg2_0.geometry}
          material={materials["Material.074_29"]}
          position={[-153.705, 194.917, 83.027]}
          rotation={[1.572, -1.442, 1.567]}
          scale={113.034}
        />
        <mesh
          geometry={
            nodes["Color-PewDiePie-Logo_Color-PewDiePie-Logo_0"].geometry
          }
          material={materials["Material.074_27"]}
          position={[129.541, 46.552, -27.476]}
          rotation={[-Math.PI / 2, 0.284, Math.PI / 2]}
          scale={12.411}
        />
        <mesh
          geometry={nodes.Cube001_Material055_0.geometry}
          material={materials["Material.133"]}
          position={[-138.595, 295.654, 300.405]}
          rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
          scale={[325.342, 4.051, 184.091]}
        />
        <mesh
          geometry={nodes.Cube002_Material044_0.geometry}
          material={materials["Material.134"]}
          position={[-146.706, 263.678, 300.405]}
          rotation={[Math.PI / 2, 0.122, -Math.PI / 2]}
          scale={[-325.342, -14.747, -152.853]}
        />
        <mesh
          geometry={nodes.Cube003_Material001_0.geometry}
          material={materials["Material.104"]}
          position={[-157.131, 447.652, 300.405]}
          rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
          scale={[325.342, 4.051, 31.034]}
        />
        <mesh
          geometry={nodes.Cube004_Material002_0001.geometry}
          material={materials["Material.135"]}
          position={[-148.741, 180.97, 299.246]}
          rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
          scale={[167.599, 17.793, 193.498]}
        />
        <mesh
          geometry={nodes.Cube005_Material003_0.geometry}
          material={materials["Material.136"]}
          position={[-186.533, 291.564, 297.425]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[16.32, 28.812, 12.936]}
        />
        <mesh
          geometry={nodes.Cube011_Material010_0.geometry}
          material={materials["Material.103"]}
          position={[-85.935, 199.7, -353.72]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[173.489, 89.971, 157.347]}
        />
        <mesh
          geometry={nodes.Cube012_Material011_0.geometry}
          material={materials["Material.103"]}
          position={[-85.935, 199.7, -353.72]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[173.489, 89.971, 157.347]}
        />
        <mesh
          geometry={nodes.Cube013_Material015_0.geometry}
          material={materials["Material.103"]}
          position={[82.766, 33.228, -353.608]}
          rotation={[Math.PI / 2, 0.237, Math.PI]}
          scale={[-5.986, -88.363, -12.138]}
        />
        <mesh
          geometry={nodes.Cube014_Material014_0.geometry}
          material={materials["Material.103"]}
          position={[-253.445, 33.228, -353.609]}
          rotation={[Math.PI / 2, -0.136, -Math.PI]}
          scale={[-5.979, -88.363, -12.152]}
        />
        <mesh
          geometry={nodes.Cube015_Material016_0.geometry}
          material={materials["Material.074_1"]}
          position={[-165.45, 224.123, -440.84]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-89.374, -0.699, -106.434]}
        />
        <mesh
          geometry={nodes.Cube016_Material017_0.geometry}
          material={materials["Material.105"]}
          position={[79.294, 177.862, -355.562]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[50.674, 50.674, 10]}
        />
        <mesh
          geometry={nodes.Cube017_Material017_0.geometry}
          material={materials["Material.105"]}
          position={[-251.377, 292.349, -334.899]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[50.674, 50.674, 10]}
        />
        <mesh
          geometry={nodes.Cube018_Material017_0.geometry}
          material={materials["Material.105"]}
          position={[79.294, 288.428, -355.562]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[50.674, 50.674, 10]}
        />
        <mesh
          geometry={nodes.Cube019_Material017_0.geometry}
          material={materials["Material.105"]}
          position={[-171.544, 344.359, -355.43]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[51.513, 51.513, 10.165]}
        />
        <mesh
          geometry={nodes.Cube020_Material020_0.geometry}
          material={materials["Material.074_2"]}
          position={[-96.107, 78.826, -363.398]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[160.681, 73.933, 34.312]}
        />
        <mesh
          geometry={nodes.Cube021_Material018_0.geometry}
          material={materials["Material.103"]}
          position={[-108.064, 346.353, -354.981]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.187, 57.542, 10.785]}
        />
        <mesh
          geometry={nodes.Cube022_Material017_0.geometry}
          material={materials["Material.105"]}
          position={[-44.548, 344.359, -355.43]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[51.513, 51.513, 10.165]}
        />
        <mesh
          geometry={nodes.Cube023_Material021_0.geometry}
          material={materials["Material.103"]}
          position={[93.781, 228.59, -355.282]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-11.991, -59.265, -117.81]}
        />
        <mesh
          geometry={nodes.Cube024_Material022_0.geometry}
          material={materials["Material.103"]}
          position={[-265.096, 291.702, -335.09]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.378, 55.458, 55.458]}
        />
        <mesh
          geometry={nodes.Cube025_Material023_0.geometry}
          material={materials["Material.106"]}
          position={[-165.45, 224.123, -440.84]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-89.374, -0.699, -106.434]}
        />
        <mesh
          geometry={nodes.Cube026_Material024_0.geometry}
          material={materials["Material.107"]}
          position={[-165.45, 224.123, -440.84]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-89.374, -0.699, -106.434]}
        />
        <mesh
          geometry={nodes.Cube027_Material008_0.geometry}
          material={materials["Material.074_6"]}
          position={[-96.407, 270.963, -430.927]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.513, -10.916, -44.29]}
        />
        <mesh
          geometry={nodes.Cube028_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-95.71, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube029_Material025_0.geometry}
          material={materials["Material.104"]}
          position={[-96.387, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-0.25, -9.339, -46.663]}
        />
        <mesh
          geometry={nodes.Cube030_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-96.996, 270.963, -451.701]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube031_Material008_0.geometry}
          material={materials["Material.074_6"]}
          position={[-103.687, 270.963, -430.927]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.513, -10.916, -44.29]}
        />
        <mesh
          geometry={nodes.Cube032_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-102.99, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube033_Material025_0.geometry}
          material={materials["Material.104"]}
          position={[-103.667, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-0.25, -9.339, -46.663]}
        />
        <mesh
          geometry={nodes.Cube034_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-104.276, 270.963, -451.701]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube035_Material008_0.geometry}
          material={materials["Material.074_6"]}
          position={[-110.551, 270.963, -430.927]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.513, -10.916, -44.29]}
        />
        <mesh
          geometry={nodes.Cube036_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-109.854, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube037_Material025_0.geometry}
          material={materials["Material.104"]}
          position={[-110.532, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-0.25, -9.339, -46.663]}
        />
        <mesh
          geometry={nodes.Cube038_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-111.14, 270.963, -451.701]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube039_Material008_0.geometry}
          material={materials["Material.074_6"]}
          position={[-117.502, 270.963, -430.927]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.513, -10.916, -44.29]}
        />
        <mesh
          geometry={nodes.Cube040_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-116.805, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube041_Material025_0.geometry}
          material={materials["Material.104"]}
          position={[-117.483, 270.963, -432.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-0.25, -9.339, -46.663]}
        />
        <mesh
          geometry={nodes.Cube042_Material026_0.geometry}
          material={materials["Material.074_7"]}
          position={[-118.091, 270.963, -451.701]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-1.051, -9.735, -44.411]}
        />
        <mesh
          geometry={nodes.Cube043_Material012_0.geometry}
          material={materials["Material.104"]}
          position={[-219.486, 85.339, -71.149]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.177, 29.278, 59.658]}
        />
        <mesh
          geometry={nodes.Cube044_Material012_0.geometry}
          material={materials["Material.104"]}
          position={[-219.486, 85.339, 671.433]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.177, 29.278, 59.658]}
        />
        <mesh
          geometry={nodes.Cube045_Material027_0.geometry}
          material={materials["Material.074_8"]}
          position={[-212.14, 79.399, -298.228]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[35.476, 5.166, 20.568]}
        />
        <mesh
          geometry={nodes.Cube046_Material034_0.geometry}
          material={materials["Material.110"]}
          position={[-188.16, 268.516, -368.194]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[9.278, 42.446, 42.446]}
        />
        <mesh
          geometry={nodes.Cube047_Material033_0.geometry}
          material={materials["Material.110"]}
          position={[-134.664, 268.516, -368.194]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[9.278, 42.446, 42.446]}
        />
        <mesh
          geometry={nodes.Cube048_Material035_0.geometry}
          material={materials["Material.074_15"]}
          position={[-161.354, 268.242, -368.171]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[17.436, 39.405, 40.075]}
        />
        <mesh
          geometry={nodes.Cube049_Material040_0.geometry}
          material={materials["Material.074_16"]}
          position={[-161.354, 268.242, -368.171]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[17.436, 39.405, 40.075]}
        />
        <mesh
          geometry={nodes.Cube050_Material038_0.geometry}
          material={materials["Material.074_16"]}
          position={[-161.354, 268.242, -368.171]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[17.436, 39.405, 40.075]}
        />
        <mesh
          geometry={nodes.Cube052_Material047_0.geometry}
          material={materials["Material.104"]}
          position={[83.515, 83.276, -355.599]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[5.75, 46.281, 28.867]}
        />
        <mesh
          geometry={nodes.Cube053_Material048_0.geometry}
          material={materials["Material.114"]}
          position={[-165.45, 224.123, -440.84]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-89.374, -0.699, -106.434]}
        />
        <mesh
          geometry={nodes.Cube054_Material049_0.geometry}
          material={materials["Material.115"]}
          position={[-165.45, 224.123, -440.84]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-89.374, -0.699, -106.434]}
        />
        <mesh
          geometry={nodes.Cube055_Material054_0.geometry}
          material={materials["Material.116"]}
          position={[-122.286, 185.076, -370.559]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[133.163, 54.534, 13.174]}
        />
        <mesh
          geometry={nodes.Cube056_Material061_0.geometry}
          material={materials["Material.117"]}
          position={[-127.222, 200.081, -370.559]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[128.059, 52.443, 12.669]}
        />
        <mesh
          geometry={nodes.Cube057_Material059_0.geometry}
          material={materials["Material.074_22"]}
          position={[-127.222, 200.081, -370.559]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[128.059, 52.443, 12.669]}
        />
        <mesh
          geometry={nodes.Cube059_Material058_0.geometry}
          material={materials["Material.119"]}
          position={[-127.222, 200.081, -370.559]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[128.059, 52.443, 12.669]}
        />
        <mesh
          geometry={nodes.Cube060_Material062_0.geometry}
          material={materials["Material.120"]}
          position={[-123.744, 264.277, -316.795]}
          scale={[133.257, 53.22, 0.824]}
        />
        <mesh
          geometry={nodes.Cube061_Material064_0.geometry}
          material={materials["Material.104"]}
          position={[-122.286, 185.076, -370.559]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[133.163, 54.534, 13.174]}
        />
        <mesh
          geometry={nodes.Cube062_Material065_0.geometry}
          material={materials["Material.104"]}
          position={[-165.45, 224.123, -440.84]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-89.374, -0.699, -106.434]}
        />
        <mesh
          geometry={nodes.Cube063_Material074_0.geometry}
          material={materials["Material.074_25"]}
          position={[111.412, 32.495, -27.406]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube064_Material074_0.geometry}
          material={materials["Material.074_25"]}
          position={[111.412, 32.447, -27.406]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube065_Material074_0.geometry}
          material={materials["Material.074_25"]}
          position={[111.412, 32.495, -27.406]}
          rotation={[-Math.PI / 2, 0.011, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube066_Material076_0.geometry}
          material={materials["Material.122"]}
          position={[111.46, 32.287, -27.292]}
          rotation={[-Math.PI / 2, 0.011, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube067_Material075_0.geometry}
          material={materials["Material.121"]}
          position={[111.412, 32.447, -27.406]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube068_Material092_0.geometry}
          material={materials["Material.129"]}
          position={[129.119, 44.5, -27.607]}
          rotation={[-Math.PI / 2, 0.284, 0]}
          scale={[5.964, 5.964, 2.081]}
        />
        <mesh
          geometry={nodes.Cube069_Material093_0.geometry}
          material={materials["Material.104"]}
          position={[111.412, 32.447, -27.406]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-42.887, -44.821, -22.902]}
        />
        <mesh
          geometry={nodes.Cube070_Material100_0.geometry}
          material={materials["Material.104"]}
          position={[-266.849, 260.335, -432.751]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.668, 2.324, 5.236]}
        />
        <mesh
          geometry={nodes.Cube071_Material101_0.geometry}
          material={materials["Material.104"]}
          position={[-266.849, 260.335, -426.843]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.668, 2.324, 5.236]}
        />
        <mesh
          geometry={nodes.Cube072_Material078_0.geometry}
          material={materials["Material.104"]}
          position={[111.412, 32.447, -27.406]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube073_Material079_0.geometry}
          material={materials["Material.074_6"]}
          position={[111.412, 32.447, -27.406]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube074_Material084_0.geometry}
          material={materials["Material.104"]}
          position={[-92.944, 206.719, -314.862]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[5.642, 5.4, 4.234]}
        />
        <mesh
          geometry={nodes.Cube075_Material086_0.geometry}
          material={materials["Material.074_26"]}
          position={[-258.007, 195.512, -371.511]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.163, 52.435, 17.743]}
        />
        <mesh
          geometry={nodes.Cube076_Material080_0.geometry}
          material={materials["Material.074_25"]}
          position={[65.926, 34.461, -27.346]}
          rotation={[-Math.PI / 2, 0.234, -Math.PI]}
          scale={[-42.887, -42.887, -22.902]}
        />
        <mesh
          geometry={nodes.Cube077_Material083_0.geometry}
          material={materials["Material.104"]}
          position={[-81.678, 266.506, -437.411]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2.849, 4.872, 17.377]}
        />
        <mesh
          geometry={nodes.Cube078_Material083_0.geometry}
          material={materials["Material.104"]}
          position={[70.352, 334.375, -437.411]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2.849, 4.872, 12.046]}
        />
        <mesh
          geometry={nodes.Cube079_Material089_0.geometry}
          material={materials["Material.104"]}
          position={[-269.84, 182.61, -338.408]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[16.038, 9.162, 4.326]}
        />
        <mesh
          geometry={nodes.Cube080_Material089_0.geometry}
          material={materials["Material.104"]}
          position={[-158.494, 199.975, 375.163]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[16.038, 9.162, 4.326]}
        />
        <mesh
          geometry={nodes.Cube081_Material090_0.geometry}
          material={materials["Material.128"]}
          position={[93.215, 47.658, -27.747]}
          rotation={[-1.544, -0.233, 0]}
          scale={[2.623, 1.334, 2.237]}
        />
        <mesh
          geometry={nodes.Cube082_Material101_0.geometry}
          material={materials["Material.104"]}
          position={[-266.849, 274.042, -426.641]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.668, 2.324, 5.236]}
        />
        <mesh
          geometry={nodes.Cube006_Material043_0.geometry}
          material={materials["Material.137"]}
          position={[-202.956, -64.822, 300.405]}
          rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
          scale={[40.588, 16.64, 531.608]}
        />
        <mesh
          geometry={nodes.Cube007_Material037_0.geometry}
          material={materials["Material.138"]}
          position={[-213.018, 35.333, 296.055]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-193.85, -54.116, -9.321]}
        />
        <mesh
          geometry={nodes.Cube008_Material036_0.geometry}
          material={materials["Material.139"]}
          position={[-80.199, 31.648, 453.149]}
          rotation={[-Math.PI / 2, 0, 1.249]}
          scale={[49.07, 108.779, 5.648]}
        />
        <mesh
          geometry={nodes.Cube009_Material039_0.geometry}
          material={materials["Material.139"]}
          position={[-80.199, 31.648, 163.794]}
          rotation={[-Math.PI / 2, 0, 1.861]}
          scale={[49.07, 108.779, 5.648]}
        />
        <mesh
          geometry={nodes.Cube010_Material006_0.geometry}
          material={materials["Material.140"]}
          position={[-181.146, 31.637, 295.796]}
          rotation={[-Math.PI / 2, 0, 3.136]}
          scale={[43.412, 96.236, 4.997]}
        />
        <mesh
          geometry={nodes.Cube088_Material098_0.geometry}
          material={materials["Material.131"]}
          position={[98.958, 38.352, -8.162]}
          rotation={[-Math.PI / 2, -0.129, 0]}
          scale={[5.453, 4.946, 1.909]}
        />
        <mesh
          geometry={nodes.Cylinder_Material009_0.geometry}
          material={materials["Material.104"]}
          position={[74.209, 51.218, -262.894]}
          scale={[6.078, 6.275, 2.277]}
        />
        <mesh
          geometry={nodes.Cylinder001_Material028_0.geometry}
          material={materials["Material.074_11"]}
          position={[-169.225, 114.406, -71.644]}
          rotation={[-1.571, 1.554, 0]}
          scale={[19.4, 19.4, 2.506]}
        />
        <mesh
          geometry={nodes.Cylinder002_Material029_0.geometry}
          material={materials["Material.074_11"]}
          position={[-166.369, 70.647, -71.645]}
          rotation={[-1.571, 1.536, 0]}
          scale={[10.298, 10.298, 1.33]}
        />
        <mesh
          geometry={nodes.Cylinder003_Material031_0.geometry}
          material={materials["Material.074_11"]}
          position={[-169.225, 114.406, 670.937]}
          rotation={[-1.571, 1.554, 0]}
          scale={[19.4, 19.4, 2.506]}
        />
        <mesh
          geometry={nodes.Cylinder004_Material030_0.geometry}
          material={materials["Material.074_11"]}
          position={[-166.369, 70.647, 670.937]}
          rotation={[-1.571, 1.536, 0]}
          scale={[10.298, 10.298, 1.33]}
        />
        <mesh
          geometry={nodes.Cylinder005_Material041_0.geometry}
          material={materials["Material.074_17"]}
          position={[-161.139, 268.658, -369.025]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[32.71, 32.71, 34.213]}
        />
        <mesh
          geometry={nodes.Cylinder006_Material050_0.geometry}
          material={materials["Material.074_19"]}
          position={[-209.451, 184.616, -370.096]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[36.354, 38.222, 10.575]}
        />
        <mesh
          geometry={nodes.Cylinder007_Material051_0.geometry}
          material={materials["Material.074_20"]}
          position={[-124.439, 184.616, -370.096]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[36.354, 38.222, 10.575]}
        />
        <mesh
          geometry={nodes.Cylinder011_Material045_0.geometry}
          material={materials["Material.112"]}
          position={[-173.935, 242.501, -421.74]}
          rotation={[0.474, 0, Math.PI]}
          scale={[2.055, 2.055, 16.973]}
        />
        <mesh
          geometry={nodes.Cylinder008_Material052_0.geometry}
          material={materials["Material.074_19"]}
          position={[-37.777, 184.616, -370.096]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[36.354, 38.222, 10.575]}
        />
        <mesh
          geometry={nodes.Cylinder009_Material081_0.geometry}
          material={materials["Material.104"]}
          position={[77.222, 34.525, -28.482]}
          rotation={[0, -0.001, 0]}
          scale={[11.574, 11.574, 2.501]}
        />
        <mesh
          geometry={nodes.Cylinder010_Material077_0.geometry}
          material={materials["Material.123"]}
          position={[77.222, 34.525, -27.858]}
          rotation={[0, -0.001, 0]}
          scale={[11.891, 11.891, 0.393]}
        />
        <mesh
          geometry={nodes.Cylinder012_Material082_0.geometry}
          material={materials["Material.124"]}
          position={[77.222, 34.525, -28.71]}
          rotation={[0, -0.001, 0]}
          scale={[10.438, 10.438, 2.868]}
        />
        <mesh
          geometry={nodes.Cylinder013_Material094_0.geometry}
          material={materials["Material.130"]}
          position={[83.027, 308.225, -282.193]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[9.856, 9.856, 4.879]}
        />
        <mesh
          geometry={nodes.Cylinder014_Material095_0.geometry}
          material={materials["Material.127"]}
          position={[84.519, 280.424, -282.193]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[6.544, 6.544, 3.239]}
        />
        <mesh
          geometry={nodes.Cylinder015_Material096_0.geometry}
          material={materials["Material.127"]}
          position={[84.519, 254.307, -282.193]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[6.67, 6.67, 3.302]}
        />
        <mesh
          geometry={nodes.Cylinder016_Material102_0.geometry}
          material={materials["Material.104"]}
          position={[-263.633, 248.737, -421.76]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[3.07, 3.07, 5.454]}
        />
        <mesh
          geometry={nodes.gallerymodel_gallerymodel_0.geometry}
          material={materials["Material.074_28"]}
          position={[-142.04, 164.813, 596.08]}
          rotation={[0.441, -1.284, 0.441]}
          scale={80.689}
        />
        <mesh
          geometry={nodes.geforcertx_Material056_0.geometry}
          material={materials["Material.118"]}
          position={[-229.271, 204.826, -315.957]}
          scale={[10.377, 10.377, 10.91]}
        />
        <mesh
          geometry={nodes["gigabyte-logo_gigabyte-logo_0"].geometry}
          material={materials["Material.074_31"]}
          position={[-161.543, 449.447, 82.082]}
          rotation={[1.571, -1.501, 1.571]}
          scale={23.689}
        />
        <mesh
          geometry={nodes["gigabyte-logo001_gigabyte-logo_0"].geometry}
          material={materials["Material.074_31"]}
          position={[-122.059, 122.824, 301.598]}
          rotation={[-Math.PI / 2, 1.501, Math.PI / 2]}
          scale={17.84}
        />
        <mesh
          geometry={nodes.IOSHIELD_IOSHIELD_0.geometry}
          material={materials["Material.074_3"]}
          position={[-259.689, 284.8, -422.491]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[26.475, 30.855, 31.832]}
        />
        <mesh
          geometry={nodes["metal-mesh-500x500_metal-mesh-500x500_0"].geometry}
          material={materials["Material.074_5"]}
          position={[-42.312, 356.984, -354.164]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[100, 133.704, 100]}
        />
        <mesh
          geometry={
            nodes["metal-mesh-500x500001_metal-mesh-500x500_0"].geometry
          }
          material={materials["Material.074_5"]}
          position={[-174.205, 356.984, -354.164]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[100, 133.704, 100]}
        />
        <mesh
          geometry={
            nodes["metal-mesh-500x500002_metal-mesh-500x500_0"].geometry
          }
          material={materials["Material.074_5"]}
          position={[-270.9, 291.514, -335.328]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[79.555, 106.369, 79.555]}
        />
        <mesh
          geometry={
            nodes["metal-mesh-500x500003_metal-mesh-500x500_0"].geometry
          }
          material={materials["Material.074_5"]}
          position={[-257.977, 182.04, -359.05]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[109.082, 106.369, 79.555]}
        />
        <mesh
          geometry={
            nodes["metal-mesh-500x500004_metal-mesh-500x500_0"].geometry
          }
          material={materials["Material.074_5"]}
          position={[-257.977, 220.724, -359.05]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[109.082, 106.369, 79.555]}
        />
        <mesh
          geometry={nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry}
          material={materials["Material.074_4"]}
          position={[-235.591, 287.747, -423.919]}
          rotation={[0, 0, 0.651]}
          scale={6.343}
        />
        <mesh
          geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry}
          material={materials["Material.074_30"]}
          position={[-136.177, 300.133, 300.405]}
          rotation={[-Math.PI / 2, 1.501, Math.PI / 2]}
          scale={[331.621, 348.065, 331.621]}
        />
        <mesh
          geometry={nodes.Object_10_Tastatur_Unterseite_0.geometry}
          material={materials.Tastatur_Unterseite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_101_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_103_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_105_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_107_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_109_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_111_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_113_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_115_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_117_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_119_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_12_Tastatur_Unterseite_0.geometry}
          material={materials.Tastatur_Unterseite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_121_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_123_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_125_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_127_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 400.77]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[154.135, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_129_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 385.791]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_131_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_133_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_135_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_137_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_139_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_14_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_141_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_143_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_145_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_147_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_149_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_151_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_153_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_155_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_157_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_159_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_16_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_161_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_163_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_165_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_167_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_169_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_171_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_173_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_175_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_177_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_179_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_18_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_181_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_183_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_185_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_187_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_189_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_191_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_193_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_195_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_197_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_199_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_20_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_201_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_203_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_205_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.578, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_207_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_209_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_211_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_213_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_215_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_217_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_219_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_22_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_221_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 400.77]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[154.135, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_223_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_225_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_227_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.432, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_229_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_231_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_233_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_235_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_237_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_239_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_24_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_241_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_243_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_245_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.709, 32.601, 289.941]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[142.89, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_247_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_249_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_251_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_253_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_255_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[129.141, 32.601, 395.134]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[79.314, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_257_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[129.141, 32.601, 395.134]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[79.314, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_259_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 385.748]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_26_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_261_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 385.718]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_263_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 385.526]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_265_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[125.985, 34.792, 402.731]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_267_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_269_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_271_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_273_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_275_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_277_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_279_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_28_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_281_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_283_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_285_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_287_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_289_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_291_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_293_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_295_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_297_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_299_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_301_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_303_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_305_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_307_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_309_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_311_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_313_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_315_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_317_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_319_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_321_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_323_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_325_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_327_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_329_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_331_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_333_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_335_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_337_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_339_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_34_Material004_0.geometry}
          material={materials["Material.141"]}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_341_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_343_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_345_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_347_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_349_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_351_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_353_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_355_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_357_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_359_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_36_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_361_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_363_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_365_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_367_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_369_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_371_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_373_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_375_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_377_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_379_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_38_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_381_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_383_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_385_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_387_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_389_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_391_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_393_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_395_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_397_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_399_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_40_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_401_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.709, 32.601, 289.941]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[142.89, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_403_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_405_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_407_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_409_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_411_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_413_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_415_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_418_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_42_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_420_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[164.917, 31.114, 386.964]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[67.569, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_422_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_424_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_426_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[130.241, 34.605, 390.576]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[72.766, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_428_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_430_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_432_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_434_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_436_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_438_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 402.928]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_44_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_440_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_442_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_444_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_446_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_448_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_450_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_452_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_454_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_456_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_458_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_460_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_462_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_464_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_466_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_468_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_47_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_470_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_472_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_474_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_476_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_478_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_480_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_482_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_484_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_486_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_488_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_49_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_490_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_492_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_494_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_496_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_498_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_500_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_502_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_504_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_506_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_508_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_51_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_510_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_512_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_514_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_516_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_518_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_520_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_522_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_524_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_526_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_528_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 385.856]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_53_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_530_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_532_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_534_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_536_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_538_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_540_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_542_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_544_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_546_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_548_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_55_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_550_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_552_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_554_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_556_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_558_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_560_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_562_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_564_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_566_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_568_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_57_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_570_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_572_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_574_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_576_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_578_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_580_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_582_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_584_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_586_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_588_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_59_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_590_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_592_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_594_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_596_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_598_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_600_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_602_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_604_Material071_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.582, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_606_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.297, 259.274]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={[157.896, 91.415, 91.415]}
        />
        <mesh
          geometry={nodes.Object_608_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_61_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_610_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_612_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_614_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_616_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_618_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_620_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_622_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_624_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_626_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_628_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_63_Material060_0.geometry}
          material={materials["Material.074_34"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_630_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_632_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_634_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_636_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_638_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_640_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_642_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_644_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_646_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_648_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_65_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_650_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_652_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_654_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_656_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_658_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_660_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_662_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_664_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_666_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_668_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_67_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_670_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_672_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_674_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_676_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_678_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_680_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_682_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_684_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_686_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_688_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_69_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_690_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_692_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_694_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_696_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_698_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_700_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_702_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_704_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_706_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_708_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_71_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_710_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_712_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_714_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_716_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_718_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_720_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_722_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_724_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_726_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_728_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_73_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_730_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_732_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_734_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_736_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_738_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_740_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_742_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_744_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_746_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_748_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_75_Material066_0.geometry}
          material={materials["Material.074_35"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_750_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_752_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_754_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_756_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_758_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_760_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_762_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_764_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_766_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_768_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_77_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_770_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_772_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_774_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_776_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_778_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_780_Tasten_0.geometry}
          material={materials["Material.104"]}
          position={[147.708, 34.605, 403.086]}
          rotation={[-Math.PI / 2, -1.481, 1.571]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_784_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[174.161, 46.924, 307.714]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={49.824}
        />
        <mesh
          geometry={nodes.Object_79_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_790_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[191.377, 45.228, 290.099]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={49.824}
        />
        <mesh
          geometry={nodes.Object_792_Material057_0.geometry}
          material={materials["Material.074_33"]}
          position={[190.941, 45.228, 307.684]}
          rotation={[-Math.PI / 2, 0, -1.538]}
          scale={52.612}
        />
        <mesh
          geometry={nodes.Object_794_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[139.381, 50.46, 591.26]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={29.266}
        />
        <mesh
          geometry={nodes.Object_796_Material070_0.geometry}
          material={materials["Material.074_39"]}
          position={[141.108, 50.46, 586.29]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={29.266}
        />
        <mesh
          geometry={nodes.Object_8_Tastatur_Seite_0.geometry}
          material={materials.Tastatur_Seite}
          position={[147.708, 33.245, 403.086]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_81_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_83_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_85_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_87_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_89_Material068_0.geometry}
          material={materials["Material.074_37"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_91_Material067_0.geometry}
          material={materials["Material.074_36"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_93_Material069_0.geometry}
          material={materials["Material.074_38"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_95_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_97_Material005_0.geometry}
          material={materials["Material.074_32"]}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Object_99_Tasten_2_0.geometry}
          material={materials.Tasten_2}
          position={[147.708, 32.601, 403.086]}
          rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
          scale={91.415}
        />
        <mesh
          geometry={nodes.Plane_Material053_0.geometry}
          material={materials["Material.074_21"]}
          position={[117.182, 25.605, -29.165]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[124.427, 154.111, 119.911]}
        />
        <mesh
          geometry={nodes.psuback_psuback_0.geometry}
          material={materials["Material.074_13"]}
          position={[-260.266, 77.97, -352.752]}
          rotation={[0, Math.PI / 2, 0]}
          scale={59.489}
        />
        <mesh
          geometry={nodes.Sphere_Material019_0.geometry}
          material={materials["Material.104"]}
          position={[-277.544, 457.861, -407.854]}
          rotation={[-1.514, 0, 0]}
          scale={4.86}
        />
        <mesh
          geometry={nodes.Sphere001_Material019_0.geometry}
          material={materials["Material.104"]}
          position={[-277.544, 457.861, -439.732]}
          rotation={[-1.62, 0, 0]}
          scale={4.86}
        />
        <mesh
          geometry={
            nodes[
              "test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2"
            ].geometry
          }
          material={materials["Material.074_18"]}
          position={[-115.854, 150.749, -435.223]}
          scale={35.194}
        />
        <mesh
          geometry={nodes.Text_Material046_0.geometry}
          material={materials["Material.113"]}
          position={[-143.804, 250.193, -325.724]}
          rotation={[0, 0, Math.PI / 2]}
          scale={2.436}
        />
        <mesh
          geometry={nodes.Text001_Material097_0.geometry}
          material={materials["Material.104"]}
          position={[87.586, 202.482, -275.486]}
          rotation={[-Math.PI / 2, 1.571, 0]}
          scale={[10.325, 8.384, 9.718]}
        />
        <mesh
          geometry={nodes.Torus_Material013_0.geometry}
          material={materials["Material.108"]}
          position={[69.926, 356.741, -407.006]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.297}
        />
        <mesh
          geometry={nodes.Torus001_Material032_0.geometry}
          material={materials["Material.109"]}
          position={[69.926, 356.741, -423.729]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.297}
        />
        <mesh
          geometry={nodes.usb003_usb_0.geometry}
          material={materials["Material.074_14"]}
          position={[70.473, 357.15, -384.891]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={7.342}
        />
      </group>
      <group position={[1.072, 1.254, 0.641]} scale={0.004}>
        <group
          position={[-23.891, 347.609, -0.005]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Monitor_light_bar_Monitor_light_bar_1001_0.geometry}
            material={materials["Monitor_light_bar_1.001"]}
          />
          <mesh
            geometry={nodes.Monitor_light_bar_Monitor_light_bar_2001_0.geometry}
            material={materials["Monitor_light_bar_2.001"]}
          />
          <mesh
            geometry={nodes.Monitor_light_bar_Monitor_light_bar_3001_0.geometry}
            material={materials["Monitor_light_bar_3.001"]}
          />
          <mesh
            geometry={nodes.Cube005_Monitor_light_bar_1_0.geometry}
            material={materials.Monitor_light_bar_1}
            position={[-0.116, 0, -0.035]}
            scale={1.207}
          />
          <mesh
            geometry={nodes.Cylinder003_Monitor_light_bar_1_0.geometry}
            material={materials.Monitor_light_bar_1}
            position={[-0.154, 0, -0.039]}
            rotation={[Math.PI / 2, 0, 1.833]}
            scale={[-0.008, -0.008, -0.063]}
          />
        </group>
        <group
          position={[-16.35, 294.672, -0.058]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[49.013, 149.669, 58.464]}
        >
          <group
            position={[1.549, -0.001, -0.602]}
            rotation={[0, -1.571, 0]}
            scale={[1.562, 0.61, 1.863]}
          >
            <mesh
              geometry={nodes.Cube003_Material002_0.geometry}
              material={materials["Material.101"]}
              position={[0, 0, 0.068]}
            />
          </group>
          <mesh
            geometry={nodes.Plane001_Display001_0.geometry}
            material={materials["Display.001"]}
          />
          <mesh
            geometry={nodes.Plane001_Material002_0.geometry}
            material={materials["Material.101"]}
          />
          <mesh
            geometry={nodes.Cone002_Material002_0.geometry}
            material={materials["Material.101"]}
            position={[-0.005, -0.001, -0.548]}
            scale={[2.04, 0.668, 1.71]}
          />
          <mesh
            geometry={nodes.Cube001_Korpus001_0.geometry}
            material={materials["Korpus.001"]}
            position={[0.635, -0.001, -0.952]}
            rotation={[0, -1.448, 0]}
            scale={[1.577, 0.619, 1.709]}
          />
          <mesh
            geometry={nodes.Cube002_Material002_0.geometry}
            material={materials["Material.101"]}
            position={[0.005, -0.001, -0.838]}
            rotation={[0, -1.571, 0]}
            scale={[-0.018, -0.019, -0.063]}
          />
          <mesh
            geometry={nodes.Cube004_Material002_0.geometry}
            material={materials["Material.101"]}
            position={[0.682, -0.001, -0.951]}
            rotation={[0, -1.448, 0]}
            scale={[1.452, 0.539, 1.709]}
          />
          <mesh
            geometry={nodes.Cylinder002__0.geometry}
            material={materials["Cylinder.002__0"]}
            position={[-0.005, -0.001, -0.483]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.322, 0.105, 0.107]}
          />
          <mesh
            geometry={nodes.NurbsCircle002_LIGHT001_0.geometry}
            material={materials["LIGHT.001"]}
            position={[-0.005, -0.001, -0.526]}
            scale={[0.099, 0.032, 0.083]}
          />
          <mesh
            geometry={nodes.NurbsCircle003_LIGHT001_0.geometry}
            material={materials["LIGHT.001"]}
            position={[-0.005, -0.001, -0.538]}
            scale={[0.075, 0.025, 0.063]}
          />
          <mesh
            geometry={nodes.Sphere001_Material002_0.geometry}
            material={materials["Material.101"]}
            position={[-0.005, -0.001, -0.617]}
            rotation={[0, -1.571, 0]}
            scale={[0.081, 0.032, 0.096]}
          />
        </group>
        <mesh
          geometry={nodes.Plane002_Korpus001_0.geometry}
          material={materials["Korpus.001"]}
          position={[-24.293, 294.731, -0.007]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
      <group
        position={[2.214, 1.347, -0.246]}
        rotation={[-3.098, -0.214, -3.078]}
        scale={0.001}
      >
        <mesh
          geometry={nodes.Mesh68_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh73_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh79_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh74_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh32_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh15_Aluminum_04__Brushed_0.geometry}
          material={materials.Aluminum_04__Brushed}
        />
        <mesh
          geometry={nodes.Mesh10_Aluminum_04__Brushed_0.geometry}
          material={materials.Aluminum_04__Brushed}
        />
        <mesh
          geometry={nodes.Mesh11_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh23_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh23_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh19_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh19_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh26_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh29_Fabric_04_0.geometry}
          material={materials.Fabric_04}
        />
        <mesh
          geometry={nodes.Mesh25_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh31_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh36_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh30_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh47_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh69_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh63_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh60_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh54_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh55_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh77_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh41_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh42_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh43_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh44_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh39_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh66_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh83_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh33_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh81_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh75_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh71_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh76_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh62_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh78_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh38_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh53_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh37_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh24_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh61_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh20_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh13_Aluminum_01__Stainless_0.geometry}
          material={materials.Aluminum_01__Stainless}
        />
        <mesh
          geometry={nodes.Mesh67_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh82_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh80_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh59_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh22_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh35_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh64_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh1_Fabric_04_0.geometry}
          material={materials.Fabric_04}
        />
        <mesh
          geometry={nodes.Mesh2_Fabric_04_0.geometry}
          material={materials.Fabric_04}
        />
        <mesh
          geometry={nodes.Mesh7_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh57_Aluminum_01__Stainless_0.geometry}
          material={materials.Aluminum_01__Stainless}
        />
        <mesh
          geometry={nodes.Mesh58_Aluminum_01__Stainless_0.geometry}
          material={materials.Aluminum_01__Stainless}
        />
        <mesh
          geometry={nodes.Mesh21_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh27_Aluminum_04__Brushed_0.geometry}
          material={materials.Aluminum_04__Brushed}
        />
        <mesh
          geometry={nodes.Mesh34_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh14_Aluminum_04__Brushed_0.geometry}
          material={materials.Aluminum_04__Brushed}
        />
        <mesh
          geometry={nodes.Mesh16_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh16_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh6_Leather_05_0.geometry}
          material={materials.Leather_05}
        />
        <mesh
          geometry={nodes.Mesh6_Leather_06_0.geometry}
          material={materials.Leather_06}
        />
        <mesh
          geometry={nodes.Mesh40_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh51_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh70_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh49_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh3_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh45_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh28_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh50_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh18_Aluminum_01__Stainless_0.geometry}
          material={materials.Aluminum_01__Stainless}
        />
        <mesh
          geometry={nodes.Mesh8_Plastic_03_0.geometry}
          material={materials.Plastic_03}
        />
        <mesh
          geometry={nodes.Mesh9_Fabric_04_0.geometry}
          material={materials.Fabric_04}
        />
        <mesh
          geometry={nodes.Mesh12_Fabric_04_0.geometry}
          material={materials.Fabric_04}
        />
        <mesh
          geometry={nodes.Mesh17_Fabric_04_0.geometry}
          material={materials.Fabric_04}
        />
        <mesh
          geometry={nodes.Mesh4_Fabric_12_0.geometry}
          material={materials.Fabric_12}
        />
        <mesh
          geometry={nodes.Mesh5_Fabric_12_0.geometry}
          material={materials.Fabric_12}
        />
        <mesh
          geometry={nodes.Mesh5_Fabric_12_0001.geometry}
          material={materials.Fabric_12}
        />
        <mesh
          geometry={nodes.Mesh5_Fabric_12_0002.geometry}
          material={materials.Fabric_12}
        />
        <mesh
          geometry={nodes.Mesh5_Fabric_12_0003.geometry}
          material={materials.Fabric_12}
        />
        <mesh
          geometry={nodes.Mesh5_Fabric_12_0004.geometry}
          material={materials.Fabric_12}
        />
        <mesh
          geometry={nodes.Mesh52_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh48_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh72_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh56_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh46_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
        <mesh
          geometry={nodes.Mesh65_FrontColor_0.geometry}
          material={materials.FrontColor}
        />
      </group>
      <group
        position={[2.237, 1.307, -0.222]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.012}
      >
        <mesh
          geometry={nodes.Object_6003.geometry}
          material={materials.Aluminum_04__Brushed}
          position={[35.418, -75.535, -2.546]}
          rotation={[-0.007, 0.076, 3.085]}
        />
        <mesh
          geometry={nodes.Object_7003.geometry}
          material={materials.Aluminum_04__Brushed}
          position={[35.418, -75.535, -2.778]}
          rotation={[-0.007, 0.076, 3.085]}
        />
      </group>
      <group
        position={[1.013, -1.307, 0.993]}
        rotation={[-1.327, 1.497, 1.327]}
        scale={[0.607, 1.364, 0.611]}
      >
        <mesh
          geometry={nodes.Object_6001.geometry}
          material={materials["Material.029"]}
          position={[0.361, 2.562, 0.726]}
          rotation={[-Math.PI, 1.027, -Math.PI]}
          scale={[-0.061, -0.018, -0.067]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Material.032"]}
          position={[0.367, 2.562, -0.159]}
          rotation={[-Math.PI, 1.259, -Math.PI]}
          scale={[-0.059, -0.018, -0.069]}
        />
        <mesh
          geometry={nodes.Object_8001.geometry}
          material={materials["Material.030"]}
          position={[0.347, 2.562, 0.258]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-0.068, -0.017, -0.454]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.031"]}
          position={[1.233, 2.562, 0.457]}
          rotation={[0, 1.565, 0]}
          scale={[-0.293, -0.018, -0.842]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.033"]}
          position={[1.237, 2.562, 0.162]}
          rotation={[0, 1.565, 0]}
          scale={[-0.354, -0.018, -0.842]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["Material.034"]}
          position={[0.942, 2.562, -0.177]}
          rotation={[-Math.PI, 1.566, -Math.PI]}
          scale={[-0.058, -0.017, -0.535]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["Material.035"]}
          position={[1.515, 2.562, -0.159]}
          rotation={[Math.PI, -1.217, Math.PI]}
          scale={[-0.059, -0.018, -0.069]}
        />
        <mesh
          geometry={nodes.Object_38001.geometry}
          material={materials["Material.042"]}
          position={[-0.015, 2.561, -0.19]}
          rotation={[0, 1.569, 0]}
          scale={[-0.013, -0.017, -0.337]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Material.036"]}
          position={[1.53, 2.56, 0.733]}
          rotation={[0, -0.609, 0]}
          scale={[-0.061, -0.018, -0.067]}
        />
        <mesh
          geometry={nodes.Object_22001.geometry}
          material={materials["Material.037"]}
          position={[1.883, 2.562, 0.316]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-0.345, -0.018, -0.506]}
        />
        <mesh
          geometry={nodes.Object_24001.geometry}
          material={materials["Material.038"]}
          position={[2.444, 2.562, 0.316]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-0.345, -0.018, -0.506]}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.038"]}
          position={[2.375, 2.562, 1.28]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-0.416, -0.018, -0.506]}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials["Material.040"]}
          position={[-0.374, 2.572, 0.31]}
          rotation={[Math.PI, 0, -2.894]}
          scale={[-0.068, -0.021, -0.507]}
        />
        <mesh
          geometry={nodes.Object_30001.geometry}
          material={materials["Material.041"]}
          position={[-0.481, 2.595, 0.307]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-0.051, -0.005, -0.505]}
        />
        <mesh
          geometry={nodes.Object_32001.geometry}
          material={materials["Material.042"]}
          position={[0.977, 2.561, 0.741]}
          rotation={[0, 1.567, 0]}
          scale={[-0.013, -0.017, -0.542]}
        />
        <mesh
          geometry={nodes.Object_34001.geometry}
          material={materials["Material.042"]}
          position={[0.946, 2.561, -0.229]}
          rotation={[0, 1.567, 0]}
          scale={[-0.013, -0.017, -0.533]}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials["Material.042"]}
          position={[2.172, 2.561, -0.182]}
          rotation={[0, 1.569, 0]}
          scale={[-0.013, -0.017, -0.613]}
        />
        <mesh
          geometry={nodes.Object_40001.geometry}
          material={materials["Material.042"]}
          position={[0.007, 2.561, 0.802]}
          rotation={[0, 1.569, 0]}
          scale={[-0.013, -0.017, -0.337]}
        />
        <mesh
          geometry={nodes.Object_42001.geometry}
          material={materials["Material.042"]}
          position={[1.873, 2.561, 0.812]}
          rotation={[0, 1.569, 0]}
          scale={[-0.013, -0.017, -0.337]}
        />
        <mesh
          geometry={nodes.Object_44001.geometry}
          material={materials["Material.042"]}
          position={[2.786, 2.561, 0.797]}
          rotation={[0, 0.005, 0]}
          scale={[-0.013, -0.017, -0.993]}
        />
        <mesh
          geometry={nodes.Object_46001.geometry}
          material={materials["Material.042"]}
          position={[1.963, 2.561, 1.302]}
          rotation={[0, 0.005, 0]}
          scale={[-0.013, -0.017, -0.478]}
        />
        <mesh
          geometry={nodes.Object_48001.geometry}
          material={materials["Material.042"]}
          position={[2.379, 2.561, 1.78]}
          rotation={[0, 1.569, 0]}
          scale={[-0.013, -0.017, -0.426]}
        />
        <mesh
          geometry={nodes.Object_50001.geometry}
          material={materials["Material.042"]}
          position={[1.484, 2.561, 0.776]}
          rotation={[0, 0.963, 0]}
          scale={[-0.01, -0.017, -0.071]}
        />
        <mesh
          geometry={nodes.Object_52001.geometry}
          material={materials["Material.042"]}
          position={[0.396, 2.561, 0.77]}
          rotation={[0, -1.009, 0]}
          scale={[-0.01, -0.017, -0.071]}
        />
        <mesh
          geometry={nodes.Object_54001.geometry}
          material={materials["Material.042"]}
          position={[0.359, 2.561, -0.213]}
          rotation={[0, -1.254, 0]}
          scale={[-0.01, -0.017, -0.071]}
        />
        <mesh
          geometry={nodes.Object_56.geometry}
          material={materials["Material.042"]}
          position={[1.538, 2.561, -0.207]}
          rotation={[0, 1.227, 0]}
          scale={[-0.01, -0.017, -0.071]}
        />
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials["Material.042"]}
          position={[-0.521, 2.593, 0.306]}
          rotation={[0, 0.002, 0]}
          scale={[-0.013, -0.005, -0.503]}
        />
        <mesh
          geometry={nodes.Object_60.geometry}
          material={materials["Material.042"]}
          position={[-0.365, 2.57, 0.812]}
          rotation={[1.648, 1.382, 1.455]}
          scale={[0.006, 0.016, 0.054]}
        />
        <mesh
          geometry={nodes.Object_62.geometry}
          material={materials["Material.042"]}
          position={[-0.475, 2.593, 0.812]}
          rotation={[2.344, 1.55, 0.757]}
          scale={[0.006, 0.005, 0.061]}
        />
        <mesh
          geometry={nodes.Object_64.geometry}
          material={materials["Material.042"]}
          position={[-0.465, 2.579, 0.812]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.006, 0.005, 0.057]}
        />
        <mesh
          geometry={nodes.Object_66.geometry}
          material={materials["Material.042"]}
          position={[-0.448, 2.583, 0.812]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.007, 0.006, 0.033]}
        />
        <mesh
          geometry={nodes.Object_68.geometry}
          material={materials["Material.042"]}
          position={[-0.426, 2.584, 0.812]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.007, 0.006, 0.016]}
        />
        <mesh
          geometry={nodes.Object_70.geometry}
          material={materials["Material.042"]}
          position={[-0.365, 2.57, -0.197]}
          rotation={[1.648, 1.382, 1.455]}
          scale={[0.006, 0.016, 0.054]}
        />
        <mesh
          geometry={nodes.Object_72.geometry}
          material={materials["Material.042"]}
          position={[-0.475, 2.593, -0.197]}
          rotation={[2.344, 1.55, 0.757]}
          scale={[0.006, 0.005, 0.061]}
        />
        <mesh
          geometry={nodes.Object_74001.geometry}
          material={materials["Material.042"]}
          position={[-0.465, 2.579, -0.197]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.006, 0.005, 0.057]}
        />
        <mesh
          geometry={nodes.Object_76001.geometry}
          material={materials["Material.042"]}
          position={[-0.448, 2.583, -0.197]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.007, 0.006, 0.033]}
        />
        <mesh
          geometry={nodes.Object_78.geometry}
          material={materials["Material.042"]}
          position={[-0.426, 2.584, -0.197]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.007, 0.006, 0.016]}
        />
        <mesh
          geometry={nodes.Object_80.geometry}
          material={materials["Material.031"]}
          position={[2.19, 2.241, -0.175]}
          rotation={[1.555, 1.565, 0]}
          scale={[-0.313, -0.018, -0.601]}
        />
        <mesh
          geometry={nodes.Object_82.geometry}
          material={materials["Material.031"]}
          position={[0.946, 2.241, -0.208]}
          rotation={[1.554, 1.565, 0]}
          scale={[-0.313, -0.018, -0.55]}
        />
        <mesh
          geometry={nodes.Object_84001.geometry}
          material={materials["Material.031"]}
          position={[-0.019, 2.241, -0.175]}
          rotation={[1.555, 1.565, 0]}
          scale={[-0.313, -0.018, -0.331]}
        />
        <mesh
          geometry={nodes.Object_86001.geometry}
          material={materials["Material.031"]}
          position={[0.34, 2.241, -0.188]}
          rotation={[3.125, 1.233, 1.57]}
          scale={[0.313, 0.018, 0.063]}
        />
        <mesh
          geometry={nodes.Object_88.geometry}
          material={materials["Material.031"]}
          position={[1.551, 2.241, -0.195]}
          rotation={[0.013, 1.14, -1.599]}
          scale={[0.313, 0.018, 0.063]}
        />
        <mesh
          geometry={nodes.Object_90.geometry}
          material={materials["Material.031"]}
          position={[2.778, 2.239, 0.799]}
          rotation={[0.005, -0.001, 1.554]}
          scale={[-0.313, -0.018, -0.999]}
        />
        <mesh
          geometry={nodes.Object_92.geometry}
          material={materials["Material.031"]}
          position={[2.36, 2.241, 1.78]}
          rotation={[1.555, 1.565, 0]}
          scale={[-0.313, -0.018, -0.411]}
        />
        <mesh
          geometry={nodes.Object_94001.geometry}
          material={materials["Material.031"]}
          position={[-0.521, 2.26, 0.306]}
          rotation={[0.005, -0.001, 1.554]}
          scale={[-0.331, -0.018, -0.514]}
        />
        <mesh
          geometry={nodes.Object_96001.geometry}
          material={materials["Material.031"]}
          position={[-0.424, 2.254, -0.184]}
          rotation={[2.791, 1.555, 1.905]}
          scale={[0.324, 0.019, 0.086]}
        />
        <mesh
          geometry={nodes.Object_98.geometry}
          material={materials["Material.042"]}
          position={[-0.52, 2.262, 0.808]}
          rotation={[1.58, -0.018, 0]}
          scale={[-0.018, -0.017, -0.333]}
        />
        <mesh
          geometry={nodes.Object_100.geometry}
          material={materials["Material.042"]}
          position={[1.96, 2.251, 1.782]}
          rotation={[1.552, -0.018, 0]}
          scale={[-0.018, -0.015, -0.318]}
        />
        <mesh
          geometry={nodes.Object_4001.geometry}
          material={materials["Material.028"]}
          position={[0.001, 2.562, 0.307]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-0.345, -0.018, -0.506]}
        />
      </group>
      <group position={[2.664, 1.347, 1.647]} scale={0.331}>
        <group
          position={[-4.461, 2.732, 2.253]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        >
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            geometry={nodes.Object_55.geometry}
            material={materials["Material.019"]}
          />
        </group>
        <group
          position={[-4.481, 2.728, 2.256]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        >
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials["Material.019"]}
          />
        </group>
        <group position={[0, 0, -1.088]} scale={5.971}>
          <mesh
            geometry={nodes.Object_198.geometry}
            material={materials["Material.010"]}
            scale={[1.082, 1, 1]}
          />
        </group>
        <group position={[0, 0, -1.088]} scale={5.971}>
          <mesh
            geometry={nodes.Object_392.geometry}
            material={materials["Material.010"]}
            position={[0.097, 0, 0]}
          />
        </group>
        <group
          position={[-5.241, 2.645, 3.507]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.596}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials["Material.018"]}
              position={[-0.161, 0.721, 0]}
              scale={[0.063, 0.096, 0.096]}
            />
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.screen}
              position={[-0.161, 0.717, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.144, 0.064, 0.144]}
            />
          </group>
        </group>
        <group
          position={[-4.251, 2.649, 5.449]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.304}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[5.644, 0.114, -0.655]}>
              <group position={[-0.001, 0, 0.003]}>
                <mesh
                  geometry={nodes.Object_34.geometry}
                  material={materials.blueneon}
                />
                <mesh
                  geometry={nodes.Object_35.geometry}
                  material={materials.blueneon}
                />
              </group>
              <mesh
                geometry={nodes.Object_30.geometry}
                material={materials.whitebase}
                position={[0.106, -0.087, 0.486]}
              />
              <mesh
                geometry={nodes.Object_32.geometry}
                material={materials.blackbase}
                position={[-0.184, -0.017, 0.234]}
              />
            </group>
          </group>
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={3.766}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-0.762, 0, 0.87]}
              rotation={[0, -0.689, 0]}
              scale={0.245}
            >
              <group
                position={[-0.781, 2.471, -0.963]}
                rotation={[-Math.PI, -0.75, -Math.PI / 2]}
                scale={0.122}
              >
                <mesh
                  geometry={nodes.Object_74.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  geometry={nodes.Object_76.geometry}
                  material={materials.ShinyPlastic}
                />
              </group>
              <group
                position={[0.487, 2.471, -1.148]}
                rotation={[Math.PI, 0.453, -Math.PI / 2]}
                scale={0.122}
              >
                <mesh
                  geometry={nodes.Object_79.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  geometry={nodes.Object_81.geometry}
                  material={materials.ShinyPlastic}
                />
              </group>
              <group
                position={[1.064, 2.471, 0.037]}
                rotation={[Math.PI, 1.119, -Math.PI / 2]}
                scale={0.122}
              >
                <mesh
                  geometry={nodes.Object_84.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  geometry={nodes.Object_86.geometry}
                  material={materials.ShinyPlastic}
                />
              </group>
              <group
                position={[0.08, 2.471, 0.905]}
                rotation={[0, 0.998, Math.PI / 2]}
                scale={0.122}
              >
                <mesh
                  geometry={nodes.Object_89.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  geometry={nodes.Object_91.geometry}
                  material={materials.ShinyPlastic}
                />
              </group>
              <group
                position={[-1.049, 2.471, 0.283]}
                rotation={[0, -1.172, Math.PI / 2]}
                scale={0.122}
              >
                <mesh
                  geometry={nodes.Object_94.geometry}
                  material={materials.Plastic}
                />
                <mesh
                  geometry={nodes.Object_96.geometry}
                  material={materials.ShinyPlastic}
                />
              </group>
              <mesh
                geometry={nodes.Object_99.geometry}
                material={materials.Plastic}
                position={[0.913, 3.713, -0.653]}
                rotation={[-0.039, -0.822, -0.029]}
              />
              <mesh
                geometry={nodes.Object_102.geometry}
                material={materials.LeatherCougar2}
                position={[0.51, 3.859, -0.727]}
                rotation={[0.061, -0.821, 0.044]}
                scale={0.312}
              />
              <mesh
                geometry={nodes.Object_105.geometry}
                material={materials.Plastic}
                position={[-0.168, 2.214, -0.072]}
                rotation={[0, -0.822, 0]}
              />
              <mesh
                geometry={nodes.Object_108.geometry}
                material={materials.LeatherCougar}
                position={[0.213, 2.089, -0.426]}
                rotation={[-0.295, -0.8, -0.214]}
              />
              <mesh
                geometry={nodes.Object_111.geometry}
                material={materials.Plastic}
                position={[-0.168, 1.22, -0.072]}
                rotation={[0, -0.822, 0]}
              />
              <mesh
                geometry={nodes.Object_114.geometry}
                material={materials.Metallic}
                position={[-0.168, 0.549, -0.072]}
                rotation={[0, -0.822, 0]}
                scale={0.57}
              />
              <mesh
                geometry={nodes.Object_117.geometry}
                material={materials.Plastic}
                position={[-0.168, 2.214, -0.072]}
                rotation={[0, -0.822, 0]}
                scale={0.166}
              />
              <mesh
                geometry={nodes.Object_120.geometry}
                material={materials.Plastic}
                position={[0.599, 1.502, 0.544]}
                rotation={[0, -0.551, 0]}
                scale={0.04}
              />
              <mesh
                geometry={nodes.Object_123.geometry}
                material={materials.Plastic}
                position={[-0.321, 1.105, 0.07]}
                rotation={[-0.471, -0.764, -0.339]}
              />
              <mesh
                geometry={nodes.Object_126.geometry}
                material={materials.Plastic}
                position={[-0.051, 0.738, -0.181]}
                rotation={[0, -0.822, 0]}
              />
              <group
                position={[-0.168, 2.214, -0.072]}
                rotation={[Math.PI / 2, 0, 0.822]}
              >
                <mesh
                  geometry={nodes.Object_129.geometry}
                  material={materials.Leather}
                />
                <mesh
                  geometry={nodes.Object_131.geometry}
                  material={materials.Orange}
                />
                <mesh
                  geometry={nodes.Object_133.geometry}
                  material={materials["Leather.001"]}
                />
                <mesh
                  geometry={nodes.Object_135.geometry}
                  material={materials["Leather.002"]}
                />
              </group>
              <mesh
                geometry={nodes.Object_138.geometry}
                material={materials.Belt}
                position={[-0.168, 2.214, -0.072]}
                rotation={[Math.PI / 2, 0, 0.822]}
                scale={0.996}
              />
              <mesh
                geometry={nodes.Object_141.geometry}
                material={materials.Belt}
                position={[0.304, 2.214, 0.435]}
                rotation={[Math.PI / 2, 0, 0.822]}
                scale={0.996}
              />
              <group
                position={[-0.168, 2.214, -0.072]}
                rotation={[0, -0.822, 0]}
              >
                <mesh
                  geometry={nodes.Object_145.geometry}
                  material={materials.Plastic}
                  position={[0, 0.051, 0]}
                />
                <mesh
                  geometry={nodes.Object_148.geometry}
                  material={materials.Plastic}
                  position={[0, 0.038, 0.432]}
                  scale={0.058}
                />
                <mesh
                  geometry={nodes.Object_151.geometry}
                  material={materials.Plastic}
                  position={[0.016, 0.581, 0.432]}
                />
                <mesh
                  geometry={nodes.Object_154.geometry}
                  material={materials["Metallic.001"]}
                  position={[0.003, 1.595, -1.295]}
                  rotation={[0, 0.023, 0]}
                  scale={0.009}
                />
                <mesh
                  geometry={nodes.Object_157.geometry}
                  material={materials.Plastic}
                  position={[0.363, 1.275, -1.25]}
                  rotation={[-0.196, 0.026, -0.02]}
                />
                <mesh
                  geometry={nodes.Object_160.geometry}
                  material={materials.Plastic}
                  position={[0.363, 1.275, -1.25]}
                  rotation={[-0.196, 0.026, -0.02]}
                  scale={0.977}
                />
                <mesh
                  geometry={nodes.Object_163.geometry}
                  material={materials.Plastic}
                  position={[-0.329, 1.272, -1.252]}
                  rotation={[-0.196, 0.026, -0.02]}
                />
                <mesh
                  geometry={nodes.Object_166.geometry}
                  material={materials.Plastic}
                  position={[-0.329, 1.272, -1.252]}
                  rotation={[-0.196, 0.026, -0.02]}
                  scale={0.977}
                />
                <mesh
                  geometry={nodes.Object_169.geometry}
                  material={materials.Plastic}
                  position={[0, 0.205, 0]}
                />
                <mesh
                  geometry={nodes.Object_176.geometry}
                  material={materials.Belt}
                  position={[0.304, 1.528, 0.025]}
                  rotation={[Math.PI / 2, 0, 0.051]}
                />
                <mesh
                  geometry={nodes.Object_179.geometry}
                  material={materials.Belt}
                  position={[0.009, 1.646, -1.177]}
                  rotation={[Math.PI / 2, 0, 0.051]}
                  scale={0.03}
                />
                <mesh
                  geometry={nodes.Object_171.geometry}
                  material={materials.Leather}
                />
                <mesh
                  geometry={nodes.Object_173.geometry}
                  material={materials.Orange}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          position={[2.115, 0, -3.69]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.057}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_186.geometry}
              material={materials.Brown_Wood}
              position={[2.045, 0, 0.391]}
            />
            <mesh
              geometry={nodes.Object_188.geometry}
              material={materials.Blue_Wood}
              position={[2.025, 0, 0.393]}
            />
            <mesh
              geometry={nodes.Object_190.geometry}
              material={materials.Blanket}
              position={[2.024, 0, 0.527]}
            />
            <mesh
              geometry={nodes.Object_192.geometry}
              material={materials["Material.141"]}
              position={[2.022, 0, 0.521]}
            />
            <mesh
              geometry={nodes.Object_184.geometry}
              material={materials.Pillow}
              position={[2.185, -0.109, 0.433]}
            />
          </group>
        </group>
        <group
          position={[-5.909, 1.245, -2.842]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.001}
        >
          <group position={[0.001, 0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_8002.geometry}
              material={materials.Mat3}
              position={[0.001, -17.839, 46.282]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[240, 100, 300]}
            />
            <group
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[240, 100, 300]}
            >
              <mesh
                geometry={nodes.Object_11.geometry}
                material={materials.Mat1}
              />
              <mesh
                geometry={nodes.Object_13.geometry}
                material={materials.Mat2}
              />
            </group>
          </group>
        </group>
        <mesh
          geometry={nodes.Object_396.geometry}
          material={materials["Material.015"]}
          position={[0.397, 8.703, -6.482]}
          scale={[0.391, 0.087, 0.391]}
        />
        <mesh
          geometry={nodes.Object_398.geometry}
          material={materials["Material.016"]}
          position={[3.28, 8.703, -6.482]}
          scale={[0.391, 0.087, 0.391]}
        />
        <mesh
          geometry={nodes.Object_400.geometry}
          material={materials["Material.011"]}
          position={[-2.338, 8.703, -6.482]}
          scale={[0.391, 0.087, 0.391]}
        />
        <mesh
          geometry={nodes.Object_402.geometry}
          material={materials["Material.012"]}
          position={[0.397, 8.703, -6.482]}
          scale={[0.391, 0.087, 0.391]}
        />
        <mesh
          geometry={nodes.Object_404.geometry}
          material={materials["Material.013"]}
          position={[3.28, 8.703, -6.482]}
          scale={[0.391, 0.087, 0.391]}
        />
        <mesh
          geometry={nodes.Object_394.geometry}
          material={materials["Material.014"]}
          position={[-2.338, 8.703, -6.482]}
          scale={[0.391, 0.087, 0.391]}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials["Material.019"]}
          position={[-4.403, 2.687, 2.298]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_52.geometry}
          material={materials["Material.019"]}
          position={[-4.291, 2.672, 2.235]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_57.geometry}
          material={materials["Material.019"]}
          position={[-4.461, 2.712, 2.255]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_59.geometry}
          material={materials["Material.019"]}
          position={[-4.372, 2.676, 2.282]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_61.geometry}
          material={materials["Material.019"]}
          position={[-4.29, 2.671, 2.238]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_63.geometry}
          material={materials["Material.019"]}
          position={[-4.44, 2.665, 2.263]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_65.geometry}
          material={materials["Material.019"]}
          position={[-4.556, 2.668, 2.258]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_67.geometry}
          material={materials["Material.020"]}
          position={[-4.43, 2.718, 2.258]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials["Material.019"]}
          position={[-4.452, 2.697, 2.25]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials["Material.019"]}
          position={[-4.443, 2.688, 2.256]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials["Material.019"]}
          position={[-4.52, 2.669, 2.267]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials["Material.019"]}
          position={[-4.485, 2.669, 2.256]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials["Material.019"]}
          position={[-4.377, 2.691, 2.239]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-0.099}
        />
        <mesh
          geometry={nodes.Object_204.geometry}
          material={materials["Material.003"]}
          position={[-4.592, 2.645, 3.278]}
          scale={[1.546, 1, 2.244]}
        />
      </group>
      <group
        position={[3.538, 1.927, 0.094]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.078}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey_keyboard.jpg"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Glass_-_Heavy_Color"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Plastic_-_Translucent_Matte_Gray"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Acrylic_Clear}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Bronze_-_Polished"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Rubber_-_Soft"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Steel_-_Satin"]}
        />
      </group>
      <group position={[2.867, 2.94, 2.043]} scale={0.001}>
        <mesh
          geometry={nodes.UCttAeyROPsgmix.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.rrqFqyfckTuyRuI.geometry}
          material={materials.CSNzlRnZuvCyxNL}
        />
        <mesh
          geometry={nodes.XbtrdVaOWYmkEiU.geometry}
          material={materials.YiceMpFVTpnmoaq}
        />
        <mesh
          geometry={nodes.YbXWdqEcjbfTKuN_0.geometry}
          material={materials.GFNYbWjyDVGUwJd}
        />
        <mesh
          geometry={nodes.AbxQOpRbGREHXRG.geometry}
          material={materials.IDdMwJVCyuFpUnA}
        />
        <mesh
          geometry={nodes.alSOKOYgFKIcUtR.geometry}
          material={materials.sWxYOtHGWTcXRMx}
        />
        <mesh
          geometry={nodes.FjhETOCBEeiBmch.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.lxsKwuOPNvmzBKg_0.geometry}
          material={materials.KhJiSWFcsscOusf}
        />
        <mesh
          geometry={nodes.tWfjYtMZCfucxRt.geometry}
          material={materials.fdfRsQCrfvPBPfQ}
        />
        <mesh
          geometry={nodes.aYjPeBrpBRopJbp.geometry}
          material={materials.xHgtbqndQshkTKG}
        />
        <mesh
          geometry={nodes.BeQtuLXtpSTrzAH.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          geometry={nodes.KUDomTaVduCyevu.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.QaGkMzxNzKPcqRy.geometry}
          material={materials.iEhZxWeNLTDdgxm}
        />
        <mesh
          geometry={nodes.QOfJIBEXOvXfSUh.geometry}
          material={materials.vsSJQngPxBJTVZb}
        />
        <mesh
          geometry={nodes.RUMRNTkptJGDMpy.geometry}
          material={materials.LJBezuBxKRoHnAp}
        />
        <mesh
          geometry={nodes.BDLCJBydsNjizog_0.geometry}
          material={materials.fGwijctGaiRaYJC}
        />
        <mesh
          geometry={nodes.GWEiavWnRxbogtw_0.geometry}
          material={materials.FsunUcGyajFpQmW}
        />
        <mesh
          geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry}
          material={materials.LJBezuBxKRoHnAp}
        />
        <mesh
          geometry={nodes.PLFTnNQeqVAxicS.geometry}
          material={materials.BLpVAsLWNICZYGG}
        />
        <mesh
          geometry={nodes.RFqaqXLpuCDBIGV_0.geometry}
          material={materials.nJRBoEsOhzMSqCz}
        />
        <mesh
          geometry={nodes.tWBbDznHihIxXam.geometry}
          material={materials.OStzgRHtVBLWwiD}
        />
        <mesh
          geometry={nodes.lgnGJJmNebyRbHq_0.geometry}
          material={materials.rNCplyWedyfORFh}
        />
        <mesh
          geometry={nodes.zPPSOvNamLQVyvv.geometry}
          material={materials.qEGySvwsouNnVcn}
        />
        <mesh
          geometry={nodes.mZxrNiCtMrMjOMv.geometry}
          material={materials.WqbAhnIPgrrhfXS}
        />
        <mesh
          geometry={nodes.YPGjoywokSeoQFr.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.rJeCWUNsVVXXAbI.geometry}
          material={materials.psePdsxZprlxGrw}
        />
        <mesh
          geometry={nodes.rqSonbcVVSPWFfa_0.geometry}
          material={materials.jFPFAvCbiqflbQV}
        />
        <mesh
          geometry={nodes.vauUojKrKkLLDtY.geometry}
          material={materials.HvAGJeQTAiWbceX}
        />
        <mesh
          geometry={nodes.wjSYkRykuFHJNPw.geometry}
          material={materials.KxzouvBYEgdZhMo}
        />
        <mesh
          geometry={nodes.yqmgDmvGsmuPwXx_0.geometry}
          material={materials.bmOZLlCkCKhIIVe}
        />
        <mesh
          geometry={nodes.dNDonqESZOxUcei_0.geometry}
          material={materials.LUbRMhkIhuekQRK}
        />
        <mesh
          geometry={nodes.IuMgFUHIyRWENxG_0.geometry}
          material={materials.LcWBQfBvCzxThpp}
        />
        <mesh
          geometry={nodes.nJYGEbPQybRBbiN.geometry}
          material={materials.tDZQoaroJfCIQtF}
        />
        <mesh
          geometry={nodes.RGbIswEcCTzqNsn_0.geometry}
          material={materials.FlDKBWPodPcEeGy}
        />
        <mesh
          geometry={nodes.XeFHhVBtRZWPGxR.geometry}
          material={materials.tfbCjiZQaZkmtHx}
        />
        <mesh
          geometry={nodes.JyAbjubWrOdfygC_0.geometry}
          material={materials.jFPFAvCbiqflbQV}
        />
        <mesh
          geometry={nodes.nxFoHsySvfcSLvp.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.oCklTGvTZoDWJrC_0.geometry}
          material={materials.tfbCjiZQaZkmtHx}
        />
        <mesh
          geometry={nodes.BhvzCWikxrVeDTV.geometry}
          material={materials.LtesZnUOMbBEAoi}
        />
        <mesh
          geometry={nodes.DLfIUIalXuQjJsL.geometry}
          material={materials.pBMikDFQfUOsKkr}
        />
        <mesh
          geometry={nodes.ePYqawqlCJbCsNi.geometry}
          material={materials.CSNzlRnZuvCyxNL}
        />
        <mesh
          geometry={nodes.FaUtifOQSMTXiZM.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.FGDSbHbILfUmiaH.geometry}
          material={materials.tfbCjiZQaZkmtHx}
        />
        <mesh
          geometry={nodes.jQXfQpudiYObSGp.geometry}
          material={materials.sWxYOtHGWTcXRMx}
        />
        <mesh
          geometry={nodes.KABLQLZRuEbcLWk.geometry}
          material={materials.fdfRsQCrfvPBPfQ}
        />
        <mesh
          geometry={nodes.knexoFNknstHgiO.geometry}
          material={materials.KtvhjlxyToKjYkE}
        />
        <mesh
          geometry={nodes.MMkajxMNWrwGQfi.geometry}
          material={materials.LtesZnUOMbBEAoi}
        />
        <mesh
          geometry={nodes.OMkeKbwVHRBkBwM.geometry}
          material={materials.IkWzRHNnDaKQXIi}
        />
        <mesh
          geometry={nodes.qjXEDwnnBYwWcJn.geometry}
          material={materials.tfbCjiZQaZkmtHx}
        />
        <mesh
          geometry={nodes.YnrVhXEUDbStWCs.geometry}
          material={materials.EJpkIDZfhPDUzel}
        />
      </group>
      <group
        position={[1.309, 2.479, 0.738]}
        rotation={[-1.512, -0.459, -2.085]}
        scale={0.199}
      >
        <mesh
          geometry={nodes.Frame001_Antenna_0001.geometry}
          material={materials["Antenna.001"]}
        />
        <mesh
          geometry={nodes.Frame001_Frame2_0001.geometry}
          material={materials["Frame2.001"]}
        />
        <mesh
          geometry={nodes.Frame001_Frame_0001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Frame001_Mic_0001.geometry}
          material={materials["material.001"]}
        />
        <mesh
          geometry={nodes.Frame001_Port_0001.geometry}
          material={materials["Port.001"]}
        />
        <mesh
          geometry={nodes.Apple_Logo001_Logo_0001.geometry}
          material={materials["Logo.001"]}
        />
        <mesh
          geometry={nodes.Body003_Screen_Glass_0001.geometry}
          material={materials["Screen_Glass.001"]}
        />
        <mesh
          geometry={nodes.Body002_Bezel_0001.geometry}
          material={materials["Bezel.001"]}
        />
        <mesh
          geometry={nodes.Body002_Body_0001.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          geometry={nodes.Body002_Camera_Glass_0001.geometry}
          material={materials["Camera_Glass.001"]}
        />
        <mesh
          geometry={nodes.Body002_Lens_0001.geometry}
          material={materials["Lens.001"]}
        />
        <mesh
          geometry={nodes.Body002_Material_0001.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          geometry={nodes.Body002_Mic_0001.geometry}
          material={materials["material.001"]}
        />
        <mesh
          geometry={nodes.Body002_Wallpaper_0001.geometry}
          material={materials["Wallpaper.001"]}
        />
        <mesh
          geometry={nodes.Button001_Frame_0001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Camera005_Material002_0001.geometry}
          material={materials["Material.050"]}
        />
        <mesh
          geometry={nodes.Camera004_Black_Glass_0001.geometry}
          material={materials["Black_Glass.001"]}
        />
        <mesh
          geometry={nodes.Camera004_Body_0001.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          geometry={nodes.Camera004_Camera_Frame_0001.geometry}
          material={materials["Camera_Frame.002"]}
        />
        <mesh
          geometry={nodes.Camera004_Camera_Glass_0001.geometry}
          material={materials["Camera_Glass.001"]}
        />
        <mesh
          geometry={nodes.Camera004_Flash_0001.geometry}
          material={materials["Flash.001"]}
        />
        <mesh
          geometry={nodes.Camera004_Gray_Glass_0001.geometry}
          material={materials["Gray_Glass.001"]}
        />
        <mesh
          geometry={nodes.Camera004_Lens_0001.geometry}
          material={materials["Lens.001"]}
        />
        <mesh
          geometry={nodes.Camera004_Port_0001.geometry}
          material={materials["Port.001"]}
        />
        <mesh
          geometry={nodes.Camera002_Body_0001.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          geometry={nodes.Camera002_Camera_Frame001_0001.geometry}
          material={materials["Camera_Frame.003"]}
        />
        <mesh
          geometry={nodes.Camera002_Glass_0001.geometry}
          material={materials["Glass.001"]}
        />
        <mesh
          geometry={nodes.Camera002_Mic_0001.geometry}
          material={materials["material.001"]}
        />
        <mesh
          geometry={nodes.Circle001_Frame_0001.geometry}
          material={materials["Frame.001"]}
        />
      </group>
      <group
        position={[1.309, 2.479, 2.272]}
        rotation={[-1.512, -0.459, -2.085]}
        scale={0.199}
      >
        <mesh
          geometry={nodes.Frame001_Antenna_0.geometry}
          material={materials.Antenna}
        />
        <mesh
          geometry={nodes.Frame001_Frame2_0.geometry}
          material={materials.Frame2}
        />
        <mesh
          geometry={nodes.Frame001_Frame_0.geometry}
          material={materials.Frame}
        />
        <mesh
          geometry={nodes.Frame001_Mic_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Frame001_Port_0.geometry}
          material={materials.Port}
        />
        <mesh
          geometry={nodes.Apple_Logo001_Logo_0.geometry}
          material={materials.Logo}
        />
        <mesh
          geometry={nodes.Body002_Bezel_0.geometry}
          material={materials.Bezel}
        />
        <mesh
          geometry={nodes.Body002_Body_0.geometry}
          material={materials.Body}
        />
        <mesh
          geometry={nodes.Body002_Camera_Glass_0.geometry}
          material={materials.Camera_Glass}
        />
        <mesh
          geometry={nodes.Body002_Lens_0.geometry}
          material={materials.Lens}
        />
        <mesh
          geometry={nodes.Body002_Material_0.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          geometry={nodes.Body002_Mic_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Body002_Wallpaper_0.geometry}
          material={materials.Wallpaper}
        />
        <mesh
          geometry={nodes.Body003_Screen_Glass_0.geometry}
          material={materials.Screen_Glass}
        />
        <mesh
          geometry={nodes.Button001_Frame_0.geometry}
          material={materials.Frame}
        />
        <mesh
          geometry={nodes.Camera002_Body_0.geometry}
          material={materials.Body}
        />
        <mesh
          geometry={nodes.Camera002_Camera_Frame001_0.geometry}
          material={materials["Camera_Frame.001"]}
        />
        <mesh
          geometry={nodes.Camera002_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          geometry={nodes.Camera002_Mic_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Camera004_Black_Glass_0.geometry}
          material={materials.Black_Glass}
        />
        <mesh
          geometry={nodes.Camera004_Body_0.geometry}
          material={materials.Body}
        />
        <mesh
          geometry={nodes.Camera004_Camera_Frame_0.geometry}
          material={materials.Camera_Frame}
        />
        <mesh
          geometry={nodes.Camera004_Camera_Glass_0.geometry}
          material={materials.Camera_Glass}
        />
        <mesh
          geometry={nodes.Camera004_Flash_0.geometry}
          material={materials.Flash}
        />
        <mesh
          geometry={nodes.Camera004_Gray_Glass_0.geometry}
          material={materials.Gray_Glass}
        />
        <mesh
          geometry={nodes.Camera004_Lens_0.geometry}
          material={materials.Lens}
        />
        <mesh
          geometry={nodes.Camera004_Port_0.geometry}
          material={materials.Port}
        />
        <mesh
          geometry={nodes.Camera005_Material002_0.geometry}
          material={materials["Material.045"]}
        />
        <mesh
          geometry={nodes.Circle001_Frame_0.geometry}
          material={materials.Frame}
        />
      </group>
      <group
        position={[1.493, 2.392, -0.213]}
        rotation={[0, 0.092, 0]}
        scale={0.034}
      >
        <group position={[0, -3.831, -1.949]} rotation={[0.717, 0, 0]}>
          <mesh
            geometry={nodes.Book_frame_Books_Material_0.geometry}
            material={materials.Books_Material}
            position={[-0.002, 0.023, 0.001]}
          />
          <mesh
            geometry={nodes.Book_sheets_Books_Material_0.geometry}
            material={materials.Books_Material}
            position={[-0.002, 0.023, 0.001]}
          />
          <mesh
            geometry={nodes.Lloose_sheet_01_Books_Material_0.geometry}
            material={materials.Books_Material}
          />
          <mesh
            geometry={nodes.Loose_sheet_02_Books_Material_0.geometry}
            material={materials.Books_Material}
          />
          <mesh
            geometry={nodes.Loose_sheet_03_Books_Material_0.geometry}
            material={materials.Books_Material}
          />
          <mesh
            geometry={nodes.Loose_Sheet_04_Books_Material_0.geometry}
            material={materials.Books_Material}
            position={[-0.002, 0.023, 0.001]}
          />
        </group>
        <group
          position={[-2.704, -0.067, -4.024]}
          rotation={[0.526, -0.55, 0.173]}
          scale={1.21}
        >
          <mesh
            geometry={nodes.Quill_Body_Books_Material_0.geometry}
            material={materials.Books_Material}
          />
          <mesh
            geometry={nodes.Quill_Feather_Books_Material_0.geometry}
            material={materials.Books_Material}
          />
          <mesh
            geometry={nodes.Quill_Tip_Books_Material_0.geometry}
            material={materials.Books_Material}
          />
        </group>
        <group position={[0, -0.009, 0]}>
          <group position={[0, 0.058, 0]}>
            <group
              position={[2.144, 1.714, -6.64]}
              rotation={[-2.916, -1.112, 3.021]}
            >
              <mesh
                geometry={nodes.Key_circle_Books_Material_0.geometry}
                material={materials.Books_Material}
              />
              <group position={[0.491, 0.213, -0.259]}>
                <mesh
                  geometry={nodes.pCube3_Books_Material_0.geometry}
                  material={materials.Books_Material}
                />
                <mesh
                  geometry={nodes.pCube4_Books_Material_0.geometry}
                  material={materials.Books_Material}
                />
              </group>
              <mesh
                geometry={nodes.Key_stick_Books_Material_0.geometry}
                material={materials.Books_Material}
              />
            </group>
            <mesh
              geometry={nodes.Plane2_Books_Material_0.geometry}
              material={materials.Books_Material}
            />
            <mesh
              geometry={nodes.Plane1_Books_Material_0.geometry}
              material={materials.Books_Material}
              position={[-0.441, -1.369, 0.12]}
              rotation={[0.211, -0.039, -0.085]}
              scale={[1, 1, 1.092]}
            />
          </group>
        </group>
      </group>
      <group
        position={[1.17, 0.516, -5.756]}
        rotation={[0, -1.548, 0]}
        scale={0.001}
      >
        <group
          position={[158.03, 48.437, 528.227]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={6.414}
        >
          <mesh
            geometry={nodes.Object_832_Material068_0001.geometry}
            material={materials["Material.074_37.001"]}
            position={[3.825, -1954.042, 314.595]}
            scale={1.653}
          />
        </group>
      </group>
      <group position={[1.028, -0.067, -5.518]} scale={0.229}>
        <group position={[3.28, 8.703, -6.482]} scale={[0.391, 0.087, 0.391]}>
          <mesh
            geometry={nodes.Object_398003.geometry}
            material={materials["Material.152"]}
            position={[-11.232, 114.27, 111.822]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.046, -0.067, -5.518]} scale={0.229}>
        <group position={[3.28, 8.703, -6.482]} scale={[0.391, 0.087, 0.391]}>
          <mesh
            geometry={nodes.Object_398002.geometry}
            material={materials["Material.153"]}
            position={[-10.919, 114.27, 101.159]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.09, -0.067, -5.518]} scale={0.229}>
        <group position={[3.28, 8.703, -6.482]} scale={[0.391, 0.087, 0.391]}>
          <mesh
            geometry={nodes.Object_398001.geometry}
            material={materials["Material.154"]}
            position={[-12.216, 114.27, 85.362]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[0.983, -0.067, -5.474]} scale={0.229}>
        <group position={[-2.338, 8.703, -6.482]} scale={[0.391, 0.087, 0.391]}>
          <mesh
            geometry={nodes.Object_400004.geometry}
            material={materials["Material.149"]}
            position={[3.57, 114.293, 111.374]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -6.285]} scale={0.229}>
        <group position={[0.397, 8.703, -6.482]} scale={[0.391, 0.087, 0.391]}>
          <mesh
            geometry={nodes.Object_402001.geometry}
            material={materials["Material.147"]}
            position={[-6.127, 113.858, 94.218]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -5.474]} scale={0.229}>
        <group position={[-2.338, 8.703, -6.482]} scale={[0.391, 0.087, 0.391]}>
          <mesh
            geometry={nodes.Object_400002.geometry}
            material={materials["Material.151"]}
            position={[1.636, 114.293, 100.75]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, -0.668, -8.197]} scale={0.229}>
        <group
          position={[-5.704, 7.068, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.252, 0.196, 0.196]}
        >
          <mesh
            geometry={nodes.Object_410010.geometry}
            material={materials["Material.086"]}
            position={[-35.054, 25.21, 214.524]}
            scale={[4.664, 4.231, 4.217]}
          />
        </group>
      </group>
      <group position={[1.208, -0.668, -7.69]} scale={0.229}>
        <group
          position={[-5.704, 7.068, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.252, 0.196, 0.196]}
        >
          <mesh
            geometry={nodes.Object_410005.geometry}
            material={materials["Material.087"]}
            position={[-45.251, 26.718, 213.299]}
            scale={3.214}
          />
        </group>
      </group>
      <group position={[1.208, -0.668, -7.922]} scale={0.229}>
        <group
          position={[-5.704, 7.068, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.252, 0.196, 0.196]}
        >
          <mesh
            geometry={nodes.Object_410003.geometry}
            material={materials["Material.094"]}
            position={[-35.457, 25.5, 219.253]}
            scale={4.183}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -7.922]} scale={0.229}>
        <group
          position={[-5.704, 7.068, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.252, 0.196, 0.196]}
        >
          <mesh
            geometry={nodes.Object_410002.geometry}
            material={materials["Material.095"]}
            position={[-24.693, 23.459, 197.127]}
            scale={3.214}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -8.039]} scale={0.229}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408005.geometry}
            material={materials["Material.102"]}
            position={[-16.674, 13.774, 124.721]}
            scale={[2.994, 2.568, 2.609]}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -7.734]} scale={0.229}>
        <group
          position={[-5.637, 5.771, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.329, 0.257, 0.257]}
        >
          <mesh
            geometry={nodes.Object_416004.geometry}
            material={materials["Material.066"]}
            position={[-30.955, 19.4, 147.641]}
            scale={3.667}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -7.483]} scale={0.229}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408004.geometry}
            material={materials["Material.111"]}
            position={[-22.798, 14.675, 123.336]}
            scale={2.06}
          />
        </group>
      </group>
      <group
        position={[1.17, 0.516, -9.239]}
        rotation={[0, -1.548, 0]}
        scale={0.001}
      >
        <group
          position={[141.682, 50.51, 585.651]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={5.568}
        >
          <mesh
            geometry={nodes.Object_1002_Material070_0002.geometry}
            material={materials["Material.074_39.002"]}
            position={[-313.626, 2491.154, 437.393]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.238, -0.004, -8.041]} scale={0.229}>
        <group
          position={[-5.971, 5.752, 2.961]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_216006.geometry}
            material={materials["Material.203"]}
            position={[-22.567, 10.739, 146.326]}
            rotation={[2.946, 0.497, -2.906]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.195, 0.323, -8.554]} scale={0.229}>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230018.geometry}
            material={materials["Material.183"]}
            position={[-31.712, 11.451, 144.349]}
            rotation={[-2.811, -0.506, 3.114]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.194, 0.323, -8.559]} scale={0.229}>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230008.geometry}
            material={materials["Material.184"]}
            position={[-29.172, 10.966, 144.232]}
            rotation={[-2.811, -0.506, 3.114]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.194, 0.323, -8.559]} scale={0.229}>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230007.geometry}
            material={materials["Material.185"]}
            position={[-30.338, 11.583, 142.26]}
            rotation={[-2.811, -0.506, 3.114]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.19, -8.561]} scale={0.229}>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228014.geometry}
            material={materials["Material.074_16.002"]}
            position={[-32.692, 11.167, 144.451]}
            rotation={[-2.811, -0.506, 3.114]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -8.573]} scale={0.229}>
        <group
          position={[-5.971, 5.592, 3.201]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_212004.geometry}
            material={materials["Material.074_24.002"]}
            position={[-24.182, 10.897, 140.507]}
            rotation={[2.935, 0.524, -2.894]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 3.44]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_214004.geometry}
            material={materials["Material.186"]}
            position={[-22.56, 10.66, 139.163]}
            rotation={[2.946, 0.497, -2.906]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.961]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_216002.geometry}
            material={materials["Material.178"]}
            position={[-23.582, 11.029, 142.569]}
            rotation={[2.946, 0.497, -2.906]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 3.201]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_218001.geometry}
            material={materials["Material.173"]}
            position={[-26.357, 11.369, 139.832]}
            rotation={[2.946, 0.497, -2.906]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.379, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_220012.geometry}
            material={materials["screen.002"]}
            position={[26.294, 10.763, 142.834]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 3.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_222012.geometry}
            material={materials["Material.186"]}
            position={[27.938, 10.89, 142.964]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.53]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_224012.geometry}
            material={materials["Material.178"]}
            position={[25.62, 10.736, 144.198]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_226012.geometry}
            material={materials["Material.173"]}
            position={[25.456, 10.795, 141.351]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228006.geometry}
            material={materials["Material.074_27.002"]}
            position={[-27.354, 11.001, 143.344]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230006.geometry}
            material={materials["Material.186"]}
            position={[-28.018, 11.069, 141.894]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.076]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_232012.geometry}
            material={materials["Material.178"]}
            position={[-25.746, 10.974, 143.193]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 2.317]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_234012.geometry}
            material={materials["Material.173"]}
            position={[-28.26, 10.973, 144.841]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.207, 0.098, -8.561]} scale={0.229}>
        <group
          position={[-5.971, 5.379, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_220005.geometry}
            material={materials["Material.074_24.002"]}
            position={[27.17, 10.76, 142.987]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 3.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_222005.geometry}
            material={materials["Material.199"]}
            position={[28.725, 10.929, 143.179]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.53]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_224005.geometry}
            material={materials["Material.195"]}
            position={[26.496, 10.769, 144.443]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_226005.geometry}
            material={materials["Material.191"]}
            position={[26.332, 10.793, 141.418]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.106, -8.561]} scale={0.229}>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228005.geometry}
            material={materials["Material.074_2.002"]}
            position={[-28.271, 11.001, 143.411]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230005.geometry}
            material={materials["Material.187"]}
            position={[-28.936, 11.069, 141.962]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.076]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_232005.geometry}
            material={materials["Material.179"]}
            position={[-26.664, 10.974, 143.261]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 2.317]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_234005.geometry}
            material={materials["Material.174"]}
            position={[-29.178, 10.973, 144.908]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.207, 0.292, -8.561]} scale={0.229}>
        <group
          position={[-5.971, 5.379, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_220004.geometry}
            material={materials["Material.074_20.002"]}
            position={[28.201, 10.76, 142.987]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 3.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_222004.geometry}
            material={materials["Material.200"]}
            position={[29.757, 10.929, 143.179]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.53]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_224004.geometry}
            material={materials["Material.196"]}
            position={[27.527, 10.769, 144.443]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_226004.geometry}
            material={materials["Material.192"]}
            position={[27.364, 10.793, 141.418]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.193, 0.303, -8.563]} scale={0.229}>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228004.geometry}
            material={materials["Material.074_20.002"]}
            position={[-29.318, 10.92, 143.399]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230004.geometry}
            material={materials["Material.188"]}
            position={[-29.982, 10.989, 141.949]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.076]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_232004.geometry}
            material={materials["Material.180"]}
            position={[-27.711, 10.894, 143.248]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 2.317]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_234004.geometry}
            material={materials["Material.175"]}
            position={[-30.225, 10.893, 144.896]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.381, -7.835]} scale={0.229}>
        <group
          position={[-5.971, 5.699, 0.122]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_274008.geometry}
            material={materials["Material.165"]}
            position={[24.588, 11.481, 122.535]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.381, -7.183]} scale={0.229}>
        <group
          position={[-5.971, 5.379, 0.121]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_268006.geometry}
            material={materials["Material.085"]}
            position={[27.46, 11.003, 135.183]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 0.361]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_270006.geometry}
            material={materials["Material.170"]}
            position={[27.266, 11.002, 135.506]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, -0.119]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_272006.geometry}
            material={materials["Material.168"]}
            position={[27.266, 11.002, 134.924]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 0.122]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_274003.geometry}
            material={materials["Material.166"]}
            position={[27.848, 11.002, 135.215]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.193, 0.303, -7.911]} scale={0.229}>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228003.geometry}
            material={materials["Material.074_15.002"]}
            position={[-29.446, 10.91, 146.983]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230003.geometry}
            material={materials["Material.189"]}
            position={[-30.11, 11.001, 145.099]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.076]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_232003.geometry}
            material={materials["Material.181"]}
            position={[-27.582, 10.901, 146.628]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 2.317]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_234003.geometry}
            material={materials["Material.176"]}
            position={[-30.455, 10.867, 148.734]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.406, -7.022]} scale={0.229}>
        <group
          position={[-5.971, 4.834, 0.121]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_276004.geometry}
            material={materials["Material.074_24.002"]}
            position={[-26.929, 11.002, 136.071]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.994, 0.361]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_278004.geometry}
            material={materials["Material.164"]}
            position={[-27.123, 11.002, 136.362]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.994, -0.119]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_280004.geometry}
            material={materials["Material.163"]}
            position={[-27.123, 11.002, 135.78]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.514, 0.122]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_282004.geometry}
            material={materials["Material.162"]}
            position={[-26.541, 11.002, 136.072]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.396, -6.869]} scale={0.229}>
        <group
          position={[-5.971, 5.379, 0.121]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_268002.geometry}
            material={materials["Material.085"]}
            position={[27.538, 11.003, 136.85]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 0.361]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_270002.geometry}
            material={materials["Material.171"]}
            position={[27.344, 11.002, 137.173]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, -0.119]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_272002.geometry}
            material={materials["Material.169"]}
            position={[27.344, 11.002, 136.591]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 0.122]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_274002.geometry}
            material={materials["Material.167"]}
            position={[27.925, 11.002, 136.883]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.207, 0.292, -7.909]} scale={0.229}>
        <group
          position={[-5.971, 5.379, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_220003.geometry}
            material={materials["Material.074_15.002"]}
            position={[28.176, 10.747, 146.698]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 3.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_222003.geometry}
            material={materials["Material.201"]}
            position={[29.883, 10.914, 146.863]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.53]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_224003.geometry}
            material={materials["Material.197"]}
            position={[27.374, 10.752, 148.307]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_226003.geometry}
            material={materials["Material.193"]}
            position={[27.261, 10.799, 144.798]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, 0.106, -7.909]} scale={0.229}>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228002.geometry}
            material={materials["Material.074_10.002"]}
            position={[-27.763, 10.995, 147.224]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230002.geometry}
            material={materials["Material.190"]}
            position={[-28.682, 11.066, 145.595]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.076]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_232002.geometry}
            material={materials["Material.182"]}
            position={[-26.179, 10.971, 147.023]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 2.317]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_234002.geometry}
            material={materials["Material.177"]}
            position={[-28.848, 10.956, 148.846]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.207, 0.098, -7.909]} scale={0.229}>
        <group
          position={[-5.971, 5.379, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_220002.geometry}
            material={materials["screen.002"]}
            position={[26.601, 10.802, 146.68]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 3.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_222002.geometry}
            material={materials["Material.202"]}
            position={[28.239, 10.977, 146.945]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.53]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_224002.geometry}
            material={materials["Material.198"]}
            position={[25.869, 10.829, 148.399]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_226002.geometry}
            material={materials["Material.194"]}
            position={[25.544, 10.847, 144.994]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
      </group>
      <group
        position={[0.068, -1.9, -8.374]}
        rotation={[-1.327, 1.497, 1.327]}
        scale={[0.42, 0.943, 0.422]}
      >
        <group
          position={[-0.365, 2.57, -0.197]}
          rotation={[1.648, 1.382, 1.455]}
          scale={[0.006, 0.016, 0.054]}
        >
          <mesh
            geometry={nodes.Object_70002.geometry}
            material={materials["Material.062"]}
            position={[452.46, 166.704, -412.708]}
            scale={1.388}
          />
        </group>
        <group
          position={[-0.465, 2.579, -0.197]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.006, 0.005, 0.057]}
        >
          <mesh
            geometry={nodes.Object_74004.geometry}
            material={materials["Material.062"]}
            position={[444.702, 783.739, -391.204]}
            scale={1.388}
          />
        </group>
        <group
          position={[-0.448, 2.583, -0.197]}
          rotation={[1.631, 1.331, 1.471]}
          scale={[0.007, 0.006, 0.033]}
        >
          <mesh
            geometry={nodes.Object_76004.geometry}
            material={materials["Material.062"]}
            position={[374.96, 664.823, -684.526]}
            scale={1.388}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -7.922]} scale={0.229}>
        <group scale={5.971}>
          <mesh
            geometry={nodes.Object_196002.geometry}
            material={materials["Material.204"]}
            position={[1.184, 0.764, 6.921]}
            scale={1.632}
          />
        </group>
        <group
          position={[-5.971, 5.592, 3.201]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_212001.geometry}
            material={materials["Material.085"]}
            position={[-22.433, 10.905, 144.804]}
            rotation={[2.999, 0.365, -2.941]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 3.44]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_214001.geometry}
            material={materials["Material.156"]}
            position={[-22.074, 13.212, 145.124]}
            rotation={[3.04, 0.373, -2.885]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.961]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_216001.geometry}
            material={materials["Material.157"]}
            position={[-22.959, 13.013, 146.71]}
            rotation={[2.988, 0.272, -3.003]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.379, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_220001.geometry}
            material={materials["Material.074_24.002"]}
            position={[24.995, 10.903, 147.167]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 3.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_222001.geometry}
            material={materials["Material.156"]}
            position={[26.767, 10.972, 147.174]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.53]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_224001.geometry}
            material={materials["Material.157"]}
            position={[24.826, 13.181, 147.397]}
            rotation={[0.06, 1.12, 0.23]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 2.77]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_226001.geometry}
            material={materials["Material.155"]}
            position={[24.29, 10.878, 145.475]}
            rotation={[0.006, 1.488, -0.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.592, 2.316]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_228001.geometry}
            material={materials["Material.172"]}
            position={[-26.31, 11.136, 147.617]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.556]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_230001.geometry}
            material={materials["Material.156"]}
            position={[-26.923, 11.216, 146.106]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 2.076]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_232001.geometry}
            material={materials["Material.157"]}
            position={[-24.679, 11.061, 147.465]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 2.317]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_234001.geometry}
            material={materials["Material.155"]}
            position={[-27.317, 11.114, 149.343]}
            rotation={[-0.61, -1.493, -0.633]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.379, 1.897]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_236002.geometry}
            material={materials["Blue_Wood.002"]}
            position={[25.082, 11.378, 133.419]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 2.137]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_238002.geometry}
            material={materials["Material.156"]}
            position={[24.888, 10.385, 133.742]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 1.657]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_240002.geometry}
            material={materials["Material.157"]}
            position={[24.888, 11.377, 133.16]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 1.898]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_242002.geometry}
            material={materials["Material.155"]}
            position={[25.47, 11.377, 133.452]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.97, 5.592, 1.451]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_244002.geometry}
            material={materials["Material.142"]}
            position={[-25.34, 11.377, 132.91]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 1.698]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_246002.geometry}
            material={materials["Material.156"]}
            position={[-25.534, 11.377, 133.21]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 1.219]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_248002.geometry}
            material={materials["Material.157"]}
            position={[-25.534, 11.377, 132.628]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 1.459]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_250002.geometry}
            material={materials["Material.155"]}
            position={[-24.952, 11.377, 132.92]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.379, 1.02]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_252002.geometry}
            material={materials["Material.085"]}
            position={[25.082, 11.378, 132.355]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 1.259]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_254002.geometry}
            material={materials["Material.156"]}
            position={[24.888, 11.377, 132.678]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 0.78]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_256002.geometry}
            material={materials["Material.157"]}
            position={[24.888, 11.377, 132.096]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 1.02]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_258002.geometry}
            material={materials["Material.155"]}
            position={[25.47, 11.377, 132.388]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.592, 0.57]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_260002.geometry}
            material={materials["Material.172"]}
            position={[-25.34, 11.378, 131.81]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 0.809]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_262002.geometry}
            material={materials["Material.156"]}
            position={[-25.534, 11.377, 132.132]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.752, 0.33]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_264002.geometry}
            material={materials["Material.157"]}
            position={[-25.534, 11.377, 131.551]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.272, 0.57]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_266002.geometry}
            material={materials["Material.155"]}
            position={[-24.952, 11.377, 131.842]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.379, 0.121]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_268001.geometry}
            material={materials["Material.074_15.002"]}
            position={[25.082, 11.378, 131.266]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, 0.361]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_270001.geometry}
            material={materials["Material.156"]}
            position={[24.888, 11.377, 131.589]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.219, -0.119]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_272001.geometry}
            material={materials["Material.157"]}
            position={[24.888, 11.377, 131.007]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 5.699, 0.122]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_274001.geometry}
            material={materials["Material.155"]}
            position={[25.47, 11.377, 131.298]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.542, -0.3]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_284002.geometry}
            material={materials["Material.161"]}
            position={[24.068, 11.377, 130.788]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.383, -0.06]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_286002.geometry}
            material={materials["Material.156"]}
            position={[23.874, 11.377, 131.078]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.383, -0.54]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_288002.geometry}
            material={materials["Material.157"]}
            position={[23.874, 11.377, 130.497]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.862, -0.299]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_290002.geometry}
            material={materials["Material.155"]}
            position={[24.456, 11.377, 130.788]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.943, -0.379]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_292002.geometry}
            material={materials["Material.074_25.001"]}
            position={[-23.341, 11.377, 130.691]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.103, -0.139]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_294002.geometry}
            material={materials["Material.156"]}
            position={[-23.535, 11.377, 130.982]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.103, -0.619]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_296002.geometry}
            material={materials["Material.157"]}
            position={[-23.535, 11.377, 130.4]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.623, -0.378]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_298002.geometry}
            material={materials["Material.155"]}
            position={[-22.954, 11.377, 130.692]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.612, -0.743]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_300002.geometry}
            material={materials["Display.002"]}
            position={[22.94, 11.377, 130.249]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.452, -0.504]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_302002.geometry}
            material={materials["Material.156"]}
            position={[22.746, 11.377, 130.54]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.452, -0.983]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_304002.geometry}
            material={materials["Material.157"]}
            position={[22.746, 11.377, 129.958]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.098, -0.743]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_308002.geometry}
            material={materials["Material.074_4.002"]}
            position={[-22.317, 11.276, 130.25]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.258, -0.503]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_310002.geometry}
            material={materials["Material.156"]}
            position={[-22.511, 11.298, 130.54]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.258, -0.983]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_312002.geometry}
            material={materials["Material.157"]}
            position={[-22.511, 12.067, 129.959]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.779, -0.743]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_314002.geometry}
            material={materials["Material.155"]}
            position={[-21.929, 11.064, 130.25]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.834, 0.121]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_276001.geometry}
            material={materials["Material.074_18.002"]}
            position={[-24.421, 11.377, 131.298]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.994, 0.361]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_278001.geometry}
            material={materials["Material.156"]}
            position={[-24.615, 11.377, 131.589]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.994, -0.119]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_280001.geometry}
            material={materials["Material.157"]}
            position={[-24.615, 11.377, 131.007]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 4.514, 0.122]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_282001.geometry}
            material={materials["Material.155"]}
            position={[-24.033, 11.377, 131.298]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.801, -1.159]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_316002.geometry}
            material={materials["Material.160"]}
            position={[21.956, 10.471, 129.745]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.641, -0.919]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_318002.geometry}
            material={materials["Material.156"]}
            position={[21.762, 10.585, 130.036]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.641, -1.399]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_320002.geometry}
            material={materials["Material.157"]}
            position={[21.762, 10.976, 129.454]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 3.121, -1.159]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_322002.geometry}
            material={materials["Material.155"]}
            position={[22.344, 10.449, 129.746]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.245, -1.151]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_324002.geometry}
            material={materials["Logo.002"]}
            position={[-43.187, 11.002, 142.756]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.404, -0.911]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_326002.geometry}
            material={materials["Material.156"]}
            position={[-43.381, 11.002, 143.047]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.404, -1.391]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_328002.geometry}
            material={materials["Material.157"]}
            position={[-43.381, 11.481, 142.465]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.925, -1.15]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_330002.geometry}
            material={materials["Material.155"]}
            position={[-42.8, 13.449, 142.757]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.034, -1.598]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_332002.geometry}
            material={materials["Material.156"]}
            position={[42.932, 11.481, 142.213]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.874, -1.359]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_334002.geometry}
            material={materials["Material.156"]}
            position={[42.738, 11.481, 142.504]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.874, -1.838]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_336002.geometry}
            material={materials["Material.157"]}
            position={[42.738, 11.481, 141.922]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.354, -1.598]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_338002.geometry}
            material={materials["Material.155"]}
            position={[43.32, 11.481, 142.214]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.25, -2.065]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_340002.geometry}
            material={materials["Material.159"]}
            position={[-43.194, 11.481, 141.647]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.41, -1.826]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_342002.geometry}
            material={materials["Material.156"]}
            position={[-43.388, 11.481, 141.938]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.41, -2.305]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_344002.geometry}
            material={materials["Material.157"]}
            position={[-43.388, 11.481, 141.356]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.93, -2.065]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_346002.geometry}
            material={materials["Material.155"]}
            position={[-42.806, 11.481, 141.647]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.037, -2.529]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_348002.geometry}
            material={materials["Mat3.002"]}
            position={[42.936, 11.481, 141.085]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.877, -2.289]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_350002.geometry}
            material={materials["Material.156"]}
            position={[42.742, 11.481, 141.375]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.877, -2.769]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_352002.geometry}
            material={materials["Material.157"]}
            position={[42.742, 11.481, 140.794]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.357, -2.529]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_354002.geometry}
            material={materials["Material.155"]}
            position={[43.324, 11.481, 141.085]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.25, -2.98]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_356002.geometry}
            material={materials["Logo.002"]}
            position={[-43.194, 11.481, 140.539]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.41, -2.74]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_358002.geometry}
            material={materials["Material.156"]}
            position={[-43.388, 11.481, 140.829]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.41, -3.22]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_360002.geometry}
            material={materials["Material.157"]}
            position={[-43.388, 11.481, 140.248]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.93, -2.979]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_362002.geometry}
            material={materials["Material.155"]}
            position={[-42.806, 11.481, 140.539]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.037, -3.422]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_364002.geometry}
            material={materials["Display.002"]}
            position={[42.936, 11.481, 140.003]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.877, -3.182]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_366002.geometry}
            material={materials["Material.156"]}
            position={[42.742, 11.481, 140.293]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.877, -3.662]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_368002.geometry}
            material={materials["Material.157"]}
            position={[42.742, 11.481, 139.712]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.357, -3.421]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_370002.geometry}
            material={materials["Material.155"]}
            position={[43.324, 11.481, 140.003]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.25, -3.896]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_372002.geometry}
            material={materials["Material.158"]}
            position={[-43.194, 11.481, 139.428]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.41, -3.656]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_374002.geometry}
            material={materials["Material.156"]}
            position={[-43.388, 11.481, 139.719]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.41, -4.136]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_376002.geometry}
            material={materials["Material.157"]}
            position={[-43.388, 11.481, 139.137]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.93, -3.895]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.32}
        >
          <mesh
            geometry={nodes.Object_378002.geometry}
            material={materials["Material.155"]}
            position={[-42.806, 11.481, 139.428]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.037, -4.366]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_380002.geometry}
            material={materials["Korpus.002"]}
            position={[42.936, 11.481, 138.858]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 1.877, -4.126]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_382002.geometry}
            material={materials["Material.156"]}
            position={[42.742, 11.481, 139.148]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.971, 2.357, -4.366]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.32}
        >
          <mesh
            geometry={nodes.Object_386002.geometry}
            material={materials["Material.155"]}
            position={[43.324, 11.481, 138.858]}
            scale={1.388}
          />
        </group>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408002.geometry}
            material={materials["Material.142"]}
            position={[-16.891, 13.967, 129.754]}
            scale={[2.777, 2.6, 2.682]}
          />
        </group>
        <group
          position={[-5.704, 7.068, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.252, 0.196, 0.196]}
        >
          <mesh
            geometry={nodes.Object_410001.geometry}
            material={materials["Material.096"]}
            position={[-35.377, 24.64, 197.636]}
            scale={4.678}
          />
        </group>
        <group
          position={[-5.704, 7.068, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.252, 0.196, 0.196]}
        >
          <mesh
            geometry={nodes.Object_412002.geometry}
            material={materials["Material.085"]}
            position={[-24.809, 23.61, 197.28]}
            scale={3.252}
          />
        </group>
        <group
          position={[-5.637, 5.771, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.329, 0.257, 0.257]}
        >
          <mesh
            geometry={nodes.Object_414002.geometry}
            material={materials["Material.074"]}
            position={[-31.252, 19.404, 159.662]}
            scale={3.034}
          />
        </group>
        <group
          position={[-5.637, 5.771, -4.484]}
          rotation={[0, 0, -1.398]}
          scale={[0.329, 0.257, 0.257]}
        >
          <mesh
            geometry={nodes.Object_416001.geometry}
            material={materials["Material.070"]}
            position={[-31.233, 19.512, 159.732]}
            scale={3.31}
          />
        </group>
      </group>
      <group position={[1.208, -0.067, -4.44]} scale={0.229}>
        <group scale={5.971}>
          <mesh
            geometry={nodes.Object_194001.geometry}
            material={materials["Material.250"]}
            position={[1.106, 1.034, 4.34]}
            scale={[1.665, 2.137, 1.638]}
          />
        </group>
      </group>
      <group position={[1.208, -3.06, 0.88]} scale={0.229}>
        <group position={[0, 9.046, -0.712]} scale={[5.971, 5.971, 6.273]}>
          <mesh
            geometry={nodes.Object_200002.geometry}
            material={materials["Material.074_25.003"]}
            position={[1.134, 1.674, 0.534]}
            scale={[1.663, 1.106, 1.432]}
          />
        </group>
      </group>
      <group position={[2.685, 0.429, 1.437]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408011.geometry}
            material={materials["Material.206"]}
            position={[1.168, 32.916, -11.195]}
            rotation={[1.402, -0.116, 0.085]}
            scale={[0.665, 0.934, 0.915]}
          />
        </group>
      </group>
      <group position={[2.685, 0.363, 1.437]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.971, 6.577, -3.264]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.515, 0.529, 0.452]}
        >
          <mesh
            geometry={nodes.Object_206012.geometry}
            material={materials["Material.214"]}
            position={[-2.756, 20.749, -8.434]}
            rotation={[1.769, 0, 0]}
            scale={0.618}
          />
        </group>
      </group>
      <group position={[3.251, 0.44, 1.294]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.971, 6.577, -3.264]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.515, 0.529, 0.452]}
        >
          <mesh
            geometry={nodes.Object_206010.geometry}
            material={materials["Material.215"]}
            position={[-2.268, 10.984, -7.387]}
            rotation={[1.769, 0, 0]}
            scale={[0.733, 0.672, 0.672]}
          />
        </group>
      </group>
      <group position={[3.224, 0.54, 1.437]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408010.geometry}
            material={materials["Material.207"]}
            position={[-0.179, 17.224, -10.613]}
            rotation={[1.402, -0.116, 0.085]}
            scale={[0.74, 1.039, 1.017]}
          />
        </group>
      </group>
      <group position={[3.565, 0.505, 1.393]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408009.geometry}
            material={materials["Material.208"]}
            position={[-0.461, 19.275, -10.67]}
            rotation={[1.402, -0.116, 0.085]}
            scale={[0.772, 1.083, 1.061]}
          />
        </group>
      </group>
      <group position={[3.604, 0.891, 1.294]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.971, 6.577, -3.264]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.515, 0.529, 0.452]}
        >
          <mesh
            geometry={nodes.Object_206009.geometry}
            material={materials["Material.216"]}
            position={[-2.422, 12.116, -7.453]}
            rotation={[1.769, 0, 0]}
            scale={0.701}
          />
        </group>
      </group>
      <group position={[3.565, 0.939, 1.393]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408008.geometry}
            material={materials["Material.209"]}
            position={[-0.436, 19.342, -10.27]}
            rotation={[1.402, -0.116, 0.085]}
            scale={[0.91, 1.04, 1.014]}
          />
        </group>
      </group>
      <group position={[3.224, 0.924, 1.437]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408007.geometry}
            material={materials["Material.210"]}
            position={[-0.993, 17.308, -10.662]}
            rotation={[1.402, -0.116, 0.085]}
            scale={[0.739, 1.037, 1.016]}
          />
        </group>
      </group>
      <group position={[3.251, 0.891, 1.294]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.971, 6.577, -3.264]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.515, 0.529, 0.452]}
        >
          <mesh
            geometry={nodes.Object_206007.geometry}
            material={materials["Material.217"]}
            position={[-2.541, 10.913, -7.369]}
            rotation={[1.769, 0, 0]}
            scale={[0.645, 0.746, 0.746]}
          />
        </group>
      </group>
      <group position={[2.685, 0.924, 1.437]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.526, 6.441, -3.344]}
          rotation={[0, 0, -1.398]}
          scale={[0.414, 0.323, 0.323]}
        >
          <mesh
            geometry={nodes.Object_408001.geometry}
            material={materials["Material.211"]}
            position={[1.466, 33.096, -11.023]}
            rotation={[1.402, -0.116, 0.085]}
            scale={[0.816, 1.145, 1.122]}
          />
        </group>
      </group>
      <group position={[2.685, 0.885, 1.437]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.971, 6.577, -3.264]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.515, 0.529, 0.452]}
        >
          <mesh
            geometry={nodes.Object_206005.geometry}
            material={materials["Material.218"]}
            position={[-2.347, 20.778, -8.517]}
            rotation={[1.769, 0, 0]}
            scale={0.757}
          />
        </group>
        <group position={[0, 0, -1.088]} scale={5.971}>
          <mesh
            geometry={nodes.Object_388.geometry}
            material={materials["Material.213"]}
            position={[0.015, 0.261, 0.114]}
            scale={1.125}
          />
        </group>
      </group>
      <group position={[3.604, 0.454, 1.294]} scale={[0.32, 0.3, 0.3]}>
        <group
          position={[-5.971, 6.577, -3.264]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.515, 0.529, 0.452]}
        >
          <mesh
            geometry={nodes.Object_206001.geometry}
            material={materials["Material.219"]}
            position={[-2.422, 12.116, -7.453]}
            rotation={[1.769, 0, 0]}
            scale={0.701}
          />
        </group>
      </group>
      <group
        position={[2.948, 1.347, 1.418]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={0.331}
      >
        <group position={[0, 0, -1.088]} scale={5.971}>
          <mesh
            geometry={nodes.Object_198001.geometry}
            material={materials["Material.220"]}
            position={[-0.083, 0, 0.054]}
            scale={[1.088, 1.005, 1.087]}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.Object_7001.geometry}
        material={materials["Bronze_-_Polished.001"]}
        position={[3.538, 1.579, 2.079]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.057}
      />
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
