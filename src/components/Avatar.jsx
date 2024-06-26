/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/664f332951f645a816a09f5e.glb 
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// Add these imports
import { useState } from "react";
export function Avatar(props) {
  const { animation, onClick, wireframe } = props; // Add onClick prop

  // With this
  const [headFollow, setHeadFollow] = useState(false);
  // const [wireframe, setWireframe] = useState(false);

  const group = useRef();
  const { nodes, materials } = useGLTF("models/664f332951f645a816a09f5e.glb");

  const { animations: Greeting } = useFBX("animations/Greeting.fbx");
  const { animations: FallBLoop } = useFBX("animations/FallBLoop.fbx");
  const { animations: HGreeting } = useFBX("animations/HGreeting.fbx");
  const { animations: Pool } = useFBX("animations/Pool.fbx");
  const { animations: Swing } = useFBX("animations/Swing.fbx");
  const { animations: Dice } = useFBX("animations/Dice.fbx");

  console.log(Greeting);
  Greeting[0].name = "Greeting"; //for adding name to animations
  FallBLoop[0].name = "FallBLoop"; //for adding name to animations
  HGreeting[0].name = "HGreeting"; //for adding name to animations
  Pool[0].name = "Pool"; //for adding name to animations
  Swing[0].name = "Swing"; //for adding name to animations
  Dice[0].name = "Dice"; //for adding name to animations

  const { actions } = useAnimations(
    [Greeting[0], FallBLoop[0], HGreeting[0], Pool[0], Swing[0], Dice[0]],
    group
  );

  useFrame((state) => {
    // if (headFollow) {
    //   group.current.getObjectByName("Head").lookAt(state.camera.position); //for making the specific body move
    // }
    if (HGreeting) {
      group.current.getObjectByName("Head").lookAt(state.camera.position); //for making the specific body move
    }
  });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe; // Apply wireframe state to materials
    });
  }, [wireframe]); // Update when wireframe changes

  return (
    <group {...props} ref={group} dispose={null} onClick={onClick}>
      {" "}
      {/* Add onClick prop */}
      {/* <group rotation-x={-Math.PI / 2}> */}
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/664f332951f645a816a09f5e.glb");
