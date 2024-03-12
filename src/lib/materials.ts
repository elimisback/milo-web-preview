import * as THREE from 'three'

import { digest } from "@lib/util"

export type Material = THREE.MeshPhysicalMaterial
export type ID = string

const materials: Record<ID, Material> = Object.create(null)

type PossibleMaterialParameters = THREE.MeshStandardMaterialParameters
type MaterialParameters = PossibleMaterialParameters
                        & Required<Pick<PossibleMaterialParameters, "name" | "color">>

function register(id: string | undefined, params: MaterialParameters) {
  params.roughness ??= 0.8
  params.metalness ??= 0
  params.envMapIntensity ??= 0.4

  id ??= digest(JSON.stringify(params))

  params.userData ??= Object.create(null)
  params.userData.id = id

  materials[id] = new THREE.MeshPhysicalMaterial(params)
}

register(undefined, { name: "Anthracite", color: 0x45494c })
register("black", { name: "Black", color: 0x222222 })
register(undefined, { name: "Grey", color: 0xaea89c })
register(undefined, { name: "Light Blue", color: 0x006db6 })
register(undefined, { name: "Makita Blue", color: 0x00646f })
register(undefined, { name: "Neon Pink", color: 0xe74589 })
register(undefined, { name: "Orange", color: 0xff5900 })
register(undefined, { name: "Purple", color: 0x82558b })
register("red", { name: "Red", color: 0xbf2532 })
register(undefined, { name: "Silver", color: 0x65696b, metalness: 0.2, roughness: 0.4 })
register(undefined, { name: "Steel Blue", color: 0x304262 })
register(undefined, { name: "White", color: 0xe3e0d4 })
register(undefined, { name: "Neon Yellow", color: 0xdbf415 })
register(undefined, { name: "Rat Rig Green", color: 0x8fe106 })

export default materials

export function id(material: Material): ID {
  return material.userData.id
}

export function findById(id: ID): Material {
  if (!(id in materials)) {
    throw new Error(`Material not found: ${id}`)
  }

  return materials[id]
}