import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getRemoteConfig, fetchAndActivate, getValue, RemoteConfig } from 'firebase/remote-config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private remoteConfig: RemoteConfig;

  constructor() {

    const firebaseConfig = {
      apiKey: "AIzaSyDawbdguZXnjoa6R-mTOlGshw3VxGJMSAk",
      authDomain: "autenticacion-kotlin.firebaseapp.com",
      projectId: "autenticacion-kotlin",
      storageBucket: "autenticacion-kotlin.firebasestorage.app",
      messagingSenderId: "326398093238",
      appId: "1:326398093238:web:a2b0420da3257dffb1c317",
      measurementId: "G-9PL4RCFG9L"
    };

    // Inicializamos Firebase
    const app = initializeApp(firebaseConfig);
    this.remoteConfig = getRemoteConfig(app);

    // Para desarrollo, configuramos un intervalo de caché corto (puedes ajustarlo)
    this.remoteConfig.settings.minimumFetchIntervalMillis = 0; 
  }

  // Método para obtener el valor del Feature Flag desde Remote Config
  async isFeatureEnabled(flagKey: string): Promise<boolean> {
    try {
      await fetchAndActivate(this.remoteConfig);
      const val = getValue(this.remoteConfig, flagKey);
      return val.asBoolean();
    } catch (error) {
      console.error('Error al obtener Remote Config:', error);
      return false;
    }
  }
}