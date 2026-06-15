import { version } from '~/utils/config';

export default defineEventHandler((event) => {
  event.node.res.setHeader(
    'Content-Type',
    'text/html; charset=utf-8'
  );

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>FateTube Backend</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:
    radial-gradient(circle at top left,#6d28d9,transparent 40%),
    radial-gradient(circle at bottom right,#2563eb,transparent 40%),
    #0a0a0a;
  font-family:Inter,system-ui,sans-serif;
  color:white;
  overflow:hidden;
}

.card{
  width:min(90%,700px);
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  backdrop-filter:blur(20px);
  border-radius:32px;
  padding:3rem;
  text-align:center;
  box-shadow:
    0 20px 80px rgba(0,0,0,.5),
    inset 0 1px 0 rgba(255,255,255,.1);
}

.logo{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
  margin-bottom:24px;
}

.logo-icon{
  width:64px;
  height:64px;
  border-radius:18px;
  background:linear-gradient(135deg,#7c3aed,#2563eb);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:28px;
  font-weight:700;
}

.logo-text{
  font-size:2.5rem;
  font-weight:800;
  letter-spacing:-1px;
}

.status{
  display:inline-flex;
  align-items:center;
  gap:10px;
  background:rgba(34,197,94,.15);
  border:1px solid rgba(34,197,94,.3);
  color:#4ade80;
  padding:10px 18px;
  border-radius:999px;
  margin-bottom:24px;
}

.dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#4ade80;
  box-shadow:0 0 15px #4ade80;
  animation:pulse 2s infinite;
}

@keyframes pulse{
  0%{opacity:1;}
  50%{opacity:.5;}
  100%{opacity:1;}
}

h1{
  font-size:2rem;
  margin-bottom:12px;
}

p{
  color:#a1a1aa;
  line-height:1.7;
}

.version{
  margin-top:28px;
  display:inline-block;
  padding:10px 16px;
  border-radius:12px;
  background:rgba(255,255,255,0.06);
  color:#d4d4d8;
  font-weight:600;
}

.footer{
  margin-top:24px;
  color:#71717a;
  font-size:.9rem;
}
</style>
</head>

<body>

<div class="card">
  <div class="logo">
    <div class="logo-icon">F</div>
    <div class="logo-text">FateTube</div>
  </div>

  <div class="status">
    <span class="dot"></span>
    Backend Online
  </div>

  <h1>All Systems Operational</h1>

  <p>
    The FateTube backend is running normally and ready to serve requests.
    API services, streaming infrastructure, and database connections are
    functioning as expected.
  </p>

  <div class="version">
    Version v${version}
  </div>

  <div class="footer">
    Powered by FateTube
  </div>
</div>

</body>
</html>
`;
});
