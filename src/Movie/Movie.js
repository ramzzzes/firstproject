import "../Movie/Movie.css"
import moment from 'moment'

const Movie = ({movieUrl,title,width = 100,moviePoster,releaseDate}) => {

 
    const calculateDate = date => {
        var now = moment(new Date()); //todays date
        var end = moment(date); // another date
        var duration = moment.duration(now.diff(end));
        var years = duration.asYears();

        return Math.round(years)
    }


    return (
        <div>
            <p>{title}</p>
            <img
                className={moviePoster}
                width={width}
                src={movieUrl}
            />
            <p>this movie was released {calculateDate(releaseDate)} years ago</p>
        </div>
    )
}

export default Movie