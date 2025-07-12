import React, { useState, useEffect } from 'react';
import { useThemeStore } from '../stores/themeStore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { 
  DollarSign,
  CreditCard,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Brain,
  Plus,
  Gift
} from 'lucide-react';

import DashHeader from '~/components/DashHeader';
import DashSidebar from '~/components/DashSidebar';
import DashFooter from '~/components/DashFooter';

const Dashboard = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [chartPeriod, setChartPeriod] = useState('일');
  const [autoTradingEnabled, setAutoTradingEnabled] = useState(true);
  
  // 화면 크기에 따른 사이드바 초기 상태 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 상단 탭 메뉴
  const topTabs = [
    { id: 'home', label: '홈' },
    { id: 'plan', label: '자동매매설정' },
    { id: 'security', label: '전략타겟' },
    { id: 'account', label: '자산현황' },
    { id: 'account', label: '열림' },
    { id: 'account', label: '수익률' }
  ];
  // 포트폴리오 데이터
  const portfolioData = [
    { 
      종목명: 'TSLA', 
      현재가: 250.5, 
      평균가: 240.2, 
      수량: 50, 
      평가금액: 12525000, 
      수익률: 4.3, 
      전략적용여부: true 
    },
    { 
      종목명: 'NVDA', 
      현재가: 890.2, 
      평균가: 850.1, 
      수량: 25, 
      평가금액: 22255000, 
      수익률: 4.7, 
      전략적용여부: false 
    },
    { 
      종목명: 'AMZN', 
      현재가: 3420.8, 
      평균가: 3500.2, 
      수량: 10, 
      평가금액: 34208000, 
      수익률: -2.3, 
      전략적용여부: true 
    },
    { 
      종목명: 'AAPL', 
      현재가: 195.3, 
      평균가: 180.5, 
      수량: 75, 
      평가금액: 14647500, 
      수익률: 8.2, 
      전략적용여부: true 
    },
  ];

  // 차트 데이터 (기간별)
  const chartDataByPeriod = {
    일: [
      { time: '09:00', value: 15000000 },
      { time: '10:00', value: 15120000 },
      { time: '11:00', value: 14980000 },
      { time: '12:00', value: 15200000 },
      { time: '13:00', value: 15350000 },
      { time: '14:00', value: 15430000 },
    ],
    주간: [
      { time: '월', value: 14800000 },
      { time: '화', value: 15100000 },
      { time: '수', value: 14950000 },
      { time: '목', value: 15300000 },
      { time: '금', value: 15430000 },
    ],
    월: [
      { time: '1월', value: 14000000 },
      { time: '2월', value: 14500000 },
      { time: '3월', value: 14200000 },
      { time: '4월', value: 15000000 },
      { time: '5월', value: 15200000 },
      { time: '6월', value: 15430000 },
    ]
  };

  // 최근 체결 내역
  const recentTrades = [
    { id: 1, symbol: 'TSLA', type: 'BUY', amount: 10, price: 250.5, time: '14:25:32', profit: '+2.1%' },
    { id: 2, symbol: 'NVDA', type: 'SELL', amount: 5, price: 890.2, time: '14:20:15', profit: '+4.5%' },
    { id: 3, symbol: 'AAPL', type: 'BUY', amount: 25, price: 195.3, time: '14:15:48', profit: '+1.8%' },
  ];

  // 전략 성과 데이터
  const strategyPerformance = [
    { 전략명: 'RSI 역추세', 수익률: 12.5, 승률: 68.2, 최대낙폭: -3.8 },
    { 전략명: '볼린저밴드', 수익률: 8.3, 승률: 72.5, 최대낙폭: -2.1 },
    { 전략명: '이동평균 돌파', 수익률: 15.2, 승률: 65.8, 최대낙폭: -5.2 },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <DashSidebar
        theme={theme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenu="대시보드"
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Header */}
        <DashHeader
          theme={theme}
          toggleTheme={toggleTheme}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          title="대시보드"
        />
        {/* 상단 탭 네비게이션 */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 lg:px-6">
            <div className="flex space-x-8 overflow-x-auto">
              {topTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab && setActiveTab(tab.id)}
                  className={`py-3 px-1 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id 
                      ? theme === 'dark'
                        ? 'border-cyan-400 text-cyan-400'
                        : 'border-blue-600 text-blue-600'
                      : theme === 'dark'
                        ? 'border-transparent text-gray-400 hover:text-gray-300'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Dashboard Content */}
        <main className="p-6">
          {/* 내 계좌 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  총 자산
                </div>
                <DollarSign className="w-5 h-5 text-green-500" />
              </div>
              <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                ₩83,635,500
              </div>
              <div className="text-green-500 text-sm">전일 대비 +2.1%</div>
            </div>

            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  평가손익
                </div>
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
              <div className={`text-2xl font-bold text-blue-500 mb-2`}>
                +₩1,847,200
              </div>
              <div className="text-blue-500 text-sm">수익률 +2.26%</div>
            </div>

            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  보유품목
                </div>
                <Activity className="w-5 h-5 text-purple-500" />
              </div>
              <div className={`text-2xl font-bold text-purple-500 mb-2`}>
                4종목
              </div>
              <div className="text-purple-500 text-sm">활성 전략 3개</div>
            </div>
          </div>

          {/* 자동매매 & 포트폴리오 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* 자동매매 */}
            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  자동매매
                </h3>
                <button 
                  onClick={() => setAutoTradingEnabled(!autoTradingEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoTradingEnabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoTradingEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>활성 전략 수</span>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>3개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>금일 거래</span>
                  <span className={`font-semibold text-green-500`}>12회</span>
                </div>
                <div className="mt-4">
                  <div className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>최근 체결내역</div>
                  <div className="space-y-2">
                    {recentTrades.slice(0, 3).map((trade) => (
                      <div key={trade.id} className="flex justify-between items-center text-xs">
                        <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {trade.symbol} {trade.type}
                        </span>
                        <span className={`${trade.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {trade.profit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 수익률 차트 */}
            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  수익률 차트
                </h3>
                <div className="flex space-x-2">
                  {['일', '주간', '월'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setChartPeriod(period)}
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        chartPeriod === period
                          ? 'bg-blue-500 text-white'
                          : theme === 'dark'
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={chartDataByPeriod[chartPeriod]}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="time" stroke={theme === 'dark' ? "#9ca3af" : "#6b7280"} />
                  <YAxis stroke={theme === 'dark' ? "#9ca3af" : "#6b7280"} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: theme === 'dark' ? "#1f2937" : "#ffffff",
                      border: `1px solid ${theme === 'dark' ? "#374151" : "#e5e7eb"}`,
                      borderRadius: "8px",
                      color: theme === 'dark' ? "#ffffff" : "#000000"
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 포트폴리오 테이블 */}
          <div className={`rounded-xl shadow-lg p-6 border mb-8 ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              포트폴리오
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>종목명</th>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>현재가</th>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>평균가</th>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>수량</th>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>평가금액</th>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>수익률</th>
                    <th className={`text-left py-3 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>전략적용여부</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioData.map((item, index) => (
                    <tr key={index} className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                      <td className={`py-3 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.종목명}</td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>₩{item.현재가.toLocaleString()}</td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>₩{item.평균가.toLocaleString()}</td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.수량}</td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>₩{item.평가금액.toLocaleString()}</td>
                      <td className={`py-3 font-medium ${item.수익률 > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.수익률 > 0 ? '+' : ''}{item.수익률}%
                      </td>
                      <td className="py-3">
                        <button 
                          onClick={() => {/* 전략 적용/해제 로직 */}}
                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                            item.전략적용여부 ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        >
                          <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            item.전략적용여부 ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 하단 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* 최근 알림 */}
            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                최근 알림
              </h3>
              <div className="space-y-4">
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>전체 체결내역</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-blue-700'}`}>
                    금일 총 12회 거래 완료
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-green-900'}`}>승률</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-green-700'}`}>
                    현재 승률 68.2% (목표 대비 +3.2%)
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-orange-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-orange-900'}`}>최대낙폭</span>
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-orange-700'}`}>
                    현재 -2.1% (안전 구간)
                  </div>
                </div>
              </div>
            </div>

            {/* 전략성과요약 */}
            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                전략성과요약
              </h3>
              <div className="space-y-4">
                {strategyPerformance.map((strategy, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {strategy.전략명}
                      </span>
                      <Brain className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>수익률</div>
                        <div className="text-green-500 font-medium">+{strategy.수익률}%</div>
                      </div>
                      <div>
                        <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>승률</div>
                        <div className="text-blue-500 font-medium">{strategy.승률}%</div>
                      </div>
                      <div>
                        <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>최대낙폭</div>
                        <div className="text-red-500 font-medium">{strategy.최대낙폭}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <DashFooter theme={theme} />
      </div>
    </div>
  );
};

export default Dashboard;