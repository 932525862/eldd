import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/m3.jpeg";
import chair1 from "@/assets/chair-3.jpg";
import chair2 from "@/assets/m3.jpeg";
import chair3 from "@/assets/m4.jpeg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const EXTERNAL_URL = "https://allsport.uz/category/Massajniy%20kreslo";
const PHONE = "+998 97 705 20 27";
const PHONE_HREF = "tel:+998977052027";

type Lang = "uz" | "ru";

const t = {
  uz: {
    nav_about: "Biz haqimizda",
    nav_features: "Imkoniyatlar",
    nav_catalog: "Kolleksiya",
    nav_contact: "Aloqa",
    hero_kicker: "Premium Massage Kreslolari",
    hero_title: "Elegant Massage",
    hero_tagline: "Uyingizga hashamat va shifo",
    hero_sub: "Yaponiya va Koreya texnologiyalari asosida ishlab chiqarilgan premium darajadagi massage kresloları. Har bir daqiqa — mutlaq rohat.",
    hero_cta: "Ko'proq mahsulotlarni ko'rish",
    hero_call: "Kolleksiyani tomosha qilish",
    hero_badge_top: "Premium",
    hero_badge_bottom: "4D · Zero Gravity",
    about_kicker: "Biz haqimizda",
    about_title: "Har bir detalda mukammallik",
    about_text: "Elegant Massage — bu zamonaviy texnologiya va yapon dizayni uyg'unligi. Bizning kreslolarimiz mushak zo'riqishini yumshatadi, qon aylanishini yaxshilaydi va sizga har kuni yangi kuch bag'ishlaydi.",
    f1_t: "Zero Gravity", f1_d: "Tanaga tushadigan bosimni kamaytiruvchi noldan tortishish holati.",
    f2_t: "3D / 4D Massaj", f2_d: "Aniq va chuqur massaj uchun aqlli rollerlar tizimi.",
    f3_t: "Havo yostiqchalari", f3_d: "Butun tanani qamrab oluvchi yumshoq siqish massaji.",
    f4_t: "Termoterapiya", f4_d: "Bel va oyoqlar uchun iliqlik bilan chuqur bo'shashish.",
    catalog_kicker: "Kolleksiya",
    catalog_title: "Mashhur modellar",
    catalog_sub: "Har xil did va byudjet uchun keng tanlov. To'liq kolleksiyani ko'rish uchun quyidagi tugmani bosing.",
    card_more: "Batafsil",
    cta_title: "Yangi darajadagi dam olishga tayyormisiz?",
    cta_sub: "Bizning to'liq kolleksiyamizni ko'ring va o'zingizga mos modelni tanlang.",
    cta_btn: "Kolleksiyaga o'tish",
    contact_title: "Aloqa",
    contact_sub: "Maslahat uchun bog'laning — sizga eng mos modelni tanlashda yordam beramiz.",
    rights: "Barcha huquqlar himoyalangan",
  },
  ru: {
    nav_about: "О нас",
    nav_features: "Возможности",
    nav_catalog: "Коллекция",
    nav_contact: "Контакты",
    hero_kicker: "Премиум массажные кресла",
    hero_title: "Elegant Massage",
    hero_tagline: "Роскошь и здоровье у вас дома",
    hero_sub: "Премиальные массажные кресла на основе японских и корейских технологий. Каждая минута — абсолютный комфорт.",
    hero_cta: "Посмотреть больше товаров",
    hero_call: "Смотреть коллекцию",
    hero_badge_top: "Premium",
    hero_badge_bottom: "4D · Zero Gravity",
    about_kicker: "О нас",
    about_title: "Совершенство в каждой детали",
    about_text: "Elegant Massage — это сочетание современных технологий и японского дизайна. Наши кресла снимают напряжение мышц, улучшают кровообращение и дарят энергию каждый день.",
    f1_t: "Zero Gravity", f1_d: "Положение невесомости, снижающее нагрузку на позвоночник.",
    f2_t: "3D / 4D Массаж", f2_d: "Умные роллеры для точного и глубокого массажа.",
    f3_t: "Воздушные подушки", f3_d: "Мягкий компрессионный массаж всего тела.",
    f4_t: "Термотерапия", f4_d: "Глубокое расслабление с прогревом спины и ног.",
    catalog_kicker: "Коллекция",
    catalog_title: "Популярные модели",
    catalog_sub: "Широкий выбор под любой вкус и бюджет. Нажмите кнопку ниже, чтобы увидеть полную коллекцию.",
    card_more: "Подробнее",
    cta_title: "Готовы к отдыху нового уровня?",
    cta_sub: "Ознакомьтесь с полной коллекцией и выберите идеальную модель для себя.",
    cta_btn: "Перейти в коллекцию",
    contact_title: "Контакты",
    contact_sub: "Свяжитесь с нами — поможем подобрать оптимальную модель.",
    rights: "Все права защищены",
  },
} as const;

