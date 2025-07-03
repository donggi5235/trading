import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export default function Index(){
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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
            onClick={() => scrollToSection('home')}
          >
            <img className="h-[50px]" src="/logo.png" alt="" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('home')}>홈</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('features')}>기능</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('bots')}>트레이딩 봇</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('pricing')}>요금제</a></li>
            <li><a className={`${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300`} onClick={() => scrollToSection('contact')}>문의</a></li>
            
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

          {/* Mobile Menu Button only (no theme toggle here) */}
          <div className="lg:hidden flex items-center">
            {/* Hamburger Menu */}
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
            onClick={() => scrollToSection('signup')}
          >
            무료 체험 시작
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Mobile Sidebar Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] ${theme === 'dark' ? 'bg-slate-900/98' : 'bg-white/98'} backdrop-blur-lg border-l ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'} z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Mobile Menu Header */}
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

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <ul className="px-6 py-8 space-y-6 flex-1">
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('home')}>홈</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('features')}>기능</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('bots')}>트레이딩 봇</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('pricing')}>요금제</a></li>
              <li><a className={`block ${textPrimary} hover:${primaryColor.replace('text-', 'text-')} font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`} onClick={() => scrollToSection('contact')}>문의</a></li>
            </ul>

            {/* Mobile Menu Footer */}
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
                onClick={() => scrollToSection('signup')}
              >
                무료 체험 시작
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20" id="home">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-radial from-cyan-400/10' : 'bg-gradient-radial from-blue-600/10'} to-transparent`}></div>
        
                  <div className="max-w-4xl mx-auto px-4 lg:px-8 animate-pulse">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-cyan-400' : 'bg-gradient-to-r from-slate-900 to-blue-600'} bg-clip-text text-transparent`}>
            AI 트레이딩의 새로운 시대
          </h1>
          <p className={`text-xl lg:text-2xl ${textSecondary} mb-8 leading-relaxed`}>
            인공지능과 자동화된 알고리즘으로 더 스마트하게 투자하세요.<br />
            초보자부터 전문가까지, 모든 레벨의 트레이더를 위한 올인원 플랫폼
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 my-12">
            <div className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold ${accentColor}`}>500K+</div>
              <div className={`${textSecondary} mt-2`}>활성 사용자</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold ${accentColor}`}>₩2.8조</div>
              <div className={`${textSecondary} mt-2`}>총 거래량</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold ${accentColor}`}>35%</div>
              <div className={`${textSecondary} mt-2`}>평균 수익률</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold ${accentColor}`}>24/7</div>
              <div className={`${textSecondary} mt-2`}>자동 거래</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className={`${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/30' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/30'} px-8 py-4 rounded-full font-bold text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              onClick={() => scrollToSection('signup')}
            >
              7일 무료 체험
            </button>
            <button 
              className={`border-2 ${theme === 'dark' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400' : 'border-blue-600 text-blue-600 hover:bg-blue-600'} hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300`}
              onClick={() => scrollToSection('demo')}
            >
              데모 보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent to-slate-800/30' : 'bg-gradient-to-b from-transparent to-slate-100/50'}`} id="features">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className={`text-3xl lg:text-5xl font-bold text-center mb-16 ${textPrimary}`}>
            왜 Trading Gear를 선택해야 할까요?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { icon: '🤖', title: 'AI 기반 자동 거래', desc: '머신러닝 알고리즘이 시장 패턴을 분석하여 최적의 거래 타이밍을 찾아드립니다. 24시간 지속적인 모니터링으로 기회를 놓치지 않습니다.' },
              { icon: '📊', title: '고급 분석 도구', desc: '실시간 차트, 기술적 지표, 백테스팅 기능으로 전문적인 분석을 제공합니다. 데이터 기반의 합리적인 투자 결정을 도와드립니다.' },
              { icon: '🔒', title: '안전한 자금 관리', desc: '은행급 보안 시스템과 2단계 인증으로 고객의 자산을 안전하게 보호합니다. API 키를 통한 안전한 거래소 연결을 제공합니다.' },
              { icon: '⚡', title: '초고속 실행', desc: '전 세계 주요 거래소와 직접 연결된 고성능 서버로 밀리초 단위의 빠른 주문 실행을 보장합니다.' },
              { icon: '🎯', title: '맞춤형 전략', desc: '개인의 투자 성향과 리스크 허용도에 맞는 맞춤형 거래 전략을 제공합니다. 다양한 자산 클래스에 대한 포트폴리오 최적화를 지원합니다.' },
              { icon: '📱', title: '모바일 지원', desc: '언제 어디서나 모바일 앱으로 포트폴리오를 모니터링하고 거래 설정을 조정할 수 있습니다. 직관적인 UI/UX 설계로 쉽게 사용가능합니다.' }
            ].map((feature, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-slate-800/60 border-cyan-400/20 hover:border-cyan-400 hover:shadow-cyan-400/20' : 'bg-white/90 border-blue-600/20 hover:border-blue-600 hover:shadow-blue-600/20'} border rounded-2xl p-8 text-center backdrop-blur-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-4 ${textPrimary}`}>{feature.title}</h3>
                <p className={`${textSecondary} leading-relaxed`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Bots Section */}
      <section className="py-20" id="bots">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className={`text-3xl lg:text-5xl font-bold text-center mb-16 ${textPrimary}`}>
            다양한 트레이딩 봇 전략
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { title: '그리드 트레이딩 봇', desc: '횡보 시장에서 작은 가격 변동으로도 수익을 창출하는 전략입니다. 자동으로 매수/매도 주문을 반복 실행합니다.' },
              { title: 'DCA 봇 (평균 단가 전략)', desc: '정기적으로 일정 금액을 투자하여 평균 매수 단가를 낮추는 안정적인 장기 투자 전략입니다.' },
              { title: '스캘핑 봇', desc: '초단기 거래로 작은 가격 차이에서 빠르게 수익을 얻는 전략입니다. 높은 빈도의 거래로 수익을 극대화합니다.' },
              { title: '추세 추종 봇', desc: '시장의 상승/하락 추세를 파악하여 트렌드를 따라가는 전략입니다. 기술적 지표를 활용한 신호 기반 거래를 수행합니다.' },
              { title: '차익거래 봇', desc: '서로 다른 거래소 간의 가격 차이를 이용하여 무위험 수익을 창출하는 전략입니다.' },
              { title: '옵션 전략 봇', desc: '복잡한 옵션 거래 전략을 자동화하여 프리미엄 수익과 헤지 기능을 동시에 제공합니다.' }
            ].map((bot, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 border-cyan-400/20 hover:border-emerald-400 hover:from-cyan-400/20 hover:to-emerald-400/20' : 'bg-gradient-to-br from-blue-600/10 to-emerald-600/10 border-blue-600/20 hover:border-emerald-600 hover:from-blue-600/20 hover:to-emerald-600/20'} border rounded-xl p-6 hover:bg-gradient-to-br transition-all duration-300`}>
                <h4 className={`${accentColor} font-semibold text-lg mb-3`}>{bot.title}</h4>
                <p className={`${textSecondary} text-sm leading-relaxed`}>{bot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 text-center ${theme === 'dark' ? 'bg-gradient-radial from-emerald-400/10' : 'bg-gradient-radial from-emerald-600/10'} to-transparent`} id="signup">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${textPrimary}`}>지금 시작하세요!</h2>
          <p className={`text-xl ${textSecondary} mb-8`}>7일 무료 체험으로 Trading Gear의 모든 기능을 경험해보세요. 신용카드 등록 없이 바로 시작 가능합니다.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className={`${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/40' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/40'} px-8 py-4 rounded-full font-bold text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
              무료 체험 시작하기
            </button>
            <button className={`border-2 ${theme === 'dark' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400' : 'border-blue-600 text-blue-600 hover:bg-blue-600'} hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300`}>
              전문가와 상담하기
            </button>
          </div>
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
};
