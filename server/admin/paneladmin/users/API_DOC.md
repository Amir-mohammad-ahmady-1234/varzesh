User Statistics API Documentation

1. getUserStatistics()

Description:
برمی‌گردونه آمار کلی کاربران شامل کل کاربران، کاربران فعال، کاربران مسدود و ادمین‌ها.

Method: Internal Function (می‌تونه در API Route صدا زده شود)

Response Example:
{
"status": 200,
"totalUsers": 120,
"activeUsers": 80,
"blockedUsers": 30,
"totalAdmins": 10
}
