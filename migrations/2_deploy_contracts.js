const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');


module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(Tether)
    const tether = Tether.deployed()

    await deployer.deploy(RWD)
    const rwd = await RWD.deployed()

    await deployer.deploy(DecentralBank)
    const decentralBank = await DecentralBank.deployed()

    await rwd.tranfer(decentralBank.address,'1000000000000000000000000')
    //Distribute  100 Tether tokens to investor
    await tether.tranfer(accounts[1], '1000000000000000000')
}