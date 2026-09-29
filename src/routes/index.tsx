import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap,
  Building2,
  Factory,
  Droplets,
  Camera,
  ShieldAlert,
  DoorOpen,
  KeyRound,
  Menu,
  X,
  Mail,
  Instagram,
  Phone,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/rj-logo.png";
import fotoLed from "@/assets/projeto-iluminacao-led.jpg";
import fotoMarcenaria from "@/assets/projeto-marcenaria-adega.jpg";
import fotoLavabo from "@/assets/projeto-lavabo-espelho.jpg";
import fotoFechadura from "@/assets/projeto-fechadura-digital.jpg";

const WHATSAPP_NUMBER = "5585921706209";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da RJ Manutenções e gostaria de solicitar um orçamento.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const INSTAGRAM_LINK = "https://www.instagram.com/rj_manutencoes_ltda/";
const EMAIL = "rjmanutençoesltda25@gmail.com";
const PHONE_DISPLAY = "(85) 92170-6209";

const HERO_FOTOS = [
  { src: fotoLed.url, alt: "Sala com iluminação em LED instalada pela RJ Manutenções" },
  { src: fotoLavabo.url, alt: "Lavabo com espelho iluminado e instalação elétrica" },
  { src: fotoMarcenaria.url, alt: "Ambientes com iluminação embutida em marcenaria" },
  { src: fotoFechadura.url, alt: "Fechadura eletrônica instalada em porta residencial" },
];

const PLANOS = [
  {
    nome: "Plano Básico",
    preco: "R$ 189,90",
    detalhe: null as string | null,
    destaque: false,
    mensagem:
      "Olá! Tenho interesse em contratar o Plano Básico da RJ Manutenções. Gostaria de receber mais informações e saber como funciona a contratação.",
  },
  {
    nome: "Plano Médio",
    preco: "R$ 339,90",
    detalhe: null as string | null,
    destaque: false,
    mensagem:
      "Olá! Tenho interesse em contratar o Plano Médio da RJ Manutenções. Gostaria de receber mais informações e saber como funciona a contratação.",
  },
  {
    nome: "Plano Black",
    preco: "R$ 689,90",
    detalhe: "\n",
    destaque: true,
    mensagem:
      "Olá! Tenho interesse em contratar o Plano Black da RJ Manutenções. Gostaria de receber mais informações e saber como funciona a contratação.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RJ Manutenções — Elétricas e Hidráulicas" },
      {
        name: "description",
        content:
          "Serviços elétricos, hidráulicos, câmeras, cerca elétrica, motor de portão e fechadura eletrônica para residências, prédios e indústrias.",
      },
      { property: "og:title", content: "RJ Manutenções — Elétricas e Hidráulicas" },
      {
        property: "og:description",
        content:
          "Manutenção elétrica e hidráulica com segurança e qualidade. Solicite seu orçamento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  {
    icon: Zap,
    title: "Elétrica Residencial",
    text: "Instalações, reparos e manutenção elétrica para residências.",
  },
  {
    icon: Building2,
    title: "Elétrica Predial",
    text: "Soluções elétricas para condomínios, prédios e estabelecimentos.",
  },
  {
    icon: Factory,
    title: "Elétrica Industrial",
    text: "Manutenção e serviços elétricos para ambientes industriais.",
  },
  {
    icon: Droplets,
    title: "Hidráulica",
    text: "Serviços hidráulicos em geral, instalações, reparos e manutenção.",
  },
  {
    icon: Camera,
    title: "Câmeras de Segurança",
    text: "Instalação e manutenção de sistemas de monitoramento por câmeras.",
  },
  {
    icon: ShieldAlert,
    title: "Cerca Elétrica",
    text: "Instalação e manutenção de sistemas de proteção e segurança.",
  },
  {
    icon: DoorOpen,
    title: "Motor de Portão",
    text: "Instalação, manutenção e reparos em motores de portões.",
  },
  {
    icon: KeyRound,
    title: "Fechadura Eletrônica",
    text: "Instalação e manutenção de fechaduras eletrônicas e sistemas de acesso.",
  },
];

