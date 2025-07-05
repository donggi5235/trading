import { useThemeStore } from '~/stores/themeStore';

interface FooterProps {
  onLinkClick?: (linkName: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const { theme } = useThemeStore();

  const textSecondary = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const primaryColor = theme === 'dark' ? 'text-cyan-400' : 'text-blue-600';

  const handleLinkClick = (linkName: string) => {
    if (onLinkClick) {
      onLinkClick(linkName);
    }
    // 여기에 실제 라우팅 로직을 추가할 수 있습니다
    console.log(`${linkName} 링크 클릭됨`);
  };

  const footerLinks = [
    '회사소개', 
    '이용약관', 
    '개인정보처리방침', 
    '고객지원', 
    '블로그', 
    '채용정보'
  ];

  return (
    <footer className={`${theme === 'dark' ? 'bg-slate-900/90 border-cyan-400/20' : 'bg-white/90 border-blue-600/20'} border-t py-12`}>
      <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {footerLinks.map((link) => (
            <a 
              key={link} 
              className={`${textSecondary} hover:${primaryColor.replace('text-', 'text-')} transition-colors duration-300 cursor-pointer`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-cyan-400/10' : 'border-blue-600/10'} ${textSecondary} text-sm`}>
          <p>&copy; 2025 Trading Gear. All rights reserved. | 투자에는 원금 손실의 위험이 있습니다.</p>
        </div>
      </div>
    </footer>
  );
}