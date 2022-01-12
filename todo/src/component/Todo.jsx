// // rcc
// // import { LifecycleWatcher } from 'puppeteer'
// import React, { Component } from 'react'

// export default class Todo extends Component {
//     state={
//         taskList:["Task-1","Task-2","Task-3","Task-4"],
//         currentTask:""
//     }
//  deleteTask(task)
//  {
//      let filteredarray=this.state.taskList.filter((cTask)=>
//      {
//         return task!== cTask;
//      })
//      this.setState({
     
//      taskList:filteredarray
//       })
//  }
//  handleChange(e)
//  {
//        this.setState({
    
//        currentTask:e.target.value

        
//  })
 
//  }
//  addTask()
//  {
//     let  array=[...this.state.taskList,this.state.currentTask];
//     this.setState({
       
//       taskList:array,
//     currentTask:""
        
//    })
//  }
//     render() {
//         return (
//             <div>
//               <div className='input-container' >
//                    <input type="text" value={this.state.currentTask} onChange={(e)=>{this.handleChange(e)}}/>
//                    <button onClick={()=>{this.addTask()}}>submit</button>
//               </div>
//               {/* <div className='task-list'>
//                   <ul>
//                       {this.state.taskList.map((task)=>{
//                           return (
//                               <li className='tasklist'>
//                                   <p>{task}</p>
//                                   <button onClick={()=>{this.deleteTask(task)}}>Delete</button>
//                               </li>
//                           )
//                       })}
//                   </ul>
//               </div> */}
//               <TaskList taskList={this.state.taskList}></TaskList>
//             </div>
//         )
//     }
// }

// rcc
// import { LifecycleWatcher } from 'puppeteer'
// IDANTHA NENE CHESANU ii code chesinde nene ........................HAHAAHHAHA)))))))))
// import React, { Component } from 'react'

// export default class Todo extends Component {
//     state={
//         taskList:["Task-1","Task-2"],
//         currentTask:""
//     }
//  deleteTask(task)
//  {
//      let filteredarray=this.state.taskList.filter((cTask)=>
//      {
//         return task!== cTask;
//      })
//      this.setState({
     
//      taskList:filteredarray
//       })
//  }
//  addTask(e){
// //  {   let arr=this.state.taskList;
    
//     let arr2=this.state.taskList;
//     // arr2.push(98);
//     // this is giving refernece to the 0 th ele of tasklist ante when  tasklist lo adina change aiythe you arer going to change automatically lets say arr2 valla tasklist lo changes vunte nuvvu aa chages ni reflect chesthav nee arr1 lo ala kakunda vundali ante nuvvu refer cheyyakund just copy chey
  
  
// //    
// //    op::t1,t2,98

// let arr=[];
// arr2.push(98);
// // baat smjlo yr sirf 2 points when t=you are referncing then jo bhi vhan pr krhe ho vo tum dekhpovogi cas you also pointing to same arragr nhi krrhe ho just copying the content of tasklist using for loop or ... operator then tasklist mein kuch bhi changes aayi vo tumhare andar reflect nhi honge
//   for (let i = 0; i < this.state.taskList.length; i++) {
//         arr[i]=this.state.taskList[i]
//            }
//            console.log(arr);
         

//         // arr.push(e.target.value);
//         this.setState({
    
//             taskList:arr2,
            
//      })
  
//  e.target.value=""
// }
//     render() {
//         return (
//             <div>
//               <div className='input-container'>
//                    <input type="text"
//                    onKeyDown={(e)=>{
//                        if(e.key==='Enter')
//                        {
//                         this.addTask(e) 
//                        }
//                    }}/>
//                    <button>submit</button>

//               </div>
//               <div className='task-list'>
//                   <ul>
//                       {this.state.taskList.map((task)=>{
//                           return (
//                               <li className='tasklist'>
//                                   <p>{task}</p>
//                                   <button onClick={()=>{this.deleteTask(task)}}>Delete</button>
//                               </li>
//                           )
//                       })}
//                   </ul>
//               </div>
//             </div>
//         )
//     }
// }
// react snippets
// rcc
import React, { Component } from 'react';
import TaskList from './TaskList';
import InputContainer from './InputContainer';
//1.render -> static ui define
// /2. identify different variables that 
// can change throughout the life time -> state
// 3. rewrite render using those state variables
// 4. event listener to change the state
export default class Todo extends Component {
    state = {
        taskList: [{id:1,task:"task-1"},{id:1,task:"task-1"},{id:1,task:"task-1"}]
    }
    deleteTask = (id) => {
        // current - rest of the task 
        let filteredtasks = this.state.taskList.filter(function (task) { return task.id !== id; })
        this.setState({
            taskList: filteredtasks
        });
    }
    addTask = (currTask) => {
        // let currTask = this.state.currTask;
        // let tempArr = [];
        // for (let i = 0; i < this.state.taskList.length; i++) {
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);
        let tempArr = [...this.state.taskList, 
            { task: currTask, id: this.state.taskList.length }]
        // let tempArr = [...this.state.taskList,
        // { task: currTask, id: this.state.taskList.length }]
        this.setState({
            taskList: tempArr 
            // taskList: tempArr
        })
    }
    render() {
        return (
            <div>
                {/* passing props to children component */}
    <InputContainer addTask={this.addTask}></InputContainer>
<TaskList list={this.state.taskList} deleteTask={this.deleteTask}>
</TaskList>
                {/* <InputContainer addTask={this.addTask}></InputContainer> */}
               
            </div>
        )
    }
}
