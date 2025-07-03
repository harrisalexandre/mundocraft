import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Users, Clock, Zap } from 'lucide-react';

interface ServerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'online' | 'offline';
  players?: string;
}

const ServerCard = ({ title, description, icon, status = 'online', players }: ServerCardProps) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
        <div className="flex items-center space-x-2">
          {status && (
            <Badge variant={status === 'online' ? 'default' : 'destructive'} className="text-xs">
              {status === 'online' ? 'Online' : 'Offline'}
            </Badge>
          )}
          {players && (
            <Badge variant="secondary" className="text-xs">
              {players}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServerInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServerCard
        title="Servidor Principal"
        description="Vanilla Fabric 1.16.5 com melhor desempenho garantido"
        icon={<Server className="w-5 h-5 text-primary" />}
        status="online"
      />
      <ServerCard
        title="Jogadores Online"
        description="Suporte para até 20 jogadores simultâneos"
        icon={<Users className="w-5 h-5 text-secondary" />}
        players="5/20"
      />
      <ServerCard
        title="Disponibilidade"
        description="Servidor online 24 horas por dia, 7 dias por semana"
        icon={<Clock className="w-5 h-5 text-accent" />}
        status="online"
      />
      <ServerCard
        title="Performance"
        description="Otimizado para a melhor experiência de jogo"
        icon={<Zap className="w-5 h-5 text-gold" />}
        status="online"
      />
    </div>
  );
};

export { ServerCard, ServerInfo };