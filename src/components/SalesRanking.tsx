
import { Card } from "@/components/ui/card";
import SellerCard from "./SellerCard";
import PodiumCard from "./PodiumCard";

const SalesRanking = () => {
  const sellers = [
    {
      id: 1,
      name: "Ana Silva",
      sales: 487500,
      position: 1,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face",
      growth: 15.2,
      deals: 45
    },
    {
      id: 2,
      name: "Carlos Santos",
      sales: 425800,
      position: 2,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      growth: 12.8,
      deals: 38
    },
    {
      id: 3,
      name: "Mariana Costa",
      sales: 398200,
      position: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      growth: 9.5,
      deals: 42
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      sales: 365400,
      position: 4,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      growth: 8.1,
      deals: 35
    },
    {
      id: 5,
      name: "Julia Ferreira",
      sales: 342900,
      position: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      growth: 7.3,
      deals: 31
    },
    {
      id: 6,
      name: "Ricardo Lima",
      sales: 298700,
      position: 6,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      growth: 5.9,
      deals: 28
    }
  ];

  const topThree = sellers.slice(0, 3);
  const remaining = sellers.slice(3);

  return (
    <div className="space-y-8">
      {/* Pódio dos Top 3 */}
      <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          🏆 Top 3 Vendedores
        </h2>
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-6">
          {/* 2º Lugar */}
          <PodiumCard seller={topThree[1]} height="h-32" medal="🥈" />
          
          {/* 1º Lugar */}
          <PodiumCard seller={topThree[0]} height="h-40" medal="🥇" isWinner />
          
          {/* 3º Lugar */}
          <PodiumCard seller={topThree[2]} height="h-24" medal="🥉" />
        </div>
      </Card>

      {/* Ranking Completo */}
      <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Ranking Completo</h2>
        <div className="space-y-4">
          {sellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SalesRanking;
