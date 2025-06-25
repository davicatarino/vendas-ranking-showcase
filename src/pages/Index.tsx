
import SalesRanking from "@/components/SalesRanking";
import SalesStats from "@/components/SalesStats";
import SalesInsights from "@/components/SalesInsights";
import SalesDashboard from "@/components/SalesDashboard";
import ActionableInsights from "@/components/ActionableInsights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <Tabs defaultValue="ranking" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="ranking">Ranking</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="acoes">Ações</TabsTrigger>
          </TabsList>

          <TabsContent value="ranking">
            <SalesRanking />
          </TabsContent>

          <TabsContent value="insights">
            <SalesInsights />
          </TabsContent>

          <TabsContent value="dashboard">
            <SalesDashboard />
          </TabsContent>

          <TabsContent value="acoes">
            <ActionableInsights />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
