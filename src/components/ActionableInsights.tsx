
import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Users, Target, Lightbulb, ArrowRight } from "lucide-react";

const ActionableInsights = () => {
  const actionItems = [
    {
      priority: "Alta",
      title: "Suporte para Vendedores em Dificuldade",
      description: "3 vendedores estão abaixo de 80% da meta individual",
      action: "Agendar sessões de coaching individual",
      impact: "Potencial aumento de 15-20% nas vendas",
      icon: Users,
      color: "border-red-200 bg-red-50",
      priorityColor: "bg-red-100 text-red-800"
    },
    {
      priority: "Alta",
      title: "Replicar Estratégia da Ana Silva",
      description: "Ana superou a meta em 22% usando nova abordagem",
      action: "Compartilhar melhores práticas em reunião da equipe",
      impact: "Aumento médio de 10% na equipe",
      icon: TrendingUp,
      color: "border-green-200 bg-green-50",
      priorityColor: "bg-green-100 text-green-800"
    },
    {
      priority: "Média",
      title: "Otimizar Processo de Qualificação",
      description: "Taxa de conversão de leads está em 65%",
      action: "Revisar critérios de qualificação de leads",
      impact: "Melhoria de 5-8% na conversão",
      icon: Target,
      color: "border-yellow-200 bg-yellow-50",
      priorityColor: "bg-yellow-100 text-yellow-800"
    },
    {
      priority: "Média",
      title: "Foco em Produto A",
      description: "Produto A representa 35% das vendas com maior margem",
      action: "Criar campanha específica para Produto A",
      impact: "Aumento potencial de 12% na margem",
      icon: Lightbulb,
      color: "border-blue-200 bg-blue-50",
      priorityColor: "bg-blue-100 text-blue-800"
    }
  ];

  const kpis = [
    {
      title: "Meta Mensal Restante",
      current: "85%",
      target: "100%",
      days: "5 dias",
      status: "Em risco",
      recommendation: "Acelerar follow-ups e fechamentos pendentes"
    },
    {
      title: "Performance da Equipe",
      current: "4/6",
      target: "6/6",
      days: "vendedores na meta",
      status: "Atenção",
      recommendation: "Intensificar coaching para 2 vendedores"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        🚀 Ações Recomendadas
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <Card key={index} className="p-6 border-l-4 border-l-orange-500">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-900">{kpi.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                kpi.status === 'Em risco' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {kpi.status}
              </span>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-2xl font-bold text-gray-900">{kpi.current}</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="text-lg font-semibold text-green-600">{kpi.target}</span>
              <span className="text-sm text-gray-600">({kpi.days})</span>
            </div>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
              💡 {kpi.recommendation}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {actionItems.map((item, index) => (
          <Card key={index} className={`p-6 ${item.color} border-2 hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-start justify-between mb-4">
              <item.icon className="h-8 w-8 text-gray-700" />
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.priorityColor}`}>
                {item.priority}
              </span>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{item.description}</p>
            
            <div className="bg-white p-3 rounded-lg mb-3">
              <p className="text-sm font-medium text-gray-900 mb-1">Ação Recomendada:</p>
              <p className="text-sm text-gray-700">{item.action}</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="font-medium text-green-700">{item.impact}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 border-0">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-6 w-6 text-indigo-600" />
          <h3 className="text-lg font-bold text-indigo-900">Resumo Executivo</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-indigo-800 mb-2">Próximos 7 dias:</h4>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Reunião individual com 3 vendedores em dificuldade</li>
              <li>• Workshop sobre técnicas da Ana Silva</li>
              <li>• Revisão do processo de qualificação</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-800 mb-2">Potencial de melhoria:</h4>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• +25% nas vendas com coaching adequado</li>
              <li>• +15% na conversão com melhor qualificação</li>
              <li>• +12% na margem focando Produto A</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ActionableInsights;
