import type { ServiceName } from "./services";

export type CoreServiceConfig = {
  enforceAuth: boolean;
  apiUrl: string;
  serviceScope: ServiceName;
  serviceApiKey: string;
  serviceAction?: string;
};

export type ApiKeyMetadata = {
  id: string;
  key: string;
  creatorWalletAddress: string;
  secretHash: string;
  walletAddresses: string[];
  domains: string[];
  bundleIds: string[];
  services: {
    name: string;
    targetAddresses: string[];
    actions: string[];
  }[];
};

export type ApiResponse = {
  data: ApiKeyMetadata | null;
  error: {
    code: string;
    statusCode: number;
    message: string;
  };
};

export async function fetchKeyMetadataFromApi(
  clientId: string,
  config: CoreServiceConfig,
): Promise<ApiResponse> {
  const { apiUrl, serviceScope, serviceApiKey } = config;
  const url = `${apiUrl}/v1/keys/use?clientId=${clientId}&scope=${serviceScope}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-service-api-key": serviceApiKey,
      "content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      `Error fetching key metadata from API: ${response.statusText}`,
    );
  }
  return (await response.json()) as ApiResponse;
}
