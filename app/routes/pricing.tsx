import  { useState, useEffect } from 'react';
import { useThemeStore } from '~/stores/themeStore';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "요금제 - TRADING GEAR" },
    { name: "pricing", content: "AI 트레이딩의 새로운 시대" },
  ];
};

const PricingPage = () => {
  const { theme, isClient, initializeTheme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    initializeTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    if (isClient) {
      localStorage.setItem('theme', newTheme);
    }
    
    initializeTheme();
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

  const plans = [
    {
      id: 'demo',
      name: 'Demo',
      price: { monthly: 0, yearly: 0 },
      popular: false,
      description: '체험용 플랜으로 기본 기능을 무료로 사용해보세요',
      features: [
        '데모 모드 무제한 사용',
        '5개 활성 봇 (시뮬레이션)',
        '기본 분석 도구',
        '이메일 지원',
        '30일 백테스팅'
      ],
      buttonText: '무료 체험 시작',
      buttonStyle: 'secondary'
    },
    {
      id: 'basic',
      name: 'Basic',
      price: { monthly: 29000, yearly: 290000 },
      popular: false,
      description: '개인 투자자를 위한 필수 기능',
      features: [
        '5개 활성 그리드 봇',
        '15개 활성 DCA 봇',
        'AI 어시스턴트 (기본)',
        '무제한 수동 거래',
        '60일 백테스팅',
        '10개 거래소 연결'
      ],
      buttonText: '시작하기',
      buttonStyle: 'secondary'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 59000, yearly: 590000 },
      popular: true,
      description: '전문 트레이더를 위한 완전한 기능',
      features: [
        '20개 활성 그리드 봇',
        '75개 활성 DCA 봇',
        'AI 어시스턴트 (고급)',
        '무제한 수동 거래',
        '선물 거래 봇',
        '180일 백테스팅',
        '15개 거래소 연결',
        '우선 지원 (24/7)'
      ],
      buttonText: '가장 인기',
      buttonStyle: 'primary'
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      price: { monthly: 99000, yearly: 990000 },
      popular: false,
      description: '기관 투자자급 최고 성능',
      features: [
        '무제한 활성 봇',
        'AI 어시스턴트 (프리미엄)',
        '무제한 수동 거래',
        '고급 선물 거래 봇',
        'AI 포트폴리오 모드',
        '365일 백테스팅',
        '모든 거래소 연결',
        '전담 계정 매니저'
      ],
      buttonText: '문의하기',
      buttonStyle: 'premium'
    }
  ];

  const formatPrice = (price) => {
    if (price === 0) return '무료';
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const getYearlyDiscount = (monthly, yearly) => {
    if (monthly === 0) return 0;
    const yearlyMonthly = yearly / 12;
    const discount = ((monthly - yearlyMonthly) / monthly * 100);
    return Math.round(discount);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      
      {/* Header */}
      <Header/>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-radial from-cyan-400/10' : 'bg-gradient-radial from-blue-600/10'} to-transparent`}></div>
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-cyan-400' : 'bg-gradient-to-r from-slate-900 to-blue-600'} bg-clip-text text-transparent`}>
            투명한 가격, 확실한 가치
          </h1>
          <p className={`text-xl lg:text-2xl ${textSecondary} mb-8 leading-relaxed`}>
            모든 플랜에 7일 무료 체험이 포함되어 있습니다.<br />
            신용카드 등록 없이 바로 시작하세요.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className={`${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-lg rounded-full p-1 border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'}`}>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  billingCycle === 'monthly' 
                    ? `${theme === 'dark' ? 'bg-cyan-400 text-slate-900' : 'bg-blue-600 text-white'} shadow-lg` 
                    : `${textPrimary} hover:text-cyan-400`
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                월간 결제
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${
                  billingCycle === 'yearly' 
                    ? `${theme === 'dark' ? 'bg-cyan-400 text-slate-900' : 'bg-blue-600 text-white'} shadow-lg` 
                    : `${textPrimary} hover:text-cyan-400`
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                연간 결제
                <span className={`ml-2 px-2 py-1 text-xs ${accentColor} ${theme === 'dark' ? 'bg-emerald-400/20' : 'bg-emerald-600/20'} rounded-full`}>
                  2개월 무료
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative ${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/90'} backdrop-blur-lg rounded-2xl border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  plan.popular 
                    ? `${theme === 'dark' ? 'border-cyan-400 shadow-cyan-400/20' : 'border-blue-600 shadow-blue-600/20'} shadow-xl` 
                    : `${theme === 'dark' ? 'border-cyan-400/20 hover:border-cyan-400/40' : 'border-blue-600/20 hover:border-blue-600/40'} hover:shadow-lg`
                }`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'} px-4 py-2 rounded-full text-sm font-bold`}>
                    가장 인기
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold ${textPrimary} mb-2`}>{plan.name}</h3>
                    <p className={`${textSecondary} text-sm mb-6`}>{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.id === 'demo' ? (
                        <div className={`text-4xl font-bold ${accentColor}`}>무료</div>
                      ) : (
                        <div>
                          <div className={`text-4xl font-bold ${textPrimary}`}>
                            ₩{formatPrice(plan.price[billingCycle])}
                            <span className={`text-lg ${textSecondary} font-normal`}>
                              /{billingCycle === 'monthly' ? '월' : '년'}
                            </span>
                          </div>
                          {billingCycle === 'yearly' && plan.price.monthly > 0 && (
                            <div className={`text-sm ${accentColor} mt-2`}>
                              월 ₩{formatPrice(plan.price.yearly / 12)} ({getYearlyDiscount(plan.price.monthly, plan.price.yearly)}% 할인)
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <button
                      className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                        plan.buttonStyle === 'primary' 
                          ? `${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/30' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/30'} hover:transform hover:-translate-y-1 hover:shadow-lg`
                          : plan.buttonStyle === 'premium'
                          ? `${theme === 'dark' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-500/30' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-600/30'} hover:transform hover:-translate-y-1 hover:shadow-lg`
                          : `border-2 ${theme === 'dark' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className={`font-semibold ${textPrimary} mb-3`}>포함된 기능:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`${accentColor} mr-3 mt-0.5`}>✓</span>
                          <span className={`${textSecondary} text-sm`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-slate-800/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Payment Methods */}
            <div className={`${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/90'} backdrop-blur-lg rounded-2xl p-8 border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'}`}>
              <h3 className={`text-xl font-bold ${textPrimary} mb-6 flex items-center`}>
                <span className="mr-3">💳</span>
                결제 방식
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className={`${textSecondary}`}>신용카드</span>
                  <span className={`${accentColor}`}>✓</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className={`${textSecondary}`}>카카오페이</span>
                  <span className={`${accentColor}`}>✓</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className={`${textSecondary}`}>페이팔</span>
                  <span className={`${accentColor}`}>✓</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className={`${textSecondary}`}>계좌이체</span>
                  <span className={`${accentColor}`}>✓</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className={`${textSecondary}`}>암호화폐</span>
                  <span className={`${accentColor}`}>✓</span>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className={`${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/90'} backdrop-blur-lg rounded-2xl p-8 border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'}`}>
              <h3 className={`text-xl font-bold ${textPrimary} mb-6 flex items-center`}>
                <span className="mr-3">🔄</span>
                환불 정책
              </h3>
              <div className="space-y-4">
                <div className={`${textSecondary} text-sm`}>
                  <p className="mb-3">• 7일 무료 체험 기간 중 언제든 취소 가능</p>
                  <p className="mb-3">• 유료 플랜 시작 후 30일 내 100% 환불</p>
                  <p className="mb-3">• 환불 처리 기간: 영업일 기준 3-5일</p>
                  <p className="mb-3">• 연간 구독 중도 해지 시 잔여 기간 비례 환불</p>
                  <p>• 악용 방지를 위한 검토 과정 있음</p>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className={`${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/90'} backdrop-blur-lg rounded-2xl p-8 border ${theme === 'dark' ? 'border-cyan-400/20' : 'border-blue-600/20'}`}>
              <h3 className={`text-xl font-bold ${textPrimary} mb-6 flex items-center`}>
                <span className="mr-3">📋</span>
                세금 정보
              </h3>
              <div className="space-y-4">
                <div className={`${textSecondary} text-sm`}>
                  <p className="mb-3">• 모든 가격은 부가세(VAT) 포함입니다</p>
                  <p className="mb-3">• 개인: 10% 부가세 자동 적용</p>
                  <p className="mb-3">• 사업자: 사업자등록번호 제공 시 면세</p>
                  <p className="mb-3">• 해외 결제 시 환율 수수료 별도</p>
                  <p>• 세금계산서 발행 가능 (사업자)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-radial from-emerald-400/10' : 'bg-gradient-radial from-emerald-600/10'} to-transparent`}></div>
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
          <h2 className={`text-3xl lg:text-5xl font-bold mb-6 ${textPrimary}`}>
            지금 바로 시작하세요!
          </h2>
          <p className={`text-xl ${textSecondary} mb-8`}>
            7일 무료 체험으로 Trading Gear의 모든 기능을 경험해보세요.<br />
            신용카드 등록 없이 바로 시작 가능합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className={`${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-cyan-400/40' : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-blue-600/40'} px-8 py-4 rounded-full font-bold text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
              무료 체험 시작하기
            </button>
            <button className={`border-2 ${theme === 'dark' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400' : 'border-blue-600 text-blue-600 hover:bg-blue-600'} hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300`}>
              영업팀과 상담하기
            </button>
          </div>

          <div className={`text-sm ${textSecondary} space-y-2`}>
            <p>✓ 신용카드 등록 불필요</p>
            <p>✓ 30일 환불 보장</p>
            <p>✓ 언제든 취소 가능</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default PricingPage;