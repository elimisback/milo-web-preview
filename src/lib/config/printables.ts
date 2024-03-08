import type { ColorRole } from "../config"

export type Instruction =
  { type: "print", color: ColorRole } |
  { type: "hide" }

type ObjectPath = string

export type Printable = {
  name?: string
  group?: string
  uuid?: string
  instruction: Instruction

  // A single thing might have multiple model paths, e.g. a mirrored part.
  path: ObjectPath[]

  // Not strictly needed, but makes it easier to double-check.
  stl: string
}

const printables: Printable[] = []

// 65mm Spindle
printables.push({
  uuid: "265ec0ef-ada2-4e32-806d-dd2eaae4b23d",
  path: ["Spindle_mount_65mm_part_A_(1)"],
  stl: "STL Files/Minimill Main/Spindle Mount/[a] Spindle Mount 65mm Part A x1.stl",
  instruction: { type: "hide" }
})
printables.push({
  path: ["SMH_65mm_part_B1", "SMH_65mm_part_B"],
  stl: "STL Files/Minimill Main/Spindle Mount/[a] Spindle Mount 65mm Part B x1.stl",
  instruction: { type: "hide" }
})

// Spindle
printables.push({
  path: ["Spindle_mount_80mm_part_A"],
  stl: "STL Files/Minimill Main/Spindle Mount/[a] Spindle Mount 80mm Part A x1.stl",
  instruction: { type: "print", color: "accent" }
})
printables.push({ path: ["SMH_80mm_part_B_(1)"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/Spindle Mount/Spindle Mount 80mm Part B x1.stl" })
printables.push({ path: ["Logo_insert"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Spindle Mount/Logo Insert x1.stl" })

// TODO: Hide these in the model?
// STL Files/Minimill Main/Spindle Mount/[a] Spindle Mount 65mm Part A x1.stl
// STL Files/Minimill Main/Spindle Mount/Spindle Mount 65mm Part B x1.stl

// X Axis
printables.push({ path: ["X_axis_motor_mount"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/X Axis STLs/X Axis Motor Mount x1.stl" })
printables.push({ path: ["X_axis_Bearing_Block"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/X Axis STLs/X Axis Bearing Block x1.stl" })
printables.push({ path: ["X_axis_anti_backlash_Nut"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/X Axis STLs/X Axis Anti Backlash Nut x1.stl" })

// Y Axis
printables.push({ path: ["Y_axis_bearing_block"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/Y Axis STLs/Y Axis Bearing Block x1.stl" })
printables.push({ path: ["Y_axis_anti_backlash_nut"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/Y Axis STLs/Y Axis Anti Backlash Nut x1.stl" })
printables.push({ path: ["Y_axis_motor_mount_(1)"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/Y Axis STLs/Y Axis Motor Mount x1.stl" })

printables.push({ path: ["Y_drag_chain_mount(Mirror)"], instruction: { type: "print", color: "accent" }, stl: "STL Files/Minimill Main/Cable Chain Mounts/[a] Y Drag Chain Mount x1.stl" })
printables.push({ path: ["XY_dragchain_transition"], instruction: { type: "print", color: "accent" }, stl: "STL Files/Minimill Main/Cable Chain Mounts/[a] XY Drag Chain Transition x1.stl" })

// Z Axis
printables.push({ path: ["Z_axis_motor_mount_(1)"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Z Axis STLs/Z Motor Mount x1.stl" })
printables.push({ path: ["Z_Axis_bearing_block"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Z Axis STLs/[a] Z Axis Bearing Block x1.stl" })
printables.push({ path: ["Z_axis_anti_backlash_nut"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/Z Axis STLs/Z Axis Anti Backlash Nut x1.stl" })
printables.push({ path: ["Ballast_box"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Minimill Main/Main Column/Ballast Box x1.stl" })
printables.push({ path: ["Ballast_cap"], instruction: { type: "print", color: "accent" }, stl: "STL Files/Minimill Main/Main Column/Ballast Cap x1.stl" })

// TODO: Find these
// STL Files/Minimill Main/Main Column/Column Plate A x1.stl
// STL Files/Minimill Main/Main Column/Column Plate A Mirror x1.stl
// STL Files/Minimill Main/Main Column/Column Plate B x1.stl
// STL Files/Minimill Main/Main Column/Column Plate B Mirror x1.stl
// STL Files/Minimill Main/Main Column/Column Plate C x1.stl
// STL Files/Minimill Main/Main Column/Column Plate C Mirror x1.stl
// STL Files/Minimill Main/Main Column/Z Reinforcement Bracket x1.stl
// STL Files/Minimill Main/Main Column/Z Reinforcement Bracket Mirror x1.stl

printables.push({ path: ["Z_drag_chain_mount_B"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Cable Chain Mounts/[a] Z Drag Chain Mount B x1.stl" })
printables.push({ path: ["Z_drag_chain_mount_A_(1)"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Cable Chain Mounts/[a] Z Drag Chain Mount A x1.stl" })
printables.push({ path: ["Z_Wire_redirect_hook"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Cable Chain Mounts/[a] Z Cable Redirect Hook x1.stl" })
printables.push({ path: ["Z_axis_cable_chain_backer"], instruction: { type: "print", color: "secondary" }, stl: "STL Files/Minimill Main/Cable Chain Mounts/[a} Z Axis Cable Chain Backer x1.stl" });

// Table
((stl: string, color: ColorRole) => {
  printables.push({ path: ["handwheel_handle_(1)_(1)"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["handwheel_handle_(1)"], instruction: { type: "print", color }, stl })
})("STL Files/Minimill Main/Hand Wheels/Handwheel Handle x2.stl", "secondary");

((stl: string, color: ColorRole) => {
  printables.push({ path: ["handwheel_(1)"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["handwheel"], instruction: { type: "print", color }, stl });
})("STL Files/Minimill Main/Hand Wheels/Handwheel Body x2 .stl", "secondary");

((stl: string, color: ColorRole) => {
  printables.push({ path: ["X_axis_Table_support_(Centres)_(1)"], stl, instruction: { type: "print", color } })
  printables.push({ path: ["X_axis_Table_support_(Centres)"], stl, instruction: { type: "print", color } })
})("STL Files/Minimill Main/X Axis STLs/X Axis Table Support Centre x2 .stl", "primary");

((stl: string, color: ColorRole) => {
  printables.push({ path: ["X_axis_Table_support_(ends)"], stl, instruction: { type: "print", color } })
  printables.push({ path: ["X_axis_Table_support_(ends)_(3)"], stl, instruction: { type: "print", color } })
  printables.push({ path: ["X_axis_Table_support_(ends)_(1)"], stl, instruction: { type: "print", color } })
  printables.push({ path: ["X_axis_Table_support_(ends)_(2)"], stl, instruction: { type: "print", color } })
})("STL Files/Minimill Main/X Axis STLs/X Axis Table Support Ends x4 .stl", "primary");

// Misc
((stl: string, color: ColorRole) => {
  printables.push({ path: ["Table_bolt_down_(2)"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["Table_bolt_down"], instruction: { type: "print", color }, stl })
})("STL Files/Electronics Table/[a] Table Bolt Down Bracket B x2.stl", "tertiary");

((stl: string, color: ColorRole) => {
  printables.push({ path: ["table_Bolt_downs"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["Table_bolt_down_(1)"], instruction: { type: "print", color }, stl })
})("STL Files/Electronics Table/[a] Table Bolt Down Bracket A x2.stl", "tertiary");

((stl: string, color: ColorRole) => {
  printables.push({ path: ["TPU_foot"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["TPU_foot_(1)"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["TPU_foot_(2)"], instruction: { type: "print", color }, stl })
  printables.push({ path: ["TPU_foot_(3)"], instruction: { type: "print", color }, stl })
})("STL Files/Electronics Table/TPU Feet x4.stl", "tertiary");

printables.push({ path: ["Skirt_front"], instruction: { type: "print", color: "tertiary" }, stl: "STL Files/Electronics Table/Skirt Front A Solid x1.stl" })
// STL Files/Electronics Table/Skirt Front A Solid x1.stl
// STL Files/Electronics Table/Skirt Front B E-Stop x1.stl

printables.push({ path: ["Skirt_Rear"], instruction: { type: "print", color: "tertiary" }, stl: "STL Files/Electronics Table/Rear Skirt A x1.stl" })
// STL Files/Electronics Table/Rear Skirt A x1.stl
// STL Files/Electronics Table/Rear Skirt B x1.stl

// Electrical
printables.push({ path: ["PSU_mounting_bracket_(1)_(1)"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Electronics Table/PSU Mounting Bracket A x2.stl" });
// STL Files/Electronics Table/PSU Mounting Bracket A x2.stl

((stl: string, color: ColorRole) => {
printables.push({ path: ["PSU_mounting_bracket"], stl, instruction: { type: "print", color } })
printables.push({ path: ["PSU_mounting_bracket_(1)"], stl, instruction: { type: "print", color } })
})("STL Files/Electronics Table/PSU Mounting Bracket B x2.stl", "primary");

printables.push({ path: ["Mainboard_mount"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Electronics Table/Mainboard Mount x1.stl" })
printables.push({ path: ["Cable_channel_"], instruction: { type: "print", color: "primary" }, stl: "STL Files/Electronics Table/Cable Channel x1.stl" })
// STL Files/Electronics Table/Cable Channel Cover x1.stl

export default printables