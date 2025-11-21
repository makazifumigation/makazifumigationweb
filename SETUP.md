# Makazi Fumigation Website Setup

## Firebase Configuration

To enable blogs and projects to be fetched from Firestore, you need to set up your Firebase environment variables.

### Steps:

1. **Copy your Firebase credentials from the old website:**

   ```bash
   cp oldwebsite/fumigationweb/.env.local .env.local
   ```

2. **Or create a new `.env.local` file** in the root directory with the following variables:

   ```env
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # EmailJS
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_jq824zq
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_db0q5yl
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Teup0NAXNHEYcGI6N
   ```

3. **Get your Firebase credentials:**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Copy the config values from the Firebase SDK snippet

4. **Restart your development server** after creating/updating `.env.local`:
   ```bash
   npm run dev
   ```

## Dependencies

All required dependencies have been installed:

- ✅ Firebase (for Firestore)
- ✅ Next.js 16
- ✅ React 19
- ✅ Tailwind CSS 4

## Features Now Enabled

- ✅ Blogs fetching from Firestore
- ✅ Projects fetching from Firestore
- ✅ Blog detail pages with dynamic routing
- ✅ Automatic fallback if Firebase is not configured

## Notes

- If Firebase is not configured, the website will still work but blogs and projects will show empty states
- The Firestore functions gracefully handle missing configuration
- Check the browser console for any Firebase-related warnings
- If EmailJS environment variables are missing, the contact form will show an error until configured
