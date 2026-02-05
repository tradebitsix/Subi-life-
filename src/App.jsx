import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Car() {
  return (
    <mesh rotation={[0.2, 0.4, 0]}>
      <boxGeometry args={[3, 1, 1.5]} />
      <meshStandardMaterial color="#0057FF" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function Stage() {
  return (
    <div className="w-full h-[420px] rounded-3xl overflow-hidden glass">
      <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} />
        <Car />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState("home")

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-5xl font-bold text-sprayYellow text-center">SUBI LIFE</h1>

      <div className="flex justify-center gap-6 mt-6">
        {["home","build","gallery"].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-xl uppercase tracking-widest transition ${
              tab === t ? "bg-sprayYellow text-black" : "border border-white/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <Stage />
      </div>

      <AnimatePresence mode="wait">
        {tab === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 text-center text-white/70"
          >
            Graffiti alley + morph glass + 3D WRX stage.
          </motion.div>
        )}
        {tab === "build" && (
          <motion.div key="build" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10">
            <div className="glass p-6 rounded-2xl">
              Stage 2 → Injectors → Boost Solenoid → Turbo → Clutch.
            </div>
          </motion.div>
        )}
        {tab === "gallery" && (
          <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10">
            <div className="glass p-6 rounded-2xl">
              Drop your WRX shots here.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
