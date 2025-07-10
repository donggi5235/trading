import { useState, useContext, createContext, useEffect } from 'react';
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
} from 'lucide-react';

import { useThemeStore } from '~/stores/themeStore';
import DashHeader from '~/components/dashHeader';

// Theme Context
interface ThemeContextType {
  theme: string;
}
const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: any) => {
  const { theme } = useThemeStore();
  
  return (
    <ThemeContext.Provider value={{theme}}>
      <div className={theme === 'dark' ? 'dark' : ''}>
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
const [sidebarOpen, setSidebarOpen] = useState(false);
const { theme, toggleTheme } = useThemeStore();

// 화면 크기에 따른 사이드바 초기 상태 설정
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) { // lg 브레이크포인트
      setSidebarOpen(true); // PC에서는 열림
    } else {
      setSidebarOpen(false); // 모바일에서는 닫힘
    }
  };

  // 초기 설정
  handleResize();

  // 윈도우 리사이즈 이벤트 리스너
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// DashHeader 컴포넌트에서 사이드바와 헤더 분리
const dashComponents = DashHeader({
  theme,
  toggleTheme,
  sidebarOpen,
  setSidebarOpen
});

// 화면 크기에 따른 사이드바 초기 상태 설정
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) { // lg 브레이크포인트
      setSidebarOpen(true); // PC에서는 열림
    } else {
      setSidebarOpen(false); // 모바일에서는 닫힘
    }
  };

  // 초기 설정
  handleResize();

  // 윈도우 리사이즈 이벤트 리스너
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// 샘플 데이터
const portfolioData = [
  { name: '전기차', value: 35, color: '#00d4aa', amount: 5425000 },
  { name: '항공우주', value: 20, color: '#1e88e5', amount: 3100000 },
  { name: '2차전지', value: 25, color: '#7c4dff', amount: 3875000 },
  { name: 'AI/Tech', value: 15, color: '#ff6b6b', amount: 2325000 },
  { name: '기타', value: 5, color: '#ffa726', amount: 775000 }
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
  { date: '6/1', value: 15000000, pnl: 0 },
  { date: '6/8', value: 15200000, pnl: 200000 },
  { date: '6/15', value: 14950000, pnl: -50000 },
  { date: '6/22', value: 15400000, pnl: 400000 },
  { date: '6/29', value: 15650000, pnl: 650000 },
  { date: '7/5', value: 15430000, pnl: 430000 }
];

const recentTrades = [
  { id: 1, symbol: 'TSLA', type: 'BUY', amount: 50, price: 250.5, time: '09:30', status: 'completed' },
  { id: 2, symbol: 'NVDA', type: 'SELL', amount: 25, price: 890.2, time: '10:15', status: 'completed' },
  { id: 3, symbol: 'AMZN', type: 'BUY', amount: 10, price: 3420.8, time: '11:22', status: 'pending' },
  { id: 4, symbol: 'AAPL', type: 'SELL', amount: 75, price: 195.3, time: '14:05', status: 'completed' },
];

return (
  <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
    {/* Sidebar Component */}
    {dashComponents.sidebar}

    {/* Main Content */}
    <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
      {/* Header */}
      {dashComponents.header}
      
      {/* Dashboard Content */}
      <main className="p-6">
        {/* 계좌 정보 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`rounded-xl shadow-lg p-6 border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                총 자산
              </div>
              <DollarSign className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="flex items-center mb-2">
              <ArrowUpRight className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-3xl font-bold text-green-500">+8.5%</span>
            </div>
            <div className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              ₩15,430,000
            </div>
          </div>

          <div className={`rounded-xl shadow-lg p-6 border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                거래가능금액
              </div>
              <CreditCard className="w-5 h-5 text-blue-500" />
            </div>
            <div className={`text-3xl font-bold text-blue-500 mb-2`}>
              53.3%
            </div>
            <div className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              ₩8,230,000
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
              전체 자산 대비
            </div>
          </div>

          <div className={`rounded-xl shadow-lg p-6 border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
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
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
              오늘 기준
            </div>
          </div>

          <div className={`rounded-xl shadow-lg p-6 border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                활성 포지션
              </div>
              <Activity className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex items-center mb-2">
              <span className={`text-3xl font-bold text-purple-500 mr-2`}>66.7%</span>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              12개 포지션
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
              8개 수익중 (4개 손실)
            </div>
          </div>
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 손익 차트 */}
          <div className={`rounded-xl shadow-lg p-6 border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              포트폴리오 성과
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={profitLossData}>
                <defs>
                  <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d4aa" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00d4aa" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="date" stroke={theme === 'dark' ? "#9ca3af" : "#6b7280"} />
                <YAxis stroke={theme === 'dark' ? "#9ca3af" : "#6b7280"} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? "#1f2937" : "#ffffff",
                    border: `1px solid ${theme === 'dark' ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "8px",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#00d4aa" fillOpacity={1} fill="url(#colorPnl)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* 포트폴리오 비중 */}
          <div className={`rounded-xl shadow-lg p-6 border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
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
                      backgroundColor: theme === 'dark' ? "#1f2937" : "#ffffff",
                      border: `1px solid ${theme === 'dark' ? "#374151" : "#e5e7eb"}`,
                      borderRadius: "8px",
                      color: theme === 'dark' ? "#ffffff" : "#000000"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: item.color}}></div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.value}%</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>₩{item.amount.toLocaleString()}</div>
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
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              최근 거래
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>종목</th>
                    <th className={`text-left py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>타입</th>
                    <th className={`text-left py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>수량</th>
                    <th className={`text-left py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>가격</th>
                    <th className={`text-left py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>시간</th>
                    <th className={`text-left py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrades.map((trade) => (
                    <tr key={trade.id} className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                      <td className={`py-3 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{trade.symbol}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.type === 'BUY' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{trade.amount}</td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>₩{trade.price}</td>
                      <td className={`py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{trade.time}</td>
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
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                투자 성향
              </h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-bold text-purple-500 mb-2">적극 투자형</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  고위험 고수익 추구
                </div>
                
                <div className={`bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-2 mb-2 ${theme === 'dark' ? 'from-gray-700 to-gray-600' : ''}`}>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>위험 수용도: 85%</div>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-6 border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
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