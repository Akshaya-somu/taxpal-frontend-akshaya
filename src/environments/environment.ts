export const environment = {
  production: false,
  // Ensure backend base includes '/api' so code using `${environment.apiBaseUrl}/...` hits the correct routes
  apiBaseUrl: 'https://taxpal-backend-akshaya.onrender.com/api',
  // Keep legacy alias for compatibility
  apiUrl: 'https://taxpal-backend-akshaya.onrender.com/api',
};
