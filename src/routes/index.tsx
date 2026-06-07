import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Ship, Calendar, Users, GraduationCap, Building2, Briefcase, Mail, MapPin, Phone, ArrowRight, ShieldCheck, Clock, Info, AlertTriangle, HardHat, Shirt, Footprints, CheckCircle2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPort from "@/assets/hero-port.jpg";
import wsLogo from "@/assets/ws-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilson, Sons — Agendamento de Visitas" },
      { name: "description", content: "Agende sua visita às instalações Wilson, Sons. Acesso para públicos comercial, técnico, institucional e acadêmico." },
      { property: "og:title", content: "Wilson, Sons — Agendamento de Visitas" },
      { property: "og:description", content: "Preencha o formulário para solicitar acesso às nossas unidades." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const FORM_EMBED = "https://docs.google.com/forms/d/1Lrr1JpmhrW-_MZ0PIFOu8JDHfxC4J7Ddi43f6NpUUqo/viewform?embedded=true";

function Index() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Audience />
        <SafetyRules showForm={showForm} onToggle={() => setShowForm((v) => !v)} />
        {showForm && <Schedule />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Vídeo", href: "#video" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Fale conosco", href: "#agendar" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-hero shadow-elegant">
            <img src={wsLogo} alt="Wilson, Sons" className="h-7 w-7 object-contain" width={40} height={40} />
          </span>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight text-primary">Wilson, Sons</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Agendamento de Visitas</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="#agendar">Agendar</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroPort}
          alt="Terminal portuário Wilson, Sons ao entardecer"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      <div className="container mx-auto px-4 py-24 md:px-8 md:py-36 lg:py-44">
        <div className="max-w-3xl animate-fade-up text-primary-foreground">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <Ship className="h-3.5 w-3.5" /> Serviços marítimos desde 1837
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Agende sua visita às instalações <span className="text-accent">Wilson, Sons</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Preencha o formulário para solicitar acesso às nossas unidades. Recebemos visitas comerciais, técnicas, institucionais e acadêmicas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-glow hover:bg-accent/90">
              <a href="#agendar">
                Quero agendar uma visita <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white">
              <a href="#sobre">Saiba mais</a>
            </Button>
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "180+", v: "anos de história" },
              { k: "20+", v: "unidades no Brasil" },
              { k: "100%", v: "protocolos de segurança" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold md:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs text-white/70 md:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    { icon: ShieldCheck, title: "Segurança em primeiro lugar", desc: "Visitas conduzidas seguindo todos os protocolos SMS da empresa." },
    { icon: Clock, title: "Roteiro guiado", desc: "Tour planejado com nossa equipe técnica para uma experiência completa." },
    { icon: Calendar, title: "Datas flexíveis", desc: "Confirmamos a melhor data após a análise da sua solicitação." },
  ];
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Sobre a Wilson, Sons</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-5xl">
              Conheça por dentro uma das maiores operadoras de serviços marítimos do Brasil
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A Wilson, Sons opera terminais de contêineres, rebocadores, estaleiros, logística e agenciamento marítimo. Nosso programa de visitas é uma oportunidade para parceiros, estudantes e comunidades conhecerem nossas operações de perto, em um ambiente seguro e organizado.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              As visitas são organizadas individualmente ou em grupo, com agenda confirmada pela nossa equipe de relacionamento institucional.
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((f) => (
              <div key={f.title} className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const items = [
    { icon: Briefcase, title: "Comercial", desc: "Clientes, fornecedores e parceiros de negócio." },
    { icon: Users, title: "Técnico", desc: "Profissionais que buscam conhecer nossas operações." },
    { icon: Building2, title: "Institucional", desc: "Autoridades, entidades de classe e governo." },
    { icon: GraduationCap, title: "Acadêmico", desc: "Estudantes, professores e pesquisadores." },
  ];
  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Público-alvo</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Para quem são as visitas</h2>
          <p className="mt-4 text-muted-foreground">Recebemos diferentes perfis com roteiros adaptados a cada objetivo.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-sm">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-primary-glow/10 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="agendar" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Formulário de agendamento</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            Solicite sua visita
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Preencha os dados abaixo. Nossa equipe entrará em contato por e-mail para confirmar a data e os detalhes da visita.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <iframe
            src={FORM_EMBED}
            title="Formulário de agendamento de visita Wilson, Sons"
            className="h-[1400px] w-full"
            loading="lazy"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <PlayCircle className="h-4 w-4" /> Vídeo institucional
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            Conheça a Wilson, Sons
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Assista à apresentação oficial e veja como operamos nossas unidades portuárias, rebocadores e estaleiros.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/l-_KG0HIk9A"
              title="Vídeo de apresentação Wilson, Sons"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyRules({ onAgree }: { onAgree: () => void }) {
  const infos = [
    { icon: Info, title: "Antes da visita", desc: "Você receberá por e-mail a confirmação da data, horário e ponto de encontro na unidade escolhida." },
    { icon: ShieldCheck, title: "Documentação", desc: "Apresente um documento oficial com foto na portaria. Visitantes estrangeiros devem trazer passaporte." },
    { icon: Clock, title: "Pontualidade", desc: "Chegue com 15 minutos de antecedência. O acesso é controlado e atrasos podem inviabilizar a entrada." },
    { icon: Users, title: "Acompanhamento", desc: "Toda a visita é guiada por um colaborador Wilson, Sons. Não circule por áreas operacionais sem escolta." },
  ];
  const proibido = [
    { icon: Shirt, label: "Proibido uso de regatas" },
    { icon: Shirt, label: "Proibido uso de shorts" },
    { icon: Footprints, label: "Proibido sapatos abertos" },
  ];
  const obrigatorio = [
    { icon: HardHat, label: "Capacete de segurança" },
    { icon: Footprints, label: "Botas de proteção" },
    { icon: ShieldCheck, label: "Colete de segurança" },
  ];
  return (
    <section id="seguranca" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Etapas de segurança</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            O que você precisa saber antes de visitar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nossas unidades operam 24 horas com normas rígidas de SMS (Saúde, Meio Ambiente e Segurança). Leia com atenção antes de prosseguir com o agendamento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {infos.map((i) => (
            <div key={i.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-destructive/30 bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-primary">Regras de vestuário — Não é permitido</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {proibido.map((p) => (
                <li key={p.label} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
                  <p.icon className="h-5 w-5 text-destructive" />
                  <span className="text-sm font-medium text-foreground">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-accent/40 bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <HardHat className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-primary">EPIs obrigatórios em áreas operacionais</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {obrigatorio.map((o) => (
                <li key={o.label} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <o.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{o.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Os EPIs serão fornecidos pela equipe Wilson, Sons no momento da visita, conforme necessidade do roteiro.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={onAgree}>
            Li e concordo — agendar minha visita <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "E-mail", value: "visitas@wilsonsons.com.br" },
    { icon: Phone, label: "Telefone", value: "+55 (21) 2126-4222" },
    { icon: MapPin, label: "Sede", value: "Rio de Janeiro — RJ, Brasil" },
  ];
  return (
    <section id="contato" className="bg-gradient-hero py-20 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 backdrop-blur">
                <c.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">{c.label}</div>
                <div className="mt-1 text-lg font-semibold">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-10 text-primary-foreground/80">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-8">
        <div className="flex items-center gap-2">
          <img src={wsLogo} alt="Wilson, Sons" className="h-6 w-6 object-contain" width={24} height={24} />
          <span className="text-sm font-semibold text-primary-foreground">Wilson, Sons</span>
          <span className="text-xs text-primary-foreground/60">— Agendamento de Visitas</span>
        </div>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Wilson, Sons. Todos os direitos reservados.
        </p>
        <p className="rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-xs font-medium text-primary-foreground/90">
          Projeto Desenvolvido para fins educativos na KODIE Academy
        </p>
      </div>
    </footer>
  );
}