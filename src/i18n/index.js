import ru from './ru.js';
import ua from './ua.js';

export const dicts = { ru, ua };

export function getDict(lang) {
  return dicts[lang] || dicts.ru;
}
