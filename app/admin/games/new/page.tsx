/** Create new game page with form */
import Sidebar from "../../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../../components/pages/adminpanel/layout/Topbar";
import Card from "../../../../styles/ui/Card";
import Input from "../../../../styles/ui/Input";
import Textarea from "../../../../styles/ui/Textarea";
import FormField from "../../../../styles/ui/FormField";
import Link from "next/link";
import Button from "../../../../components/common/Button";

export default function NewGamePage() {
  return (
    <div className="flex h-screen bg-(--bg-secondary)">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/games">
                <Button variant="ghost">← بازگشت</Button>
              </Link>
              <h1 className="text-3xl font-bold text-(--text-primary)">
                بازی جدید
              </h1>
            </div>

            <Card>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="تیم اول" required>
                    <Input placeholder="نام تیم اول" />
                  </FormField>

                  <FormField label="تیم دوم" required>
                    <Input placeholder="نام تیم دوم" />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="لیگ" required>
                    <select className="w-full px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
                      <option value="">انتخاب لیگ</option>
                      <option value="premier">لیگ برتر</option>
                      <option value="azadegan">آزادگان</option>
                      <option value="cup">جام حذفی</option>
                    </select>
                  </FormField>

                  <FormField label="مرحله">
                    <Input placeholder="مثال: هفته 15" />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField label="تاریخ" required>
                    <Input type="date" />
                  </FormField>

                  <FormField label="ساعت" required>
                    <Input type="time" />
                  </FormField>

                  <FormField label="وضعیت">
                    <select className="w-full px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
                      <option value="scheduled">برنامه‌ریزی شده</option>
                      <option value="live">زنده</option>
                      <option value="finished">تمام شده</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="توضیحات">
                  <Textarea
                    placeholder="توضیحات اضافی درباره بازی..."
                    rows={4}
                  />
                </FormField>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-(--border)"
                    />
                    <span className="text-sm text-(--text-primary)">
                      فعال‌سازی چت
                    </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-(--border)"
                    />
                    <span className="text-sm text-(--text-primary)">
                      انتشار فوری
                    </span>
                  </label>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-(--border)">
                  <Button type="submit">ایجاد بازی</Button>
                  <Button variant="secondary" type="button">
                    پیش‌نمایش
                  </Button>
                  <Link href="/games">
                    <Button variant="ghost" type="button">
                      انصراف
                    </Button>
                  </Link>
                </div>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
