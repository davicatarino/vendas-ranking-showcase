
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Users, Calendar, Award, AlertTriangle } from "lucide-react";

const SalesInsights = () => {
  const insights = [
    {
      title: "Vendedor do Mês",
      description: "Ana Silva superou a meta em 52%",
      value: "R$ 487.5K",
      trend: "+15.2%",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "Maior Crescimento",
      description: "Carlos Santos cresceu 12.8% vs mês anterior",
      value: "+12.8%",
      trend: "Destaque",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Meta da Equipe",
      description: "85% da meta mensal atingida",
      value: "85%",
      trend: "Faltam 5 dias",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Atenção Necessária",
      description: "3 vendedores abaixo da meta individual",
      value: "3",
      trend: "Necessita suporte",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const topPerformers = [
    { name: "Ana Silva", metric: "Maior faturamento", value: "R$ 487K" },
    { name: "Mariana Costa", metric: "Mais negócios fechados", value: "42 deals" },
    { name: "Carlos Santos", metric: "Melhor ticket médio", value: "R$ 11.2K" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          📊 Insights Estratégicos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {insights.map((insight, index) => (
            <Card key={index} className={`p-4 ${insight.bgColor} ${insight.borderColor} border-2 hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start justify-between mb-3">
                <insight.icon className={`h-8 w-8 ${insight.color}`} />
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${insight.bgColor} ${insight.color}`}>
                  {insight.trend}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">{insight.value}</p>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-0 shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-gray-900">🏆 Destaques da Equipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-900">{performer.name}</p>
                <p className="text-sm text-gray-600 mb-2">{performer.metric}</p>
                <p className="text-lg font-bold text-indigo-600">{performer.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SalesInsights;
