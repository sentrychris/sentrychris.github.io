import type { NavLink } from '../components/Nav'
import type { Lang } from '../lib/useLanguage'

const en: NavLink[] = [
  { href: '#top', label: 'Home', spy: 'top' },
  { href: '#about', label: 'About', spy: 'about' },
  { href: '#skills', label: 'Skills', spy: 'skills' },
  { href: '#experience', label: 'Experience', spy: 'experience' },
  { href: '#work', label: 'Work', spy: 'work' },
  { href: '#contact', label: 'Contact', spy: 'contact' },
]

const ru: NavLink[] = [
  { href: '#top', label: 'Главная', spy: 'top' },
  { href: '#about', label: 'Обо мне', spy: 'about' },
  { href: '#skills', label: 'Навыки', spy: 'skills' },
  { href: '#experience', label: 'Опыт', spy: 'experience' },
  { href: '#work', label: 'Проекты', spy: 'work' },
  { href: '#contact', label: 'Контакты', spy: 'contact' },
]

const es: NavLink[] = [
  { href: '#top', label: 'Inicio', spy: 'top' },
  { href: '#about', label: 'Sobre mí', spy: 'about' },
  { href: '#skills', label: 'Habilidades', spy: 'skills' },
  { href: '#experience', label: 'Experiencia', spy: 'experience' },
  { href: '#work', label: 'Proyectos', spy: 'work' },
  { href: '#contact', label: 'Contacto', spy: 'contact' },
]

export const navLinks: Record<Lang, NavLink[]> = { en, es, ru }
