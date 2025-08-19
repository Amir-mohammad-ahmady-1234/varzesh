# 🏆 Varzesh - پلتفرم ورزشی و چت زنده

> **پلتفرم جامع ورزشی برای تماشای بازی‌ها و چت زنده با کاربران دیگر**

## 🚀 ویژگی‌های کلیدی

### 🎯 مدیریت کاربران

- **سیستم احراز هویت کامل** با OTP و JWT
- **مدیریت نقش‌ها**: کاربر، مدیر، ادمین
- **وضعیت‌های مختلف**: فعال، غیرفعال، مسدود
- **پروفایل کاربری** با قابلیت ویرایش
- **تاریخچه فعالیت** و آمار کاربری

### 🏟️ مدیریت بازی‌ها

- **ایجاد و مدیریت بازی‌های ورزشی**
- **وضعیت‌های بازی**: برنامه‌ریزی شده، زنده، تمام شده، لغو شده
- **امتیازدهی** و نتایج بازی
- **لیگ‌های مختلف** ورزشی

### 💬 چت زنده

- **اتاق‌های چت** برای هر بازی
- **انواع اتاق**: بازی، عمومی، خصوصی
- **سیستم پیام‌رسانی** با پشتیبانی از متن و تصویر
- **مدیریت محتوا** و گزارش‌گیری
- **آمار مشارکت** و فعالیت

### 🎫 سیستم پشتیبانی

- **تیکت‌های پشتیبانی** با اولویت‌بندی
- **سیستم پیام‌رسانی داخلی** برای تیم پشتیبانی
- **مدیریت وضعیت** تیکت‌ها
- **خروجی CSV** از مکالمات

### 📊 داشبورد مدیریتی

- **آمار جامع** کاربران، بازی‌ها و فعالیت‌ها
- **نمودارهای تعاملی** با Recharts
- **گزارش‌های دوره‌ای** و روندها
- **مدیریت محتوا** و تنظیمات

---

## 🛠️ تکنولوژی‌های استفاده شده

### Frontend

- **Next.js 15** - فریم‌ورک React با App Router
- **React 19** - کتابخانه UI
- **TypeScript** - زبان برنامه‌نویسی type-safe
- **Tailwind CSS 4** - فریم‌ورک CSS utility-first
- **React Icons** - آیکون‌های Material Design
- **Recharts** - نمودارهای تعاملی
- **React Hook Form** - مدیریت فرم‌ها
- **React Query** - مدیریت state و cache

### Backend & Database

- **Next.js API Routes** - API endpoints
- **Prisma** - ORM برای مدیریت دیتابیس
- **SQLite** - دیتابیس (قابل تغییر به PostgreSQL/MySQL)
- **JWT** - احراز هویت
- **bcrypt** - رمزنگاری پسورد
- **OTP** - کد یکبار مصرف

### Authentication & Security

- **JWT Tokens** - احراز هویت stateless
- **OTP Verification** - تایید دو مرحله‌ای
- **Password Hashing** - رمزنگاری امن
- **Role-based Access Control** - کنترل دسترسی بر اساس نقش
- **Middleware Protection** - محافظت از route ها

### Development Tools

- **ESLint** - بررسی کیفیت کد
- **Prettier** - فرمت‌بندی کد
- **TypeScript** - type checking
- **Hot Reload** - توسعه سریع

---

## 📁 ساختار پروژه

```
varzesh/
├── app/                          # Next.js App Router
│   ├── admin/                    # پنل مدیریت
│   │   ├── dashboard/           # داشبورد اصلی
│   │   ├── users/               # مدیریت کاربران
│   │   ├── games/               # مدیریت بازی‌ها
│   │   ├── chat-rooms/          # مدیریت اتاق‌های چت
│   │   ├── support/             # سیستم پشتیبانی
│   │   └── design-system/       # کامپوننت‌های UI
│   ├── (site)/                  # سایت اصلی
│   │   ├── auth/                # احراز هویت
│   │   └── test/                # صفحات تست
│   └── api/                     # API endpoints
│       ├── auth/                 # احراز هویت
│       ├── user/                 # مدیریت کاربر
│       └── guest/                # کاربران مهمان
├── components/                   # کامپوننت‌های React
│   ├── admin/                    # کامپوننت‌های پنل مدیریت
│   ├── site/                     # کامپوننت‌های سایت
│   └── common/                   # کامپوننت‌های مشترک
├── lib/                          # توابع و utilities
│   ├── actions/                  # server actions
│   ├── db.ts                     # تنظیمات دیتابیس
│   └── utils.ts                  # توابع کمکی
├── types/                        # تعاریف TypeScript
├── mocks/                        # داده‌های نمونه
├── prisma/                       # schema و migrations
├── public/                       # فایل‌های استاتیک
└── styles/                       # فایل‌های CSS
```

---

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js 18+
- npm یا yarn
- Git

### مراحل نصب

1. **کلون کردن پروژه**

```bash
git clone <repository-url>
cd varzesh
```

2. **نصب وابستگی‌ها**

```bash
npm install
```

3. **تنظیم دیتابیس**

```bash
npx prisma generate
npx prisma db push
```

4. **اجرای پروژه**

```bash
npm run dev
```

5. **باز کردن در مرورگر**

```
http://localhost:3000
```

---

## 📱 ویژگی‌های UI/UX

### 🎨 Design System

- **کامپوننت‌های قابل استفاده مجدد**
- **سیستم رنگ‌بندی** منسجم
- **Typography** استاندارد
- **Responsive Design** برای تمام دستگاه‌ها

### 🌙 تم‌های رنگی

- **Light Mode** - برای استفاده روزانه
- **Dark Mode** - برای استفاده شبانه
- **سیستم تم** خودکار

### 📱 Responsive Design

- **Mobile First** approach
- **Tablet** optimization
- **Desktop** experience
- **Touch-friendly** interactions

---

## 🔐 سیستم امنیتی

### Authentication

- **JWT-based** authentication
- **OTP verification** برای تایید شماره تلفن
- **Password hashing** با bcrypt
- **Session management** امن

### Authorization

- **Role-based access control**
- **Route protection** با middleware
- **API security** و validation

---

## 📊 عملکرد و بهینه‌سازی

### Performance

- **Next.js 15** با Turbopack
- **Code splitting** خودکار
- **Image optimization**
- **Lazy loading** کامپوننت‌ها

### SEO

- **Server-side rendering**
- **Meta tags** پویا
- **Structured data**
- **Performance optimization**

---

## 🧪 تست و کیفیت

### Code Quality

- **ESLint** برای بررسی کد
- **TypeScript** برای type safety
- **Prettier** برای فرمت‌بندی
- **Git hooks** برای consistency

### Testing

- **Unit tests** آماده
- **Integration tests**
- **E2E testing** با Playwright

---

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
NEXTAUTH_SECRET="your-nextauth-secret"
```

---

## 🤝 مشارکت

برای مشارکت در پروژه:

1. Fork کنید
2. Branch جدید بسازید
3. تغییرات را commit کنید
4. Pull Request ارسال کنید

---

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

---

## 📞 ارتباط

- **مهدی** - [@mehdi](https://github.com/Mahdi-Devm)
- **امیرمحمد** - [@amirmohammad](https://github.com/Amir-mohammad-ahmady-1234)

---

## 🙏 تشکر

از تمامی افرادی که در توسعه این پروژه مشارکت داشته‌اند تشکر می‌کنیم.

---

**⭐ اگر این پروژه را مفید یافتید، لطفاً آن را star کنید!**
