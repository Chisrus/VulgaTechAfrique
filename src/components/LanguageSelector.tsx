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

export const languages: Language[] = [
  // Langues principales
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  
  // Afrique de l'Ouest
  { code: 'bm', name: 'Bambara', nativeName: 'Bamanankan' },
  { code: 'wo', name: 'Wolof', nativeName: 'Wolof' },
  { code: 'ff', name: 'Fulani', nativeName: 'Fulfulde' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo' },
  { code: 'ee', name: 'Ewe', nativeName: 'Eʋegbe' },
  { code: 'ak', name: 'Akan/Twi', nativeName: 'Akan' },
  { code: 'mos', name: 'Mooré', nativeName: 'Mooré' },
  { code: 'fon', name: 'Fon', nativeName: 'Fɔngbè' },
  
  // Afrique de l'Est
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
  { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda' },
  { code: 'lg', name: 'Luganda', nativeName: 'Luganda' },
  
  // Afrique Australe
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
  { code: 'st', name: 'Sesotho', nativeName: 'Sesotho' },
  { code: 'tn', name: 'Setswana', nativeName: 'Setswana' },
  { code: 'sn', name: 'Shona', nativeName: 'chiShona' },
  
  // Afrique Centrale
  { code: 'ln', name: 'Lingala', nativeName: 'Lingála' },
  { code: 'kg', name: 'Kikongo', nativeName: 'Kikongo' },
  
  // Afrique du Nord
  { code: 'ber', name: 'Tamazight', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
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
