export type ClerkUserCreatedEvent = {
  data: {
    backup_code_enabled: boolean;
    banned: boolean;
    create_organization_enabled: boolean;
    create_organizations_limit: number | null;
    created_at: number; // timestamp (ms)
    delete_self_enabled: boolean;
    email_addresses: Array<{
      id: string;
      email_address: string;
      linked_to: unknown[];
      object: string;
      reserved: boolean;
      verification: {
        status: string;
        strategy: string;
        attempts: number;
        expire_at: number | null;
      };
    }>;
    enterprise_accounts: unknown[];
    external_accounts: unknown[];
    external_id: string | null;
    first_name: string;
    has_image: boolean;
    id: string; // Clerk user ID
    image_url: string;
    last_active_at: number;
    last_name: string;
    last_sign_in_at: number;
    legal_accepted_at: number;
    locked: boolean;
    lockout_expires_in_seconds: number | null;
    mfa_disabled_at: number | null;
    mfa_enabled_at: number | null;
    object: 'user';
    passkeys: unknown[];
    password_enabled: boolean;
    phone_numbers: unknown[];
    primary_email_address_id: string;
    primary_phone_number_id: string | null;
    primary_web3_wallet_id: string | null;
    private_metadata: Record<string, unknown> | null;
    profile_image_url: string;
    public_metadata: Record<string, unknown>;
    saml_accounts: unknown[];
    totp_enabled: boolean;
    two_factor_enabled: boolean;
    unsafe_metadata: Record<string, unknown>;
    updated_at: number;
    username: string | null;
    verification_attempts_remaining: number | null;
    web3_wallets: unknown[];
  };
  event_attributes: {
    http_request: {
      client_ip: string;
      user_agent: string;
    };
  };
  instance_id: string;
  object: 'event';
  timestamp: number;
  type: 'user.created';
};
export type SerializableUser = {
  id: string;
  fullName: string | null;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
  createdAt: number;
  emailAddresses: Array<{
    id: string;
    emailAddress: string;
  }>;
  publicMetadata: Record<string, any>;
};
