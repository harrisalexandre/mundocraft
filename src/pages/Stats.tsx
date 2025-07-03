import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Clock,
  Activity,
  Server,
  Wifi,
  HardDrive,
  Cpu,
  MemoryStick,
  Globe,
  Shield,
} from "lucide-react";

const Stats = () => {
  // Simulated real-time data
  const serverStats = {
    playersOnline: 5,
    maxPlayers: 20,
    uptime: "99.9%",
    ping: "23ms",
    tps: 19.8,
    memoryUsage: 65,
    cpuUsage: 45,
    diskUsage: 78,
  };

  const recentPlayers = [
    { name: "harrisalexandre", status: "online", lastSeen: "Agora" },
    { name: "rafaPF", status: "online", lastSeen: "Agora" },
    { name: "Miner_Pro", status: "offline", lastSeen: "3 horas atrás" },
    { name: "Redstone_Wizard", status: "offline", lastSeen: "2 horas atrás" },
    { name: "Castle_Architect", status: "offline", lastSeen: "5 horas atrás" },
  ];

  const serverInfo = [
    {
      title: "Jogadores Online",
      value: `${serverStats.playersOnline}/${serverStats.maxPlayers}`,
      icon: <Users className="w-5 h-5" />,
      color: "text-primary",
      progress: (serverStats.playersOnline / serverStats.maxPlayers) * 100,
    },
    {
      title: "Tempo de Atividade",
      value: serverStats.uptime,
      icon: <Clock className="w-5 h-5" />,
      color: "text-secondary",
      progress: 99.9,
    },
    {
      title: "Ping Médio",
      value: serverStats.ping,
      icon: <Wifi className="w-5 h-5" />,
      color: "text-gold",
      progress: 85,
    },
    {
      title: "TPS (Ticks/Segundo)",
      value: serverStats.tps.toFixed(1),
      icon: <Activity className="w-5 h-5" />,
      color: "text-accent",
      progress: (serverStats.tps / 20) * 100,
    },
  ];

  const systemStats = [
    {
      title: "Uso de CPU",
      value: `${serverStats.cpuUsage}%`,
      icon: <Cpu className="w-5 h-5" />,
      progress: serverStats.cpuUsage,
      color: serverStats.cpuUsage > 80 ? "bg-destructive" : "bg-primary",
    },
    {
      title: "Uso de Memória",
      value: `${serverStats.memoryUsage}%`,
      icon: <MemoryStick className="w-5 h-5" />,
      progress: serverStats.memoryUsage,
      color: serverStats.memoryUsage > 80 ? "bg-destructive" : "bg-secondary",
    },
    {
      title: "Espaço em Disco",
      value: `${serverStats.diskUsage}%`,
      icon: <HardDrive className="w-5 h-5" />,
      progress: serverStats.diskUsage,
      color: serverStats.diskUsage > 80 ? "bg-destructive" : "bg-gold",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Estatísticas
            </span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              do Servidor
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe em tempo real o desempenho do nosso servidor e veja quem
            está online na comunidade.
          </p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serverInfo.map((stat, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={stat.color}>{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Server Status & Players Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* System Performance */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="w-6 h-6 text-primary" />
                <span>Performance do Sistema</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {systemStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {stat.icon}
                      <span className="text-sm font-medium">{stat.title}</span>
                    </div>
                    <span className="text-sm font-bold">{stat.value}</span>
                  </div>
                  <Progress
                    value={stat.progress}
                    className={`h-2 ${stat.color}`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Players */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-secondary" />
                <span>Jogadores Recentes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPlayers.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {player.name.charAt(0)}
                      </div>
                      <span className="font-medium">{player.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          player.status === "online" ? "default" : "secondary"
                        }
                        className={
                          player.status === "online" ? "bg-primary" : ""
                        }
                      >
                        {player.status === "online" ? "Online" : "Offline"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {player.lastSeen}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Server Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-primary" />
                <span>Localização</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">País:</span>
                <span className="font-semibold">Brasil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Região:</span>
                <span className="font-semibold">São Paulo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Provedor:</span>
                <span className="font-semibold">DataCenter Premium</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-secondary" />
                <span>Segurança</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">DDoS Protection:</span>
                <Badge variant="default" className="bg-primary">
                  Ativo
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Backup:</span>
                <Badge variant="default" className="bg-secondary">
                  Diário
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monitoramento:</span>
                <Badge variant="default" className="bg-gold">
                  24/7
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-accent" />
                <span>Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">RAM:</span>
                <span className="font-semibold">8GB DDR4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">CPU:</span>
                <span className="font-semibold">Intel Xeon</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Storage:</span>
                <span className="font-semibold">NVMe SSD</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Status Indicator */}
        <Card className="bg-card/80 backdrop-blur-sm border-border text-center">
          <CardContent className="py-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-primary">
                Servidor Online
              </span>
            </div>
            <p className="text-muted-foreground">
              Dados atualizados em tempo real • Última atualização:{" "}
              {new Date().toLocaleTimeString("pt-BR")}
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Stats;
