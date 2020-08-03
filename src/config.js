export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_hgh7czHD3HoyRMXtJBLdidV8",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads002"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://dnyjk92c7a.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_N0sWyZSbK",
      APP_CLIENT_ID: "7kmbk4mr9us5b73f5lmb0e2pd8",
      IDENTITY_POOL_ID: "us-east-1:3c1ed8d0-03a5-48cc-a0a6-e29a04943fab"
    }
  };