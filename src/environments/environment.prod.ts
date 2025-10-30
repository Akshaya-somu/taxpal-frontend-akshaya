// Updated: ensure apiBaseUrl includes '/api' so constructed endpoints resolve correctly on production
export const environment = {
  production: true,
  apiBaseUrl: 'https://taxpal-backend-akshaya.onrender.com/api',
  // legacy alias for any remaining references
  apiUrl: 'https://taxpal-backend-akshaya.onrender.com/api',
};
