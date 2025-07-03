import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Heart, Zap, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Servidor Seguro",
      description: "Proteção anti-griefing e sistema de moderação ativo para garantir um ambiente seguro para todos."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Comunidade Acolhedora",
      description: "Uma comunidade brasileira amigável que recebe novos jogadores de braços abertos."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold" />,
      title: "Performance Otimizada",
      description: "Hardware dedicado e configurações otimizadas para a melhor experiência de jogo."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Até 20 Jogadores",
      description: "Tamanho perfeito para uma comunidade íntima onde todos se conhecem."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Online 24/7",
      description: "Servidor sempre disponível, não importa o horário que você queira jogar."
    },
    {
      icon: <Star className="w-8 h-8 text-gold" />,
      title: "Experiência Vanilla",
      description: "Minecraft puro com Fabric 1.16.5, preservando a essência original do jogo."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sobre Nosso
            </span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Servidor
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criamos este servidor com amor e dedicação para oferecer a melhor experiência Minecraft 
            vanilla para jogadores brasileiros que buscam uma comunidade unida e divertida.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nosso servidor nasceu da paixão por Minecraft e do desejo de criar um espaço onde 
                jogadores brasileiros possam se reunir para construir, explorar e se divertir juntos.
              </p>
              <p>
                Começamos pequenos, mas nossa comunidade cresceu rapidamente graças ao ambiente 
                acolhedor e à experiência de jogo de alta qualidade que oferecemos.
              </p>
              <p>
                Hoje, orgulhamo-nos de manter um dos servidores vanilla mais estáveis e divertidos 
                do Brasil, sempre com foco na experiência original do Minecraft.
              </p>
            </div>
          </div>
          
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
                Especificações Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Versão:</span>
                <span className="font-semibold">Minecraft 1.16.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mod Loader:</span>
                <span className="font-semibold">Fabric</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Máximo de Jogadores:</span>
                <span className="font-semibold">20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Disponibilidade:</span>
                <span className="font-semibold text-primary">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Localização:</span>
                <span className="font-semibold">Brasil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ping Médio:</span>
                <span className="font-semibold text-primary">&lt; 50ms</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
            O que oferecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-accent bg-clip-text text-transparent">
              Regras do Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Comportamento</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Respeite todos os jogadores</li>
                  <li>• Não use linguagem ofensiva</li>
                  <li>• Seja prestativo com novatos</li>
                  <li>• Mantenha o chat limpo</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Gameplay</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Proibido griefing</li>
                  <li>• Não use mods de vantagem</li>
                  <li>• Respeite construções alheias</li>
                  <li>• Não abuse de bugs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;