
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface SellerCardProps {
  seller: {
    position: number;
    name: string;
    sales: number;
    avatar: string;
    growth: number;
    deals: number;
  };
}

const SellerCard = ({ seller }: SellerCardProps) => {
  const getPositionColor = (position: number) => {
    if (position === 1) return "text-yellow-600 bg-yellow-100";
    if (position === 2) return "text-gray-600 bg-gray-100";
    if (position === 3) return "text-orange-600 bg-orange-100";
    return "text-blue-600 bg-blue-100";
  };

  const getMedal = (position: number) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return "";
  };

  return (
    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        {/* Posição */}
        <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${getPositionColor(seller.position)}`}>
          <span className="mr-1">{getMedal(seller.position)}</span>
          {seller.position}
        </div>

        {/* Avatar */}
        <img
          src={seller.avatar}
          alt={seller.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />

        {/* Informações */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{seller.name}</h3>
          <p className="text-sm text-gray-600">{seller.deals} negócios fechados</p>
        </div>

        {/* Vendas e Growth */}
        <div className="text-right">
          <p className="font-bold text-lg text-gray-900">
            R$ {seller.sales.toLocaleString()}
          </p>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+{seller.growth}%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SellerCard;
