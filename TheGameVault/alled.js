
(function(){
if(!document.head) document.documentElement.appendChild(document.createElement("head"));
(function(parent){
const el_0 = document.createElement("meta");
el_0.setAttribute("charset", `UTF-8`);
parent.appendChild(el_0);
const el_1 = document.createElement("meta");
el_1.setAttribute("name", `viewport`);
el_1.setAttribute("content", `width=device-width, initial-scale=1.0`);
parent.appendChild(el_1);
const el_2 = document.createElement("title");
(function(parent){
parent.appendChild(document.createTextNode(`Dashboard`));
})(el_2);
parent.appendChild(el_2);
})(document.head);
if(!document.body) document.documentElement.appendChild(document.createElement("body"));
(function(parent){
const el_3 = document.createElement("audio");
el_3.setAttribute("src", `https://cdn.jsdelivr.net/gh/shayderrr/Static@main/Ambient-BreakcoreDnB-Mix-02.mp3`);
el_3.setAttribute("autoplay", ``);
el_3.setAttribute("loop", ``);
parent.appendChild(el_3);
const el_4 = document.createElement("link");
el_4.setAttribute("rel", `icon`);
el_4.setAttribute("href", `https://instructure-uploads.s3.amazonaws.com/account_30000000002042/attachments/80746393/favicon-16x16.png`);
parent.appendChild(el_4);
const el_5 = document.createElement("link");
el_5.setAttribute("href", `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap`);
el_5.setAttribute("rel", `stylesheet`);
parent.appendChild(el_5);
const el_6 = document.createElement("style");
el_6.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root { --p9:#1a0033;--p8:#2d0052;--p7:#4a0080;--p6:#6b21a8;--p5:#8b5cf6; 
      --p4:#a78bfa;--p3:#c4b5fd;--p2:#e9d5ff;--p1:#f3e8ff;--black:#000;--white:#fff; }
    html,body{width:100%;height:100%;background:var(--black);font-family:'Inter',sans-serif;color:var(--white);}
    .bg{position:fixed;inset:0;background:linear-gradient(135deg,#000 0%,#0a0015 50%,#000 100%);z-index:-3;}
    .stars{position:fixed;inset:0;background-image: 
      radial-gradient(2px 2px at 20px 30px,white,transparent), 
      radial-gradient(2px 2px at 60px 70px,white,transparent), 
      radial-gradient(1px 1px at 50px 50px,white,transparent), 
      radial-gradient(1px 1px at 130px 80px,white,transparent), 
      radial-gradient(2px 2px at 90px 150px,white,transparent); 
      background-repeat:repeat;background-size:200px 200px;opacity:.4; animation:s 100s linear infinite;z-index:-2;}
    @keyframes s{from{transform:translateY(0)}to{transform:translateY(-200px)}}
    .orb{position:fixed;border-radius:50%;filter:blur(60px);opacity:.1;z-index:-1;animation:f 20s ease-in-out infinite;}
    .orb-1{width:400px;height:400px;background:radial-gradient(circle,var(--p6),transparent);top:-100px;left:-100px;animation-duration:25s;}
    .orb-2{width:350px;height:350px;background:radial-gradient(circle,var(--p7),transparent);bottom:-100px;right:-100px;animation-duration:30s;animation-delay:-10s;}
    @keyframes f{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(50px,-50px) scale(1.1)}66%{transform:translate(-50px,50px) scale(.9)}}
    header{position:fixed;top:0;left:0;right:0;padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center;z-index:1000;pointer-events:none;}
    .logo{font-family:'Space Grotesk',sans-serif;font-size:1.6rem;font-weight:700;background:linear-gradient(135deg,var(--white),var(--p3));-webkit-background-clip:text;-webkit-text-fill-color:transparent;pointer-events:auto;}
    .hamburger{display:block;width:36px;height:36px;background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3);border-radius:50%;position:relative;cursor:pointer;pointer-events:auto;transition:.3s;box-shadow:0 0 15px rgba(139,92,246,.3);}
    .hamburger:hover{background:rgba(139,92,246,.3);box-shadow:0 0 25px rgba(139,92,246,.5);transform:scale(1.05);}
    .hamburger span{position:absolute;left:50%;top:50%;width:18px;height:2px;background:var(--p3);border-radius:2px;transform:translate(-50%,-50%);transition:.3s;box-shadow:0 0 8px rgba(139,92,246,.6);}
    .hamburger span:nth-child(1){transform:translate(-50%,-6px);}
    .hamburger span:nth-child(2){transform:translate(-50%,0);}
    .hamburger span:nth-child(3){transform:translate(-50%,6px);}
    .hamburger.active span:nth-child(1){transform:translate(-50%,0) rotate(45deg);}
    .hamburger.active span:nth-child(2){opacity:0;}
    .hamburger.active span:nth-child(3){transform:translate(-50%,0) rotate(-45deg);}
    .menu{position:fixed;top:0;left:-100%;width:100%;max-width:360px;height:100vh;background:rgba(10,0,21,.98);backdrop-filter:blur(30px);border-right:1px solid rgba(139,92,246,.2);padding:6rem 2rem 2rem;transition:left .5s cubic-bezier(.25,.8,.25,1);z-index:999;overflow-y:auto;}
    .menu.open{left:0;}
    .close-btn{position:absolute;top:1.5rem;right:1.5rem;width:40px;height:40px;background:rgba(139,92,246,.2);border:1px solid rgba(139,92,246,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.3s;}
    .close-btn:hover{background:rgba(139,92,246,.4);transform:rotate(90deg);}
    .close-btn svg{width:20px;height:20px;stroke:var(--p3);}
    .menu { overflow-y: auto; scrollbar-width: thin; scrollbar-color: rgb(24, 0, 34) transparent; }
    .menu::-webkit-scrollbar { width: 6px; }
    .menu::-webkit-scrollbar-track { background: transparent; }
    .menu::-webkit-scrollbar-thumb { background-color: rgba(10,0,21,.98); border-radius: 3px; }
    .menu::-webkit-scrollbar-thumb:hover { background-color: rgba(15,6,25,.98); }
    .nav-list{list-style:none;}
    .nav-category{font-family:'Space Grotesk',sans-serif;font-size:1.3rem;font-weight:600;color:var(--p3);margin:2rem 0 1rem;padding-bottom:.5rem;border-bottom:1px solid rgba(139,92,246,.2);}
    .nav-link{display:block;padding:.8rem 1rem;color:var(--p1);text-decoration:none;border-radius:.75rem;transition:all .3s;position:relative;overflow:hidden;cursor:pointer;}
    .nav-link:hover{color:var(--white);background:rgba(139,92,246,.15);transform:translateX(8px);box-shadow:0 0 20px rgba(139,92,246,.2);}
    #container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow-y:auto;overflow-x:hidden;}
    #content-display{min-height:100%;width:100%;}
    @media(max-width:768px){.menu{max-width:100%;}.logo{font-size:1.4rem;}}
    /* ---------- Theme / layout (adapted from your theme) ---------- */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :root {
      --bg: #000;
      --panel: rgba(255, 255, 255, 0.03);
      --accent1: #6b21a8;
      --accent2: #8b5cf6;
      --accent3: #a78bfa;
      --muted: #c4b5fd;
      --purple-200: #e9d5ff;
      --purple-100: #f3e8ff;
      --white: #fff;
      --card-border: rgba(255, 255, 255, 0.08);
      --danger: #ff5c5c;
      --gold: #fbbf24;
      --online: #34d399;
      --offline: rgba(255,255,255,0.06);
    }
    html, body {
      height: 100%;
    }
    body {
      background: linear-gradient(135deg, #000000 0%, #0a0015 50%, #000000 100%);
      color: var(--white);
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      display: flex;
      min-height: 100vh;
      align-items: stretch;
      gap: 18px;
      padding: 18px;
      overflow: hidden;
    }
    /* animated orbs/stars */
    .stars {
      position: fixed;
      inset: 0;
      background-image:
        radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.85), transparent),
        radial-gradient(2px 2px at 60px 70px, rgba(255, 255, 255, 0.75), transparent),
        radial-gradient(1px 1px at 50px 50px, rgba(255, 255, 255, 0.65), transparent),
        radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.7), transparent),
        radial-gradient(2px 2px at 90px 150px, rgba(255, 255, 255, 0.8), transparent);
      background-repeat: repeat;
      background-size: 200px 200px;
      opacity: 0.4;
      animation: starsMove 100s linear infinite;
      z-index: 0;
    }
    @keyframes starsMove {
      from { transform: translateY(0); }
      to { transform: translateY(-200px); }
    }
    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.1;
      z-index: 0;
      animation: float 20s ease-in-out infinite;
    }
    .orb.a {
      width: 400px;
      height: 400px;
      left: -100px;
      top: -100px;
      background: radial-gradient(circle, var(--accent1), transparent);
      animation-duration: 25s;
    }
    .orb.b {
      width: 350px;
      height: 350px;
      right: -100px;
      bottom: -100px;
      background: radial-gradient(circle, var(--accent2), transparent);
      animation-duration: 30s;
      animation-delay: -10s;
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(50px, -50px) scale(1.1); }
      66% { transform: translate(-50px, 50px) scale(0.9); }
    }
    /* Main container layout */
    .app {
      position: relative;
      z-index: 10;
      display: grid;
      grid-template-columns: 72px 1fr 300px;
      gap: 18px;
      width: 100%;
      align-items: stretch;
      animation: fadeIn 1s ease-out;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* ------------- Left side: servers list ------------- */
    .servers {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(139, 92, 246, 0.1);
      border-radius: 1.5rem;
      padding: 12px 8px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      height: calc(100vh - 36px);
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
    }
    #serverList {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      width: 100%;
    }
    .servers::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
      border-radius: 1.5rem;
      pointer-events: none;
    }
    .servers > div:first-child {
      font-size: 0.7rem;
      color: var(--accent3);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
      margin-bottom: 4px;
      opacity: 0.8;
      z-index: 1;
      position: relative;
    }
    .server-btn {
      width: 52px;
      height: 52px;
      min-width: 52px;
      min-height: 52px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.02);
      cursor: pointer;
      border: 1px solid rgba(139, 92, 246, 0.08);
      font-weight: 700;
      font-family: 'Space Grotesk', sans-serif;
      color: var(--muted);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .server-btn::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, var(--accent2), transparent);
      transition: width 0.3s ease, height 0.3s ease;
      transform: translate(-50%, -50%);
    }
    .server-btn:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 30px rgba(139, 92, 246, 0.25);
      border-color: rgba(139, 92, 246, 0.3);
      background: rgba(139, 92, 246, 0.08);
    }
    .server-btn:hover::before {
      width: 100px;
      height: 100px;
    }
    .server-btn.active {
      background: var(--accent1);
      color: white;
      box-shadow: 0 8px 30px rgba(139, 92, 246, 0.35);
      border-color: transparent;
    }
    .add-server {
      font-size: 22px;
      font-weight: 700;
      color: var(--accent3);
      background: rgba(139, 92, 246, 0.05);
      border-style: dashed;
      border-width: 2px;
    }
    .add-server:hover {
      color: var(--white);
      border-style: solid;
      background: rgba(139, 92, 246, 0.15);
    }
    /* Profile mini section (includes sign-in button when logged out) */
    #profileMini {
      margin-top: auto;
      padding-top: 8px;
      border-top: 1px solid rgba(139, 92, 246, 0.1);
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 1;
    }
    #profileMini .server-btn {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
      border: 1px solid rgba(139, 92, 246, 0.2);
      color: var(--purple-100);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    #profileMini .server-btn:hover {
      background: linear-gradient(135deg, var(--accent1), var(--accent2));
      color: white;
      border-color: transparent;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
    }
    /* Scrollbar styling for servers */
    .servers::-webkit-scrollbar {
      width: 4px;
    }
    .servers::-webkit-scrollbar-track {
      background: transparent;
    }
    .servers::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.3);
      border-radius: 2px;
    }
    .servers::-webkit-scrollbar-thumb:hover {
      background: rgba(139, 92, 246, 0.5);
    }
    /* ------------- Middle: channels & chat ------------- */
    .main-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.5rem;
      padding: 12px;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 36px);
      overflow: hidden;
    }
    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(139, 92, 246, 0.1);
      background: rgba(139, 92, 246, 0.02);
      border-radius: 12px 12px 0 0;
      margin: -12px -12px 0 -12px;
      flex-shrink: 0;
    }
    .server-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--white) 0%, var(--muted) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .small-btn {
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
      padding: 8px 14px;
      border-radius: 10px;
      color: var(--purple-100);
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
    }
    .small-btn:hover {
      background: rgba(139, 92, 246, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
      color: var(--white);
    }
    .channels-and-chat {
      display: flex;
      flex: 1;
      gap: 12px;
      overflow: hidden;
      padding-top: 16px;
      min-height: 0;
    }
    .channels {
      width: 230px;
      flex-shrink: 0;
      border-right: 1px solid rgba(139, 92, 246, 0.05);
      padding-right: 12px;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .channels h4 {
      font-size: 0.75rem;
      color: var(--accent3);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }
    .channel-item {
      padding: 10px 12px;
      border-radius: 10px;
      color: var(--muted);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s ease;
      font-weight: 500;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .channel-item:hover {
      background: rgba(139, 92, 246, 0.05);
      color: var(--purple-100);
      transform: translateX(4px);
    }
    .channel-item.active {
      color: var(--white);
      background: rgba(139, 92, 246, 0.15);
      border-left: 3px solid var(--accent2);
      padding-left: 9px;
    }
    .chat {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
      min-width: 0;
      overflow: hidden;
    }
    .messages {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scrollbar-width: thin;
      scrollbar-color: var(--accent2) transparent;
    }
    .messages::-webkit-scrollbar {
      width: 6px;
    }
    .messages::-webkit-scrollbar-track {
      background: transparent;
    }
    .messages::-webkit-scrollbar-thumb {
      background: var(--accent2);
      border-radius: 3px;
    }
    .msg {
      max-width: 70%;
      padding: 12px 16px;
      padding-top: 20px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      color: var(--purple-100);
      font-size: 0.95rem;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
      line-height: 1.6;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    .msg:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
    }
    .msg.me {
      margin-left: auto;
      background: linear-gradient(135deg, var(--accent1), var(--accent2));
      color: white;
      border-color: transparent;
      box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
    }
    .msg.deleted {
      font-style: italic;
      color: rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.01);
      border-color: rgba(255, 255, 255, 0.02);
    }
    .msg .meta {
      font-size: 0.75rem;
      color: var(--accent3);
      margin-bottom: 8px;
      display: flex;
      gap: 8px;
      align-items: center;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .msg.me .meta {
      color: rgba(255, 255, 255, 0.8);
    }
    .msg .meta .edited {
      font-size: 0.7rem;
      color: var(--muted);
      opacity: 0.7;
      text-transform: lowercase;
    }
    .msg .controls {
      position: absolute;
      top: -12px;
      right: 12px;
      display: flex;
      gap: 8px;
      opacity: 0;
      transition: opacity 0.2s ease;
      background: rgba(10, 0, 20, 0.9);
      padding: 4px;
      border-radius: 8px;
      backdrop-filter: blur(10px);
    }
    .msg:hover .controls {
      opacity: 1;
    }
    .ctrl-btn {
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
      padding: 6px 12px;
      border-radius: 8px;
      color: var(--purple-100);
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.3s ease;
      font-family: 'Inter', sans-serif;
    }
    .ctrl-btn:hover {
      background: rgba(139, 92, 246, 0.2);
      color: var(--white);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
    }
    .composer {
      display: flex;
      gap: 8px;
      padding: 12px;
      border-top: 1px solid rgba(139, 92, 246, 0.05);
      background: rgba(139, 92, 246, 0.02);
      border-radius: 0 0 12px 12px;
      margin: 0 -12px -12px -12px;
      flex-shrink: 0;
    }
    .composer input {
      flex: 1;
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid rgba(139, 92, 246, 0.1);
      background: rgba(255, 255, 255, 0.03);
      color: var(--white);
      font-size: 0.95rem;
      transition: all 0.2s ease;
      font-family: 'Inter', sans-serif;
    }
    .composer input:focus {
      outline: none;
      border-color: var(--accent2);
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.1);
    }
    .composer input::placeholder {
      color: var(--muted);
      opacity: 0.7;
    }
    .composer button {
      padding: 12px 20px;
      border-radius: 12px;
      background: var(--accent1);
      border: none;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Inter', sans-serif;
    }
    .composer button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    }
    /* ------------- Right: member / friends panel ------------- */
    .right-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.5rem;
      padding: 16px;
      height: calc(100vh - 36px);
      overflow-y: auto;
      overflow-x: hidden;
    }
    .section {
      margin-bottom: 20px;
    }
    .section-title {
      font-size: 0.75rem;
      color: var(--accent3);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }
    .user-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px;
      border-radius: 10px;
      transition: all 0.2s ease;
      margin-bottom: 4px;
      position: relative;
    }
    .user-row:hover {
      background: rgba(139, 92, 246, 0.05);
      transform: translateX(4px);
    }
    /* Fix for avatar class to ensure consistent width */
    .avatar {
      width: 44px;
      height: 44px;
      min-width: 44px;
      min-height: 44px;
      flex-shrink: 0;
      border-radius: 12px;
      background: var(--accent1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      font-family: 'Space Grotesk', sans-serif;
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
      font-size: 1.1rem;
      text-transform: uppercase;
      position: relative; /* so status dot can be absolutely positioned */
    }
    /* status dot */
    .status {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      right: 4px;
      bottom: 4px;
      border: 2px solid rgba(10,0,20,0.9);
      box-sizing: content-box;
    }
    .status.online {
      background: var(--online);
      box-shadow: 0 0 6px rgba(52,211,153,0.35);
    }
    .status.offline {
      background: var(--offline);
    }
    /* small text columns in user row */
    .user-row > div:nth-child(2) {
      flex: 1;
      min-width: 0;
    }
    .user-row > div:nth-child(2) > div:first-child {
      font-weight: 700;
      color: var(--white);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-row > div:nth-child(2) > div:last-child {
      font-size: 0.75rem;
      color: var(--muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .friend-actions {
      margin-left: auto;
      display: flex;
      gap: 8px;
      flex-shrink: 0;
    }
    /* Input styling in right panel */
    .right-panel input {
      width: 100%;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid rgba(139, 92, 246, 0.1);
      background: rgba(255, 255, 255, 0.02);
      color: var(--white);
      font-size: 0.9rem;
      transition: all 0.2s ease;
      font-family: 'Inter', sans-serif;
    }
    .right-panel input:focus {
      outline: none;
      border-color: var(--accent2);
      background: rgba(255, 255, 255, 0.05);
    }
    .right-panel input::placeholder {
      color: var(--muted);
      opacity: 0.6;
    }
    /* Modal */
    .modal {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 480px;
      max-width: 90vw;
      background: rgba(10, 0, 20, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 1.5rem;
      padding: 28px;
      border: 1px solid rgba(139, 92, 246, 0.2);
      box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
      color: #fff;
      z-index: 999;
      animation: modalFadeIn 0.3s ease;
    }
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: translate(-50%, -45%);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
    .modal input {
      width: 100%;
      padding: 12px 16px;
      margin: 8px 0;
      border-radius: 10px;
      border: 1px solid rgba(139, 92, 246, 0.2);
      background: rgba(255, 255, 255, 0.03);
      color: var(--white);
      font-size: 0.95rem;
      transition: all 0.2s ease;
      font-family: 'Inter', sans-serif;
    }
    .modal input:focus {
      outline: none;
      border-color: var(--accent2);
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.1);
    }
    .modal input::placeholder {
      color: var(--muted);
      opacity: 0.6;
    }
    .modal label {
      font-size: 0.85rem;
      color: var(--muted);
      font-weight: 500;
      display: block;
      margin-top: 12px;
    }
    .form-row {
      margin-bottom: 16px;
    }
    .auth-actions {
      display: flex;
      gap: 8px;
    }
    #authMsg {
      margin-top: 10px;
      color: var(--muted);
      font-size: 0.9rem;
      line-height: 1.4;
    }
    .hidden {
      display: none !important;
    }
    /* Responsive */
    @media (max-width: 1200px) {
      .app {
        grid-template-columns: 72px 1fr 280px;
      }
      .right-panel {
        width: 280px;
      }
    }
    @media (max-width: 1000px) {
      .app {
        grid-template-columns: 64px 1fr;
      }
      .right-panel {
        display: none;
      }
      .channels {
        width: 180px;
      }
    }
    @media (max-width: 768px) {
      body {
        padding: 10px;
        gap: 10px;
      }
      .app {
        grid-template-columns: 60px 1fr;
        gap: 10px;
      }
      .servers {
        padding: 8px;
        border-radius: 1rem;
      }
      .server-btn {
        width: 44px;
        height: 44px;
        min-width: 44px;
        min-height: 44px;
      }
      .main-panel {
        border-radius: 1rem;
      }
      .server-title {
        font-size: 1.2rem;
      }
      .small-btn {
        padding: 6px 10px;
        font-size: 0.85rem;
      }
    }
    @media (max-width: 480px) {
      .header-row {
        flex-wrap: wrap;
        gap: 8px;
      }
      .msg {
        max-width: 85%;
      }
      .modal {
        width: 95vw;
        padding: 20px;
      }
    }
    /* Ensure proper scrolling */
    .servers,
    .channels,
    .messages,
    .right-panel {
      scrollbar-width: thin;
      scrollbar-color: rgba(139, 92, 246, 0.3) transparent;
    }
    .servers::-webkit-scrollbar,
    .channels::-webkit-scrollbar,
    .messages::-webkit-scrollbar,
    .right-panel::-webkit-scrollbar {
      width: 6px;
    }
    .servers::-webkit-scrollbar-track,
    .channels::-webkit-scrollbar-track,
    .messages::-webkit-scrollbar-track,
    .right-panel::-webkit-scrollbar-track {
      background: transparent;
    }
    .servers::-webkit-scrollbar-thumb,
    .channels::-webkit-scrollbar-thumb,
    .messages::-webkit-scrollbar-thumb,
    .right-panel::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.3);
      border-radius: 3px;
    }
    .servers::-webkit-scrollbar-thumb:hover,
    .channels::-webkit-scrollbar-thumb:hover,
    .messages::-webkit-scrollbar-thumb:hover,
    .right-panel::-webkit-scrollbar-thumb:hover {
      background: rgba(139, 92, 246, 0.5);
    }
    
    /* ===== DISGUISE BUTTON STYLING ===== */
.nav-link.disguise-btn{background:linear-gradient(135deg,rgba(139,92,246,.2),rgba(139,92,246,.1));border:1px solid rgba(139,92,246,.3);margin-top:0.5rem;margin-bottom:1rem;}
.nav-link.disguise-btn:hover{background:linear-gradient(135deg,rgba(139,92,246,.4),rgba(139,92,246,.2));border-color:rgba(139,92,246,.5);}

/* ===== DISGUISE MODAL STYLES ===== */
.disguise-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.85);backdrop-filter:blur(8px);z-index:2000;display:none;align-items:center;justify-content:center;}
.disguise-overlay.show{display:flex;}
.disguise-modal{background:rgba(10,0,21,.98);border:1px solid rgba(139,92,246,.3);border-radius:1.25rem;padding:1.75rem;width:90%;max-width:420px;box-shadow:0 20px 50px rgba(139,92,246,.25);animation:modalSlide .25s ease;}
@keyframes modalSlide{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
.disguise-modal h2{font-family:'Space Grotesk',sans-serif;font-size:1.4rem;color:var(--white);margin-bottom:1.25rem;display:flex;align-items:center;gap:.5rem;}
.current-info{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);border-radius:.6rem;padding:.85rem;margin-bottom:1.25rem;}
.current-info p{font-size:.75rem;color:var(--p3);margin-bottom:.2rem;}
.current-info .val{font-size:.9rem;color:var(--white);word-break:break-all;}
.form-group{margin-bottom:1rem;}
.form-group label{display:block;font-size:.8rem;color:var(--p3);margin-bottom:.4rem;font-weight:500;}
.form-group input{width:100%;padding:.75rem .9rem;background:rgba(255,255,255,.05);border:1px solid rgba(139,92,246,.2);border-radius:.6rem;color:var(--white);font-size:.95rem;font-family:'Inter',sans-serif;transition:all .2s;}
.form-group input:focus{outline:none;border-color:var(--p5);background:rgba(255,255,255,.08);}
.presets{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem;}
.preset{padding:.4rem .7rem;background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);border-radius:.4rem;color:var(--p2);font-size:.75rem;cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;}
.preset:hover{background:rgba(139,92,246,.25);border-color:rgba(139,92,246,.4);color:var(--white);}
.modal-btns{display:flex;gap:.6rem;margin-top:1.25rem;}
.modal-btns button{flex:1;padding:.75rem 1rem;border-radius:.6rem;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;}
.btn-cancel{background:transparent;border:1px solid rgba(139,92,246,.3);color:var(--p3);}
.btn-cancel:hover{background:rgba(139,92,246,.1);color:var(--white);}
.btn-reset{background:rgba(255,92,92,.1);border:1px solid rgba(255,92,92,.3);color:#ff8a8a;}
.btn-reset:hover{background:rgba(255,92,92,.2);}
.btn-apply{background:linear-gradient(135deg,var(--p6),var(--p5));border:none;color:var(--white);}
.btn-apply:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(139,92,246,.35);}

