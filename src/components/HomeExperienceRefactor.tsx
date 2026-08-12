import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const STYLE_ID = "pc-home-experience-v4";

function installStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    body.pc-home-v4 { --pc-home-bg:#06131f; --pc-home-green:#22c55e; --pc-home-green-2:#4ade80; background:var(--pc-home-bg); }
    body.pc-home-v4 .site-header { height:68px!important; background:rgba(6,19,31,.80)!important; border-bottom:1px solid rgba(148,163,184,.12)!important; box-shadow:none!important; backdrop-filter:blur(18px) saturate(140%)!important; }
    body.pc-home-v4 .site-header--scrolled { height:62px!important; background:rgba(6,19,31,.95)!important; }
    body.pc-home-v4 .desktop-nav a { border-radius:10px!important; padding:8px 11px!important; font-size:.86rem!important; }
    body.pc-home-v4 .desktop-nav a:hover { background:rgba(255,255,255,.055)!important; }
    body.pc-home-v4 .header-signup-button { border-radius:11px!important; background:var(--pc-home-green)!important; color:#052e16!important; box-shadow:none!important; }

    body.pc-home-v4 .hero { min-height:690px!important; margin-top:0!important; background:#06131f!important; overflow:visible!important; border-bottom:1px solid rgba(148,163,184,.08)!important; }
    body.pc-home-v4 .hero-photo { opacity:.42!important; filter:saturate(.78) contrast(1.08) brightness(.84)!important; background-position:68% 50%!important; transform:scale(1.015); }
    body.pc-home-v4 .hero-wash { background:radial-gradient(circle at 74% 40%,rgba(34,197,94,.11),transparent 28%),linear-gradient(90deg,rgba(6,19,31,.99) 0%,rgba(6,19,31,.96) 40%,rgba(6,19,31,.76) 67%,rgba(6,19,31,.62) 100%)!important; }
    body.pc-home-v4 .hero-content { min-height:690px!important; padding-top:118px!important; padding-bottom:66px!important; grid-template-columns:minmax(0,1.1fr) minmax(320px,.72fr)!important; align-items:center!important; gap:clamp(42px,6vw,86px)!important; }
    body.pc-home-v4 .hero-copy { max-width:760px!important; }
    body.pc-home-v4 .hero-live,body.pc-home-v4 .eyebrow--light { font-size:11px!important; letter-spacing:.13em!important; text-transform:uppercase!important; color:#9bd6ae!important; }
    body.pc-home-v4 .hero h1 { max-width:760px!important; margin:14px 0 18px!important; font-size:clamp(3.4rem,5.5vw,4.75rem)!important; line-height:.98!important; letter-spacing:-.055em!important; font-weight:850!important; color:#f8fafc!important; }
    body.pc-home-v4 .hero h1 span { color:var(--pc-home-green-2)!important; }
    body.pc-home-v4 .hero-copy>p { max-width:650px!important; margin-bottom:26px!important; color:#c3d0dc!important; font-size:1.04rem!important; line-height:1.65!important; }

    body.pc-home-v4 .hero-actions { max-width:800px!important; grid-template-columns:minmax(0,1fr) auto!important; gap:10px!important; position:relative!important; z-index:40000!important; overflow:visible!important; }
    body.pc-home-v4 .search-combo,body.pc-home-v4 .search-combo--hero { position:relative!important; overflow:visible!important; }
    body.pc-home-v4 .search-combo__form { min-height:64px!important; padding:5px!important; border-radius:18px!important; background:#fff!important; border:1px solid rgba(255,255,255,.92)!important; box-shadow:0 24px 64px rgba(0,0,0,.32)!important; }
    body.pc-home-v4 .search-combo__input-wrapper,body.pc-home-v4 .search-combo__input { min-height:52px!important; }
    body.pc-home-v4 .search-combo__input { color:#0f172a!important; font-size:1rem!important; padding-left:44px!important; }
    body.pc-home-v4 .search-combo__input::placeholder { color:#7b8a98!important; }
    body.pc-home-v4 .search-combo__button { min-height:52px!important; border-radius:13px!important; padding-inline:20px!important; background:var(--pc-home-green)!important; color:#052e16!important; font-weight:850!important; box-shadow:none!important; }
    body.pc-home-v4 .search-combo__button:hover { background:var(--pc-home-green-2)!important; transform:translateY(-1px)!important; }
    body.pc-home-v4 .hero-actions>.button--white { min-height:64px!important; border-radius:18px!important; background:rgba(255,255,255,.075)!important; border:1px solid rgba(255,255,255,.15)!important; color:#fff!important; box-shadow:none!important; }
    body.pc-home-v4 .hero-trust { margin-top:17px!important; gap:10px 18px!important; color:#9fb0be!important; font-size:.76rem!important; }
    body.pc-home-v4 .hero-trust svg { color:var(--pc-home-green)!important; width:14px!important; }
    body.pc-home-v4 .hero-insight { padding:22px!important; border-radius:20px!important; background:linear-gradient(180deg,rgba(15,38,58,.86),rgba(9,28,43,.94))!important; border:1px solid rgba(148,163,184,.16)!important; box-shadow:0 24px 70px rgba(0,0,0,.28)!important; backdrop-filter:blur(12px)!important; }
    body.pc-home-v4 .hero-insight__footer { display:none!important; }

    body.pc-home-v4 .search-results-dynamic { position:absolute!important; top:calc(100% + 10px)!important; left:0!important; width:min(800px,calc(100vw - 32px))!important; max-height:min(520px,64vh)!important; overflow-y:auto!important; z-index:999999!important; padding:6px!important; border-radius:16px!important; border:1px solid #dbe3ec!important; background:#fff!important; color:#0f172a!important; box-shadow:0 32px 84px rgba(2,6,23,.34)!important; }
    body.pc-home-v4 .search-result-item { min-height:70px!important; padding:10px 12px!important; border-radius:11px!important; border-bottom:0!important; }
    body.pc-home-v4 .search-result-item:hover,body.pc-home-v4 .search-result-item:focus-visible { background:#f3f7fa!important; }
    body.pc-home-v4 .search-result-item__name { color:#0f172a!important; }
    body.pc-home-v4 .search-result-item__meta,body.pc-home-v4 .search-result-item__store { color:#64748b!important; }
    body.pc-home-v4 .search-result-item__price { color:#15803d!important; }

    body.pc-home-v4 .benefits-section,body.pc-home-v4 .metrics-float { display:none!important; }
    body.pc-home-v4 .category-rail { max-width:1280px!important; margin:0 auto!important; padding:15px 32px!important; gap:8px!important; border-bottom:1px solid rgba(148,163,184,.12)!important; background:#081925!important; }
    body.pc-home-v4 .category-rail>span { color:#8195a6!important; font-size:.72rem!important; }
    body.pc-home-v4 .category-rail a { min-height:40px!important; padding:8px 12px!important; border-radius:999px!important; border:1px solid rgba(148,163,184,.12)!important; background:rgba(255,255,255,.035)!important; color:#dce7ef!important; box-shadow:none!important; }
    body.pc-home-v4 .category-rail a:hover { background:rgba(34,197,94,.10)!important; border-color:rgba(74,222,128,.25)!important; color:#eafff0!important; transform:translateY(-1px)!important; }

    body.pc-home-v4 .section,body.pc-home-v4 .featured-products,body.pc-home-v4 .professional { padding-top:72px!important; padding-bottom:72px!important; }
    body.pc-home-v4 .section-heading { margin-bottom:24px!important; }
    body.pc-home-v4 .section-heading h2 { font-size:clamp(1.9rem,3vw,2.4rem)!important; line-height:1.06!important; letter-spacing:-.035em!important; }
    body.pc-home-v4 .visual-product-grid { grid-template-columns:repeat(4,minmax(0,1fr))!important; gap:16px!important; }
    body.pc-home-v4 .visual-product-grid>.visual-product-card:nth-child(n+5) { display:none!important; }
    body.pc-home-v4 .visual-product-card { padding:0!important; border-radius:18px!important; border:1px solid var(--border)!important; background:var(--surface)!important; box-shadow:0 8px 30px rgba(15,23,42,.06)!important; overflow:hidden!important; }
    body.pc-home-v4 .visual-product-card:hover { transform:translateY(-4px)!important; box-shadow:0 18px 42px rgba(15,23,42,.10)!important; }
    body.pc-home-v4 .visual-product-image { height:210px!important; padding:18px!important; background:var(--surface-2)!important; }
    body.pc-home-v4 .visual-product-content { padding:18px!important; }
    body.pc-home-v4 .position-number,body.pc-home-v4 .verified-chip,body.pc-home-v4 .mini-trend { display:none!important; }
    body.pc-home-v4 .visual-price strong { color:var(--green)!important; font-size:1.58rem!important; }
    body.pc-home-v4 .visual-product-actions { grid-template-columns:1fr auto!important; gap:7px!important; }
    body.pc-home-v4 .basket-grid { grid-template-columns:1fr!important; }
    body.pc-home-v4 .basket-feature { display:none!important; }
    body.pc-home-v4 .basket-plan,body.pc-home-v4 .price-table-card { border-radius:18px!important; border:1px solid var(--border)!important; background:var(--surface)!important; box-shadow:none!important; }
    body.pc-home-v4 .store-grid { display:grid!important; grid-template-columns:repeat(3,minmax(0,1fr))!important; gap:12px!important; }
    body.pc-home-v4 .store-grid>.store-card:nth-child(n+7) { display:none!important; }
    body.pc-home-v4 .store-card { min-height:78px!important; padding:14px!important; border-radius:15px!important; border:1px solid var(--border)!important; background:var(--surface)!important; box-shadow:none!important; }
    body.pc-home-v4 .final-cta { border-radius:22px!important; border:1px solid rgba(74,222,128,.17)!important; background:radial-gradient(circle at 88% 15%,rgba(74,222,128,.12),transparent 28%),linear-gradient(135deg,#071b2a,#0b2538)!important; box-shadow:0 24px 60px rgba(2,6,23,.16)!important; }

    @media(max-width:980px){ body.pc-home-v4 .hero{min-height:0!important} body.pc-home-v4 .hero-content{grid-template-columns:1fr!important;min-height:0!important;padding-top:110px!important;padding-bottom:48px!important} body.pc-home-v4 .visual-product-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important} body.pc-home-v4 .store-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important} }
    @media(max-width:560px){
      body.pc-home-v4{overflow-x:hidden!important} body.pc-home-v4 .shell{padding-left:16px!important;padding-right:16px!important} body.pc-home-v4 .site-header{height:60px!important;min-height:60px!important}
      body.pc-home-v4 .header-location,body.pc-home-v4 .header-actions,body.pc-home-v4 .desktop-nav{display:none!important}
      body.pc-home-v4 .hero-photo{opacity:.24!important;background-position:64% center!important} body.pc-home-v4 .hero-wash{background:linear-gradient(180deg,rgba(6,19,31,.98),rgba(6,19,31,.92) 68%,rgba(6,19,31,.98))!important}
      body.pc-home-v4 .hero-content{display:block!important;padding-top:86px!important;padding-bottom:30px!important} body.pc-home-v4 .hero h1{font-size:clamp(2.2rem,11vw,2.9rem)!important;line-height:1!important;margin:11px 0 13px!important} body.pc-home-v4 .hero-copy>p{font-size:.94rem!important;line-height:1.52!important;margin-bottom:18px!important}
      body.pc-home-v4 .hero-insight,body.pc-home-v4 .hero-actions>.button--white{display:none!important} body.pc-home-v4 .hero-actions{display:block!important;max-width:none!important}
      body.pc-home-v4 .search-combo__form{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;min-height:56px!important;padding:4px!important;border-radius:15px!important} body.pc-home-v4 .search-combo__input-wrapper,body.pc-home-v4 .search-combo__input{min-height:48px!important} body.pc-home-v4 .search-combo__input{font-size:16px!important;padding-left:40px!important} body.pc-home-v4 .search-combo__button{min-width:92px!important;min-height:48px!important;padding-inline:11px!important;font-size:.82rem!important;border-radius:11px!important}
      body.pc-home-v4 .hero-trust{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important;margin-top:12px!important} body.pc-home-v4 .hero-trust span{font-size:.64rem!important;line-height:1.25!important}
      body.pc-home-v4 .search-results-dynamic{left:0!important;right:0!important;width:100%!important;max-height:min(56vh,430px)!important;border-radius:14px!important}
      body.pc-home-v4 .category-rail{display:flex!important;align-items:center!important;overflow-x:auto!important;scrollbar-width:none!important;padding:11px 16px!important;gap:7px!important} body.pc-home-v4 .category-rail::-webkit-scrollbar{display:none!important} body.pc-home-v4 .category-rail>span{display:none!important} body.pc-home-v4 .category-rail a{flex:0 0 auto!important;min-height:38px!important;padding:8px 11px!important;font-size:.77rem!important}
      body.pc-home-v4 .section,body.pc-home-v4 .featured-products,body.pc-home-v4 .professional{padding-top:40px!important;padding-bottom:40px!important} body.pc-home-v4 .section-heading h2{font-size:1.68rem!important}
      body.pc-home-v4 .visual-product-grid{display:flex!important;overflow-x:auto!important;gap:11px!important;scroll-snap-type:x mandatory!important;margin-right:-16px!important;padding-right:16px!important;scrollbar-width:none!important} body.pc-home-v4 .visual-product-grid::-webkit-scrollbar{display:none!important} body.pc-home-v4 .visual-product-card{flex:0 0 min(78vw,290px)!important;min-width:min(78vw,290px)!important;scroll-snap-align:start!important} body.pc-home-v4 .visual-product-image{height:158px!important;padding:12px!important} body.pc-home-v4 .visual-product-content{padding:14px!important}
      body.pc-home-v4 .store-grid{display:flex!important;overflow-x:auto!important;gap:10px!important;margin-right:-16px!important;padding-right:16px!important;scrollbar-width:none!important} body.pc-home-v4 .store-card{flex:0 0 235px!important;min-width:235px!important}
      body.pc-home-v4 .final-cta{margin:16px!important;padding:24px 20px!important;border-radius:18px!important}
    }
  `;
  document.head.appendChild(style);
}

export function HomeExperienceRefactor() {
  const location = useLocation();
  useEffect(() => { installStyles(); }, []);
  useEffect(() => {
    const active = location.pathname === "/" || location.pathname === "";
    document.body.classList.toggle("pc-home-v4", active);
    return () => document.body.classList.remove("pc-home-v4");
  }, [location.pathname]);
  return null;
}
