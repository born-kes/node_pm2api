export interface IConfig {
  application: {
    environment: string;
    host: string;
    port: number;
    database: {
      local: {
        host: string;
        port: number;
        name: string;
        user: string;
        password: string;
      };
    };
    ai: {
      openAI: {
        baseURL: string;
        apiKey: string;
        organizationKey: string;
      };
    };
  };
}
