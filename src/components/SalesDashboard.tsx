
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SalesDashboard = () => {
  const monthlyData = [
    { month: 'Jan', vendas: 2100000, meta: 2500000 },
    { month: 'Fev', vendas: 2300000, meta: 2500000 },
    { month: 'Mar', vendas: 2650000, meta: 2500000 },
    { month: 'Abr', vendas: 2400000, meta: 2500000 },
    { month: 'Mai', vendas: 2847530, meta: 2500000 },
  ];

  const teamPerformance = [
    { name: 'Ana Silva', vendas: 487500, meta: 400000 },
    { name: 'Carlos Santos', vendas: 425800, meta: 400000 },
    { name: 'Mariana Costa', vendas: 398200, meta: 380000 },
    { name: 'Pedro Oliveira', vendas: 365400, meta: 380000 },
    { name: 'Julia Ferreira', vendas: 342900, meta: 350000 },
    { name: 'Ricardo Lima', vendas: 298700, meta: 320000 },
  ];

  const productData = [
    { name: 'Produto A', value: 35, color: '#8884d8' },
    { name: 'Produto B', value: 28, color: '#82ca9d' },
    { name: 'Produto C', value: 22, color: '#ffc658' },
    { name: 'Produto D', value: 15, color: '#ff7c7c' },
  ];

  const conversionData = [
    { stage: 'Leads', value: 1000 },
    { stage: 'Qualificados', value: 650 },
    { stage: 'Propostas', value: 320 },
    { stage: 'Negociação', value: 180 },
    { stage: 'Fechados', value: 95 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        📈 Dashboard Analítico
      </h2>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="trends">Tendências</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="conversion">Conversão</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Performance vs Meta - Equipe</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={teamPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value) => [`R$ ${value.toLocaleString()}`, '']} />
                  <Bar dataKey="meta" fill="#e5e7eb" name="Meta" />
                  <Bar dataKey="vendas" fill="#3b82f6" name="Vendas" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Evolução Mensal</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value) => [`R$ ${value.toLocaleString()}`, '']} />
                  <Line type="monotone" dataKey="vendas" stroke="#10b981" strokeWidth={3} name="Vendas" />
                  <Line type="monotone" dataKey="meta" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="Meta" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
              <h4 className="font-semibold text-green-800 mb-2">📊 Crescimento Médio</h4>
              <p className="text-2xl font-bold text-green-600">+9.8%</p>
              <p className="text-sm text-green-700">vs mês anterior</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Taxa de Conversão</h4>
              <p className="text-2xl font-bold text-blue-600">9.5%</p>
              <p className="text-sm text-blue-700">leads para vendas</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
              <h4 className="font-semibold text-purple-800 mb-2">💰 Ticket Médio</h4>
              <p className="text-2xl font-bold text-purple-600">R$ 8.9K</p>
              <p className="text-sm text-purple-700">por negócio</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Distribuição de Vendas por Produto</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Funil de Conversão</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversionData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="stage" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Taxa Qualificação</p>
                <p className="font-semibold text-blue-600">65%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Taxa Proposta</p>
                <p className="font-semibold text-green-600">49%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Taxa Negociação</p>
                <p className="font-semibold text-orange-600">56%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Taxa Fechamento</p>
                <p className="font-semibold text-purple-600">53%</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalesDashboard;
