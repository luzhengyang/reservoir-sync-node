import 'dotenv/config';
import { LightNode } from './LightNode';
import { Chains, LightNodeConfig } from './types';

/**
 * Configuration object for the LightNode instance.
 * @type {LightNodeConfig}
 */
const config: LightNodeConfig = {
  // (Required)
  server: {
    port: process.env.PORT, // (Required)
    authorization: process.env.AUTHORIZATION, // (Required)
  },
  // (Optional)
  logger: {
    datadog: {
      appName: process.env.DATADOG_APP_NAME,
      apiKey: process.env.DATADOG_API_KEY,
    },
  },
  // (Required)
  syncer: {
    chain: process.env.CHAIN as Chains, // (Required)
    contracts: process.env.CONTRACTS ? process.env.CONTRACTS.split(',') : [], // (Optional)
    apiKey: process.env.API_KEY as string, // (Required)
    workerCount: process.env.WORKER_COUNT, // (Optional)
    managerCount: process.env.MANAGER_COUNT, // (Optional)
    toSync: {
      sales: process.env.SYNC_SALES === '1', // (Optional)
    },
  },
};

/**
 * Launches the LightNode instance with the given configuration.
 */
LightNode.launch(config);