import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  CheckCircle,
  Download,
  ExternalLink,
  Smartphone,
  Monitor,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const serverIP = "NossoMundoNoMinecraf.aternos.me";

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      toast({
        title: "IP Copiado!",
        description:
          "O IP do servidor foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description:
          "Não foi possível copiar o IP. Tente selecioná-lo manualmente.",
        variant: "destructive",
      });
    }
  };

  const steps = [
    {
      number: "1",
      title: "Baixe o Minecraft",
      description:
        "Certifique-se de ter o Minecraft Java Edition instalado em seu computador.",
      action: "Baixar Minecraft",
      link: "https://minecraft.net",
      icon: <Download className="w-5 h-5" />,
    },
    {
      number: "2",
      title: "Abra o Minecraft",
      description:
        "Lance o Minecraft e vá para 'Multijogador' no menu principal.",
      action: null,
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      number: "3",
      title: "Adicione o Servidor",
      description:
        "Clique em 'Adicionar Servidor' e cole nosso IP no campo de endereço.",
      action: null,
      icon: <ExternalLink className="w-5 h-5" />,
    },
    {
      number: "4",
      title: "Conecte-se",
      description:
        "Selecione nosso servidor na lista e clique em 'Entrar no Servidor'.",
      action: null,
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Como
            </span>{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Conectar
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siga estes passos simples para se juntar à nossa comunidade e
            começar sua aventura no Minecraft!
          </p>
        </div>

        {/* Server Info Card */}
        <Card className="bg-card/80 backdrop-blur-sm border-border shadow-glow-primary mb-12 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl bg-gradient-gold bg-clip-text text-transparent">
              Informações do Servidor
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                IP do Servidor:
              </p>
              <div className="flex items-center justify-center space-x-4 flex-wrap">
                <code className="text-2xl font-mono bg-muted px-4 py-2 rounded text-primary">
                  {serverIP}
                </code>
                <Button
                  onClick={copyServerIP}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                  <span>{copied ? "Copiado!" : "Copiar"}</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-muted-foreground">Versão</p>
                <Badge variant="secondary" className="mt-1">
                  1.16.5
                </Badge>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">Jogadores</p>
                <Badge variant="secondary" className="mt-1">
                  5/20
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
            Passo a Passo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105 relative"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg flex items-center justify-center space-x-2">
                    {step.icon}
                    <span>{step.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  {step.action && step.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(step.link, "_blank")}
                      className="w-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {step.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Monitor className="w-6 h-6 text-primary" />
                <span>PC (Java Edition)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Recomendado:</strong> Minecraft Java Edition 1.16.5
                </p>
                <p className="text-muted-foreground">
                  <strong>Requisitos:</strong> Windows, Mac ou Linux
                </p>
                <p className="text-muted-foreground">
                  <strong>Mods:</strong> Fabric opcional (mods de otimização
                  permitidos)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-secondary" />
                <span>Mobile (Bedrock)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Status:</strong> Não suportado atualmente
                </p>
                <p className="text-muted-foreground">
                  <strong>Motivo:</strong> Servidor Java Edition apenas
                </p>
                <p className="text-muted-foreground">
                  <strong>Alternativa:</strong> Use o PC para a melhor
                  experiência
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-accent bg-clip-text text-transparent">
              Problemas para Conectar?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Problemas Comuns
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Verifique se você está usando a versão 1.16.5</li>
                  <li>• Certifique-se de que o IP está correto</li>
                  <li>• Tente reiniciar o Minecraft</li>
                  <li>• Verifique sua conexão com a internet</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">
                  Precisa de Ajuda?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Entre em contato conosco no Discord</li>
                  <li>• Pergunte no chat do servidor</li>
                  <li>• Consulte nossa FAQ</li>
                  <li>• Nossa equipe está sempre disponível</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Connect;
