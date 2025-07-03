import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "회사소개 - TRADING GEAR" },
    { name: "description", content: "Trading Gear의 미션과 비전, 팀 소개" },
  ];
};

export default function About() {
  const [theme, setTheme] = useState('dark');
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Apply theme to document
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    if (isClient) {
      localStorage.setItem('theme', newTheme);
      
      // Apply theme to document
      if (newTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Particle = ({ index }) => (
    <div 
      className={`absolute w-1 h-1 rounded-full opacity-10 pointer-events-none animate-pulse
        ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'}`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 4 + 4}s`,
      }}
    />
  );

  const themeClasses = theme === 'dark' 
    ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white'
    : 'bg-gradient-to-br from-white to-slate-50 text-slate-900';

  const headerClasses = theme === 'dark'
    ? 'bg-slate-900/95 border-cyan-400/20'
    : 'bg-white/95 border-blue-600/20';

  const textPrimary = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const textSecondary = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const primaryColor = theme === 'dark' ? 'text-cyan-400' : 'text-blue-600';
  const accentColor = theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      
      {/* Floating particles */}
      {isClient && Array.from({ length: 5 }, (_, i) => (
        <Particle key={i} index={i} />
      ))}

      {/* Header */}
      <header className={`fixed top-0 w-full backdrop-blur-lg z-50 border-b transition-all duration-300 ${headerClasses}`}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
          
          {/* Logo */}
          <div 
            className={`flex items-center text-2xl font-bold cursor-pointer transition-colors duration-300 ${primaryColor}`}
            onClick={navigateToHome}
          >
            <img className="h-[50px]" src="/logo.png" alt="Logo" loading="lazy" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={navigateToHome}>홈</a></li>
            <li><a className={`${primaryColor} font-medium cursor-pointer transition-colors duration-300`}>회사소개</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('journey')}>연혁</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('team')}>팀</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('careers')}>채용</a></li>
            
            {/* Theme Toggle - Desktop */}
            <li>
              <button 
                className={`w-10 h-10 rounded-full border-2 ${theme === 'dark' ? 'border-cyan-400/20 hover:border-cyan-400 hover:text-cyan-400' : 'border-blue-600/20 hover:border-blue-600 hover:text-blue-600'} ${textPrimary} transition-all duration-300 hover:rotate-180 flex items-center justify-center`}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="w-10 h-10 flex flex-col justify-center items-center space-y-1 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <button 
            className={`hidden lg:block ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/30' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/30'} px-6 py-3 rounded-full font-bold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            onClick={navigateToHome}
          >
            시작하기
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={toggleMobileMenu}
        ></div>

        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] ${theme === 'dark' ? 'bg-slate-900/98' : 'bg-white/98'} backdrop-blur-lg border-l ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'} z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex items-center justify-between p-6 border-b border-gray-200/20">
            <div className={`flex items-center text-xl font-bold ${primaryColor}`}>
              <span className="text-2xl mr-2">⚙️</span>
              Trading Gear
            </div>
            <button 
              className="w-8 h-8 flex items-center justify-center focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 rotate-45 absolute`}></span>
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 -rotate-45 absolute`}></span>
            </button>
          </div>

          <div className="flex flex-col h-full">
            <ul className="px-6 py-8 space-y-6 flex-1">
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={navigateToHome}>홈</a></li>
              <li><a className={`block ${primaryColor} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`}>회사소개</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('journey')}>연혁</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('team')}>팀</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('careers')}>채용</a></li>
            </ul>

            <div className="px-6 pb-8 space-y-4">
              <div className="flex items-center justify-between py-4 border-t border-gray-200/20">
                <span className={`${textPrimary} font-medium`}>테마 설정</span>
                <button 
                  className={`w-12 h-12 rounded-full border-2 ${theme === 'dark' ? 'border-cyan-400/20 hover:border-cyan-400 hover:text-cyan-400' : 'border-blue-600/20 hover:border-blue-600 hover:text-blue-600'} ${textPrimary} transition-all duration-300 hover:rotate-180 flex items-center justify-center text-xl`}
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? '🌙' : '☀️'}
                </button>
              </div>
              
              <button 
                className={`w-full ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/30' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/30'} px-6 py-4 rounded-full font-bold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                onClick={navigateToHome}
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-radial from-cyan-400/5' : 'bg-gradient-radial from-blue-600/5'} to-transparent`}></div>
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className={`text-5xl lg:text-7xl font-bold mb-8 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-cyan-400' : 'bg-gradient-to-r from-slate-900 to-blue-600'} bg-clip-text text-transparent`}>
            We're Trading Gear
          </h1>
          <p className={`text-xl lg:text-2xl ${textSecondary} mb-6 leading-relaxed max-w-3xl mx-auto`}>
            AI 기술로 모든 사람이 더 스마트하고 안전한 트레이딩을 할 수 있도록 돕습니다.
          </p>
          <p className={`text-lg ${textSecondary} leading-relaxed max-w-2xl mx-auto`}>
            복잡한 금융 시장을 단순화하고, 개인 투자자들이 전문가 수준의 AI 트레이딩 전략을 활용할 수 있도록 지원합니다.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent to-slate-800/20' : 'bg-gradient-to-b from-transparent to-slate-100/30'}`} id="journey">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-16 ${textPrimary}`}>Our journey</h2>
          
          <div className="space-y-12">
            {[
              {
                year: '2023',
                items: [
                  '회사 설립 및 초기 팀 구성',
                  'AI 기반 트레이딩 알고리즘 연구 시작',
                  'MVP 개발 착수',
                  '시드 투자 유치 (50억원)'
                ]
              },
              {
                year: '2024',
                items: [
                  '베타 서비스 런칭 (1,000명 테스터)',
                  '정식 서비스 오픈',
                  '주요 거래소 API 연동 완료',
                  '그리드 트레이딩 봇 출시',
                  'DCA 트레이딩 봇 출시',
                  '시리즈 A 투자 유치 (200억원)'
                ]
              },
              {
                year: '2025',
                items: [
                  'AI 어시스턴트 기능 강화',
                  '모바일 앱 정식 출시',
                  '해외 시장 진출 (동남아시아)',
                  '고급 포트폴리오 관리 도구 출시'
                ]
              }
            ].map((period, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-slate-800/30 border-l-4 border-cyan-400' : 'bg-white/60 border-l-4 border-blue-600'} pl-8 py-6 rounded-r-xl backdrop-blur-sm`}>
                <h3 className={`text-2xl font-bold mb-4 ${primaryColor}`}>{period.year}</h3>
                <div className="space-y-3">
                  {period.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`${textSecondary} text-lg leading-relaxed`}>
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" id="team">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${textPrimary}`}>Meet the team</h2>
          <p className={`text-xl ${textSecondary} mb-16 leading-relaxed max-w-3xl`}>
            금융, AI, 기술 분야의 전문가들이 모여 트레이딩의 미래를 만들어가고 있습니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: '김민수', 
                role: 'CEO', 
                bio: '전 골드만삭스 퀀트 트레이더. 15년간 금융 시장 경험',
                image: '👨‍💼'
              },
              { 
                name: '박지영', 
                role: 'CTO', 
                bio: '전 구글 AI 연구원. 머신러닝 & 알고리즘 트레이딩 전문가',
                image: '👩‍💻'
              },
              { 
                name: '이현석', 
                role: 'Head of Research', 
                bio: '전 삼성자산운용 펀드매니저. 포트폴리오 최적화 전문가',
                image: '👨‍🔬'
              },
              { 
                name: '최수민', 
                role: 'Head of Design', 
                bio: '10년간 핀테크 UX/UI 디자인 전문가',
                image: '👩‍🎨'
              },
              { 
                name: '정태윤', 
                role: 'Head of Engineering', 
                bio: '전 네이버 시니어 개발자. 고성능 시스템 구축 전문가',
                image: '👨‍💻'
              },
              { 
                name: '윤서연', 
                role: 'Head of Growth', 
                bio: '전 카카오 마케팅 팀장. 사용자 성장 전략 전문가',
                image: '👩‍💼'
              }
            ].map((member, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-slate-800/40' : 'bg-white/70'} rounded-2xl p-6 text-center backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300`}>
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className={`text-xl font-bold mb-2 ${textPrimary}`}>{member.name}</h3>
                <p className={`${primaryColor} font-semibold mb-3 text-sm`}>{member.role}</p>
                <p className={`${textSecondary} text-sm leading-relaxed`}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent to-slate-800/20' : 'bg-gradient-to-b from-transparent to-slate-100/30'}`}>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: '팀 구성원' },
              { number: '500K+', label: '활성 사용자' },
              { number: '15+', label: '연동 거래소' },
              { number: '₩2.8조', label: '총 거래량' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl lg:text-4xl font-bold ${accentColor} mb-2`}>{stat.number}</div>
                <div className={`${textSecondary} text-sm lg:text-base`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working at Trading Gear */}
      <section className="py-20" id="careers">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${textPrimary}`}>Working at Trading Gear</h2>
          <p className={`text-xl ${textSecondary} mb-12 leading-relaxed max-w-3xl mx-auto`}>
            AI 트레이딩의 미래를 함께 만들어갈 동료를 찾고 있습니다. 
            혁신적인 기술과 창의적인 아이디어로 금융의 민주화를 실현해보세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '🚀', title: '혁신적인 기술', desc: '최첨단 AI 기술을 활용한 프로젝트' },
              { icon: '🌟', title: '성장 기회', desc: '빠르게 성장하는 스타트업에서의 경험' },
              { icon: '🤝', title: '훌륭한 동료', desc: '각 분야 최고의 전문가들과 협업' }
            ].map((value, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-slate-800/40' : 'bg-white/70'} rounded-xl p-6 backdrop-blur-sm`}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>{value.title}</h4>
                <p className={`${textSecondary} text-sm leading-relaxed`}>{value.desc}</p>
              </div>
            ))}
          </div>

          <button 
            className={`${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/40' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/40'} px-8 py-4 rounded-full font-bold text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
          >
            채용 공고 보기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-slate-900/90 border-cyan-400/20' : 'bg-white/90 border-blue-600/20'} border-t py-12`}>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['회사소개', '이용약관', '개인정보처리방침', '고객지원', '블로그', '채용정보'].map((link) => (
              <a key={link} className={`${textSecondary} hover:${primaryColor.replace('text-', 'text-')} transition-colors duration-300 cursor-pointer`}>
                {link}
              </a>
            ))}
          </div>
          <div className={`pt-8 border-t ${theme === 'dark' ? 'border-cyan-400/10' : 'border-blue-600/10'} ${textSecondary} text-sm`}>
            <p>&copy; 2025 Trading Gear. All rights reserved. | 투자에는 원금 손실의 위험이 있습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}