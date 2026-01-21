import { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'bm', name: 'Bambara', nativeName: 'Bamanankan' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'wo', name: 'Wolof', nativeName: 'Wolof' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: Language) => void;
  isTranslating?: boolean;
}

const LanguageSelector = ({ 
  selectedLanguage, 
  onLanguageChange, 
  isTranslating = false 
}: LanguageSelectorProps) => {
  const currentLanguage = languages.find(l => l.code === selectedLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 border-border hover:border-primary/50"
          disabled={isTranslating}
        >
          <Globe className="w-4 h-4" />
          <span>{currentLanguage.nativeName}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onLanguageChange(language)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{language.nativeName}</span>
            {selectedLanguage === language.code && (
              <Check className="w-4 h-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
export { languages };
