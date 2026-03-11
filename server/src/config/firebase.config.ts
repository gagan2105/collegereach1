import admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

export const initFirebase = () => {
  try {
    const serviceAccountPath = path.resolve(process.cwd(), 'src/config/firebase-service-account.json');
    if (!fs.existsSync(serviceAccountPath)) {
        console.warn('Firebase Service Account key not found.');
        return;
    }
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log('Firebase Admin initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Firebase Admin:', error);
  }
};
