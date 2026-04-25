export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'รองเท้า Nike Air Max',
    price: 3990,
    originalPrice: 4990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'รองเท้า',
    description: 'รองเท้าวิ่ง Nike Air Max สไตล์สปอร์ต น้ำหนักเบา ระบายอากาศได้ดี เหมาะสำหรับการวิ่งและใส่ทั่วไป',
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: 2,
    name: 'กระเป๋าหนัง Premium',
    price: 1290,
    originalPrice: 1890,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    category: 'กระเป๋า',
    description: 'กระเป๋าหนังแท้คุณภาพสูง ดีไซน์สวยงาม มีช่องใส่ของหลายช่อง ทนทานใช้งานได้นาน',
    rating: 4.8,
    reviews: 95,
    inStock: true,
  },
  {
    id: 3,
    name: 'นาฬิกา Smart Watch',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'อุปกรณ์อิเล็กทรอนิกส์',
    description: 'นาฬิกาอัจฉริยะ ติดตามสุขภาพ วัดอัตราการเต้นของหัวใจ GPS ในตัว กันน้ำได้',
    rating: 4.3,
    reviews: 212,
    inStock: true,
  },
  {
    id: 4,
    name: 'เสื้อยืด Oversize',
    price: 390,
    originalPrice: 590,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'เสื้อผ้า',
    description: 'เสื้อยืด Oversize ผ้าคอตตอน 100% นุ่มสบาย ระบายอากาศดี มีให้เลือกหลายสี',
    rating: 4.6,
    reviews: 342,
    inStock: true,
  },
  {
    id: 5,
    name: 'หูฟัง Wireless',
    price: 2490,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'อุปกรณ์อิเล็กทรอนิกส์',
    description: 'หูฟังไร้สาย Bluetooth 5.0 ตัดเสียงรบกวน แบตเตอรี่ใช้งานได้ 30 ชั่วโมง',
    rating: 4.7,
    reviews: 178,
    inStock: true,
  },
  {
    id: 6,
    name: 'แว่นตา Sunglasses',
    price: 890,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    category: 'แอคเซสเซอรี่',
    description: 'แว่นตากันแดด UV400 เลนส์โพลาไรซ์ กรอบโลหะน้ำหนักเบา ดีไซน์ทันสมัย',
    rating: 4.2,
    reviews: 67,
    inStock: false,
  },
  {
    id: 7,
    name: 'กางเกง Jogger',
    price: 690,
    originalPrice: 990,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop',
    category: 'เสื้อผ้า',
    description: 'กางเกง Jogger ผ้า Polyester ยืดหยุ่นสูง เหมาะสำหรับออกกำลังกายและใส่ทั่วไป',
    rating: 4.4,
    reviews: 156,
    inStock: true,
  },
  {
    id: 8,
    name: 'กระเป๋าเป้ Travel',
    price: 1590,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'กระเป๋า',
    description: 'กระเป๋าเป้ขนาด 40L วัสดุกันน้ำ มีช่องแล็ปท็อปในตัว เหมาะสำหรับเดินทาง',
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
]

export const categories = ['ทั้งหมด', 'รองเท้า', 'กระเป๋า', 'เสื้อผ้า', 'อุปกรณ์อิเล็กทรอนิกส์', 'แอคเซสเซอรี่']
