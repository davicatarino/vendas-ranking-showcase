
import { Card } from "@/components/ui/card";

interface PodiumCardProps {
  seller: {
    name: string;
    sales: number;
    avatar: string;
    growth: number;
  };
  height: string;
  medal: string;
  isWinner?: boolean;
}

const PodiumCard = ({ seller, height, medal, isWinner }: PodiumCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 relative">
        <img
          src={seller.avatar}
          alt={seller.name}
          className={`w-16 h-16 rounded-full object-cover border-4 ${
            isWinner ? 'border-yellow-400' : 'border-gray-300'
          } shadow-lg`}
        />
        <div className="absolute -top-2 -right-2 text-2xl">{medal}</div>
      </div>
      
      <Card className={`${height} w-32 bg-gradient-to-t ${
        isWinner 
          ? 'from-yellow-400 to-yellow-300' 
          : 'from-gray-300 to-gray-200'
      } border-0 shadow-lg flex flex-col justify-center items-center text-center p-2`}>
        <p className="font-bold text-sm text-gray-800 mb-1">{seller.name}</p>
        <p className="text-xs font-semibold text-gray-700">
          R$ {seller.sales.toLocaleString()}
        </p>
        <p className="text-xs text-green-600 font-medium">
          +{seller.growth}%
        </p>
      </Card>
    </div>
  );
};

export default PodiumCard;
