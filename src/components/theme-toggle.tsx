'use client';

import { Button } from '@/components/ui/button';
import { getCookie, setCookie } from '@/lib/cookies';
import { Moon, Palette, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

// Define color themes
const colorThemes = [
  { name: 'blue', label: 'Blue', color: '#1d4ed8' },
  { name: 'purple', label: 'Purple', color: '#7e22ce' },
  { name: 'green', label: 'Green', color: '#15803d' },
  { name: 'orange', label: 'Orange', color: '#c2410c' },
  { name: 'rose', label: 'Rose', color: '#be123c' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [currentColorTheme, setCurrentColorTheme] = React.useState('green');
  const colorPickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const savedTheme = getCookie('theme') || 'dark';
    const savedColorTheme = getCookie('colorTheme') || 'green';
    setTheme(savedTheme);
    setCurrentColorTheme(savedColorTheme);
  }, [setTheme]);

  React.useEffect(() => {
    if (!mounted) return;

    // Close color picker when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCookie('theme', newTheme, 365);
  };

  const handleColorThemeChange = (colorTheme: string) => {
    setCurrentColorTheme(colorTheme);
    setCookie('colorTheme', colorTheme, 365);
  };

  React.useEffect(() => {
    if (!mounted || !currentColorTheme) return;

    const root = document.documentElement;
    let primaryValue;

    switch (currentColorTheme) {
      case 'blue':
        primaryValue = '221 83% 53%';
        break;
      case 'purple':
        primaryValue = '270 76% 47%';
        break;
      case 'green':
        primaryValue = '142 76% 36%';
        break;
      case 'orange':
        primaryValue = '24 95% 40%';
        break;
      case 'rose':
        primaryValue = '336 80% 42%';
        break;
      default:
        primaryValue = '142 76% 36%'; // Default to green
    }

    root.style.setProperty('--primary', primaryValue);
    root.style.setProperty('--primary-foreground', '210 40% 98%');
    root.style.setProperty('--ring', primaryValue);
  }, [currentColorTheme, mounted]);

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <div className="size-10"></div>
      </div>
    );
  }

  return (
    <div className="relative" ref={colorPickerRef}>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="relative overflow-hidden rounded-full transition-colors hover:bg-secondary"
        >
          {theme === 'dark' ? (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-12" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-45" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="relative overflow-hidden rounded-full transition-colors hover:bg-secondary"
          aria-expanded={showColorPicker}
          aria-haspopup="true"
        >
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              backgroundColor: colorThemes.find((t) => t.name === currentColorTheme)?.color,
            }}
          />
          <Palette className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-12" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </div>

      {showColorPicker && (
        <div className="absolute right-0 top-12 z-50 mt-2 w-48 rounded-lg border border-border bg-card p-3 shadow-lg animate-in fade-in-20 slide-in-from-top-5">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Select Color Theme</p>
          <div className="space-y-1">
            {colorThemes.map((colorTheme) => (
              <button
                key={colorTheme.name}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-secondary ${
                  currentColorTheme === colorTheme.name ? 'bg-secondary/80' : ''
                }`}
                onClick={() => {
                  handleColorThemeChange(colorTheme.name);
                }}
              >
                <div
                  className={`h-4 w-4 rounded-full ring-1 ring-border ${
                    currentColorTheme === colorTheme.name ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ backgroundColor: colorTheme.color }}
                />
                <span>{colorTheme.label}</span>
                {currentColorTheme === colorTheme.name && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto h-4 w-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
