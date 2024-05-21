import { test, expect } from "@playwright/test";

test.describe("booking", () => {
  test("get booking data", async ({ request }) => {
    const response = await request.get("/booking/summary?roomid=1");
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.bookings.length).toBeGreaterThanOrEqual(1);
    expect(isValadate(body.bookings[0].bookingDates.checkin)).toBe(true);
  });
});

function isValadate(date: string) {
  if (Date.parse(date)) {
    return true;
  } else {
    return false;
  }
}
