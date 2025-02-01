"use client";
import * as THREE from "three";
import { useState, useRef, useEffect, useLayoutEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  useAnimations,
  ScrollControls,
  Loader,
} from "@react-three/drei";
import LoadingScreen from "./LoadingScreen"



export default function Viewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Canvas camera={{ position: [5, 5, 2], fov: 60 }}>
        <ambientLight intensity={0.5} />

        <Environment preset="sunset" />
        <ContactShadows
          frames={1}
          scale={5}
          position={[0, -1, 0]}
          far={1}
          blur={5}
          opacity={0.5}
          color="#204080"
        />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model position={[1, 0, 0]} />
        </Suspense>
        {/* <Loader/> */}
      </Canvas>
      <Loader />
    </>
  );
}
function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('3d/sc.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions['Turn'].play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="looking_glass_hologramglb" position={[0, 0, 0.126]}>
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.089}>
            <group name="667df8573339490ead4799e4a4ffb1aafbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="geo">
                    <group name="globe">
                      <group name="geo_1">
                        <group name="group1">
                          <group name="group15">
                            <group name="pTorus10" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus2" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus20" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus4" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group20_group1_group15_pDisc3" />
                        <group name="group32">
                          <group name="group15_1">
                            <group name="pTorus10_1" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_1" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_1" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_1" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_1" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_1" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_1" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_1" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_1" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_1" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_1" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_1" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_1" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_1" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_1" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_1" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group33">
                          <group name="group15_2">
                            <group name="pTorus10_2" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_2" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_2" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_2" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_2" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_2" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_2" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_2" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_2" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_2" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_2" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_2" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_2" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_2" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_2" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_2" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group34">
                          <group name="group15_3">
                            <group name="pTorus10_3" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_3" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_3" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_3" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_3" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_3" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_3" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_3" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_3" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_3" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_3" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_3" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_3" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_3" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_3" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_3" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group35">
                          <group name="group15_4">
                            <group name="pTorus10_4" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_4" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_4" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_4" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_4" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_4" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_4" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_4" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_4" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_4" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_4" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_4" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_4" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_4" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_4" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_4" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group36">
                          <group name="group15_5">
                            <group name="pTorus10_5" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_5" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_5" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_5" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_5" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_5" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_5" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_5" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_5" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_5" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_5" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_5" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_5" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_5" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_5" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_5" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group37">
                          <group name="group15_6">
                            <group name="pTorus10_6" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_6" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_6" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_6" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_6" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_6" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_6" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_6" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_6" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_6" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_6" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_6" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_6" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_6" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_6" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_6" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group38">
                          <group name="group15_7">
                            <group name="pTorus10_7" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_7" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_7" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_7" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_7" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_7" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_7" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_7" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_7" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_7" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_7" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_7" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_7" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_7" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_7" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_7" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group39">
                          <group name="group15_8">
                            <group name="pTorus10_8" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_8" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_8" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_8" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_8" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_8" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_8" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_8" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_8" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_8" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_8" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_8" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_8" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_8" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_8" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_8" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group40">
                          <group name="group15_9">
                            <group name="pTorus10_9" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_9" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_9" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_9" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_9" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_9" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_9" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_9" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_9" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_9" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_9" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_9" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_9" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_9" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_9" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_9" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group41">
                          <group name="group15_10">
                            <group name="pTorus10_10" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_10" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_10" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_10" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_10" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_10" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_10" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_10" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_10" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_10" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_10" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_10" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_10" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_10" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_10" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_10" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                        <group name="group42">
                          <group name="group15_11">
                            <group name="pTorus10_11" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="pTorus11_11" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="pTorus12_11" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="pTorus13_11" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="pTorus14_11" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="pTorus15_11" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="pTorus16_11" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="pTorus17_11" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="pTorus18_11" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="pTorus19_11" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="pTorus20_11" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="pTorus2_11" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="pTorus4_11" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="pTorus6_11" position={[-1.182, 10.24, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="pTorus7_11" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="pTorus8_11" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="group50" position={[0, 21.048, 0]}>
                      <group name="cage" scale={0.998}>
                        <group name="group46">
                          <group name="pCylinder10">
                            <mesh name="pCylinder10_earth_0" geometry={nodes.pCylinder10_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder100">
                            <mesh name="pCylinder100_earth_0" geometry={nodes.pCylinder100_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder101">
                            <mesh name="pCylinder101_earth_0" geometry={nodes.pCylinder101_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder102">
                            <mesh name="pCylinder102_earth_0" geometry={nodes.pCylinder102_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder104">
                            <mesh name="pCylinder104_earth_0" geometry={nodes.pCylinder104_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder105">
                            <mesh name="pCylinder105_earth_0" geometry={nodes.pCylinder105_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder106">
                            <mesh name="pCylinder106_earth_0" geometry={nodes.pCylinder106_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder107">
                            <mesh name="pCylinder107_earth_0" geometry={nodes.pCylinder107_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder108">
                            <mesh name="pCylinder108_earth_0" geometry={nodes.pCylinder108_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder109">
                            <mesh name="pCylinder109_earth_0" geometry={nodes.pCylinder109_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder11">
                            <mesh name="pCylinder11_earth_0" geometry={nodes.pCylinder11_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder110">
                            <mesh name="pCylinder110_earth_0" geometry={nodes.pCylinder110_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder111">
                            <mesh name="pCylinder111_earth_0" geometry={nodes.pCylinder111_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder112">
                            <mesh name="pCylinder112_earth_0" geometry={nodes.pCylinder112_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder113">
                            <mesh name="pCylinder113_earth_0" geometry={nodes.pCylinder113_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder114">
                            <mesh name="pCylinder114_earth_0" geometry={nodes.pCylinder114_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder115">
                            <mesh name="pCylinder115_earth_0" geometry={nodes.pCylinder115_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder116">
                            <mesh name="pCylinder116_earth_0" geometry={nodes.pCylinder116_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder117">
                            <mesh name="pCylinder117_earth_0" geometry={nodes.pCylinder117_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder118">
                            <mesh name="pCylinder118_earth_0" geometry={nodes.pCylinder118_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder119">
                            <mesh name="pCylinder119_earth_0" geometry={nodes.pCylinder119_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder12">
                            <mesh name="pCylinder12_earth_0" geometry={nodes.pCylinder12_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder120">
                            <mesh name="pCylinder120_earth_0" geometry={nodes.pCylinder120_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder121">
                            <mesh name="pCylinder121_earth_0" geometry={nodes.pCylinder121_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder122">
                            <mesh name="pCylinder122_earth_0" geometry={nodes.pCylinder122_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder123">
                            <mesh name="pCylinder123_earth_0" geometry={nodes.pCylinder123_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder124">
                            <mesh name="pCylinder124_earth_0" geometry={nodes.pCylinder124_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder125">
                            <mesh name="pCylinder125_earth_0" geometry={nodes.pCylinder125_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder126">
                            <mesh name="pCylinder126_earth_0" geometry={nodes.pCylinder126_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder127">
                            <mesh name="pCylinder127_earth_0" geometry={nodes.pCylinder127_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder128">
                            <mesh name="pCylinder128_earth_0" geometry={nodes.pCylinder128_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder129">
                            <mesh name="pCylinder129_earth_0" geometry={nodes.pCylinder129_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder130">
                            <mesh name="pCylinder130_earth_0" geometry={nodes.pCylinder130_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder131">
                            <mesh name="pCylinder131_earth_0" geometry={nodes.pCylinder131_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder132">
                            <mesh name="pCylinder132_earth_0" geometry={nodes.pCylinder132_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder133">
                            <mesh name="pCylinder133_earth_0" geometry={nodes.pCylinder133_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder134">
                            <mesh name="pCylinder134_earth_0" geometry={nodes.pCylinder134_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder135">
                            <mesh name="pCylinder135_earth_0" geometry={nodes.pCylinder135_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder136">
                            <mesh name="pCylinder136_earth_0" geometry={nodes.pCylinder136_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder137">
                            <mesh name="pCylinder137_earth_0" geometry={nodes.pCylinder137_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder138">
                            <mesh name="pCylinder138_earth_0" geometry={nodes.pCylinder138_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder139">
                            <mesh name="pCylinder139_earth_0" geometry={nodes.pCylinder139_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder14">
                            <mesh name="pCylinder14_earth_0" geometry={nodes.pCylinder14_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder140">
                            <mesh name="pCylinder140_earth_0" geometry={nodes.pCylinder140_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder141">
                            <mesh name="pCylinder141_earth_0" geometry={nodes.pCylinder141_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder142">
                            <mesh name="pCylinder142_earth_0" geometry={nodes.pCylinder142_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder143">
                            <mesh name="pCylinder143_earth_0" geometry={nodes.pCylinder143_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder144">
                            <mesh name="pCylinder144_earth_0" geometry={nodes.pCylinder144_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder145">
                            <mesh name="pCylinder145_earth_0" geometry={nodes.pCylinder145_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder146">
                            <mesh name="pCylinder146_earth_0" geometry={nodes.pCylinder146_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder147">
                            <mesh name="pCylinder147_earth_0" geometry={nodes.pCylinder147_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder148">
                            <mesh name="pCylinder148_earth_0" geometry={nodes.pCylinder148_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder149">
                            <mesh name="pCylinder149_earth_0" geometry={nodes.pCylinder149_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder15">
                            <mesh name="pCylinder15_earth_0" geometry={nodes.pCylinder15_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder150">
                            <mesh name="pCylinder150_earth_0" geometry={nodes.pCylinder150_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder151">
                            <mesh name="pCylinder151_earth_0" geometry={nodes.pCylinder151_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder152">
                            <mesh name="pCylinder152_earth_0" geometry={nodes.pCylinder152_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder153">
                            <mesh name="pCylinder153_earth_0" geometry={nodes.pCylinder153_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder154">
                            <mesh name="pCylinder154_earth_0" geometry={nodes.pCylinder154_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder155">
                            <mesh name="pCylinder155_earth_0" geometry={nodes.pCylinder155_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder156">
                            <mesh name="pCylinder156_earth_0" geometry={nodes.pCylinder156_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder157">
                            <mesh name="pCylinder157_earth_0" geometry={nodes.pCylinder157_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder158">
                            <mesh name="pCylinder158_earth_0" geometry={nodes.pCylinder158_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder159">
                            <mesh name="pCylinder159_earth_0" geometry={nodes.pCylinder159_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder16">
                            <mesh name="pCylinder16_earth_0" geometry={nodes.pCylinder16_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder160">
                            <mesh name="pCylinder160_earth_0" geometry={nodes.pCylinder160_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder161">
                            <mesh name="pCylinder161_earth_0" geometry={nodes.pCylinder161_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder162">
                            <mesh name="pCylinder162_earth_0" geometry={nodes.pCylinder162_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder163">
                            <mesh name="pCylinder163_earth_0" geometry={nodes.pCylinder163_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder164">
                            <mesh name="pCylinder164_earth_0" geometry={nodes.pCylinder164_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder165">
                            <mesh name="pCylinder165_earth_0" geometry={nodes.pCylinder165_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder166">
                            <mesh name="pCylinder166_earth_0" geometry={nodes.pCylinder166_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder167">
                            <mesh name="pCylinder167_earth_0" geometry={nodes.pCylinder167_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder168">
                            <mesh name="pCylinder168_earth_0" geometry={nodes.pCylinder168_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder169">
                            <mesh name="pCylinder169_earth_0" geometry={nodes.pCylinder169_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder170">
                            <mesh name="pCylinder170_earth_0" geometry={nodes.pCylinder170_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder171">
                            <mesh name="pCylinder171_earth_0" geometry={nodes.pCylinder171_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder18">
                            <mesh name="pCylinder18_earth_0" geometry={nodes.pCylinder18_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder19">
                            <mesh name="pCylinder19_earth_0" geometry={nodes.pCylinder19_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder20">
                            <mesh name="pCylinder20_earth_0" geometry={nodes.pCylinder20_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder21">
                            <mesh name="pCylinder21_earth_0" geometry={nodes.pCylinder21_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder22">
                            <mesh name="pCylinder22_earth_0" geometry={nodes.pCylinder22_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder23">
                            <mesh name="pCylinder23_earth_0" geometry={nodes.pCylinder23_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder24">
                            <mesh name="pCylinder24_earth_0" geometry={nodes.pCylinder24_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder25">
                            <mesh name="pCylinder25_earth_0" geometry={nodes.pCylinder25_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder26">
                            <mesh name="pCylinder26_earth_0" geometry={nodes.pCylinder26_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder27">
                            <mesh name="pCylinder27_earth_0" geometry={nodes.pCylinder27_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder28">
                            <mesh name="pCylinder28_earth_0" geometry={nodes.pCylinder28_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder29">
                            <mesh name="pCylinder29_earth_0" geometry={nodes.pCylinder29_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder31">
                            <mesh name="pCylinder31_earth_0" geometry={nodes.pCylinder31_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder32">
                            <mesh name="pCylinder32_earth_0" geometry={nodes.pCylinder32_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder33">
                            <mesh name="pCylinder33_earth_0" geometry={nodes.pCylinder33_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder34">
                            <mesh name="pCylinder34_earth_0" geometry={nodes.pCylinder34_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder35">
                            <mesh name="pCylinder35_earth_0" geometry={nodes.pCylinder35_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder36">
                            <mesh name="pCylinder36_earth_0" geometry={nodes.pCylinder36_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder37">
                            <mesh name="pCylinder37_earth_0" geometry={nodes.pCylinder37_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder38">
                            <mesh name="pCylinder38_earth_0" geometry={nodes.pCylinder38_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder39">
                            <mesh name="pCylinder39_earth_0" geometry={nodes.pCylinder39_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder40">
                            <mesh name="pCylinder40_earth_0" geometry={nodes.pCylinder40_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder41">
                            <mesh name="pCylinder41_earth_0" geometry={nodes.pCylinder41_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder42">
                            <mesh name="pCylinder42_earth_0" geometry={nodes.pCylinder42_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder43">
                            <mesh name="pCylinder43_earth_0" geometry={nodes.pCylinder43_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder44">
                            <mesh name="pCylinder44_earth_0" geometry={nodes.pCylinder44_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder45">
                            <mesh name="pCylinder45_earth_0" geometry={nodes.pCylinder45_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder46">
                            <mesh name="pCylinder46_earth_0" geometry={nodes.pCylinder46_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder47">
                            <mesh name="pCylinder47_earth_0" geometry={nodes.pCylinder47_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder48">
                            <mesh name="pCylinder48_earth_0" geometry={nodes.pCylinder48_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder49">
                            <mesh name="pCylinder49_earth_0" geometry={nodes.pCylinder49_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder50">
                            <mesh name="pCylinder50_earth_0" geometry={nodes.pCylinder50_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder51">
                            <mesh name="pCylinder51_earth_0" geometry={nodes.pCylinder51_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder52">
                            <mesh name="pCylinder52_earth_0" geometry={nodes.pCylinder52_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder53">
                            <mesh name="pCylinder53_earth_0" geometry={nodes.pCylinder53_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder54">
                            <mesh name="pCylinder54_earth_0" geometry={nodes.pCylinder54_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder55">
                            <mesh name="pCylinder55_earth_0" geometry={nodes.pCylinder55_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder56">
                            <mesh name="pCylinder56_earth_0" geometry={nodes.pCylinder56_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder57">
                            <mesh name="pCylinder57_earth_0" geometry={nodes.pCylinder57_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder58">
                            <mesh name="pCylinder58_earth_0" geometry={nodes.pCylinder58_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder59">
                            <mesh name="pCylinder59_earth_0" geometry={nodes.pCylinder59_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder60">
                            <mesh name="pCylinder60_earth_0" geometry={nodes.pCylinder60_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder61">
                            <mesh name="pCylinder61_earth_0" geometry={nodes.pCylinder61_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder62">
                            <mesh name="pCylinder62_earth_0" geometry={nodes.pCylinder62_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder63">
                            <mesh name="pCylinder63_earth_0" geometry={nodes.pCylinder63_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder64">
                            <mesh name="pCylinder64_earth_0" geometry={nodes.pCylinder64_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder65">
                            <mesh name="pCylinder65_earth_0" geometry={nodes.pCylinder65_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder66">
                            <mesh name="pCylinder66_earth_0" geometry={nodes.pCylinder66_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder67">
                            <mesh name="pCylinder67_earth_0" geometry={nodes.pCylinder67_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder68">
                            <mesh name="pCylinder68_earth_0" geometry={nodes.pCylinder68_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder69">
                            <mesh name="pCylinder69_earth_0" geometry={nodes.pCylinder69_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder70">
                            <mesh name="pCylinder70_earth_0" geometry={nodes.pCylinder70_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder71">
                            <mesh name="pCylinder71_earth_0" geometry={nodes.pCylinder71_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder72">
                            <mesh name="pCylinder72_earth_0" geometry={nodes.pCylinder72_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder73">
                            <mesh name="pCylinder73_earth_0" geometry={nodes.pCylinder73_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder74">
                            <mesh name="pCylinder74_earth_0" geometry={nodes.pCylinder74_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder75">
                            <mesh name="pCylinder75_earth_0" geometry={nodes.pCylinder75_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder76">
                            <mesh name="pCylinder76_earth_0" geometry={nodes.pCylinder76_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder77">
                            <mesh name="pCylinder77_earth_0" geometry={nodes.pCylinder77_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder78">
                            <mesh name="pCylinder78_earth_0" geometry={nodes.pCylinder78_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder79">
                            <mesh name="pCylinder79_earth_0" geometry={nodes.pCylinder79_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder80">
                            <mesh name="pCylinder80_earth_0" geometry={nodes.pCylinder80_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder81">
                            <mesh name="pCylinder81_earth_0" geometry={nodes.pCylinder81_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder82">
                            <mesh name="pCylinder82_earth_0" geometry={nodes.pCylinder82_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder83">
                            <mesh name="pCylinder83_earth_0" geometry={nodes.pCylinder83_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder84">
                            <mesh name="pCylinder84_earth_0" geometry={nodes.pCylinder84_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder85">
                            <mesh name="pCylinder85_earth_0" geometry={nodes.pCylinder85_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder86">
                            <mesh name="pCylinder86_earth_0" geometry={nodes.pCylinder86_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder87">
                            <mesh name="pCylinder87_earth_0" geometry={nodes.pCylinder87_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder88">
                            <mesh name="pCylinder88_earth_0" geometry={nodes.pCylinder88_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder9">
                            <mesh name="pCylinder9_earth_0" geometry={nodes.pCylinder9_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder90">
                            <mesh name="pCylinder90_earth_0" geometry={nodes.pCylinder90_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder91">
                            <mesh name="pCylinder91_earth_0" geometry={nodes.pCylinder91_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder92">
                            <mesh name="pCylinder92_earth_0" geometry={nodes.pCylinder92_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder93">
                            <mesh name="pCylinder93_earth_0" geometry={nodes.pCylinder93_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder94">
                            <mesh name="pCylinder94_earth_0" geometry={nodes.pCylinder94_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder95">
                            <mesh name="pCylinder95_earth_0" geometry={nodes.pCylinder95_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder96">
                            <mesh name="pCylinder96_earth_0" geometry={nodes.pCylinder96_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder97">
                            <mesh name="pCylinder97_earth_0" geometry={nodes.pCylinder97_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder98">
                            <mesh name="pCylinder98_earth_0" geometry={nodes.pCylinder98_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="pCylinder99">
                            <mesh name="pCylinder99_earth_0" geometry={nodes.pCylinder99_earth_0.geometry} material={materials.earth} />
                          </group>
                        </group>
                        <group name="MASH1_ReproMesh1">
                          <group name="polySurface1" position={[-6.96, 2.941, -1.102]} scale={0.482}>
                            <mesh name="polySurface1_earth_0" geometry={nodes.polySurface1_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface10" position={[-3.45, 0.603, 6.771]} scale={0.482}>
                            <mesh name="polySurface10_earth_0" geometry={nodes.polySurface10_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface11" position={[-1.639, 7.489, -0.835]} scale={0.482}>
                            <mesh name="polySurface11_earth_0" geometry={nodes.polySurface11_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface12" position={[6.605, -1.794, 3.366]} scale={0.482}>
                            <mesh name="polySurface12_earth_0" geometry={nodes.polySurface12_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface13" position={[6.428, -4.016, 1.018]} scale={0.482}>
                            <mesh name="polySurface13_earth_0" geometry={nodes.polySurface13_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface14" position={[4.913, -5.848, -0.778]} scale={0.482}>
                            <mesh name="polySurface14_earth_0" geometry={nodes.polySurface14_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface17" position={[3.199, 2.941, 6.279]} scale={0.482}>
                            <mesh name="polySurface17_earth_0" geometry={nodes.polySurface17_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface18" position={[6.771, 0.603, 3.45]} scale={0.482}>
                            <mesh name="polySurface18_earth_0" geometry={nodes.polySurface18_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface19" position={[-3.199, 2.941, -6.279]} scale={0.482}>
                            <mesh name="polySurface19_earth_0" geometry={nodes.polySurface19_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface2" position={[2.307, 15.118, -3.578]} rotation={[0, 0, 1.7]} scale={0.482}>
                            <mesh name="polySurface2_earth_0" geometry={nodes.polySurface2_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface20" position={[-2.639, -7.111, -1.345]} scale={0.482}>
                            <mesh name="polySurface20_earth_0" geometry={nodes.polySurface20_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface21" position={[-0.463, -7.111, 2.926]} scale={0.482}>
                            <mesh name="polySurface21_earth_0" geometry={nodes.polySurface21_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface22" position={[7.505, 0.603, -1.189]} scale={0.482}>
                            <mesh name="polySurface22_earth_0" geometry={nodes.polySurface22_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface23" position={[5.373, 0.603, -5.373]} scale={0.482}>
                            <mesh name="polySurface23_earth_0" geometry={nodes.polySurface23_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface24" position={[-1.102, 2.941, 6.96]} scale={0.482}>
                            <mesh name="polySurface24_earth_0" geometry={nodes.polySurface24_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface25" position={[-0.628, 6.559, 3.967]} scale={0.482}>
                            <mesh name="polySurface25_earth_0" geometry={nodes.polySurface25_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface26" position={[-3.517, -5.848, 3.517]} scale={0.482}>
                            <mesh name="polySurface26_earth_0" geometry={nodes.polySurface26_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface28" position={[2.955, -4.016, -5.799]} scale={0.482}>
                            <mesh name="polySurface28_earth_0" geometry={nodes.polySurface28_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface29" position={[4.109, 4.993, 4.109]} scale={0.482}>
                            <mesh name="polySurface29_earth_0" geometry={nodes.polySurface29_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface3" position={[1.16, -1.794, 7.322]} scale={0.482}>
                            <mesh name="polySurface3_earth_0" geometry={nodes.polySurface3_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface30" position={[-6.428, -4.016, 1.018]} scale={0.482}>
                            <mesh name="polySurface30_earth_0" geometry={nodes.polySurface30_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface31" position={[-3.967, 6.559, -0.628]} scale={0.482}>
                            <mesh name="polySurface31_earth_0" geometry={nodes.polySurface31_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface34" position={[-5.74, 4.993, 0.909]} scale={0.482}>
                            <mesh name="polySurface34_earth_0" geometry={nodes.polySurface34_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface35" position={[2.955, -4.016, 5.799]} scale={0.482}>
                            <mesh name="polySurface35_earth_0" geometry={nodes.polySurface35_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface36" position={[-3.366, -1.794, -6.605]} scale={0.482}>
                            <mesh name="polySurface36_earth_0" geometry={nodes.polySurface36_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface37" position={[-5.242, -1.794, -5.242]} scale={0.482}>
                            <mesh name="polySurface37_earth_0" geometry={nodes.polySurface37_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface38" position={[-1.018, -4.016, -6.428]} scale={0.482}>
                            <mesh name="polySurface38_earth_0" geometry={nodes.polySurface38_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface39" position={[-4.602, -4.016, -4.602]} scale={0.482}>
                            <mesh name="polySurface39_earth_0" geometry={nodes.polySurface39_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface4" position={[5.799, -4.016, -2.955]} scale={0.482}>
                            <mesh name="polySurface4_earth_0" geometry={nodes.polySurface4_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface40" position={[2.639, -7.111, 1.345]} scale={0.482}>
                            <mesh name="polySurface40_earth_0" geometry={nodes.polySurface40_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface41" position={[-3.366, -1.794, 6.605]} scale={0.482}>
                            <mesh name="polySurface41_earth_0" geometry={nodes.polySurface41_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface42" position={[2.258, -5.848, 4.432]} scale={0.482}>
                            <mesh name="polySurface42_earth_0" geometry={nodes.polySurface42_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface44" position={[-5.641, -3.679, 5.057]} scale={0.482}>
                            <mesh name="polySurface44_earth_0" geometry={nodes.polySurface44_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface45" position={[1.817, 7.489, 0.288]} scale={0.482}>
                            <mesh name="polySurface45_earth_0" geometry={nodes.polySurface45_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface46" position={[0.463, -7.111, -2.926]} scale={0.482}>
                            <mesh name="polySurface46_earth_0" geometry={nodes.polySurface46_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface47" position={[4.432, -5.848, 2.258]} scale={0.482}>
                            <mesh name="polySurface47_earth_0" geometry={nodes.polySurface47_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface48" position={[2.639, -7.111, -1.345]} scale={0.482}>
                            <mesh name="polySurface48_earth_0" geometry={nodes.polySurface48_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface49" position={[6.279, 2.941, 3.199]} scale={0.482}>
                            <mesh name="polySurface49_earth_0" geometry={nodes.polySurface49_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface5" position={[-7.505, 0.603, 1.189]} scale={0.482}>
                            <mesh name="polySurface5_earth_0" geometry={nodes.polySurface5_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface50" position={[-2.258, -5.848, -4.432]} scale={0.482}>
                            <mesh name="polySurface50_earth_0" geometry={nodes.polySurface50_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface51" position={[0.835, 7.489, 1.639]} scale={0.482}>
                            <mesh name="polySurface51_earth_0" geometry={nodes.polySurface51_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface52" position={[5.178, 4.993, -2.638]} scale={0.482}>
                            <mesh name="polySurface52_earth_0" geometry={nodes.polySurface52_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface53" position={[0.909, 4.993, 5.74]} scale={0.482}>
                            <mesh name="polySurface53_earth_0" geometry={nodes.polySurface53_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface54" position={[-1.16, -1.794, -7.322]} scale={0.482}>
                            <mesh name="polySurface54_earth_0" geometry={nodes.polySurface54_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface55" position={[0.628, 6.559, -3.967]} scale={0.482}>
                            <mesh name="polySurface55_earth_0" geometry={nodes.polySurface55_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface56" position={[3.366, -1.794, -6.605]} scale={0.482}>
                            <mesh name="polySurface56_earth_0" geometry={nodes.polySurface56_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface57" position={[-4.983, 2.941, 4.983]} scale={0.482}>
                            <mesh name="polySurface57_earth_0" geometry={nodes.polySurface57_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface58" position={[7.322, -1.794, -1.16]} scale={0.482}>
                            <mesh name="polySurface58_earth_0" geometry={nodes.polySurface58_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface59" position={[-1.018, -4.016, 6.428]} scale={0.482}>
                            <mesh name="polySurface59_earth_0" geometry={nodes.polySurface59_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface6" position={[10.252, 9.107, -5.182]} rotation={[-0.848, 0.466, 1.174]} scale={0.482}>
                            <mesh name="polySurface6_earth_0" geometry={nodes.polySurface6_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface60" position={[5.74, 4.993, 0.909]} scale={0.482}>
                            <mesh name="polySurface60_earth_0" geometry={nodes.polySurface60_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface7" position={[1.189, 0.603, -7.505]} scale={0.482}>
                            <mesh name="polySurface7_earth_0" geometry={nodes.polySurface7_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface8" position={[-3.45, 0.603, -6.771]} scale={0.482}>
                            <mesh name="polySurface8_earth_0" geometry={nodes.polySurface8_earth_0.geometry} material={materials.earth} />
                          </group>
                          <group name="polySurface9" position={[-2.84, 6.559, 2.84]} scale={0.482}>
                            <mesh name="polySurface9_earth_0" geometry={nodes.polySurface9_earth_0.geometry} material={materials.earth} />
                          </group>
                        </group>
                      </group>
                      <group name="group48" position={[-0.274, -0.35, -0.274]}>
                        <group name="group49">
                          <group name="pTorus25">
                            <mesh name="pTorus25_logo_0" geometry={nodes.pTorus25_logo_0.geometry} material={materials.logo} />
                          </group>
                          <group name="pTorus26">
                            <mesh name="pTorus26_logo_0" geometry={nodes.pTorus26_logo_0.geometry} material={materials.logo} />
                          </group>
                        </group>
                        <group name="pPipe15" position={[0, 0, 0.282]} scale={[1, 1, 0.151]} />
                        <group name="pPipe16" position={[0, 0, -0.74]} scale={[1, 1, 0.151]} />
                        <group name="pPipe17" position={[0, 0, 0.282]} scale={[1, 1, 0.151]} />
                        <group name="pPipe18" position={[0, 0, 0.225]} scale={[1, 1, 0.151]} />
                        <group name="pPipe19" position={[0, 0, -0.957]} scale={[1, 1, 0.151]} />
                        <group name="pPipe20" position={[0, 0, -0.389]} scale={[1, 1, 0.151]} />
                        <group name="pPlane14" position={[0, 0, -1.614]} scale={[1, 1, 0.151]} />
                        <group name="pPlane15" position={[0, 0, -0.74]} scale={[1, 1, 0.151]} />
                        <group name="pPlane16" position={[0, 0, -0.389]} scale={[1, 1, 0.151]} />
                        <group name="pPlane17" position={[0, 0, -0.957]} scale={[1, 1, 0.151]} />
                        <group name="pPlane18" position={[0, 0, -1.396]} scale={[1, 1, 0.151]} />
                        <group name="pPlane19" position={[0, 0, 0.225]} scale={[1, 1, 0.151]} />
                        <group name="pPlane20" />
                      </group>
                      <group name="group52">
                        <group name="group43" rotation={[0.562, 0.148, -0.093]}>
                          <group name="Object_707">
                            <primitive object={nodes._rootJoint} />
                            <group name="Object_1001" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_1003" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_1005" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_1007" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_1009" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_1011" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_1013" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_1015" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_1017" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_1019" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_1021" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_1023" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_1025" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_1027" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_1029" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_1031" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_1033" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_1035" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_1037" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_1039" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_1041" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_1043" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_1045" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_1047" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_1049" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_1051" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_1053" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_1055" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_1057" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_1059" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_1061" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_1063" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_1065" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_1067" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_1069" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_1071" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_1073" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_1075" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_1077" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_1079" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_1081" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_1083" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_1085" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_1087" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_1089" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_1091" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_1093" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_709" />
                            <group name="Object_711" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_713" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_715" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_717" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_719" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_721" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_723" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_725" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_727" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_729" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_731" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_733" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_735" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_737" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_739" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_741" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_743" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_745" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_747" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_749" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_751" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_753" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_755" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_757" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_759" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_761" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_763" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_765" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_767" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_769" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_771" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_773" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_775" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_777" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_779" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_781" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_783" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_785" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_787" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_789" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_791" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_793" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_795" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_797" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_799" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_801" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_803" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_805" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_807" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_809" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_811" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_813" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_815" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_817" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_819" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_821" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_823" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_825" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_827" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_829" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_831" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_833" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_835" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_837" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_839" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_841" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_843" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_845" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_847" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_849" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_851" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_853" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_855" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_857" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_859" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_861" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_863" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_865" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_867" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_869" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_871" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_873" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_875" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_877" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_879" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_881" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_883" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_885" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_887" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_889" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_891" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_893" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_895" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_897" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_899" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_901" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_903" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_905" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_907" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_909" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_911" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_913" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_915" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_917" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_919" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_921" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_923" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_925" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_927" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_929" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_931" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_933" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_935" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_937" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_939" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_941" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_943" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_945" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_947" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_949" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_951" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_953" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_955" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_957" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_959" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_961" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_963" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_965" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_967" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <group name="Object_969" position={[-3.633, 7.077, -8.614]} rotation={[2.049, -1.254, -0.339]} scale={1.774} />
                            <group name="Object_971" position={[-1.094, 5.538, -10.082]} rotation={[2.291, -1.173, 0.14]} scale={1.774} />
                            <group name="Object_973" position={[1.875, 6.267, -9.1]} rotation={[2.659, -1.157, 0.505]} scale={1.774} />
                            <group name="Object_975" position={[4.383, 8.791, -4.909]} rotation={[-3.136, -0.835, 0.628]} scale={1.774} />
                            <group name="Object_977" position={[-0.71, 7.708, -7.858]} rotation={[2.463, -1.158, 0.089]} scale={1.774} />
                            <group name="Object_979" position={[1.937, 8.433, -6.784]} rotation={[2.788, -0.977, 0.374]} scale={1.774} />
                            <group name="Object_981" position={[-5.291, 7.473, -6.05]} rotation={[2.322, -0.317, -0.452]} scale={1.774} />
                            <group name="Object_983" position={[-2.73, 8.65, -6.216]} rotation={[2.424, -0.481, -0.199]} scale={1.774} />
                            <group name="Object_985" position={[-4.281, 9.399, -3.752]} rotation={[2.559, -0.507, -0.39]} scale={1.774} />
                            <group name="Object_987" position={[3.529, 10.163, -2.174]} rotation={[-2.976, -0.734, 0.508]} scale={1.774} />
                            <group name="Object_989" position={[1.438, 9.994, -4.279]} rotation={[2.902, -0.797, 0.232]} scale={1.774} />
                            <group name="Object_991" position={[-1.182, 10.239, -3.741]} rotation={[2.704, -0.568, -0.132]} scale={1.774} />
                            <group name="Object_993" position={[0.643, 10.86, -1.422]} rotation={[3.051, -0.621, 0.07]} scale={1.774} />
                            <group name="Object_995" position={[-3.523, 10.313, -1.408]} rotation={[1.469, -1.342, -Math.PI / 2]} scale={1.774} />
                            <group name="Object_997" position={[0.055, 9.502, -5.775]} rotation={[-0.547, -0.194, -0.013]} />
                            <group name="Object_999" position={[4.836, 7.31, -7.813]} rotation={[2.984, -0.974, 0.741]} scale={1.774} />
                            <skinnedMesh name="Object_1000" geometry={nodes.Object_1000.geometry} material={materials.earth} skeleton={nodes.Object_1000.skeleton} />
                            <skinnedMesh name="Object_1002" geometry={nodes.Object_1002.geometry} material={materials.earth} skeleton={nodes.Object_1002.skeleton} />
                            <skinnedMesh name="Object_1004" geometry={nodes.Object_1004.geometry} material={materials.earth} skeleton={nodes.Object_1004.skeleton} />
                            <skinnedMesh name="Object_1006" geometry={nodes.Object_1006.geometry} material={materials.earth} skeleton={nodes.Object_1006.skeleton} />
                            <skinnedMesh name="Object_1008" geometry={nodes.Object_1008.geometry} material={materials.earth} skeleton={nodes.Object_1008.skeleton} />
                            <skinnedMesh name="Object_1010" geometry={nodes.Object_1010.geometry} material={materials.earth} skeleton={nodes.Object_1010.skeleton} />
                            <skinnedMesh name="Object_1012" geometry={nodes.Object_1012.geometry} material={materials.earth} skeleton={nodes.Object_1012.skeleton} />
                            <skinnedMesh name="Object_1014" geometry={nodes.Object_1014.geometry} material={materials.earth} skeleton={nodes.Object_1014.skeleton} />
                            <skinnedMesh name="Object_1016" geometry={nodes.Object_1016.geometry} material={materials.earth} skeleton={nodes.Object_1016.skeleton} />
                            <skinnedMesh name="Object_1018" geometry={nodes.Object_1018.geometry} material={materials.earth} skeleton={nodes.Object_1018.skeleton} />
                            <skinnedMesh name="Object_1020" geometry={nodes.Object_1020.geometry} material={materials.earth} skeleton={nodes.Object_1020.skeleton} />
                            <skinnedMesh name="Object_1022" geometry={nodes.Object_1022.geometry} material={materials.earth} skeleton={nodes.Object_1022.skeleton} />
                            <skinnedMesh name="Object_1024" geometry={nodes.Object_1024.geometry} material={materials.earth} skeleton={nodes.Object_1024.skeleton} />
                            <skinnedMesh name="Object_1026" geometry={nodes.Object_1026.geometry} material={materials.earth} skeleton={nodes.Object_1026.skeleton} />
                            <skinnedMesh name="Object_1028" geometry={nodes.Object_1028.geometry} material={materials.earth} skeleton={nodes.Object_1028.skeleton} />
                            <skinnedMesh name="Object_1030" geometry={nodes.Object_1030.geometry} material={materials.earth} skeleton={nodes.Object_1030.skeleton} />
                            <skinnedMesh name="Object_1032" geometry={nodes.Object_1032.geometry} material={materials.earth} skeleton={nodes.Object_1032.skeleton} />
                            <skinnedMesh name="Object_1034" geometry={nodes.Object_1034.geometry} material={materials.earth} skeleton={nodes.Object_1034.skeleton} />
                            <skinnedMesh name="Object_1036" geometry={nodes.Object_1036.geometry} material={materials.earth} skeleton={nodes.Object_1036.skeleton} />
                            <skinnedMesh name="Object_1038" geometry={nodes.Object_1038.geometry} material={materials.earth} skeleton={nodes.Object_1038.skeleton} />
                            <skinnedMesh name="Object_1040" geometry={nodes.Object_1040.geometry} material={materials.earth} skeleton={nodes.Object_1040.skeleton} />
                            <skinnedMesh name="Object_1042" geometry={nodes.Object_1042.geometry} material={materials.earth} skeleton={nodes.Object_1042.skeleton} />
                            <skinnedMesh name="Object_1044" geometry={nodes.Object_1044.geometry} material={materials.earth} skeleton={nodes.Object_1044.skeleton} />
                            <skinnedMesh name="Object_1046" geometry={nodes.Object_1046.geometry} material={materials.earth} skeleton={nodes.Object_1046.skeleton} />
                            <skinnedMesh name="Object_1048" geometry={nodes.Object_1048.geometry} material={materials.earth} skeleton={nodes.Object_1048.skeleton} />
                            <skinnedMesh name="Object_1050" geometry={nodes.Object_1050.geometry} material={materials.earth} skeleton={nodes.Object_1050.skeleton} />
                            <skinnedMesh name="Object_1052" geometry={nodes.Object_1052.geometry} material={materials.earth} skeleton={nodes.Object_1052.skeleton} />
                            <skinnedMesh name="Object_1054" geometry={nodes.Object_1054.geometry} material={materials.earth} skeleton={nodes.Object_1054.skeleton} />
                            <skinnedMesh name="Object_1056" geometry={nodes.Object_1056.geometry} material={materials.earth} skeleton={nodes.Object_1056.skeleton} />
                            <skinnedMesh name="Object_1058" geometry={nodes.Object_1058.geometry} material={materials.earth} skeleton={nodes.Object_1058.skeleton} />
                            <skinnedMesh name="Object_1060" geometry={nodes.Object_1060.geometry} material={materials.earth} skeleton={nodes.Object_1060.skeleton} />
                            <skinnedMesh name="Object_1062" geometry={nodes.Object_1062.geometry} material={materials.earth} skeleton={nodes.Object_1062.skeleton} />
                            <skinnedMesh name="Object_1064" geometry={nodes.Object_1064.geometry} material={materials.earth} skeleton={nodes.Object_1064.skeleton} />
                            <skinnedMesh name="Object_1066" geometry={nodes.Object_1066.geometry} material={materials.earth} skeleton={nodes.Object_1066.skeleton} />
                            <skinnedMesh name="Object_1068" geometry={nodes.Object_1068.geometry} material={materials.earth} skeleton={nodes.Object_1068.skeleton} />
                            <skinnedMesh name="Object_1070" geometry={nodes.Object_1070.geometry} material={materials.earth} skeleton={nodes.Object_1070.skeleton} />
                            <skinnedMesh name="Object_1072" geometry={nodes.Object_1072.geometry} material={materials.earth} skeleton={nodes.Object_1072.skeleton} />
                            <skinnedMesh name="Object_1074" geometry={nodes.Object_1074.geometry} material={materials.earth} skeleton={nodes.Object_1074.skeleton} />
                            <skinnedMesh name="Object_1076" geometry={nodes.Object_1076.geometry} material={materials.earth} skeleton={nodes.Object_1076.skeleton} />
                            <skinnedMesh name="Object_1078" geometry={nodes.Object_1078.geometry} material={materials.earth} skeleton={nodes.Object_1078.skeleton} />
                            <skinnedMesh name="Object_1080" geometry={nodes.Object_1080.geometry} material={materials.earth} skeleton={nodes.Object_1080.skeleton} />
                            <skinnedMesh name="Object_1082" geometry={nodes.Object_1082.geometry} material={materials.earth} skeleton={nodes.Object_1082.skeleton} />
                            <skinnedMesh name="Object_1084" geometry={nodes.Object_1084.geometry} material={materials.earth} skeleton={nodes.Object_1084.skeleton} />
                            <skinnedMesh name="Object_1086" geometry={nodes.Object_1086.geometry} material={materials.earth} skeleton={nodes.Object_1086.skeleton} />
                            <skinnedMesh name="Object_1088" geometry={nodes.Object_1088.geometry} material={materials.earth} skeleton={nodes.Object_1088.skeleton} />
                            <skinnedMesh name="Object_1090" geometry={nodes.Object_1090.geometry} material={materials.earth} skeleton={nodes.Object_1090.skeleton} />
                            <skinnedMesh name="Object_1092" geometry={nodes.Object_1092.geometry} material={materials.earth} skeleton={nodes.Object_1092.skeleton} />
                            <skinnedMesh name="Object_1094" geometry={nodes.Object_1094.geometry} material={materials.earth} skeleton={nodes.Object_1094.skeleton} />
                            <skinnedMesh name="Object_710" geometry={nodes.Object_710.geometry} material={materials.earth} skeleton={nodes.Object_710.skeleton} />
                            <skinnedMesh name="Object_712" geometry={nodes.Object_712.geometry} material={materials.earth} skeleton={nodes.Object_712.skeleton} />
                            <skinnedMesh name="Object_714" geometry={nodes.Object_714.geometry} material={materials.earth} skeleton={nodes.Object_714.skeleton} />
                            <skinnedMesh name="Object_716" geometry={nodes.Object_716.geometry} material={materials.earth} skeleton={nodes.Object_716.skeleton} />
                            <skinnedMesh name="Object_718" geometry={nodes.Object_718.geometry} material={materials.earth} skeleton={nodes.Object_718.skeleton} />
                            <skinnedMesh name="Object_720" geometry={nodes.Object_720.geometry} material={materials.earth} skeleton={nodes.Object_720.skeleton} />
                            <skinnedMesh name="Object_722" geometry={nodes.Object_722.geometry} material={materials.earth} skeleton={nodes.Object_722.skeleton} />
                            <skinnedMesh name="Object_724" geometry={nodes.Object_724.geometry} material={materials.earth} skeleton={nodes.Object_724.skeleton} />
                            <skinnedMesh name="Object_726" geometry={nodes.Object_726.geometry} material={materials.earth} skeleton={nodes.Object_726.skeleton} />
                            <skinnedMesh name="Object_728" geometry={nodes.Object_728.geometry} material={materials.earth} skeleton={nodes.Object_728.skeleton} />
                            <skinnedMesh name="Object_730" geometry={nodes.Object_730.geometry} material={materials.earth} skeleton={nodes.Object_730.skeleton} />
                            <skinnedMesh name="Object_732" geometry={nodes.Object_732.geometry} material={materials.earth} skeleton={nodes.Object_732.skeleton} />
                            <skinnedMesh name="Object_734" geometry={nodes.Object_734.geometry} material={materials.earth} skeleton={nodes.Object_734.skeleton} />
                            <skinnedMesh name="Object_736" geometry={nodes.Object_736.geometry} material={materials.earth} skeleton={nodes.Object_736.skeleton} />
                            <skinnedMesh name="Object_738" geometry={nodes.Object_738.geometry} material={materials.earth} skeleton={nodes.Object_738.skeleton} />
                            <skinnedMesh name="Object_740" geometry={nodes.Object_740.geometry} material={materials.earth} skeleton={nodes.Object_740.skeleton} />
                            <skinnedMesh name="Object_742" geometry={nodes.Object_742.geometry} material={materials.earth} skeleton={nodes.Object_742.skeleton} />
                            <skinnedMesh name="Object_744" geometry={nodes.Object_744.geometry} material={materials.earth} skeleton={nodes.Object_744.skeleton} />
                            <skinnedMesh name="Object_746" geometry={nodes.Object_746.geometry} material={materials.earth} skeleton={nodes.Object_746.skeleton} />
                            <skinnedMesh name="Object_748" geometry={nodes.Object_748.geometry} material={materials.earth} skeleton={nodes.Object_748.skeleton} />
                            <skinnedMesh name="Object_750" geometry={nodes.Object_750.geometry} material={materials.earth} skeleton={nodes.Object_750.skeleton} />
                            <skinnedMesh name="Object_752" geometry={nodes.Object_752.geometry} material={materials.earth} skeleton={nodes.Object_752.skeleton} />
                            <skinnedMesh name="Object_754" geometry={nodes.Object_754.geometry} material={materials.earth} skeleton={nodes.Object_754.skeleton} />
                            <skinnedMesh name="Object_756" geometry={nodes.Object_756.geometry} material={materials.earth} skeleton={nodes.Object_756.skeleton} />
                            <skinnedMesh name="Object_758" geometry={nodes.Object_758.geometry} material={materials.earth} skeleton={nodes.Object_758.skeleton} />
                            <skinnedMesh name="Object_760" geometry={nodes.Object_760.geometry} material={materials.earth} skeleton={nodes.Object_760.skeleton} />
                            <skinnedMesh name="Object_762" geometry={nodes.Object_762.geometry} material={materials.earth} skeleton={nodes.Object_762.skeleton} />
                            <skinnedMesh name="Object_764" geometry={nodes.Object_764.geometry} material={materials.earth} skeleton={nodes.Object_764.skeleton} />
                            <skinnedMesh name="Object_766" geometry={nodes.Object_766.geometry} material={materials.earth} skeleton={nodes.Object_766.skeleton} />
                            <skinnedMesh name="Object_768" geometry={nodes.Object_768.geometry} material={materials.earth} skeleton={nodes.Object_768.skeleton} />
                            <skinnedMesh name="Object_770" geometry={nodes.Object_770.geometry} material={materials.earth} skeleton={nodes.Object_770.skeleton} />
                            <skinnedMesh name="Object_772" geometry={nodes.Object_772.geometry} material={materials.earth} skeleton={nodes.Object_772.skeleton} />
                            <skinnedMesh name="Object_774" geometry={nodes.Object_774.geometry} material={materials.earth} skeleton={nodes.Object_774.skeleton} />
                            <skinnedMesh name="Object_776" geometry={nodes.Object_776.geometry} material={materials.earth} skeleton={nodes.Object_776.skeleton} />
                            <skinnedMesh name="Object_778" geometry={nodes.Object_778.geometry} material={materials.earth} skeleton={nodes.Object_778.skeleton} />
                            <skinnedMesh name="Object_780" geometry={nodes.Object_780.geometry} material={materials.earth} skeleton={nodes.Object_780.skeleton} />
                            <skinnedMesh name="Object_782" geometry={nodes.Object_782.geometry} material={materials.earth} skeleton={nodes.Object_782.skeleton} />
                            <skinnedMesh name="Object_784" geometry={nodes.Object_784.geometry} material={materials.earth} skeleton={nodes.Object_784.skeleton} />
                            <skinnedMesh name="Object_786" geometry={nodes.Object_786.geometry} material={materials.earth} skeleton={nodes.Object_786.skeleton} />
                            <skinnedMesh name="Object_788" geometry={nodes.Object_788.geometry} material={materials.earth} skeleton={nodes.Object_788.skeleton} />
                            <skinnedMesh name="Object_790" geometry={nodes.Object_790.geometry} material={materials.earth} skeleton={nodes.Object_790.skeleton} />
                            <skinnedMesh name="Object_792" geometry={nodes.Object_792.geometry} material={materials.earth} skeleton={nodes.Object_792.skeleton} />
                            <skinnedMesh name="Object_794" geometry={nodes.Object_794.geometry} material={materials.earth} skeleton={nodes.Object_794.skeleton} />
                            <skinnedMesh name="Object_796" geometry={nodes.Object_796.geometry} material={materials.earth} skeleton={nodes.Object_796.skeleton} />
                            <skinnedMesh name="Object_798" geometry={nodes.Object_798.geometry} material={materials.earth} skeleton={nodes.Object_798.skeleton} />
                            <skinnedMesh name="Object_800" geometry={nodes.Object_800.geometry} material={materials.earth} skeleton={nodes.Object_800.skeleton} />
                            <skinnedMesh name="Object_802" geometry={nodes.Object_802.geometry} material={materials.earth} skeleton={nodes.Object_802.skeleton} />
                            <skinnedMesh name="Object_804" geometry={nodes.Object_804.geometry} material={materials.earth} skeleton={nodes.Object_804.skeleton} />
                            <skinnedMesh name="Object_806" geometry={nodes.Object_806.geometry} material={materials.earth} skeleton={nodes.Object_806.skeleton} />
                            <skinnedMesh name="Object_808" geometry={nodes.Object_808.geometry} material={materials.earth} skeleton={nodes.Object_808.skeleton} />
                            <skinnedMesh name="Object_810" geometry={nodes.Object_810.geometry} material={materials.earth} skeleton={nodes.Object_810.skeleton} />
                            <skinnedMesh name="Object_812" geometry={nodes.Object_812.geometry} material={materials.earth} skeleton={nodes.Object_812.skeleton} />
                            <skinnedMesh name="Object_814" geometry={nodes.Object_814.geometry} material={materials.earth} skeleton={nodes.Object_814.skeleton} />
                            <skinnedMesh name="Object_816" geometry={nodes.Object_816.geometry} material={materials.earth} skeleton={nodes.Object_816.skeleton} />
                            <skinnedMesh name="Object_818" geometry={nodes.Object_818.geometry} material={materials.earth} skeleton={nodes.Object_818.skeleton} />
                            <skinnedMesh name="Object_820" geometry={nodes.Object_820.geometry} material={materials.earth} skeleton={nodes.Object_820.skeleton} />
                            <skinnedMesh name="Object_822" geometry={nodes.Object_822.geometry} material={materials.earth} skeleton={nodes.Object_822.skeleton} />
                            <skinnedMesh name="Object_824" geometry={nodes.Object_824.geometry} material={materials.earth} skeleton={nodes.Object_824.skeleton} />
                            <skinnedMesh name="Object_826" geometry={nodes.Object_826.geometry} material={materials.earth} skeleton={nodes.Object_826.skeleton} />
                            <skinnedMesh name="Object_828" geometry={nodes.Object_828.geometry} material={materials.earth} skeleton={nodes.Object_828.skeleton} />
                            <skinnedMesh name="Object_830" geometry={nodes.Object_830.geometry} material={materials.earth} skeleton={nodes.Object_830.skeleton} />
                            <skinnedMesh name="Object_832" geometry={nodes.Object_832.geometry} material={materials.earth} skeleton={nodes.Object_832.skeleton} />
                            <skinnedMesh name="Object_834" geometry={nodes.Object_834.geometry} material={materials.earth} skeleton={nodes.Object_834.skeleton} />
                            <skinnedMesh name="Object_836" geometry={nodes.Object_836.geometry} material={materials.earth} skeleton={nodes.Object_836.skeleton} />
                            <skinnedMesh name="Object_838" geometry={nodes.Object_838.geometry} material={materials.earth} skeleton={nodes.Object_838.skeleton} />
                            <skinnedMesh name="Object_840" geometry={nodes.Object_840.geometry} material={materials.earth} skeleton={nodes.Object_840.skeleton} />
                            <skinnedMesh name="Object_842" geometry={nodes.Object_842.geometry} material={materials.earth} skeleton={nodes.Object_842.skeleton} />
                            <skinnedMesh name="Object_844" geometry={nodes.Object_844.geometry} material={materials.earth} skeleton={nodes.Object_844.skeleton} />
                            <skinnedMesh name="Object_846" geometry={nodes.Object_846.geometry} material={materials.earth} skeleton={nodes.Object_846.skeleton} />
                            <skinnedMesh name="Object_848" geometry={nodes.Object_848.geometry} material={materials.earth} skeleton={nodes.Object_848.skeleton} />
                            <skinnedMesh name="Object_850" geometry={nodes.Object_850.geometry} material={materials.earth} skeleton={nodes.Object_850.skeleton} />
                            <skinnedMesh name="Object_852" geometry={nodes.Object_852.geometry} material={materials.earth} skeleton={nodes.Object_852.skeleton} />
                            <skinnedMesh name="Object_854" geometry={nodes.Object_854.geometry} material={materials.earth} skeleton={nodes.Object_854.skeleton} />
                            <skinnedMesh name="Object_856" geometry={nodes.Object_856.geometry} material={materials.earth} skeleton={nodes.Object_856.skeleton} />
                            <skinnedMesh name="Object_858" geometry={nodes.Object_858.geometry} material={materials.earth} skeleton={nodes.Object_858.skeleton} />
                            <skinnedMesh name="Object_860" geometry={nodes.Object_860.geometry} material={materials.earth} skeleton={nodes.Object_860.skeleton} />
                            <skinnedMesh name="Object_862" geometry={nodes.Object_862.geometry} material={materials.earth} skeleton={nodes.Object_862.skeleton} />
                            <skinnedMesh name="Object_864" geometry={nodes.Object_864.geometry} material={materials.earth} skeleton={nodes.Object_864.skeleton} />
                            <skinnedMesh name="Object_866" geometry={nodes.Object_866.geometry} material={materials.earth} skeleton={nodes.Object_866.skeleton} />
                            <skinnedMesh name="Object_868" geometry={nodes.Object_868.geometry} material={materials.earth} skeleton={nodes.Object_868.skeleton} />
                            <skinnedMesh name="Object_870" geometry={nodes.Object_870.geometry} material={materials.earth} skeleton={nodes.Object_870.skeleton} />
                            <skinnedMesh name="Object_872" geometry={nodes.Object_872.geometry} material={materials.earth} skeleton={nodes.Object_872.skeleton} />
                            <skinnedMesh name="Object_874" geometry={nodes.Object_874.geometry} material={materials.earth} skeleton={nodes.Object_874.skeleton} />
                            <skinnedMesh name="Object_876" geometry={nodes.Object_876.geometry} material={materials.earth} skeleton={nodes.Object_876.skeleton} />
                            <skinnedMesh name="Object_878" geometry={nodes.Object_878.geometry} material={materials.earth} skeleton={nodes.Object_878.skeleton} />
                            <skinnedMesh name="Object_880" geometry={nodes.Object_880.geometry} material={materials.earth} skeleton={nodes.Object_880.skeleton} />
                            <skinnedMesh name="Object_882" geometry={nodes.Object_882.geometry} material={materials.earth} skeleton={nodes.Object_882.skeleton} />
                            <skinnedMesh name="Object_884" geometry={nodes.Object_884.geometry} material={materials.earth} skeleton={nodes.Object_884.skeleton} />
                            <skinnedMesh name="Object_886" geometry={nodes.Object_886.geometry} material={materials.earth} skeleton={nodes.Object_886.skeleton} />
                            <skinnedMesh name="Object_888" geometry={nodes.Object_888.geometry} material={materials.earth} skeleton={nodes.Object_888.skeleton} />
                            <skinnedMesh name="Object_890" geometry={nodes.Object_890.geometry} material={materials.earth} skeleton={nodes.Object_890.skeleton} />
                            <skinnedMesh name="Object_892" geometry={nodes.Object_892.geometry} material={materials.earth} skeleton={nodes.Object_892.skeleton} />
                            <skinnedMesh name="Object_894" geometry={nodes.Object_894.geometry} material={materials.earth} skeleton={nodes.Object_894.skeleton} />
                            <skinnedMesh name="Object_896" geometry={nodes.Object_896.geometry} material={materials.earth} skeleton={nodes.Object_896.skeleton} />
                            <skinnedMesh name="Object_898" geometry={nodes.Object_898.geometry} material={materials.earth} skeleton={nodes.Object_898.skeleton} />
                            <skinnedMesh name="Object_900" geometry={nodes.Object_900.geometry} material={materials.earth} skeleton={nodes.Object_900.skeleton} />
                            <skinnedMesh name="Object_902" geometry={nodes.Object_902.geometry} material={materials.earth} skeleton={nodes.Object_902.skeleton} />
                            <skinnedMesh name="Object_904" geometry={nodes.Object_904.geometry} material={materials.earth} skeleton={nodes.Object_904.skeleton} />
                            <skinnedMesh name="Object_906" geometry={nodes.Object_906.geometry} material={materials.earth} skeleton={nodes.Object_906.skeleton} />
                            <skinnedMesh name="Object_908" geometry={nodes.Object_908.geometry} material={materials.earth} skeleton={nodes.Object_908.skeleton} />
                            <skinnedMesh name="Object_910" geometry={nodes.Object_910.geometry} material={materials.earth} skeleton={nodes.Object_910.skeleton} />
                            <skinnedMesh name="Object_912" geometry={nodes.Object_912.geometry} material={materials.earth} skeleton={nodes.Object_912.skeleton} />
                            <skinnedMesh name="Object_914" geometry={nodes.Object_914.geometry} material={materials.earth} skeleton={nodes.Object_914.skeleton} />
                            <skinnedMesh name="Object_916" geometry={nodes.Object_916.geometry} material={materials.earth} skeleton={nodes.Object_916.skeleton} />
                            <skinnedMesh name="Object_918" geometry={nodes.Object_918.geometry} material={materials.earth} skeleton={nodes.Object_918.skeleton} />
                            <skinnedMesh name="Object_920" geometry={nodes.Object_920.geometry} material={materials.earth} skeleton={nodes.Object_920.skeleton} />
                            <skinnedMesh name="Object_922" geometry={nodes.Object_922.geometry} material={materials.earth} skeleton={nodes.Object_922.skeleton} />
                            <skinnedMesh name="Object_924" geometry={nodes.Object_924.geometry} material={materials.earth} skeleton={nodes.Object_924.skeleton} />
                            <skinnedMesh name="Object_926" geometry={nodes.Object_926.geometry} material={materials.earth} skeleton={nodes.Object_926.skeleton} />
                            <skinnedMesh name="Object_928" geometry={nodes.Object_928.geometry} material={materials.earth} skeleton={nodes.Object_928.skeleton} />
                            <skinnedMesh name="Object_930" geometry={nodes.Object_930.geometry} material={materials.earth} skeleton={nodes.Object_930.skeleton} />
                            <skinnedMesh name="Object_932" geometry={nodes.Object_932.geometry} material={materials.earth} skeleton={nodes.Object_932.skeleton} />
                            <skinnedMesh name="Object_934" geometry={nodes.Object_934.geometry} material={materials.earth} skeleton={nodes.Object_934.skeleton} />
                            <skinnedMesh name="Object_936" geometry={nodes.Object_936.geometry} material={materials.earth} skeleton={nodes.Object_936.skeleton} />
                            <skinnedMesh name="Object_938" geometry={nodes.Object_938.geometry} material={materials.earth} skeleton={nodes.Object_938.skeleton} />
                            <skinnedMesh name="Object_940" geometry={nodes.Object_940.geometry} material={materials.earth} skeleton={nodes.Object_940.skeleton} />
                            <skinnedMesh name="Object_942" geometry={nodes.Object_942.geometry} material={materials.earth} skeleton={nodes.Object_942.skeleton} />
                            <skinnedMesh name="Object_944" geometry={nodes.Object_944.geometry} material={materials.earth} skeleton={nodes.Object_944.skeleton} />
                            <skinnedMesh name="Object_946" geometry={nodes.Object_946.geometry} material={materials.earth} skeleton={nodes.Object_946.skeleton} />
                            <skinnedMesh name="Object_948" geometry={nodes.Object_948.geometry} material={materials.earth} skeleton={nodes.Object_948.skeleton} />
                            <skinnedMesh name="Object_950" geometry={nodes.Object_950.geometry} material={materials.earth} skeleton={nodes.Object_950.skeleton} />
                            <skinnedMesh name="Object_952" geometry={nodes.Object_952.geometry} material={materials.earth} skeleton={nodes.Object_952.skeleton} />
                            <skinnedMesh name="Object_954" geometry={nodes.Object_954.geometry} material={materials.earth} skeleton={nodes.Object_954.skeleton} />
                            <skinnedMesh name="Object_956" geometry={nodes.Object_956.geometry} material={materials.earth} skeleton={nodes.Object_956.skeleton} />
                            <skinnedMesh name="Object_958" geometry={nodes.Object_958.geometry} material={materials.earth} skeleton={nodes.Object_958.skeleton} />
                            <skinnedMesh name="Object_960" geometry={nodes.Object_960.geometry} material={materials.earth} skeleton={nodes.Object_960.skeleton} />
                            <skinnedMesh name="Object_962" geometry={nodes.Object_962.geometry} material={materials.earth} skeleton={nodes.Object_962.skeleton} />
                            <skinnedMesh name="Object_964" geometry={nodes.Object_964.geometry} material={materials.earth} skeleton={nodes.Object_964.skeleton} />
                            <skinnedMesh name="Object_966" geometry={nodes.Object_966.geometry} material={materials.earth} skeleton={nodes.Object_966.skeleton} />
                            <skinnedMesh name="Object_968" geometry={nodes.Object_968.geometry} material={materials.earth} skeleton={nodes.Object_968.skeleton} />
                            <skinnedMesh name="Object_970" geometry={nodes.Object_970.geometry} material={materials.earth} skeleton={nodes.Object_970.skeleton} />
                            <skinnedMesh name="Object_972" geometry={nodes.Object_972.geometry} material={materials.earth} skeleton={nodes.Object_972.skeleton} />
                            <skinnedMesh name="Object_974" geometry={nodes.Object_974.geometry} material={materials.earth} skeleton={nodes.Object_974.skeleton} />
                            <skinnedMesh name="Object_976" geometry={nodes.Object_976.geometry} material={materials.earth} skeleton={nodes.Object_976.skeleton} />
                            <skinnedMesh name="Object_978" geometry={nodes.Object_978.geometry} material={materials.earth} skeleton={nodes.Object_978.skeleton} />
                            <skinnedMesh name="Object_980" geometry={nodes.Object_980.geometry} material={materials.earth} skeleton={nodes.Object_980.skeleton} />
                            <skinnedMesh name="Object_982" geometry={nodes.Object_982.geometry} material={materials.earth} skeleton={nodes.Object_982.skeleton} />
                            <skinnedMesh name="Object_984" geometry={nodes.Object_984.geometry} material={materials.earth} skeleton={nodes.Object_984.skeleton} />
                            <skinnedMesh name="Object_986" geometry={nodes.Object_986.geometry} material={materials.earth} skeleton={nodes.Object_986.skeleton} />
                            <skinnedMesh name="Object_988" geometry={nodes.Object_988.geometry} material={materials.earth} skeleton={nodes.Object_988.skeleton} />
                            <skinnedMesh name="Object_990" geometry={nodes.Object_990.geometry} material={materials.earth} skeleton={nodes.Object_990.skeleton} />
                            <skinnedMesh name="Object_992" geometry={nodes.Object_992.geometry} material={materials.earth} skeleton={nodes.Object_992.skeleton} />
                            <skinnedMesh name="Object_994" geometry={nodes.Object_994.geometry} material={materials.earth} skeleton={nodes.Object_994.skeleton} />
                            <skinnedMesh name="Object_996" geometry={nodes.Object_996.geometry} material={materials.earth} skeleton={nodes.Object_996.skeleton} />
                            <skinnedMesh name="Object_998" geometry={nodes.Object_998.geometry} material={materials.earth} skeleton={nodes.Object_998.skeleton} />
                          </group>
                        </group>
                      </group>
                      <group name="center" scale={10.611}>
                        <mesh name="center_globe_int_0" geometry={nodes.center_globe_int_0.geometry} material={materials.globe_int} />
                      </group>
                    </group>
                    <group name="holo">
                      <group name="group51">
                        <group name="pCone1">
                          <mesh name="pCone1_logo_0" geometry={nodes.pCone1_logo_0.geometry} material={materials.logo} />
                        </group>
                        <group name="pTorus28" position={[1.075, 6.99, 0]} rotation={[0, 0, -0.358]}>
                          <mesh name="pTorus28_logo_0" geometry={nodes.pTorus28_logo_0.geometry} material={materials.logo} />
                        </group>
                      </group>
                      <group name="MASH2_ReproMesh2" position={[0, 0.552, 0]}>
                        <mesh name="MASH2_ReproMesh2_logo_0" geometry={nodes.MASH2_ReproMesh2_logo_0.geometry} material={materials.logo} />
                      </group>
                      <group name="MASH2_ReproMesh3">
                        <mesh name="MASH2_ReproMesh3_logo_0" geometry={nodes.MASH2_ReproMesh3_logo_0.geometry} material={materials.logo} />
                      </group>
                      <group name="MASH2_ReproMesh4">
                        <mesh name="MASH2_ReproMesh4_logo_0" geometry={nodes.MASH2_ReproMesh4_logo_0.geometry} material={materials.logo} />
                      </group>
                      <group name="MASH2_ReproMesh6" position={[0, 1.771, 0]}>
                        <mesh name="MASH2_ReproMesh6_logo_0" geometry={nodes.MASH2_ReproMesh6_logo_0.geometry} material={materials.logo} />
                      </group>
                      <group name="MASH2_ReproMesh7">
                        <mesh name="MASH2_ReproMesh7_logo_0" geometry={nodes.MASH2_ReproMesh7_logo_0.geometry} material={materials.logo} />
                      </group>
                      <group name="MASH2_ReproMesh8">
                        <mesh name="MASH2_ReproMesh8_logo_0" geometry={nodes.MASH2_ReproMesh8_logo_0.geometry} material={materials.logo} />
                      </group>
                      <group name="pDisc2" scale={2.153}>
                        <mesh name="pDisc2_logo_0" geometry={nodes.pDisc2_logo_0.geometry} material={materials.logo} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}