import React,{Component} from 'react';


class Navbar extends Component {
   constructor(props){
       super(props);
   }

    render() {
        return (
            <div className="w-100 bg-gray-300 h-auto py-3 px-4  ">
                <div className="flex flex-row  justify-between">
                    <div>
                        <h5 className="font-semibold">DEFI YIELD FARMING</h5>
                    </div>
                    <div className="">
                        <span className="text-sm">account:</span>
                        <span>{' ' + this.props.account}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;