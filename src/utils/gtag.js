/**
 * Google Analytics Event Tracking Utility
 * ใช้สำหรับ track การคลิกปุ่มและ events ต่างๆ
 */

/**
 * Track button click event
 * @param {string} buttonName - ชื่อปุ่มที่ถูกคลิก (เช่น "สมัครคอร์สสอนสด", "ดูคอร์สฟรี")
 * @param {string} buttonLocation - ตำแหน่งของปุ่ม (เช่น "hero-section", "navbar", "footer")
 * @param {string} buttonUrl - URL ที่ปุ่มจะนำไป (ถ้ามี)
 */
export const trackButtonClick = (buttonName, buttonLocation = 'unknown', buttonUrl = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: buttonName,
      button_location: buttonLocation,
      button_url: buttonUrl,
      value: 1
    });
  }
};

/**
 * Track link click event
 * @param {string} linkText - ข้อความของลิงก์
 * @param {string} linkUrl - URL ของลิงก์
 * @param {string} linkLocation - ตำแหน่งของลิงก์
 */
export const trackLinkClick = (linkText, linkUrl, linkLocation = 'unknown') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'link_click', {
      event_category: 'navigation',
      event_label: linkText,
      link_url: linkUrl,
      link_location: linkLocation,
      value: 1
    });
  }
};

/**
 * Track form submission
 * @param {string} formName - ชื่อฟอร์ม
 * @param {string} formLocation - ตำแหน่งของฟอร์ม
 */
export const trackFormSubmit = (formName, formLocation = 'unknown') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formName,
      form_location: formLocation,
      value: 1
    });
  }
};

