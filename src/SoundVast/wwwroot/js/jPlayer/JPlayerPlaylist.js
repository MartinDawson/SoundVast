import React from "react";
import {Motion, spring, presets} from "react-motion";
import JPlayer from "./JPlayer";
import merge from "lodash/merge";

export default class JPlayerPlaylist extends React.Component {
    static get defaultProps(){
		return {
            autoPlay: false,
            loopOnPrevious: false,
            shuffleOnLoop: true,
            enableRemoveControls: false,
            displayTime: 'slow',
            addTime: 'fast',
            removeTime: 'fast',
            shuffleTime: 400,
            itemClass: "jp-playlist-item",
            freeGroupClass: "jp-free-media",
            freeItemClass: "jp-playlist-item-free",
            removeItemClass: "jp-playlist-item-remove",
            
        }
    }
    constructor(props)
    {
        super();

        this.shuffleAnimMinHeight, this.removeAnimMinHeight = 0;
        this.shuffleAnimMaxHeight, this.removeAnimMaxHeight = 100;

        this.state = {};
        this.state = merge(
        {
            shuffleSlideUp: false,
            removeSlideUp: false,
            html: {
                additionalControls: [
                    <a class="jp-shuffle" key={0} onClick={this._shuffleOnClick} style={this.state.shuffleStyle}>{props.html.shuffle}</a>,
                    <a class="jp-shuffleOff" key={1} style={this.state.shuffleOffClick} onClick={this._shuffleOffClick} style={this.state.shuffleOffStyle}>{props.html.shuffleOff}</a>,
                    <a class="jp-previous" key={2} onClick={this._previousOnClick}>{props.html.previous}</a>,
					<a class="jp-next" key={3} onClick={this._nextOnClick}>{props.html.next}</a>,
                    <a class="jp-playlist-options" key={4}>{props.html.playlistOptions}</a>
                ],
            }
        }, props);

        this.event = {};
    }
    _shuffleOnClick = (e) => {
         e.preventDefault();

        if (this.shuffled && this.jPlayer.useStateClassSkin) {
            this.shuffle(false);
        } else {
            this.shuffle(true);
        }
        this.blur(e.target);
    }
    _shuffleOffClick = (e) => {
        e.preventDefault();
        this.shuffle(false);
        this.blur(e.target);
        this.setState(previousState => previousState.shuffleOffClick = Object.assign({}, previousState.shuffleOffClick, {display: "none"}));
    }
    _previousOnClick = (e) => {
        e.preventDefault();
        this.previous();
        this.blur(e.target);
    }
    _nextOnClick = (e) => {
        e.preventDefault();
        this.next();
        this.blur(e.target);
    }
    _setup = () => {
        this.current = 0;
        this.shuffled = false;
        this.removing = false; // Flag is true during remove animation, disabling the remove() method until complete.

        this.cssSelector = Object.assign({}, {cssPlaylistOptionsSelector: this.state.cssSelector.cssSelectorAncestor}, this.state.cssSelector);

        //Set the initial loop to the options loop
        this.loop = this.state.loop;

        this.options = merge({
            keyBindings: {
                next: {
                    key: 221, // ]
                    fn: function () {
                        this.next();
                    }
                },
                previous: {
                    key: 219, // [
                    fn: function () {
                        this.previous();
                    }
                },
                shuffle: {
                    key: 83, // s
                    fn: function () {
                        this.shuffle();
                    }
                }
            },
            stateClass: {
                shuffled: "jp-state-shuffled"
            }
        }, this.state);

        this.playlist = []; // Array of Objects: The current playlist displayed (Un-shuffled or Shuffled)
        this.original = []; // Array of Objects: The original playlist

        this._initPlaylist(this.state.playlist); // Copies playlist to this.original. Then mirrors this.original to this.playlist. Creating two arrays, where the element pointers match. (Enables pointer comparison.)

        // Setup the css selectors for the extra interface items used by the playlist.
        this.cssSelector.details = this.cssSelector.cssSelectorAncestor + " .jp-details"; // Note that jPlayer controls the text in the title element.
        this.cssSelector.playlist = this.cssSelector.cssPlaylistOptionsSelector + " .jp-playlist";
        this.cssSelector.next = this.cssSelector.cssSelectorAncestor + " .jp-next";
        this.cssSelector.previous = this.cssSelector.cssSelectorAncestor + " .jp-previous";
        this.cssSelector.shuffle = this.cssSelector.cssSelectorAncestor + " .jp-shuffle";
        this.cssSelector.shuffleOff = this.cssSelector.cssSelectorAncestor + " .jp-shuffle-off";

        this.options.cssSelectorAncestor = this.cssSelector.cssSelectorAncestor;

        this.options.repeat = () => this.loop = event.jPlayer.options.loop;         
        this.event.onEnded = () => this.next();
        this.event.onPlay = () => this.jPlayer.pauseOthers();
        this.jPlayer.jPlayerElement.addEventListener(this.jPlayer.event.ready, () => this._init());
        this.jPlayer.jPlayerElement.addEventListener(this.jPlayer.event.resize, () => {
            if (event.jPlayer.options.fullScreen) {
                this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: ""}));
            } else {
                this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: "none"}));
            }
        });

        // Put the title in its initial display state
        if (!this.options.fullScreen) {
            this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: "none"}));
        }

        // Create .on() handlers for the playlist items along with the free media and remove controls.
        this._createItemHandlers();

        //Remove the looped class from the jPlayer as it's initialy incorrectly set in the original _updateButtons
        //$(this.cssSelector.jPlayer).data().jPlayer.removeStateClass("looped");

        //Add a new stateClass for the extra loop option
        merge(this.options,{
            stateClass: {
                looped_playlist: "jp-state-looped-playlist"
            }
        });

        //Set the jPlayer options to extend these options
        //$.extend(true, $(this.cssSelector.jPlayer).data().jPlayer.options, this.options);

        this.event.onRepeat = () => {
            var guiAction = typeof event === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
            if (guiAction && this.options.useStateClassSkin && this.options.loop === "loop-playlist") {
                this._loop("off");
            } else if (guiAction && this.options.useStateClassSkin && this.options.loop === "off") {
                this._loop("loop");
                this.addStateClass("looped");
            }
            else {
                this.addStateClass("looped_playlist");
                this.removeStateClass("looped");
                this._loop("loop-playlist");
            }
        };

        this.setState({playlistComponent: this.playlist.map((media, i) => this._createListItem(media, i))});
        
        // $(this.cssSelector.jPlayer).data().jPlayer._updateButtons = function (playing) {
        //     if (playing === undefined) {
        //         playing = !this.status.paused;
        //     } else {
        //         this.status.paused = !playing;
        //     }
        //     // Apply the state classes. (For the useStateClassSkin:true option)
        //     if (playing) {
        //         this.addStateClass("playing");
        //     } else {
        //         this.removeStateClass("playing");
        //     }
        //     if (!this.status.noFullWindow && this.options.fullWindow) {
        //         this.addStateClass("fullScreen");
        //     } else {
        //         this.removeStateClass("fullScreen");
        //     }
        //     //Three types of loop states: Off, Loop, Loop-Playlist
        //     if (this.options.loop === "loop") {
        //         this.addStateClass("looped");
        //     }
        //     else if (this.options.loop === "loop-playlist") {
        //         this.addStateClass("looped_playlist");
        //         this.removeStateClass("looped");
        //     }
        //     else {
        //         this.removeStateClass("looped_playlist");
        //     }

        //     // Toggle the GUI element pairs. (For the useStateClassSkin:false option)
        //     if (this.css.jq.play.length && this.css.jq.pause.length) {
        //         if (playing) {
        //             this.css.jq.play.hide();
        //             this.css.jq.pause.show();
        //         } else {
        //             this.css.jq.play.show();
        //             this.css.jq.pause.hide();
        //         }
        //     }
        //     if (this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length) {
        //         if (this.status.noFullWindow) {
        //             this.css.jq.fullScreen.hide();
        //             this.css.jq.restoreScreen.hide();
        //         } else if (this.options.fullWindow) {
        //             this.css.jq.fullScreen.hide();
        //             this.css.jq.restoreScreen.show();
        //         } else {
        //             this.css.jq.fullScreen.show();
        //             this.css.jq.restoreScreen.hide();
        //         }
        //     }
        //     if (this.css.jq.repeat.length && this.css.jq.repeatOff.length) {
        //         if (this.options.loop) {
        //             this.css.jq.repeat.hide();
        //             this.css.jq.repeatOff.show();
        //         } else {
        //             this.css.jq.repeat.show();
        //             this.css.jq.repeatOff.hide();
        //         }
        //     }
        // }
    }
    option = (option, value) => { // For changing playlist options only
        if (value === undefined) {
            return this.options.playlistOptions[option];
        }

        this.options.playlistOptions[option] = value;

        switch (option) {
            case "enableRemoveControls":
                this._updateControls();
                break;
            case "itemClass":
            case "freeGroupClass":
            case "freeItemClass":
            case "removeItemClass":
                this._refresh(true); // Instant
                this._createItemHandlers();
                break;
        }
        return this;
    }
    _init = () => {
        this._refresh(function () {
            if (this.options.playlistOptions.autoPlay) {
                this.play(this.current);
            } else {
                this.select(this.current);
            }
        });
    }
    _initPlaylist = (playlist) => {
        this.current = 0;
        this.shuffled = false;
        this.removing = false;
        this.original = Object.assign([], playlist); // Copy the Array of Objects
        this._originalPlaylist();
    }
    _originalPlaylist = () => {
        // Make both arrays point to the same object elements. Gives us 2 different arrays, each pointing to the same actual object. ie., Not copies of the object.
        this.playlist = [...this.original]; 
    }
    _refresh = (instant) => {
        /* instant: Can be undefined, true or a function.
            *	undefined -> use animation timings
            *	true -> no animation
            *	function -> use animation timings and excute function at half way point.
            */

        // if (instant && !$.isFunction(instant)) {
        //     $(this.cssSelector.playlist + " ul").empty();
        //     $.each(this.playlist, function (i) {
        //         $(this.cssSelector.playlist + " ul").append(this._createListItem(this.playlist[i]));
        //     });
        //     this._updateControls();
        // } else {
        //     var displayTime = $(this.cssSelector.playlist + " ul").children().length ? this.options.playlistOptions.displayTime : 0;

        //     $(this.cssSelector.playlist + " ul").shuffleSlideUp(displayTime, function () {
        //         var $this = $(this);
        //         $(this).empty();

        //         $.each(this.playlist, function (i) {
        //             $this.append(this._createListItem(this.playlist[i]));
        //         });
        //         this._updateControls();
        //         if ($.isFunction(instant)) {
        //             instant();
        //         }
        //         if (this.playlist.length) {
        //             $(this).slideDown(this.options.playlistOptions.displayTime);
        //         } else {
        //             $(this).show();
        //         }
        //     });
        // }
    }
    _createListItem = (media, index) => {
        var freeMedia;
        
        // Create links to free media
        // if (media.free) {
        //     var first = true;
        //     listItem += "<span class='" + this.props.freeGroupClass + "'>(";

        //     for(var i = 0; i < media.length; i++){
        //         var value = media[i];

        //         // Check property is a media format.
        //         if (this.jPlayer.format[i]){
        //             if (first) {
        //                 first = false;
        //             } else {
        //                 listItem += " | ";
        //             }
        //             listItem += "<a class='" + this.props.freeItemClass + "' href='" + value + "' tabindex='-1'>" + i + "</a>";
        //         }
        //     }
        //     listItem += ")</span>";
        // }
        <Motion style={{heightToInterpTo: spring(this.state.shuffleSlideUp ? this.shuffleAnimMaxHeight : this.shuffleAnimMinHeight, this.props.shuffleAnimation)}} onRest={() => this.state.shuffleSlideUp ? this._shuffleAnimationCallback() : null}>
            {(values) => <ul style={{
                transform: `translate3d(0, ${values.heightToInterpTo}%, 0)`}}>
                    {this.state.playlistComponent}
                </ul>}
        </Motion>      
        var listItem = (   
            <Motion key={index} style={{heightToInterpTo: spring(this.state.removeSlideUp ? this.removeAnimMaxHeight : this.removeAnimMinHeight, this.props.removeAnimation)}} onRest={() => this._removeAnimationCallback()}>                
                {(values) => 
                    <li style={{transform: `translate3d(0, ${values.heightToInterpTo}%, 0)`}}>
                        <div>
                            <a href="javascript:;" class={this.props.removeItemClass} onClick={this.remove}>&times;</a>
                            {/*The title is given next in the HTML otherwise the float:right on the free media corrupts in IE6/7*/}
                            <a href="javascript:;" class={this.props.itemClass} tabIndex="0"> 
                                <img src={media.poster}/>
                                {media.title}                 
                                {(media.artist ? <span class="jp-artist">by {media.artist}</span> : null)}
                            </a>
                        </div>
                    </li>
                }
            </Motion>     
        );

        return listItem;
    }
    _createItemHandlers = () => {
        // // Create live handlers for the playlist items
        // $(this.cssSelector.playlist).off("click", "a." + this.options.playlistOptions.itemClass).on("click", "a." + this.options.playlistOptions.itemClass, function (e) {
        //     e.preventDefault();
        //     var index = $(this).parent().parent().index();
        //     if (this.current !== index) {
        //         this.play(index);
        //     } else {
        //         $(this.cssSelector.jPlayer).jPlayer("play");
        //     }
        //     this.blur(this);
        // });

        // // Create live handlers that disable free media links to force access via right click
        // $(this.cssSelector.playlist).off("click", "a." + this.options.playlistOptions.freeItemClass).on("click", "a." + this.options.playlistOptions.freeItemClass, function (e) {
        //     e.preventDefault();
        //     $(this).parent().parent().find("." + this.options.playlistOptions.itemClass).click();
        //     this.blur(this);
        // });

        // // Create live handlers for the remove controls
        // $(this.cssSelector.playlist).off("click", "a." + this.options.playlistOptions.removeItemClass).on("click", "a." + this.options.playlistOptions.removeItemClass, function (e) {
        //     e.preventDefault();
        //     var index = $(this).parent().parent().index();
        //     this.remove(index);
        //     this.blur(this);
        // });
    }
    _updateControls = () => {
        if (this.options.playlistOptions.enableRemoveControls) {
            this.setState(previousState => previousState.removeItemClassStyle = Object.assign({}, previousState.removeItemClassStyle, {display: ""}));
        } else {
            this.setState(previousState => previousState.removeItemClassStyle = Object.assign({}, previousState.removeItemClassStyle, {display: "none"}));
        }

        if (this.shuffled) {
            this.jPlayer.addStateClass("shuffled");
        } else {
            this.jPlayer.removeStateClass("shuffled");
        }
        if (!this.options.useStateClassSkin) {
            if (this.shuffled) {
                this.setState(previousState => previousState.shuffleOffStyle = Object.assign({}, previousState.shuffleOffStyle, {display: ""}));
                this.setState(previousState => previousState.shuffle = Object.assign({}, previousState.shuffle, {display: "none"}));
            } else {
                this.setState(previousState => previousState.shuffleOffStyle = Object.assign({}, previousState.shuffleOffStyle, {display: "none"}));
                this.setState(previousState => previousState.shuffle = Object.assign({}, previousState.shuffle, {display: ""}));
            }
        }
    }
    _highlight = (index) => {
        var currentPlaylistClass = "currentPlaylistClass_" + index;

        if (this.playlist.length && index !== undefined) {
            this.setState(previousState => { 
                if (previousState[currentPlaylistClass]) {
                    return ({currentPlaylistClass: previousState[currentPlaylistClass].replace("jp-playlist-current", "").trim()})
                }
            });
            this.setState(previousState => {
			    if (previousState[currentPlaylistClass] && !previousState[currentPlaylistClass].includes("jp-playlist-current")){
				    return { currentPlaylistClass: previousState[currentPlaylistClass] + " " + "jp-playlist-current" }
                }
            });
        }
    }
    setPlaylist = (playlist) => {
        this._initPlaylist(playlist);
        this._init();
    }
    add = (media, playNow) => {
        $(this.cssSelector.playlist + " ul").append(this._createListItem(media)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime);
        this._updateControls();
        this.original.push(media);
        this.playlist.push(media); // Both array elements share the same object pointer. Comforms with _initPlaylist(p) system.

        if (playNow) {
            this.play(this.playlist.length - 1);
        } else {
            if (this.original.length === 1) {
                this.select(0);
            }
        }
    }
    remove = (e, index) => {
        debugger
        if (e === undefined) {
            this._initPlaylist([]);
            this._refresh(function () {
                this.jPlayer.clearMedia();
            });
            return true;
        } else {           
            this.setState({removeSlideUp: true});
        }
    }
    select = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.playlist.length) {
            this.current = index;
            this._highlight(index);
            this.jPlayer.setMedia(this.playlist[this.current]);
        } else {
            this.current = 0;
        }
    }
    play = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.playlist.length) {
            if (this.playlist.length) {
                this.select(index);
                this.jPlayer.play();
            }
        } else if (index === undefined) {
            this.jPlayer.play();
        }
    }
    pause = () => {
        this.jPlayer.pause();
    }
    next = (forcePlayNextTrack) => {
        var index = (this.current + 1 < this.playlist.length) ? this.current + 1 : 0;

        if (this.loop === "loop" && !forcePlayNextTrack) {
            this.play(this.current);
        }
        else if (this.loop === "loop-playlist") {
            // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
            if (index === 0 && this.shuffled && this.options.playlistOptions.shuffleOnLoop && this.playlist.length > 1) {
                this.shuffle(true, true); // playNow
            } else {
                this.play(index);
            }
        }
        else {
            // The index will be zero if it just looped round
            if (index > 0) {
                this.play(index);
            }
        }
    }
    previous = () => {
        var index = (this.current - 1 >= 0) ? this.current - 1 : this.playlist.length - 1;

        if (this.loop === "loop-playlist" && this.options.playlistOptions.loopOnPrevious || index < this.playlist.length - 1) {
            this.play(index);
        }
    }
    shuffle = (shuffled, playNow) => {
        this.setState({shuffleSlideUp: shuffled});
        this.playNow = playNow;  
    }
    _removeAnimationCallback = (index) => {
        debugger
        // $(this).remove();

        // if (this.shuffled) {
        //     var item = this.playlist[index];
        //     for (var i = 0; i < this.original.length; i++){
        //         if (this.original[i] === item) {
        //             this.original.splice(i, 1);
        //             break;
        //         }
        //     }
        //     this.playlist.splice(index, 1);
        // } else {
        //     this.original.splice(index, 1);
        //     this.playlist.splice(index, 1);
        // }

        // if (this.original.length) {
        //     if (index === this.current) {
        //         this.current = (index < this.original.length) ? this.current : this.original.length - 1; // To cope when last element being selected when it was removed
        //         this.select(this.current);
        //     } else if (index < this.current) {
        //         this.current--;
        //     }
        // } else {
        //     this.jPlayer.clearMedia();
        //     this.current = 0;
        //     this.shuffled = false;
        //     this._updateControls();
        // }

        // this.removing = false;
    }
    _shuffleAnimationCallback = () => {
        this.shuffled = !this.shuffled;
        
        if (this.shuffled) {
            this.playlist.sort(function () {
                return 0.5 - Math.random();
            });
        } else {
            this._originalPlaylist();
        }
        this._refresh(true); // Instant

        if (this.playNow || !this.jPlayer.status.paused) {
            this.play(0);
        } else {
            this.select(0);
        }

        setTimeout(() => this.setState({shuffleSlideUp: false}), 0);
    }
    blur = (that) => {
        if (this.jPlayer.options.autoBlur) {
            that.blur();
        }
    }
    componentDidMount(){
        this._setup();
    }
    render() {
        return (
            <div>
                <div id="jp_container_playlist">
                    <div class="jp-playlist">
                        <Motion style={{heightToInterpTo: spring(this.state.shuffleSlideUp ? this.shuffleAnimMaxHeight : this.shuffleAnimMinHeight, this.props.shuffleAnimation)}} onRest={() => this.state.shuffleSlideUp ? this._shuffleAnimationCallback() : null}>
                            {(values) => <ul style={{
                                transform: `translate3d(0, ${values.heightToInterpTo}%, 0)`}}>
                                    {this.state.playlistComponent}
                                </ul>}
                        </Motion>      
                    </div>
                </div>
                <JPlayer ref={(jPlayer) => this.jPlayer = jPlayer} {...this.state} {...this.event} >
                    {/*this.props.children.type*/}
                </JPlayer>
            </div>
        );
    }
}