import React from "react";
import Card from "../../../../../common/ui/Card";
import Button from "../../../../../common/Button";
import Input from "../../../../../common/Input";
import Badge from "../../../../../common/ui/Badge";

export default function PreviewTab() {
  return (
    <div className="space-y-6">
      {/* Buttons Preview */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">دکمه‌ها</h3>
        <div className="flex flex-wrap gap-3">
          <Button>دکمه اصلی</Button>
          <Button variant="secondary">دکمه ثانویه</Button>
          <Button variant="outline">دکمه خطی</Button>
          <Button variant="destructive">دکمه خطرناک</Button>
          <Button variant="ghost">دکمه شبح</Button>
        </div>
      </Card>

      {/* Inputs Preview */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">ورودی‌ها</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="ورودی متنی" />
          <Input type="email" placeholder="ایمیل" />
          <Input type="password" placeholder="رمز عبور" />
          <Input disabled={true} placeholder="غیرفعال" />
        </div>
      </Card>

      {/* Cards Preview */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">کارت‌ها</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h4 className="font-semibold text-foreground mb-2">کارت نمونه</h4>
            <p className="text-muted-foreground text-sm">
              این یک کارت نمونه است که نحوه نمایش محتوا را نشان می‌دهد.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-foreground mb-2">کارت دیگر</h4>
            <p className="text-muted-foreground text-sm">
              کارت دوم برای نمایش تنوع در طراحی.
            </p>
          </Card>
        </div>
      </Card>

      {/* Badges Preview */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">نشان‌ها</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>پیش‌فرض</Badge>
          <Badge variant="secondary">ثانویه</Badge>
          <Badge variant="info">خطی</Badge>
          <Badge variant="error">خطرناک</Badge>
        </div>
      </Card>

      {/* Typography Preview */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          تایپوگرافی
        </h3>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            عنوان اصلی (H1)
          </h1>
          <h2 className="text-2xl font-semibold text-foreground">
            عنوان ثانویه (H2)
          </h2>
          <h3 className="text-xl font-medium text-foreground">
            عنوان سوم (H3)
          </h3>
          <p className="text-base text-foreground">
            این یک پاراگراف نمونه است که نحوه نمایش متن عادی را نشان می‌دهد.
          </p>
          <p className="text-sm text-muted-foreground">
            متن کوچک‌تر با رنگ کم‌رنگ‌تر برای اطلاعات تکمیلی.
          </p>
        </div>
      </Card>

      {/* Table Preview */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">جدول</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right py-2 px-4 font-semibold text-foreground">
                  نام
                </th>
                <th className="text-right py-2 px-4 font-semibold text-foreground">
                  وضعیت
                </th>
                <th className="text-right py-2 px-4 font-semibold text-foreground">
                  تاریخ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-foreground">علی احمدی</td>
                <td className="py-2 px-4">
                  <Badge variant="secondary">فعال</Badge>
                </td>
                <td className="py-2 px-4 text-muted-foreground">۱۴۰۳/۱۰/۳۰</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-foreground">فاطمه محمدی</td>
                <td className="py-2 px-4">
                  <Badge>فعال</Badge>
                </td>
                <td className="py-2 px-4 text-muted-foreground">۱۴۰۳/۱۰/۲۹</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