/* ===== LAUNCH MODAL STYLES ===== */
.launch-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.88);backdrop-filter:blur(8px);z-index:2000;display:none;align-items:center;justify-content:center;}
.launch-overlay.show{display:flex;}
.launch-modal{background:rgba(10,0,21,.98);border:1px solid rgba(139,92,246,.3);border-radius:1.25rem;padding:1.75rem;width:90%;max-width:380px;box-shadow:0 20px 50px rgba(139,92,246,.25);animation:modalSlide .25s ease;}
.launch-modal h2{font-family:'Space Grotesk',sans-serif;font-size:1.3rem;color:var(--white);margin-bottom:.4rem;}
.launch-modal>p{color:var(--p3);font-size:.85rem;margin-bottom:1.25rem;}
.check-group{display:flex;align-items:center;gap:.5rem;margin-bottom:.75rem;cursor:pointer;}
.check-group input[type="checkbox"]{width:16px;height:16px;accent-color:var(--p5);cursor:pointer;}
.check-group label{color:var(--p2);font-size:.85rem;cursor:pointer;}
.launch-opts{display:none;margin-top:.75rem;padding:.9rem;background:rgba(139,92,246,.05);border:1px solid rgba(139,92,246,.15);border-radius:.6rem;}
.launch-opts.show{display:block;}
.btn-launch{width:100%;padding:.9rem;background:linear-gradient(135deg,var(--p6),var(--p5));border:none;border-radius:.6rem;color:var(--white);font-size:.95rem;font-weight:600;cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;margin-top:.75rem;}
.btn-launch:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(139,92,246,.35);}
#start-text{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
  `;
parent.appendChild(el_6);
const el_7 = document.createElement("div");
el_7.setAttribute("id", `start-text`);
(function(parent){
})(el_7);
(function(parent){
const el_8 = document.createElement("h1");
(function(parent){
parent.appendChild(document.createTextNode(`Click the button above`));
})(el_8);
parent.appendChild(el_8);
})(el_7);
(function(parent){
})(el_7);
parent.appendChild(el_7);
const el_9 = document.createElement("div");
el_9.setAttribute("class", `bg`);
parent.appendChild(el_9);
const el_10 = document.createElement("div");
el_10.setAttribute("class", `stars`);
parent.appendChild(el_10);
const el_11 = document.createElement("div");
el_11.setAttribute("class", `orb orb-1`);
parent.appendChild(el_11);
const el_12 = document.createElement("div");
el_12.setAttribute("class", `orb orb-2`);
parent.appendChild(el_12);
const el_13 = document.createElement("header");
(function(parent){
})(el_13);
(function(parent){
const el_14 = document.createElement("div");
el_14.setAttribute("class", `hamburger`);
el_14.setAttribute("id", `hamburger`);
(function(parent){
const el_15 = document.createElement("span");
parent.appendChild(el_15);
})(el_14);
(function(parent){
const el_16 = document.createElement("span");
parent.appendChild(el_16);
})(el_14);
(function(parent){
const el_17 = document.createElement("span");
parent.appendChild(el_17);
})(el_14);
parent.appendChild(el_14);
})(el_13);
(function(parent){
})(el_13);
parent.appendChild(el_13);
const el_18 = document.createElement("nav");
el_18.setAttribute("class", `menu`);
el_18.setAttribute("id", `menu`);
(function(parent){
})(el_18);
(function(parent){
const el_19 = document.createElement("div");
el_19.setAttribute("class", `close-btn`);
el_19.setAttribute("id", `closeBtn`);
el_19.setAttribute("style", `display: none;`);
(function(parent){
})(el_19);
parent.appendChild(el_19);
})(el_18);
(function(parent){
})(el_18);
(function(parent){
const el_20 = document.createElement("ul");
el_20.setAttribute("class", `nav-list`);
(function(parent){
})(el_20);
(function(parent){
const el_21 = document.createElement("li");
(function(parent){
const el_22 = document.createElement("div");
el_22.setAttribute("class", `nav-link nav-home`);
(function(parent){
parent.appendChild(document.createTextNode(`Home`));
})(el_22);
parent.appendChild(el_22);
})(el_21);
parent.appendChild(el_21);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_23 = document.createElement("li");
(function(parent){
const el_24 = document.createElement("div");
el_24.setAttribute("class", `nav-link disguise-btn`);
el_24.setAttribute("id", `changeDisguiseBtn`);
(function(parent){
parent.appendChild(document.createTextNode(`🎭 Change Disguise`));
})(el_24);
parent.appendChild(el_24);
})(el_23);
parent.appendChild(el_23);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_25 = document.createElement("li");
(function(parent){
const el_26 = document.createElement("div");
el_26.setAttribute("class", `nav-category`);
(function(parent){
parent.appendChild(document.createTextNode(`🕹️ Home Page`));
})(el_26);
parent.appendChild(el_26);
})(el_25);
(function(parent){
})(el_25);
(function(parent){
const el_27 = document.createElement("div");
el_27.setAttribute("class", `nav-link`);
el_27.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@2057dace702c51405ad7cae4cd3ad9b9ecbbfa79/annoucements.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Annoucements`));
})(el_27);
parent.appendChild(el_27);
})(el_25);
(function(parent){
})(el_25);
(function(parent){
const el_28 = document.createElement("div");
el_28.setAttribute("class", `nav-link`);
el_28.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@d3eb0c7dae57730b5b870b44004436e743b6a3cc/guidelines.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Guidelines`));
})(el_28);
parent.appendChild(el_28);
})(el_25);
(function(parent){
})(el_25);
(function(parent){
const el_29 = document.createElement("div");
el_29.setAttribute("class", `nav-link`);
el_29.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@282c390e7bfdc29358991cbb387ff3f947a17ba0/tac.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Terms & Conditions`));
})(el_29);
parent.appendChild(el_29);
})(el_25);
(function(parent){
})(el_25);
parent.appendChild(el_25);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_30 = document.createElement("li");
(function(parent){
const el_31 = document.createElement("div");
el_31.setAttribute("class", `nav-category`);
(function(parent){
parent.appendChild(document.createTextNode(`🎮 Games`));
})(el_31);
parent.appendChild(el_31);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_32 = document.createElement("div");
el_32.setAttribute("class", `nav-link`);
el_32.setAttribute("id", `htmlGamesLocalLink`);
(function(parent){
parent.appendChild(document.createTextNode(`HTML Games`));
})(el_32);
parent.appendChild(el_32);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_33 = document.createElement("div");
el_33.setAttribute("class", `nav-link`);
el_33.setAttribute("id", `moreGamesLink`);
(function(parent){
parent.appendChild(document.createTextNode(`More Games`));
})(el_33);
parent.appendChild(el_33);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_34 = document.createElement("div");
el_34.setAttribute("class", `nav-link`);
el_34.setAttribute("id", `ownerGamesLink`);
(function(parent){
parent.appendChild(document.createTextNode(`Owner Games`));
})(el_34);
parent.appendChild(el_34);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_35 = document.createElement("div");
el_35.setAttribute("class", `nav-link`);
el_35.setAttribute("id", `ethansGamesLink`);
(function(parent){
parent.appendChild(document.createTextNode(`Backup Games`));
})(el_35);
parent.appendChild(el_35);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_36 = document.createElement("div");
el_36.setAttribute("class", `nav-link`);
el_36.setAttribute("id", `extremeGamesLink`);
(function(parent){
parent.appendChild(document.createTextNode(`Extreme Games`));
})(el_36);
parent.appendChild(el_36);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_37 = document.createElement("div");
el_37.setAttribute("class", `nav-link`);
el_37.setAttribute("id", `dominumGamesLink`);
(function(parent){
parent.appendChild(document.createTextNode(`Dominum UBG`));
})(el_37);
parent.appendChild(el_37);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_38 = document.createElement("div");
el_38.setAttribute("class", `nav-link`);
el_38.setAttribute("id", `blooket`);
(function(parent){
parent.appendChild(document.createTextNode(`Blooketv1`));
})(el_38);
parent.appendChild(el_38);
})(el_30);
(function(parent){
})(el_30);
(function(parent){
const el_39 = document.createElement("div");
el_39.setAttribute("class", `nav-link`);
el_39.setAttribute("id", `superGamesLink`);
(function(parent){
parent.appendChild(document.createTextNode(`Super Games`));
})(el_39);
parent.appendChild(el_39);
})(el_30);
(function(parent){
})(el_30);
parent.appendChild(el_30);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_40 = document.createElement("li");
(function(parent){
const el_41 = document.createElement("div");
el_41.setAttribute("class", `nav-category`);
(function(parent){
parent.appendChild(document.createTextNode(`⚙️ AI Games`));
})(el_41);
parent.appendChild(el_41);
})(el_40);
(function(parent){
})(el_40);
(function(parent){
const el_42 = document.createElement("div");
el_42.setAttribute("class", `nav-link`);
el_42.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/snake.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Snake`));
})(el_42);
parent.appendChild(el_42);
})(el_40);
(function(parent){
})(el_40);
(function(parent){
const el_43 = document.createElement("div");
el_43.setAttribute("class", `nav-link`);
el_43.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/tetris.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Tetris`));
})(el_43);
parent.appendChild(el_43);
})(el_40);
(function(parent){
})(el_40);
(function(parent){
const el_44 = document.createElement("div");
el_44.setAttribute("class", `nav-link`);
el_44.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/2048.html`);
(function(parent){
parent.appendChild(document.createTextNode(`2048`));
})(el_44);
parent.appendChild(el_44);
})(el_40);
(function(parent){
})(el_40);
(function(parent){
const el_45 = document.createElement("div");
el_45.setAttribute("class", `nav-link`);
el_45.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/mines.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Mines`));
})(el_45);
parent.appendChild(el_45);
})(el_40);
(function(parent){
})(el_40);
(function(parent){
const el_46 = document.createElement("div");
el_46.setAttribute("class", `nav-link`);
el_46.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/break.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Breakout`));
})(el_46);
parent.appendChild(el_46);
})(el_40);
(function(parent){
})(el_40);
parent.appendChild(el_40);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_47 = document.createElement("li");
(function(parent){
const el_48 = document.createElement("div");
el_48.setAttribute("class", `nav-category`);
(function(parent){
parent.appendChild(document.createTextNode(`🛠️ Tools`));
})(el_48);
parent.appendChild(el_48);
})(el_47);
(function(parent){
})(el_47);
(function(parent){
const el_49 = document.createElement("div");
el_49.setAttribute("class", `nav-link`);
el_49.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/google.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Google Web`));
})(el_49);
parent.appendChild(el_49);
})(el_47);
(function(parent){
})(el_47);
(function(parent){
const el_50 = document.createElement("div");
el_50.setAttribute("class", `nav-link`);
el_50.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@main/zen.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Browser Web`));
})(el_50);
parent.appendChild(el_50);
})(el_47);
(function(parent){
})(el_47);
(function(parent){
const el_51 = document.createElement("div");
el_51.setAttribute("class", `nav-link`);
el_51.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/nobody81754/modded-htmls@master/TheGameVault/GalaticGatewayModded.html`);
(function(parent){
parent.appendChild(document.createTextNode(`File Operations`));
})(el_51);
parent.appendChild(el_51);
})(el_47);
(function(parent){
})(el_47);
(function(parent){
const el_52 = document.createElement("div");
el_52.setAttribute("class", `nav-link`);
el_52.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@00bcaeec990381e630b1d736ba3cedbf7d6c8da4/text.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Text Encryptor`));
})(el_52);
parent.appendChild(el_52);
})(el_47);
(function(parent){
})(el_47);
(function(parent){
const el_53 = document.createElement("div");
el_53.setAttribute("class", `nav-link`);
el_53.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@5e88925ee5112dc02c8699b6e0802545ef6ba2ee/youtube.html`);
(function(parent){
parent.appendChild(document.createTextNode(`📺 YouTube`));
})(el_53);
parent.appendChild(el_53);
})(el_47);
(function(parent){
})(el_47);
(function(parent){
const el_54 = document.createElement("div");
el_54.setAttribute("class", `nav-link`);
el_54.setAttribute("id", `operatingsystem`);
(function(parent){
parent.appendChild(document.createTextNode(`💻 OS System`));
})(el_54);
parent.appendChild(el_54);
})(el_47);
(function(parent){
})(el_47);
parent.appendChild(el_47);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_55 = document.createElement("li");
(function(parent){
const el_56 = document.createElement("div");
el_56.setAttribute("class", `nav-category`);
(function(parent){
parent.appendChild(document.createTextNode(`🌐 Google Docs`));
})(el_56);
parent.appendChild(el_56);
})(el_55);
(function(parent){
})(el_55);
(function(parent){
const el_57 = document.createElement("div");
el_57.setAttribute("class", `nav-link`);
el_57.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@c1aea70bc188155d5d15ca78aa0aca071eb788e8/seed.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Seed Network`));
})(el_57);
parent.appendChild(el_57);
})(el_55);
(function(parent){
})(el_55);
(function(parent){
const el_58 = document.createElement("div");
el_58.setAttribute("class", `nav-link`);
el_58.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@3e101166f3a669d88b2bf9d5d869b4256300cfa5/incog.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Incog Network`));
})(el_58);
parent.appendChild(el_58);
})(el_55);
(function(parent){
})(el_55);
(function(parent){
const el_59 = document.createElement("div");
el_59.setAttribute("class", `nav-link`);
el_59.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@508ec33ace5bb2cbc3dbc5ee85ee3f8c817f6da6/lb.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Lebron Network`));
})(el_59);
parent.appendChild(el_59);
})(el_55);
(function(parent){
})(el_55);
(function(parent){
const el_60 = document.createElement("div");
el_60.setAttribute("class", `nav-link`);
el_60.setAttribute("data-src", `https://cdn.jsdelivr.net/gh/shayderrr/676767@9318dbe582dc8a91e97746dff301cb0e97c5bc2c/freddy.html`);
(function(parent){
parent.appendChild(document.createTextNode(`Freddies Internet`));
})(el_60);
parent.appendChild(el_60);
})(el_55);
(function(parent){
})(el_55);
parent.appendChild(el_55);
})(el_20);
parent.appendChild(el_20);
})(el_18);
(function(parent){
})(el_18);
parent.appendChild(el_18);
const el_61 = document.createElement("div");
el_61.setAttribute("class", `disguise-overlay`);
el_61.setAttribute("id", `disguiseOverlay`);
(function(parent){
})(el_61);
(function(parent){
const el_62 = document.createElement("div");
el_62.setAttribute("class", `disguise-modal`);
(function(parent){
})(el_62);
(function(parent){
const el_63 = document.createElement("h2");
(function(parent){
parent.appendChild(document.createTextNode(`🎭 Change Disguise`));
})(el_63);
parent.appendChild(el_63);
})(el_62);
(function(parent){
})(el_62);
(function(parent){
const el_64 = document.createElement("div");
el_64.setAttribute("class", `current-info`);
(function(parent){
})(el_64);
(function(parent){
const el_65 = document.createElement("p");
(function(parent){
parent.appendChild(document.createTextNode(`Current Title:`));
})(el_65);
parent.appendChild(el_65);
})(el_64);
(function(parent){
})(el_64);
(function(parent){
const el_66 = document.createElement("div");
el_66.setAttribute("class", `val`);
el_66.setAttribute("id", `curTitle`);
(function(parent){
parent.appendChild(document.createTextNode(`Dashboard`));
})(el_66);
parent.appendChild(el_66);
})(el_64);
(function(parent){
})(el_64);
(function(parent){
const el_67 = document.createElement("p");
el_67.setAttribute("style", `margin-top:.5rem;`);
(function(parent){
parent.appendChild(document.createTextNode(`Current Favicon:`));
})(el_67);
parent.appendChild(el_67);
})(el_64);
(function(parent){
})(el_64);
(function(parent){
const el_68 = document.createElement("div");
el_68.setAttribute("class", `val`);
el_68.setAttribute("id", `curFavicon`);
(function(parent){
parent.appendChild(document.createTextNode(`Default`));
})(el_68);
parent.appendChild(el_68);
})(el_64);
(function(parent){
})(el_64);
parent.appendChild(el_64);
})(el_62);
(function(parent){
})(el_62);
(function(parent){
const el_69 = document.createElement("div");
el_69.setAttribute("class", `form-group`);
(function(parent){
})(el_69);
(function(parent){
const el_70 = document.createElement("label");
(function(parent){
parent.appendChild(document.createTextNode(`Page Title`));
})(el_70);
parent.appendChild(el_70);
})(el_69);
(function(parent){
})(el_69);
(function(parent){
const el_71 = document.createElement("input");
el_71.setAttribute("type", `text`);
el_71.setAttribute("id", `inputTitle`);
el_71.setAttribute("placeholder", `e.g., Google Docs`);
parent.appendChild(el_71);
})(el_69);
(function(parent){
})(el_69);
(function(parent){
const el_72 = document.createElement("div");
el_72.setAttribute("class", `presets`);
(function(parent){
})(el_72);
(function(parent){
const el_73 = document.createElement("button");
el_73.setAttribute("class", `preset`);
el_73.setAttribute("data-t", `Google Docs`);
el_73.setAttribute("data-f", `https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico`);
(function(parent){
parent.appendChild(document.createTextNode(`Google Docs`));
})(el_73);
parent.appendChild(el_73);
})(el_72);
(function(parent){
})(el_72);
(function(parent){
const el_74 = document.createElement("button");
el_74.setAttribute("class", `preset`);
el_74.setAttribute("data-t", `Google Slides`);
el_74.setAttribute("data-f", `https://ssl.gstatic.com/docs/presentations/images/favicon-2023q4.ico`);
(function(parent){
parent.appendChild(document.createTextNode(`Google Slides`));
})(el_74);
parent.appendChild(el_74);
})(el_72);
(function(parent){
})(el_72);
(function(parent){
const el_75 = document.createElement("button");
el_75.setAttribute("class", `preset`);
el_75.setAttribute("data-t", `Dashboard`);
el_75.setAttribute("data-f", `https://instructure-uploads.s3.amazonaws.com/account_30000000002042/attachments/80746393/favicon-16x16.png`);
(function(parent){
parent.appendChild(document.createTextNode(`Canvas`));
})(el_75);
parent.appendChild(el_75);
})(el_72);
(function(parent){
})(el_72);
(function(parent){
const el_76 = document.createElement("button");
el_76.setAttribute("class", `preset`);
el_76.setAttribute("data-t", `Google`);
el_76.setAttribute("data-f", `https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico`);
(function(parent){
parent.appendChild(document.createTextNode(`Google`));
})(el_76);
parent.appendChild(el_76);
})(el_72);
(function(parent){
})(el_72);
parent.appendChild(el_72);
})(el_69);
(function(parent){
})(el_69);
parent.appendChild(el_69);
})(el_62);
(function(parent){
})(el_62);
(function(parent){
const el_77 = document.createElement("div");
el_77.setAttribute("class", `form-group`);
(function(parent){
})(el_77);
(function(parent){
const el_78 = document.createElement("label");
(function(parent){
parent.appendChild(document.createTextNode(`Favicon URL`));
})(el_78);
parent.appendChild(el_78);
})(el_77);
(function(parent){
})(el_77);
(function(parent){
const el_79 = document.createElement("input");
el_79.setAttribute("type", `text`);
el_79.setAttribute("id", `inputFavicon`);
el_79.setAttribute("placeholder", `https://example.com/favicon.ico`);
parent.appendChild(el_79);
})(el_77);
(function(parent){
})(el_77);
parent.appendChild(el_77);
})(el_62);
(function(parent){
})(el_62);
(function(parent){
const el_80 = document.createElement("div");
el_80.setAttribute("class", `modal-btns`);
(function(parent){
})(el_80);
(function(parent){
const el_81 = document.createElement("button");
el_81.setAttribute("class", `btn-cancel`);
el_81.setAttribute("id", `disguiseCancel`);
(function(parent){
parent.appendChild(document.createTextNode(`Cancel`));
})(el_81);
parent.appendChild(el_81);
})(el_80);
(function(parent){
})(el_80);
(function(parent){
const el_82 = document.createElement("button");
el_82.setAttribute("class", `btn-reset`);
el_82.setAttribute("id", `disguiseReset`);
(function(parent){
parent.appendChild(document.createTextNode(`Reset`));
})(el_82);
parent.appendChild(el_82);
})(el_80);
(function(parent){
})(el_80);
(function(parent){
const el_83 = document.createElement("button");
el_83.setAttribute("class", `btn-apply`);
el_83.setAttribute("id", `disguiseApply`);
(function(parent){
parent.appendChild(document.createTextNode(`Apply`));
})(el_83);
parent.appendChild(el_83);
})(el_80);
(function(parent){
})(el_80);
parent.appendChild(el_80);
})(el_62);
(function(parent){
})(el_62);
parent.appendChild(el_62);
})(el_61);
(function(parent){
})(el_61);
parent.appendChild(el_61);
const el_84 = document.createElement("div");
el_84.setAttribute("class", `launch-overlay`);
el_84.setAttribute("id", `launchOverlay`);
(function(parent){
})(el_84);
(function(parent){
const el_85 = document.createElement("div");
el_85.setAttribute("class", `launch-modal`);
(function(parent){
})(el_85);
(function(parent){
const el_86 = document.createElement("h2");
(function(parent){
parent.appendChild(document.createTextNode(`🚀 Launch Game`));
})(el_86);
parent.appendChild(el_86);
})(el_85);
(function(parent){
})(el_85);
(function(parent){
const el_87 = document.createElement("p");
(function(parent){
parent.appendChild(document.createTextNode(`Ready to launch. Customize the tab appearance.`));
})(el_87);
parent.appendChild(el_87);
})(el_85);
(function(parent){
})(el_85);
(function(parent){
const el_88 = document.createElement("div");
el_88.setAttribute("class", `check-group`);
(function(parent){
})(el_88);
(function(parent){
const el_89 = document.createElement("input");
el_89.setAttribute("type", `checkbox`);
el_89.setAttribute("id", `customCheck`);
parent.appendChild(el_89);
})(el_88);
(function(parent){
})(el_88);
(function(parent){
const el_90 = document.createElement("label");
el_90.setAttribute("for", `customCheck`);
(function(parent){
parent.appendChild(document.createTextNode(`Customize game tab disguise`));
})(el_90);
parent.appendChild(el_90);
})(el_88);
(function(parent){
})(el_88);
parent.appendChild(el_88);
})(el_85);
(function(parent){
})(el_85);
(function(parent){
const el_91 = document.createElement("div");
el_91.setAttribute("class", `launch-opts`);
el_91.setAttribute("id", `launchOpts`);
(function(parent){
})(el_91);
(function(parent){
const el_92 = document.createElement("div");
el_92.setAttribute("class", `form-group`);
(function(parent){
})(el_92);
(function(parent){
const el_93 = document.createElement("label");
(function(parent){
parent.appendChild(document.createTextNode(`Tab Title`));
})(el_93);
parent.appendChild(el_93);
})(el_92);
(function(parent){
})(el_92);
(function(parent){
const el_94 = document.createElement("input");
el_94.setAttribute("type", `text`);
el_94.setAttribute("id", `launchTitle`);
el_94.setAttribute("placeholder", `e.g., Google Docs`);
parent.appendChild(el_94);
})(el_92);
(function(parent){
})(el_92);
(function(parent){
const el_95 = document.createElement("div");
el_95.setAttribute("class", `presets`);
(function(parent){
})(el_95);
(function(parent){
const el_96 = document.createElement("button");
el_96.setAttribute("class", `preset lp`);
el_96.setAttribute("data-t", `Google Docs`);
el_96.setAttribute("data-f", `https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico`);
(function(parent){
parent.appendChild(document.createTextNode(`Docs`));
})(el_96);
parent.appendChild(el_96);
})(el_95);
(function(parent){
})(el_95);
(function(parent){
const el_97 = document.createElement("button");
el_97.setAttribute("class", `preset lp`);
el_97.setAttribute("data-t", `Google Slides`);
el_97.setAttribute("data-f", `https://ssl.gstatic.com/docs/presentations/images/favicon-2023q4.ico`);
(function(parent){
parent.appendChild(document.createTextNode(`Slides`));
})(el_97);
parent.appendChild(el_97);
})(el_95);
(function(parent){
})(el_95);
(function(parent){
const el_98 = document.createElement("button");
el_98.setAttribute("class", `preset lp`);
el_98.setAttribute("data-t", `Dashboard`);
el_98.setAttribute("data-f", `https://instructure-uploads.s3.amazonaws.com/account_30000000002042/attachments/80746393/favicon-16x16.png`);
(function(parent){
parent.appendChild(document.createTextNode(`Canvas`));
})(el_98);
parent.appendChild(el_98);
})(el_95);
(function(parent){
})(el_95);
(function(parent){
const el_99 = document.createElement("button");
el_99.setAttribute("class", `preset lp`);
el_99.setAttribute("data-t", `Google`);
el_99.setAttribute("data-f", `https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico`);
(function(parent){
parent.appendChild(document.createTextNode(`Google`));
})(el_99);
parent.appendChild(el_99);
})(el_95);
(function(parent){
})(el_95);
parent.appendChild(el_95);
})(el_92);
(function(parent){
})(el_92);
parent.appendChild(el_92);
})(el_91);
(function(parent){
})(el_91);
(function(parent){
const el_100 = document.createElement("div");
el_100.setAttribute("class", `form-group`);
(function(parent){
})(el_100);
(function(parent){
const el_101 = document.createElement("label");
(function(parent){
parent.appendChild(document.createTextNode(`Favicon URL`));
})(el_101);
parent.appendChild(el_101);
})(el_100);
(function(parent){
})(el_100);
(function(parent){
const el_102 = document.createElement("input");
el_102.setAttribute("type", `text`);
el_102.setAttribute("id", `launchFavicon`);
el_102.setAttribute("placeholder", `https://example.com/favicon.ico`);
parent.appendChild(el_102);
})(el_100);
(function(parent){
})(el_100);
parent.appendChild(el_100);
})(el_91);
(function(parent){
})(el_91);
parent.appendChild(el_91);
})(el_85);
(function(parent){
})(el_85);
(function(parent){
const el_103 = document.createElement("div");
el_103.setAttribute("class", `modal-btns`);
(function(parent){
})(el_103);
(function(parent){
const el_104 = document.createElement("button");
el_104.setAttribute("class", `btn-cancel`);
el_104.setAttribute("id", `launchCancel`);
(function(parent){
parent.appendChild(document.createTextNode(`Cancel`));
})(el_104);
parent.appendChild(el_104);
})(el_103);
(function(parent){
})(el_103);
(function(parent){
const el_105 = document.createElement("button");
el_105.setAttribute("class", `btn-launch`);
el_105.setAttribute("id", `launchGo`);
(function(parent){
parent.appendChild(document.createTextNode(`🎮 Launch`));
})(el_105);
parent.appendChild(el_105);
})(el_103);
(function(parent){
})(el_103);
parent.appendChild(el_103);
})(el_85);
(function(parent){
})(el_85);
parent.appendChild(el_85);
})(el_84);
(function(parent){
})(el_84);
parent.appendChild(el_84);
const el_106 = document.createElement("div");
el_106.setAttribute("id", `container`);
(function(parent){
})(el_106);
(function(parent){
const el_107 = document.createElement("div");
el_107.setAttribute("id", `content-display`);
parent.appendChild(el_107);
})(el_106);
(function(parent){
})(el_106);
parent.appendChild(el_106);
})(document.body);

