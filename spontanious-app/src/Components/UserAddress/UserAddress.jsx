// import React, { useState } from 'react';


// class UserAddress extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value : []

//         }; 

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleChange(event){
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         this.props.setOption([this.state.value]);
//         event.preventDefault();  
//     }

//     render(){
//         return (
//             <form>
//               <label>
//                 Street Address:
//                 <input
//                   name="street"
//                   type="text"
//                   value={this.state.street}
//                   onChange={this.handleChange} />
//               </label>
//               <br />
//               <label>
//                 City:
//                 <input
//                   name="city"
//                   type="text"
//                   value={this.state.city}
//                   onChange={this.handleChange} />
//               </label>
//               <label>
//                 State:
//                 <input
//                   name="state"
//                   type="text"
//                   value={this.state.state}
//                   onChange={this.handleChange} />
//               </label>
//               <input class="button" type="submit" value="Submit"/>
//             </form>
//           );
//         }
//       }

// export default UserAddress;