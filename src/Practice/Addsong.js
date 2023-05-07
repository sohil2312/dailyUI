import { useDispatch, useSelector } from "react-redux";
import { Randomsong } from "../Data";
import { addSong ,removeSong} from "../Store";



function SongPlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector((state)=>{
    return state.songr
  });

  const handleSongAdd = (song) => {
    const action = addSong(song);
    dispatch(action)
  };
  const handleSongRemove = (song) => {
    const action = removeSong(song);
    dispatch(action)
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      
      <li key={song} >
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="btn btn-danger float-end"
        >
          X
        </button>
      </li>
     
    );
  });

  return (
    <div className="content ">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons ">
          <button
            onClick={() => handleSongAdd(Randomsong())}
            className="button is-link "
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
