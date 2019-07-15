import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card , CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
constructor(props){
    super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab ===0){
            return(

                <div className="projects-grid">
                {/* Project 1 */}
               <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'}}> React Project #1</CardTitle>
                   <CardText>
                   Broken when reviewing from mobile phone lol
                   </CardText>
                   <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>

                  {/* Project 2 */}
               <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'}}> React Project #2</CardTitle>
                   <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                   </CardText>
                   <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>

                  {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'}}> React Project #3</CardTitle>
                   <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                   </CardText>
                   <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>
               </div>

            )
        } 
        else if(this.state.activeTab === 1) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNY6a6Jieewaill4ZKOh53mbft7uH6wFrSUatxWg6m7sQp2qvwA) center / cover'}}> Node Project #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </CardText>
                <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                </CardMenu>
            </Card>
            )
        } 
        else if(this.state.activeTab === 2) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/1906852_93c6.jpg) center / cover'}}> MongoDB Project #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </CardText>
                <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                </CardMenu>
            </Card>
            )
        } 
        else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/902/1*alZcSIb0lcN7gQIx2tJ_tg.png) center / cover'}}> Express Project #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </CardText>
                <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                </CardMenu>
            </Card>
            )
        } 
        else if(this.state.activeTab === 4)  {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.filepicker.io/api/file/BFMMlbcQvml9HSqXcvNp) center / cover'}}> Python Project #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </CardText>
                <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share"/>
                </CardMenu>
            </Card>
            )

            }
        }
    
        
 

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Express</Tab>
                    <Tab>Python</Tab>
                </Tabs>

       
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
            
            </div>
        )
    }
}

export default Projects;