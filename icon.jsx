// Focus Board Icon — 3×3 empty quilt, square
// Use at any size: Skool icon, app icon, thumbnail

export default function FocusBoardIcon() {
  // 9 tiles cycling through full palette
  const tiles = [
    { c1:"#3D0D5E", c2:"#2A0838", border:"rgba(212,168,83,.50)" },          // deep purple
    { c1:"#E8C97E", c2:"#D4A853", border:"rgba(255,255,255,.60)" },          // champagne
    { c1:"#4A0040", c2:"#2A0838", border:"rgba(212,168,83,.50)" },          // sacred plum
    { c1:"#FBF8F3", c2:"#F5EFE6", border:"rgba(212,168,83,.75)" },          // cream
    { c1:"#7A1060", c2:"#4A0040", border:"rgba(212,168,83,.55)" },          // plum rose  ← centre
    { c1:"#C8A0C0", c2:"#A87CA0", border:"rgba(255,255,255,.50)" },         // dusty mauve
    { c1:"#480A52", c2:"#3D0D5E", border:"rgba(212,168,83,.45)" },          // deep violet
    { c1:"#D4A853", c2:"#A87830", border:"rgba(255,255,255,.55)" },         // burnished gold
    { c1:"#4A0040", c2:"#7A1060", border:"rgba(212,168,83,.50)" },          // plum-rose blend
  ];

  return (
    <div style={{
      width:"100%", aspectRatio:"1/1", maxWidth:500,
      background:"linear-gradient(145deg,#3D0D5E 0%,#480A52 28%,#4A0040 62%,#2A0838 100%)",
      display:"flex", alignItems:"center", justifyContent:"center",
      padding:"18%", position:"relative", overflow:"hidden",
      borderRadius:16,
    }}>
      {/* Subtle inner glow */}
      <div style={{
        position:"absolute", inset:0,
        background:"radial-gradient(circle at 50% 50%, rgba(122,16,96,0.40) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      {/* 3×3 grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridTemplateRows:"repeat(3,1fr)",
        gap:"4%",
        width:"100%", aspectRatio:"1/1",
        position:"relative", zIndex:1,
      }}>
        {tiles.map((t,i)=>(
          <div key={i} style={{
            borderRadius:"12%",
            background:`linear-gradient(155deg,${t.c1},${t.c2})`,
            border:`1.5px solid ${t.border}`,
            aspectRatio:"1/1",
            boxShadow:"0 3px 10px rgba(0,0,0,0.35)",
          }} />
        ))}
      </div>
    </div>
  );
}
