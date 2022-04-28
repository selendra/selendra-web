let architectures = [
  {
    title: "Folkless Upgrades",
    image: "/images/folkless.png",
    des: `<p className='p-des'>As with all software, to remain timely, useful and relevant, blockchain software requires upgrades for continued development. Early generation blockchain upgrades required forking, a process requiring weeks, if not months to deploy.</p> <p> Upgrades through the forking process can become controversial, sometimes leading to a hard fork, which in essence splits the development community in two. Selendra employs forkless upgrades enacted through an on-chain governance system, thereby creating enhanced stability through avoiding the forked upgrade process altogether.</p>`,
  },
  {
    title: "Consensus Architecture, Consensus Roles",
    image: "/images/consensus.png",
    des: `<p className='p-des'><strong>Selendra</strong> has four distinct roles for reaching consensus: </p>
    <p><strong>Validators</strong> secure the network through the process of staking, validating proofs from collators, and through participating in consensus with other validators.</p>
    <p className='p-des'><strong>Collators</strong> maintain data shards by collecting shard transactions and producing proofs for validators. They also monitor the network and report abuse to validators.</p>
    <p className='p-des'><strong>Nominators</strong> secure the network by selecting trustworthy validators and stakers.</p>
    <p className='p-des'><strong>Fishermen</strong> monitor the network and report abuse to validators.</p>`,
  },
  {
    title: "Governance Roles",
    image: "/images/governance.png",
    des: `<p className='p-des'>Selendra uses a governance mechanism of two distinct committee types that ensure the majority of stakeholders will always secure the network.<strong>SEL Holders</strong> committees are elected to represent passive stakeholders in two primary governance roles, which are proposing referenda, and vetoing dangerous or malicious referenda.</p>
    <p className='p-des'><strong>Technical</strong> committees are composed of active Selendra developers who propose emergency referenda and new features together with the Holders Council for fast-tracked voting and implementation.</p>`,
  },
  {
    title: "Rewards",
    image: "/images/reward.png",
    des: "<p className='p-des'><strong>Selendra</strong> incentivizes decentralization to maximize chain security through two primary role mechanisms, that of validators and nominators.</p> <p> Validators with greater stakes tend to have more resources for maintaining infrastructure, therefore, validator rewards are paid the same regardless of stake level. Generally, validators with lesser stake levels will pay more to nominators, whereby nominators have an economic incentive to shift toward lower stake validators, resulting in more evenly distributed stakes across validators and avoiding concentrations of power. </p>",
  },
  {
    title: "Transaction Fees",
    image: "/images/fee.png",
    des: "<p className='p-des'>Transaction fees are among the greatest barriers hindering mainstream adoption. Selendra&rsquo;s approach to this issue is to make transaction fees fixed and very low from the start. Selendra transaction fees are fixed at 0.00001 SEL per transaction. Since the cost per transaction is fixed to the SEL token, the cost per transaction will only vary relative to the SEL token price.</p> <p>Network governance bodies such as validators, norminator, collators and fishermen are rewarded through the staking process, with 30% of transaction fees being paid as rebates, while the remaining 70% are taken out of existence. </p>",
  },
  {
    title: "Network Abuse Mitigation",
    image: "/images/network.png",
    des: "<p className='p-des'>As Selendra transaction fees are inherently low, the possibility of attack on computing resources is a possibility. To mitigate this issue, prior to performing any transaction, Selendra account holders must maintain a minimum balance of 0.10 SEL (this minimum balance amount will be adjusted accordingly as the network develops).</p> <p>A minimum balance deposit is used to deter network attacks, where the deposit is forfeited upon detection of network abuse. Forfeited deposits are added to the reward pool fund for future payments to validators and other network participants. </p>",
  },
];

export default architectures;
