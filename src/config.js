// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_hgh7czHD3HoyRMXtJBLdidV8",
//     s3: {
//       REGION: "us-east-1",
//       BUCKET: "notes-app-uploads002"
//     },
//     apiGateway: {
//       REGION: "us-east-1",
//       URL: "https://dnyjk92c7a.execute-api.us-east-1.amazonaws.com/prod"
//     },
//     cognito: {
//       REGION: "us-east-1",
//       USER_POOL_ID: "us-east-1_N0sWyZSbK",
//       APP_CLIENT_ID: "7kmbk4mr9us5b73f5lmb0e2pd8",
//       IDENTITY_POOL_ID: "us-east-1:3c1ed8d0-03a5-48cc-a0a6-e29a04943fab"
//     }
//   };


  const dev = {
    STRIPE_KEY: "pk_test_hgh7czHD3HoyRMXtJBLdidV8",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-135dk8csp2vrr"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://zuljwfmuih.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_AhUaaftcQ",
      APP_CLIENT_ID: "7gkl3enqalrvebe42kqi8q0uke",
      IDENTITY_POOL_ID: "us-east-1:4487f7b5-a226-495c-a25c-64b048c2c002"
    }
  };

  const prod = {
    STRIPE_KEY: "pk_test_hgh7czHD3HoyRMXtJBLdidV8",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-1i0bfcb7qx2p2"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://h1opi9uuli.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_oiiG9E6KS",
      APP_CLIENT_ID: "4mvncpb73q45ijrte2p8atgisb",
      IDENTITY_POOL_ID: "us-east-1:8eaa91e9-a012-46e4-95d2-7b6c11863280"
    }
  };

  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };