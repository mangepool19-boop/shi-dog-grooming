import {
  BadgeCheck,
  CalendarCheck,
  Camera,
  CheckCircle,
  Clock,
  Droplets,
  HeartHandshake,
  HelpCircle,
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

// TODO: replace this placeholder with the real business WhatsApp number.
export const WHATSAPP_PHONE = '972500000000'

export function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export const defaultAppointmentMessage =
  'שלום שי, ראיתי את האתר ואשמח לקבוע תור לכלב שלי. שם הכלב: ___ סוג הכלב: ___ מתי נוח לי: ___'

export const priceEstimateMessage =
  'שלום שי, אשמח לקבל הערכת מחיר לטיפוח הכלב שלי. סוג הכלב: ___ גודל: ___ מצב הפרווה: ___'

export const contact = {
  phoneDisplay: '050-000-0000',
  phoneHref: 'tel:+972500000000',
  whatsappHref: createWhatsAppLink(defaultAppointmentMessage),
  address: 'רחוב הדקלים 12, תל אביב',
  hours: ['א-ה: 09:00-19:00', 'ו: 09:00-13:00', 'שבת: סגור'],
}

export const navLinks = [
  { label: 'שי', href: '#about' },
  { label: 'שירותים', href: '#services' },
  { label: 'מחירים', href: '#pricing' },
  { label: 'שעות פנויות', href: '#availability' },
  { label: 'שאלות', href: '#faq' },
]

export const heroImage =
  'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1600&q=85'

export const trustStats = ['יחס אישי', 'סביבה נקייה', 'תיאום מהיר']

export const services = [
  {
    icon: Scissors,
    title: 'תספורת מקצועית',
    description: 'התאמת אורך וסגנון לפי סוג הפרווה, העונה והנוחות של הכלב.',
  },
  {
    icon: Droplets,
    title: 'רחצה וייבוש',
    description: 'רחצה יסודית עם חומרים עדינים וייבוש רגוע שמתאים לכלב.',
  },
  {
    icon: BadgeCheck,
    title: 'גזיזת ציפורניים',
    description: 'גזיזה מדויקת וסבלנית לשמירה על הליכה נוחה ובריאה.',
  },
  {
    icon: Sparkles,
    title: 'טיפוח והברקת פרווה',
    description: 'סירוק, פתיחת קשרים והברקה למראה נקי, טבעי ורענן.',
  },
]

export const aboutPoints = [
  'יחס רגוע וסבלני',
  'התאמה לסוג הפרווה',
  'הסבר ברור לפני הטיפול',
]

export const processSteps = [
  'שולחים הודעה בוואטסאפ',
  'מתאמים תור נוח',
  'מגיעים לבדיקה קצרה של הפרווה',
  'רחצה, ייבוש ותספורת',
  'הכלב חוזר נקי, מסודר וריחני',
]

export const prices = [
  { service: 'רחצה וייבוש', price: 'החל מ-80 ₪' },
  { service: 'תספורת לכלב קטן', price: 'החל מ-150 ₪' },
  { service: 'תספורת לכלב בינוני', price: 'החל מ-180 ₪' },
  { service: 'טיפול קשרים / פרווה סבוכה', price: 'לפי בדיקה' },
]

export const availability = [
  { day: 'היום', slots: ['16:30', '18:00'] },
  { day: 'מחר', slots: ['10:00', '12:30', '17:00'] },
  { day: 'שישי', slots: ['09:30', '11:00'] },
]

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
    label: 'אחרי',
    alt: 'כלב מטופח ונקי אחרי רחצה ותספורת',
  },
  {
    src: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80',
    label: 'דוגמת סגנון',
    alt: 'כלב לבן מטופח ומסורק',
  },
  {
    src: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=900&q=80',
    label: 'אחרי',
    alt: 'כלב קטן לאחר טיפוח',
  },
  {
    src: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80',
    label: 'דוגמת תוצאה',
    alt: 'כלב שמח ונקי אחרי טיפול',
  },
]

export const beforeAfter = {
  before:
    'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
  after:
    'https://images.unsplash.com/photo-1601758124360-86f5a0432c4f?auto=format&fit=crop&w=900&q=80',
}

export const benefits = [
  {
    icon: HeartHandshake,
    title: 'יחס אישי לכל כלב',
    description: 'קצב רגוע, הרבה סבלנות והתאמה מלאה לאופי, לגודל ולרגישות.',
  },
  {
    icon: PawPrint,
    title: 'ניסיון מקצועי',
    description: 'עבודה מדויקת עם סוגי פרווה שונים ועם צרכים נפוצים במספרה.',
  },
  {
    icon: ShieldCheck,
    title: 'סביבת עבודה נקייה ובטוחה',
    description: 'ציוד מסודר, היגיינה מוקפדת ומרחב נעים לכלבים ולבעלים.',
  },
  {
    icon: CalendarCheck,
    title: 'זמינות גבוהה ותיאום נוח',
    description: 'קביעת תור פשוטה בוואטסאפ, עם הסבר ברור לפני הטיפול.',
  },
]

export const testimonials = [
  {
    name: 'המלצה לדוגמה',
    text: 'שי היה עדין וסבלני, והכלב חזר נקי, מסודר ורגוע.',
  },
  {
    name: 'המלצה לדוגמה',
    text: 'תיאום מהיר, אווירה טובה ותוצאה שנראית מקצועית מאוד.',
  },
  {
    name: 'המלצה לדוגמה',
    text: 'אהבתי שקיבלתי הסבר לפני הטיפול והרגשתי שהכלב בידיים טובות.',
  },
]

export const faqs = [
  {
    question: 'כמה זמן לוקחת תספורת?',
    answer: 'בדרך כלל בין שעה לשעתיים, בהתאם לגודל הכלב, סוג הפרווה ומצב הקשרים.',
  },
  {
    question: 'האם המחיר קבוע?',
    answer: 'המחיר הסופי משתנה לפי גודל הכלב, סוג הפרווה ומורכבות הטיפול.',
  },
  {
    question: 'האם אפשר לקבוע תור בוואטסאפ?',
    answer: 'כן. הכי נוח לשלוח הודעה עם שם הכלב, סוג הכלב וזמן שנוח לכם.',
  },
  {
    question: 'מה עושים אם לכלב יש קשרים?',
    answer: 'מומלץ לשלוח תמונה או להגיע לבדיקה קצרה כדי להעריך זמן ומחיר בצורה הוגנת.',
  },
  {
    question: 'האם מתאים גם לכלבים רגישים או פחדנים?',
    answer: 'כן. הטיפול מתבצע בקצב רגוע, עם הרבה סבלנות והתאמה לאופי הכלב.',
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

export const icons = {
  CheckCircle,
  Clock,
  HelpCircle,
  MessageCircle,
  PawPrint,
  Star,
}
