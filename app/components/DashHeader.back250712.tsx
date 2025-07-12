import { useState, useEffect, useRef } from 'react';
import { 
  User, 
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
  Settings,
  Activity,
  Moon,
  Sun,
  Shield,
  UserCog,
  MessageSquare,
  HelpCircle,
  Globe,
  ChevronDown,
  Crown,
  TestTube,
  Gift,
} from 'lucide-react';
import { useNavigate } from '@remix-run/react';

interface SidebarItem {
  icon: any;
  label: string;
  active: boolean;
}

interface DashHeaderProps {
  theme: string;
  toggleTheme: () => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

interface DashHeaderReturn {
  sidebar: JSX.Element;
  header: JSX.Element;
}

const DashHeader = ({ theme, toggleTheme, sidebarOpen, setSidebarOpen }: DashHeaderProps): DashHeaderReturn => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [demoMode, setDemoMode] = useState(true);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // 사용자 드롭다운 메뉴 컴포넌트
  const UserDropdownMenu = () => (
    <div className={`absolute right-0 top-full mt-2 w-80 rounded-xl shadow-lg border z-50 ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {/* 계정 플랜 섹션 */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Crown className="w-5 h-5 text-blue-500 mr-2" />
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Pro Plan
            </span>
          </div>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors" onClick={() => navigate('/pricing')}>
          Upgrade
        </button>
      </div>

      {/* 메뉴 항목들 */}
      <div className="py-2">
        {/* Demo 토글 */}

        {/* <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center">
            <TestTube className={`w-4 h-4 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Demo</span>
          </div>
          <button 
            onClick={() => setDemoMode(!demoMode)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              demoMode ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
              demoMode ? 'translate-x-5' : 'translate-x-1'
            }`} />
          </button>
        </div> */}

        {/* Account settings */}
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" onClick={() => navigate('/settings')}>
          <UserCog className={`w-4 h-4 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>설정</span>
        </button>

        {/* Security */}
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Shield className={`w-4 h-4 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>보안</span>
        </button>

        {/* Help center */}
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" onClick={() => navigate('/doc')}>
          <HelpCircle className={`w-4 h-4 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>도움말</span>
        </button>
      </div>

      {/* 하단 설정 섹션 */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-2">

        {/* Dark mode toggle */}
        <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center">
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 mr-3 text-gray-400" />
            ) : (
              <Sun className="w-4 h-4 mr-3 text-gray-600" />
            )}
            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {theme === 'dark' ? 'Dark mode' : 'Light mode'}
            </span>
          </div>
          <button 
            onClick={toggleTheme}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              theme === 'dark' ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
              theme === 'dark' ? 'translate-x-5' : 'translate-x-1'
            }`} />
          </button>
        </div>

        {/* Log out */}
        <button className="w-full flex items-center px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-red-600 dark:text-red-400">
          <LogOut className="w-4 h-4 mr-3" />
          <span className="text-sm">Log out</span>
        </button>
      </div>

      {/* Terms and Conditions */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
        <button className={`text-xs ${theme === 'dark' ? 'text-gray-500 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'} transition-colors`}>
          Terms and Conditions
        </button>
      </div>
    </div>
  );
  const sidebarItems: SidebarItem[] = [
    { icon: Home, label: '대시보드', active: true },
    { icon: BarChart4, label: '거래', active: false },
    { icon: Wallet, label: '지갑', active: false },
    { icon: Target, label: '포트폴리오', active: false },
    { icon: Activity, label: '분석', active: false },
    { icon: Users, label: '소셜트레이딩', active: false },
    { icon: Settings, label: '설정', active: false },
  ];

  return {
    sidebar: (
      <>
        {/* Backdrop for mobile only */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r`}>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center">
              <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <a href="/">{theme === 'dark' ? <img className="h-[44px]" src="/logo-white.png" alt="" /> : <img className="h-[44px]" src="/logo.png" alt="" />}</a>
                </h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className={`lg:hidden ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
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
                    ? theme === 'dark' 
                      ? 'bg-gray-700 text-cyan-400 border-r-2 border-cyan-400' 
                      : 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : theme === 'dark' 
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
      </>
    ),
    header: (
      <header className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`mr-3 lg:mr-4 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Menu className="w-6 h-6" />
              </button>
              <h2 className={`text-lg lg:text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                대시보드
              </h2>
            </div>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* 검색바 - 데스크톱에만 표시 */}
              <div className="relative hidden lg:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="검색..."
                  className={`pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* 모바일 검색 아이콘 */}
              <button className={`lg:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
                <Bell className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-2 lg:space-x-3 relative" ref={userMenuRef}>
                {/* 프로필 텍스트 - 데스크톱에만 표시 */}
                <div className={`text-right hidden lg:block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  <div className="text-sm font-medium">트레이더님</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>환영합니다!</div>
                </div>
                
                {/* 프로필 아바타 - 클릭 가능 */}
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-colors"
                >
                  <User className="w-4 h-4 text-white" />
                </button>

                {/* 사용자 드롭다운 메뉴 */}
                {userMenuOpen && <UserDropdownMenu />}
                
                {/* 로그아웃 버튼 - 데스크톱에만 표시 (드롭다운에 포함되므로 숨김 처리) */}
                <button 
                  className={`hidden xl:block p-2 rounded-lg transition-colors ${
                    theme === 'dark' ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {/* <LogOut className="w-4 h-4" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  };
};

export default DashHeader;