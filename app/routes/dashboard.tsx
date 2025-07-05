import React, { useState, useContext, createContext } from 'react';
import type { MetaFunction } from "@remix-run/node";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
  User, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CreditCard, 
  Plus, 
  Gift, 
  BarChart3,
  Activity,
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Moon,
  Sun,
  Settings,
  Bell,
  LogOut,
  Home,
  Wallet,
  Target,
  BarChart4,
  Users,
  Search,
  Menu,
  X,
  BarChart2,
  ShieldCheck,
  FileBarChart
} from 'lucide-react';

export const meta: MetaFunction = () => {
    return [
      { title: "TRADING GEAR" },
      { name: "description", content: "AI 트레이딩의 새로운 시대" },
    ];
};

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const TradingDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { isDark, toggleTheme } = useTheme();

  // 샘플 데이터
  const portfolioData = [
    { name: '한국 주식', value: 35, color: '#00d4aa', amount: 5425000 },
    { name: '미국 주식', value: 20, color: '#1e88e5', amount: 3100000 },
    { name: 'ETF', value: 25, color: '#7c4dff', amount: 3875000 },
    { name: '파킹 투자', value: 15, color: '#ff6b6b', amount: 2325000 },
    { name: '펀트 투자', value: 5, color: '#ffa726', amount: 775000 }
  ];

  const tradingVolumeData = [
    { month: '1월', volume: 1200, profit: 150 },
    { month: '2월', volume: 1800, profit: 280 },
    { month: '3월', volume: 2200, profit: 340 },
    { month: '4월', volume: 1900, profit: 190 },
    { month: '5월', volume: 2500, profit: 420 },
    { month: '6월', volume: 3100, profit: 580 }
  ];

  const profitLossData = [
    { date: '6/1', value: 1500000, pnl: 150000 },
    { date: '6/8', value: 1520000, pnl: 200000 },
    { date: '6/15', value: 1490000, pnl: -100000 },
    { date: '6/22', value: 1540000, pnl: 400000 },
    { date: '6/29', value: 1560000, pnl: 200000 },
    { date: '7/5', value: 1540000, pnl: -200000 }
  ];

  const recentTrades = [
    { id: 1, symbol: 'TSLA', type: 'BUY', amount: 50, price: 250.5, time: '09:30', status: 'completed' },
    { id: 2, symbol: 'NVDA', type: 'SELL', amount: 25, price: 890.2, time: '10:15', status: 'completed' },
    { id: 3, symbol: 'AMZN', type: 'BUY', amount: 10, price: 3420.8, time: '11:22', status: 'pending' },
    { id: 4, symbol: 'AAPL', type: 'SELL', amount: 75, price: 195.3, time: '14:05', status: 'completed' },
  ];

  const handleLogin = () => {
    if (formData.username && formData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Sidebar Navigation Items
  const sidebarItems = [
    { icon: Home, label: '대시보드', active: true },
    { icon: BarChart4, label: '거래', active: false },
    { icon: Wallet, label: '지갑', active: false },
    { icon: Target, label: '전략 마켓', active: false },
    { icon: ShieldCheck, label: '리스크 관리', active: false },
    { icon: FileBarChart, label: 'ML 리포트', active: false },
    { icon: BarChart2, label: '백테스트보기', active: false },
    { icon: Settings, label: '설정', active: false },
  ];

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}>
        <div className="max-w-md w-full">
          <div className={`rounded-2xl shadow-2xl p-8 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {isDark ? <img src="/login-logo-light.png" alt="" className="h-[120px] my-0 mx-auto" /> : <img src="/logo2.png" alt="" className="h-[120px] my-0 mx-auto" />}
              </h1>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  아이디
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="아이디를 입력하세요"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  비밀번호
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition duration-200 shadow-lg"
              >
                로그인
              </button>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r`}>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              <a href="/">{isDark ? <img className="h-[44px]" src="/logo-white.png" alt="" /> : <img className="h-[44px]" src="/logo.png" alt="" />}</a>
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className={`md:hidden ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? isDark 
                    ? 'bg-gray-700 text-cyan-400 border-r-2 border-cyan-400' 
                    : 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : isDark 
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        {/* Header */}
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className={`mr-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  <Menu className="w-6 h-6" />
                </button>
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  대시보드
                </h2>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <input
                    type="text"
                    placeholder="검색..."
                    className={`pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                
                <button className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                  <Bell className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-3">
                  <div className={`text-right ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {/* <div className="text-sm font-medium">{formData.username}님</div> */}
                    <div className="text-sm font-medium">김희정 님</div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>프리미엄 회원</div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <button 
                    onClick={() => setIsLoggedIn(false)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* 계좌 정보 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className={`rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  총 자산
                </div>
                <DollarSign className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="flex items-center mb-2">
                <ArrowUpRight className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-3xl font-bold text-green-500">+8.5%</span>
              </div>
              <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                ₩15,430,000
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  거래가능금액
                </div>
                <CreditCard className="w-5 h-5 text-blue-500" />
              </div>
              <div className={`text-3xl font-bold text-blue-500 mb-2`}>
                53.3%
              </div>
              <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                ₩8,230,000
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                전체 자산 대비
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  일일 손익
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex items-center mb-2">
                <ArrowUpRight className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-3xl font-bold text-green-500">+2.1%</span>
              </div>
              <div className="text-lg font-medium text-green-400">
                +₩145,200
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                오늘 기준
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  활성 포지션
                </div>
                <Activity className="w-5 h-5 text-purple-500" />
              </div>
              <div className="flex items-center mb-2">
                <span className={`text-3xl font-bold text-purple-500 mr-2`}>66.7%</span>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                12개 포지션
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                8개 수익중 (4개 손실)
              </div>
            </div>
          </div>

          {/* 차트 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* 손익 차트 */}
            <div className={`rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              포트폴리오 가치 추이
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={profitLossData}>
                  <defs>
                    <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d4aa" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00d4aa" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="date" stroke={isDark ? "#9ca3af" : "#6b7280"} />
                  <YAxis stroke={isDark ? "#9ca3af" : "#6b7280"} tickFormatter={(v) => `${(v / 10000).toFixed(0)}만`} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#ffffff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      borderRadius: "8px",
                      color: isDark ? "#ffffff" : "#000000"
                    }}
                    formatter={(v: any) => `₩ ${v.toLocaleString()}`}
                  />
                  <Area type="monotone" dataKey="value" stroke="#00d4aa" fillOpacity={1} fill="url(#colorPnl)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* 포트폴리오 비중 */}
            <div className={`rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                포트폴리오 비중
              </h3>
              <div className="flex justify-center mb-4">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor:isDark ? "#DDD" : "#ffffff",
                        border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                        borderRadius: "8px",
                        color: isDark ? "#ffffff" : "#000000"
                      }}
                      formatter={(v: any) => `${v.toLocaleString()}%`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: item.color}}></div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}%</div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>₩{item.amount.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 하단 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 최근 거래 */}
            <div className={`lg:col-span-2 rounded-xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                최근 거래
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <th className={`text-left py-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>종목</th>
                      <th className={`text-left py-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>타입</th>
                      <th className={`text-left py-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>수량</th>
                      <th className={`text-left py-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>가격</th>
                      <th className={`text-left py-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>시간</th>
                      <th className={`text-left py-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrades.map((trade) => (
                      <tr key={trade.id} className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className={`py-3 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{trade.symbol}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            trade.type === 'BUY' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }`}>
                            {trade.type}
                          </span>
                        </td>
                        <td className={`py-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{trade.amount}</td>
                        <td className={`py-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>₩{trade.price}</td>
                        <td className={`py-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{trade.time}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            trade.status === 'completed' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                          }`}>
                            {trade.status === 'completed' ? '완료' : '대기중'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 투자 성향 & 액션 버튼 */}
            <div className="space-y-6">
              <div className={`rounded-xl shadow-lg p-6 border ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  투자 성향
                </h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-purple-500 mb-2">적극 투자형</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    고위험 고수익 추구
                  </div>
                  
                  <div className={`bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-2 mb-2 ${isDark ? 'from-gray-700 to-gray-600' : ''}`}>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>위험 수용도: 85%</div>
                </div>
              </div>

              <div className={`rounded-xl shadow-lg p-6 border ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  빠른 액션
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition duration-200 flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    자금 충전
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition duration-200">
                    계좌 이체
                  </button>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition duration-200 flex items-center justify-center">
                    <Gift className="w-4 h-4 mr-2" />
                    쿠폰 사용
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <TradingDashboard />
    </ThemeProvider>
  );
};

export default App;