const externalScripts = [
  {
    "type": "external",
    "src": "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
  },
  {
    "type": "external",
    "src": "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"
  },
  {
    "type": "external",
    "src": "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"
  }
];


function loadScriptsSequentially(list, done){
    if(list.length === 0){ done(); return; }

    const item = list.shift();
    const s = document.createElement("script");

    if(item.type === "external"){
        s.src = item.src;
    } else if(item.type === "blob"){
        s.src = URL.createObjectURL(new Blob([item.code], {type:"text/javascript"}));
    }

    s.onload = () => loadScriptsSequentially(list, done);
    s.onerror = () => { console.error("SCRIPT FAILED:", item); loadScriptsSequentially(list, done); };

    document.head.appendChild(s);
}

const inlineScripts = [
  "\n    // ========== DISGUISE SYSTEM ==========\nconst DEFAULT_TITLE = 'Dashboard';\nconst DEFAULT_FAVICON = 'https://instructure-uploads.s3.amazonaws.com/account_30000000002042/attachments/80746393/favicon-16x16.png';\n\nfunction loadSavedDisguise() {\n  try {\n    const t = localStorage.getItem('disguiseTitle');\n    const f = localStorage.getItem('disguiseFavicon');\n    if (t) { document.title = t; document.getElementById('curTitle').textContent = t; }\n    if (f) { setFavicon(f); document.getElementById('curFavicon').textContent = f; }\n  } catch(e) {}\n}\n\nfunction setFavicon(url) {\n  function applyFavicon() {\n    try {\n      // Remove all existing favicons\n      const icons = document.querySelectorAll('link[rel*=\"icon\"]');\n      icons.forEach(el => el.remove());\n      \n      // Create new favicon\n      const link = document.createElement('link');\n      link.rel = 'icon';\n      link.type = 'image/x-icon';\n      link.href = url;\n      document.head.appendChild(link);\n    } catch(e) { console.error(e); }\n  }\n  \n  applyFavicon();\n  setTimeout(applyFavicon, 100);\n  setTimeout(applyFavicon, 300);\n  setTimeout(applyFavicon, 600);\n}\n\nfunction applyDisguise(title, favicon) {\n  if (title) { document.title = title; document.getElementById('curTitle').textContent = title; try { localStorage.setItem('disguiseTitle', title); } catch(e) {} }\n  if (favicon) { setFavicon(favicon); document.getElementById('curFavicon').textContent = favicon; try { localStorage.setItem('disguiseFavicon', favicon); } catch(e) {} }\n}\n\nfunction resetDisguise() {\n  document.title = DEFAULT_TITLE;\n  setFavicon(DEFAULT_FAVICON);\n  document.getElementById('curTitle').textContent = DEFAULT_TITLE;\n  document.getElementById('curFavicon').textContent = 'Default';\n  document.getElementById('inputTitle').value = '';\n  document.getElementById('inputFavicon').value = '';\n  try { localStorage.removeItem('disguiseTitle'); localStorage.removeItem('disguiseFavicon'); } catch(e) {}\n}\n\nloadSavedDisguise();\n\n    const hamburger = document.getElementById('hamburger');\n    const menu = document.getElementById('menu');\n    const closeBtn = document.getElementById('closeBtn');\n    const links = document.querySelectorAll('.nav-link[data-src]');\n    const homeLink = document.querySelector('.nav-home');\n    const contentDisplay = document.getElementById('content-display');\n    // ========== DISGUISE MODAL CONTROLS ==========\nconst disguiseOverlay = document.getElementById('disguiseOverlay');\ndocument.getElementById('changeDisguiseBtn').addEventListener('click', () => { \n  disguiseOverlay.classList.add('show'); \n  hamburger.classList.remove('active'); \n  menu.classList.remove('open'); \n});\ndocument.getElementById('disguiseCancel').addEventListener('click', () => disguiseOverlay.classList.remove('show'));\ndocument.getElementById('disguiseReset').addEventListener('click', () => { resetDisguise(); disguiseOverlay.classList.remove('show'); });\ndocument.getElementById('disguiseApply').addEventListener('click', () => {\n  const t = document.getElementById('inputTitle').value.trim();\n  const f = document.getElementById('inputFavicon').value.trim();\n  applyDisguise(t || null, f || null);\n  disguiseOverlay.classList.remove('show');\n});\ndocument.querySelectorAll('.preset:not(.lp)').forEach(btn => {\n  btn.addEventListener('click', () => { \n    document.getElementById('inputTitle').value = btn.dataset.t; \n    document.getElementById('inputFavicon').value = btn.dataset.f; \n  });\n});\ndisguiseOverlay.addEventListener('click', e => { if (e.target === disguiseOverlay) disguiseOverlay.classList.remove('show'); });\n\n// ========== LAUNCH MODAL SYSTEM ==========\nconst launchOverlay = document.getElementById('launchOverlay');\nconst customCheck = document.getElementById('customCheck');\nconst launchOpts = document.getElementById('launchOpts');\nlet pendingUrl = null;\n\ncustomCheck.addEventListener('change', () => launchOpts.classList.toggle('show', customCheck.checked));\ndocument.querySelectorAll('.preset.lp').forEach(btn => {\n  btn.addEventListener('click', () => { \n    document.getElementById('launchTitle').value = btn.dataset.t; \n    document.getElementById('launchFavicon').value = btn.dataset.f; \n  });\n});\ndocument.getElementById('launchCancel').addEventListener('click', () => { launchOverlay.classList.remove('show'); pendingUrl = null; });\nlaunchOverlay.addEventListener('click', e => { if (e.target === launchOverlay) { launchOverlay.classList.remove('show'); pendingUrl = null; } });\n\ndocument.getElementById('launchGo').addEventListener('click', () => {\n  if (!pendingUrl) return;\n  const cTitle = customCheck.checked ? document.getElementById('launchTitle').value.trim() : '';\n  const cFav = customCheck.checked ? document.getElementById('launchFavicon').value.trim() : '';\n  launchWithDisguise(pendingUrl, cTitle, cFav);\n  launchOverlay.classList.remove('show');\n  pendingUrl = null;\n});\n\nwindow.showLaunchModal = function(url) {\n  pendingUrl = url;\n  document.getElementById('launchTitle').value = '';\n  document.getElementById('launchFavicon').value = '';\n  customCheck.checked = false;\n  launchOpts.classList.remove('show');\n  launchOverlay.classList.add('show');\n}\n\nfunction launchWithDisguise(url, cTitle, cFav) {\n  const newWin = window.open(\"about:blank\", \"_blank\");\n  if (!newWin) { console.error(\"Popup blocked\"); return; }\n  fetch(url + \"?t=\" + Date.now())\n    .then(r => r.text())\n    .then(html => {\n      let mod = html;\n      \n      // Remove existing favicons and title from HTML\n      mod = mod.replace(/<link[^>]*rel=[\"'](?:icon|shortcut icon|apple-touch-icon)[\"'][^>]*>/gi, '');\n      if (cTitle) {\n        mod = mod.replace(/<title>.*?<\\/title>/gi, '');\n      }\n      \n      // Create script to apply disguise to this window AND override window.open for child windows\n      let injectionScript = '<script>';\n      injectionScript += '(function(){';\n      injectionScript += 'var customTitle = ' + (cTitle ? '\"' + cTitle.replace(/\\\\/g, '\\\\\\\\').replace(/\"/g, '\\\\\"') + '\"' : 'null') + ';';\n      injectionScript += 'var customFav = ' + (cFav ? '\"' + cFav.replace(/\\\\/g, '\\\\\\\\').replace(/\"/g, '\\\\\"') + '\"' : 'null') + ';';\n      injectionScript += `\n        // Function to apply disguise to current window\n        function applyToSelf() {\n          try {\n            if (customTitle) {\n              document.title = customTitle;\n            }\n            if (customFav && document.head) {\n              var icons = document.querySelectorAll('link[rel*=\"icon\"]');\n              icons.forEach(function(el) { el.remove(); });\n              var link = document.createElement('link');\n              link.rel = 'icon';\n              link.type = 'image/x-icon';\n              link.href = customFav;\n              document.head.appendChild(link);\n            }\n          } catch(e) {}\n        }\n        \n        // Apply immediately and multiple times\n        applyToSelf();\n        setTimeout(applyToSelf, 50);\n        setTimeout(applyToSelf, 150);\n        setTimeout(applyToSelf, 300);\n        setTimeout(applyToSelf, 500);\n        setTimeout(applyToSelf, 1000);\n        setTimeout(applyToSelf, 2000);\n        \n        // Override window.open for child windows\n        var originalOpen = window.open;\n        window.open = function(url, target, features) {\n          var win = originalOpen.call(window, url, target, features);\n          if (win) {\n            function applyDisguise() {\n              try {\n                if (customTitle && win.document) {\n                  win.document.title = customTitle;\n                }\n                if (customFav && win.document && win.document.head) {\n                  var icons = win.document.querySelectorAll('link[rel*=\"icon\"]');\n                  icons.forEach(function(el) { el.remove(); });\n                  var link = win.document.createElement('link');\n                  link.rel = 'icon';\n                  link.type = 'image/x-icon';\n                  link.href = customFav;\n                  win.document.head.appendChild(link);\n                }\n              } catch(e) {}\n            }\n            applyDisguise();\n            setTimeout(applyDisguise, 50);\n            setTimeout(applyDisguise, 200);\n            setTimeout(applyDisguise, 500);\n            setTimeout(applyDisguise, 1000);\n            setTimeout(applyDisguise, 2000);\n          }\n          return win;\n        };\n      `;\n      injectionScript += '})();';\n      injectionScript += '<\\/script>';\n      \n      // Inject at start of head\n      if (mod.toLowerCase().includes('<head>')) {\n        mod = mod.replace(/<head>/i, '<head>' + injectionScript);\n      } else if (mod.toLowerCase().includes('<html>')) {\n        mod = mod.replace(/<html[^>]*>/i, '$&<head>' + injectionScript + '</head>');\n      } else {\n        mod = injectionScript + mod;\n      }\n      \n      newWin.document.open();\n      newWin.document.write(mod);\n      newWin.document.close();\n    })\n    .catch(err => { console.error(\"Fetch error:\", err); newWin.close(); });\n}\n\n// Listen for postMessage from launch pages\nwindow.addEventListener('message', e => { if (e.data && e.data.type === 'showLaunchModal') showLaunchModal(e.data.url); });\n    const homePageHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<audio src=\"https://cdn.jsdelivr.net/gh/shayderrr/Static@main/Ambient-BreakcoreDnB-Mix-02.mp3\" autoplay loop></audio>\n    <title>The Game Vault | 🕹️👾</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap\" rel=\"stylesheet\">\n    <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        :root {\n            --purple-900: #1a0033;\n            --purple-800: #2d0052;\n            --purple-700: #4a0080;\n            --purple-600: #6b21a8;\n            --purple-500: #8b5cf6;\n            --purple-400: #a78bfa;\n            --purple-300: #c4b5fd;\n            --purple-200: #e9d5ff;\n            --purple-100: #f3e8ff;\n            --black: #000000;\n            --white: #ffffff;\n            --gold: #fbbf24;\n        }\n\n        body {\n            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n            background: var(--black);\n            color: var(--white);\n            min-height: 100vh;\n            position: relative;\n            overflow-x: hidden;\n        }\n\n        /* Animated background */\n        .background-gradient {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(135deg, #000000 0%, #0a0015 50%, #000000 100%);\n            z-index: 0;\n        }\n\n        .stars {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            background-image: \n                radial-gradient(2px 2px at 20px 30px, white, transparent),\n                radial-gradient(2px 2px at 60px 70px, white, transparent),\n                radial-gradient(1px 1px at 50px 50px, white, transparent),\n                radial-gradient(1px 1px at 130px 80px, white, transparent),\n                radial-gradient(2px 2px at 90px 150px, white, transparent);\n            background-repeat: repeat;\n            background-size: 200px 200px;\n            opacity: 0.4;\n            animation: starsMove 100s linear infinite;\n            z-index: 1;\n        }\n\n        @keyframes starsMove {\n            from { transform: translateY(0); }\n            to { transform: translateY(-200px); }\n        }\n\n        /* Purple glow orbs */\n        .orb {\n            position: fixed;\n            border-radius: 50%;\n            filter: blur(60px);\n            opacity: 0.1;\n            z-index: 2;\n            animation: float 20s ease-in-out infinite;\n        }\n\n        .orb-1 {\n            width: 400px;\n            height: 400px;\n            background: radial-gradient(circle, var(--purple-600), transparent);\n            top: -100px;\n            left: -100px;\n            animation-duration: 25s;\n        }\n\n        .orb-2 {\n            width: 350px;\n            height: 350px;\n            background: radial-gradient(circle, var(--purple-700), transparent);\n            bottom: -100px;\n            right: -100px;\n            animation-duration: 30s;\n            animation-delay: -10s;\n        }\n\n        @keyframes float {\n            0%, 100% { transform: translate(0, 0) scale(1); }\n            33% { transform: translate(50px, -50px) scale(1.1); }\n            66% { transform: translate(-50px, 50px) scale(0.9); }\n        }\n\n        /* Main container */\n        .container {\n            position: relative;\n            z-index: 10;\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 2rem;\n            min-height: 100vh;\n            animation: fadeIn 1s ease-out;\n        }\n\n        @keyframes fadeIn {\n            from { opacity: 0; transform: translateY(20px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n\n        /* Header */\n        .header {\n            text-align: center;\n            padding: 3rem 0 2rem;\n        }\n\n        /* Page title */\n        .page-title {\n            font-family: 'Space Grotesk', sans-serif;\n            font-size: 3.5rem;\n            font-weight: 700;\n            margin-bottom: 1.5rem;\n            letter-spacing: -0.02em;\n            text-align: center;\n            padding-top: 80px;\n        }\n\n        .page-title .title-text {\n            background: linear-gradient(135deg, var(--white) 0%, var(--purple-300) 100%);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            background-clip: text;\n        }\n\n        .page-subtitle {\n            font-size: 1.125rem;\n            color: var(--purple-200);\n            margin-bottom: 3rem;\n            font-weight: 400;\n            text-align: center;\n            line-height: 1.8;\n            max-width: 900px;\n            margin-left: auto;\n            margin-right: auto;\n        }\n\n        .page-subtitle a {\n            text-decoration: none;\n            color: var(--purple-200);\n        }\n\n        /* SIMPLIFIED SEARCH SECTION */\n        .search-section {\n            max-width: 600px;\n            margin: 0 auto 3rem;\n        }\n\n        .search-wrapper {\n            position: relative;\n            width: 100%;\n        }\n\n        .search-input {\n            width: 100%;\n            padding: 14px 48px 14px 20px;\n            background: rgba(255, 255, 255, 0.05);\n            border: 1px solid rgba(139, 92, 246, 0.2);\n            border-radius: 12px;\n            color: var(--white);\n            font-size: 1rem;\n            font-family: 'Inter', sans-serif;\n            transition: all 0.2s ease;\n            outline: none;\n        }\n\n        .search-input::placeholder {\n            color: rgba(196, 181, 253, 0.6);\n        }\n\n        .search-input:focus {\n            background: rgba(255, 255, 255, 0.07);\n            border-color: var(--purple-500);\n            box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.1);\n        }\n\n        .search-button {\n            position: absolute;\n            right: 6px;\n            top: 50%;\n            transform: translateY(-50%);\n            background: transparent;\n            border: none;\n            color: var(--purple-400);\n            cursor: pointer;\n            padding: 10px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: color 0.2s ease;\n        }\n\n        .search-button:hover {\n            color: var(--purple-300);\n        }\n\n        .search-icon {\n            width: 20px;\n            height: 20px;\n        }\n\n        /* Quick filters - cleaner design */\n        .quick-filters {\n            display: flex;\n            justify-content: center;\n            gap: 0.75rem;\n            margin-top: 1.25rem;\n            flex-wrap: wrap;\n        }\n\n        .filter-btn {\n            padding: 0.5rem 1rem;\n            background: transparent;\n            border: 1px solid rgba(139, 92, 246, 0.2);\n            border-radius: 8px;\n            color: var(--purple-300);\n            font-size: 0.875rem;\n            font-weight: 500;\n            cursor: pointer;\n            transition: all 0.2s ease;\n            font-family: 'Inter', sans-serif;\n        }\n\n        .filter-btn:hover {\n            background: rgba(139, 92, 246, 0.1);\n            border-color: var(--purple-400);\n            color: var(--white);\n        }\n\n        /* Divider */\n        .divider {\n            height: 1px;\n            background: linear-gradient(90deg, transparent, var(--purple-500), transparent);\n            margin: 3rem 0;\n            opacity: 0.3;\n        }\n\n        /* Games section */\n        .games-section {\n            max-width: 900px;\n            margin: 0 auto 3rem;\n        }\n\n        .game-card {\n            background: rgba(255, 255, 255, 0.03);\n            backdrop-filter: blur(20px);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 1.5rem;\n            padding: 2rem;\n            margin-bottom: 2rem;\n            transition: all 0.3s ease;\n        }\n\n        .game-card:hover {\n            background: rgba(255, 255, 255, 0.05);\n            border-color: rgba(139, 92, 246, 0.3);\n            transform: translateY(-5px);\n            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);\n        }\n\n        .game-header {\n            display: flex;\n            align-items: flex-start;\n            gap: 1.5rem;\n            margin-bottom: 1.5rem;\n        }\n\n        .game-image-placeholder {\n            width: 200px;\n            height: 150px;\n            background: rgba(139, 92, 246, 0.1);\n            border: 2px dashed rgba(139, 92, 246, 0.3);\n            border-radius: 1rem;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-shrink: 0;\n            color: var(--purple-300);\n            font-size: 0.875rem;\n            text-align: center;\n            padding: 1rem;\n        }\n\n        .game-image {\n            width: 200px;\n            height: 150px;\n            border-radius: 1rem;\n            object-fit: cover;\n            flex-shrink: 0;\n        }\n\n        .game-info {\n            flex: 1;\n        }\n\n        .game-title {\n            font-family: 'Space Grotesk', sans-serif;\n            font-size: 1.75rem;\n            font-weight: 700;\n            color: var(--white);\n            margin-bottom: 0.75rem;\n        }\n\n        .game-rating {\n            font-size: 1.25rem;\n            margin-bottom: 0.5rem;\n            letter-spacing: 0.1em;\n        }\n\n        .game-description {\n            font-size: 1rem;\n            line-height: 1.8;\n            color: var(--purple-100);\n            margin-bottom: 1rem;\n        }\n\n        .game-tags {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 0.5rem;\n        }\n\n        .game-tag {\n            background: rgba(139, 92, 246, 0.2);\n            color: var(--purple-200);\n            padding: 0.4rem 1rem;\n            border-radius: 1rem;\n            font-size: 0.875rem;\n            font-weight: 500;\n            border: 1px solid rgba(139, 92, 246, 0.3);\n        }\n\n        /* Footer section */\n        .footer-section {\n            background: rgba(255, 255, 255, 0.03);\n            backdrop-filter: blur(20px);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 1.5rem;\n            padding: 2.5rem;\n            max-width: 900px;\n            margin: 3rem auto;\n            text-align: center;\n        }\n\n        .footer-title {\n            font-family: 'Space Grotesk', sans-serif;\n            font-size: 1.5rem;\n            font-weight: 600;\n            color: var(--white);\n            margin-bottom: 1rem;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 0.75rem;\n            flex-wrap: wrap;\n        }\n\n        .contributor {\n            display: inline-flex;\n            align-items: center;\n            gap: 0.5rem;\n        }\n\n        .star-icon {\n            display: inline-block;\n            font-size: 1.25rem;\n            animation: rotateStar 3s linear infinite;\n            filter: drop-shadow(0 0 8px #fbbf24);\n            color: #fbbf24;\n        }\n\n        @keyframes rotateStar {\n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n        }\n\n        .dizzy-icon {\n            display: inline-block;\n            position: relative;\n            width: 1.5rem;\n            height: 1.5rem;\n            margin-left: 0.25rem;\n        }\n\n        .dizzy-icon svg {\n            width: 100%;\n            height: 100%;\n        }\n\n        /* Sequential reveal animation for shield parts */\n        .badge-outline {\n            stroke-dasharray: 100;\n            stroke-dashoffset: 100;\n            animation: drawOutline 2s ease-in-out infinite;\n        }\n\n        .badge-fill {\n            opacity: 0;\n            animation: fadeInBadge 2s ease-in-out infinite;\n            animation-delay: 0.5s;\n        }\n\n        .badge-star {\n            opacity: 0;\n            transform: scale(0);\n            transform-origin: center;\n            animation: popInStar 2s ease-in-out infinite;\n            animation-delay: 1s;\n        }\n\n        @keyframes drawOutline {\n            0% {\n                stroke-dashoffset: 100;\n                opacity: 0;\n            }\n            25% {\n                stroke-dashoffset: 0;\n                opacity: 1;\n            }\n            75% {\n                stroke-dashoffset: 0;\n                opacity: 1;\n            }\n            100% {\n                stroke-dashoffset: 100;\n                opacity: 0;\n            }\n        }\n\n        @keyframes fadeInBadge {\n            0% {\n                opacity: 0;\n            }\n            25% {\n                opacity: 0;\n            }\n            50% {\n                opacity: 1;\n            }\n            75% {\n                opacity: 1;\n            }\n            100% {\n                opacity: 0;\n            }\n        }\n\n        @keyframes popInStar {\n            0% {\n                opacity: 0;\n                transform: scale(0);\n            }\n            50% {\n                opacity: 0;\n                transform: scale(0);\n            }\n            62.5% {\n                opacity: 1;\n                transform: scale(1.2);\n            }\n            75% {\n                opacity: 1;\n                transform: scale(1);\n            }\n            100% {\n                opacity: 0;\n                transform: scale(0);\n            }\n        }\n\n        .footer-message {\n            font-size: 1rem;\n            line-height: 1.8;\n            color: var(--purple-100);\n            margin-bottom: 1.5rem;\n        }\n\n        .footer-links {\n            display: flex;\n            justify-content: center;\n            gap: 1rem;\n            flex-wrap: wrap;\n        }\n\n        .footer-link {\n            display: inline-flex;\n            align-items: center;\n            gap: 0.5rem;\n            background: linear-gradient(135deg, var(--purple-600), var(--purple-700));\n            color: var(--white);\n            padding: 0.75rem 1.5rem;\n            border-radius: 0.75rem;\n            font-size: 0.9375rem;\n            font-weight: 600;\n            text-decoration: none;\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);\n            transition: all 0.3s ease;\n        }\n\n        .footer-link:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);\n        }\n\n        /* Responsive design */\n        @media (max-width: 768px) {\n            .container {\n                padding: 1rem;\n            }\n\n            .page-title {\n                font-size: 2.5rem;\n            }\n\n            .page-subtitle {\n                font-size: 1rem;\n            }\n\n            .search-input {\n                font-size: 0.9375rem;\n                padding: 12px 44px 12px 16px;\n            }\n\n            .game-header {\n                flex-direction: column;\n            }\n\n            .game-image-placeholder,\n            .game-image {\n                width: 100%;\n                height: 200px;\n            }\n\n            .game-title {\n                font-size: 1.5rem;\n            }\n\n            .footer-title {\n                font-size: 1.25rem;\n                flex-direction: column;\n                gap: 0.5rem;\n            }\n        }\n\n        @media (max-width: 480px) {\n            .page-title {\n                font-size: 2rem;\n            }\n\n            .search-input {\n                font-size: 0.875rem;\n            }\n\n            .quick-filters {\n                gap: 0.5rem;\n            }\n\n            .filter-btn {\n                font-size: 0.8125rem;\n                padding: 0.4rem 0.8rem;\n            }\n\n            .game-card {\n                padding: 1.5rem;\n            }\n\n            .footer-section {\n                padding: 2rem 1.5rem;\n            }\n\n            .footer-links {\n                flex-direction: column;\n            }\n\n            .footer-link {\n                width: 100%;\n                justify-content: center;\n            }\n        }\n    </style>\n</head>\n<body>\n    <!-- Background elements -->\n    <div class=\"background-gradient\"></div>\n    <div class=\"stars\"></div>\n    <div class=\"orb orb-1\"></div>\n    <div class=\"orb orb-2\"></div>\n\n    <!-- Main content -->\n    <div class=\"container\">\n        <header class=\"header\">\n        </header>\n\n        <main>\n            <h1 class=\"page-title\"><span class=\"title-text\">The Game Vault</span> | 🕹️👾</h1>\n            <p class=\"page-subtitle\">\n                Discover and play hundreds of fun, free online games — all in one place. With over 7,000 games available, there's always something new to explore. Not into games? No problem — we also offer powerful tools like Chat Room, LSB Steganography, and much more. Join us on this adventure as we make school a little more fun.  \n                <a href=\"https://forms.gle/g6GjUZYHRLpRway36\" target=\"_blank\">Want to suggest games? Click here!</a>\n                <center><h2>Click the menu icon at the top left</h2></center>\n            </p>\n            \n\n            <!-- Simplified Search Section -->\n            <div class=\"search-section\">\n                <form id=\"searchForm\">\n                    <div class=\"search-wrapper\">\n                        <input \n                            type=\"text\" \n                            class=\"search-input\" \n                            id=\"searchInput\"\n                            placeholder=\"Search google\" \n                            required\n                        >\n                        <button type=\"submit\" class=\"search-button\" aria-label=\"Search\">\n                            <svg class=\"search-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" />\n                            </svg>\n                        </button>\n                    </div>\n                </form>\n                <div class=\"quick-filters\">\n                    <button type=\"button\" class=\"filter-btn\" data-search=\"Games\">Games</button>\n                    <button type=\"button\" class=\"filter-btn\" data-search=\"HTML\">HTML</button>\n                    <button type=\"button\" class=\"filter-btn\" data-search=\"Network\">Network</button>\n                    <button type=\"button\" class=\"filter-btn\" data-search=\"AI\">AI</button>\n                </div>\n            </div>\n\n            <div class=\"divider\"></div>\n\n            <!-- Games Section -->\n            <section class=\"games-section\">\n                <!-- Game 1: Basket Random -->\n                <div class=\"game-card\">\n                    <div class=\"game-header\">\n                        <div class=\"game-image-placeholder\">\n                            <img src=\"https://play-lh.googleusercontent.com/6AN9KKe5M9udzoQA1J00dc6po5dNY9JInI_ewDKcPXocPjEHWTqJV0d2CwSWxYRhTh4=w526-h296-rw\" alt=\"Basket Random\" width=\"210px\" height=\"150px\" style=\"border-radius: 4px;\">\n                        </div>\n                        <div class=\"game-info\" style=\"margin-top: 2rem;\">\n                            <h2 class=\"game-title\">Basket Random</h2>\n                            <div class=\"game-rating\">⭐⭐⭐⭐⭐</div>\n                        </div>\n                    </div>\n                    <p class=\"game-description\">\n                        Fun, fast-paced browser basketball game where you face off as wobbly, cartoonish players in unpredictable one-on-one matches. You can play solo, locally with a friend, or compete in crazy randomized courts. The controls are simple, the action is chaotic and silly, and the goal is to jump, tip, and out-score your opponent with wild physics to become the ultimate hoops champ.\n                    </p>\n                    <div class=\"game-tags\">\n                        <span class=\"game-tag\">HTML Games</span>\n                        <span class=\"game-tag\">More Games</span>\n                    </div>\n                </div>\n\n                <!-- Game 2: Gunspin -->\n                <div class=\"game-card\">\n                    <div class=\"game-header\">\n                        <div class=\"game-image-placeholder\">\n                            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS20YMopMPcV7xgRlO_4aq33o6XUMavO5Hg&s\" alt=\"Gunspin\" width=\"210px\" height=\"150px\" style=\"border-radius: 4px;\">\n                        </div>\n                        <div class=\"game-info\" style=\"margin-top: 2rem;\">\n                            <h2 class=\"game-title\">Gunspin</h2>\n                            <div class=\"game-rating\" style=\"color: var(--gold);\">\n                                ⭐⭐⭐⭐<span style=\"filter: grayscale(100%) brightness(20%);\">⭐</span>\n                            </div>\n                        </div>\n                    </div>\n                    <p class=\"game-description\">\n                        Fun, fast-paced browser arcade game where you launch your gun and fly through chaotic, physics-based runs. You can play solo, try to beat your best distance, or compete for high scores online. The controls are simple, the action is wild and unpredictable, and the goal is to shoot, chain, and out-fly your previous runs to become the ultimate champ.\n                    </p>\n                    <div class=\"game-tags\">\n                        <span class=\"game-tag\">HTML Games</span>\n                        <span class=\"game-tag\">More Games</span>\n                    </div>\n                </div>\n            </section>\n\n            <div class=\"divider\"></div>\n\n            <!-- Footer Section -->\n            <section class=\"footer-section\">\n                <div class=\"footer-title\">\n                    <span>Made by:</span>\n                    <span class=\"contributor\">\n                        <span>anon</span>\n                        <span class=\"star-icon\">★</span>\n                    </span>\n                    <span>|</span>\n                    <span>Other contributors:</span>\n                    <span class=\"contributor\">\n                        <span>? , Bredcat, shayder, BigMacThuggin</span>\n                        <span class=\"dizzy-icon\">\n                            <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <!-- Shield/Badge outline (draws first) -->\n                                <path class=\"badge-outline\" d=\"M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z\" \n                                      stroke=\"#8b5cf6\" stroke-width=\"1.5\" fill=\"none\"/>\n                                \n                                <!-- Shield fill (appears second) -->\n                                <path class=\"badge-fill\" d=\"M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z\" \n                                      fill=\"#8b5cf6\" opacity=\"0.3\"/>\n                                \n                                <!-- Checkmark/Star in center (pops in last) -->\n                                <path class=\"badge-star\" d=\"M9 12l2 2 4-4\" \n                                      stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                            </svg>\n                        </span>\n                    </span>\n                </div>\n                <p class=\"footer-message\">\n                    I have a lot of motivation and enthusiasm for this project. I will try my best \n                    to keep up with the progress on this website! Trust me, this will be an epic \n                    adventure for all of the people in this group, especially since this is risk-free \n                    from trouble.\n                </p>\n                <div class=\"footer-links\">\n                    <a href=\"https://sites.google.com/student.allenisd.org/the-game-vault/home-page/guidelines\" class=\"footer-link\" target=\"_blank\">\n                        <svg style=\"width: 1.25rem; height: 1.25rem;\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"></path>\n                        </svg>\n                        <span>Guidelines</span>\n                    </a>\n                    <a href=\"https://sites.google.com/student.allenisd.org/the-game-vault/home-page/announcements\" class=\"footer-link\">\n                        <svg style=\"width: 1.25rem; height: 1.25rem;\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z\"></path>\n                        </svg>\n                        <span>Announcements</span>\n                    </a>\n                </div>\n            </section>\n        </main>\n    </div>\n\n   <script>\ndocument.addEventListener('DOMContentLoaded', function() {\n    const searchForm = document.getElementById('searchForm');\n    const searchInput = document.getElementById('searchInput');\n    const filterBtns = document.querySelectorAll('.filter-btn');\n\n    // Handle form submission\n    searchForm.addEventListener('submit', function(e) {\n        e.preventDefault();\n        const query = searchInput.value.trim();\n        if (query) {\n            performSearch(query);\n        }\n    });\n\n    // Handle filter button clicks\n    filterBtns.forEach(btn => {\n        btn.addEventListener('click', function() {\n            const searchTerm = this.getAttribute('data-search');\n            searchInput.value = searchTerm;\n            performSearch(searchTerm);\n        });\n    });\n\n    // Perform Google search\n    function performSearch(query) {\n    const tab = window.open(\"about:blank\", \"_blank\");\n\n    const html =\n'<!DOCTYPE html>' +\n'<html>' +\n'<head>' +\n'<title>Untitled</title>' +\n'<style>' +\n'html,body{margin:0;padding:0;height:100%;overflow:hidden;background:#fff;font-family:sans-serif;}' +\n'iframe{border:none;width:100%;height:100%;}' +\n'</style>' +\n'</head>' +\n'<body>' +\n'<iframe src=\"https://www.google.com/search?q=' + encodeURIComponent(query) + '&igu=1\"></iframe>' +\n'</body>' +\n'</html>';\n\n    tab.document.open();\n    tab.document.write(html);\n    tab.document.close();\n}\n\n    // Keyboard shortcut (Ctrl/Cmd + K)\n    document.addEventListener('keydown', function(e) {\n        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {\n            e.preventDefault();\n            searchInput.focus();\n            searchInput.select();\n        }\n    });\n});\n<\\/script>\n</body>\n</html>\n    `;\n\n    hamburger.addEventListener('click', () => {\n      hamburger.classList.toggle('active');\n      menu.classList.toggle('open');\n    });\n    closeBtn.addEventListener('click', () => {\n      hamburger.classList.remove('active');\n      menu.classList.remove('open');\n    });\n    document.addEventListener('click', e => {\n      if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('open')) {\n        hamburger.classList.remove('active');\n        menu.classList.remove('open');\n      }\n    });\n    function loadContent(url) {\n      fetch(url)\n        .then(response => response.text())\n        .then(html => {\n          contentDisplay.innerHTML = html;\n          const scripts = contentDisplay.querySelectorAll('script');\n          scripts.forEach(oldScript => {\n            const newScript = document.createElement('script');\n            Array.from(oldScript.attributes).forEach(attr => {\n              newScript.setAttribute(attr.name, attr.value);\n            });\n            newScript.textContent = oldScript.textContent;\n            oldScript.parentNode.replaceChild(newScript, oldScript);\n          });\n        })\n        .catch(err => {\n          contentDisplay.innerHTML = '<div style=\"padding:2rem;color:var(--p3);\">Error loading content</div>';\n        });\n    }\n    function loadHomePage() {\n      contentDisplay.innerHTML = homePageHTML;\n      const scripts = contentDisplay.querySelectorAll('script');\n      scripts.forEach(oldScript => {\n        const newScript = document.createElement('script');\n        Array.from(oldScript.attributes).forEach(attr => {\n          newScript.setAttribute(attr.name, attr.value);\n        });\n        newScript.textContent = oldScript.textContent;\n        oldScript.parentNode.replaceChild(newScript, oldScript);\n      });\n    }\n    homeLink.addEventListener('click', e => {\n      e.preventDefault();\n      loadHomePage();\n      if(window.innerWidth <= 768){\n        hamburger.classList.remove('active');\n        menu.classList.remove('open');\n      }\n    });\n    links.forEach(link => {\n      link.addEventListener('click', e => {\n        e.preventDefault();\n        const url = link.getAttribute('data-src');\n        loadContent(url);\n        if(window.innerWidth <= 768){\n          hamburger.classList.remove('active');\n          menu.classList.remove('open');\n        }\n      });\n    });\n\nconst htmlGamesLocalHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/thedecap/676767@170c9a9b51bcc26e2400cbf0efe684cafb28e106/ugs.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\nconst linkedMore = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', launch);\n    function launch() {\n      const newWin = window.open(\"about:blank\", \"_blank\");\n      if (!newWin) {\n        console.error(\"Popup blocked\");\n        return;\n      }\n      fetch(\"https://cdn.jsdelivr.net/gh/shayderrr/676767/moregames.html?t=\" + Date.now())\n        .then(response => response.text())\n        .then(text => {\n          newWin.document.open();\n          newWin.document.write(text);\n          newWin.document.close();\n        })\n        .catch(err => {\n          console.error(\"Fetch error:\", err);\n          newWin.close();\n        });\n    }\n  <\\/script>\n</body>\n</html>\n`;\n\nconst oslink = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/shayderrr/676767@main/operating.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\nconst ethansGamesHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/shayderrr/676767@4d0ea0395c0791bd6dc40c0f7fc7c5262bf9f17f/ethans.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\nconst ownerGamesHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/shayderrr/676767/owner.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\nconst extremeGamesHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/shayderrr/676767/extreme.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\nconst dominumGamesHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/shayderrr/676767/dominum.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\nconst superGamesHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/shayderrr/676767/super.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\nconst blooketHTML = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    html, body { padding: 0; margin: 0; height: 100%; }\n    .button { display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: #000; color: #fff; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; cursor: pointer; text-decoration: none; transition: background-color 0.3s; }\n    .button:hover { background-color: #4a148c; }\n  </style>\n</head>\n<body>\n  <a id=\"button\" class=\"button\">Launch In A New Tab</a>\n  <script>\n    document.getElementById('button').addEventListener('click', function(){\n      window.showLaunchModal('https://cdn.jsdelivr.net/gh/nobody81754/modded-htmls@master/blooket.html');\n    });\n  <\\/script>\n</body>\n</html>\n`;\n\n    /// for devs, set func here, for ex js copy and then link it\nfunction setContent(html) {\n  contentDisplay.innerHTML = html;\n  Array.from(contentDisplay.querySelectorAll('script')).forEach(old => {\n    const script = document.createElement('script');\n    Array.from(old.attributes).forEach(attr => script.setAttribute(attr.name, attr.value));\n    script.textContent = old.textContent;\n    old.parentNode.replaceChild(script, old);\n  });\n}\n\ndocument.getElementById('ethansGamesLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(ethansGamesHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n\ndocument.getElementById('ownerGamesLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(ownerGamesHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n\ndocument.getElementById('htmlGamesLocalLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(htmlGamesLocalHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\ndocument.getElementById('moreGamesLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(linkedMore);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n\ndocument.getElementById('extremeGamesLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(extremeGamesHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n\ndocument.getElementById('dominumGamesLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(dominumGamesHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n\ndocument.getElementById('superGamesLink').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(superGamesHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n\ndocument.getElementById('operatingsystem').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(oslink);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\ndocument.getElementById('blooket').addEventListener('click', function(e){\n  e.preventDefault();\n  setContent(blooketHTML);\n  hamburger.classList.remove('active');\n  menu.classList.remove('open');\n});\n  \n    loadHomePage();\n  "
];

function runInlineScripts(){
    inlineScripts.forEach(code => {
        const s = document.createElement("script");
        s.textContent = code;
        document.body.appendChild(s);
    });

    if(typeof onAllScriptsLoaded === "function"){
        onAllScriptsLoaded();
    }
}

loadScriptsSequentially([...externalScripts], runInlineScripts);
})();


