import React, { useState, useEffect } from 'react';
import { useThemeStore } from '../stores/themeStore';
import { 
  User, 
  Lock, 
  Key, 
  Eye, 
  EyeOff, 
  Edit, 
  Copy, 
  Save, 
  X, 
  Trash2,
  AlertTriangle,
  ArrowLeft,
  Check
} from 'lucide-react';

import DashHeader from '~/components/DashHeader';
import DashSidebar from '~/components/DashSidebar';
import DashFooter from '~/components/DashFooter';

const AccountSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [editingApiKey, setEditingApiKey] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  
  // 상태 데이터
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [apiKey, setApiKey] = useState('sk-1234567890abcdef1234567890abcdef');
  const [newApiKey, setNewApiKey] = useState('');

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

  const topTabs = [
    { id: 'account', label: '계정 정보' },
    { id: 'plan', label: '요금제' },
    { id: 'security', label: '보안' }
  ];

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePasswordUpdate = () => {
    // 비밀번호 업데이트 로직
    console.log('Password updated');
    setEditingPassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleApiKeyUpdate = () => {
    // API 키 업데이트 로직
    setApiKey(newApiKey);
    setEditingApiKey(false);
    setNewApiKey('');
  };

  const handleDeleteAccount = () => {
    // 계정 삭제 로직
    console.log('Account deleted');
    setShowDeleteModal(false);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <DashSidebar
        theme={theme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenu="계정관리"
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Header */}
        <DashHeader
          theme={theme}
          toggleTheme={toggleTheme}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          title="계정관리"
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

          {/* Account Details Tab */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              {/* User ID and Username */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Username */}
                <div className={`rounded-lg p-6 border ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                   Username
                  </label>
                  <div className="flex items-center">
                    <User className={`w-4 h-4 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>trader123@gmail.com</span>
                  </div>
                </div>

                {/* User ID */}
                <div className={`rounded-lg p-6 border ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    User ID
                  </label>
                  <div className="flex items-center">
                    <User className={`w-4 h-4 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>083b90da</span>
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className={`rounded-lg p-6 border ${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Lock className={`w-5 h-5 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Password</h3>
                  </div>
                  <button
                    onClick={() => setEditingPassword(!editingPassword)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      theme === 'dark' 
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {editingPassword ? '취소' : '비밀번호 변경'}
                  </button>
                </div>

                {!editingPassword ? (
                  <div className="flex items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value="••••••••••••"
                      readOnly
                      className={`flex-1 border rounded-lg px-3 py-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-gray-300'
                          : 'bg-gray-50 border-gray-300 text-gray-700'
                      }`}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className={`ml-3 p-2 ${
                        theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        현재 비밀번호
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'border-gray-600 bg-gray-700 text-gray-100'
                            : 'border-gray-300 bg-white text-gray-900'
                        }`}
                        placeholder="현재 비밀번호"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        새 비밀번호
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'border-gray-600 bg-gray-700 text-gray-100'
                            : 'border-gray-300 bg-white text-gray-900'
                        }`}
                        placeholder="새 비밀번호"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        새 비밀번호 확인
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'border-gray-600 bg-gray-700 text-gray-100'
                            : 'border-gray-300 bg-white text-gray-900'
                        }`}
                        placeholder="새 비밀번호 확인"
                      />
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setEditingPassword(false)}
                        className={`px-4 py-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        취소
                      </button>
                      <button
                        onClick={handlePasswordUpdate}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        비밀번호 변경
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* API Key Section */}
              <div className={`rounded-lg p-6 border ${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Key className={`w-5 h-5 mr-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                    <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>API Key</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCopyApiKey}
                      className={`px-3 py-1 text-sm font-medium transition-colors flex items-center ${
                        theme === 'dark' 
                          ? 'text-gray-400 hover:text-gray-200'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                      {copied ? '복사됨' : '복사'}
                    </button>
                    <button
                      onClick={() => setEditingApiKey(!editingApiKey)}
                      className={`px-4 py-2 text-sm font-medium transition-colors flex items-center ${
                        theme === 'dark' 
                          ? 'text-cyan-400 hover:text-cyan-300'
                          : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      {editingApiKey ? '취소' : '수정'}
                    </button>
                  </div>
                </div>

                {!editingApiKey ? (
                  <div className="flex items-center">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={showApiKey ? apiKey : '••••••••••••••••••••••••••••••••'}
                      readOnly
                      className={`flex-1 border rounded-lg px-3 py-2 font-mono text-sm ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-gray-300'
                          : 'bg-gray-50 border-gray-300 text-gray-700'
                      }`}
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className={`ml-3 p-2 ${
                        theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        New API Key
                      </label>
                      <input
                        type="text"
                        value={newApiKey}
                        onChange={(e) => setNewApiKey(e.target.value)}
                        className={`w-full border rounded-lg px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'border-gray-600 bg-gray-700 text-gray-100'
                            : 'border-gray-300 bg-white text-gray-900'
                        }`}
                        placeholder="sk-..."
                      />
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setEditingApiKey(false)}
                        className={`px-4 py-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        취소
                      </button>
                      <button
                        onClick={handleApiKeyUpdate}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        API 키 변경
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Danger Zone */}
              <div className={`rounded-lg p-6 border ${
                theme === 'dark' ? 'bg-gray-800 border-red-700' : 'bg-white border-red-200'
              }`}>
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                  <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>주의</h3>
                </div>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  계정을 삭제하면 되돌릴 수 없습니다. 신중하게 결정해주세요.
                </p>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  계정 삭제
                </button>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== 'account' && (
            <div className={`rounded-lg p-8 border text-center ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {topTabs.find(tab => tab.id === activeTab)?.label}
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                이 섹션은 준비 중입니다.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <DashFooter theme={theme} />
        
        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-md w-full mx-4 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>계정 삭제</h3>
              </div>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                계정을 삭제하면 되돌릴 수 없습니다. 신중하게 결정해주세요.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className={`px-4 py-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  취소
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  계정 삭제
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default AccountSettings;