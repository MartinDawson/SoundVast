import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {jPlayerPlaylist} from "../jPlayer/JPlayerPlaylist";
import {jPlayer} from "../jPlayer/JPlayer";

class FooterContainer extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {};
    }
    test = () => {
        document.addEventListener("keydown", (e) => {   
			if (e.keyCode == '38') {
				
			}		
		});     
    }
    updateOptions = (update, callback) => this.setState((prevState) => prevState.jPlayerPlaylistOptions = update(prevState.jPlayerPlaylistOptions), callback);
    componentDidMount() {
        this.test();
    }
    render() {
        return (
            <div>
                <div className="jp-type-footer" >
                    {/*<JPlayerPlaylist ref={jPlayerPlaylist => this.jPlayerPlaylist = jPlayerPlaylist} {...this.state.jPlayerPlaylistOptions} updateOptions={this.updateOptions} />*/}
                </div>
            </div>
        );
    }
}

class Test extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            jPlayerOptions: {
                jPlayerSelector: "#jplayer_footer_player",
                cssSelectorAncestor: "#jp_container_footer_player",
                html: {
                    //Toggle between play and pause in css based on playing or not
                    play: <i className="fa fa-play"></i>,
                    mute: <i className="fa fa-volume-up"></i>,
                    fullScreen: <i className="fa fa-expand"></i>,
                    repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>,
                    shuffle: <i className="fa fa-random"></i>,
                    previous: <i className="fa fa-step-backward"></i>,
                    next: <i className="fa fa-step-forward"></i>,
                    playlistOptions: <div><i className="fa fa-ellipsis-h"></i><i className="fa fa-comment"></i></div>,
                    stop: <i className="fa fa-step-forward jp-test"></i>
                },      
                smoothPlayBar: false,
                muted: true,
                enableRemoveControls: true,
                loopOnPrevious: true,
                keyEnabled: true,
                playlist: [
                    {
                        title:"Cro Magnon Man",
                        artist:"The Stark Palace",
                        mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
                        free: true
                    },
                    {
                        title:"Tempered Song",
                        artist:"Miaow",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                        free: true
                    },
                    {
                        title:"Das Song",
                        artist:"Miaow",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
                    },
                    {
                        title:"Song",
                        artist:"Miaow",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                        free: true
                    }
                ],
                onError: (jPlayer) => console.error(jPlayer.error)                       
            }
        };
    }
    render() {
        return (
            <div>
                <JPlayer {...this.state.jPlayerOptions} />
            </div>
        );
    }
}

const JPlayer = jPlayer(jPlayerPlaylist(FooterContainer));

export default connect()(Test);