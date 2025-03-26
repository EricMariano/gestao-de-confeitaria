import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', valor: 400 },
  { name: 'Fev', valor: 300 },
  { name: 'Mar', valor: 600 },
  { name: 'Abr', valor: 800 },
];

export default function MyChart() {
  return (
    <div className=" bg-white w-132 h-80 rounded-lg shadow">
      <LineChart width={480} height={300} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="valor" stroke="#F17E92" />
      </LineChart>
    </div>
  );
}