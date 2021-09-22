const { ethers } = require('ethers');


const roles = Object.fromEntries([].concat(
    { name: 'DEFAULT_ADMIN_ROLE',  value: '0x0000000000000000000000000000000000000000000000000000000000000000' },
    { name: 'MODULE_ROLE',         value: '0x5098275140f5753db46c42f6e139939968848633a1298402189fdfdafa69b452' }, // - 1
    { name: 'AUTHORIZATION_RATIO', value: '0x9f280153bc61a10b7af5e9374ead4471b587c3bdcab2b4ab6bdd38136e8544a1' }, // - 1
    { name: 'OWNER_ROLE',          value: ethers.utils.id('') },
    [].concat([
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
        'TIME_LOCK_EDITOR',
        'TIME_LOCKED',
        'TIMELOCK',
        'TIP_JAR',
        'TOKEN_BASE_URI_SETTER',
        'TOKEN_CREATOR',
        'TOKEN_GRANTER',
        'TOKEN_LOCKER',
        'TOKEN_MARK',
        'TOKEN_SAVER',
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
    ]
    .flatMap(keyword => [
        keyword,
        keyword.toLowerCase(),
        `ROLE:${keyword}`,
        `ROLE_${keyword}`,
        `ROLE_${keyword}_ADMIN`,
        `${keyword}_ROLE`,
        `${keyword}_ADMIN`,
        `${keyword}_ADMIN_ROLE`,
        `${keyword}_ROLE_ADMIN`,
        `_${keyword}`,
    ])
    .flatMap(name => [
        { name },
        { name, value: ethers.utils.hexlify(ethers.utils.concat([ ethers.utils.toUtf8Bytes(name), ethers.constants.HashZero ]).slice(0, 32)) },
        { name, value: ethers.utils.keccak256((new ethers.utils.AbiCoder()).encode([ 'string' ], [  name ])) },
    ]),
)).map(entry => ([ entry.value || ethers.utils.id(entry.name), entry.name ])));

// console.log(roles)

