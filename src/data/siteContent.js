import {
  BadgeCheck,
  CalendarCheck,
  Camera,
  Droplets,
  HeartHandshake,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
} from 'lucide-react'

export const contact = {
  phoneDisplay: '050-123-4567',
  phoneHref: 'tel:+972501234567',
  whatsappHref:
    'https://wa.me/972501234567?text=%D7%94%D7%99%D7%99%20%D7%A9%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%AA%D7%95%D7%A8%20%D7%9C%D7%9B%D7%9C%D7%91%20%D7%A9%D7%9C%D7%99',
  address: 'רחוב הדקלים 12, תל אביב',
  hours: ['א-ה: 09:00-19:00', 'ו: 09:00-13:00', 'שבת: סגור'],
}

export const navLinks = [
  { label: 'שירותים', href: '#services' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'ביקורות', href: '#testimonials' },
  { label: 'יצירת קשר', href: '#contact' },
]

export const heroImage =
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1800&q=85'

export const services = [
  {
    icon: Scissors,
    title: 'תספורת מקצועית',
    description: 'התאמת סגנון התספורת לסוג הפרווה, לעונה ולאופי הכלב.',
  },
  {
    icon: Droplets,
    title: 'רחצה וייבוש',
    description: 'רחצה יסודית עם חומרים עדינים וייבוש נעים ובטוח.',
  },
  {
    icon: BadgeCheck,
    title: 'גזיזת ציפורניים',
    description: 'טיפול מדויק וסבלני לשמירה על הליכה נוחה ובריאה.',
  },
  {
    icon: Sparkles,
    title: 'טיפוח והברקת פרווה',
    description: 'סירוק, פתיחת קשרים והברקה למראה נקי ורענן.',
  },
]

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=900&q=80',
    alt: 'כלב קטן ומטופח לאחר תספורת',
  },
  {
    src: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80',
    alt: 'כלב לבן נקי ומסורק',
  },
  {
    src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80',
    alt: 'כלב עם פרווה מבריקה אחרי רחצה',
  },
  {
    src: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80',
    alt: 'כלב שמח במראה נקי',
  },
  {
    src: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=900&q=80',
    alt: 'כלב מטופח מביט למצלמה',
  },
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    alt: 'שני כלבים מטופחים בחוץ',
  },
]

export const benefits = [
  {
    icon: HeartHandshake,
    title: 'יחס אישי לכל כלב',
    description: 'קצב רגוע, הרבה סבלנות והתאמה מלאה לכל אופי וגודל.',
  },
  {
    icon: PawPrint,
    title: 'ניסיון מקצועי',
    description: 'עבודה מדויקת עם כל סוגי הפרווה והצרכים הנפוצים.',
  },
  {
    icon: ShieldCheck,
    title: 'סביבת עבודה נקייה ובטוחה',
    description: 'ציוד מסודר, היגיינה מוקפדת ומרחב נעים לכלבים.',
  },
  {
    icon: CalendarCheck,
    title: 'זמינות גבוהה ותיאום נוח',
    description: 'קביעת תורים פשוטה ומהירה בוואטסאפ או בטלפון.',
  },
]

export const testimonials = [
  {
    name: 'מיכל לוי',
    text: 'שי היה עדין וסבלני עם לואי, והתוצאה הייתה פשוט מקסימה.',
  },
  {
    name: 'אורי כהן',
    text: 'תיאום מהיר, עבודה נקייה וכלב שחזר רגוע וריחני. מומלץ בחום.',
  },
  {
    name: 'דנה רוזן',
    text: 'סוף סוף ספר שמבין כלבים פחדנים. קיבלנו יחס אישי ומקצועי.',
  },
]

export const contactCards = [
  { icon: Phone, label: 'טלפון', value: contact.phoneDisplay },
  { icon: MapPin, label: 'כתובת', value: contact.address },
  { icon: Wind, label: 'שעות פעילות', value: contact.hours.join(' | ') },
]

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: Camera },
  { label: 'WhatsApp', href: contact.whatsappHref, icon: MessageCircle },
  { label: 'Google Maps', href: '#', icon: MapPin },
]

export const StarIcon = Star
