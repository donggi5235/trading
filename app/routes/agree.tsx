import { useState, useEffect } from 'react';

const TermsOfServicePage = () => {
  const [theme, setTheme] = useState('dark');
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('definitions');

  useEffect(() => {
    setIsClient(true);
    const savedTheme = 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const sections = [
    { id: 'definitions', title: '정의 및 용어', icon: '📖' },
    { id: 'agreement', title: '서비스 이용계약', icon: '📝' },
    { id: 'account', title: '계정 관리', icon: '👤' },
    { id: 'usage', title: '서비스 이용', icon: '⚙️' },
    { id: 'restrictions', title: '이용 제한', icon: '🚫' },
    { id: 'liability', title: '책임의 제한', icon: '⚖️' },
    { id: 'payment', title: '결제 및 환불', icon: '💳' },
    { id: 'termination', title: '계약 해지', icon: '🔚' },
    { id: 'changes', title: '약관 변경', icon: '📋' },
    { id: 'governing', title: '준거법 및 관할', icon: '🏛️' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      
      {/* Header - Same as pricing page */}
      <header className={`fixed top-0 w-full backdrop-blur-lg z-50 border-b transition-all duration-300 ${headerClasses}`}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
          
          {/* Logo */}
          <div className={`flex items-center text-2xl font-bold cursor-pointer transition-colors duration-300 ${primaryColor}`}>
            <span className="text-3xl mr-2">⚙️</span>
            Trading Gear
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><a className={`${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300`}>홈</a></li>
            <li><a className={`${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300`}>기능</a></li>
            <li><a className={`${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300`}>요금제</a></li>
            <li><a className={`${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300`}>문의</a></li>
            
            {/* Theme Toggle */}
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

          {/* CTA Button */}
          <button className={`hidden lg:block ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/30' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/30'} px-6 py-3 rounded-full font-bold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
            무료 체험 시작
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMobileMenu}></div>

        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] ${theme === 'dark' ? 'bg-slate-900/98' : 'bg-white/98'} backdrop-blur-lg border-l ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'} z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex items-center justify-between p-6 border-b border-gray-200/20">
            <div className={`flex items-center text-xl font-bold ${primaryColor}`}>
              <span className="text-2xl mr-2">⚙️</span>
              Trading Gear
            </div>
            <button className="w-8 h-8 flex items-center justify-center focus:outline-none" onClick={toggleMobileMenu}>
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 rotate-45 absolute`}></span>
              <span className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-slate-700'} transition-all duration-300 -rotate-45 absolute`}></span>
            </button>
          </div>

          <div className="flex flex-col h-full">
            <ul className="px-6 py-8 space-y-6 flex-1">
              <li><a className={`block ${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`}>홈</a></li>
              <li><a className={`block ${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`}>기능</a></li>
              <li><a className={`block ${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`}>요금제</a></li>
              <li><a className={`block ${textPrimary} hover:text-cyan-400 font-medium cursor-pointer transition-colors duration-300 py-3 text-lg border-b border-gray-200/10`}>문의</a></li>
            </ul>

            <div className="px-6 pb-8 space-y-4">
              <div className="flex items-center justify-between py-4 border-t border-gray-200/20">
                <span className={`${textPrimary} font-medium`}>테마 설정</span>
                <button className={`w-12 h-12 rounded-full border-2 ${theme === 'dark' ? 'border-cyan-400/20 hover:border-cyan-400 hover:text-cyan-400' : 'border-blue-600/20 hover:border-blue-600 hover:text-blue-600'} ${textPrimary} transition-all duration-300 hover:rotate-180 flex items-center justify-center text-xl`} onClick={toggleTheme}>
                  {theme === 'dark' ? '🌙' : '☀️'}
                </button>
              </div>
              
              <button className={`w-full ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/30' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/30'} px-6 py-4 rounded-full font-bold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                무료 체험 시작
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center relative overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-radial from-cyan-400/10' : 'bg-gradient-radial from-blue-600/10'} to-transparent`}></div>
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-cyan-400' : 'bg-gradient-to-r from-slate-900 to-blue-600'} bg-clip-text text-transparent`}>
            Trading Gear 이용약관
          </h1>
          <p className={`text-lg lg:text-xl ${textSecondary} mb-6 leading-relaxed`}>
            서비스 이용 전 반드시 확인해주시기 바랍니다
          </p>
          <div className={`inline-flex items-center px-4 py-2 ${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-lg rounded-full border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'}`}>
            <span className={`text-sm ${textSecondary}`}>최종 업데이트: 2025년 7월 3일</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Table of Contents */}
          <div className="lg:w-1/4">
            <div className={`sticky top-24 ${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/90'} backdrop-blur-lg rounded-2xl p-6 border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'}`}>
              <h3 className={`text-lg font-bold ${textPrimary} mb-4 flex items-center`}>
                <span className="mr-2">📋</span>
                목차
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id 
                        ? `${theme === 'dark' ? 'bg-cyan-400/20 text-cyan-400' : 'bg-blue-600/20 text-blue-600'}` 
                        : `${textSecondary} hover:text-cyan-400 hover:bg-slate-700/20`
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className={`${theme === 'dark' ? 'bg-slate-800/40' : 'bg-white/70'} backdrop-blur-lg rounded-2xl border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'} overflow-hidden`}>
              
              {/* Definitions */}
              <section id="definitions" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">📖</span>
                  제1조 (정의 및 용어)
                </h2>
                <div className="space-y-4">
                  <div className={`p-4 ${theme === 'dark' ? 'bg-slate-700/40' : 'bg-slate-100/60'} rounded-lg`}>
                    <h4 className={`font-semibold ${textPrimary} mb-2`}>1. "서비스"</h4>
                    <p className={`${textSecondary} text-sm`}>Trading Gear가 제공하는 자동 거래 봇, 포트폴리오 관리, 백테스팅 및 관련 모든 기능을 의미합니다.</p>
                  </div>
                  <div className={`p-4 ${theme === 'dark' ? 'bg-slate-700/40' : 'bg-slate-100/60'} rounded-lg`}>
                    <h4 className={`font-semibold ${textPrimary} mb-2`}>2. "이용자"</h4>
                    <p className={`${textSecondary} text-sm`}>서비스에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 의미합니다.</p>
                  </div>
                  <div className={`p-4 ${theme === 'dark' ? 'bg-slate-700/40' : 'bg-slate-100/60'} rounded-lg`}>
                    <h4 className={`font-semibold ${textPrimary} mb-2`}>3. "회원"</h4>
                    <p className={`${textSecondary} text-sm`}>Trading Gear에 개인정보를 제공하여 회원등록을 한 개인 또는 법인으로서, 서비스를 지속적으로 이용할 수 있는 자를 의미합니다.</p>
                  </div>
                  <div className={`p-4 ${theme === 'dark' ? 'bg-slate-700/40' : 'bg-slate-100/60'} rounded-lg`}>
                    <h4 className={`font-semibold ${textPrimary} mb-2`}>4. "거래소 API"</h4>
                    <p className={`${textSecondary} text-sm`}>이용자가 연결한 암호화폐 거래소의 응용 프로그래밍 인터페이스를 의미합니다.</p>
                  </div>
                </div>
              </section>

              {/* Agreement */}
              <section id="agreement" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">📝</span>
                  제2조 (서비스 이용계약)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 계약의 성립</strong><br />
                    이용계약은 이용자가 본 약관에 동의하고 회원가입을 완료한 시점에 성립됩니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 계약의 효력</strong><br />
                    이 약관은 Trading Gear와 이용자 간에 체결되는 서비스 이용에 관한 기본적인 사항을 규정하며, 세부 내용은 개별 서비스 이용약관이 적용됩니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>3. 약관의 우선순위</strong><br />
                    개별 서비스 이용약관이 본 약관과 상충할 경우, 개별 서비스 이용약관이 우선 적용됩니다.
                  </p>
                </div>
              </section>

              {/* Account Management */}
              <section id="account" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">👤</span>
                  제3조 (계정 관리)
                </h2>
                <div className="space-y-4">
                  <div className={`p-4 border-l-4 ${theme === 'dark' ? 'border-emerald-400 bg-emerald-400/10' : 'border-emerald-600 bg-emerald-600/10'} rounded`}>
                    <p className={`${textSecondary} text-sm`}>
                      <strong className={`${accentColor}`}>이용자의 의무</strong><br />
                      • 정확하고 최신의 정보 제공<br />
                      • 계정 정보의 안전한 관리<br />
                      • 제3자에게 계정 양도 또는 대여 금지<br />
                      • 부정 사용 발견 시 즉시 신고
                    </p>
                  </div>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 회원 가입</strong><br />
                    이용자는 Trading Gear가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 계정 보안</strong><br />
                    회원은 자신의 ID와 비밀번호를 선량한 관리자의 주의 의무로 관리해야 하며, 회원의 ID나 비밀번호에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다.
                  </p>
                </div>
              </section>

              {/* Service Usage */}
              <section id="usage" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">⚙️</span>
                  제4조 (서비스 이용)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 서비스 제공</strong><br />
                    Trading Gear는 연중무휴 24시간 서비스를 제공함을 원칙으로 합니다. 다만, 시스템 점검, 업그레이드, 장애 복구 등의 경우에는 서비스가 일시 중단될 수 있습니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 투자 리스크</strong><br />
                    암호화폐 거래는 높은 투자 위험을 수반하며, 모든 투자 결정과 그 결과에 대한 책임은 전적으로 이용자에게 있습니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>3. API 연결</strong><br />
                    이용자는 자신의 책임 하에 거래소 API를 연결하며, API 키의 보안과 권한 관리에 대한 책임을 집니다.
                  </p>
                </div>
              </section>

              {/* Usage Restrictions */}
              <section id="restrictions" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">🚫</span>
                  제5조 (이용 제한)
                </h2>
                <div className="space-y-4">
                  <div className={`p-4 border-l-4 ${theme === 'dark' ? 'border-red-400 bg-red-400/10' : 'border-red-600 bg-red-600/10'} rounded`}>
                    <p className={`text-red-400 text-sm font-medium mb-2`}>금지 행위</p>
                    <ul className={`${textSecondary} text-sm space-y-1`}>
                      <li>• 서비스의 안정성을 해치는 행위</li>
                      <li>• 다른 이용자의 개인정보 수집, 저장, 공개</li>
                      <li>• 허위 정보 입력 및 타인 정보 도용</li>
                      <li>• 시스템 해킹 및 무단 접근 시도</li>
                      <li>• 불법 자금 세탁 및 투자 사기</li>
                    </ul>
                  </div>
                  <p className={`${textSecondary} leading-relaxed`}>
                    위 금지 행위를 하거나 이에 준하는 행위를 한 회원에 대해서는 서비스 이용 제한, 회원 자격 정지 또는 상실 등의 조치를 취할 수 있습니다.
                  </p>
                </div>
              </section>

              {/* Liability Limitation */}
              <section id="liability" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">⚖️</span>
                  제6조 (책임의 제한)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 면책사항</strong><br />
                    Trading Gear는 천재지변, 정전, 네트워크 장애, 거래소 서비스 중단 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 투자 손실</strong><br />
                    암호화폐 거래로 인한 투자 손실에 대해 Trading Gear는 어떠한 책임도 지지 않으며, 모든 투자 결정은 이용자의 판단과 책임 하에 이루어집니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>3. 손해배상의 범위</strong><br />
                    Trading Gear의 귀책사유로 인한 손해배상 책임은 이용자가 지불한 서비스 이용료를 초과하지 않습니다.
                  </p>
                </div>
              </section>

              {/* Payment and Refund */}
              <section id="payment" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">💳</span>
                  제7조 (결제 및 환불)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 요금 결제</strong><br />
                    유료 서비스 이용 시 이용자는 선택한 요금제에 따라 정해진 이용료를 결제해야 합니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 환불 정책</strong><br />
                    7일 무료 체험 기간 중 언제든 취소 가능하며, 유료 플랜 시작 후 30일 내 100% 환불이 가능합니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>3. 자동 갱신</strong><br />
                    구독 서비스는 별도의 해지 의사표시가 없는 한 자동으로 갱신됩니다.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">🔚</span>
                  제8조 (계약 해지)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 이용자의 해지</strong><br />
                    이용자는 언제든지 서비스 해지를 요청할 수 있으며, Trading Gear는 즉시 해지 처리를 완료합니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. Trading Gear의 해지</strong><br />
                    이용자가 본 약관을 위반하거나 서비스 운영을 방해하는 경우, 사전 통지 후 계약을 해지할 수 있습니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>3. 데이터 보관</strong><br />
                    계약 해지 후에도 법령에 따라 일정 기간 동안 회원 정보가 보관될 수 있습니다.
                  </p>
                </div>
              </section>

              {/* Terms Changes */}
              <section id="changes" className="p-8 border-b border-gray-200/10">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">📋</span>
                  제9조 (약관의 변경)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 변경 권한</strong><br />
                    Trading Gear는 필요에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 웹사이트 공지를 통해 공개됩니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 변경 효력</strong><br />
                    변경된 약관은 공지일로부터 7일 후에 효력을 발생하며, 이용자가 변경 후에도 서비스를 계속 이용하는 경우 약관 변경에 동의한 것으로 간주됩니다.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing" className="p-8">
                <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center`}>
                  <span className="mr-3">🏛️</span>
                  제10조 (준거법 및 관할)
                </h2>
                <div className="space-y-4">
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>1. 준거법</strong><br />
                    본 약관과 서비스 이용에 관한 모든 사항은 대한민국 법률에 따라 규율됩니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>2. 관할법원</strong><br />
                    본 약관과 관련하여 발생하는 모든 분쟁은 대한민국 서울중앙지방법원을 전속관할법원으로 합니다.
                  </p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    <strong className={`${textPrimary}`}>3. 분쟁조정</strong><br />
                    법적 분쟁에 앞서 개인정보보호위원회 등 관련 기관의 조정을 통한 해결을 우선적으로 시도합니다.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-slate-900/90 border-cyan-400/20' : 'bg-white/90 border-blue-600/20'} border-t py-12`}>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['회사소개', '이용약관', '개인정보처리방침', '고객지원', '블로그', '채용정보'].map((link) => (
              <a key={link} className={`${textSecondary} hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${link === '이용약관' ? primaryColor : ''}`}>
                {link}
              </a>
            ))}
          </div>
          <div className={`pt-8 border-t ${theme === 'dark' ? 'border-cyan-400/10' : 'border-blue-600/10'} ${textSecondary} text-sm space-y-2`}>
            <p>&copy; 2025 Trading Gear. All rights reserved.</p>
            <p>투자에는 원금 손실의 위험이 있습니다. 신중한 투자 결정을 내리시기 바랍니다.</p>
            <p>본 서비스는 투자 도구를 제공하며, 투자 수익을 보장하지 않습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfServicePage;