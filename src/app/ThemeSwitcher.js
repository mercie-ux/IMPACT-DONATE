
import React from 'react';
import { Switch } from 'antd';
import { loadTheme } from 'vite-plugin-theme/es/client';

const themes = {
  light: {
    'primary-color': '#d4f674',
    'link-color': '#4a90e2',
  },
  dark: {
    'primary-color': '#001529',
    'link-color': '#1DA57A',
  },
};

const ThemeSwitcher = () => {
  const toggleTheme = (checked) => {
    const theme = checked ? 'dark' : 'light';
    loadTheme(themes[theme]);
  };

  return (
    <Switch
      checkedChildren="Dark"
      unCheckedChildren="Light"
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitcher;
