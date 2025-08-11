import React, { useState } from 'react';
import { X, Shield, Lock, Eye, EyeOff, Users, Globe, Key } from 'lucide-react';
import { PrivacySettings } from '../types';

interface PrivacyPanelProps {
  settings: PrivacySettings;
  onClose: () => void;
  onUpdate: (settings: PrivacySettings) => void;
}

export const PrivacyPanel: React.FC<PrivacyPanelProps> = ({ settings, onClose, onUpdate }) => {
  const [localSettings, setLocalSettings] = useState<PrivacySettings>(settings);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);

  const handleSave = () => {
    if (localSettings.isLocked && newPassword) {
      if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (settings.isLocked && currentPassword !== settings.password) {
        alert('Current password is incorrect!');
        return;
      }
      setLocalSettings(prev => ({ ...prev, password: newPassword }));
    }

    onUpdate(localSettings);
    onClose();
  };

  const handleToggleLock = () => {
    if (!localSettings.isLocked) {
      setLocalSettings(prev => ({ ...prev, isLocked: true }));
    } else if (settings.password && currentPassword !== settings.password) {
      alert('Please enter the correct current password to disable lock');
      return;
    } else {
      setLocalSettings(prev => ({ ...prev, isLocked: false, password: '' }));
      setNewPassword('');
      setConfirmPassword('');
      setCurrentPassword('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Privacy & Security</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Timeline Lock */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <Lock className={`h-5 w-5 mt-0.5 ${localSettings.isLocked ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <h3 className="font-semibold text-gray-900">Timeline Lock</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Protect your timeline with a password
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={localSettings.isLocked}
                  onChange={handleToggleLock}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            {localSettings.isLocked && (
              <div className="mt-4 space-y-3">
                {settings.isLocked && settings.password && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                        placeholder="Enter current password"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {settings.password ? 'New Password' : 'Password'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswords(!showPasswords)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Privacy Settings */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
              <Key className="h-5 w-5 text-gray-600" />
              <span>Privacy Controls</span>
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <EyeOff className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Hide from Search</p>
                    <p className="text-sm text-gray-600">Prevent your timeline from being discoverable</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSettings.hideFromSearch}
                    onChange={(e) => setLocalSettings(prev => ({ ...prev, hideFromSearch: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Limited Sharing</p>
                    <p className="text-sm text-gray-600">Only allow sharing with approved contacts</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSettings.limitedSharing}
                    onChange={(e) => setLocalSettings(prev => ({ ...prev, limitedSharing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Security Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${localSettings.isLocked ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="text-blue-800">
                  Timeline is {localSettings.isLocked ? 'password protected' : 'not password protected'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${localSettings.hideFromSearch ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-blue-800">
                  Search visibility: {localSettings.hideFromSearch ? 'Hidden' : 'Visible'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${localSettings.limitedSharing ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="text-blue-800">
                  Sharing: {localSettings.limitedSharing ? 'Limited' : 'Open'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};