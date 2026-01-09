import { useEffect } from 'react'
import './App.css'

const socialLinks = [
  {
    id: 'tiktok',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>,
    text: 'TikTok',
    href: 'https://www.tiktok.com/@glow_with_kc?_r=1&_t=ZS-92uplmg6kJJ'
  },
  {
    id: 'shopee',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Shopee</title><path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" /></svg>,
    text: 'Shopee',
    href: 'https://ph.shp.ee/4wWn3Xr'
  },
  {
    id: 'facebook',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>,
    text: 'Facebook',
    href: 'https://www.facebook.com/share/16gCnWDpcR/'
  },
  {
    id: 'viber',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Viber</title><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" /></svg>,
    text: 'Viber',
    href: 'viber://chat?number=639565940237'
  },
  {
    id: 'whatsapp',
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>,
    text: 'WhatsApp',
    href: 'https://wa.me/639565940237'
  }
]

function App() {
  useEffect(() => {
    // Parallax effect for background glows
    const handleMouseMove = (e) => {
      const glows = document.querySelectorAll('.bg-glow')
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20

      glows.forEach((glow, index) => {
        const factor = (index + 1) * 0.5
        glow.style.transform = `translate(${x * factor}px, ${y * factor}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleRipple = (e) => {
    const button = e.currentTarget
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')

    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-effect 0.6s ease-out;
      pointer-events: none;
      z-index: 10;
    `

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }

  return (
    <div className="container">
      {/* Decorative Background Elements */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>

      {/* DNA Pattern Overlay */}
      <div className="dna-pattern">
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="dna-helix dna-1">
          <path d="M50,0 Q80,50 50,100 Q20,150 50,200 Q80,250 50,300 Q20,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50,0 Q20,50 50,100 Q80,150 50,200 Q20,250 50,300 Q80,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" /><circle cx="50" cy="150" r="3" fill="currentColor" />
          <circle cx="50" cy="250" r="3" fill="currentColor" /><circle cx="50" cy="350" r="3" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="dna-helix dna-2">
          <path d="M50,0 Q80,50 50,100 Q20,150 50,200 Q80,250 50,300 Q20,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50,0 Q20,50 50,100 Q80,150 50,200 Q20,250 50,300 Q80,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" /><circle cx="50" cy="150" r="3" fill="currentColor" />
          <circle cx="50" cy="250" r="3" fill="currentColor" /><circle cx="50" cy="350" r="3" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="dna-helix dna-3">
          <path d="M50,0 Q80,50 50,100 Q20,150 50,200 Q80,250 50,300 Q20,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50,0 Q20,50 50,100 Q80,150 50,200 Q20,250 50,300 Q80,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" /><circle cx="50" cy="150" r="3" fill="currentColor" />
          <circle cx="50" cy="250" r="3" fill="currentColor" /><circle cx="50" cy="350" r="3" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="dna-helix dna-4">
          <path d="M50,0 Q80,50 50,100 Q20,150 50,200 Q80,250 50,300 Q20,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50,0 Q20,50 50,100 Q80,150 50,200 Q20,250 50,300 Q80,350 50,400" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" /><circle cx="50" cy="150" r="3" fill="currentColor" />
          <circle cx="50" cy="250" r="3" fill="currentColor" /><circle cx="50" cy="350" r="3" fill="currentColor" />
        </svg>
        {/* Floating Logos */}
        <img src="/logo.png" alt="" className="floating-logo logo-1" aria-hidden="true" />
        <img src="/logo.png" alt="" className="floating-logo logo-2" aria-hidden="true" />
      </div>

      {/* Main Content */}
      <main className="content">
        {/* Avatar/Logo */}
        <div className="avatar-container">
          <div className="avatar">
            <img src="/logo.png" alt="Mama Mica GLW Logo" className="avatar-logo" />
          </div>
          <div className="avatar-ring"></div>
        </div>

        {/* Header */}
        <header className="header">
          <h1 className="title">kc pep</h1>
          <p className="tagline">Glow with Confidence</p>
          <p className="bio">Your daily dose of confidence and beauty essentials.</p>
        </header>

        {/* Link Buttons */}
        <nav className="links" aria-label="Quick Links">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className="link-btn"
              id={link.id}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={handleRipple}
            >
              <span className="btn-icon">{link.icon}</span>
              <span className="btn-text">{link.text}</span>
              <span className="btn-arrow">→</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2026 kc pep</p>
        </footer>
      </main>
    </div>
  )
}

export default App
