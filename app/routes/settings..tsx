import { useThemeStore } from '~/stores/themeStore';
import DashHeader from '~/components/dashHeader';

import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
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

const AccountSettings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [editingApiKey, setEditingApiKey] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // 상태 데이터
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [apiKey, setApiKey] = useState('sk-1234567890abcdef1234567890abcdef');
  const [newApiKey, setNewApiKey] = useState('');

  const tabs = [
    { id: 'account', label: 'Account details' },
    { id: 'plan', label: 'Plan' },
    { id: 'security', label: 'Security' }
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button className="mr-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" onClick={() => handleGoBack()}>
                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Account Details Tab */}
        {activeTab === 'account' && (
          <div className="space-y-6">
            {/* User ID and Username */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Username */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                 Username
                </label>
                <div className="flex items-center">
                  <User className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">trader123@gmail.com</span>
                </div>
              </div>

              {/* User ID */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  User ID
                </label>
                <div className="flex items-center">
                  <User className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">083b90da</span>
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-gray-400 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Password</h3>
                </div>
                <button
                  onClick={() => setEditingPassword(!editingPassword)}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {editingPassword ? 'Cancel' : 'Change Password'}
                </button>
              </div>

              {!editingPassword ? (
                <div className="flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value="••••••••••••"
                    readOnly
                    className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-3 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setEditingPassword(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePasswordUpdate}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* API Key Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Key className="w-5 h-5 text-gray-400 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">API Key</h3>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopyApiKey}
                    className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors flex items-center"
                  >
                    {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button
                    onClick={() => setEditingApiKey(!editingApiKey)}
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    {editingApiKey ? 'Cancel' : 'Edit'}
                  </button>
                </div>
              </div>

              {!editingApiKey ? (
                <div className="flex items-center">
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={showApiKey ? apiKey : '••••••••••••••••••••••••••••••••'}
                    readOnly
                    className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 font-mono text-sm"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="ml-3 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      New API Key
                    </label>
                    <input
                      type="text"
                      value={newApiKey}
                      onChange={(e) => setNewApiKey(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      placeholder="sk-..."
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setEditingApiKey(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleApiKeyUpdate}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Update API Key
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Danger Zone */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-red-200 dark:border-red-700">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                <h3 className="text-lg font-medium text-red-600 dark:text-red-400">Danger Zone</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </button>
            </div>
          </div>
        )}

        {/* Other tabs content */}
        {activeTab !== 'account' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This section is coming soon...
            </p>
          </div>
        )}
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Delete Account</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;