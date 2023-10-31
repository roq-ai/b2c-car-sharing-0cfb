interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Staff'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View company information',
    'Edit personal information',
    'Delete personal information',
  ],
  ownerAbilities: ['Manage users', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5e2e9066-0b94-4f47-abc4-19f538547b86',
};
