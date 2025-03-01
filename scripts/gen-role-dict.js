import { toHex, utf8ToBytes, hexToBytes, concatBytes } from 'ethereum-cryptography/utils.js';
import { keccak256 } from 'ethereum-cryptography/keccak.js';
import { AbiCoder } from '@ethersproject/abi';
import fs from 'fs';

const roleIdVariations = name => [
  keccak256(utf8ToBytes(name)),
  concatBytes(utf8ToBytes(name), new Uint8Array(32)).slice(0, 32),
  keccak256(hexToBytes(new AbiCoder().encode(['string'], [name]).replace(/^0x/, ''))),
].map(b => '0x' + toHex(b));

const roleNameVariations = name => [
  name,
  name.toLowerCase(),
  `ROLE:${name}`,
  `ROLE_${name}`,
  `ROLE_${name}_ADMIN`,
  `${name}_ROLE`,
  `${name}_ADMIN`,
  `${name}_ADMIN_ROLE`,
  `${name}_ROLE_ADMIN`,
  `_${name}`,
];

const roleNames = [
  'ACCESS',
  'ACCOUNT_MANAGER',
  'ACTIVATOR',
  'ACTIVE',
  'ADD_EXECUTOR',
  'ADJUST',
  'ADJUSTER',
  'ADMIN',
  'ADMINISTRATOR',
  'AIRDROP',
  'AIRDROPPER',
  'ALLOTER',
  'ALLOWLIST_OWNER',
  'ALLOWLISTED_INVESTOR',
  'AMBASSADOR',
  'AMO',
  'ANGEL',
  'APPROVE',
  'APPROVED_ACCOUNT',
  'APPROVED_SETT',
  'APPROVED_STAKER',
  'APPROVER',
  'ARTSH',
  'ASSETS_MANAGER',
  'AUCTION_HOUSE',
  'AUDIT',
  'AUDITOR',
  'AUTHORIZED',
  'BAKER',
  'BASE_TOKEN_URI_SETTER',
  'BASE_URI_SETTER',
  'baskmaker.access.marketMaker.admin',
  'baskmaker.access.marketMaker',
  'BENEFICIARY',
  'BIDDER',
  'BLACKLIST_EDITOR',
  'BLACKLIST_MANAGER',
  'BLACKLIST',
  'BLACKLISTED_ADDRESSES',
  'BLACKLISTED',
  'BLINK_BEACON',
  'BLINK_ORACLE',
  'BLOCK',
  'BLOCKER',
  'BLOCKLIST_OWNER',
  'BOARDROOM',
  'BONDING_MANAGER',
  'BONUSORACLE',
  'BORROWER',
  'BOUNCER',
  'BRIDGE_OWNER',
  'BRIDGE_TX',
  'BRIDGE_WATCHER',
  'BRIDGE',
  'BRIDGEMANAGER',
  'BTC',
  'BURN_ASSET',
  'Burner',
  'BURNER',
  'BURNFROM',
  'BURNING',
  'BUYBACK_PAUSER',
  'CALLER',
  'CAP_CONTROLLER',
  'CAP_EDITOR',
  'CAP_SETTER',
  'CAP',
  'CAPPED',
  'CAPPER',
  'CERTIFIER',
  'CHAIN_CONNECTOR',
  'CHAIRPERSON',
  'CHANGER',
  'CLAIM_OPERATOR',
  'COLLATERAL_PRICE_PAUSER',
  'COLLATERAL_RATIO_PAUSER',
  'COLLATERAL_WITHDRAWER',
  'COLLECTION',
  'COMMUNITY_DECISION',
  'COMMUNITY_MASTER_PCV',
  'COMMUNITY_MASTER',
  'COMMUNITY_RATER',
  'COMPANY_MANAGER',
  'COMPLIANCE',
  'COMPTROLLER_POOL_MGR',
  'CONFIG',
  'CONFIGURATOR',
  'CONFIRM_WHITELISTED',
  'CONSTANT_SETTER',
  'CONTRACT',
  'contractAdmin',
  'CONTROLLER',
  'COORDINATOR',
  'COUNCIL',
  'COUPON_MANAGER',
  'CREATOR',
  'CROSSER',
  'DAI',
  'DANA',
  'DAO_MULTISIG',
  'DAO',
  'DEBT_OPERATOR',
  'DEBUGGER',
  'DEFAULT_SUPPORT',
  'DEFAULT',
  'DELEGATE',
  'DELEGATOR',
  'DELIVER',
  'DEPLOYER',
  'DEPOSIT_BOX_MANAGER',
  'DEPOSIT',
  'DEPOSITOR',
  'DEV_MULTISIG',
  'DEV',
  'DEVELOPER',
  'Dex Role',
  'DEX',
  'DIRECT_BONUS_MANAGER',
  'DISPATCHER',
  'DISTRIBUTER',
  'DISTRIBUTION_ASSIGNER',
  'DISTRIBUTOR',
  'DIVIDEND',
  'DNA_SETTER',
  'DOCUMENT_EDITOR',
  'DOGE',
  'DUMPER',
  'EARNER',
  'EDITOR',
  'EMERGENCY_MAINTAINER',
  'EMERGENCY_MANAGER',
  'EMISSION_MANAGER',
  'EPOCH_PARAMETERS',
  'ETC',
  'ETH_ASSET',
  'ETH_USD',
  'EXCHANGE',
  'EXECUTIVE',
  'Executor',
  'EXECUTOR',
  'EXTERNAL_STAKER',
  'EXTRA_CONTRACT_REGISTRAR',
  'EXTRACT',
  'FARMER',
  'FEE_EXCLUDED',
  'FEE_MANAGER',
  'FEE_SETTER',
  'FEE_WITHDRAWER',
  'FEE',
  'FEED_MANAGER',
  'FEEDS_MANAGER',
  'FINANCE',
  'FINANCIAL',
  'FINMGMT',
  'FIRESTARTER',
  'FOUNDER_MANAGER',
  'FOUNDER',
  'FOUNDING_FATHER',
  'FREEZER',
  'FROST',
  'FUNDER',
  'FUTURE_DEPLOYER',
  'FUTURE_PAUSER',
  'FUTURE',
  'GAME_MASTER',
  'GAS_EDITOR',
  'GENETIC_LYCANTHROPY',
  'GO_LISTER',
  'GOD_MODE',
  'GOLD',
  'GOV',
  'GOVERANCE',
  'GOVERN',
  'GOVERNANCE',
  'GOVERNOR',
  'GRANTOR',
  'GUARDIAN',
  'HARVESTER',
  'HEAD_CHEF',
  'HEGIC_POOL',
  'HODL_ASSET',
  'IMMEDIATE',
  'IMMUTABLE_SYSTEM',
  'INCENTIVE_MANAGER',
  'INFINITIZER',
  'INFRA',
  'INITIAL',
  'INVITE_ONLY',
  'INVITE',
  'ISSUE_ASSET',
  'ISSUER',
  'JSTAK',
  'KEEPER',
  'KYC_MEMBER',
  'KYC',
  'LEDGER_WRITER',
  'LEGACY_MINTER',
  'LEGAL',
  'LGE',
  'LIFESPAN_MODIFIER',
  'LIFESPAN_MODIFY_REQUEST',
  'LIMITER',
  'LinearStakingStorage',
  'LINKER',
  'LIQ_PROVIDER',
  'LIQUIDATION',
  'LIQUIDATOR',
  'Liquidity Provider',
  'LIQUIDITY_PROVIDER',
  'LIST',
  'LnDebtSystem',
  'LOCKDOWN',
  'LOCKER',
  'LODGE',
  'LOGGER',
  'LOYALTY_BONUS_MANAGER',
  'LTC',
  'Maintainer',
  'MAINTAINER',
  'MANAGE_LP',
  'MANAGER',
  'MAPPER',
  'MARKET_MAKER',
  'MARKET',
  'MARKETING',
  'MARKETPLACE',
  'MAX_TOKENS',
  'MAYOR',
  'META_UPDATER',
  'METADATA',
  'MID_CYCLE',
  'Migration Role',
  'MIGRATION',
  'MIGRATOR',
  'MINER_ROLL',
  'MINER',
  'Mint Proposal',
  'MINT_BURN',
  'MINT_PAUSER',
  'MINTED_TOKENS',
  'MINTER_BURNER',
  'minter_role',
  'Minter',
  'MINTER',
  'MINTTO',
  'MODEL_CREATOR',
  'MODERATOR',
  'MODIFIER',
  'MODULE_EDITOR',
  'MONITOR_ROLE ', // somone uses this in toUtf8Bytes format with the trailing space :/
  'MONITOR',
  'MOVD-MINTER',
  'MOVD-OPERATOR',
  'MOVE',
  'MULTISIG',
  'NAME_SETTER',
  'NFT',
  'NFT721',
  'NODE_MANAGER',
  'NODE',
  'NODEGROUP',
  'NORMAL_MAINTAINER',
  'NOT_REAL',
  'OBITEL',
  'OPERATOR',
  'Oracle Role',
  'ORACLE',
  'ORIGINATOR',
  'OWNER',
  'OWNERS',
  'PARTREON',
  'PATH_SETTER',
  'PAUSE_MANAGER',
  'PAUSE',
  'PAUSED',
  'PAUSER',
  'PAYABLE',
  'PCV_CONTROLLER',
  'PLATFORM',
  'PLUGINMGR',
  'POLICY',
  'Pool',
  'POOL',
  'PREDICATE',
  'PRICE_FEED',
  'PRICE',
  'PRIMARY_SALE',
  'PRIMATECH',
  'PRIVILEGED_MINTER',
  'PRODUCT_OWNER',
  'PROJECT_OWNERS',
  'PROOF_WHITELISTED',
  'PROPOSER',
  'PUBLIC',
  'PUBLISHER',
  'PWDR',
  'QUOTE_SIGNER',
  'REBASER',
  'RECOLLATERALIZE_PAUSER',
  'RECOVER',
  'RECOVERY',
  'REDEEM_PAUSER',
  'REDEEM',
  'REDEEMER',
  'REGISTERED_RECEIVER',
  'REGISTRY_MANAGER',
  'REGISTRY',
  'RELAYER',
  'REMAINING_DOLLAR_CAP_SETTER',
  'REPORTER',
  'RESCUE',
  'RESCUER',
  'Reserve Role',
  'RESERVE',
  'RESOURCE_SETTER',
  'RETURNER',
  'REVOKE',
  'REWARD_PROVIDER',
  'reward_role',
  'REWARDS_DISTRIBUTOR',
  'REWARDS_RATE',
  'REWARDS',
  'ROADS',
  'ROLLOVER',
  'ROOT_PROPOSER',
  'ROOT_VALIDATOR',
  'ROOT',
  'ROUTER',
  'ROYALTY_CHECK',
  'ROYALTY_MANAGER',
  'RSIVAKOV',
  'SALE_MANAGER',
  'SCALINGFUNDS_AGENT',
  'SCHAIN_CREATOR',
  'SCHAIN_DELETER_ROLE',
  'SCHAIN_TYPE_MANAGER',
  'SCHEDULER',
  'SEEDER',
  'SEIZER',
  'SENDER',
  'SENTINEL',
  'SERVICE',
  'SET_URI',
  'SETTER',
  'SIGNER',
  'SKILL_SETTER',
  'SLAKE_OPERATOR',
  'SLASHER',
  'SLINGSHOT',
  'SLOPES',
  'SMART_CONTRACT',
  'SNAP',
  'SNAPSHOT',
  'SNAPSHOTER',
  'SNAPSHOTTER',
  'SOLOMONIC',
  'SOUS_CHEF',
  'SPENDER',
  'STABLE_PRICE_MANAGER',
  'STAKE_OPERATOR',
  'STAKE_PAYER',
  'STAKE',
  'STAKER',
  'STAKING_MANAGER',
  'STAKING_POOL',
  'STAKING',
  'STATE_MANAGER',
  'STORAGE_OWNER',
  'storage.access.governance.admin',
  'storage.access.governance',
  'storage.access.marketMaker.admin',
  'storage.access.marketMaker',
  'storage.access.migrator',
  'storage.access.timelock.admin',
  'storage.access.timelock',
  'STRATEGY',
  'SUBBALANCE',
  'SUPERVISOR',
  'SUPPLY',
  'SWAP',
  'SWAPPER',
  'SWEEPER',
  'SYSTEM',
  'TAXER',
  'TEAM',
  'TENDER',
  'TESTER',
  'TIME_LOCK_EDITOR',
  'TIME_LOCKED',
  'TIMELOCK',
  'TIP_JAR',
  'TOKEN_BASE_URI_SETTER',
  'TOKEN_CREATOR',
  'TOKEN_GRANTER',
  'TOKEN_LOCKER',
  'TOKEN_MARK',
  'TOKEN_REFLECTION_MANAGER',
  'TOKEN_SAVER',
  'TOKEN_TAXES_MANAGER',
  'TRADE',
  'TRADEFLOOR',
  'TRADER',
  'TRANS',
  'TRANSFER_AGENT',
  'TRANSFER_CALLER',
  'TRANSFER_MANAGER',
  'TRANSFER',
  'TRANSFERABLE',
  'TRANSFERER',
  'TRANSPORTER',
  'TREASURER',
  'TREASURY',
  'TRUSTED_AGENT_ROLE',
  'TRUSTED_CONTRACT',
  'TRUSTED_EXECUTION',
  'TRUSTEE_FEE',
  'TRUSTEE',
  'TRUSTER_CONTRACT',
  'TRUSTY',
  'UBQ_BURNER',
  'UBQ_MINTER',
  'UBQ_TOKEN_MANAGER',
  'UNPAUSED',
  'UNPAUSER',
  'UPDATE_TOKEN_URI',
  'UPDATER',
  'UPGRADER',
  'URI_MANAGER',
  'URI_SETTER',
  'URI_UPDATER',
  'USD',
  'USDC',
  'USDT',
  'USE_SHARES_COMPTROLLER',
  'USER',
  'VALIDATOR_MANAGER',
  'Validator',
  'VALIDATOR',
  'VAULT',
  'VERIFIED_MINTER',
  'VERIFIER',
  'VESTING_MANAGER',
  'VESTING_PERIOD_EDITOR',
  'VOLMEX_PROTOCOL',
  'VOTER',
  'WAITSTAFF',
  'WHITELIST_EDITOR',
  'WHITELIST_FROM',
  'WHITELIST_MANAGER',
  'WHITELIST_TO',
  'WHITELIST_TRANSFER',
  'WHITELIST',
  'WHITELISTED_ADDRESSES',
  'WHITELISTED_FROM',
  'WHITELISTED_LP',
  'WHITELISTED_MSG_SENDER',
  'WHITELISTED_POOL',
  'WHITELISTED',
  'WHITELISTER',
  'WIPER',
  'WITHDRAW',
  'WITHDRAWAL',
  'WRAPPER',
  'XETH_LOCKER',
  'YDV_REWARDS',
  'ZHANNA',
];

export const roleDict = Object.fromEntries(
  roleNames
    .flatMap(roleNameVariations)
    .flatMap(name => roleIdVariations(name).map(id => [id, name]))
);

roleDict['0x' + toHex(new Uint8Array(32))] = 'DEFAULT_ADMIN_ROLE';

fs.writeFileSync('src/lib/role-dict.json', JSON.stringify(roleDict, null, 2));
