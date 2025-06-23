
import { Card } from "@/components/ui/card";
import { TrendingUp, Award, BarChart } from "lucide-react";

const SalesStats = () => {
  const stats = [
    {
      title: "Vendas Totais",
      value: "R$ 2.847.530",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Meta do Mês",
      value: "85%",
      change: "+5.2%",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Vendedores Ativos",
      value: "24",
      change: "+2",
      icon: BarChart,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className={`text-sm font-medium ${stat.color}`}>{stat.change} vs mês anterior</p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SalesStats;