const DIFERENCIAIS = [
  "Atendimento profissional",
  "Soluções completas",
  "Segurança e qualidade",
  "Atendimento residencial, predial e industrial",
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="RJ Manutenções"
              className="h-11 w-11 rounded-lg object-contain sm:h-12 sm:w-12"
            />
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight text-brand sm:text-base">
                RJ MANUTENÇÕES
              </span>
              <span className="block text-[11px] font-medium text-muted-foreground">
                Elétricas e Hidráulicas
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Solicitar Orçamento
            </a>
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-brand transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-semibold text-foreground/85 transition-colors hover:bg-secondary hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-bold text-gold-foreground"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-brand text-brand-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold">
              <Zap className="h-3.5 w-3.5" /> ELÉTRICA · HIDRÁULICA · SEGURANÇA
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Manutenção Elétrica e Hidráulica com{" "}
              <span className="text-gold">Segurança e Qualidade</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Soluções completas para residências, empresas, prédios e instalações industriais.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Solicitar Orçamento
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-brand-foreground transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-[2rem] bg-gold/15 blur-2xl"
              />
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
                {HERO_FOTOS.map((foto, i) => (
                  <div
                    key={foto.src}
                    className={`overflow-hidden rounded-2xl border border-white/15 shadow-2xl ${
                      i % 2 === 0 ? "translate-y-0" : "translate-y-5 sm:translate-y-8"
                    }`}
                  >
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-52"
                    />
                  </div>
                ))}
              </div>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/70 transition-colors hover:text-gold sm:mt-14"
              >
                <Instagram className="h-4 w-4" /> Veja mais no nosso Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl md:text-4xl">
              Escolha seu plano
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tenha a RJ Manutenções à disposição. Escolha o plano que deseja contratar e fale
              conosco pelo WhatsApp.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {PLANOS.map((plano) => (
              <article
                key={plano.nome}
                className={`group flex flex-col items-center justify-between rounded-3xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  plano.destaque
                    ? "border-gold/40 bg-brand-deep text-brand-foreground"
                    : "border-border bg-card"
                }`}
              >
                <div>
                  {plano.destaque && (
                    <span className="mb-5 inline-block rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground">
                      Premium
                    </span>
                  )}
                  <h3
                    className={`text-2xl font-extrabold tracking-tight ${
                      plano.destaque ? "text-gold" : "text-brand"
                    }`}
                  >
                    {plano.nome}
                  </h3>
                  <div
                    className={`mx-auto mt-4 h-0.5 w-12 rounded-full ${
                      plano.destaque ? "bg-gold/60" : "bg-gold"
                    }`}
                  />
                  <p
                    className={`mt-6 text-3xl font-extrabold tracking-tight ${
                      plano.destaque ? "text-brand-foreground" : "text-brand"
                    }`}
                  >
                    {plano.preco}
                  </p>
                  {plano.detalhe && (
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        plano.destaque ? "text-brand-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {plano.detalhe}
                    </p>
                  )}
                </div>

                <a
                  href={waLink(plano.mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    plano.destaque
                      ? "bg-gold text-gold-foreground shadow-lg hover:shadow-xl"
                      : "bg-brand text-brand-foreground hover:bg-brand-deep"
                  }`}
                >
                  Quero contratar
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl md:text-4xl">
            Nossos Serviços
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Oferecemos soluções em manutenção elétrica, hidráulica e sistemas de segurança para
            diferentes tipos de ambientes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
              Manutenção que você pode confiar
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand p-8 shadow-xl">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl"
              />
              <div className="relative rounded-2xl bg-white p-6">
                <img
                  src={logo.url}
                  alt="RJ Manutenções"
                  className="mx-auto h-40 w-40 object-contain sm:h-48 sm:w-48"
                />
              </div>
              <div className="relative mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: Zap, label: "Elétrica" },
                  { icon: Droplets, label: "Hidráulica" },
                  { icon: Camera, label: "Segurança" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-xl bg-white/10 py-3">
                    <Icon className="mx-auto h-5 w-5 text-gold" />
                    <span className="mt-1.5 block text-[11px] font-semibold text-brand-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl md:text-4xl">
              Sobre a RJ Manutenções
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A RJ Manutenções atua com serviços elétricos e hidráulicos, oferecendo também soluções
              em segurança e automação de acesso. Trabalhamos com manutenção residencial, predial e
              industrial, buscando oferecer um atendimento profissional, seguro e eficiente.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep py-16 text-brand-foreground md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Precisa de manutenção ou instalação?
          </h2>
          <p className="mt-4 text-base text-brand-foreground/80">
            Entre em contato com a RJ Manutenções e solicite seu orçamento.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-extrabold text-gold-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand sm:text-3xl md:text-4xl">
            Entre em Contato
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
          >
            <Phone className="mx-auto h-6 w-6 text-brand transition-colors group-hover:text-gold" />
            <h3 className="mt-4 text-sm font-bold text-foreground">WhatsApp</h3>
            <p className="mt-1 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
          >
            <Mail className="mx-auto h-6 w-6 text-brand transition-colors group-hover:text-gold" />
            <h3 className="mt-4 text-sm font-bold text-foreground">E-mail</h3>
            <p className="mt-1 break-all text-sm text-muted-foreground">{EMAIL}</p>
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
          >
            <Instagram className="mx-auto h-6 w-6 text-brand transition-colors group-hover:text-gold" />
            <h3 className="mt-4 text-sm font-bold text-foreground">Instagram</h3>
            <p className="mt-1 text-sm text-muted-foreground">@rj_manutencoes_ltda</p>
          </a>
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep text-brand-foreground">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
              <div className="rounded-xl bg-white p-2">
                <img
                  src={logo.url}
                  alt="RJ Manutenções"
                  className="h-14 w-14 object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-extrabold">
                  RJ Manutenções — Elétricas e Hidráulicas
                </p>
                <p className="mt-1 text-sm text-brand-foreground/70">
                  Serviços elétricos, hidráulicos e soluções em segurança.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-brand-foreground/80 md:items-end">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-gold">
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                @rj_manutencoes_ltda
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-brand-foreground/60">
            © 2026 RJ Manutenções. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
