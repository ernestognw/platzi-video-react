import React from "react";
import Media from "./media.js";
import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';
import Pause from '../../icons/components/pause';
import FullScreen from '../../icons/components/full-screen';
import "./playlist.css";

function Playlist(props) {
    const categories = props.data.categories;
    return (
      <div>
        {categories.map(item => {
          return (
            <div>
                <h2>
                    {item.title}
                </h2>
                <Play 
                size={20}
                color="red"
                />
                <Volume 
                size={20}
                color="gray"
                />
                <Pause 
                size={20}
                color="blue"
                />
                <FullScreen 
                size={20}
                color="green"
                />
                <div className="playlist">
                    {item.playlist.map(list => {
                        return (
                            <Media {...list} key={list.id} />
                        );
                    })}
                </div>
            </div>
                );
        })}
      </div>
    );
}

export default Playlist;
