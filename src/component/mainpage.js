import React, { Component } from 'react';
import './mainpage.css';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

var containerWidth=800;
var containerHeight=600;

class ContactInfo extends Component {
    
    render(){
        return(
            <div className='square'
                id={"imgEdit"+this.props.index}
                onMouseDown={() => {if(!this.props.isEnter)this.props.isEntering(this.props.index)}}
                onMouseUp={() => {this.props.isLeaving(this.props.index)}}
                style={{
                    width: this.props.w + 'px', 
                    height: this.props.h+'px',
                    background: this.props.color,
                    top: this.props.top+'px', 
                    left: this.props.left+'px',
                    zIndex:this.props.index+1,

                    boxShadow:this.props.shadowX+"px "+this.props.shadowY+"px "+this.props.shadowBlur+"px "+this.props.shadowColor,
                    transform: "rotateX("+this.props.rotateX+"deg) rotateY("+this.props.rotateY+"deg)" ,
                    border: this.props.borderPX+"px "+this.props.borderColor+" "+this.props.borderForm,
                    borderRadius:this.props.borderRadius+"px"
                    }}>
                <div 
                className='menu close'
                onClick={() => {this.props.isClose(this.props.index)}}>×</div> 
                <div 
                className='menu resize'
                onMouseDown={() => {if(!this.props.isResize)this.props.isEnteringResize(this.props.index)}}
                onMouseUp={() => {this.props.isLeavingResize(this.props.index)}}>↔</div>
                
            </div>
        );
    }
}

class Mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sqaures: [
                {top: 20, left: 0,w: 100, h: 50, color: 'red',isEnter:false,isDrag:false, isResize:false,title:"0번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",rotateX:0,rotateY:0,borderForm:"none",borderColor:"#474747",borderPX:"0",borderRadius:"0"},
                {top: 120, left: 0,w: 100, h: 50, color: 'blue',isEnter:false,isDrag:false, isResize:false,title:"1번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",rotateX:0,rotateY:0,borderForm:"none",borderColor:"#474747",borderPX:"0",borderRadius:"0"},
                {top: 220, left: 0,w: 100, h: 50, color: 'green',isEnter:false,isDrag:false, isResize:false,title:"2번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",rotateX:0,rotateY:0,borderForm:"none",borderColor:"#474747",borderPX:"0",borderRadius:"0"},
                {top: 320, left: 0,w: 100, h: 50, color: 'yellow',isEnter:false,isDrag:false, isResize:false,title:"3번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",rotateX:0,rotateY:0,borderForm:"none",borderColor:"#474747",borderPX:"0",borderRadius:"0"},
            ],
            dragNow:false,
            divNow:0,
            onResize:false,
            val_shadowX:0,
            val_shadowY:0,
            val_shadowBlur:0,
            val_shadowColor:"#474747",
            val_rotateX:0,
            val_rotateY:0,
            val_borderForm:"none",
            val_borderColor:"#474747",
            val_borderPX:"0",
            val_borderRadius:"0",

        }
        this.moveHandler=this.moveHandler.bind(this);
    };

    componentDidMount(){
        document.addEventListener('mousemove', this.moveHandler);
        document.addEventListener('mousedown', e => this.setState({dragNow:true}));
        document.addEventListener('mouseup', e => this.setState({dragNow:false,onResize:false}))
    }

    isEntering=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=true;
        this.setState({sqaures:basket, dragNow:true,divNow:index,
            // val_shadowX:basket[index].shadowX,
            // val_shadowY:basket[index].shadowY,
            // val_shadowBlur:basket[index].shadowBlur,
            // val_shadowColor:basket[index].shadowColor,
            // val_rotateX:basket[index].rotateX,
            // val_rotateY:basket[index].rotateY,
            // val_borderForm:basket[index].borderForm,
            // val_borderColor:basket[index].borderColor,
            // val_borderPX:basket[index].borderPX,
            // val_borderRadius:basket[index].borderRadius,
        })
    }
    isLeaving=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=false;
        this.setState({sqaures:basket, dragNow:false})
    }
    isEnteringResize=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=true;
        this.setState({sqaures:basket, dragNow:true,divNow:index,onResize:true,
            // val_shadowX:basket[index].shadowX,
            // val_shadowY:basket[index].shadowY,
            // val_shadowBlur:basket[index].shadowBlur,
            // val_shadowColor:basket[index].shadowColor,
            // val_rotateX:basket[index].rotateX,
            // val_rotateY:basket[index].rotateY,
            // val_borderForm:basket[index].borderForm,
            // val_borderColor:basket[index].borderColor,
            // val_borderPX:basket[index].borderPX,
            // val_borderRadius:basket[index].borderRadius,
        })
    }
    isLeavingResize=(index)=>{
        console.log("꺼져랑")
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=false;
        this.setState({sqaures:basket, dragNow:false,onResize:false})
    }
    isCloseing=(index)=>{
        this.setState({
            sqaures: this.state.sqaures.filter((elem,i) => i !== index),
          });
    }
    moveHandler(e){
        
        if(this.state.dragNow){
            var basket=[
                ...this.state.sqaures
            ]
            
            if(this.state.onResize){
                if(this.state.divNow!==""){
                    if(basket[this.state.divNow].isEnter){
                        basket[this.state.divNow].w= Math.max(e.clientX - basket[this.state.divNow].left+5,20);
                        basket[this.state.divNow].h= Math.max(e.clientY - basket[this.state.divNow].top+5,20);
                        this.setState({sqaures:basket})
                }}
            }
            else if(this.state.divNow!==""){
                if(basket[this.state.divNow].isEnter){
                    if(e.clientX<containerWidth&&e.clientY<containerHeight){
                        basket[this.state.divNow].top= e.clientY - basket[this.state.divNow].h/2;
                        basket[this.state.divNow].left= e.clientX - basket[this.state.divNow].w/2;
                        this.setState({sqaures:basket})
                    }
            }}

        }
      }
    addSquare(){
        var basket=[
            {top: 100, left: 100,w: 100, h: 50, color: 'red',isEnter:false,isDrag:false, isResize:false,title:(this.state.sqaures.length)+"번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",rotateX:0,rotateY:0,borderForm:"none",borderColor:"#474747",borderPX:"0",borderRadius:"0"},
        ]
        this.setState({sqaures:[...this.state.sqaures, ...basket]})
    }
    onClickLayerDown(index){
        var basket=[
            ...this.state.sqaures
        ]

        var tmp_basket=[]
        tmp_basket=basket[index]
        basket[index]=basket[index+1]
        basket[index+1]=tmp_basket

        this.setState({sqaures:basket})
    }
    onClickLayerUp(index){
        var basket=[
            ...this.state.sqaures
        ]

        var tmp_basket=[]
        tmp_basket=basket[index-1]
        basket[index-1]=basket[index]
        basket[index]=tmp_basket

        this.setState({sqaures:basket})
    }
    
    // 여기부터는 slider shadow 핸들러 함수
    handleSliderChangeX = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowX=newValue;
        this.setState({val_shadowX:newValue,sqaures:basket})
      };

      handleSliderChangeY = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowY=newValue;
        this.setState({val_shadowY:newValue,sqaures:basket})
      };
      handleSliderChangeBlur = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowBlur=newValue;
        this.setState({val_shadowBlur:newValue,sqaures:basket})
      };
      handleSliderChangeRX = (event, newValue) => {
        
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].rotateX=newValue;
        this.setState({val_rotateX:newValue,sqaures:basket})
      };
      handleSliderChangeRY = (event, newValue) => {
       
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].rotateY=newValue;
        this.setState({val_rotateY:newValue,sqaures:basket})
      };
      handleSliderChangePX = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].borderPX=newValue;
        this.setState({val_borderPX:newValue,sqaures:basket})
      };
      handleSliderChangeRadius = (event, newValue) => {
        
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].borderRadius=newValue;
        this.setState({val_borderRadius:newValue,sqaures:basket})
      };



      //input change
    handleInputChangeX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowX= Number(event.target.value);
            this.setState({
                val_shadowX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeY = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowY= Number(event.target.value);
            this.setState({
                val_shadowY:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeBlur = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowBlur= Number(event.target.value);
            this.setState({
                val_shadowBlur:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeColor = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowColor=(event.target.value);
            this.setState({
                val_shadowColor:(event.target.value),
                sqaures:basket
            })
        }
      };  
      handleInputChangeRX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].rotateX= Number(event.target.value);
            this.setState({
                val_rotateX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      
      handleInputChangeRY = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].rotateY= Number(event.target.value);
            this.setState({
                val_rotateY:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangePX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderPX= Number(event.target.value);
            this.setState({
                val_borderPX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeRadius = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderRadius= Number(event.target.value);
            this.setState({
                val_borderRadius:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      
      handleInputborderColor= (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderColor= (event.target.value);
            this.setState({
                val_borderColor:(event.target.value),
                sqaures:basket
            })
        }
      };
      //여기까지

      handleRadioChange=(event)=>{
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderForm= (event.target.value);
            this.setState({
                val_borderForm:(event.target.value),
                sqaures:basket
            })
        }
      }

    render(){
        const squareList = this.state.sqaures.map((elem,i)=>(
            <p key={i} style={i===this.state.divNow?{fontWeight:"bold"}:null}>{elem.title} 
                <button style={(i===0)?{display:"none"}:null} onClick={()=>this.onClickLayerUp(i)}>∧</button>
                <button style={(i===(this.state.sqaures.length-1))?{display:"none"}:null} onClick={()=>this.onClickLayerDown(i)}>∨</button>
                <button onClick={()=>this.isCloseing(i)}>-</button>
            </p>
        ));
        return(
            <div>
                <div id='container'>
                    {this.state.sqaures.map((square, index) => 
                    {
                        return(
                            <ContactInfo
                            key={index} 
                            index={index} 
                            color={square.color}
                            top={square.top}
                            left={square.left}
                            w={square.w}
                            h={square.h}
                            isEntering={this.isEntering.bind(this)}
                            isLeaving={this.isLeaving.bind(this)}
                            isEnter={this.state.isEnter}
                            isEnteringResize={this.isEnteringResize.bind(this)}
                            isLeavingResize={this.isLeavingResize.bind(this)}
                            isResize={this.state.onResize}
                            isClose={this.isCloseing.bind(this)}

                            shadowX={square.shadowX}
                            shadowY={square.shadowY}
                            shadowBlur={square.shadowBlur}
                            shadowColor={square.shadowColor}
                            rotateX={square.rotateX}
                            rotateY={square.rotateY}
                            borderForm={square.borderForm}
                            borderPX={square.borderPX}
                            borderRadius={square.borderRadius}
                            borderColor={square.borderColor}
                            />     
                        );
                    })
                    }
                </div>
                <div style={{width:"50%",height:"50vh",backgroundColor:"rgba(146, 146, 146, 0.418)",top:"600px",position:"absolute"}}>
                    <button onClick={()=>this.addSquare()}>+</button>
                    <h2>{this.state.divNow}</h2>
                    {squareList}
                </div>
                <div style={{width:"45%",height:"70vh",left:"50%",backgroundColor:"rgba(146, 146, 146, 0.418)",top:"600px",position:"absolute"}}>
                그림자 X : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-100}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowX === 'number' ? this.state.val_shadowX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowX}
                    margin="dense"
                    onChange={this.handleInputChangeX}
                    inputProps={{
                        step: 0.5,
                        min: -100,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 Y : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-100}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowY === 'number' ? this.state.val_shadowY : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeY}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowY}
                    margin="dense"
                    onChange={this.handleInputChangeY}
                    inputProps={{
                        step: 0.5,
                        min: -100,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 Blur : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowBlur === 'number' ? this.state.val_shadowBlur : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeBlur}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowBlur}
                    margin="dense"
                    onChange={this.handleInputChangeBlur}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 색깔 : &nbsp;&nbsp;
                <input
                    style={{width:"20%"}}
                    value={this.state.val_shadowColor}
                    margin="dense"
                    onChange={this.handleInputChangeColor}
                    type='color'
                />   
                <hr />
                <br />
                X축 기울기 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-180}
                    max={180}
                    style={{width:"60%"}}
                    value={typeof this.state.val_rotateX === 'number' ? this.state.val_rotateX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeRX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_rotateX}
                    margin="dense"
                    onChange={this.handleInputChangeRX}
                    inputProps={{
                        step: 0.5,
                        min: -180,
                        max: 180,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                Y축 기울기 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-180}
                    max={180}
                    style={{width:"60%"}}
                    value={typeof this.state.val_rotateY === 'number' ? this.state.val_rotateY : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeRY}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_rotateY}
                    margin="dense"
                    onChange={this.handleInputChangeRY}
                    inputProps={{
                        step: 0.5,
                        min: -180,
                        max: 180,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <hr />
                {/* 테두리 설정 */}
                <FormControl component="fieldset">
                <FormLabel component="legend">그림 테두리</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="none" onChange={this.handleRadioChange}>
                    <FormControlLabel
                    value="none"
                    control={<Radio color="primary" />}
                    label="없음"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="solid"
                    control={<Radio color="primary" />}
                    label="선"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="dashed"
                    control={<Radio color="primary" />}
                    label="점선"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="double"
                    control={<Radio color="primary" />}
                    label="두줄"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="ridge"
                    control={<Radio color="primary" />}
                    label="입체"
                    labelPlacement="top"
                    />
                </RadioGroup>
                </FormControl>

                <br />
                테두리 두께 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_borderPX === 'number' ? this.state.val_borderPX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangePX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_borderPX}
                    margin="dense"
                    onChange={this.handleInputChangePX}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                테두리 모서리 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_borderRadius === 'number' ? this.state.val_borderRadius : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeRadius}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_borderRadius}
                    margin="dense"
                    onChange={this.handleInputChangeRadius}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                테두리 색깔 : &nbsp;&nbsp;
                <input
                    style={{width:"20%"}}
                    value={this.state.val_borderColor}
                    margin="dense"
                    onChange={this.handleInputborderColor}
                    type='color'
                />  
                </div>
            </div>
        );
    }
}

export default Mainpage;



