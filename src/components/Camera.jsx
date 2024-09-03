import React, { useRef , useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


function Camera(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/camera.glb')
  const { actions, names } = useAnimations(animations, group)

  console.log(names)

  useEffect(() => {
    // Démarrer toutes les animations disponibles
    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });

    // Nettoyage: arrêter les animations lors du démontage du composant
    return () => {
      Object.keys(actions).forEach((key) => {
        actions[key]?.stop();
      });
    };
  }, [actions]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[-0.011, -0.209, 0.012]} />
        <group name="Empty001" position={[0.641, 0, 0]} />
        <group name="middle_body" position={[-0.081, 0.207, 0.022]}>
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.Material}
          />
        </group>
        <group name="top_buttons" position={[-0.096, 0.41, 0.014]}>
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Cube009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="lens" position={[0.012, 0.195, 0.172]}>
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="Cylinder005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_2.geometry}
            material={materials['Material.007']}
          />
          <mesh
            name="Cylinder005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_3.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cylinder005_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_4.geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          name="lens_glass"
          castShadow
          receiveShadow
          geometry={nodes.lens_glass.geometry}
          material={materials['Material.004']}
          position={[0.012, 0.195, 0.168]}
        />
        <mesh
          name="lens_glass001"
          castShadow
          receiveShadow
          geometry={nodes.lens_glass001.geometry}
          material={materials['Material.004']}
          position={[0.012, 0.195, 0.178]}
        />
        <group name="top" position={[-0.079, 0.375, 0.022]}>
          <mesh
            name="Cube008"
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Cube008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube008_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_3.geometry}
            material={materials['Material.007']}
          />
        </group>
        <group name="bottom" position={[-0.081, 0.026, 0.022]}>
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Cube007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials.Material}
          />
        </group>
        <group name="display" position={[0.012, 0.195, -0.086]}>
          <mesh
            name="Cube011"
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials['Material.010']}
          />
        </group>
        <group name="Cube005" position={[0.01, 0.398, -0.014]}>
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="buttons_front" position={[-0.335, 0.152, -0.078]}>
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials['Material.010']}
          />
          <mesh
            name="Cylinder004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials['Material.003']}
          />
        </group>
      </group>
    </group>
  )
}

export default Camera

useGLTF.preload('/models/camera.glb')