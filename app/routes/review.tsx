import React, { useState } from 'react';
import { TrendingUp, DollarSign, Shield, Users, Star, ChevronRight, Play, Calendar, BarChart3, Target, Award } from 'lucide-react';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const caseStudies = [
    {
      id: 1,
      category: 'institutional',
      title: '대형 헤지펀드 A사',
      subtitle: '자산 규모: 500억원',
      period: '2024.01 - 2024.12',
      strategy: '다중 전략 포트폴리오',
      results: {
        return: '+34.7%',
        sharpe: '2.31',
        mdd: '-4.2%',
        winRate: '73.8%'
      },
      highlights: [
        '연간 수익률 34.7% 달성',
        '최대 손실 4.2%로 안정적 운용',
        '샤프 비율 2.31 기록',
        '전략 다각화로 리스크 분산'
      ],
      description: '기존 수동 거래에서 AI 자동화 시스템으로 전환하여 운용 효율성을 크게 개선했습니다. 특히 변동성이 큰 시장에서도 안정적인 수익을 창출할 수 있었습니다.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      category: 'retail',
      title: '개인투자자 김○○님',
      subtitle: '자산 규모: 1억원',
      period: '2024.03 - 2024.12',
      strategy: '그리드 트레이딩 + DCA',
      results: {
        return: '+28.5%',
        sharpe: '1.87',
        mdd: '-7.1%',
        winRate: '68.2%'
      },
      highlights: [
        '직장인 투자자 최적화된 전략',
        '감정적 거래 완전 차단',
        '월 평균 2.4% 안정적 수익',
        '시간 투자 최소화 (일 10분)'
      ],
      description: '직장 업무로 인해 시장 모니터링이 어려웠던 개인투자자가 자동화 시스템을 통해 안정적인 수익을 달성한 사례입니다.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      category: 'corporate',
      title: '중소기업 B사 자금운용',
      subtitle: '자산 규모: 50억원',
      period: '2024.02 - 2024.12',
      strategy: '안전자산 중심 운용',
      results: {
        return: '+18.9%',
        sharpe: '2.05',
        mdd: '-2.8%',
        winRate: '81.3%'
      },
      highlights: [
        '기업 유휴자금 효율적 운용',
        '극도로 안전한 포트폴리오',
        '예금 대비 15배 수익률',
        '실시간 리스크 관리'
      ],
      description: '보수적인 투자 성향의 기업 자금을 안전하게 운용하면서도 예금 대비 높은 수익률을 달성했습니다.',
      image: '/api/placeholder/400/300'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: '이○○',
      role: '헤지펀드 포트폴리오 매니저',
      company: '○○○ 자산운용',
      rating: 5,
      content: 'Trading Gear의 AI 알고리즘은 정말 놀라웠습니다. 기존 수동 거래 대비 수익률이 40% 이상 향상되었고, 특히 변동성 관리 능력이 뛰어납니다. 이제 더 이상 밤새 차트를 보지 않아도 됩니다.',
      results: '+42.3% 수익률 달성',
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: '박○○',
      role: '개인투자자',
      company: '직장인 투자자',
      rating: 5,
      content: '직장 다니면서 투자하기 정말 어려웠는데, 자동화 시스템 덕분에 스트레스 없이 투자할 수 있게 되었습니다. 감정적 거래가 완전히 사라지니 수익이 더 안정적이에요.',
      results: '+31.7% 수익률 달성',
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: '정○○',
      role: '재무이사',
      company: '중소기업 C사',
      rating: 5,
      content: '회사 유휴자금을 안전하게 운용하면서도 높은 수익을 얻을 수 있어서 매우 만족합니다. 실시간 모니터링과 리스크 관리 기능이 특히 인상적입니다.',
      results: '+23.8% 수익률 달성',
      image: '/api/placeholder/100/100'
    }
  ];

  const performanceData = [
    { metric: '평균 연간 수익률', value: '27.4%', benchmark: '코스피: 8.2%' },
    { metric: '평균 샤프 비율', value: '2.08', benchmark: '일반 펀드: 0.85' },
    { metric: '평균 최대 손실률', value: '4.7%', benchmark: '코스피: 18.3%' },
    { metric: '승률', value: '74.1%', benchmark: '일반 투자자: 35%' },
    { metric: '월 평균 수익률', value: '2.2%', benchmark: '은행 예금: 0.3%' }
  ];

  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              고객 성공 사례
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              실제 운용 데이터와 고객 경험을 통해 확인하는 Trading Gear의 성과
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400">성공적인 고객사</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">27.4%</div>
                <div className="text-gray-400">평균 연간 수익률</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">2.08</div>
                <div className="text-gray-400">평균 샤프 비율</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">전체 성과 요약</h2>
          <p className="text-gray-400 text-lg">벤치마크 대비 우수한 성과를 확인하세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {performanceData.map((data, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-2">{data.value}</div>
              <div className="text-gray-300 font-medium mb-2">{data.metric}</div>
              <div className="text-sm text-gray-500">{data.benchmark}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">실제 운용 사례</h2>
          <p className="text-gray-400 text-lg">다양한 고객층의 성공 스토리</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: '전체' },
            { key: 'institutional', label: '기관투자자' },
            { key: 'retail', label: '개인투자자' },
            { key: 'corporate', label: '기업' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div key={study.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-400">{study.title}</h3>
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-2">{study.subtitle}</p>
                <p className="text-sm text-gray-500 mb-4">{study.period}</p>
                
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.results.return}</div>
                      <div className="text-sm text-gray-400">수익률</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.results.sharpe}</div>
                      <div className="text-sm text-gray-400">샤프 비율</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{study.results.mdd}</div>
                      <div className="text-sm text-gray-400">최대 손실</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.results.winRate}</div>
                      <div className="text-sm text-gray-400">승률</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">주요 성과</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {study.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mb-4">{study.description}</p>
                
                <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                  <div className="text-sm text-blue-400 font-medium">사용 전략</div>
                  <div className="text-sm text-gray-300">{study.strategy}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">고객 후기</h2>
            <p className="text-gray-400 text-lg">실제 고객들의 생생한 경험담</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                
                <div className="bg-green-600/20 rounded-lg p-3 border border-green-500/30">
                  <div className="text-sm text-green-400 font-medium">달성 성과</div>
                  <div className="text-sm text-gray-300">{testimonial.results}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">숫자로 보는 성과</h2>
          <p className="text-gray-400 text-lg">데이터가 증명하는 Trading Gear의 우수성</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <TrendingUp className="w-8 h-8 text-green-400" />, 
              value: '98.7%', 
              label: '고객 만족도',
              description: '500+ 고객 설문조사 결과'
            },
            { 
              icon: <BarChart3 className="w-8 h-8 text-blue-400" />, 
              value: '74.1%', 
              label: '평균 승률',
              description: '전체 거래 중 수익 거래 비중'
            },
            { 
              icon: <Shield className="w-8 h-8 text-purple-400" />, 
              value: '4.7%', 
              label: '평균 최대 손실률',
              description: '안정적인 리스크 관리'
            },
            { 
              icon: <Target className="w-8 h-8 text-pink-400" />, 
              value: '36개월', 
              label: '평균 고객 유지',
              description: '높은 고객 충성도'
            }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">당신도 성공 사례의 주인공이 되세요</h2>
          <p className="text-xl text-blue-100 mb-8">7일 무료 체험으로 Trading Gear의 성과를 직접 경험해보세요</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              무료 체험 시작
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              상담 신청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}