const ignoreRoles = [
    '0x0000000000000000000000000000000000000000000000000000000000000001',
    '0x0000000000000000000000000000000000000000000000000000000000000002',
    '0x0000000000000000000000000000000000000000000000000000000000000003',
    '0x0000000000000000000000000000000000000000000000000000000000000004',
    '0x0000000000000000000000000000000000000000000000000000000000000005',
    '0x0000000000000000000000000000000000000000000000000000000000000006',
    '0x0000000000000000000000000000000000000000000000000000000000000007',
    '0x0000000000000000000000000000000000000000000000000000000000000008',
    '0x000000000000000000000000000000000000000000000000000000000fe34a96',
    '0x009ab23a1010d07a0450a1fbea1d84169b57d2c2273b54bff0f20c3e90199b5d',
    '0x012ff340d0cd9c652c747ca35727e68c547d0f0bfa7758d2e77f75acef481b4f', // PREDICATE / 256
    '0x014df5ee2861d7f34562399ffa112fc59b51f810d2b875c3609ba0c31ac873d0',
    '0x0264eee872e5cb48ad7a4f02eeb15e18e8f9dc6d3f015bb9e3172f53912afb14',
    '0x03d64837e30f3bde14c47536cffb1dc441abfcf02e886b676a4ef6c83c39f980',
    '0x04c6a47ae7910ef8b295215a97e8495a9eaf57b7b05bfd8bf951edb3fd4a16a3',
    '0x0974efa3232b7e4ea091b5976867b9d8515e1be5e07fe586d7db4388cb6450ff',
    '0x09f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a', // MINTER / 256
    '0x0bf01987eb944ac9d01a98005777b55d68cdb9dea34d590e6dd77437b43d6563',
    '0x0c9dd89ea4bf0d3b0ea8a75eb78ba99856a8a6228320c3f151dad0de8bda8feb',
    '0x0dcb06cc8b0e04b3006bac0860a260889179baf409c5fe6888a113ed38debc2a',
    '0x0e2208c692f4f271957e6c9d7c9785b7c2c3a7e329d54eecdfaa3c5f48b0cd51',
    '0x0e685c84e557bbd04e4dc78a8f517e0416fd022beda2d3610c6e5b7f281c5c56',
    '0x1000000000000000000000000000000000000000000000000000000000000000',
    '0x1000000000000000000000000000000000000000000000000000000000000001',
    '0x108e9970bf0b59c2d2c85b4c1102be0833ce2f80d7a6e37034d625e36d761eeb',
    '0x10f19e07d16b3337f1462029e44f2c408bcb652039044cb1eec2fc0c478fc6c3',
    '0x14cf45180c3fcf249a5a305e9657ea05c14fd4f4e1800ee0216a8213091711d2',
    '0x14ff1b5e4a5dc3c34a7bd04ab4f74e0a8b17dbf6cecf7a098a5f351cbac4d0e4',
    '0x1522c5d2f2bfcb094489103faf91c9c412f68e706657062fbe6788935cb83784',
    '0x17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb0',
    '0x1a2357bcd0abf65b22a032e1b4615e5bfde2b27c552587e95c04fd853ab9404d',
    '0x1a6d2d0d8a2c338bd07cb579f701a258609ca7066de28d1980e5425adb1679b9',
    '0x1ab0187632b3cb5ac848b647a9edd463e705607328ab29602e80fc3fa8001918',
    '0x1bd9f63c4953ae92911c90c37efdc8a1d8a569ffd376cc64d1cf3a2d217dd13b',
    '0x1d1a2ce3f84e63eed195070d14e72762e9a1543c1b82a7e254cf7df50f654290',
    '0x1fc6b852bfcd222c9f13f4e9bf7ac6839b60cba7395baeca690ba4a30e60fd66',
    '0x2000000000000000000000000000000000000000000000000000000000000000',
    '0x2196e28813c9e81ae52007d34f46976f7b124680e911f0f8c48aa7543e5cecb8',
    '0x224141c4932098423082d63e977eaac0f09f69384f6b456a5c737bd8c6aea19d',
    '0x23970cab3799b6876df4319661e6c03cc45bd59628799d92e988dd8cbdc90e31',
    '0x2406f1e99f79cea012fb88c5c36566feaeefee0f4b98d3a376b49310222b53c4',
    '0x25ceb7513247377656f61505764a77dd4be2c454cdc51268a878d1b82696dc33',
    '0x260e73ed8de32999ed986cb1677271327af97ce552b6ac78aa36772e4df2cf8a',
    '0x27a07f57df717f62f3de7bff45e5410966a79b546f82638273194f58b1a2abac',
    '0x29e6bbdb467732bacf17ee9b0aaecf9b378e4f5642de0559031309445a28cc2f',
    '0x2b9b3b53865d9437a24097d0400845ce111bd43f6ef71750c962886da6258ce8',
    '0x2caf4c80b05ce7bf206217436affb0b5991f86b52e5adbf6875c6aefe04022a0',
    '0x2dca0f5ce7e75a4b43fe2b0d6f5d0b7a2bf92ecf89f8f0aa17b8308b67038821',
    '0x2df36fbac7566feedf22e54b2fd0f2a50d5e622c83b981e911819559af699b76',
    '0x2ff1966a4dbee539907992c4f977a4188760f691b073f8758a61a79f50907379',
    '0x3000000000000000000000000000000000000000000000000000000000000000',
    '0x3035d407acdbefcdc2de56670572b8450c96ff5e9f3e595245486296186e9d8d',
    '0x30854e1816f97c77fec020bfaf79d4d65ec0313c6c52626de45756a4441c650c',
    '0x322768a59ff125c97b97e61032dad139a6ca630f408625c2c32dc2f262dc7790',
    '0x329f6c9d87b9898860515038c2e06b2011f9cdfd29f4b8fd7a363b6534d0bb37',
    '0x32d0b2dc472551c8885ccc0cf74c5f98c8feb3cb709b3bf534da681229647c90',
    '0x34923a75ce28c91e5d78f877e5ffb2475c0760b1000000000000000000000000', // not a string
    '0x3a03af0fde85fe2bf44aa10560c39b341edee1b53beb50758909e32f63a82ae1',
    '0x3a5d75c89ebaaee67e6dd0a33595caba63b647b743e2af411e921682a0aea8c7',
    '0x3ba344b1943206b1aa46c6024ba27894691ed04639738a17aa5266e1e7f51ad9',
    '0x3baa0498eb0e3e3fbac4d52f48f8a552cff97ac16892e79e22edbe636d521825',
    '0x3d37afab23e5cac313ed6bbbd4cc033efdc5d534544a422062560607f0a47c91',
    '0x3f7f13052796c51062976bc56e8d832791868fbe09f836c31b6cb4e42762028d',
    '0x403729048c52e3fdba3f9e3986daa85c85124b1c6427144f064f935ca8374879',
    '0x41f69eec3ae0a88a429dd80e56128f5db215a5b5dd0900d4998a2f6516c09355',
    '0x42e85026d30963d06c0a91279df832a7e7820c8e0d52792109025af355b8d880',
    '0x44d5433ea38af79e3accfe7e71d3b10f1d4f69e2719c8124ee30c2e98a0b69dc',
    '0x451c5c64e4b3b49fccf0c7fd77554184c2f6cecb7aa6836cf0b1e506df114c28',
    '0x455d7708273815fbfd46bf35317b5c81c38291aa041eee780c0d0c36c786ece2',
    '0x47b7fe93788fefb83d3e93d9cc1396da416eb4e7138435b98e6527212f612d3b',
    '0x495c482c8e7ab4ff1d1a293d38da7a5264a571a2871d96c245cda40783cbc6c3',
    '0x495ff96f08d3468edd2023713a384a26b6fadb3c58bcc5d9f18f15936c754ef3',
    '0x4a3472489d247de85eff8f369fc4abffc30ecc4ec9f356820db1fdcc48743191',
    '0x4b41dfcec163471e57d8e95736c9a1074b9e2d313632c33d95f024a46957265b',
    '0x4b83f47f87d5148ebb985d89bb7ec4a0640fa70c93a9ffe6c3f6ed3cb6c31fc2',
    '0x4c29d7f5857f3c7f97c7b625940b3ccfaf84a94a4fdb2ecfd73db0fabbffd68d',
    '0x4d24ab45748a6ecc89bf952130c4a24a2898c348055b933e3c31ea6a0388765f',
    '0x4d2e7a1e3f5dd6e203f087b15756ccf0e4ccd947fe1b639a38540089a1e47f63',
    '0x4ec619e1829190795f929742ca4f1a6f7cd622481ddbbfb4c9b5efddb006f9aa',
    '0x4f72063d6dc4cf4bb4e008e0815997320f78a862b3e71fe66fa9ae685d1cd12f',
    '0x54ed0feff1467f9d13587dfd39226d08ee1a9606000000000000000000000000', // not a string → address (inverted arguments ?)
    '0x552cc977c7794811505b61c134ee971d4fca3438ed2f3682f0420ca3ea6cefca',
    '0x561a7809e8bab1d1fd157da9bb5c884f80ea594461d464ea79bcab1b18ade25d',
    '0x56acbc9446e62d6b1c229b2f4f17def9d9c1173619212753dfd4e146fff247c4',
    '0x5835a2f00e5c44365192484bd558fb64fbbf48d66cc0f2a1c3ed6546bcb939ad',
    '0x5d0fd95325d39a54fd316060ff02cc3576af885c7747cd1a96a05f9814f31f3f',
    '0x65be008eb4496380a543eb38cbad2e3a20cd95ddc99ef1da897f9ab585965754',
    '0x6663d80d1ddaf7af549b98207d87c23d06e0a662c0bc9bd97a9b07d71e130fe6',
    '0x69f0ac3bb7c4779eb3ef30a76743a930d82a5667000000000000000000000000', // not a string → address (inverted arguments ?)
    '0x6a6feb6ad361b4660d183a90f4efcf4c0fb807f2ebf050bc5820f4e9c7c7e4ac',
    '0x6b930a54bc9a8d9d32021a28e2282ffedf33210754271fcab1eb90abc2021a1c',
    '0x6bb31d3389b2d8997b1fb932cda3ae49e36af09034929a89579ebe7f7cf92f1e',
    '0x6d5b86ade30a4134d53050ddf119e1234a0c384f7933a16277a80b3e3606e39c',
    '0x6d5c9827c1f410bbb61d3b2a0a34b6b30492d9a1fd38588edca7ec4562ab9c9b',
    '0x6db953ac7200139c4659f497d7d085c8fac5f7e9000000000000000000000000', // not a string → address (inverted arguments ?)
    '0x6de086246960ecfedb364df2d833049bf50e02ed5e14aa5748a313be451c27bb',
    '0x6e4abc02c6bd089c9bfc9d8a556bc8c00f2f250d7ff4335f79d29ac94792b8ab',
    '0x710fe53b4ead4eb49a281544d00606284187c1a254e4529cfcf0fb4073a5763c',
    '0x72d2f9d10e32deda0d2a6f88beb5d78ba35d64b6619270c094b76c271bfc9743',
    '0x739a51874800ca2ea551f6738888eda63da7b0ffed906ab18243498239604e96',
    '0x74d225bb49ea7c9662f9af8815ed7e23c757a6db91f592589e24c98cdd1ba087',
    '0x74f7a545c65c11839a48d7453738b30c295408df2d944516167556759ddc6d06',
    '0x763d500340e00e51cb519724b489d905c7c2c9ad3fcc61b0d9893d21d871f87d',
    '0x779b9d7b1cefd23059ce3e2b194efb3183a6685dd830e8cbb723b0cbeb982b28',
    '0x77d72916e966418e6dc58a19999ae9934bef3f749f1547cde0a86e809f19c89b',
    '0x785cb0a84a2b356a19d452d6a5b515d664a8f7d112100ffb4bfec2ccbf6c0e46',
    '0x7b0d302ff44c050c7ee3638fe331a503db39e72ff6fdaa1e5f0f1059542e31b1',
    '0x7c69ab1e26bc0392864f9e0dffafd5795be63585594b8aeff4d8a5df9607c254',
    '0x7da03a03f2ed35382a12b1286724ce9ba6765fbda0b0a140cf489a0804cc9440',
    '0x7e3bdf7d439d01bc1797194289ccfbb93f12c17efe2856c054735d4476425b4b',
    '0x84760503e87460ccb934bf0ecf017a44d6a4b0edbdb197a41498824fa4953bea',
    '0x86024e89529ee90561d266fe70772355cdf7be9c9e97e3ac6b5d90ddbc853365',
    '0x86cf169ddb9f19bc57304a958748511e956d0b9255fb5895294f9c4ae5b00d58',
    '0x87a27db4f36de61ba2f0236a247c865066bda20280491ab03e223bd257bbb8fe',
    '0x8803b79cf103fbbe05f367aebd7133df95e66e35cd2fd4354572749b340fa030',
    '0x886f5b5d23a7f8b3645010a8eb98414557d4607145067846682ff187e4950fe3',
    '0x899f58981d087609ded82dbb0b8147502e874a28866c9f4e7eae68a05d4b12cd',
    '0x89cb0400c70c94e944e4f761ae265ecbbb35b0c2e5324bc54cda0b66eda126d4',
    '0x8c7071bc8ecac119569f3fe89c73b462877d2d24000000000000000000000000', // not a string → address (inverted arguments ?)
    '0x8c855f644849358c1f76f3c3b48219643c81f4d79dbe9db70636e573a2d134c8',
    '0x8cc59648709837cc698a24cd1c1c49fed819509c7cd70adb80552ef7727f1da7',
    '0x8cf807f6970720f8e2c208c7c5037595982c7bd9ed93c380d09df743d0dcc3fb',
    '0x8d6fbe628994960da194226513a9fdfea68ca62755885433e557eaee6adacbf7',
    '0x8d7425a3778ead42c20476a664be17a266ca52a8179b995578f3c70ef57d869e',
    '0x8dd046eb6fe22791cf064df41dbfc76ef240a563550f519aac88255bd8c2d3bb',
    '0x8e5e9bcf8f8b5a25e2b30fb383cd1ded596be9807597fd95c3328f66922f184d',
    '0x8eaf47e4c42e6a92e2b354cb708f0595c5c15844b7dbc0b5273dc9695758d130',
    '0x8f20b1bae40d6a29d4a64dd24e3ed2967f3428d514d9abe1e26ea78290786380',
    '0x8f6212578469b733d0650862ef0f2151cda4d749680ef856841942ced0443924',
    '0x8f80050fea4234fe97d65d4f9d05630dfdc157befdf6a6a6185d0357bb9c37ef',
    '0x90fa364ab0620e56ca57ee5540972c16422eae8e22104ed791d1204a8e740266',
    '0x91071578cdcd830b2df6a9df508e8cba960f602eb4de6bca946a5684976dfc02',
    '0x911327684fa1fbb3ef871be5e661097b95a6a768a2ccb44e7ac3fbb1adae51ec',
    '0x915ad627e31fa2ed925732ddf567b8aafd240e2562d67b9f332fc46e9835bddb',
    '0x9171f195f18cadd047e97046849dccceeea85f1377a040e8dafed2be30eec1df',
    '0x91e0ec988b9d8ed9ec6285342c68e0a3d133a541ce2be019bcb48c6d7ed98ea3',
    '0x92617c3bd8f36ff4377fff34329c403d3f8b8d1da14cf1bab802460bf97119ae',
    '0x93779bf6be703205517715c86297c193472c9d5533e90609b671022041168a4c',
    '0x9476379636bf56df3e6631bc65f1e572b6a1788c0fdd3a136b50ed1378fe4076',
    '0x95d3b83946dcc428b9c9d9a7d34dca999e5108c316dd69165bc4899f540917b0',
    '0x95d8704d3816d22488636997b18058b9d517e116e51171efcfd63029e653ba31',
    '0x973ef39d76cc2c6090feab1c030bec6ab5db557f64df047a4c4f9b5953cf1df3',
    '0x974baed0af2d6a96fd494b6b693a277e2936880e7df71f9cb8c024d3f43213f4',
    '0x98c3bd8df02a677a33325a3d486d8d781387bf65c22ee847c5ed87900bfee81c',
    '0x98db8a220cd0f09badce9f22d0ba7e93edb3d404448cc3560d391ab096ad16e9',
    '0x9923263fa127b3d1484cfd649df8f1831c2a74e4000000000000000000000000', // not a string → address (inverted arguments ?)
    '0x996b3569534d5a074e398b81c7d5a19229178512f1d372174c8af687f9ef43b2',
    '0x9be6008b22d96f47a580eaf7f8a79a13df43edbfbf33fa6c8e83f37a86aa2072',
    '0x9c60024347074fd9de2c1e36003080d22dbc76a41ef87444d21e361bcb39118e',
    '0x9cac44a99f147ddca969299a951bcc691aa23c1263286c17b4b28406a6bdc594',
    '0x9d728b2cfdb4ee1919fb1cda5804ace497ad014d02ffcdfe59c33da2db2d62f7',
    '0x9fe4fa5676c4e3ef044ae385bd7284a497d47047000000000000000000000000', // not a string
    '0xa00b75f9db0d7d24f2c7e7c11cf19b6ab38797262a1a460a9fe236887be0fc15',
    '0xa08db00c23bdedf5f55a2294cf2ce17a8bf81bb22969c83a310853f70020bab9',
    '0xa132675716e8727ce06a1a677864774742f7b8f775b426cf1e7c49801dd3e0e9',
    '0xa177e534e12ccf13d039acd018ea75f15433f72675b90b37923f2d4dd4334826',
    '0xa1d0a046c9c01494e988c52a322c67d3907babd8b22791c70177369c7fad6d95',
    '0xa33593253ebc32166588a1fa03f8c868515a7f5185aa790a65f0d2e24b32cecd',
    '0xa434a7eae4dc33d33707b4ea79a4d2f6f2fde6108bbe8f120bc12699e152e91e',
    '0xa4dbc2ea4e0c916dab703fd999a50f7a4a9c768025afa47088dada2561eb7afe',
    '0xa68140adf6d2ac845c4b7cd3dbb968e501e89df87afed2905e34fc338839eb68',
    '0xa7197c38d9c4c7450c7f2cd20d0a17cbe7c344190d6c82a6b49a146e62439ae4',
    '0xa729ef4e25027bc652fc8b5c4d1d902947361fa7c8e7b4905e877823f27331b3',
    '0xa8391d034640fc0376b4b36c05e716f6c479e87b7f8ae364089050459a3e54d8',
    '0xabf3c477f5cefdd0df20d099349bd39762c397f63a44edcc63287232ce9e4f38',
    '0xaccc809e9d1fc1812c1567ab081e5344a39ddf3b412504c2c13991dc8174a399',
    '0xb165298935924f540e4181c03493a5d686c54a0aaeb3f6216de85b7ffbba7738',
    '0xb2c47729c4f4ba06aefd3249464689e9006efb423d9fe62fb8a09b380c724dd5',
    '0xb3e53bff87a96979079674767cfa1a09f3cf2847ba695cbaae933c232f4bf7f0',
    '0xb4cce6bf152b41f237b365401b209838c52169fc7d8726c2df85b8f8930b7314',
    '0xb65bd503ca62b4d0afb852bce1657a5fed058cc91480fbc5d6a8160b191ce7cb',
    '0xb66d507c1e3c1bc237b923feddf01f16873f6a23c218ec08d1c8983da3c56309',
    '0xb77f39fee64279b8217d6e5604410abdf66f9cd17aa0e29b88cffd44b18bb8b3',
    '0xb7d13ae9a2c3406777e9963d38bfd8edbde1e9f1ae34dceb011e0c5bdcb9d2ce',
    '0xb99e9286bbe3524fdc1629246e6346d1e5a42efb5a41e85fc3811a6133089de2',
    '0xba100000625a3754423978a60c9317c58a424e3d000000000000000000000000', // not a string → address (inverted arguments ?)
    '0xbb08418a67729a078f87bbc8d02a770929bb68f5bfdf134ae2ead6ed38e2f4ae',
    '0xbd68ab95cda3c90ac0bffc2b3a3a97a564372fc3ca4a8e4575d3ce58179b7563',
    '0xbeaab71b100a8a1babb5959583c8453bdc44f894eb75932cc0612e56e37e9c1b',
    '0xc20f0dc70802178d2b87f9b91d411bd225cb64d9da414f0d7958c4f297fa0de8',
    '0xc37f15e38b056810103a0949c28933cb42c339059dcf4322d5da99a34fe4b452',
    '0xc55a74c743a5d6aff6a82963adf054e2367242c4a636870f26b8ee90910968d0',
    '0xc60d7a62d8843f2b14bc63f2a5240b187980481ad8c001a3caf4916aef3f667e',
    '0xc6798f8315665bdc75ec9410d7fb7412baa53f8854e4b23ed48513b969be0706',
    '0xc8380a9ed3810df5e9faa1cdd29581f1ee3bb82654546cebc42c97aaa1ee54d1',
    '0xc869e1d528fd91a06036810c7f025f082e044b8f0374c3d1d4b1fb5490dd90ae',
    '0xcb0f92e78bed66f5cb8e0f790f22198daa11797eeee5c297ed3f173392ed7d65',
    '0xcd021b8e001a22311e1ccbd0526db1cac113eab46048373ce0baf2c8da1f63fe',
    '0xd23d3d6a14e98d0784370cac29927bc44c744461ed46978e0d6839b803f95117',
    '0xd2705e6030510d29a7ec97d0eb546a81e681557e058ff1361e4a5a1b7090aadf',
    '0xd45448057dd4bec91524a9aa1c58ba5873b99fee065c4fe61a84ea8374011cba',
    '0xd603cc2d39ea2ab57038652f29ac8e7fd0e40e6a9b0f81de9bbc4acc6780d962',
    '0xdaa83c0ac00db97f647a018e2ca2a3c1466d9676f81fb18d2cbe920fee324801',
    '0xdb6e28adb9001f35afb5607320afc8c522c8a17c000000000000000000000000', // not a string → address (inverted arguments ?)
    '0xddfd3036e1eb6a4af67ba89b65b13a4c179e1ffbf33ac5f3c45ef9007b2cfc0f',
    '0xde00661a9bee31b253f6d0c9cfdafe0b25df2574c0f3debb8203f6dcff62d654',
    '0xdf3f622f2ac68bc05cde3d03e9612be1edbe1293df80ae86e9f82bfee6862ec9',
    '0xdfbefbf47cfe66b701d8cfdbce1de81c821590819cb07e71cb01b6602fb0ee27',
    '0xe049a55ee45d02029d295f595b5e3226333dbb8872c83fb6bcbc381d7f67b6d9',
    '0xe0e5373e25c8a2cc8c9b7be70241c2ed1e4695041718a605c968cb5f913abe0b',
    '0xe126192e16696b564f966f9b2c563e6966fbf56c36a66bfaeb1866d1e7886421',
    '0xe15ed53a035d5870cbe86afeda7642d7d84fa925de122cf6a435abf51d703e5c',
    '0xe1b2596831dcac59bdd80fed9f84f3b91cba6a583773f3b2bd3cb7ff0cca5295',
    '0xe29d423c82b3bff8379f0f612517d5fde2e763da06471971df888e2062fb214a',
    '0xe3a967a97711ed445071b98c1f8fe9f6142171801f3da8b19c5eff234651df7c',
    '0xe3ba09204abace100128c4286a5a9da3d6e7f72f6f0597b25e249d4b2ba012be',
    '0xe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa22',
    '0xe99cbe1ad53ff262c4fb18e8731144ffac4429c725b4de9d6908cb38ccc82665',
    '0xeb1e30a2c040af5abdd7a3e1f8e000b5e5bd5504b85aa4a414f689173b958e51',
    '0xebfdca8e46c0b8dacf9989ee613e35727eadd20a1d5e5ad01a53968c7e5fe07a',
    '0xec36dc889ceca277392ee379760b64be6337a04a9da512a8a28b81e01d140f86',
    '0xed4dc217e7ebb23158ae490a8c33b3ee5b724060e1b93175c20a01ab386f0e58',
    '0xee11097cbb9c334ec21a7934061732a460df1edb6b52f0b9464feea55dd71bff',
    '0xeebed1ce31f061f6ed2c58743b8faa373c739fcfffa21386fe5c5538cd0b0c7a',
    '0xeeecfc169d876bc1f54b2036e9decffd81de84521a98fac160d0c5b2f184ff5a',
    '0xf0303df69e2386d84f0d1b8823a00970e6506cfd9a69a69889045683cbd9e2a7',
    '0xf099cd8bde557814842a3121e8ddfd433a539b8c9f14bf31ebf108d12e6196e9',
    '0xf1a2457638272d6de01a43d78f7a92f0062327b348aee31fe4d8c0fba145109a',
    '0xf1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7',
    '0xf300098bcdbdceb616e0a9b22031c5be3dbd72e8e9d9c904f45f2f9141361339',
    '0xf49d3cbf0b4e0c77b52579fdf5e535cf0a754d9383a0c5361a9ab413123a359f',
    '0xf66dda020ce31cdeac2dbf112eb2ae02b72bf0e8b261212c5b229449a9799266',
    '0xf67c6ebf0508914d4548d84da9773085a967e1f26bc42c5e2d4467f693bca813',
    '0xf891568ad820be8a04ef898818740c498b06704d000000000000000000000000', // not a string → address (inverted arguments ?)
    '0xfaeee8731712f6df20547a51148dd8b64aad44906cf375baa710472ed6ee5c32',
    '0xfb9a4278387d46123bf7a62c6cd16c9f534616c34cb9cc5154f8a03dd5c8de63',
    '0xfc6276b984367518703ab50269bddb0e5d9b019fc1d96a6c62062a9706049e41', // rToken
    '0xfcaf14a05cc80be3cc9fbb9f4a25c339e1ab6ebbeb63321e4094be7594a572e0',
    '0xfdae3ca625b7a6a67b1c85ddb9efb8e92252215d4a6ec7177e622584b5b236e8',
    '0xfdda7749af0393152d4935ea57c8fb0e49eb0bbf302e45b17db11e78b1494907',
    '0xff96a025bd86d968dce0da3ec52d2f678a57c1fc000000000000000000000000', // not a string → address (inverted arguments ?)
];

const ignoreContracts = [
    '0x0771017cbF77b5A4551864aD1461C6e8Ea4bd506',
    '0x1e87e1492c829d06eb834cc4b46c8b9daa0721e7',
    '0x687d761089193dd5bb1c33a04cfeb6f18e6b9b3d', // proxy to 0x0771017cbF77b5A4551864aD1461C6e8Ea4bd506
    '0x8664A57Eea1a3cEFe889D7aCb02A0EE485c3231c',
    '0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6',
    '0xf161acf63649ff5cd42acff0f7ecdf533df66811',
    '0xf1B3b124842555782F98bE08d1357ABb8013F11c',
].map(a => a.toLowerCase());


module.exports = {
    roles,
    ignoreRoles,
    ignoreContracts,
};