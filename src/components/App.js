import React,{Component} from 'react';
import Navbar from './Navbar';
import Web3 from 'web3';
import Tether from '../truffle_abis/Tether.json';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            account: '0x0',
            tether: {},
            rwd: {},
            decentralBank: {},
            tetherBalance: '0',
            rwdBalance: '0',
            stakingBalance: '0',
            loading: true,
        }
    }

    async UNSAFE_componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async loadBlockchainData() {
        const web3 = window.web3;
        if(web3){
            const account = await web3.eth.getAccounts();
            this.setState({account: account[0]});
            const networkId = await web3.eth.net.getId();

            //Load Tether Contract
            const tetherData = Tether.networks[networkId];

            if(tetherData){
                const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
                this.setState({tether});
                let tetherBalance = await tether.methods.balanceOf(this.state.account).call();
                this.setState({tetherBalance: tetherBalance.toString()})

                console.log({balance: tetherBalance},'tetherBalance')
            }else{
                alert('error')
            }
        }else{
            alert('no web3')
        }
    }

    async loadWeb3() {
        if(window.ethereuem){
            window.web3 = new Web3(window.ethereuem);
            await window.ethereuem.enable();
        }else if(window.web3){
                window.web3 = new Web3(window.web3.currentProvider)
        }else{
            window.alert('');
        }
    }


    render() {
        return (
            <>
             <Navbar account={this.state.account} />
             <div>..</div>
            </>
        )
    }
}

export default App;