const chairs = [
  { img: chair1, name: { uz: "Elegant Aura", ru: "Elegant Aura" }, tag: { uz: "Premium 4D", ru: "Premium 4D" } },
  { img: chair2, name: { uz: "Elegant Noir", ru: "Elegant Noir" }, tag: { uz: "Full Body", ru: "Full Body" } },
  { img: chair3, name: { uz: "Elegant Classic", ru: "Elegant Classic" }, tag: { uz: "Zero Gravity", ru: "Zero Gravity" } },
];

function Landing() {
  const [lang, setLang] = useState<Lang>("uz");
  const L = t[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-widest text-gold-gradient">ELEGANT</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground hidden sm:inline">MASSAGE</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-gold transition">{L.nav_about}</a>
            <a href="#features" className="hover:text-gold transition">{L.nav_features}</a>
            <a href="#catalog" className="hover:text-gold transition">{L.nav_catalog}</a>
            <a href="#contact" className="hover:text-gold transition">{L.nav_contact}</a>
          </nav>
          <div className="flex items-center gap-1 border border-border rounded-full p-1">
            {(["uz", "ru"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition ${
                  lang === l ? "bg-gradient-to-br from-[oklch(0.88_0.09_88)] to-[oklch(0.72_0.14_78)] text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-gold/60" />
              <p className="text-xs tracking-[0.4em] text-gold/90 uppercase">{L.hero_kicker}</p>
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8">
              <span className="text-gold-gradient block">Elegant</span>
              <span className="text-gold-gradient block">Massage</span>
            </h1>
            <p className="font-display italic text-2xl md:text-3xl text-foreground/90 mb-8">{L.hero_tagline}</p>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">{L.hero_sub}</p>
            <div className="flex flex-col items-start gap-4">
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold hover:btn-gold-hover px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 group tracking-widest text-xs uppercase"
              >
                {L.hero_cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#catalog"
                className="px-8 py-4 rounded-md font-medium border border-border/70 text-foreground/90 hover:border-gold/60 hover:text-gold transition tracking-widest text-xs uppercase"
              >
                {L.hero_call}
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[oklch(0.78_0.13_82/0.15)] to-transparent blur-3xl" />
            <img src={chair1} alt="Elegant massage chair" className="relative rounded-2xl shadow-[var(--shadow-elegant)]" width={1024} height={1280} />
            <div className="absolute bottom-6 left-6 bg-background/85 backdrop-blur-md border border-border/60 rounded-lg px-6 py-4 min-w-[220px]">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-1">{L.hero_badge_top}</p>
              <p className="font-display italic text-2xl text-gold-gradient">{L.hero_badge_bottom}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">{L.about_kicker}</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">{L.about_title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{L.about_text}</p>
          </div>
          <div className="relative">
            <img src={chair3} alt="" loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)]" width={1024} height={1280} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-card/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">{L.nav_features}</p>
            <h2 className="font-display text-4xl md:text-5xl">{lang === "uz" ? "Nima uchun Elegant?" : "Почему Elegant?"}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: L.f1_t, d: L.f1_d, i: "◈" },
              { t: L.f2_t, d: L.f2_d, i: "❋" },
              { t: L.f3_t, d: L.f3_d, i: "◉" },
              { t: L.f4_t, d: L.f4_d, i: "✦" },
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-border/60 hover:border-gold/50 transition-all hover:-translate-y-1">
                <div className="text-3xl text-gold-gradient mb-4">{f.i}</div>
                <h3 className="font-display text-2xl mb-3">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">{L.catalog_kicker}</p>
              <h2 className="font-display text-4xl md:text-5xl mb-4">{L.catalog_title}</h2>
              <p className="text-muted-foreground max-w-xl">{L.catalog_sub}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {chairs.map((c, i) => (
              <a
                key={i}
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-gold/50 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={c.img} alt={c.name[lang]} loading="lazy" width={1024} height={1280}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gold tracking-widest uppercase mb-1">{c.tag[lang]}</p>
                    <h3 className="font-display text-2xl">{c.name[lang]}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-gold transition inline-flex items-center gap-1">
                    {L.card_more} <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Big CTA */}
          <div className="mt-20 relative overflow-hidden rounded-3xl border border-gold/30 p-12 md:p-16 text-center bg-gradient-to-br from-card via-background to-card">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl mb-4">{L.cta_title}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">{L.cta_sub}</p>
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold hover:btn-gold-hover px-10 py-5 rounded-full font-medium inline-flex items-center gap-3 text-lg"
              >
                {L.cta_btn}
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="border-t border-border/50 py-16 bg-card/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl tracking-widest text-gold-gradient mb-3">ELEGANT MASSAGE</div>
            <p className="text-sm text-muted-foreground">{L.contact_sub}</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] text-gold uppercase mb-4">{L.contact_title}</h4>
            <a href={PHONE_HREF} className="block text-lg hover:text-gold transition">{PHONE}</a>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] text-gold uppercase mb-4">{L.nav_catalog}</h4>
            <a href={EXTERNAL_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-gold transition break-all">
              allsport.uz →
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border/40 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Elegant Massage. {L.rights}.</span>
        </div>
      </footer>
    </div>
  );
}
