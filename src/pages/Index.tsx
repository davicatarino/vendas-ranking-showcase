
import SalesRanking from "@/components/SalesRanking";
import SalesStats from "@/components/SalesStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Ranking de Vendedores
          </h1>
          <p className="text-gray-600 text-lg">Acompanhe o desempenho da sua equipe de vendas</p>
        </div>
        
        <SalesStats />
        <SalesRanking />
      </div>
    </div>
  );
};

export default Index;
