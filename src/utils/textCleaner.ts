/**
 * Utilitaires de nettoyage de texte pour l'application
 */

/**
 * Nettoie le texte des caractères spéciaux et symboles indésirables
 * @param text - Le texte à nettoyer
 * @returns Le texte nettoyé
 */
export const cleanText = (text: string): string => {
  if (!text || typeof text !== 'string') return text;
  
  return text
    // Supprimer tous les caractères sauf lettres, chiffres, ponctuation de base et espaces
    .replace(/[^\w\sàâäéèêëïîôöùûüÿçñæœ.,!?;:'"-]/gi, '')
    // Supprimer les caractères de contrôle et invisibles
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    // Nettoyer les espaces multiples et caractères blancs
    .replace(/\s+/g, ' ')
    // Supprimer les espaces en début et fin
    .trim();
};

/**
 * Nettoie et limite la longueur du texte
 * @param text - Le texte à nettoyer
 * @param maxLength - Longueur maximale
 * @returns Le texte nettoyé et tronqué si nécessaire
 */
export const cleanAndTruncate = (text: string, maxLength: number): string => {
  const cleaned = cleanText(text);
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength - 3) + '...';
};

/**
 * Nettoie le texte pour l'affichage dans les titres
 * @param text - Le titre à nettoyer
 * @returns Le titre nettoyé
 */
export const cleanTitle = (text: string): string => {
  return cleanAndTruncate(text, 100);
};

/**
 * Nettoie le texte pour l'affichage dans les descriptions
 * @param text - La description à nettoyer
 * @returns La description nettoyée
 */
export const cleanDescription = (text: string): string => {
  return cleanAndTruncate(text, 500);
};

/**
 * Nettoie le texte pour le contenu des cours
 * @param text - Le contenu à nettoyer
 * @returns Le contenu nettoyé
 */
export const cleanContent = (text: string): string => {
  return cleanText(text);
};

/**
 * Valide et nettoie le nom d'une catégorie
 * @param category - Le nom de la catégorie
 * @returns La catégorie nettoyée
 */
export const cleanCategory = (category: string): string => {
  const cleaned = cleanText(category);
  // Normaliser les catégories connues
  const categoryMap: Record<string, string> = {
    'robotique': 'Robotique',
    'programmation': 'Programmation', 
    'electronique': 'Électronique',
    'électronique': 'Électronique',
    'ia': 'Intelligence Artificielle',
    'intelligence artificielle': 'Intelligence Artificielle',
  };
  
  return categoryMap[cleaned.toLowerCase()] || cleaned;
};

/**
 * Valide et nettoie le niveau de difficulté
 * @param difficulty - Le niveau de difficulté
 * @returns La difficulté nettoyée
 */
export const cleanDifficulty = (difficulty: string): string => {
  const cleaned = cleanText(difficulty);
  // Normaliser les niveaux de difficulté
  const difficultyMap: Record<string, string> = {
    'debutant': 'Débutant',
    'débutant': 'Débutant',
    'intermediaire': 'Intermédiaire',
    'intermédiaire': 'Intermédiaire',
    'avance': 'Avancé',
    'avancé': 'Avancé',
  };
  
  return difficultyMap[cleaned.toLowerCase()] || cleaned;
};
