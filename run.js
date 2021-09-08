async function main(){
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract address:", waveContract.address);
    
    let count = await waveContract.getTotalWaves;
    

    let waveTxn = await waveContract.wave("message");
    await waveTxn.wait();

    waveTxn = await waveContract.wave("new message");
    await waveTxn.wait();

    let allWaves = await waveContract.getAllWaves()
    console.log(allWaves)
}

main()
    .then(() =>process.exit(0))
    .catch((error)=> {
        console.error(error);
        process.exit(1);
    });