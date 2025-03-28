import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", valor: 37 },
  { name: "Fev", valor: 23 },
  { name: "Mar", valor: 29 },
  { name: "Abr", valor: 30 },
  { name: "Mai", valor: 38 },
  { name: "Jun", valor: 42 },
  { name: "Jul", valor: 25 },
];

export default function MyChart() {
  return (
    <div className="p-6 bg-[var(--bg-primary-site)] border-1 border-white/40 rounded-xl shadow-md w-full/2 h-80">
      <h2 className="text-4 font-bold text-[var(--color-text-site)] mb-4">
        Vendas Mensais
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#ccc" }}
            />
            <YAxis tick={{ fill: "#666" }} axisLine={{ stroke: "#ccc" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />
            <Legend wrapperStyle={{ paddingTop: "10px" }} />
            <Bar
              dataKey="valor"
              name="Vendas"
              fill="#F17E92"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
