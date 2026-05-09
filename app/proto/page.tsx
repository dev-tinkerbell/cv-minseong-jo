import ProtoA from "./ProtoA";
import ProtoC from "./ProtoC";
import ProtoD from "./ProtoD";
import ProtoCWithStats from "./ProtoCWithStats";

const protos = [
  {
    id: "A",
    name: "4-column Grid + Keywords + Stats",
    desc: "포커스 4개 가로 카드 → 키워드 2×2 + 통계 우측",
    component: ProtoA,
  },
  {
    id: "C",
    name: "Numbered List + Stacked Keywords",
    desc: "좌: 번호형 포커스 리스트 / 우: 키워드 세로 스택 + 통계",
    component: ProtoC,
  },
  {
    id: "D",
    name: "Large Keyword Cards + Focus Tags",
    desc: "키워드 대형 카드 + 포커스 태그 스트립 + 통계",
    component: ProtoD,
  },
];

const statsVariants = [
  { id: "①", name: "Inline divider", desc: "박스 없이 세로선으로 구분" },
  { id: "②", name: "Top-accent cards", desc: "상단 컬러 라인 + 개별 카드" },
  { id: "③", name: "Minimal mono", desc: "모노스페이스 텍스트 + 가로선" },
  { id: "④", name: "Stacked progress", desc: "숫자 + 가로 progress bar" },
];

export default function ProtoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="px-4 md:px-8 lg:px-16 py-16">

        {/* Layout variants */}
        <div className="max-w-7xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#4a7fff" }}>
            UI Prototype — Layout
          </p>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#f0f4ff" }}>
            Research Identity
          </h1>
          <p className="text-sm" style={{ color: "#6b7280" }}>
            레이아웃 3가지 + 통계 UI 4가지 비교
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {protos.map(({ id, name, desc, component: Component }) => (
            <section key={id}>
              <div className="max-w-7xl mx-auto mb-8 flex items-baseline gap-4">
                <span className="font-mono text-4xl font-bold" style={{ color: "#1e1e2e" }}>
                  {id}
                </span>
                <div>
                  <h2 className="text-lg font-semibold" style={{ color: "#f0f4ff" }}>{name}</h2>
                  <p className="text-xs font-mono" style={{ color: "#6b7280" }}>{desc}</p>
                </div>
              </div>
              <div className="rounded-xl px-6 md:px-10 py-10" style={{ backgroundColor: "#0d0d14", border: "1px solid #1e1e2e" }}>
                <Component />
              </div>
            </section>
          ))}
        </div>

        {/* Stats variants — C 레이아웃 기반 */}
        <div className="max-w-7xl mx-auto mt-32 mb-16">
          <div className="h-px mb-16" style={{ backgroundColor: "#1e1e2e" }} />
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#4a7fff" }}>
            UI Prototype — Stats only (C 레이아웃 기반)
          </p>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#f0f4ff" }}>
            통계 UI 4가지
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {statsVariants.map(({ id, name, desc }, i) => (
            <section key={id}>
              <div className="max-w-7xl mx-auto mb-8 flex items-baseline gap-4">
                <span className="font-mono text-4xl font-bold" style={{ color: "#1e1e2e" }}>{id}</span>
                <div>
                  <h2 className="text-lg font-semibold" style={{ color: "#f0f4ff" }}>{name}</h2>
                  <p className="text-xs font-mono" style={{ color: "#6b7280" }}>{desc}</p>
                </div>
              </div>
              <div className="rounded-xl px-6 md:px-10 py-10" style={{ backgroundColor: "#0d0d14", border: "1px solid #1e1e2e" }}>
                <ProtoCWithStats variant={i} />
              </div>
            </section>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-20 text-center">
          <a href="/" className="font-mono text-xs" style={{ color: "#2a2a3a" }}>← Back to main</a>
        </div>
      </div>
    </div>
  );
}
