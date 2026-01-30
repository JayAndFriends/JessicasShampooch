# 🔐 Password Protection Info

## Your Current Password

**Password:** `shampooch2026`

---

## How to Change the Password

1. Open: `src/components/PasswordProtection.tsx`
2. Find this line (around line 15):
   ```typescript
   const CORRECT_PASSWORD = 'shampooch2026';
   ```
3. Change `'shampooch2026'` to whatever you want
4. Save the file
5. Push to GitHub

---

## How to Remove Password Protection (Make Public)

When you want to make the site public again:

1. Open: `src/main.tsx`
2. Remove the `<PasswordProtection>` wrapper
3. Change FROM:
   ```typescript
   <PasswordProtection>
     <App />
   </PasswordProtection>
   ```
   TO:
   ```typescript
   <App />
   ```
4. Save and push to GitHub

**OR just tell me "remove the password" and I'll do it instantly!**

---

## What Happens Now

- Anyone visiting the site sees a password screen
- They must enter: `shampooch2026`
- After entering correct password, they can view the full site
- Password is saved for their session (cleared when they close browser)

---

## Security Note

This is basic password protection suitable for keeping the site private during development. It's not enterprise-level security, but it's perfect for:
- Keeping site private while you work on it
- Sharing with specific people (give them the password)
- Preventing random visitors

---

**Your password is: shampooch2026**
